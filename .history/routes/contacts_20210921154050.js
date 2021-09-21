const express = require("express");
const router = express.Router();

// @routes POST api/contacts
// @desc Get all users contact
// @access Private


router.post('/', (req, res) =>{
    res.send('Add contact')
} )

// @routes PUT api/contacts/:id
// @desc Update contact
// @access Private


router.put('/:id', (req, res) =>{
    res.send('Update contact')
} )

// @routes DELETE api/contacts/:id
// @desc Delete contact
// @access Private


router.put('/:id', (req, res) =>{
    res.send('D contact')
} )


module.exports = router;