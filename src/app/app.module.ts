import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


import { CargarScriptsServicioService } from './cargar-scripts-servicio.service';


/***************   IMPORTACIONES DE LAS API DE ANGULAR MATERIAL ************/

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RootNavComponent } from './root-nav/root-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PapeletasComponent } from './papeletas/papeletas.component';
import { HomeComponent } from './home/home.component';

/**********************************************************************/

@NgModule({
  declarations: [                    
    AppComponent, RootNavComponent, VehiculosComponent, PapeletasComponent, HomeComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [CargarScriptsServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
