const express = require('express');
const cors = require('cors');
const apiRoute = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? ['http://localhost:3000', 'http://localhost:5173'] 
//     : '*'
// }));
app.use(cors());

app.use(express.json());

app.use('/api', apiRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;