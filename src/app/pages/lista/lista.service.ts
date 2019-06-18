import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() {

  }

  getLista() {
    return [
      {  descricao: 'Cras justo odio',
          status: false},
      {  descricao: 'Dapibus ac facilisis in',
         status: false }
    ]
  }
}
