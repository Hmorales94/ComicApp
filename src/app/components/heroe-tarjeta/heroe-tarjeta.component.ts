import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: Heroe;

  @Output() heroeElegido: EventEmitter<number>;

  constructor() {
    this.heroeElegido = new EventEmitter();
  }

  ngOnInit() {
  }

  verHeroe() {
    this.heroeElegido.emit(this.heroe.id);
  }

}
