import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
