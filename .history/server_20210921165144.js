const express = require('express');
const connectDB = require('./c')

const app = express();

app.get('/', (req, res) => 
res.json({ msg: 'welcome to the contact keeper API...' })
);

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
