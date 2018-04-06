import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';


@Injectable()
export class DataService {
  private usuarios: string[] = [];

  constructor(private httpService : HttpService){ }



  newUser(nombre: string){
    this.usuarios.push(nombre);
  }

  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => console.log(data)
      )
    return this.usuarios;
  }


}
