import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {
  heroe: Heroe;
  urlImg: string;
  constructor(private heroeSevicio: HeroesService,
              private activadedRoute: ActivatedRoute,
              private router: Router) {
                this.activadedRoute.params.subscribe(
                  params => {
                    this.heroe = this.heroeSevicio.getHeroe(params['nombre'].toString());
                    this.urlImg = this.heroe.casa === 'Marvel' ? 'assets/img/Marvel-icon.png' : 'assets/img/dc-icon.png';
                  }
                )
               }

  ngOnInit(): void {
    // this.heroe = this.heroeSevicio.getHeroe('Aquaman');
  }

  regresar() {
    this.router.navigateByUrl('/heroes');
  }

}
