 //inicio de codigo prueba
 //function sumar(num1, num2) {
 //let resultado;
 //resultado = num1 + num2;
 //return resultado;
 //se retorna resultado a la funcion sumar
 //}
 //alert(sumar(8, 5));
 //let nombre;
 //nombre = "Daniel Nieto";
 //console.log(nombre);

let contenidoTitulo = "Nombre";
let titulo = document.querySelector(".logo");
titulo.innerHTML = contenidoTitulo;
//condicional
let textoTitulo = titulo.innerHTML;
console.log(textoTitulo);
//condicional 
if (textoTitulo == "Nombre") {
 titulo.innerHTML = "Otro";
} else {
 console.log("No se cumple");
}
//cambiar texto
let nombre = "DanielF";
let ciudad = "Popayan";
let gusto = "Motos doble proposito";
//seleccionar parrafo
let parrafo = document.querySelector(".parrafo2");
function cambiarTexto(nombrep,ciudadp,gustop) {
	let contenido = "Hola soy "+nombrep+", nací en el Departamento del Cauca en la ciudad de "+ciudadp+" en el Suroccidente Colombiano y tengo 23 años. Estoy tomando este curso porque creo que el saber programar es tan importante hoy en dia como antes era el poder leer. Me gustan las "+gustop;
	return contenido;
}

parrafo.innerText = cambiarTexto(nombre,ciudad,gusto);
//modificar formulario
const formulario = document.getElementById("formulario");
const nombreFormulario = document.getElementById("nombre");
const parrafoFormulario = document.getElementById("alertas");
function validarFormulario() {
	let warnings = "";
	let valido = true;
	parrafoFormulario.innerText = "ok";
	if (nombreFormulario.value.length < 4) {
		warnings += "El nombre debe de contener mas de 4 caracteres";
		valido = false;
	}
	if (!valido) {
		parrafoFormulario.innerText = warnings;
	} else {
		parrafoFormulario.innerText = "Enviado";
	}
	return valido;
}
//la e hace referencia a un evento, puede ir cualesquier letra pero la e por buenas practicas se coloca
formulario.addEventListener("submit", (e) => {
	if (validarFormulario()) {
		formulario.submit();
	} else {
		e.preventDefault();
	}
})

