import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeroesComponent } from './pages/heroes/heroes.component';


const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: '**', pathMatch: 'full',redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
