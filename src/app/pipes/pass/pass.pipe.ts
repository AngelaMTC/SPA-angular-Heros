import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pass'
})
export class PassPipe implements PipeTransform {

  transform(value: string, contra: boolean = false): string {
    return (contra) ? '*'.repeat(value.length) : value;
  }

}
