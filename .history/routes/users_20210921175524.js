const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User')

// @routes POST api/users
// @desc Register a user
// @access Public
router.post('/', [
    check('name', 'name is required')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email'),
    check('password', 'Please enter a password with six or  more characters')
], (req, res) => {
    res.send(req.body)
})

module.exports = router;
