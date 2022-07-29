import express from "express";

import {ApolloServer} from 'apollo-server-express';
import {schema} from './graphql/graphql';

const app = express();

const PORT = process.env.PORT || 3000;

(async ()=>{
    const server = new ApolloServer({schema});
    await server.start();
    server.applyMiddleware({app , path : "/graphql"});
    app.listen(PORT);
    console.log(`[app] started on Port ${PORT}`);
})();
