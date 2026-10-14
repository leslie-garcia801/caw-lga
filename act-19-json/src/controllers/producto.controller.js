import * as model from "../models/producto.model.js";

export function listarProductos(){
    return {ok:true, data: model.listarDisponibles()};
};

export function verProductos(id){
    const producto = model.obtenerPorId(id);
    if(!producto){
        return {ok:false, error:{mensaje:"Producto no encontrado", detalles: []}}
    }
    return {ok:true, data: producto};
};