const Curso = require('../models/Curso');

// GET /api/cursos -> Listar todos los cursos
const listarCursos = async (req, res) => {
  try {
    const cursos = await Curso.find().populate('idDocente', 'nombres apellidos'); // populate trae info del docente
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al obtener los cursos' });
  }
};

// POST /api/cursos -> Agregar un nuevo curso
const agregarCurso = async (req, res) => {
  try {
    const nuevoCurso = new Curso(req.body);
    await nuevoCurso.save();
    res.status(201).json(nuevoCurso);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al agregar el curso', error: error.message });
  }
};

// GET /api/cursos/:id -> Obtener un curso por ID
const obtenerCursoPorId = async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id).populate('idDocente', 'nombres apellidos');
    if (!curso) {
      return res.status(404).json({ msg: 'Curso no encontrado' });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al obtener el curso' });
  }
};

// GET /api/cursos/ciclo/:ciclo -> Obtener los cursos por Ciclo
const obtenerCursosPorCiclo = async (req, res) => {
    try {
        const { ciclo } = req.params;
        const cursos = await Curso.find({ ciclo: ciclo }).populate('idDocente', 'nombres apellidos');
        if (cursos.length === 0) {
            return res.status(404).json({ msg: `No se encontraron cursos para el ciclo ${ciclo}` });
        }
        res.json(cursos);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un error al buscar los cursos por ciclo' });
    }
};

// PUT /api/cursos/:id -> Actualizar todos los datos de un curso
const actualizarCurso = async (req, res) => {
  try {
    const cursoActualizado = await Curso.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Devuelve el documento actualizado
    );
    if (!cursoActualizado) {
      return res.status(404).json({ msg: 'Curso no encontrado' });
    }
    res.json(cursoActualizado);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al actualizar el curso' });
  }
};

// DELETE /api/cursos/:id -> Eliminar un curso
const eliminarCurso = async (req, res) => {
  try {
    const curso = await Curso.findByIdAndDelete(req.params.id);
    if (!curso) {
      return res.status(404).json({ msg: 'Curso no encontrado' });
    }
    res.json({ msg: 'Curso eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al eliminar el curso' });
  }
};

module.exports = {
  listarCursos,
  agregarCurso,
  obtenerCursoPorId,
  obtenerCursosPorCiclo,
  actualizarCurso,
  eliminarCurso
};