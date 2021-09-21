const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc GetRegister a user
// @access Public


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;