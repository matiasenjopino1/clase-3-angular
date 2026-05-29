import { Component,OnInit } from '@angular/core';
import { Productos } from '../services/productos';
import { CommonModule } from '@angular/common';
import { DescuentoPipe } from '../pipes/descuento-pipe';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule,DescuentoPipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos {
  
  productos:any
  nuevoProducto = {
    id:5,
    nombre:'Remera negra',
    precio:1500,
    descuentoPorcentaje:12,
    fechaAlta: new Date('2026-04-22')
  }
  constructor(private productoService:Productos){
  }
  
  ngOnInit(){
    this.productos = this.productoService.getProductos()
  }


    agregarProducto(){
      this.productoService.addProducto(this.nuevoProducto)
    }

    borrarProducto(id:any){
      this.productoService.deleteProducto(id)
    }

}
