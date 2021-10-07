const express = require("express");
const router = express.Router();
const auth = require('../middleware/')
const { check, validationResult } = require('express-validator');

const User = require('../models/User')


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


router.delete('/:id', (req, res) =>{
    res.send('Delete contact')
} )


module.exports = router;