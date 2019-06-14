import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() returnDados = new EventEmitter<any>()

  public tarefaForm:FormGroup
  constructor() { 
    this.tarefaForm = new FormGroup({
      descricao: new FormControl('')
    })
  }

  ngOnInit() {
  }

  inserirTarefa(){
    console.log(this.tarefaForm.value)
  }

}
