 const jwt = require('jsonwebtoken');
 const config = require('config');

 module.exports = function(req, res, next){
// Get the token from header

const token = req.header('x-auth-token')
 
// check if not token
if(!token) {
    
}
}