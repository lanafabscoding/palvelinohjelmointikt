//Otetaan mongoose käyttöön
const mongoose = require("mongoose");
//Luodaan skeema
const Schema = mongoose.Schema;
//Luodaan user-skeema 
let user = new Schema ( {
    lastname: {
        type:String
    },
    firstaname: {
        type:String
    },
    DOB: {
        type: Date
    },
    street_address: {
        type:String
    }

}, 

    { collection: "users"}

);

//Tarjoa pääsy tähän
module.exports = mongoose.model("users", user);
