const mongoose = require("mongoose");

const PeliculaSchema = mongoose.Schema({
    titulo: {
        type: String,
        require: true,
    },
    descripcion: {
        type: String,
        require: true

    },
    year: {
        type: String,
        require: true

    },
    opinion: mongoose.Schema({
        puntos_favorables: [{
            type: String, 
            require: false
        }],
        puntos_negativos: [{
            type: String, 
            require: false
        }],
        veredicto_final: {
            type: String,
            require: false
        },
        calificacion: {
            type: Number,
            require: false
        }
    }),
    imagen: {
        type: String,
        require: false
    },
    reparto: [
        mongoose.Schema({
            nombre: {
                type: String,
                require: null
            },
            imagen: {
                type: String,
                require: null
            }
        })
    ],
    disponibilidad: [{
        type: String
    }],
    generos: [{
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: "Genero"
    }],
    valoracion: {
        type: String,
        enum: ["EXCELENTE", "BUENA", "ACEPTABLE", "MALA"],
        default: "BUENA"
    },
    actualizado: {
        type: Boolean,
        require: true,
        default: true
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

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);

module.exports = Pelicula;