import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//services
import { EquipoService } from './equipo.service';
//routing
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NgForComponent,
    EncabezadoComponent,
    ContactoComponent,
    InicioComponent,
    NosotrosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [
    EquipoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
