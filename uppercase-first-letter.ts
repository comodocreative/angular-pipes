import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'upperCaseFirstLetter'
})
export class UpperCaseFirstLetterPipe implements PipeTransform {
    
    public transform( str: string ) {

        if ( str && str.length ) {
            
            return str.charAt(0).toUpperCase() + str.slice(1);
        }
    }
}
