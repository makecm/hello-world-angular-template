(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+Ifp":
/*!********************************************!*\
  !*** ./src/app/shapes/shapes.component.ts ***!
  \********************************************/
/*! exports provided: ShapesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesComponent", function() { return ShapesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ShapesComponent__svg_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("r", item_r1 == null ? null : item_r1.r)("cx", item_r1 == null ? null : item_r1.cx)("cy", item_r1 == null ? null : item_r1.cy)("stroke-width", item_r1 == null ? null : item_r1.strokeWidth)("stroke-dash-array", item_r1 == null ? null : item_r1.strokeDashArray);
} }
class ShapesComponent {
    constructor() {
        this.list = [];
    }
    ngOnInit() {
        function getRandomLength() {
            return Math.floor(Math.random() * 500 + 100);
        }
        function getRandomGap() {
            return Math.floor(Math.random() * 500 + 900);
        }
        this.list = [
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
        ];
        this.list.forEach(i => {
            i.r = Math.floor(Math.random() * 900) + 100;
            i.cx = Math.floor(Math.random() * 900);
            i.cy = Math.floor(Math.random() * 900);
            i.strokeWidth = Math.floor(Math.random() * 200 + 75);
            i.strokeDashArray = getRandomLength(), getRandomGap();
        });
    }
}
ShapesComponent.ɵfac = function ShapesComponent_Factory(t) { return new (t || ShapesComponent)(); };
ShapesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShapesComponent, selectors: [["app-shapes"]], decls: 8, vars: 1, consts: [[1, "shape-container", 2, "overflow", "hidden"], ["xmlns", "http://www.w3.org/2000/svg", "version", "1.1", "viewBox", "100 100 600 600", "preserveAspectRatio", "xMidYMid slice", 1, "svg-shapes"], [4, "ngFor", "ngForOf"], [2, "pointer-events", "none"], ["id", "bggrad", "x1", "0%", "y1", "0%", "x2", "100%", "y2", "100%"], ["offset", "0%", 2, "stop-color", "#E9336B"], ["offset", "100%", 2, "stop-color", "#ff8674"]], template: function ShapesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShapesComponent__svg_ng_container_2_Template, 2, 5, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "linearGradient", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "stop", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".shape-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: -1;\n}\n\n.svg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n}\n\n.svg-shapes[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke: url(#bggrad);\n  stroke-linecap: round;\n  animation: bgmove 200s linear infinite;\n}\n\n@keyframes bgmove {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcGVzL3NoYXBlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcGVzL3NoYXBlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYXBlLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uc3ZnLXNoYXBlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc3ZnLXNoYXBlcyBjaXJjbGUge1xuICBmaWxsOiB0cmFuc3BhcmVudDtcbiAgc3Ryb2tlOiB1cmwoI2JnZ3JhZCk7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgYW5pbWF0aW9uOiBiZ21vdmUgMjAwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYmdtb3ZlIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShapesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-shapes',
                templateUrl: './shapes.component.html',
                styleUrls: ['./shapes.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/james/Documents/outfit/makecm/starter-templates/make-hello-world-angular/src/main.ts */"zUnb");


/***/ }),

/***/ "7wUj":
/*!***************************************!*\
  !*** ./src/app/logos/assets/logo.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "logo.svg");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "R4+F":
/*!******************************************!*\
  !*** ./src/app/logos/logos.component.ts ***!
  \******************************************/
/*! exports provided: LogosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogosComponent", function() { return LogosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogosComponent {
    constructor() {
        this.LOGO = __webpack_require__(/*! ./assets/logo.svg */ "7wUj");
        this.ANGULARLOGO = __webpack_require__(/*! ./assets/angular-logo.svg */ "cBF7");
    }
    ngOnInit() {
    }
}
LogosComponent.ɵfac = function LogosComponent_Factory(t) { return new (t || LogosComponent)(); };
LogosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogosComponent, selectors: [["app-logos"]], decls: 4, vars: 0, consts: [[1, "logos"], ["src", "assets/logo.svg"], [1, "seperator"], ["src", "assets/angular-logo.svg"]], template: function LogosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".logos[_ngcontent-%COMP%] {\n  display: grid;\n  z-index: 1;\n  grid-gap: 1rem;\n  grid-template-columns: 1fr 0.25fr 1fr;\n  place-items: center;\n  background-color: #1f2a44;\n  padding: clamp( 0.5rem, 5vw, 2rem);\n  border-radius: 3rem;\n  z-index: 2;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);\n}\n\n.logos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: clamp( 1rem, 5vw, 3rem);\n  height: clamp( 1rem, 5vw, 3rem);\n}\n\n.seperator[_ngcontent-%COMP%] {\n  place-self: flex-end;\n  border-left: 2px solid white;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3MvbG9nb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtDQUFrQztFQUNsQyxtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sb2dvcy9sb2dvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29zIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgei1pbmRleDogMTtcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDAuMjVmciAxZnI7XG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjJhNDQ7XG4gIHBhZGRpbmc6IGNsYW1wKCAwLjVyZW0sIDV2dywgMnJlbSk7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHotaW5kZXg6IDI7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcbn1cblxuLmxvZ29zIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2xhbXAoIDFyZW0sIDV2dywgM3JlbSk7XG4gIGhlaWdodDogY2xhbXAoIDFyZW0sIDV2dywgM3JlbSk7XG59XG5cbi5zZXBlcmF0b3Ige1xuICBwbGFjZS1zZWxmOiBmbGV4LWVuZDtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logos',
                templateUrl: './logos.component.html',
                styleUrls: ['./logos.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/lib/MakeTemplatePropsRef */ "zxQ5");
/* harmony import */ var _logos_logos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/logos.component */ "R4+F");
/* harmony import */ var _shapes_shapes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes/shapes.component */ "+Ifp");





class AppComponent {
    constructor(makeTemplatePropsRef) {
        this.makeTemplatePropsRef = makeTemplatePropsRef;
        this.headline = '';
        this.backgroundImage = '';
        this.showLogo = true;
        this.title = 'make-hello-ng-template';
        this.headline = makeTemplatePropsRef.makeTemplateProps.headline;
        this.backgroundImage = makeTemplatePropsRef.makeTemplateProps.backgroundImage;
        this.showLogo = makeTemplatePropsRef.makeTemplateProps.showLogo;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_1__["MakeTemplatePropsRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 4, consts: [[1, "App"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-logos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-shapes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx.backgroundImage, "')");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.headline);
    } }, directives: [_logos_logos_component__WEBPACK_IMPORTED_MODULE_2__["LogosComponent"], _shapes_shapes_component__WEBPACK_IMPORTED_MODULE_3__["ShapesComponent"]], styles: [".App[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: clamp( 16px, 10vh, 250px);\n  font-weight: 700;\n  line-height: 100%;\n  color: #1f2a44;\n  text-align: center;\n  width: 100%;\n  padding: 0 2rem;\n  z-index: 1;\n}\n\n.shape-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.svg-shapes[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100vw;\n  height: 100%;\n  margin: 0;\n}\n\n.svg-shapes[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke: url(#bggrad);\n  stroke-linecap: round;\n  animation: bgmove 200s linear infinite;\n}\n\n@keyframes bgmove {\n  0% {\n    stroke-dashoffset: 1000;\n  }\n\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0VBQ1Q7Y0FDWTtFQUNaLG1DQUFtQztFQUNuQyxrQ0FBa0M7O0VBRWxDLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsICdSb2JvdG8nLCAnT3h5Z2VuJywgJ1VidW50dScsICdDYW50YXJlbGwnLCAnRmlyYSBTYW5zJywgJ0Ryb2lkIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLFxuICAgIHNhbnMtc2VyaWY7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IGNsYW1wKCAxNnB4LCAxMHZoLCAyNTBweCk7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogIzFmMmE0NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAycmVtO1xuICB6LWluZGV4OiAxO1xufVxuXG4uc2hhcGUtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnN2Zy1zaGFwZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnN2Zy1zaGFwZXMgY2lyY2xlIHtcbiAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gIHN0cm9rZTogdXJsKCNiZ2dyYWQpO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIGFuaW1hdGlvbjogYmdtb3ZlIDIwMHMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJnbW92ZSB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: src_lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_1__["MakeTemplatePropsRef"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/MakeTemplatePropsRef */ "zxQ5");
/* harmony import */ var _shapes_shapes_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes/shapes.component */ "+Ifp");
/* harmony import */ var _logos_logos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logos/logos.component */ "R4+F");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_3__["MakeTemplatePropsRef"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _shapes_shapes_component__WEBPACK_IMPORTED_MODULE_4__["ShapesComponent"],
        _logos_logos_component__WEBPACK_IMPORTED_MODULE_5__["LogosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _shapes_shapes_component__WEBPACK_IMPORTED_MODULE_4__["ShapesComponent"],
                    _logos_logos_component__WEBPACK_IMPORTED_MODULE_5__["LogosComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [_lib_MakeTemplatePropsRef__WEBPACK_IMPORTED_MODULE_3__["MakeTemplatePropsRef"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cBF7":
/*!***********************************************!*\
  !*** ./src/app/logos/assets/angular-logo.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "angular-logo.svg");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zxQ5":
/*!*****************************************!*\
  !*** ./src/lib/MakeTemplatePropsRef.ts ***!
  \*****************************************/
/*! exports provided: MakeTemplatePropsRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeTemplatePropsRef", function() { return MakeTemplatePropsRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


function _templateProps() {
    // return the global native browser window object
    return window['templateProps'] || {
        headline: 'Hello World',
        backgroundImage: '',
        showLogo: true,
    };
}
class MakeTemplatePropsRef {
    get makeTemplateProps() {
        return _templateProps();
    }
}
MakeTemplatePropsRef.ɵfac = function MakeTemplatePropsRef_Factory(t) { return new (t || MakeTemplatePropsRef)(); };
MakeTemplatePropsRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MakeTemplatePropsRef, factory: MakeTemplatePropsRef.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MakeTemplatePropsRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map