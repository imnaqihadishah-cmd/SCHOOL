const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/database.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'database.json'));
});

app.post('/update-database', (req, res) => {
    const dbPath = path.join(__dirname, 'database.json');
    fs.writeFile(dbPath, JSON.stringify(req.body, null, 4), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error writing to database');
        }
        res.send('Database updated successfully');
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
