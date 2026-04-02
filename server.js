
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// All other requests should be handled by the client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
