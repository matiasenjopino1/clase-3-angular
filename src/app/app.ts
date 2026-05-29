import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //Para poder usar ngModel
import { CommonModule } from '@angular/common';
import { ListaProductos } from './lista-productos/lista-productos';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   protected readonly title = signal('clase-1-angular');

   edad:string = '25'
}
