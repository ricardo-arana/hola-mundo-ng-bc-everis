import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hola bootcamp!';
  numero = 6;
  nombre = 'Ricardo';
  apellido: string;
  fechaNacimiento: Date;
  fechaTexto: string;
  saludado: string;

  constructor() {
    this.apellido = 'Arana Reyes Guerrero';
    this.fechaNacimiento = new Date('11/02/1990');
    this.fechaTexto = `${this.fechaNacimiento.getDate()}/${this.fechaNacimiento.getMonth()}/${this.fechaNacimiento.getFullYear()}`;

  }

  saludar(nombre: any) {
    console.log(nombre)
    if(nombre) {
      this.saludado = nombre;
    }
  }
}
