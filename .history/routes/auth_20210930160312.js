const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const router = express.Router();
const jwt = require("jsonwebtoken");
const config = require("config");

// @routes GET api/auth
// @desc Get logged in user
// @access Private


router.get('/', (req, res) =>{
    res.send('Get logged in user')
} )

// @routes POST api/auth
// @desc Auth user & get token
// @access Public
 

router.post('/', (req, res) =>{
    res.send('Log in user')
} )


module.exports = router;