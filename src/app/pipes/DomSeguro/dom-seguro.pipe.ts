import { Pipe, PipeTransform } from '@angular/core';
import { inject } from '@angular/core/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

constructor(private domSanitizer: DomSanitizer){

}

  transform(value: string, password: true): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);

  }

}
