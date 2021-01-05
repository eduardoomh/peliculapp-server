const Genero = require("../../models/Genero");

module.exports = {
    Pelicula: {
        opinion: ({opinion}, args, context, info) => {

            return opinion;
        },
        reparto: ({reparto}, args, context, info) => {

            return reparto;
        },
        generos: async ({generos}, args, context, info) => {

            try{
                let generosArrays = [];


                for await (id of generos) {
                    let generoObjeto = await Genero.findOne(id);
                    generosArrays.push(generoObjeto);

                }

                return generosArrays; 

            }
            catch(err){
                console.log(err);
            }

        }
    }
}