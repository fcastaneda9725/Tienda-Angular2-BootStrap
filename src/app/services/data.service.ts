import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';


@Injectable()
export class DataService {

  public prod: any [] = [];

  constructor(private httpService : HttpService){
      this.getUsers();
}



  getUsers(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => { this.prod = data;
                              console.log(this.prod);
                            };



      );
    return this.prod;
  }


}
