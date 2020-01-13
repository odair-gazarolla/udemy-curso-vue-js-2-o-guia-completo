const app = require('express')()
const consign = require('consign')
const db = require('./config/db')
const mongoose = require('mongoose')
const port = 3000;

require('./config/mongodb')

app.db = db
app.mongoose = mongoose

consign()
	.include('./config/passport.js')
	.then('./config/middlewares.js')
	.then('./api/validation.js')
	.then('./api')
	.then('./schedule')
	.then('./config/routes.js')
	.into(app)

app.listen(port, () => {

	console.log(`Backend Excuting... ${port}`);
})