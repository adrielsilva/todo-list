import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public itemLista:any = []

  constructor() { 
    this.itemLista = [
      {descricao: 'Cras justo odio'},
      {descricao: 'Dapibus ac facilisis in'}
    ]
  }

  ngOnInit() {
  }

}
