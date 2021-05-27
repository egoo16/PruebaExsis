import { createAction, props } from '@ngrx/store';
import { NoticiaModel } from './models/noticia.model';

export const unSetItems = createAction('[Noticias Component] Unset Items');
export const setItems = createAction(
  '[Noticias Component] Set Items',
  props<{ items: NoticiaModel[] }>()
);
