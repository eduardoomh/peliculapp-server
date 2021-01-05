const mongoose = require("mongoose");

const GeneroSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: false
    },
    icono: {
        type: String,
        require: false,
        default: "icono"
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now()
    }
});

const Genero = mongoose.model("Genero", GeneroSchema);

module.exports = Genero;