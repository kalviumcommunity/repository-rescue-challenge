const express = require('express');
const app = express();
const { PORT } = require('./src/config');

app.get('/', (req, res) => {
  res.send(`DevOps assessment app is running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
