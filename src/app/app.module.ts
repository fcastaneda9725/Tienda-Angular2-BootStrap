import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { MenuComponent } from './views/menu/menu.component';


import { TarjetaProdComponent } from './views/tarjeta-prod/tarjeta-prod.component';

import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';
import { BuscadorPipe } from './pipe/buscador.pipe';
import { VerMasComponent } from './views/ver-mas/ver-mas.component';
import { CarritoComponent } from './views/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    TarjetaProdComponent,
    BuscadorPipe,
    VerMasComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'tienda'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuard, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
