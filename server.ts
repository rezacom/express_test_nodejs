import express from "express";

import * as router from "./router";

const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} - ${req.url} => ${delta}ms`);
})

app.use(express.json())

app.use('/friends', router.friends);

app.use('/messages', router.messages)

app.listen(PORT, () => {
    console.log(`linstening on ${PORT}`);

})