const router = require("express").Router();
const {
  VerifyEmail,
  VerifyOTP,
} = require("../controllers/authentication/email-and-password-authentication/SignUp");
const {
  Login,
} = require("../controllers/authentication/email-and-password-authentication/Login");
const {
  VerifyUser,
} = require("../controllers/authentication/email-and-password-authentication/VerifyUser");
const {
  PasswordLessLogin,
  ValidatingUserAtGmailConsole,
} = require("../controllers/authentication/magic-link-authentication/PasswordLessLogin");
const {
  RefreshToken,
} = require("../controllers/authentication/email-and-password-authentication/RefreshToken");
const {
  Logout,
} = require("../controllers/authentication/email-and-password-authentication/Logout");
const { CheckUserExistance } = require("../middlewares/CheckUsersExistance");
const {
  ForgotPassword,
  GetEmailAndTokenFromEmail,
  ResetPassword,
} = require("../controllers/authentication/email-and-password-authentication/UpdatePassword");
const {
  GoogleLoginFailed,
  GoogleLoginSuccess,
  GoogleLogout,
} = require("../controllers/authentication/google-authentication/googleOauth");
const {
  VerifyPhoneNumber,
} = require("../controllers/authentication/sms-otp-authentication/smsOtpAuth");

router
  .post("/verify-email", CheckUserExistance, VerifyEmail)
  .post("/verify-otp", VerifyOTP)
  .post("/login", Login)
  .get("/refresh-token", RefreshToken)
  .get("/logout", Logout)
  .get("/verify-user", VerifyUser)
  .post("/forgot-password", ForgotPassword)
  .get(
    "/reset-password/:email/:forgotPasswordToken/:role",
    GetEmailAndTokenFromEmail
  )
  .post("/reset-password", ResetPassword)
  .post("/password-less-login", PasswordLessLogin)
  .get("/validate-user", ValidatingUserAtGmailConsole)
  .get("/login/success", GoogleLoginSuccess)
  .get("/login/failed", GoogleLoginFailed)
  .get("/google/logout", GoogleLogout)
  .post("/verify-phone", VerifyPhoneNumber);

module.exports = router;
