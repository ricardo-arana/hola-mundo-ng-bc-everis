import { Injectable } from '@angular/core';
import { heroes } from '../config/heroes';
import { Heroe } from '../classes/heroe.interface';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getAllHeroes(): Heroe[] {
    return heroes;
  }

  getHeroe(nombreHeroe: string): Heroe {
    return heroes.filter(heroe => heroe.nombre === nombreHeroe)[0];
  }
}
