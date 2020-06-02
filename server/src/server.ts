import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('usuarios');

  response.json([
    'Diego',
    'Cleyton',
    'Robson',
  ]);
});

app.listen(3333);
console.log('Server ON!');