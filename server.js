const express = require('express');
const app = express();
const methodOverride = require('method-override');
app.use(methodOverride('_method'));
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const robotController = require('./controllers/robotController');

app.use('/robots', robotController);

app.listen(3000, () => {
	console.log('I am listening on port 3000');
});