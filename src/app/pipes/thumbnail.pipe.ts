import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thumbnail'
})
export class ThumbnailPipe implements PipeTransform {

  transform(url: string, size: string): string {
    let stringParts: String[];
    let newUrl: string;

    if (size === 'large') {
      stringParts = url.split('.');
      newUrl = stringParts[0] + '-tn640.png';
      return newUrl;
    } else if (size === 'medium') {
      stringParts = url.split('.');
      newUrl = stringParts[0] + '-tn320.png';
      return newUrl;
    } else if (size === 'small') {
      stringParts = url.split('.');
      newUrl = stringParts[0] + '-tn160.png';
      return newUrl;
    } else if (size === 'screenshot') {
      return url;
    } else {
      return url;
    }
  }

}
