const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const config = require("config");

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
        try{
            let user = await 
        } catch (err) {

        }
    }

)


module.exports = router;