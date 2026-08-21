import User from "../models/User.js";
import KycVerification from "../models/KycVerification.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import sendOtpEmail from "../utils/sendOtpEmail.js";

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

export const signup = async (req, res) => {
  try {
    const { name, email, phone_number, password } = req.body;

    if (!name || !email || !phone_number || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingEmail = await User.findOne({
      where: {
        email,
      },
    });

    if (existingEmail) {
      return res.status(409).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const user = await User.create({
      name,
      email,
      phone_number,
      password: hashedPassword,
      otp_code: otp,
      otp_expires_at: otpExpiresAt,
    });

    await sendOtpEmail(user.email, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email. Please verify to continue.",
      data: {
        id: user.id,
        email: user.email,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required",
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.is_verified) {
      return res.status(409).json({
        success: false,
        message: "Email is already verified",
      });
    }

    if (user.otp_code !== otp) {
      return res.status(401).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (new Date() > user.otp_expires_at) {
      return res.status(401).json({
        success: false,
        message: "OTP has expired",
      });
    }

    user.is_verified = true;
    user.otp_code = null;
    user.otp_expires_at = null;
    await user.save();

    const token = generateToken(user);

    return res.status(200).json({
      success: true,
      message: "Email verified successfully",
      accessToken: token,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const login = async (req, res) => {
  try {
    // console.log(req.body);
    // res.status(200).json({
    //   success: true,
    //   message: "Login Controller Hit",
    // });

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (!user.is_verified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in",
      });
    }

    user.token_version += 1;
    await user.save();

    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: {
        exclude: ["password"],
      },
      include: [
        {
          model: KycVerification,
          attributes: ["status"],
          required: false,
        },
      ],
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
