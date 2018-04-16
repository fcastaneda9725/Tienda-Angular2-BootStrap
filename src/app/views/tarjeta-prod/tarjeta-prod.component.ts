import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';
import { AppRoutes } from '../../app.routes';

//Componente para las tarjetas de cada producto

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
    this._dataS.listaCompras(i);
}

  verM ( i ) {
    this._dataS.asignarIndex(i);
  }



ngOnInit() {

  }

}
