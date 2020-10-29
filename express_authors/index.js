const express = require('express');
const app = express();

const autheurs = ['Lawrence Nowell UK', "William Shakespeare UK", 'Charles Dickens US', 'Oscar Wilde, UK' ]
app.get(`/authors/:autheurs`, (req, res, next) => {
     res.send(`authors : ${autheurs[req.params.autheurs]}`) // req pour recuperer l'index de mon array 
     
});



const port = 3000;
app.listen(port, () => {
    console.log('Server started on port ' + port)
})


