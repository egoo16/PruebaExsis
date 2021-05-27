import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { RegistroComponent } from './registro/registro.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    NoticiaComponent,
    PagesComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule, FormsModule],
  exports: [PagesComponent, HomeComponent, RegistroComponent, NoticiaComponent],
})
export class PagesModule {}
