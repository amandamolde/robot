const express = require('express');
const router = express.Router();

// require our model

const Robots = require('../models/robots');

// Index Route
router.get('/', (req, res) => {
	res.render('index.ejs', {
		robots: Robots
	});
});

// Show Route
router.get('/:index', (req, res) => {
	res.render('show.ejs', {
		robot: Robots[req.params.index],
		index: req.params.index,
	});
});

// Delete Route
router.delete('/:index', (req, res) => {
	Robots.splice(req.params.index, 1);
	res.redirect('/robots');
});

// Edit Route
router.get('/:index/edit', (req, res) => {
	res.render('edit.ejs', {
		robot: Robots[req.params.index],
		index: req.params.index,
	});
});

// PUT Request
router.put('/:index', (req, res) => {
	Robots[req.params.index] = req.body;
	res.redirect('/robots');
});

module.exports = router;