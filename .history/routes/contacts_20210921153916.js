const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc Get all users contact
// @access Private


router.post('/', (req, res) =>{
    res.send('Add contact')
} )





module.exports = router;