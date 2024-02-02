const { AORModel } = require("../../../model/AORModel");
const jwt = require("jsonwebtoken");

const RefreshToken = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt_rentifai)
    return res
      .status(401)
      .json({ message: "Invalid Access Token, Please Sign In Again." });
  const refreshToken = cookies.jwt_rentifai;

  const foundUser = await AORModel.findOne({ refreshToken: refreshToken });

  if (!foundUser)
    return res.status(403).json({ message: "User Doesn't Logged In." }); //Forbidden

  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.email)
      return res.status(403).json({ message: "Token is Not OK." });
    const accessToken = jwt.sign(
      { email: decoded.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1h" }
    );
    res.status(200).json({ success: true, accessToken: accessToken });
  });
};

module.exports = { RefreshToken };
