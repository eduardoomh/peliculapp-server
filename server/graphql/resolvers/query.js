const PeliculaController = require("../../controllers/pelicula");
const GeneroController = require("../../controllers/genero");

module.exports = {
    Query: {
        getPeliculas: (parent, {input}, context, info) => PeliculaController.obtenerPeliculas(input),
        getPelicula: (parent, {id}, context, info) => PeliculaController.obtenerPelicula(id),

        getGeneros: (parent, args, context, info) => GeneroController.obtenerGeneros(),
        getGenero: (parent, {id}, context, info) => GeneroController.obtenerGenero(id),

        prueba: () => PeliculaController.prueba()
    }
}