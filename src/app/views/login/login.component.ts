import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorInicioSesion : string;
  user = {
   email: '',
   password: ''
};

  constructor(private authService: AuthService, private router: Router) {
  }

    signIn() {
      var codigoDeError = false;
      var error;
      this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
         console.log(res);

         this.router.navigate(['dashboard']);
      })
      .catch((err) => { console.log('Error: ' err);
                        if (err){
                          this.errorInicioSesion = 'Error en el inicio de sesión';
                        });
    }


  ngOnInit() {

  }

}
