import Country from "../models/Country.js"

export const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();

    return res.status(200).json({
      success: true,
      message: "Countries fetched successfully",
      data: countries,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};