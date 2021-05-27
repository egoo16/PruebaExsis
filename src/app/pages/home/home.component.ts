import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { NoticiaModel } from '../models/noticia.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cargando = false;
  noticias: NoticiaModel[] = [];
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('noticias').subscribe(({ items }) => {
      this.noticias = items;
    });
    this.store.select('ui').subscribe(({ isLoading }) => {
      this.cargando = isLoading;
    });
  }
}
