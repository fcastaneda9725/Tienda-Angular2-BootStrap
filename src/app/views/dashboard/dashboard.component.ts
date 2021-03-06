import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { HttpService } from '../../services/http.service';

import { TarjetaProdComponent } from '../tarjeta-prod/tarjeta-prod.component';
import { CarritoComponent } from '../carrito/carrito.component';

//Componente Principal o Dashboard

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}
