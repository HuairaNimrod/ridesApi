const swaggerAutogen = require('swagger-autogen')();

// 
const doc = {
    info: {
      title: 'My API',
      description: 'Rides API'
    },
    // host: 'localhost:8080', // for localhost 
    // schemes: ['http'] // for localhost
    host: 'ridesApi.onrender.com', // for production 'localhost:8080'
    schemes: ['https'] // for production 
  };


const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);