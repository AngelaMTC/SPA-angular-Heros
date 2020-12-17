import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

Nombre = 'Ángela TC';
NombreAlterno = 'AnGeLitA';
VideoUrl = 'https://www.youtube.com/embed/HjsfCD0Hl40';
contra = true;
ArrayPrueba = ['A', 'B', 'C', 'D', 'F', 'G'];
Pi = Math.PI;
Fecha = new Date();
Precio = 199.99;


  constructor() { }

  ngOnInit(): void {
  }

}
