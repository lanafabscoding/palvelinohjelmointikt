//Ota mongoose käyttöön
const mongoose = require("mongoose");
//Luo connectionstringille vakio
const uri  = 'mongodb+srv://dbLana:moneyWellSpent!5@cluster0.umjne.mongodb.net/todolistdata?retryWrites=true&w=majority';
//Muodostetaan yhteys tietokantaan
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true});

