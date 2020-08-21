import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo-class';
@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {

  vehiculos: Vehiculo[] = [
    { id: 1, marca: 'hyundai', tipoDeVehiculo:'vehiculo mayor', color:'Negro', clase:'camioneta', placa:'N00-PL00', tarjetaDeIdentificacionVehicular:'RAKT0000'},
    { id: 2, marca: 'chaski', tipoDeVehiculo:'vehiculo menor', color:'Blanco', clase:'carro', placa:'N00-PL01', tarjetaDeIdentificacionVehicular:'RAKT0001'},
    { id: 3, marca: 'renault', tipoDeVehiculo:'vehiculo mayor', color:'Rojo', clase:'moto', placa:'N00-PL02', tarjetaDeIdentificacionVehicular:'RAKT0002'},
    { id: 4, marca: 'toyota', tipoDeVehiculo:'vehiculo menor', color:'Rojo', clase:'carro', placa:'N00-PL03', tarjetaDeIdentificacionVehicular:'RAKT0003'},
    { id: 5, marca: 'volvo', tipoDeVehiculo:'vehiculo menor', color:'Blanco', clase:'moto', placa:'N00-PL04', tarjetaDeIdentificacionVehicular:'RAKT0004'},
    { id: 6, marca: 'kawasaki', tipoDeVehiculo:'vehiculo mayor', color:'Negro', clase:'camioneta', placa:'N00-PL05', tarjetaDeIdentificacionVehicular:'RAKT0005'},
    { id: 7, marca: 'lenovo', tipoDeVehiculo:'vehiculo menor', color:'Blanco', clase:'moto', placa:'N00-PL06', tarjetaDeIdentificacionVehicular:'RAKT0006'},
    { id: 8, marca: 'lenovo', tipoDeVehiculo:'vehiculo mayor', color:'Negro', clase:'carro', placa:'N00-PL07', tarjetaDeIdentificacionVehicular:'RAKT0007'},
    { id: 9, marca: 'kawasaki', tipoDeVehiculo:'vehiculo menor', color:'Blanco', clase:'camioneta', placa:'N00-PL08', tarjetaDeIdentificacionVehicular:'RAKT0008'},
    { id: 10, marca: 'kawasaki', tipoDeVehiculo:'vehiculo mayor', color:'Negro', clase:'camioneta', placa:'N00-PL09', tarjetaDeIdentificacionVehicular:'RAKT0009'} 

  ];
  

  constructor() { }

  ngOnInit(): void {
  }

}
