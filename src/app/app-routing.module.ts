import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'heroe/:nombre', component: HeroeComponent},
  { path: 'busqueda/:termino', component: BusquedaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
