import { ActionReducerMap } from '@ngrx/store';
import * as ui from './shared/ui.reducer';
import * as noticias from './pages/noticias.reducer';

export interface AppState {
  ui: ui.State;
  noticias: noticias.State;
}

export const appReducers: ActionReducerMap<AppState> = {
  ui: ui.uiReducer,
  noticias: noticias.noticiasReducer,
};
