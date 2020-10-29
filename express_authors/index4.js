const express = require('express');
const app = express();
app.use(express.json());

const id = [{
    
    name: "Lawrence Nowell",
    nationality: "UK"
},
books = {
    books: ["Beowulf"]
  }
]

app.get('/json/authors/:id', (req, res, next) => {

    //res.send(JSON.stringify(id))
    res.json(id[0])

})

app.get('/json/authors/:id/books', (req, res, next) => {

    //res.send(JSON.stringify(id))
    
    res.json(id[1])

})




const port = 3003;
app.listen(port, () => {
    console.log('Server started on port' + port)
})