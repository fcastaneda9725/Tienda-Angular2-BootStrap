import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'tarjeta-prod',
  templateUrl: './tarjeta-prod.component.html',
  styleUrls: ['./tarjeta-prod.component.css']
})
export class TarjetaProdComponent implements OnInit {

  constructor( public _dataS : DataService ) { }




}
