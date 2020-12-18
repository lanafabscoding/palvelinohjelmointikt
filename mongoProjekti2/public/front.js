var xmlhttp = new XMLHttpRequest(); 
xmlhttp.open("GET", "/todolist", true); 
xmlhttp.send();

xmlhttp.onreadystatechange= function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        document.getElementById("myUL").innerHTML= xmlhttp.responseText;
    }

}

//Tässä on luotu nappula, jolla kunkin lista-itemin voi poistaa
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Piilota list itemi kun ruksia klikkaa
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Lisää check symboli kun lista itemiä klikkaa
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Luo uusi lista elementti kun lisää -nappia painetaan
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    //Lisää herja, jos painaa nappia mutta ei ole kirjoittanut mitään
    alert("Kirjoita jotakin!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 