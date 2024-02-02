const { AORModel } = require("../model/AORModel");

// This is a middleware which checks the user is previously exists or not
const CheckUserExistance = async (req, res, next) => {
  const { email, role } = req.body;
  const user = await AORModel.findOne({
    email: email,
  });
  if (user) {
    if (user.role.includes(role)) {
      return res.status(403).json({
        status: "failed",
        message: "It seems you already have an account, please Login instead.",
      });
    } else {
      next();
    }
  } else {
    next();
  }
};

module.exports = { CheckUserExistance };
