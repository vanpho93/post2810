const express = require('express');
const parser = require('body-parser').urlencoded({ extended: false });
const reload = require('reload');
const uid = require('uid');

const words = [
    { en: 'one', vn: 'mot', id: uid() },
    { en: 'two', vn: 'hai', id: uid() },
    { en: 'three', vn: 'ba', id: uid() },
];

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.get('/word', (req, res) => {
    //render table words - like remove, update
    res.render('words', { words });
});

app.get('/remove/:id', (req, res) => {
    const { id } = req.params;
    const index = words.findIndex(word => word.id === id);
    words.splice(index, 1);
    res.redirect('/word');
});

app.post('/word', parser, (req, res) => {
    const { en, vn } = req.body;
    words.push({ en, vn, id: uid() });
    res.redirect('/word');
});

// app.post('/dangnhap', parser, (req, res) => {
//     console.log(req.body);
//     res.send('Dang nhap thanh cong. Chao mung ' + req.body.email);
// });

app.listen(3000, () => console.log('Server started'));

reload(app);
