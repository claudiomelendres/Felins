import { Pipe, PipeTransform } from '@angular/core';
import { Animal, tiposValidos } from './models/animal.model';

@Pipe({
  name: 'filtroAnimals',
})
export class FiltroPipe implements PipeTransform {
  transform(animals: Animal[], filtro: tiposValidos): Animal[] {
    return animals.filter((animal) => {
      if (filtro) {
        return animal.tipo === filtro;
      }
      return true;
    });
  }
}
