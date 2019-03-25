import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private heroes: Heroe[] = [];
  private termino: string;

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>  {
      // console.log(params['termino']);
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }

}
