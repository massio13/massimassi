const express = require('express');
const path = require('path');

const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Accueil'});
});
app.get('/client', (req, res) => {
    res.render('index', { title: 'Clients'});
});
app.get('/prix_mat', (req, res) => {
    res.render('prix_mat', { title: 'Materiels'});
});
app.get('/prix_reparation', (req, res) => {
    res.render('prix_reparation', { title: 'Reparation'});
});
app.get('/prix_deblocage', (req, res) => {
    res.render('prix_deblocage', { title: 'Deblocage'});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
