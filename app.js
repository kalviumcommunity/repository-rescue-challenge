const express = require('express');
const { PORT } = require('./src/config');
const app = express();

app.get('/', (req, res) => {
  res.send(`DevOps assessment is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
