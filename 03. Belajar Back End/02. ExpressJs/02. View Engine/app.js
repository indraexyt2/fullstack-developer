const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.get('/', (req, res) => {
    res.render('index', {title: 'Home'})
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'})
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`)
})