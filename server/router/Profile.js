const express = require('express');
const router = express.Router();

// import route
const {Dashboard}  = require('../controller/Dashboard')
const {Login, Signup} = require('../controller/Auth')

// map router
router.get("/Dashboard" , Dashboard);
router.get("/Login",Login)
router.get("/Signin",Signup)

// export router
module.exports = router;