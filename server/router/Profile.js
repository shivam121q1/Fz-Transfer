const express = require("express");
const router = express.Router();

import { signUp,sendOtp } from "../controller/User";


router.post("/registerUser",signUp);
router.post("/sendOtp",sendOtp);


module.exports = router;
