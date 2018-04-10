import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'tarjeta-prod',
  templateUrl: './tarjeta-prod.component.html',
  styleUrls: ['./tarjeta-prod.component.css']
})
export class TarjetaProdComponent implements OnInit {

  constructor( public dataService : DataService ) { }


  datos() {
    this.dataService.getUsers();
  }
  ngOnInit() {
    this.dataService.getUsers();
  }

}
