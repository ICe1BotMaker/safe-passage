# Safe Passage
Express security middleware used by [울집마켓](https://github.com/ICe1BotMaker/wehome-market) and [Kithub](https://github.com/ICe1BotMaker/kithub).

| Safe Passage NPM | Safe Passage Github |
|---|---|
| [Go NPM](https://www.npmjs.com/package/safe-passage) | [Go Github](https://github.com/ICe1BotMaker/safe-passage) |

## Usage

```js
import express from 'express';
import SafePassage from 'safe-passage';

const app = express();

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
```