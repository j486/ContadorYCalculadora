import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {

   this.numero1 = parseFloat(this.route.snapshot.queryParamMap.get('numero1') || '0')
   this.numero2 = parseFloat(this.route.snapshot.queryParamMap.get('numero2') || '0')
   
  }
  numero1!: number;
  numero2!: number;
  resultado!: number;
  valor: string = ''

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }

  restar(){
    this.resultado = this.numero1 - this.numero2;
  }

  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(){
    this.resultado = this.numero1 / this.numero2;
  }

}
