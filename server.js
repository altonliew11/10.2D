'use strict';

const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send("Hello Alton! Here are some code changes! Enjoy!!");
});

app.listen(PORT, HOST, () => {
    console.log("Running on http://" + HOST + ":" + PORT);
});