import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Response } from '@angular/http';

@Injectable()
export class DataService {
  private usuarios: string[] = [];
  info: any = {};

  constructor(private httpService : HttpService){ }



  newUser(nombre: string){
    this.usuarios.push(nombre);
    //this.logService.escribirLog('Se añadio el usuario '+ nombre);
  }

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => console.log(data)
      );
  }


}
