// swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');
const api_url = process.env.API_BASE_URL;
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
        url: api_url,
        description: 'Servidor de desarrollo'
      },
    ],
  },
  apis: ['./docs/swaggerDocs.js'], // ← Aquí apuntas al archivo con las anotaciones
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
