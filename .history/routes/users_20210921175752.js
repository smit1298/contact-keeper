const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User')

// @routes POST api/users
// @desc Register a user
// @access Public
router.post('/', [
    check('name', 'Please add name')
    .not()
    .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with six or more characters').isLength({min: 6})
], (req, res) => {
const errors = })

module.exports = router;
