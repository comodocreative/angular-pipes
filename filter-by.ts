import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

	private _filterBy( arr, criteria ) {

		return arr.filter( function ( obj ) {
			return Object.keys( criteria ).every( function ( c ) {
				return new RegExp( criteria[c] ).test( obj[c] );
			});
		});
	}
    
    public transform( arr: Array<any>, args? ) {

        return this._filterBy( arr, args );
    }
}
