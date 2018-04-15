import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { AppRoutes } from '../../app.routes';



@Component({
  selector: 'tarjeta-prod',
  templateUrl: './tarjeta-prod.component.html',
  styleUrls: ['./tarjeta-prod.component.css']
})
export class TarjetaProdComponent implements OnInit {
  private baseDatos: any [] = [];
  prueba: any [] = [];
  i: number;
  j: number =0;
  constructor( public _dataS : DataService ) { }

anadirCarrito( i ) {

  this.baseDatos = this._dataS.prod;
  console.log(this.baseDatos);
  console.log(this.baseDatos[i].valor);
  this.prueba[this.j] = this.baseDatos[i];
  this.j = this.j+1;
  console.log(this.j);
  console.log(this.prueba);

  return this._dataS.prod[i].cantidad = this.baseDatos[i].cantidad - this.baseDatos[i].valor;
                  }

  verM ( i ) {
    this._dataS.asignarIndex(i);
  }



ngOnInit() {

  }

}
