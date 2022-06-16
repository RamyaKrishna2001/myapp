import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filteredString: string, propName: any): any {
    if (value.length === 0 || filteredString === '') return value;
    const resultArray = [];
    for (let item of value) {
      if (item[propName] === filteredString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
