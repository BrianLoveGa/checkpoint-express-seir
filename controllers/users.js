// express
const express = require("express");
const router = express.Router();


// model
const Users = require("../models/User");

// list all users

router.get('/', (req, res) =>{
    Users.find().then(users => {
        res.json(users);
    })
    .catch(err => console.error(err));
});


module.exports = router;