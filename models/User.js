const mongoose = require('../db/connection')

const userSchema = new mongoose.Schema({

    username: String,
    email: String,
    notes:[{
        
    }]
})




/// ⇡ end of line ⇪ all schema must be ⇑ above here ⇧
module.exports = mongoose.model('User', userSchema)
