import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { ListaProductos } from './lista-productos/lista-productos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, ListaProductos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mi primera app con Angular');
}
