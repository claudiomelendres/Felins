import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actionsFiltro from '../../filtro/filtro.actions';
import * as actionsAnimal from '../animal.actions';

import { Animal, tiposValidos } from '../models/animal.model';

@Component({
  selector: 'app-animals-header',
  templateUrl: './animals-header.component.html',
  styleUrls: ['./animals-header.component.scss'],
})
export class AnimalsHeaderComponent implements OnInit {
  filtroActual: tiposValidos = 'leones';
  filtros: tiposValidos[] = ['leones', 'tigres', 'gatos'];
  selectedFilter: string = 'todos';
  animales: Animal[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.animales = state.animals;
    });
  }

  cambiarFiltro() {
    // console.log(this.filtroActual);
    this.store.dispatch(actionsFiltro.setFiltro({ filtro: this.filtroActual }));
  }

  pelear() {
    this.animales.map((cazador) => {
      if (cazador.vida > 0)
        this.store.dispatch(actionsAnimal.pelear({ source: cazador }));
    });
  }
}
