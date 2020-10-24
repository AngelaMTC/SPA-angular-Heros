import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/services/Hero.services';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor( private _aRoute:ActivatedRoute,
    private _herosService: HeroService
    ) { }

    Resultados:any = [];
    Busqueda2: string = '';
  
// Cuando se termina de renderizar el componente.
  ngOnInit(): void {
    // Obtener parámetros de la ruta activa.
    this._aRoute.params.subscribe(params => {
      console.log(params['termino']);
      this.Resultados = this._herosService.searchHeros(params['termino']);
      console.log(this.Resultados);

          this.Busqueda2 = params['termino'];
    })

  }

}
