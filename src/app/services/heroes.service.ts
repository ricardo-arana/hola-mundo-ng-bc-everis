import { Injectable } from '@angular/core';
import { heroes } from '../config/heroes';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }

  getAllHeroes() {
    return heroes;
  }
}
