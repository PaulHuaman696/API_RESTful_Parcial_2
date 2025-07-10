// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestión Académica - Instituto "San Juan"',
      version: '1.0.0',
      description: 'Documentación de la API RESTful para gestionar cursos y docentes, creada con Node.js, Express y MongoDB.',
    },
    servers: [
      {
        url: 'http://ec2-3-129-67-242.us-east-2.compute.amazonaws.com:4000/',
        description: 'Servidor de desarrollo'
      },
    ],
  },
  apis: ['./docs/swaggerDocs.js'], // ← Aquí apuntas al archivo con las anotaciones
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
