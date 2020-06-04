import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.scss']
})
export class SaludadorComponent implements OnInit {
  saludado: string;
  mostrar = false;
  constructor() { }

  ngOnInit(): void {
  }

  saludar(nombre: string) {
    // if(nombre) {
      this.saludado = nombre;
    // }
  }

}
