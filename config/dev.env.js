'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',

	// API_HOST:'"http://172.16.3.33:8080"',
	API_HOST:'"http://172.16.3.67:8080"',
})
