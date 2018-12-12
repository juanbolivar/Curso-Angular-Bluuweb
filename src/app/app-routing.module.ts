import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  { path: 'contacto', component: ContactoComponent },
  { path: 'equipo/:id', component: EquipoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: '', component: InicioComponent, pathMatch: 'full' },
  //Aquí deberíamos crear un componente NotFoundComponent que tuviese una plantilla html con error 404
  { path: '**', redirectTo: 'nosotros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
