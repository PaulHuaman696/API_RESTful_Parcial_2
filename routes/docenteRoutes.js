const express = require('express');
const {
  listarDocentes,
  agregarDocente,
  obtenerDocentePorId,
  actualizarDocente,
  eliminarDocente
} = require('../controllers/docenteController');

const router = express.Router();

// Rutas para la gestión de docentes

// GET /api/docentes -> Listar todos
router.get('/', listarDocentes);

// POST /api/docentes -> Crear uno nuevo
router.post('/', agregarDocente);

// GET /api/docentes/:id -> Obtener por ID
router.get('/:id', obtenerDocentePorId);

// PUT /api/docentes/:id -> Actualizar
router.put('/:id', actualizarDocente);

// DELETE /api/docentes/:id -> Eliminar
router.delete('/:id', eliminarDocente);

module.exports = router;