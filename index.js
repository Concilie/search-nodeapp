const express = require('express');
const app = express();

const books = require('./books.json');


app.get('/', (req, res) => {
    res.send("Welcome on my app");
})

app.get('/books', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        let { limit, page, q } = req.query;
        var newBooks = books;
            newBooks = newBooks.filter(book => book.author.match(q))
            newBooks = newBooks.slice(0, parseInt(limit))
        const returnResponse = {
            limit: limit,
            page: page,
            search: q,
            books: newBooks
        }

        res.json(returnResponse);
    } else {
        res.json(books);
    }
   
})



app.listen('8012', () => {console.log("Server listen on 8012")})