import express from 'express';
const app = express();

import SafePassage from '../index.js';

app.use(SafePassage({
    header: true,
    error: true,
    valid: true,
    caching: true,
    limit: {
        windowMs: 15 * 60 * 1000,
        max: 1000
    },
    session_key: `testkey`,
    compress: true
}));

app.get(`/`, (req, res) => {
    res.setHeader(`Content-type`, `application/json`);
    res.send(JSON.stringify({}));
});

app.listen(8080, () => {
    console.log(`localhost:8080`);
});