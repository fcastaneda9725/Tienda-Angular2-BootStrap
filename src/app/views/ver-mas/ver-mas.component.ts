import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AppRoutes } from '../../app.routes';

//Componente de Ver Más

@Component({
  selector: 'ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent implements OnInit {
  ver: any;

  constructor( public _dataS : DataService ) {
      this.ver = this._dataS.prodEspecifico;
    }

  ngOnInit() {
  }

}
