const express = require("express");
const protect = require("../middleware/authMiddleware");
const { userRegisterController, loginController } = require("../controller/userRouteController");
router = express.Router()

router.post("/register", userRegisterController);

router.post("/login", loginController)


module.exports = router
