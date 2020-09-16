'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
    // API_HOST:'"http://39.97.222.157:8080/build-store"',
	API_HOST:'"http://172.16.3.58:8080/build-store"',
	// API_HOST:'"http://172.16.4.134:8080"',
	// API_HOST:'"http://172.16.3.67:8080"',

})
