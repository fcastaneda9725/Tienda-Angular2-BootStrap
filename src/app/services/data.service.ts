import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from '@angular/http';

//Servicio para el manejo de todos los datos de la App

@Injectable()
export class DataService {

  public prod: any;
  public prodEspecifico: any;
  public listaCarrito: any [] = [];
  public i: number;
  public j: number = 0;
  public subtotal:number = 0;
  public total:number= 0;

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

  pagarCarrito () {
    for ( let i in this.prod){
      this.prod[i].valor = 1;
    }
    this.httpService.postDatos(this.prod)
    .subscribe(
      (data: Response) => { this.prod = data;
                          })
    this.vaciarCarrito();
  }

  asignarIndex( i ) {
    this.prodEspecifico = this.prod[i];
  }

  listaCompras( i ) {

    this.listaCarrito[this.j] = this.prod[i];
    this.subtotal = this.listaCarrito[this.j].precio * this.listaCarrito[this.j].valor;
    this.total = this.total + this.subtotal;
    this.j = this.j+1;
     //Dejo este comentario en Consola solo para depuración
    console.log(this.listaCarrito);


    return this.prod[i].cantidad = this.prod[i].cantidad - this.prod[i].valor, this.j;
  }

  vaciarCarrito ( ) {
    for ( let i in this.prod){
      this.prod[i].valor = 1;
    }
    this.listaCarrito = [];
    this.subtotal = 0;
    this.total = 0;
    this.j = 0;

    this.getBase();

  }



}
