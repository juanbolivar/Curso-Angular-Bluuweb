import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  equipo:any[]= [
  {
    nombre:'Ignacio',
    especialidad:'HTML',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, provident dolorum ipsa sed repudiandae voluptate, facilis odit ullam consequuntur iste aspernatur architecto? Ab, recusandae error accusamus nostrum inventore quisquam temporibus.'
  },
  {
    nombre:'María',
    especialidad:'CSS',
    descripcion: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, provident dolorum ipsa sed repudiandae voluptate, facilis odit ullam consequuntur iste aspernatur architecto? Ab, recusandae error accusamus nostrum inventore quisquam temporibus.'
  }
]
  constructor() { 
    console.log('funcionando servicio');
  }

  obtenerEquipo(){
    return this.equipo;
  }
  obtenerUno(i){
    return this.equipo[i]
  }
}
