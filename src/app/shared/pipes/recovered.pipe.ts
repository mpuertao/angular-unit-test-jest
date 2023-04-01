import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'recovered'
})
export class RecoveredPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 16) {
      return value + ' (no recuperado totalmente)';
    } else if (value >= 16 && 365) {
      return value + ' (recuperado)';
    } else {
      return value + ' (fuera de rango)';
    }
  }
}
