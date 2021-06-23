const express = require('express');
const router  = express.Router();


// @route GET api/contacts
// @descGet
// @access Public
router.post('/', (req, res) => {
    res.send('Register a user')
})


module.exports = router;