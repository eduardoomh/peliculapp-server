const Genero = require("../models/Genero");

async function obtenerGeneros(){
    try{
        const generos = await Genero.find();
        return generos;
    }
    catch(err){
        console.log(err);
    }
}

async function obtenerGenero(id){
    try{
        const genero = await Genero.findById(id);
        return genero;
    }
    catch(err){
        console.log(err);
    }
}

async function crearGenero(input){
    console.log(input);
    
    try{
        const nuevoGenero = await new Genero(input);
        nuevoGenero.save();
        console.log(nuevoGenero)

        return nuevoGenero;
    }
    catch(err){
        console.log(err)
    }
}

async function actualizarGenero(id, input){
    try{
        const actualizacion = await Genero.findOneAndUpdate({_id: id},{
            ...input,
            fechaActualizacion: Date.now()
        });

        if(!actualizacion || actualizacion.length === 0) throw new Error("El genero no se ha actualizado");

        const generoActualizado = await Genero.findById(id);
        return generoActualizado;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    obtenerGeneros,
    obtenerGenero,
    crearGenero,
    actualizarGenero
}