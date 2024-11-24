import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';  // Asegúrate de importar el HomeComponent

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent  // Declara tu componente en el módulo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule  // Importa AppRoutingModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
