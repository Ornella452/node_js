const express = require('express');
const app = express();
const port = 3003;
const exphbs = require('express-handlebars');
const students = ['Jean', 'Binta', 'Agathe', 'Adil'];


app.engine('handlebars', exphbs({
  defaultLayout: false,
  layoutsDir: __dirname + "views/"
}));

app.set('view engine', 'handlebars');

app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(express.json())


app.get('/', (req, res) => {
  res.render('home', {
    title: 'Welcome to express simple form',
    students,
  });
});


app.post('/students/add', (req, res, next) => {
  let listePersonne = req.body.username;

  students.push(listePersonne);
res.render('list', {
  resultat:  listePersonne,

})
 
})

app.listen(port, () => {
  console.log(`Vous etes sur le port ${port}`)
})


// formule à finir