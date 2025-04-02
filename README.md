# Node-library 
Costruire una semplice REST API per gestire una libreria di libri, applicando una struttura modulare e pulita del codice.


### Implemetate le seguenti rotte:  
`GET /books` → Elenco di tutti i libri  
`GET /books/:id` → Dettaglio di un libro  
`POST /books` → Creazione di un nuovo libro  
`PUT /books/:id` → Modifica di un libro esistente  
`DELETE /books/:id` → Eliminazione di un libro


### Middleware implementati:  
- **Logger**: stampa in console metodo e URL per ogni richiesta  
- **Validazione**: blocca POST e PUT se mancano title o author

### Bonus:
- **Filtro per autore**: `GET /books?author=Eco`  
- **Endpoint solo libri disponibili**: `GET /books/available`

---

### Istruzioni:
**1.** Scarica il progetto da github.  
**2.** Installa le librerie necessarie con il comando `npm i` nel terminale del progetto.  
**3.** Scrivi nella console `npm run dev` per avviare il server.  
**4.** Controlla che sia avviato.  
**5.** Usa postman per testare la risposta delle API.

