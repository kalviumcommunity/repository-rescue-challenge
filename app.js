const express = require('express');
const { PORT } = require('./src/config');
const {DEV_PORT} =require('./src/config')
const app = express();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get('/', (req,res)=>{
  res.send(`Development server is working on port ${DEV_PORT}`)
})

app.listen(DEV_PORT, ()=>{
  console.log(`Development server started on port ${DEV_PORT}`)
})