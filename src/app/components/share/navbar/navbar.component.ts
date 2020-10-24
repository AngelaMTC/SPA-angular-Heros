import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( private _Router: Router) { }

  // Se comentó por errores:
  ngOnInit(): void {
  }
  Search(searchValue){
    console.log(searchValue);
    this._Router.navigate(['/results', searchValue]);
  }
}
