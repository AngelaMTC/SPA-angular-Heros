import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck} from '@angular/core';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
  ]
})
export class HeroCardComponent implements OnInit, OnChanges, DoCheck {

  ngDoCheck(){
    console.log("Evento ngDoCheck");
  }

  ngOnChanges(){
    console.log("Evento ngOnChanges");
  }

// Recibir la información de un componente PADRE:
@Input()PadreHero: any = {};
@Input()Index: number;

// Mandar información del HIJO a un PADRE:
@Output()selectedHero: EventEmitter<number>;

  constructor(private Router: Router ) { 
    // console.log(this.PadreHero);
    console.log("Constructor de Card");
    this.selectedHero = new EventEmitter();
  }

  ngOnInit(): void {
    console.log("Evento ngOnit");
  }
  Navegar(){
    this.Router.navigate(['/hero', this.Index])
  }
}
