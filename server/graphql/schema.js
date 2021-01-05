const { gql } = require("apollo-server-express");
const typeDefs = gql`

#TIPOS--------------------------------

    type Pelicula{
        id: ID!
        titulo: String!
        descripcion: String!
        year: String!
        opinion: Opinion
        imagen: String
        generos: [Genero]!
        reparto: [Actor]!
        disponibilidad: [String]!
        valoracion: PeliculaValoracionEnum!
        actualizado: Boolean!
        fechaCreacion: String!
        fechaActualizacion: String!
    }

    type Genero{
        id: ID!
        nombre: String!
        descripcion: String
        icono: String
        peliculas(paginacion: PaginacionInput!): [Pelicula]
        fechaCreacion: String!
        fechaActualizacion: String!
    }

    type Opinion{
        puntos_favorables: [String]
        puntos_negativos: [String]
        veredicto_final: String
        calificacion: Float
    }

    type Actor{
        id: ID!
        nombre: String!
        imagen: String!
    }

    #INPUTS----------------------------------------

    input PaginacionInput{
        cantidad: Int!
        pagina: Int!
    }
    input NewActorInput{
        nombre: String!
        imagen: String!
    }

    input UpdateActorInput{
        nombre: String
        imagen: String
    }



    input NewPeliculaInput{
        titulo: String!
        descripcion: String!
        year: String!
        imagen: String!
        disponibilidad: [String]!
        reparto: [NewActorInput]!
    }

    input UpdatePeliculaInput{
        titulo: String
        descripcion: String
        year: String
        imagen: String
        disponibilidad: [String]
        reparto: [UpdateActorInput]
        generos: [ID]
        opinion: UpdateOpinionInput
        valoracion: PeliculaValoracionEnum
        actualizado: Boolean
    }

    input NewGeneroInput{
        nombre: String!
        descripcion: String
        icono: String
    }

    input UpdateGeneroInput{
        nombre: String
        descripcion: String
        icono: String
    }

    input UpdateOpinionInput{
        puntos_favorables: [String]
        puntos_negativos: [String]
        veredicto_final: String,
        calificacion: Float
    }

    input UpdateActor{
        nombre: String
        imagen: String
    }

    #ENUMS--------------------------------------------

    enum PeliculaValoracionEnum{
        INCREIBLE
        BUENA,
        ACEPTABLE,
        MALA
    }
 
    #TIPOS QUERY Y MUTATION------------------------------------------------
    
    type Query{
        getPeliculas(input: PaginacionInput!): [Pelicula]!
        getPelicula(id: ID!): Pelicula!
        getGenero(id: ID!): Genero!
        getGeneros: [Genero]!
        prueba: String!
    }

    type Mutation{
        newPelicula(input: NewPeliculaInput!): Pelicula!
        newGenero(input: NewGeneroInput!): Genero!
        updatePelicula(id: ID! input: UpdatePeliculaInput!): Pelicula!
        updateGenero(id: ID! input: UpdateGeneroInput!): Genero!
    }

`;

module.exports = typeDefs;