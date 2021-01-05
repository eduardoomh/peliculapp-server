const PeliculaController = require("../../controllers/pelicula");
const GeneroController = require("../../controllers/genero");

module.exports = {
    Mutation: {
        newPelicula: (parent, {input}, context, info) => PeliculaController.crearPelicula(input),
        updatePelicula: (parent, {id, input}, context, info) => PeliculaController.actualizarPelicula(id, input),

        newGenero: (parent, {input}, context, info) => GeneroController.crearGenero(input),
        updateGenero: (parent, {id, input}, context, info) => GeneroController.actualizarGenero(id, input),

    }
}