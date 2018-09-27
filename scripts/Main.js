var xx =2;
var otra = "la otra";
var yy = 5;
var zz = 0;
var nombre ="Chente";
var apell = "fernandez";
var mascota =true;
var colores =["azul","roja","verde"];
var persona = {
	nombre:"Pepe",
	edad: 25452,
	sexo: true
}
var frutas =["mazana", mascota, 'lulo', 250, colores[2], colores, persona.sexo];
console.log("Hola Marano tiene="+xx + " en  " + otra+ " Mano:" + (xx*yy) ) ;
console.log("zz= "+zz);
console.log(nombre+"\" aa "+apell+ "Con mascota: "+mascota);
console.log(frutas);
console.log(frutas[2]);
console.log(persona["edad"]);
/*comente*
variable ni inican con numero
*/

var persona = {
nombre:'yesid',
edad:26,
tiene_mascota:true,
mascota:{
	raza:'dalmata',
	nombre:'Bigotes'
}
}

var fecha= new Date();
console.log(fecha);

console.log(false && true);
console.log(false || true);
console.log(5%4); /*mod*/
console.log(5>4);
console.log(5<4);
console.log(6==6);
console.log(6!=5);

var edad=19;

if (edad >= 18){
	console.log('Eres mayor deedad');
}
else
{
console.log('No Eres mayor deedad');
}

var dias=['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
for(var i=0;i<7; i++) 
	{		
		console.log(dias[i]);

		if(i==5){
			break;
		}
	}

function suma(n1,n2){

	var res=n1*n2
	return res;
}
/* alert(suma(8,5)); */

function valoIva(precio){
    var iva=19;
	var res = (precio*19)/100;
   return res;
}

alert(valoIva(100000));
console.log(valoIva(100000));










