const mongoose = require('../db/connection')

const noteSchema = new mongoose.Schema({

        title: String,
        body: String,
        author:{
            object
        }

});




/// ⇡ end of line ⇪ all schema must be ⇑ above here ⇧
module.exports = mongoose.model('Note', noteSchema)
