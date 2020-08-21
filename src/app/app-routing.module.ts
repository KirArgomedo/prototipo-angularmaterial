import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { PapeletasComponent } from './papeletas/papeletas.component';
import { HomeComponent } from './home/home.component';
import { RootNavComponent } from './root-nav/root-nav.component';
const routes: Routes = [
  {
    path:"", redirectTo:"/dashboard", pathMatch:"full"
  },
  {
    path: "dashboard"  , component: HomeComponent
  },
  { 
    path: "vehiculos"  , component: VehiculosComponent
  },
  {
    path: "papeletas"  , component: PapeletasComponent
  },
  {
    path:"**", redirectTo:"/dashboard"
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
