const express = require('express');
const app = express();

const { getBooks, booklisting, specificbook, delet } = require('./controladores/books')

app.use(express.json());

app.post('/books', getBooks);
app.get('/books', booklisting);
app.get('/books/:book_id', specificbook)
app.delete('/books/:book_id', delet)

app.listen(3000, () => console.log('Rodando na porta 3000') )