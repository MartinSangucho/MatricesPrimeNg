import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Ruta predeterminada
  { path: 'home', component: HomeComponent },           // Ruta al componente Home
];
