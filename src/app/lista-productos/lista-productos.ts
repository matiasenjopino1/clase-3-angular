import { Component, inject, OnInit } from '@angular/core';
import { Productos } from '../services/productos';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { DescuentoPipe } from '../pipes/descuento-pipe';
import { Producto } from '../api/productosClass';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule, DescuentoPipe, CurrencyPipe, DatePipe],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {

  productos: Producto[] = []
  nuevoProducto = {
    nombre: 'Remera negra',
    precio: 1500,
    descuentoPorcentaje: 12,
    fechaAlta: new Date('2026-04-22')
  }
  private productoService = inject(Productos)

  ngOnInit(): void {
    this.cargarProductos()
  }

  cargarProductos(): void {
    this.productos = this.productoService.getProductos()
  }

  agregarProducto(): void {
    const nombre_ejemplo = ['Pantalon blanco','Zapatillas rojas','Cinto negro']
    const nombre_aleatorio = nombre_ejemplo[Math.floor(Math.random() * nombre_ejemplo.length)]
    const anio_aleatorio = Math.floor(Math.random() * (2023- 2000) + 2000)
    const mes_aleatorio = Math.floor(Math.random() * (12 - 1) + 1)
    const dia_aleatorio = Math.floor(Math.random() * (31 - 1) + 1)

    const dinero_aleatorio = Math.floor(Math.random() * (1000 - 1) +1)
    const descuento_aleatorio = Math.floor(Math.random() * (100 - 1) + 1)

    const producto_simulado:Omit<Producto,'id'> = {
      nombre:nombre_aleatorio,
      fechaAlta: new Date(anio_aleatorio,mes_aleatorio,dia_aleatorio),
      precio: dinero_aleatorio,
      descuentoPorcentaje: descuento_aleatorio
    }


    this.productoService.addProducto(producto_simulado)
  }

  borrarProducto(id: any): void {
    this.productoService.deleteProducto(id)
  }

}
