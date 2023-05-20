import { buscarPorNombre } from "./productos/productos";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<h1>Formulario de búsqueda</h1>
<form>
  <label for="search-input">Buscar:</label>
  <input type="text" id="buscar-input">
  <button type="submit" id="buscar-btn">Buscar</button>
</form>
`;

const btnBuscar = document.querySelector<HTMLInputElement>("#buscar-btn")!;
const resultado = document.querySelector<HTMLDivElement>("#resultado")!;

btnBuscar.addEventListener("click", (e) => {
	const producto = document.querySelector<HTMLInputElement>("#buscar-input")!;
	e.preventDefault();
	//TODO: llamar a la funcion de buscarPorNombre(inpurtValue) con el valor que el usuario ingresio
	// e imprimir en consola el resultado
	if (comprobarInputVacio()) {
		alert("El campo no puede estar vacio");
	} else {
		const productoValue = buscarPorNombre(producto.value);
		resultado!.innerHTML = `
		${productoValue}
		`;
	}
});

const comprobarInputVacio = () => {
	const producto = document.querySelector<HTMLInputElement>("#buscar-input")!;
	if (producto.value.length === 0) {
		return true;
	}
};
