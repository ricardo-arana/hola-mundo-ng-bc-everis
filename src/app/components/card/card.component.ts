import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/classes/heroe.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() heroe: Heroe;
  constructor() { }

  ngOnInit(): void {
  }

}
