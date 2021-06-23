const express = require('express');
const router  = express.Router();


// @route GET api/auth
// @desc Get logged in user
// @access Private
router.get('/', (req, res) => {
    res.send('Get logged a user')
})


module.exports = router;  