const express = require('express');
const app = express();

const livre = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", "Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"]


app.get('/authors/:livre/books/', (req, res, next) => {
        res.send(`Books : ${livre[req.params.livre]}`)

   

});


const port = 3001;
app.listen(port, () => {
    console.log('Server started on port' + port)
})