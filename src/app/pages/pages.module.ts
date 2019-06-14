import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { DoneComponent } from './done/done.component';




@NgModule({
  declarations: [

    ListaComponent,

    DoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class PagesModule { }