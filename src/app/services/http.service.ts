import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http : Http) {
      this.getDatos();
}

  getDatos(){
    return this.http.get('https://tienda-next-u.firebaseio.com/productos.json')
      .map((response: Response)=> response.json())
  }

  postDatos( base: any){
    const datos = JSON.stringify(base);
    return this.http.put('https://tienda-next-u.firebaseio.com/productos.json', datos)
    .map((response: Response)=> response.json())
  }
}
