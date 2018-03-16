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

app.get('/api/customers', (req, res)=> {
	const teas = [
		{id: 1, firstName: 'John', lastName: 'Dough'},
		{id: 2, firstName: 'Ramona', lastName: 'Quimby'},
		{id: 3, firstName: 'Bill', lastName: 'Bixby'},
		{id: 4, firstName: 'Squitten', lastName: 'Good'},
		{id: 5, firstName: 'Squitten', lastName: 'Bad'}
	];
	res.json(teas);
});

// ===========Routes==================
// require('./routes/html-routes.js')(app);
// require('./routes/api-routes.js')(app);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
});