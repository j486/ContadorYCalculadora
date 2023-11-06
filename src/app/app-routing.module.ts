import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { ListaCompraComponent } from './components/lista-compra/lista-compra.component';

const routes: Routes = [
  {
    path: '',
    component: ContadorComponent,
    pathMatch: 'full'
},
{
    path: 'calculadora',
    component: CalculadoraComponent,
    pathMatch: 'full'
},
{
  path: 'contador',
  component: ContadorComponent,
  pathMatch: 'full'
},
{
  path: 'lista-compra',
  component: ListaCompraComponent,
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
