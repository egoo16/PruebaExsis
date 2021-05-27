import { createReducer, on } from '@ngrx/store';
import { setItems, unSetItems } from './noticias.actions';
import { NoticiaModel } from './models/noticia.model';

export interface State {
  items: NoticiaModel[];
}

export const initialState: State = {
  items: [],
};

// tslint:disable-next-line: variable-name
const _noticiasReducer = createReducer(
  initialState,

  on(setItems, (state, { items }) => ({ ...state, items: [...items] })),
  on(unSetItems, (state) => ({ ...state, items: [] }))
);

export function noticiasReducer(state, action): State {
  return _noticiasReducer(state, action);
}
