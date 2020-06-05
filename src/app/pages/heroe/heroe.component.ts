import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  constructor(private heroeSevicio: HeroesService,
              private activadedRoute: ActivatedRoute) {
                this.activadedRoute.params.subscribe(
                  params => {
                    this.heroe = this.heroeSevicio.getHeroe(params['nombre'].toString());
                  }
                )
               }

  ngOnInit(): void {
    // this.heroe = this.heroeSevicio.getHeroe('Aquaman');
  }

}
