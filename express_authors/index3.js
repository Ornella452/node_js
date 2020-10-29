const express = require('express');
const app = express();

const livre = ["Beowulf", "Hamlet, Othello, Romeo and Juliet, MacBeth", "Oliver Twist, A Christmas Carol", "The Picture of Dorian Gray, The Importance of Being Earnest"]

app.get('/cars/', (req, res) => {
    res.send('error');
  });

app.get('/authors/:livre/books/', (req, res, next) => {

    if (livre[req.params.livre]){

        res.send(`Books : ${livre[req.params.livre]}`)

    }else{
        
        res.send(`The author with the ID ${req.params.livre} does not exist`)
    }
      
   

});





const port = 3002;
app.listen(port, () => {
    console.log('Server started on port' + port)
})