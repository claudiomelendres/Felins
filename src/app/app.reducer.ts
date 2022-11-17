import { ActionReducerMap } from '@ngrx/store';
import { animalReducer } from './animals/animal.reducer';
import { Animal, tiposValidos } from './animals/models/animal.model';
import { filtroReducer } from './filtro/filtro.reducer';

export interface AppState {
  animals: Animal[];
  filtro: tiposValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
  animals: animalReducer,
  filtro: filtroReducer,
};
