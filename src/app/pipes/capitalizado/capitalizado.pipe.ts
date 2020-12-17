import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {


// Un Pipe siempre recibe argumentos.
// Value: Es es valor/variable de antes de entrar al Pipe.
// transform(value: unknown, ...args: unknown[]): unknown {
  // value: string, edad: number, cantidad: number, mensaje: string): unknown {
  transform(value: string, todas: true): string{
    console.log(value.toLocaleLowerCase());
    // console.log({edad, cantidad, mensaje});
    value = value.toLocaleLowerCase();

    // Dividir el string(value) en palabras:
    let palabras = value.split(' ');
    console.log(palabras);

    // Verificar cuando todas viene en true; se capitaliza c/palabra del string.
    if (todas){
      palabras = palabras.map( palabra => {
        return palabra[0].toLocaleUpperCase() + palabra.substr(1);
      });
    }else{
      palabras[0] = palabras[0][0].toLocaleUpperCase() + palabras[0].substr(1);
    }

    return palabras.join(' ');
  }

}
