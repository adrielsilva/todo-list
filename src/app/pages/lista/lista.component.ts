import { Component, OnInit, EventEmitter } from '@angular/core';
import { ListaService } from './lista.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.services';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public itemLista: any = []

  constructor(
    public storageService: StorageService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.itemLista = this.route.snapshot.data.lista
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

}
