const express = require('express');
const router  = express.Router();


// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post('/', (req, res) => {
    res.send('Post new contact')
})

// @route PUT api/contacts:id
// @desc Update contact
// @access Private
router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// @route DELETE api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})


module.exports = router; 