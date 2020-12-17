import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { ApiHeroes } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor( private rest: HttpClient) { }

  getHeroes(){
    return this.rest.get('http://localhost:3000/heroesAct').toPromise();
  }

  postHeroes(insertar:ApiHeroes){
    return this.rest.post('http://localhost:3000/InsHeroe', insertar).toPromise();
  }

  putHeroes(insertar:ApiHeroes, id: string){
    return this.rest.put(`http://localhost:3000/heroe/${id}`, insertar).toPromise();
  }

  deleteHeroes(id: string){
    return this.rest.delete(`http://localhost:3000/hero/${id}`).toPromise();
  }
}
