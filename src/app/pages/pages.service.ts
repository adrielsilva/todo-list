import { Injectable } from '@angular/core';
import { StorageService } from '../storage.services';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PagesService {
    public itemLista: any = []

    
    retornaLista(){
        return this.itemLista = this.route.snapshot.data.lista;
      }
        
        verificaEvento(event) {
          this.itemLista.push(event)
        }
        
        atualizaStatus(index: number) {
          this.itemLista[index].status = true;
          this.storageService.listaTarefas[index].status = true;
        }
        
        excluirTarefa(index: number) {
          this.itemLista.splice(index, 1)
        }
        
        inserirTarefa(tarefa){
          this.storageService.listaTarefas.push(tarefa)
        }
        
        constructor(
            public storageService: StorageService,
            private route: ActivatedRoute
          ) {
        
          }
}
