//Ota mongoose käyttöön
const mongoose = require("mongoose");
//Ota BodyParser käyttöön
const BodyParser = require("body-parser")
//Ota express käyttöön
express = require("express");
const app = express();

//Ota todolist käyttöön
const todolist = require("./todolist.js");
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
//Aseta määritykset express-palvelimelle
//staattinen hakemisto
app.use(express.static("./public"));
//Käytä bodyparseria lomakedatan käsittelyssä
app.use(BodyParser.urlencoded({extended:false}));
//Kirjoita get-funktio
app.get('/todolist', function(req, res) {
    //Hae käyttäjät tietokannasta
    todolist.find(req.query, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    
    })
});
//Käyttäjän lisäys post-funktio
app.post("/newUser", function (req, res) {
    console.log(req.body);
    //Varmuuden vuoksi poista _id
    delete req.body._id;
    //Lisää collectioniin uusi käyttäjä
    db.collection("todolist").insertOne(req.body);
    res.send("User added with following data:" + JSON.stringify(req.body));
});
//Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function(){});
