import { Component, OnInit } from '@angular/core';
import { AppRoutes } from '../../app.routes';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( public authService: AuthService ) { }

    logOut() {
      this.authService.logout();
    }

  ngOnInit() {
  }

}
