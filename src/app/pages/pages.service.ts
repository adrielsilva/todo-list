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
          console.log(this.itemLista)
          this.itemLista[index].status = true;
          this.storageService.listaTarefas[index].status = true;

        }
        
        excluirTarefa(index: number) {
          this.itemLista.splice(index, 1)
        }
        
        inserirTarefa(tarefa){
          // this.itemLista.push(tarefa) // Isso insere somente local na lista já carregada inicialmente pelo "backend"
          this.storageService.listaTarefas.push(tarefa)
          this.itemLista = this.storageService.listaTarefas //Isso recarrega a lista do backend na lista local do componente (se for grande demais, é ruim).
        }
        
        constructor(
            public storageService: StorageService,
            private route: ActivatedRoute
          ) {
        
          }
}
