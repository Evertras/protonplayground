var express = require('express');

var app = express();

app.use(express.static('wwwroot'));

app.listen(1742, () => {
  console.log('listening');
});
