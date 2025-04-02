// Dichiaro la funzione per stampare in console, il metodo e url per ogni richiesta
function logger(req, res, next) {
  const { method, protocol, host, url } = req;
  console.log(method, protocol + '://' + host + url);
  next();
};

// Esporto la funzione
module.exports = logger;