import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSizePipe'
})
export class CustomSizePipePipe implements PipeTransform {

  transform(value: any, extension: string='MB'): any {
    return (value / (1024 * 1024) ).toFixed(2) + extension ;
  }

}
