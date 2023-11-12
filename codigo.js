function Chiri(){

   var d=new Date();
   let hora=d.getHours(); 
   let min=d.getMinutes();
   let seg=d.getSeconds();
   let modalidad = "AM";
   if(hora>12){
    modalidad="PM"
   }

   if(hora==0){
    hora=12;
   }
   if(min<=9){
    min="0" + min;
   }
   if(seg<=9){
    seg="0" + seg;
   }
   document.Reloj.Clock.value=hora+ ":" +min+ ":" + seg + " " + modalidad;

//Llamamos al metodo 
setTimeout("Chiri()" , 1000  );
}

//Llamamos al metodo-- Este seria el MAIN
Chiri();

// script.js

function mostrarMenu() {
  document.getElementById("Ventana").style.width = "100%";
}





function obtenerFechaFormateada() {
  var fechaActual = new Date();
  var diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  var diaSemana = diasSemana[fechaActual.getDay()];
  var diaMes = fechaActual.getDate();
  var mes = meses[fechaActual.getMonth()];
  var año = fechaActual.getFullYear();

  var formatoFecha = diaSemana + ', ' + diaMes + ' de ' + mes + ' de ' + año;

  return formatoFecha;
}

// Insertar la fecha en un elemento con el id "fechaMostrada" al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  insertarFechaEnElemento('fechaMostrada');
});

// Función para insertar la fecha en elementos HTML
function insertarFechaEnElemento(elementoId) {
  var elemento = document.getElementById(elementoId);
  if (elemento) {
    elemento.innerHTML = obtenerFechaFormateada();
  }
}