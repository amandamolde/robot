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

app.delete('/robots/:index', (req, res) => {
	Robots.splice(req.params.index, 1);
	res.redirect('/robots');
});

app.listen(3000, () => {
	console.log('I am listening on port 3000');
});