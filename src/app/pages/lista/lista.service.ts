import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor() {

  }

  getLista() {
    return [
      { id:1,
        descricao: 'Cras justo odio' },
      { id:2,
        descricao: 'Dapibus ac facilisis in' }
    ]
  }
}
