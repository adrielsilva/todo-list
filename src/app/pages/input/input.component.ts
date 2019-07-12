import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StorageService } from 'src/app/storage.services';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() returnDados = new EventEmitter<any>()

  public contador = 0;
  public tarefaForm: FormGroup;

  constructor(public storageService: StorageService) {
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
    this.storageService.listaTarefas.push(this.tarefaForm.value)
    this.tarefaForm.reset();
    this.contador += 1;
  }

}
