import { Injectable } from '@angular/core';
import productos from '../api/productos';
import { Producto } from '../api/productosClass';
@Injectable({
  providedIn: 'root',
})
export class Productos {

  constructor(){}
  getProductos(){
    return productos
  }

  addProducto(productoRaw:Omit<Producto,'id'>){

    const producto_id = productos.length > 0 ? Math.max(...productos.map(producto => producto.id)) + 1 : 1
    const new_product:Producto = {
      id:producto_id,
      ...productoRaw
    }
    productos.push(new_product)
  }

  deleteProducto(id:any){
    const index = productos.findIndex((producto:any) => producto.id === id)
    if (index !== 1) {
      productos.splice(index,1)
    }
  }

}

