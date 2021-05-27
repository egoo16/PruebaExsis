import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { NoticiaModel } from '../models/noticia.model';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css'],
})
export class NoticiaComponent implements OnInit {
  cargando = true;
  noticias: NoticiaModel[] = [];
  noticiaSeleccionada: NoticiaModel = new NoticiaModel(0, '', '');

  idNotice = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    activatedRoute.params.subscribe((params) => {
      const id = params.id;
      if (id) {
        this.idNotice = id;
      } else {
        this.idNotice = 0;
      }
    });
  }

  ngOnInit(): void {
    this.store.select('ui').subscribe(({ isLoading }) => {
      this.cargando = isLoading;
    });

    this.store.select('noticias').subscribe(({ items }) => {
      this.noticias = items;
      const result = this.noticias.find((item) => item.id === this.idNotice);

      if (result !== undefined) {
        this.noticiaSeleccionada = result;
      }
    });
  }
}
