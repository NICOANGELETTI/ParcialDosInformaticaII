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

function cerrarVtana(){
  document.getElementById("Ventana").style.width="0%";
}

function mostrarMenu(){
    document.getElementById("Ventana").style.width="100%";

}