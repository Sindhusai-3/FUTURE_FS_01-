const express = require('express');
const path = require('path');
const app = express();

// Serve static files (CSS, images)
app.use(express.static('public'));

// Send HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(Server running on http://localhost:${PORT});
});