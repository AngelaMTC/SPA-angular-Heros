import { Component, OnInit, AfterContentInit, DoCheck, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy} from '@angular/core';
import { HeroService } from 'src/app/services/Hero.services';
import { Router } from '@angular/router';

// Decorador:
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit, AfterContentInit, DoCheck, AfterContentChecked,
 AfterViewInit, AfterViewChecked, OnDestroy {

  constructor( private heroService: HeroService,
    private _aRouter: Router) {
    // console.log('Constructor de la clase');
    }

  ArrayHeros: object[] = []

  ngOnDestroy(){
    console.log("Evento ngOnDestroy");
  }

  ngAfterViewChecked(){
    console.log("Evento ngAfterViewChecked");
  }

  ngAfterViewInit(){
    console.log("Evento ngAfterViewInit");
  }

  ngAfterContentChecked(){
console.log("Evento ngAfterContentChecked");
  }

  ngDoCheck(){
console.log("Evento ngDocheck");
  }

ngAfterContentInit(){
  console.log("Evento ngAfterContentInit");
}
  // Se ejecuta cuando se termina de renderizar el componente.
  ngOnInit(): void {
    this.ArrayHeros = this.heroService.getHeros();
  }
  // Chido.
  Navegar(index){
    console.log(index);
    this._aRouter.navigate(['/hero', index]);
  }

}
