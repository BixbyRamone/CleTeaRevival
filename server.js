const express = require('express');
const mongoose = require('mongoose');


const app = express();

console.log("attempting to start server");

// Map Global Promise (keeps warning from popping up)
mongoose.Promise = global.Promise;
// connect to mongoose
mongoose.connect('mongodb://localhost/cletearev-dev', {
	useMongoClient: true
})
.then(()=> console.log('MongoDB Connected...'))
.catch(err => console.log(err));

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));