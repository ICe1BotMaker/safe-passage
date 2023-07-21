# Safe Passage
Express security middleware used by [울집마켓](https://github.com/ICe1BotMaker/wehome-market) and [Kithub](https://github.com/ICe1BotMaker/kithub).

| Safe Passage NPM | Safe Passage Github |
|---|---|
| [Go NPM](https://www.npmjs.com/package/safe-passage) | [Go Github](https://github.com/ICe1BotMaker/safe-passage) |

- Security:
Enhance security by setting HTTP headers, managing CORS (Cross-Origin Resource Sharing), preventing CSRF (Cross-Site Request Forgery), and other security-related measures.

- Error Handling:
Implement features to handle unexpected exceptions or errors and provide user-friendly error messages to enhance stability.

- Request Data Validation:
Validate incoming request data and filter out invalid data using middleware to ensure data integrity.

- Caching:
Implement caching to store frequently used data or API responses, optimizing server response time.

- Rate Limiting:
Add functionality to limit the rate of incoming requests to prevent overload and ensure server stability.

- Session Management:
Manage and maintain sessions to track and preserve user states throughout their interactions with the application.

- Data Compression:
Reduce network traffic by compressing response data before sending it to clients.

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
