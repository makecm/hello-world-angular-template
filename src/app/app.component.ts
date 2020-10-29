import { Component } from '@angular/core';
import { MakeTemplatePropsRef } from 'src/lib/MakeTemplatePropsRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  headline = '';
  constructor(private makeTemplatePropsRef: MakeTemplatePropsRef) {
    this.headline = makeTemplatePropsRef.makeTemplateProps.headline;
  }
  title = 'make-hello-ng-template';
}
