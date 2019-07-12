import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { DoneComponent } from './pages/done/done.component';

const routes: Routes = [
  { path: '', component: ListaComponent},
  { 
    path: 'lista',
    component: ListaComponent,
    data: {
      tarefas:''
    }
},
  { path: 'done', component: DoneComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
