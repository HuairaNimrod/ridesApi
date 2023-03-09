var express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

const port = process.env.PORT || 8080;
var app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

  mongodb.initDb((err) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
  });
// the preoject start running npm init
// to add express type npm i --save express to save 
// add nodemon with npm i --save-dev nodemon (it restart automatically the node application without stopping it)s
// install dotenv npm install dotenv --save
// install mongodb npm install mongodb
// install body parser $ npm install body-parser
//install swagger $ npm install --save-dev swagger-autogen
// create a file swagger.js and make the reference: const swaggerAutogen = require('swagger-autogen')();

// install swagger UI express : $ npm install swagger-ui-express
// add script to package.json: "swagger": "node ./swagger.js"
// add the swagger routes
// generate swagger.json: node swagger.js
//