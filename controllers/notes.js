// express
const express = require("express");
const router = express.Router();

// model
const Notes = require("../models/Note");


// list all notes

router.get('/', (req, res) =>{
    Notes.find().then(notes => {
        res.json(notes);
    })
    .catch(err => console.error(err));
});



module.exports = router;