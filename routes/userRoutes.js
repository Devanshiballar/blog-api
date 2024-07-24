const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);
router.post("/signin", userController.signin);
router.post("/forgatePassword", userController.sendMailForgat);


module.exports = router;
