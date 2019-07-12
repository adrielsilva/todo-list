import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './pages/lista/lista.component';
import { DoneComponent } from './pages/done/done.component';
import { ListaResolveGuard } from './pages/lista/guards/lista.resolve';
import { DoneResolveGuard } from './pages/done/guards/done.resolve';

const routes: Routes = [
  { path: '', component: ListaComponent },
  {
    path: 'lista',
    component: ListaComponent,
    resolve: {
      lista: ListaResolveGuard
    }
  },

  { 
  path: 'done', 
  component: DoneComponent,
  resolve:{
    lista: DoneResolveGuard
  }
}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
