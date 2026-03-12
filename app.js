const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Cho phép truy cập thư mục chứa HTML, CSS, images
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});