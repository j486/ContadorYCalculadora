import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './componentes/contador/contador.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { ListaCompraComponent } from './componentes/lista-compra/lista-compra.component';

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
