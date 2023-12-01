const routes = require('express').Router();   //helps us to create different routes on this file
const controller = require('../controller/controller')

routes.route('/api/categories')
// .get((req,res)=> res.json("Get Request from Categories"));
 .post(controller.create_Categories);

//create a controller of above request
module.exports = routes;   ///when you make request on this category u will get json response

