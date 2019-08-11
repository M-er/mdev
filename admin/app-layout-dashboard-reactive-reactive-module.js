(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-layout-dashboard-reactive-reactive-module"],{

/***/ "./src/app/layout/dashboard/reactive/reactive.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/dashboard/reactive/reactive.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <mat-card>\n    <div class=\"row\">\n      <form #formulario=\"ngForm\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <mat-form-field class=\"col s12 center\">\n          <input matInput placeholder=\"Nombre\" formControlName=\"nombre\">\n        </mat-form-field>\n        <tr-fecha nombre=\"fecha\" [form]=\"form\" clase=\"col s12 center\"></tr-fecha>\n        <div class=\"col s12\">\n          <mat-checkbox formControlName=\"check\">Check me!</mat-checkbox>\n        </div>\n        <tr-autocomplete placeholder=\"Autocomplete\" [form]=\"form\" clase=\"col s12 center\" [(modelo)]=\"form\" nombre=\"autocomplete\"\n          idNombre=\"value\" [resultados]=\"resultados\"></tr-autocomplete>\n        <div class=\"col s2 offset-s4 center\">\n          <button type=\"submit\" mat-raised-button>Enviar</button>\n        </div>\n        <div class=\"col s2 center\">\n          <button type=\"button\" (click)=\"reset()\" mat-raised-button>Reiniciar</button>\n        </div>\n      </form>\n    </div>\n    <div class=\"row\">\n      <div class=\"col s12\">\n        {{ form.value | json }}\n      </div>\n    </div>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/layout/dashboard/reactive/reactive.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/dashboard/reactive/reactive.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvcmVhY3RpdmUvcmVhY3RpdmUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/dashboard/reactive/reactive.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/dashboard/reactive/reactive.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReactiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveComponent", function() { return ReactiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveComponent = /** @class */ (function () {
    function ReactiveComponent(fb, utilService) {
        this.fb = fb;
        this.utilService = utilService;
        this.resultados = [
            { label: 'Hola', value: 'hola' },
            { label: 'Chau', value: 'chau' }
        ];
        this.default = {
            nombre: '',
            fecha: dayjs__WEBPACK_IMPORTED_MODULE_2__().add(12, 'hour'),
            check: false,
            autocomplete: '',
            value: null
        };
    }
    ReactiveComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.default.nombre, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            fecha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.default.fecha),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.default.check),
            autocomplete: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.default.autocomplete),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.default.value)
        });
    };
    ReactiveComponent.prototype.onSubmit = function () {
        this.form.value;
    };
    ReactiveComponent.prototype.reset = function () {
        console.log(this.formElement);
        this.formElement.resetForm(this.default);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formulario'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], ReactiveComponent.prototype, "formElement", void 0);
    ReactiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tr-reactive',
            template: __webpack_require__(/*! ./reactive.component.html */ "./src/app/layout/dashboard/reactive/reactive.component.html"),
            styles: [__webpack_require__(/*! ./reactive.component.scss */ "./src/app/layout/dashboard/reactive/reactive.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], ReactiveComponent);
    return ReactiveComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/reactive/reactive.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/dashboard/reactive/reactive.module.ts ***!
  \**************************************************************/
/*! exports provided: ReactiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveModule", function() { return ReactiveModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reactive_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactive.component */ "./src/app/layout/dashboard/reactive/reactive.component.ts");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReactiveModule = /** @class */ (function () {
    function ReactiveModule() {
    }
    ReactiveModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reactive_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _reactive_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveComponent"] }])
            ]
        })
    ], ReactiveModule);
    return ReactiveModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-layout-dashboard-reactive-reactive-module.js.map