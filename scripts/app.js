
/*arreglos*/ /*
var titulos= document.getElementsByTagName('h1');
console.log(titulos); 
/*por class*/ /*
var textos_rojo=document.getElementsByClassName('rojo');
console.log(textos_rojo[1].textContent); 
textos_rojo[1].textContent="Unitec";
/*Por ID Unico elemento*/
/*
var fecha=document.getElementById('fecha');
console.log(fecha);  */
/*
function cambiar_mensaje(){

var textos_rojo=document.getElementsByClassName('rojo');
textos_rojo[1].textContent="Grupo 175";

} */

function calcular_iva(){

	var precio= parseInt(document.getElementById("precio").value);
	var resultado=precio*0.19;
	var span_resultado=document.getElementById("resultado");
	span_resultado.textContent=resultado;
resultado.style.display="";

}