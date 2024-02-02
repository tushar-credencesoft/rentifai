const jwt = require("jsonwebtoken");
const { AORModel } = require("../../../model/AORModel");

const VerifyUser = (req, res) => {
  const { email } = req.body;
  try {
    // header sent from the cliant
    const authHeader = req.headers["authorization"];
    if (!authHeader)
      return res.status(401).json({ message: "Token is not ok." });

    const token = authHeader.split(" ")[1];
    // Verify the access token
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Invalid Token." });
      const decodedEmail = decoded.email;
      if (email !== decodedEmail) {
        return res.status(400).json({ message: "Invalid Access Token." });
      } else {
        // checking the users existance in the database
        const userFromDB = await AORModel.findOne({ email: decodedEmail });
        // This Case is added for checking if the fake user came into the website.
        // Then It will detect that user.
        if (!userFromDB) {
          return res
            .status(400)
            .json({ message: "Invalid User, Please Signup Again." });
        }

        return res
          .status(200)
          .json({ success: "OK", message: "Verified user." });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { VerifyUser };
