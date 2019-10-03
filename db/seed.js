const Notes = require("../models/Note");
const notes = require('./seedData.json');

const Users = require("../models/User");
const users = require('./seedData.json');


Notes.deleteMany({})
    .then(() => {
    console.log("old notes gone cptn");
    return Notes.collection.insertMany(notes);
    // create new  note files from  seeds 
    })
    .then(() => {
        console.log(" ✄ Dem notes is  back to da original now ßóøž ✔ ");
        process.exit();
});


Users.deleteMany({})
    .then(() => {
    console.log("old users gone cptn");
    return Users.collection.insertMany(users);
    // create new  user files from  seeds 
    })
    .then(() => {
        console.log(" ✄ Da users ♀ ♂  back to da original seeds now ßóøž ✔ ");
        process.exit();
});

