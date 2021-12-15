const express = require('express');
const app = express();
const mongo = require('./components/Mongo');
const appRouter = require('./components/controllers');
const port = 3005;

app.get('/', (req, res) => {
  res.send('Hola mundoas!')
});

app.use(express.json());

// rutas de los controller

app.use('/api', appRouter);


app.listen(port, () => {
  console.log(`Aplicación lanzada en http://localhost:${port}`);
})


