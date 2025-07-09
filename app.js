const express = require('express');
const cors = require('cors');
const apiRoute = require('./api');

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}));

app.use(express.json());

app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});