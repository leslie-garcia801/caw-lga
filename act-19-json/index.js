import * as crtl from "./src/controllers/producto.controller.js";
import * as model from "./src/models/producto.model.js";

console.log("------PRODUCTOS AL ARRANCAR--------");
console.log(model.listar().map((p) => p.nombre));

console.log("--------creando uno nuevo---------");
const nombre = "Sincronizada" + Date.now();
const creado = crtl.crearProducto({nombre, precio:32, categoria:"comida"});

//el controlador devuelve [ok:data] o {ok:false, error}.
//hay que revisar SIEMPRE cual de los dos llego antes de usar el .data

if(creado.ok){
    console.log("creado:", creado.data.nombre);
} else {
    console.log("no se pudo crear:", creado.error.mensaje);
};


console.log("----------Productos ahora---------");
console.log(model.listar().map((p) => p.nombre));

console.log("");
console.log("Abre src/data/productos.js y compruebalo");
console.log("Vuelve a ejecutar: el producto anterior sigue ahí");