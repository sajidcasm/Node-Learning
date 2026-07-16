export const signup = async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).json({
      success: true,
      message: "Signup Controller Hit",
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    console.log(req.body);

    res.status(200).json({
      success: true,
      message: "Login Controller Hit",
    });
  } catch (error) {
    console.log(error);
  }
};