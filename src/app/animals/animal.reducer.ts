import { createAction, createReducer, on, props } from '@ngrx/store';
import { crear, editar, eliminar, pelear } from './animal.actions';
import { Animal } from './models/animal.model';

export const estadoInicial: Animal[] = [
  new Animal('Tom', 'gatos'),
  new Animal('Simba', 'leones'),
  new Animal('Tigor', 'tigres'),
  new Animal('Isrrael', 'gatos'),
];

const _animalReducer = createReducer(
  estadoInicial,
  on(crear, (state, { name, tipo }) => [...state, new Animal(name, tipo)]),
  on(eliminar, (state, { id }) => {
    return state.filter((animal) => animal.id != id);
  }),
  on(editar, (state, { id, name }) => {
    return state.map((animal) => {
      if (animal.id === id) {
        return {
          ...animal,
          name,
        };
      } else {
        return animal;
      }
    });
  }),
  on(pelear, (state, { source }) => {
    const presaIndex = Math.floor(Math.random() * state.length);
    let presaEscogida = state[presaIndex];
    console.log(source.name, ' -> ', presaEscogida.name);

    return state.map((presa) => {
      if (
        presa.id === presaEscogida.id &&
        source.id !== presaEscogida.id &&
        presa.vida > 0
      ) {
        return { ...presa, vida: presa.vida - source.dano };
      } else {
        return presa;
      }
    });
  })
);

// @ts-ignore
export function animalReducer(state, action) {
  return _animalReducer(state, action);
}
