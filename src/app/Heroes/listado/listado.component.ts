import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[]=['Spidermar','Ironman','Hulk','Thor','Capitan America'];
  heroesBorrados:string='';
  borrarHeroe(){

    this.heroesBorrados = this.heroes.shift() || '';
  }
  

}
