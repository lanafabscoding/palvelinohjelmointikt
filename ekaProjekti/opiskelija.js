function Opiskelija (etunimi, sukunimi, aloitusvuosi, sahkoposti) {
    this.etunimi = etunimi,
    this.sukunimi = sukunimi,
    this.aloitusvuosi =  aloitusvuosi,
    this.sahkoposti = sahkoposti,
   //luodaan metodi tulostaNimi()
    this.palautaTiedot =  function () {
        return this.etunimi + " " + this.sukunimi + " on aloittanut koodaamisen opiskelun vuonna " + this.aloitusvuosi + "." + "Sähköposti: " + this.sahkoposti;
    }
    this.tarkistaAloistuvuosi = function () {
        if (this.aloitusvuosi > 2020) {
            console.log("Aloitusvuosi virheellinen");
        }
    }
}
let opiskelija1= new Opiskelija("Kirsti", "Tikkanen", 2020);
opiskelija1.sahkoposti = "kirsti.tikkanen@seamk.fi";
console.log(opiskelija1.palautaTiedot());

let opiskelija2= new Opiskelija("Mikko", "Mallikas", 2006, "mattimallikas@seamk.fi");
console.log(opiskelija2.palautaTiedot());
opiskelija1.tarkistaAloistuvuosi();