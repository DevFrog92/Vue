const express = require("express");
const app = express();

app.get('/api/getList', function(req, res) {
  res.send('api getList success');
})

app.listen(3000);