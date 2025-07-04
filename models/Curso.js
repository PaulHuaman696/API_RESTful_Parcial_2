const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  curso: {
    type: String,
    required: true,
    trim: true
  },
  creditos: {
    type: Number,
    required: true
  },
  horasSemanal: {
    type: Number,
    required: true
  },
  ciclo: {
    type: Number,
    required: true
  },
  idDocente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Docente', // Referencia al modelo Docente
    required: false // Puede que un curso se cree sin docente asignado
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Curso', cursoSchema);