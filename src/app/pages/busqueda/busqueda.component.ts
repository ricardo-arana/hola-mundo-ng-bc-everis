import { Component, OnInit } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {
  listaHeroes: Heroe[];
  constructor(private router: Router) {
    console.log('ingresamos una busqueda');
   }

  ngOnInit(): void {
  }

  escucharHijo(nombre: string) {
    this.router.navigate(['heroe', 'nombre']);
  }

}
