import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/storage.services';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  public itemLista: any = []

  constructor(
    private route:ActivatedRoute,
    public storageService:StorageService
  ) { }

  ngOnInit() {
    this.itemLista = this.route.snapshot.data.lista
  console.log(this.itemLista)
  }

}
