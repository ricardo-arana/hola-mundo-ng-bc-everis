import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  listaHeroes: Heroe[];
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private heroeService: HeroesService
    ) {
      this.activatedRoute.params.subscribe(
        params => this.listaHeroes = heroeService.getBusquedaHeroes(params['termino'].toString())
      );
   }

  ngOnInit(): void {
  }

  escucharHijo(nombre: string) {
    this.router.navigate(['heroe', nombre]);
  }

}
