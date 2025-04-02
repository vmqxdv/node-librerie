// Importo express
const express = require('express');
// Invoco express
const app = express();
// Stabilisco il numer per la porta
const PORT = 1229;
// Importo le rotte
const router = require('./routes/bookRoutes');
// Middleware
const logger = require('./middlewares/logger');


// Invoco la funzione che mette a disposizione di express il body-parser
app.use(express.json());
// Invoco il middleware
app.use(logger);


// Invoco le rotte dal file router
app.use('/books', router);


// Metto il server in ascolto
app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});