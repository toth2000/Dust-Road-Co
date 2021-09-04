const express = require("express");
const { loginController, successController } = require("../controller/auth");

const router = express.Router();

// router.post("/signIn", signIn);
// router.post("/signUp", signUp);
router.post("/login", loginController);
router.get("/success", successController);

module.exports = router;
