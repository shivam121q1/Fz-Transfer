const express = require('express');
const router = express.Router();

// import route
const {Dashboard}  = require('../controller/Dashboard')
const {Login, Signup} = require('../controller/Auth')

// map router
router.get("/Dashboard" , Dashboard);
router.post("/Login",Login)
router.post("/Signup",Signup)



// export router
module.exports = router;