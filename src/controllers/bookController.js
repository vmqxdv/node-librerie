// Importo i dati dei libiri
const booksData = require('../data/books');

// Dichiaro funzione per la route index
function getBooks(req, res) {
  let result = booksData;

  // Filtro per libri disponibili
  if (req.route.path) {
    result = booksData.filter(book => book.available);
  };

  // Filtro per autore
  if (req.query.author) {
    result = booksData.filter(book => book.author === req.query.author);
  };

  // Invio risposta
  res.json(result);
};


// Dichiaro funzione per la route show
function getBooksId(req, res) {
  const bookId = Number(req.params.id);
  const requestedItem = booksData.find(book => book.id === bookId);

  // Risposta in caso di "id" non trovato
  if (!requestedItem) return res.status(404).json({ error: `Id '${bookId}' non trovato` });

  // Invio risposta
  res.json(requestedItem);
};


// Dichiato funzione per la route post
function postBook(req, res) {
  const newBook = req.body;

  // Aggiungo il nuovo libro
  booksData.push(newBook);
  
  // Invio risposta
  res.sendStatus(201);
};


// Dichiaro funzione la route put
function putBooksId(req, res) {
  const newPutBook = req.body;
  const newPutBookId = Number(req.params.id);
  
  // Ottengo il libro con l'id specificato
  const requestedItem = booksData.find(book => book.id === newPutBookId);

  // Risposta in caso di "id" non trovato
  if (!requestedItem) return res.status(404).json({ error: `Id '${newPutBookId}' non trovato` });

  // Modifico il libro specificato con i nuovi parametri
  updateNewKeys(requestedItem, newPutBook);

  // Invio risposta
  res.sendStatus(204);
};


// Dichiaro funzione la route destroy
function deleteBookId(req, res) {
  const postBookId = Number(req.params.id);
  const requestedItemIndex = booksData.findIndex(element => element.id === postBookId);
  
  // Risposta in caso di "id" non trovato
  if (requestedItemIndex < 0) return res.status(404).json({ error: `Id '${postBookId}' non trovato` });
  
  // Rimuovo il libro specificato
  booksData.splice(requestedItemIndex, 1);

  // console.log(booksData);

  // Invio risposta
  res.sendStatus(204);
};



// Esporto tutte le funzioni per le routes
module.exports = {
  getBooks,
  getBooksId,
  postBook,
  putBooksId,
  deleteBookId,
};



// Dichiaro funzione per modificare i nuovi parametri dei libri
function updateNewKeys(oldObj, newObj) {
  for (const [key, value] of Object.entries(newObj)) {
    if (oldObj.hasOwnProperty(key) && oldObj[key] !== value) typeof oldObj[key] === 'number' ? Number(value) : value;
  };
};