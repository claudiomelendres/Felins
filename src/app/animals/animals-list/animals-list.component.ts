import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal, tiposValidos } from '../models/animal.model';

@Component({
  selector: 'app-animals-list',
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.scss'],
})
export class AnimalsListComponent implements OnInit {
  animals: Animal[] = [];
  filtroActual: tiposValidos = 'leones';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.filtroActual = state.filtro;
      this.animals = state.animals;
      // this.animals = state.animals.filter((animal) => {
      //   if (this.filtroActual) {
      //     return animal.tipo === this.filtroActual;
      //   }
      //   return true;
      // });
    });
  }
}
