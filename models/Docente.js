const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
  apellidos: {
    type: String,
    required: true,
    trim: true
  },
  nombres: {
    type: String,
    required: true,
    trim: true
  },
  profesion: {
    type: String,
    required: true,
    trim: true
  },
  fechaNacimiento: {
    type: Date
  },
  correo: {
    type: String,
    required: true,
    unique: true, // Asegura que no haya correos duplicados
    trim: true
  }
}, {
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = mongoose.model('Docente', docenteSchema);