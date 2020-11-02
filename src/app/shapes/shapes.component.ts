import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-shapes',
  templateUrl: './shapes.component.html',
  styleUrls: ['./shapes.component.css'],
})

export class ShapesComponent implements OnInit {

  constructor() {  }

  ngOnInit(): void {
    function getRandomLength() {
      return Math.floor(Math.random() * 500 + 100);
    }

    function getRandomGap() {
      return Math.floor(Math.random() * 500 + 900);
    }

    let list = [
      {
        r: null,
        cx: null,
        cy: null,
        strokeWidth: null,
        strokeDashArray: null,
      },
      {
        r: null,
        cx: null,
        cy: null,
        strokeWidth: null,
        strokeDashArray: null,
      },
      {
        r: null,
        cx: null,
        cy: null,
        strokeWidth: null,
        strokeDashArray: null,
      },
      {
        r: null,
        cx: null,
        cy: null,
        strokeWidth: null,
        strokeDashArray: null,
      },
      {
        r: null,
        cx: null,
        cy: null,
        strokeWidth: null,
        strokeDashArray: null,
      },
    ]

    list.map(i => {
      i.r = Math.floor(Math.random() * 900) + 100;
      i.cx = Math.floor(Math.random() * 900);
      i.cy = Math.floor(Math.random() * 900);
      i.strokeWidth = Math.floor(Math.random() * 200 + 75);
      i.strokeDashArray = getRandomLength(), getRandomGap();
    })

    console.log(list)


  }
}
