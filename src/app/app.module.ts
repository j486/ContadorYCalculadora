import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './componentes/contador/contador.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { ListaCompraComponent } from './componentes/lista-compra/lista-compra.component';
import { MostrarListaCompraComponent } from './componentes/mostrar-lista-compra/mostrar-lista-compra.component';
import { ListaCompraInputComponent } from './componentes/lista-compra-input/lista-compra-input.component'; // Importa FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    CalculadoraComponent,
    ListaCompraComponent,
    MostrarListaCompraComponent,
    ListaCompraInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
