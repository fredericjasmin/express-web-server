const express = require('express');
const routes = require('./routes/main.js');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.use(function(req, res, next) {
  res.status(404).render('error');
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).render('error');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
