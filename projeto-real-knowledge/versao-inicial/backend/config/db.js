const config = require('../knexfile.js')
const knex = require('knex')(config)

//Optional migrate when start
knex.migrate.latest([config])

module.exports = knex