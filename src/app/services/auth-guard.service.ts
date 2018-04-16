import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

//Servicio de Autorización y verificación de usuario en Firebase

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {

      return true;

    }

    this.router.navigate(['/']);
    return false;
  }

}
