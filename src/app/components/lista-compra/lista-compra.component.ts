import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent implements OnInit{

  constructor(private route: ActivatedRoute){}
  categoria: string = ''
  
  ngOnInit(): void {
   this.categoria = this.route.snapshot.paramMap.get('categoria') || ''
  }

  
  productos: String[] = []

  insertarProducto(valor: string){
    if(valor.trim().length == 0){
      return;
    }
    this.productos.push(valor);
  }
}
