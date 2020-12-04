



var articles = loadDoc();

document.getElementById('furniturePictures').innerHTML += 'Bonjour';

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        return this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost:3000/api/furniture", true);
    xhttp.send();
  }


