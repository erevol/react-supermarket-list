require('./config/config');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const items = require('./routes/api/items');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('Database ONLINE');
});
app.use('/api/items', items);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});