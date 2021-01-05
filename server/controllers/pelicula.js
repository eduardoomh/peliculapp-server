const Pelicula = require("../models/Pelicula");

async function obtenerPeliculas(input){
    const {cantidad, pagina} = input;

    try{
        const peliculas = await Pelicula.find().limit(cantidad).skip((pagina - 1) * cantidad);
        return peliculas;
    }
    catch(err){
        console.log(err);
    }
}

async function obtenerPelicula(id){

}

async function crearPelicula(input){
    try{
        const pelicula = await new Pelicula(input);
        pelicula.save();
        console.log(pelicula)

        return pelicula;
    }
    catch(err){
        console.log(err);
    }
}

async function actualizarPelicula(id, input){
    try{
        const actualizacion = await Pelicula.findOneAndUpdate({_id: id}, {
            ...input,
            fechaActualizacion: Date.now()
        })

        if(!actualizacion || actualizacion.length === 0) throw new Error("La pelicula no ha podido ser actualizada");

        const peliculaActualizada = await Pelicula.findById(id);

        return peliculaActualizada;

    }
    catch(err){
        console.log(err);
    }
}

async function prueba(){
    return "Hola mundo"
}


module.exports = {
    obtenerPeliculas,
    obtenerPelicula,
    crearPelicula,
    actualizarPelicula,
    prueba
}