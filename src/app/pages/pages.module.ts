import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ListaComponent } from './lista/lista.component';
import { DoneComponent } from './done/done.component';
import { ListaService } from './lista/lista.service';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaResolveGuard } from './lista/guards/lista.resolve';
import { DoneResolveGuard } from './done/guards/done.resolve';
import { PagesService } from './pages.service';




@NgModule({
  declarations: [

    ListaComponent,

    DoneComponent,

    InputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ListaService, ListaResolveGuard, DoneResolveGuard, PagesService],
  bootstrap: []
})
export class PagesModule { }