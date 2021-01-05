const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config({path: '.env'});

const app = express();
const typeDefs = require("./graphql/schema");
const { Query } = require("./graphql/resolvers/query");
const { Mutation } = require("./graphql/resolvers/mutation");
const { Genero } = require("./graphql/resolvers/genero");
const { Pelicula } = require("./graphql/resolvers/pelicula");

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query,
        Mutation,
        Genero,
        Pelicula
    },
    context: ({request}) => {

        return request
    }
})

server.applyMiddleware({app});

const PORT = process.env.PORT | 4000;
mongoose.connect(`mongodb+srv://administrador:wilsonmaniaco@moviesdb.x6elw.mongodb.net/moviesdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    app.listen(PORT, () => {
        console.log(`servidor de peliculas corriendo en la direccion http://localhost:${PORT}/graphql`);
    })
}).catch((err)=>{
    console.log(err);
})

