//Ota mongoose käyttöön
const mongoose = require("mongoose");
//Ota express käyttöön
express = require("express");
const app = express();
//Ota users käyttöön
const user = require("./user.js");
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
//Kirjoita get-funktio
app.get('/users', function(req, res) {
    //Hae käyttäjät tietokannasta
    user.find({ }, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    
    })
});
//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});