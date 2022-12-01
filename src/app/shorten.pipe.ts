import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class shortenPipe implements PipeTransform {
    transform(value: any, start: number, end: number) {
        if (value.length > end) {
            return value.substring(start, end) + ' ...';
        }

        return value;
    }

}