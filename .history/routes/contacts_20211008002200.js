const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User')
const Contact = require('../models/Contact')


// @routes GET api/contacts
// @desc Get all users contact
// @access Private


router.get('/', auth, async (req, res) =>{
try {
    const contacts = await Contact.find({ user: req.user.id}).sort({ date: -1 });
    res.json(contacts)
} catch (err) {
      console.error(err.message);
      res.status(500).send
}} )

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