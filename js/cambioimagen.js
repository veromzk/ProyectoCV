
window.addEventListener('load', cambioimagen, false);

function cambioimagen() {
  
  var imagen = document.getElementById('img1');
  
  imagen.addEventListener('mouseover', imagenblanco, false);
  imagen.addEventListener('mouseout', imagencolor, false);
}

function imagencolor(){
  var imagen = document.getElementById('img1').src = "images/foto-perfil-bco.jpg";
}

function imagenblanco() {
  var imagen = document.getElementById('img1').src = "images/foto-perfil-color.jpg";
}
