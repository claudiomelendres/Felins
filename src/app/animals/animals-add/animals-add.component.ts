import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../animal.actions';

@Component({
  selector: 'app-animals-add',
  templateUrl: './animals-add.component.html',
  styleUrls: ['./animals-add.component.scss'],
})
export class AnimalsAddComponent implements OnInit {
  tipo: string = '';
  miFormulario: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    tipo: ['leon', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  totalAnimals: number = 0;
  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.totalAnimals = state.animals.length;
    });
  }

  // campoEsValido(campo: string): boolean | null {
  //   return (
  //     this.miFormulario.controls[campo].errors &&
  //     this.miFormulario.controls[campo].touched
  //   );
  // }

  guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    const { name, tipo } = this.miFormulario.value;
    this.store.dispatch(actions.crear({ name, tipo }));
    // console.log(this.miFormulario.value.name);
    this.miFormulario.reset({
      tipo: 'leon',
    });
  }
}
