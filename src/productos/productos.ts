import { Productos } from "./productos.interfaces";

//TODO: impletentar interface en procutosdb
const productosdb: Productos[] = [
	{
		id: 1,
		nombre: "Leche",
		precio: 2.99,
	},
	{
		id: 2,
		nombre: "Pan",
		precio: 1.99,
	},

	{
		id: 3,
		nombre: "Huevos",
		precio: 4.49,
	},
	{
		id: 4,
		nombre: "Cereal",
		precio: 3.79,
	},
	{
		id: 5,
		nombre: "Carne",
		precio: 9.99,
	},
	{
		id: 6,
		nombre: "Queso",
		precio: 5.49,
	},
];

// crear una funcion que busque en el array de productos y devuelva un listado de productos que
// coincida con el parametro de busqueda ejemplo
// buscarPorNombre("leche")
// resultado esperado
// {
// 	id: 1,
// 	nombre: 'Leche',
// 	precio: 2.99,
// }

export function buscarPorNombre(input: string) {
	let mensajeProducto;
	let productoEncontrado = false;
	productosdb.forEach((element) => {
		if (
			input.toUpperCase() === element.nombre.toUpperCase() &&
			!productoEncontrado
		) {
			productoEncontrado = true;
			mensajeProducto = `
			<p>id:${element.id}</p>
			<p>nombre:${element.nombre}</p>
			<p>precio:${element.precio}</p>
			`;
		}
	});
	if (productoEncontrado) {
		console.log("Producto encontrado");
	} else {
		console.log(`No se encuentra el producto`);
	}
	console.log(productoEncontrado);
	return mensajeProducto;
}
