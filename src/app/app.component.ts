import { Component } from '@angular/core';
import { ShapesComponent } from './shapes/shapes.component';
import { LogosComponent } from './logos/logos.component';
import { MakeTemplatePropsRef } from 'src/lib/MakeTemplatePropsRef';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  headline = '';
  backgroundImage = '';
  showLogo=true;

  constructor(private makeTemplatePropsRef: MakeTemplatePropsRef) {
    this.headline = makeTemplatePropsRef.makeTemplateProps.headline;
    this.backgroundImage = makeTemplatePropsRef.makeTemplateProps.backgroundImage;
    this.showLogo = makeTemplatePropsRef.makeTemplateProps.showLogo;
  }
  title = 'make-hello-ng-template';
}
