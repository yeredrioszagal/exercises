import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.replace('a', '4').replace('e', '3').replace('i', '1').replace('o', '0').replace('u', '9');
    }
    return value;
  }

}
