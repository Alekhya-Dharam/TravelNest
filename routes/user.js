const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const usersControllers = require("../controllers/users");

router
  .route("/signup")
  .get(usersControllers.renderSignupForm)
  .post(wrapAsync(usersControllers.signUp));

router
  .route("/login")
  .get(usersControllers.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    usersControllers.Login
  );

router.get("/logout", usersControllers.Logout);

module.exports = router;
