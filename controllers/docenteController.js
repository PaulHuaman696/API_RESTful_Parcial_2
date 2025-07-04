const Docente = require('../models/Docente');

// GET /api/docentes -> Listar todos los docentes
const listarDocentes = async (req, res) => {
  try {
    const docentes = await Docente.find();
    res.json(docentes);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al obtener los docentes' });
  }
};

// POST /api/docentes -> Agregar un nuevo docente
const agregarDocente = async (req, res) => {
  // Evitar correos duplicados
  const { correo } = req.body;
  const existeDocente = await Docente.findOne({ correo });

  if (existeDocente) {
    return res.status(400).json({ msg: 'El correo ya está registrado' });
  }

  try {
    const nuevoDocente = new Docente(req.body);
    await nuevoDocente.save();
    res.status(201).json(nuevoDocente);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al agregar el docente', error: error.message });
  }
};

// GET /api/docentes/:id -> Obtener un docente por ID
const obtenerDocentePorId = async (req, res) => {
    try {
      const docente = await Docente.findById(req.params.id);
      if (!docente) {
        return res.status(404).json({ msg: 'Docente no encontrado' });
      }
      res.json(docente);
    } catch (error) {
      res.status(500).json({ msg: 'Hubo un error al obtener el docente' });
    }
  };

// PUT /api/docentes/:id -> Actualizar un docente
const actualizarDocente = async (req, res) => {
  try {
    const docenteActualizado = await Docente.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!docenteActualizado) {
      return res.status(404).json({ msg: 'Docente no encontrado' });
    }
    res.json(docenteActualizado);
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al actualizar el docente' });
  }
};

// DELETE /api/docentes/:id -> Eliminar un docente
const eliminarDocente = async (req, res) => {
  try {
    const docente = await Docente.findByIdAndDelete(req.params.id);
    if (!docente) {
      return res.status(404).json({ msg: 'Docente no encontrado' });
    }
    // Opcional: ¿Qué pasa con los cursos que tenían este docente?
    // Se podría poner el idDocente de esos cursos a null.
    // await Curso.updateMany({ idDocente: req.params.id }, { idDocente: null });
    res.json({ msg: 'Docente eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Hubo un error al eliminar el docente' });
  }
};

module.exports = {
  listarDocentes,
  agregarDocente,
  obtenerDocentePorId,
  actualizarDocente,
  eliminarDocente
};