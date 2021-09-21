const express = require("express");
const router = express.Router();

// @routes GET api/contacts
// @desc Get all users contact
// @access Private


router.post('/', (req, res) =>{
    res.send('Add contact')
} )

// @routes POST api/contacts/:id
// @desc Get all users contact
// @access Private


router.put('/:id', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;