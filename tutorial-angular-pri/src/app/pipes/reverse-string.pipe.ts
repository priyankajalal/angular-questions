import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    {name : 'reverseStr'}
)

export class ReverseString implements PipeTransform{
    transform(value: string){
        let newStr:string = "";
        for (var i = value.length; i >= 0; i--){
          newStr = newStr + value.charAt(i);
        }
        return newStr;
    }

}
