import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {



  transform(value: any, args?: any): any {
    let data = value;

    if (data.includes('https://')) {
      data = data.substring(8, data.length);
      console.log(data);
    }

    if (!data.includes('www')) {
      data = 'www.' + data;
    }

    if(data.includes('/')) {
      const str = data.substring(0, data.indexOf('/'));
      data = str;
    }

    return data;
  }

}
