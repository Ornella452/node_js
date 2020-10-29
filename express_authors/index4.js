const express = require('express');
const app = express();

const livre = [
    {

        name: "Lawrence Nowell",
        nationality: "UK",


    },
    {
        name: "William Shakespeare",
        nationality: "UK",

    },
    {
        name: "Charles Dickens",
        nationality: "UK",

    },
    {
        name: "Oscar Wilde",
        nationality: "UK",

    },

]

const books = [
    {
        books: "Beowulf"
    },
    {
        books: "Hamlet, Othello, Romeo and Juliet, MacBeth"
    },
    {
        books: "The Picture of Dorian Gray"
    },
    {
        books: "The Importance of Being Earnest"
    }
]


app.get('/json/authors/:id', (req, res, next) => {

    //res.send(JSON.stringify(id))
    if (livre[req.params.id]) {
        res.json(livre[req.params.id])
    } else {
        res.json(`The authors with the ID ${[req.params.id]} does not exist `)
    }

})

app.get('/json/authors/:id/books', (req, res, next) => {

    //res.send(JSON.stringify(id)) se met en json aussis
    //res.json(`${id[req.params.id]}`)

    if(books[req.params.id]){
        res.json(books[req.params.id])
    }else{
        res.json(`The books  does not exist because authors  with Id${[req.params.id]} not exist `) 
    }

})




const port = 3003;
app.listen(port, () => {
    console.log('Server started on port' + port)
})










