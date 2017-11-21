const express = require('express');
const reload = require('reload');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));

app.post('/dangnhap', (req, res) => {
    res.send('Dang nhap thanh cong');
});

app.listen(3000, () => console.log('Server started'));

reload(app);
