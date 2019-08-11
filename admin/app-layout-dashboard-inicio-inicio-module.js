(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-layout-dashboard-inicio-inicio-module"],{

/***/ "./src/app/layout/dashboard/inicio/inicio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/dashboard/inicio/inicio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col s12 center\">\n            <h5>Bienvenido a</h5>\n            <h1>Esqueleto Angular</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/dashboard/inicio/inicio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/dashboard/inicio/inicio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvaW5pY2lvL2luaWNpby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/dashboard/inicio/inicio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/dashboard/inicio/inicio.component.ts ***!
  \*************************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tr-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/layout/dashboard/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.scss */ "./src/app/layout/dashboard/inicio/inicio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/layout/dashboard/inicio/inicio.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/dashboard/inicio/inicio.module.ts ***!
  \**********************************************************/
/*! exports provided: InicioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioModule", function() { return InicioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio.component */ "./src/app/layout/dashboard/inicio/inicio.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var InicioModule = /** @class */ (function () {
    function InicioModule() {
    }
    InicioModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"] }])
            ]
        })
    ], InicioModule);
    return InicioModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-layout-dashboard-inicio-inicio-module.js.map