import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {

  
  productos: String[] = []

  insertarProducto(valor: string){
    if(valor.trim().length == 0){
      return;
    }
    this.productos.push(valor);
  }
}
