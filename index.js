// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hola amigos de youtube');
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto ${PORT}`);
});
