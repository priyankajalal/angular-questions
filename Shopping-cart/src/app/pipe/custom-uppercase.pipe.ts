import {Pipe,PipeTransform} from '@angular/core'

@Pipe({
  name: 'customUppercase'
})

export class CustomUppercasePipe implements PipeTransform {
  transform(value:string){
    return (value.toUpperCase());
  }


}
