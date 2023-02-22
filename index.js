const Express = require('express')
const {samlLogin, samlExtract} = require("/controller.js");
const Router = Express.Router()

/**
 * auth management APIs
 */

Router.get('/saml/login', samlLogin)

Router.post('/saml/callback', samlExtract)
