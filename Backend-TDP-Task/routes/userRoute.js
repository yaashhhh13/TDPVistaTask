const express = require("express");
const protect = require("../middleware/authMiddleware");
const { userRegisterController,authController, loginController,  } = require("../controller/userRouteController");

router = express.Router()

router.post("/register", userRegisterController);

router.post("/get-user", protect, authController)

router.post("/login", loginController)



module.exports = router
