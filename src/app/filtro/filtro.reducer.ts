import { Action, createReducer, on } from '@ngrx/store';
import { tiposValidos } from '../animals/models/animal.model';
import { setFiltro } from './filtro.actions';

export var initialState: tiposValidos = null;

const _filtroReducer = createReducer<tiposValidos, Action>(
  initialState,
  on(setFiltro, (state, { filtro }) => filtro)
);

export function filtroReducer(state: tiposValidos | undefined, action: Action) {
  return _filtroReducer(state, action);
}
