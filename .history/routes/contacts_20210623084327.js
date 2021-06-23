const express = require('express');
const router  = express.Router();


// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.post('/', (req, res) => {
    res.send('Register a user')
})


module.exports = router;