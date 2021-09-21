const express = require("express");
const router = express.Router();

// @routes GET api/auth
// @desc Register a user
// @access 


router.post('/', (req, res) =>{
    res.send('Register a user')
} )


module.exports = router;