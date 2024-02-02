const { AORModel } = require("../../../model/AORModel");

const Logout = async (req, res) => {
  // On client, also delete the accessToken
  const cookies = req.cookies;
  if (!cookies?.jwt_rentifai)
    return res.status(200).json({ message: "No content in the token." });
  const refreshToken = cookies.jwt_rentifai;

  // Is refreshToken in db?
  const foundUser = await AORModel.findOne({ refreshToken: refreshToken });

  // secure: true, for production environment
  // sameSite: "None"
  if (!foundUser) {
    res.clearCookie("jwt_rentifai", {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      domain: process.env.DEV_DOMAIN,
    });
    return res.status(200).json({ message: "Token Cleared Successfully." });
  }

  // Delete refreshToken in db
  await AORModel.findOneAndUpdate(
    { refreshToken: refreshToken },
    { refreshToken: "" }
  );

  // secure: true, for production environment
  // sameSite: "None"
  res.clearCookie("jwt_rentifai", {
    httpOnly: true,
    sameSite: "None",
    secure: true,
    domain: process.env.DEV_DOMAIN,
  });
  res.status(200).json({ message: "Token Cleared Successfully." });
};

module.exports = { Logout };
