//otetaan express käyttöön
const express = require("express");
//luo express moduulista olio 
const app = express();
//kirjoita get-funktio
//määrittele mitä tapahtuu, kun 
app.get("/", function (reg, res) {
        res.send('Hello World!')
      })

app.get("/home", function (reg, res) {
        res.send('Hello I am home!')
      })    
app.listen(3000);
   