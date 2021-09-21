const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc Get all users contact
// @access Private


router.post('/', (req, res) =>{
    res.send('Add er')
} )

// @routes POST api/contacts
// @desc Get all users contact
// @access Private


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;