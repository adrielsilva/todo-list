import { Component, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PagesService } from 'src/app/pages/pages.service';
import { StorageService } from 'src/app/storage.services';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  //pagesService: PagesService;
  public itemLista: any = []
  

  constructor(    
    public pagesService: PagesService,
    private route: ActivatedRoute,
    private storageService: StorageService    
  ) {
    // this.itemLista = this.pagesService.retornaLista();
  }

  ngOnInit() {
    this.itemLista = this.route.snapshot.data.lista
  }

 
  verificaEvento(event) {
    this.itemLista.push(event)
  }

  atualizaStatus(index: number) {
    this.pagesService.atualizaStatus(index)
    // this.itemLista[index].status = true;
    // this.storageService.listaTarefas[index].status = true;
  }

  excluirTarefa(index: number) {
    this.pagesService.excluirTarefa(index)
    // this.itemLista.splice(index, 1)
  }

  listavazia(){
    console.log(this.itemLista.length)
    return ( this.itemLista.length == 0 ? true : false) 

  }
  
}
