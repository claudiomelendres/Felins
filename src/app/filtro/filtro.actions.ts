import { createAction, props } from '@ngrx/store';
import { tiposValidos } from '../animals/models/animal.model';

export const setFiltro = createAction(
  '[filtro] Set Filtro',
  props<{ filtro: tiposValidos }>()
);
