const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path'); // Add this line

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'admin.cz0gw6oyoxe3.eu-north-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Abhiraj2004',
    database: 'manhwa_db'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to database');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.get('/manhwa', (req, res) => {
    db.query('SELECT * FROM manhwa', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

