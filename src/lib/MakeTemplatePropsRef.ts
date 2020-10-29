import { Injectable } from '@angular/core';

function _templateProps() : any {
   // return the global native browser window object
   return window['templateProps'] || { headline: 'hello World' };
}

@Injectable()
export class MakeTemplatePropsRef {
   get makeTemplateProps() : any {
      return _templateProps();
   }
}