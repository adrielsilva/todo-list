import { Component, OnInit } from '@angular/core';
import { ListaService } from './lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public itemLista:any = []

  constructor(
    private service:ListaService
  ) { 
    this.itemLista = this.service.getLista()
  }

  ngOnInit() {
  }

  verificaEvento(event){
    console.log(event)
    this.itemLista.push({descricao: event})
    console.log(this.itemLista)
  }

  atualizaStatus(index){
    this.itemLista[index].status = true;
  }
}
