//Luodaan opintojaksokonstruktori
function Opintojakso (nimi, laajuus, ajoitus) {
    this.nimi = nimi; 
    this.laajuus = laajuus; 
    this.ajoitus = ajoitus;
    this.lisaaTaulukkoon = function () {
        //luodaan rivi 
        let uusiRivi = document.createElement("tr");
        //luodaan nimi-solu
        let uusiSolu = document.createElement("td");
        //lisätään solulle sisältö
        uusiSolu.innerHTML = this.nimi; 
        //lisätään solu riville
        uusiRivi.appendChild(uusiSolu);
        //Luodaan laajuus -solu
        uusiSolu = document.createElement
        //lisätään solu riville
        //lisätään rivi tableen
    } 
}
//Lisää-painikkeen käsittely
document.getElementById("lisaaKurssi").onclick = function () {
    //hae kentistä tiedot ja luodaan niiden perusteella uusi olio
    let ajoitusValinta = document.getElementById("ajoitus");
    let uusiOpintoJakso = new Opintojakso (document.getElementById("nimi").value, document.getElementById("laajuus").value, ajoitusValinta[ajoitusValinta.selectedIndex].innerHTML);
 
}