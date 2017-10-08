// blah

require("babel-register");
require("babel-polyfill");

import koa from "koa";
import koaRouter from "koa-router";
import koaBody from "koa-bodyparser";
import { graphqlKoa, graphiqlKoa } from "apollo-server-koa";

const app = new koa();
const router = new koaRouter();
const PORT = 3000;

console.log("Starting server...");

router.post("/graphql", koaBody(), graphqlKoa({schema: {} }));
router.get("/graphql", graphqlKoa({ schema: {} }));

router.get("/graphiql", graphiqlKoa({ endpointURL: "/graphql" }));

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);

console.log(`Server listening on port ${PORT}`);