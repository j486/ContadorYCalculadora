import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lista-compra-input',
  templateUrl: './lista-compra-input.component.html',
  styleUrls: ['./lista-compra-input.component.css']
})
export class ListaCompraInputComponent {
  
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @ViewChild('txtProducto') txtBuscar!:ElementRef<HTMLInputElement>;

  insertarProducto(){
    const valor = this.txtBuscar.nativeElement.value;
    if(valor.trim().length == 0){
      return;
    }
    this.onEnter.emit(valor)
    this.txtBuscar.nativeElement.value=''
  }
}
