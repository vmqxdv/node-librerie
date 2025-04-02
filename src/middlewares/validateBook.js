// Dichiaro la funzione per controllare se i libri sono validi per titolo e autore
function validateBook(req, res, next) {
  const newPutBook = req.body;
  const toBeValidParams = ['title', 'author']

  if (!isObjValid(newPutBook, toBeValidParams)) 
    return res.status(422).json({ error: 'Controlla che tutti i campi siano validi' });
  
  next();
};

function isObjValid(obj, validParams) {
  return validParams.every(param => obj[param] && obj[param].length >= 3);
};

// Esporto la funzione
module.exports = validateBook;