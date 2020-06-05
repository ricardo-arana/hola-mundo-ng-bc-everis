import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SaludadorComponent } from './components/saludador/saludador.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { CardComponent } from './components/card/card.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SaludadorComponent,
    InicioComponent,
    HeroesComponent,
    CardComponent,
    HeroeComponent,
    BusquedaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
