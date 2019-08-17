import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { MenuComponent } from './themes/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StorageService } from './storage.services';
import { PagesService } from './pages/pages.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [StorageService, PagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
