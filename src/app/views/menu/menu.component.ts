import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../app.routes';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

//Componente de Menú

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public authService: AuthService, private _dataS : DataService ) { }

    logOut() {
      this.authService.logout();
    }

  ngOnInit() {
  }

}
