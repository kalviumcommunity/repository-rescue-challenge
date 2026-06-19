const express = require('express');
const { PORT } = require('./src/config');
const app = express();

app.get('/', (req, res) => {
  res.send(`This particular DevOps assessment app is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
