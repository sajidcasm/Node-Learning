import nodemailer from "nodemailer";

const sendOtpEmail = async (to, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to,
    subject: "Your verification code",
    text: `Your OTP is ${otp}. It expires in 10 minutes.`,
  });
};

export default sendOtpEmail;
