const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/notes-checkpoint", {useUnifiedTopology: true}).then((conn) => {
	console.log(`hooked it up mon 🌴 to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
});

mongoose.Promise = Promise;

module.exports = mongoose;
