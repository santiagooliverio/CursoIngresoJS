<<<<<<< HEAD
/* Oliverio Santiago, Div H	
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados 
con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar 
la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit "). */

function FahrenheitCentigrados () 
{
	let temperaturaF;
	let temperaturaC;

	temperaturaF = txtIdTemperatura.value;
	temperaturaC = (temperaturaF - 32) * (5/9);

	temperaturaF = parseInt(temperaturaF);
	temperaturaC = parseInt(temperaturaC);

	alert(temperaturaF + " Fahrenheit son " + temperaturaC + " grados centígrados.");
}

function CentigradosFahrenheit () 
{
	let temperaturaC;
	let temperaturaF;

	temperaturaC = txtIdTemperatura.value;
	temperaturaF = (temperaturaC * (9/5)) + 32;

	temperaturaC = parseInt(temperaturaC);
	temperaturaF = parseInt(temperaturaF);

	alert(temperaturaC + " Centígrados son " + temperaturaF + " grados Fahrenheit.");
}

// txtIdTemperatura
=======
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
}

function CentigradosFahrenheit () 
{
	
}
>>>>>>> cb5481989db612d444bef483b417c64f341c3afd
