//Ota mongoose käyttöön
const mongoose = require("mongoose");
//Luo connectionstringille vakio
const uri = "mongodb+srv://dbLana:moneyWellSpent!5@cluster0.umjne.mongodb.net/todolistdata?retryWrites=true&w=majority";
//Muodostetaan tietokantayhteys 
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true});
//Luodaan vakio tietokantayhteydelle
const db = mongoose.connection;
//Näyt ilmoitus jos yhteys ok
db.once("open", function() {
    console.log("Tietokantayhteys avattu");
});