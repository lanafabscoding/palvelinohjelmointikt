var xmlhttp = new XMLHttpRequest(); 
xmlhttp.open("GET", "/users", true); 
xmlhttp.send();

xmlhttp.onreadystatechange= function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        let users= JSON.parse(xmlhttp.response);
        //Luodaan taulukko, jossa käyttäjät näytetään
        //Luodaan silmukka, jossa käydään käyttäjät läpi
        let table = document.createElement("table");
        for (let i=0; i< users.length; i++) {

        let table = document.createElement("table");
        let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        newCell.innerHTML= users[i].firstname;
        newRow.appendChild(newCell);
        table.appendChild(newRow);
    }
       // document.getElementById("users").innerHTML = xmlhttp.responseText; 


    }

}