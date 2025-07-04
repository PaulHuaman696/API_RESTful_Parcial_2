const express = require('express');
const {
  listarCursos,
  agregarCurso,
  obtenerCursoPorId,
  obtenerCursosPorCiclo,
  actualizarCurso,
  eliminarCurso
} = require('../controllers/cursoController');

const router = express.Router();

// Rutas para la gestión de cursos

// GET /api/cursos -> Listar todos los cursos
router.get('/', listarCursos);

// POST /api/cursos -> Agregar un nuevo curso
router.post('/', agregarCurso);

// GET /api/cursos/ciclo/:ciclo -> Obtener cursos por ciclo
// Nota: La ruta es más explícita para evitar conflictos con /:id
router.get('/ciclo/:ciclo', obtenerCursosPorCiclo);

// GET /api/cursos/:id -> Obtener un curso por ID
router.get('/:id', obtenerCursoPorId);

// PUT /api/cursos/:id -> Actualizar un curso
router.put('/:id', actualizarCurso);

// DELETE /api/cursos/:id -> Eliminar un curso
router.delete('/:id', eliminarCurso);

module.exports = router;