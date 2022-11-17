import { createAction, props } from '@ngrx/store';
import { Animal, tiposValidos } from './models/animal.model';

export const crear = createAction(
  '[ANIMAL] Crear Animal',
  props<{ name: string; tipo: tiposValidos }>()
);

export const eliminar = createAction(
  '[ANIMAL] Remover Animal',
  props<{ id: number }>()
);

export const editar = createAction(
  '[ANIMAL] Editar Animal',
  props<{ id: number; name: string }>()
);

export const pelear = createAction(
  '[ANIMAL] Pelear Animal',
  props<{ source: Animal }>()
);
