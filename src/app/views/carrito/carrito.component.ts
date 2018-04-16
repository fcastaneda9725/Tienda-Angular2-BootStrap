import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

//Componente de Carrito de Compras

@Component({
  selector: 'carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor( public _dataS: DataService, private router : Router) { }

  vaciarCarrito () {
    this._dataS.vaciarCarrito();
    this.router.navigate(['dashboard']);
  }

  pagar () {
    this._dataS.pagarCarrito();
    this.router.navigate(['dashboard']);
  }

  ngOnInit() {
  }

}
