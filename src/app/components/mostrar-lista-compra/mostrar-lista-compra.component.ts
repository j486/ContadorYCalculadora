import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-lista-compra',
  templateUrl: './mostrar-lista-compra.component.html',
  styleUrls: ['./mostrar-lista-compra.component.css']
})
export class MostrarListaCompraComponent {

  @Input()
  lista: String[] = []

  
} 
