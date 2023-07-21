import express from 'express';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import compression from 'compression';

const cache = {};

export default function SafePassage({ header = true, error = true, valid = true, caching = true, limit = { windowMs: 15 * 60 * 1000, max: 100 }, session_key = `your-secret-key`, compress = true }) {
    return (err, req, res, next) => {
        if (valid) express.json();
        if (compress) compression();

        if (limit) {
            rateLimit({
                windowMs: limit.windowMs,
                max: limit.max,
            });
        }
        
        if (session_key.trim() !== `your-secret-key`) {
            session({
                secret: session_key,
                resave: false,
                saveUninitialized: true,
            });
        }

        if (header) {
            res.setHeader('X-Frame-Options', 'DENY');
            res.setHeader('X-XSS-Protection', '1; mode=block');
            res.setHeader('X-Content-Type-Options', 'nosniff');
        }
        
        if (caching) {
            const key = req.originalUrl || req.url;
            const cachedData = cache[key];
    
            if (cachedData) res.send(cachedData);
            else {
                res.sendResponse = res.send;
                res.send = (data) => {
                    cache[key] = data;
                    res.sendResponse(data);
                };
                next();
            }
        }

        if (error) {
            console.error(err.stack);
            res.status(500).send('Something went wrong!');
        }
    }
}