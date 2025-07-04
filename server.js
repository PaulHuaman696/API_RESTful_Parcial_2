const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const conectarDB = require('./config/db');
const cursoRoutes = require('./routes/cursoRoutes');
const docenteRoutes = require('./routes/docenteRoutes');

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

// Puerto
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});