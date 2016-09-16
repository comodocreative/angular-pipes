import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

    public transform( arr: Array<any>, args? ) {

        if (arr) {
            return this._filterBy( arr, args );
        }
    }

    private _filterBy( arr, criteria ) {

        return arr.filter( function ( obj ) {
            return Object.keys( criteria ).every( function ( c ) {
                return new RegExp( criteria[c] ).test( obj[c] );
            });
        });
    }
}
