const express = require("express");
const router = express.Router();

// @routes GET api/auth
// @desc get logged in user
// @access Private


router.get('/', (req, res) =>{
    res.send('Get logged in user')
} )

// @routes GET api/auth
// @desc Auth user 
// @access Private


router.get('/', (req, res) =>{
    res.send('Get logged in user')
} )


module.exports = router;