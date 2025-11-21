import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-productos',
  imports: [],
  templateUrl: './lista-productos.html',
  styleUrl: './lista-productos.css',
})
export class ListaProductos implements OnInit {
  titulo = 'Lista de Productos';
  cabeceras = {
    descripcion: 'Productos',
    precio: 'Precio',
    disponibilidad: 'Disponibilidad',
  };

  constructor() { }
  ngOnInit(): void { }
}
