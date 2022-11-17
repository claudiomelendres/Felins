import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AnimalsPageComponent } from './animals-page/animals-page.component';
import { AnimalsListComponent } from './animals-list/animals-list.component';
import { AnimalsItemComponent } from './animals-item/animals-item.component';
import { AnimalsAddComponent } from './animals-add/animals-add.component';
import { AnimalsHeaderComponent } from './animals-header/animals-header.component';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FiltroPipe } from './filtro.pipe';

@NgModule({
  declarations: [
    AnimalsPageComponent,
    AnimalsListComponent,
    AnimalsItemComponent,
    AnimalsAddComponent,
    AnimalsHeaderComponent,
    FiltroPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    CardModule,
    RadioButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
  ],
  exports: [AnimalsPageComponent],
})
export class AnimalsModule {}
