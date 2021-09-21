const express = require("express");
const router = express.Router();

// @routes GET api/auth
// @desc get logged in user
// @access Private


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;