import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Asegúrate de que HomeComponent exista

const routes: Routes = [
  { path: '', component: HomeComponent },  // Ruta principal
  { path: 'home', component: HomeComponent }  // Ejemplo de otra ruta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
