const express = require('express')


const app = express();
 app.get('/', (req, res) => res.json({msg: 'welcome to the contact API '}))


 const PORT = process.env.PORT || 5000;
app.use('/api/users', requi)
app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`) )
