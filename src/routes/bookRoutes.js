// Importo express
const express = require('express');
const router = express.Router();
// Importo le funzioni dal controller
const { getBooks, getBooksId, postBook, putBooksId, deleteBookId } = require('../controllers/bookController');
// Importo il middleware
const validateBook = require('../middlewares/validateBook');


// Rotta index
router.get('/', getBooks);

// Rotte show
router.get('/available', getBooks);

router.get('/:id', getBooksId);


// Rotta store
router.post('/', validateBook, postBook);

// Rotta update
router.put('/:id', validateBook, putBooksId);

// Rotta destroy
router.delete('/:id', deleteBookId);


// Esporto le rotte
module.exports = router;