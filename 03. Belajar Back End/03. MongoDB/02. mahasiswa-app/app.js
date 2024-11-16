const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts'); // Tambahkan ini
const Student = require('./models/student');
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Setup EJS dan express-ejs-layouts
app.use(expressLayouts); // Atur express-ejs-layouts sebagai middleware
app.set('view engine', 'ejs');
app.set('layout', 'layout'); // Pastikan ini diatur untuk menggunakan layout.ejs

// Koneksi ke MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentsDB')
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Routes
app.get('/', async (req, res) => {
    const students = await Student.find();
    res.render('index', { students });
});

app.get('/add', (req, res) => {
    res.render('add');
});

app.post('/add', async (req, res) => {
    const { name, nim, email } = req.body;
    await Student.create({ name, nim, email });
    res.redirect('/');
});

app.get('/edit/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    res.render('edit', { student });
});

app.post('/edit/:id', async (req, res) => {
    const { name, nim, email } = req.body;
    await Student.findByIdAndUpdate(req.params.id, { name, nim, email });
    res.redirect('/');
});

app.post('/delete/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server running on http://127.0.0.1:3000');
});
