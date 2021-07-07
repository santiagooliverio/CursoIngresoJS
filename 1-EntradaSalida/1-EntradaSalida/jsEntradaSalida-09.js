/* Oliverio Santiago, Div H
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let sueldo;
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	let resultado; 
	resultado = (sueldo * 0.1) + sueldo;

	txtIdResultado.value = resultado;
}

// txtIdSueldo
// txtIdResultado