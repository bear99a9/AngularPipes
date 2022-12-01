import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false // pure false allows for reload on new data entry
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item[propName] === filterString.toLowerCase()) {
        resultArray.push(item);
      }
    }

    return resultArray;

  }

}
