import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { DoneComponent } from './done/done.component';
import { ListaService } from './lista/lista.service';




@NgModule({
  declarations: [

    ListaComponent,

    DoneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ListaService],
  bootstrap: []
})
export class PagesModule { }