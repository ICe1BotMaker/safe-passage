const express = require(`express`);
const app = express();

const safepassage = require(`../index`);

app.use(safepassage);

app.get(`/`, (req, res) => {
    res.setHeader(`Content-type`, `application/json`);
    res.send(JSON.stringify({}));
});

app.listen(8080, () => {
    console.log(`localhost:8080`);
});