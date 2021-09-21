const express = require("express");
const router = express.Router();

// @routes G api/users
// @desc Register a user
// @access Public


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;