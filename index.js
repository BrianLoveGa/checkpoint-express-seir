const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./controllers"));

app.listen(3000, () => console.log('app is running port 3000 my king 👑'))





// DO NOT REMOVE THIS LINE:
module.exports = app
