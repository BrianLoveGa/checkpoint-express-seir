const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./controllers"));




const noteController = require("./controllers/notes");
const userController = require('./controllers/users');



app.use("/api/notes", noteController);

app.use("/api/users", userController);





app.listen(3000, () => console.log('app is running port 3000 my king 👑'));


// DO NOT REMOVE THIS LINE:
module.exports = app
