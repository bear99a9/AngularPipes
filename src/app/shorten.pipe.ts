import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class shortenPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 10) {
            return value.substring(0, 10) + ' ...';
        }

        return value;
    }

}