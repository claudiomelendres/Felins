import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from '../models/animal.model';
import * as actions from '../animal.actions';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-animals-item',
  templateUrl: './animals-item.component.html',
  styleUrls: ['./animals-item.component.scss'],
})
export class AnimalsItemComponent implements OnInit {
  @Input() animal!: Animal;

  txtInput!: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.txtInput = new FormControl(this.animal.name, Validators.required);
  }

  eliminar() {
    this.store.dispatch(actions.eliminar({ id: this.animal.id }));
  }

  editar() {
    this.editando = true;
    this.txtInput.setValue(this.animal.name);

    setTimeout(() => {}, 1);
  }

  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.animal.name) {
      return;
    }

    this.store.dispatch(
      actions.editar({
        id: this.animal.id,
        name: this.txtInput.value,
      })
    );
  }
}
