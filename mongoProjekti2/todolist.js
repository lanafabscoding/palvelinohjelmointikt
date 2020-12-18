//Otetaan mongoose käyttöön
const mongoose = require("mongoose");
//Luodaan skeema
const Schema = mongoose.Schema;
//Luodaan todolist-skeema 
let todolist = new Schema ( {
    list_items: {
        type:Array
    }
    
}, 

    { collection: "todolist"}

);

//Tarjoa pääsy tähän
module.exports = mongoose.model("todolist", todolist);
