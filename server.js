const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

// require our model

const Robots = require('./models/robots');

// Index Route
app.get('/robots', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	});
});

// Show Route
app.get('/robots/:index', (req, res) => {
	res.render('show.ejs', {
		robot: Robots[req.params.index],
		index: req.params.index,
	});
});

// Delete Route
app.delete('/robots/:index', (req, res) => {
	Robots.splice(req.params.index, 1);
	res.redirect('/robots');
});

// Edit Route
app.get('/robots/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		robot: Robots[req.params.index],
		index: req.params.index,
	});
});


app.listen(3000, () => {
	console.log('I am listening on port 3000');
});