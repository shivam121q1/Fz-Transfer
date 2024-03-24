const express = require('express');
const router = express.Router();

// import route
const {Dashboard}  = require('../controller/Dashboard')

// map router
router.get("/Dashboard" , Dashboard);


// export router
module.exports = router;