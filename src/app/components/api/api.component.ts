import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiHeroes } from 'src/app/models/models';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor( private rest2: HeroesService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: any[] = [];
  apis: ApiHeroes = new ApiHeroes;
  id: any;

  getHeroes(){
    return this.rest2.getHeroes().then((data: any) => {
      this.heroes = data;
      console.log(this.heroes);
    });
  }
  postHeroes(form: NgForm){
    return this.rest2.postHeroes(this.apis).then((data: any) => {
      this.apis = data;
      console.log(this.apis);
    });
  }
  putHeroes(){
    return this.rest2.putHeroes(this.apis, this.id).then((data:any)=> {
      this.apis = data;
      console.log(this.apis);
    });
  }

  deleteHeroes(){
    return this.rest2.deleteHeroes(this.id).then((data:any) => {
      this.apis = data;
      console.log(this.apis);
    });
  }

  getId(idHeroe: string){
    this.id = idHeroe;
    console.log(this.id);
  }
}
