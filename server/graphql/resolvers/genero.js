const Pelicula = require("../../models/Pelicula");

module.exports = {
    Genero: {
        peliculas: async ({id}, {paginacion}, context, info) => {
            const {pagina, cantidad} = paginacion;

            try{
                const peliculas = await Pelicula.find({generos: id}).limit(cantidad)
                                .skip((pagina - 1) * cantidad);
                return peliculas;
            }
            catch(err){
                console.log(err);
            }
            
        }
    }
}