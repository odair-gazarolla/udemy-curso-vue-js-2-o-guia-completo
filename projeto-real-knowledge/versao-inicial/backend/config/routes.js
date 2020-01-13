const admin = require('./admin')

module.exports = app => {

	app.post('/signup', app.api.user.save)
	app.post('/signin', app.api.auth.signin)
	app.post('/validateToken', app.api.auth.validateToken)

	app.route('/users')
		// .all(app.config.passport.authenticate())
		.post(app.api.user.save)
		.get(app.api.user.get)
 
	app.route('/users/:id')
		.put(app.api.user.save)
		.get(app.api.user.getById)
		.delete(app.api.user.remove)

	app.route('/categories')
		.get(app.api.category.get)
		.post(app.api.category.save)


	app.route('/categories/tree')
		// .all(app.config.passport.authenticate())
		// .get(admin(app.api.category.getTree))
		.get(app.api.category.getTree)

	app.route('/categories/:id')
		.get(app.api.category.getById)
		.put(app.api.category.save)
		.delete(app.api.category.remove)

	app.route('/articles')
		.get(app.api.article.get)
		.post(app.api.article.save)

	app.route('/articles/:id')
		.get(app.api.article.getById)
		.put(app.api.article.save)
		.delete(app.api.article.remove)

	app.route('/categories/:id/articles')
		.get(app.api.article.getByCategory)

	app.route('/stats')
		.get(app.api.stat.get)
}