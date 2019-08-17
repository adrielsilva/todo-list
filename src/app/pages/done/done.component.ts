import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.services';
import { fromEventPattern } from 'rxjs';

import { PagesService } from '../pages.service';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  public itemLista: any = []

  constructor(
    private route:ActivatedRoute,
    public storageService:StorageService,
    public pagesService:PagesService
  ) { }

  ngOnInit() {
    this.itemLista = this.route.snapshot.data.lista
  console.log(this.itemLista)
  }

  // atualizaStatus(index: number) {
  //   this.pagesService.atualizaStatus(index)
  //   // this.itemLista[index].status = true;
  //   // this.storageService.listaTarefas[index].status = true;
  // }

}
