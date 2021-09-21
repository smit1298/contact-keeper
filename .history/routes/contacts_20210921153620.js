const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc Get all users contact
// @access Pri


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;