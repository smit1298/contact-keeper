 const jwt = require('jsonwebtoken');
 const config = require('config');

 module.exports = function(req, res, next){
// Get the token from header

const token = req.header('x-auth-token')
 
// check if not token
if(!token) {
    return res.status(401).json({msg: " No token, Authorization denied"})
}
try {
    const decoded = jwt.verify
} catch (err) {
    
}
}