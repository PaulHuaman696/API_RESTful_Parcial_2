const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');
const cursoRoutes = require('./routes/cursoRoutes');
const docenteRoutes = require('./routes/docenteRoutes');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig.js');

// Inicializaciones
const app = express();
dotenv.config();

// Conexión a la base de datos
conectarDB();

// Middlewares
app.use(cors()); // Habilitar CORS para permitir peticiones externas
app.use(express.json()); // Habilitar lectura de JSON en el body

// Rutas
app.use('/api/cursos', cursoRoutes);
app.use('/api/docentes', docenteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Ruta de bienvenida
app.get('/', (req, res) => {
  res.send('¡API de Sistema de Gestión Académica funcionando!');
});
// Puerto
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
  console.log(`Documentación de la API disponible en http://localhost:${PORT}/api-docs`);
});