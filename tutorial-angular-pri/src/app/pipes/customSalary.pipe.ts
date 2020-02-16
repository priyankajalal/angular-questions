import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSalary'
})
export class CustomSalaryPipe implements PipeTransform {

  transform(salary: number,extension:string = "$" ): any {
    //return extension + salary * 2;
    return `${extension} ${salary *2}`
  }

}
