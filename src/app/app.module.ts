import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './components/contador/contador.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { FormsModule } from '@angular/forms';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';
import { MostrarListaCompraComponent } from './components/mostrar-lista-compra/mostrar-lista-compra.component'; // Importa FormsModule
import { ListaCompraInputComponent } from './components/lista-compra-input/lista-compra-input.component';

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
