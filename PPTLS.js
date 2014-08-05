
function aleatorio(minimo, maximo)
 {
 	
 	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
 		
 	return numero;
 }

var piedra = "0";
var papel ="1";
var tijera = "2";
var lagarto= "3";
var spock= "4";


var opciones = ["piedra","papel","tijera","lagarto","spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Cual es tu descisión?\n Piedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("La toda poderesa laptop eligio: " +opciones[opcionMaquina])



if(opcionUsuario == piedra)
{

 if(opcionMaquina == piedra)
 {
  alert("Empate!");
 }
 else if(opcionMaquina == papel)
 {
  alert("Perdiste :( ");
 }
 else if (opcionMaquina ==lagarto) {
  alert("Ganaste")
 }
 else if(opcionMaquina ==spock){
  alert("Perdiste")
 }
 else 
 {
  alert("Ganaste!");
 }
}
else if(opcionUsuario == papel){
	if (opcionMaquina == piedra) {
		alert("ganaste");
	}
	else if (opcionMaquina == papel) {
		alert("empate");
	}
	else if (opcionMaquina == tijera) {
		alert("perdiste:");

	}
	else if (opcionMaquina == lagarto) {
		alert("perdiste");
	}
	else if (opcionMaquina == spock) {
		alert("ganaste");
	}
}
else if(opcionUsuario == tijera){
	if (opcionMaquina == piedra) {
		alert("perdiste");
	}
	else if (opcionMaquina == papel) {
		alert("ganaste");
	}
	else if (opcionMaquina == tijera) {
		alert("empate:");

	}
	else if (opcionMaquina == lagarto) {
		alert("ganaste");
	}
	else if (opcionMaquina == spock) {
		alert("perdiste");
	}

}

else if(opcionUsuario == lagarto){
	if (opcionMaquina == piedra) {
		alert("perdiste");
	}
	else if (opcionMaquina == papel) {
		alert("ganaste");
	}
	else if (opcionMaquina == tijera) {
		alert("perdiste");

	}
	else if (opcionMaquina == lagarto) {
		alert("empate")
	}
	else if (opcionMaquina == spock) {
		alert("ganaste")
	}
}
else if(opcionUsuario == spock){
	if (opcionMaquina == piedra) {
		alert("gansaste")
	}
	else if (opcionMaquina == papel) {
		alert("perdiste")
	}
	else if (opcionMaquina == tijera) {
		alert("ganaste:")
	}
	else if (opcionMaquina == lagarto) {
		alert("perdiste");
	}
	else if (opcionMaquina == spock) {
		alert("empate");
	}
}
else{
	alert("Dato invalido")
}
