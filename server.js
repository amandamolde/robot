const express = require('express');
const app = express();

// require our model

const Robots = require('./models/robots');

// Index Route
app.get('/robots', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	});
});

app.listen(3000, () => {
	console.log('I am listening on port 3000');
});