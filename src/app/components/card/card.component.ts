import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroe: Heroe;
  @Output() salida = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  llamarHeroe(heroe: Heroe) {
    this.salida.emit(heroe.nombre);
  }

}
