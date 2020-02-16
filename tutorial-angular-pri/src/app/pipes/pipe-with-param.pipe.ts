import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "paramPipe"})

export class ParamiterizedPipe implements PipeTransform(){
    transform(value: string, before: string, after: string){
        let newStr: string = " ";
        newStr = `${before} ${value} ${after} `  //String Interpolation
        return newStr;
    }
}
