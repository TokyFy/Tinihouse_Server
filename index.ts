import express from "express";

import {ApolloServer} from 'apollo-server-express';
import {typedefs , resolvers} from "./src/graphql";

const app = express();

const PORT = process.env.PORT || 3000;

(async ()=>{
    const server = new ApolloServer({typeDefs : typedefs , resolvers : resolvers});
    await server.start();
    server.applyMiddleware({app , path : "/graphql"});
    app.listen(PORT);
    console.log(`[app] started on Port ${PORT}`);
})();
