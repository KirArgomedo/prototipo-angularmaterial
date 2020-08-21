import { Component, OnInit } from '@angular/core';
import { CargarScriptsServicioService } from  '../cargar-scripts-servicio.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private cargarScripts: CargarScriptsServicioService) { 
    cargarScripts.carga(["general"]);
  }

  ngOnInit(): void {
  }

}
