const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config"); 
const auth = require ('../m')
const { check, validationResult } = require('express-validator');

const User = require('../models/User')


// @routes GET api/auth
// @desc Get logged in user
// @access Private


router.get('/', (req, res) => {
    res.send('Get logged in user')
})

// @routes POST api/auth
// @desc Auth user & get token
// @access Public


router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ msg: 'Invalid Credentials' })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return rse.status(400).json({ msg: 'Invalid Credentials' });
            }

            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, config.get('jwtSecret'),
                {
                    expiresIn: 360000
                }, (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(500).send('Server Error');
        }
    }

)


module.exports = router;