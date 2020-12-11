//Otetaan mongoose käyttöön
const mongoose = require("mongoose");
//Luodaan skeema
const Schema = mongoose.Schema;
//Luodaan user-skeema 
let user = new Schema ( {
    list_items: {
        type:Array
    },
    firstname: {
        type:String
    },
    DOB: {
        type: Date
    },
    street_address: {
        type:String
    }

}, 

    { collection: "todolist"}

);

//Tarjoa pääsy tähän
module.exports = mongoose.model("todolist", user);
