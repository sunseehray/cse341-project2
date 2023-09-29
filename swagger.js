const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Pantry API',
        description: 'Pantry API'
    },
    host: 'https://pantry-ilig.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);