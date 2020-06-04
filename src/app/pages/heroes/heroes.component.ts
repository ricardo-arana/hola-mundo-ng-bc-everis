import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from 'src/app/classes/heroe.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  listaHeroes: Heroe[];
  constructor(private heroesService: HeroesService) {
    console.log(this.heroesService.getAllHeroes());
   }

  ngOnInit(): void {
    this.listaHeroes = this.heroesService.getAllHeroes();
  }

  escucharHijo(nombre: string) {
    alert(`el heroe seleccionado es ${nombre}`);
  }

}
