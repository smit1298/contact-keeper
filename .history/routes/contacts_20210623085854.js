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
router.postt('/', (req, res) => {
    res.send('Post new contact')
})

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', (req, res) => {
    res.send('Get all contacts')
})


module.exports = router;