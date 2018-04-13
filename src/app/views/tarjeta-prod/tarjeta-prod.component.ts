import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TitleCasePipe, CurrencyPipe } from '@angular/common';
import { FormsModule, FormControl } from '@angular/forms';



@Component({
  selector: 'tarjeta-prod',
  templateUrl: './tarjeta-prod.component.html',
  styleUrls: ['./tarjeta-prod.component.css']
})
export class TarjetaProdComponent implements OnInit {
  public baseDatos: any [];
  public i: number;
  public valor: number;

  constructor( public _dataS : DataService ) {  }

anadirCarrito( i, valor) {

  this.baseDatos = this._dataS.prod;
  console.log(this.baseDatos);
  console.log(this.baseDatos[i].valor);
                  }

}
