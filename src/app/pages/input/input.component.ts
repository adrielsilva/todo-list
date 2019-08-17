import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/storage.services';

import { PagesService } from '../pages.service';
import { ListaComponent } from '../lista/lista.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() returnDados = new EventEmitter<any>()

  public contador = 0;
  public tarefaForm: FormGroup;
  public debugInput = '';


  constructor(private pagesService: PagesService, public storageService: StorageService, public ListaComponent: ListaComponent) {
    this.tarefaForm = new FormGroup({
      id: new FormControl(''),
      descricao: new FormControl(''),
      status: new FormControl(false),
    })
    
    
  }

  ngOnInit() {
  }
  
  inserirTarefa() {
    this.tarefaForm.controls['id'].patchValue(this.contador)
    this.tarefaForm.controls['status'].patchValue(false)
    this.pagesService.inserirTarefa(this.tarefaForm.value)
    // this.storageService.listaTarefas.push(this.tarefaForm.value)
    console.log(this.storageService.listaTarefas)
    this.tarefaForm.reset();
    this.contador += 1;
  }

  debug(evento: KeyboardEvent){
    this.debugInput = (<HTMLInputElement>evento.target).value
  }

}
