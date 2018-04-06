import { Component, OnInit } from '@angular/core';
import { appRoutes } from '../../app.routes'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-menu',
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
