import { Injectable } from '@angular/core';
import productos from '../api/productos';
@Injectable({
  providedIn: 'root',
})
export class Productos {

  constructor(){}
  getProductos(){
    return productos
  }

  addProducto(producto:any){
    productos.push(producto)
  }

  deleteProducto(id:any){
    const index = productos.findIndex((producto:any) => producto.id === id)
    if (index !== 1) {
      productos.splice(index,1)
    }
  }

}

