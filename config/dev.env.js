'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
	API_HOST:'"http://localhost:8080"',
    // API_HOST:'"http://39.102.49.150:8080/build-store"'

})
