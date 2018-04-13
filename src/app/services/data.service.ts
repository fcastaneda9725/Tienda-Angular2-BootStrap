import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';


@Injectable()
export class DataService {

  public prod: any;
  public prodEspecifico: any;
  public i: number;

  constructor(private httpService : HttpService){
      this.getBase();
}



  getBase(){
    this.httpService.getDatos()
      .subscribe(
        (data: Response) => { this.prod = data;
                              console.log(this.prod);
                            })

  }

  asignarIndex( i ) {
    this.prodEspecifico = this.prod[i];
    console.log(this.prodEspecifico);
  }


}
