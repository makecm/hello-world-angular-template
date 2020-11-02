import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit {
  public LOGO = require("./assets/logo.svg");
  public ANGULARLOGO = require("./assets/angular-logo.svg");

  constructor() { }

  ngOnInit(): void {
  }

}
