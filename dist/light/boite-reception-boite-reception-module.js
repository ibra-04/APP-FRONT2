(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["boite-reception-boite-reception-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/compose/compose.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/compose/compose.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>compose works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/inbox/inbox.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/inbox/inbox.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <div class=\"row\">\n                <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                    <ul class=\"breadcrumb breadcrumb-style \">\n                        <li class=\"breadcrumb-item\">\n                            <h4 class=\"page-title\">Inbox</h4>\n                        </li>\n                        <li class=\"breadcrumb-item bcrumb-1\">\n                            <a routerLink=\"/dashboard/main\">\n                                <i class=\"fas fa-home\"></i> Home</a>\n                        </li>\n                        <li class=\"breadcrumb-item bcrumb-2\">\n                            <a href=\"#\" onClick=\"return false;\">Email</a>\n                        </li>\n                        <li class=\"breadcrumb-item active\">Inbox</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n                <div class=\"card\">\n                    <div class=\"boxs mail_listing\">\n                        <div class=\"inbox-center table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                </thead>\n                                <tbody>\n                                    <tr class=\"unread\">\n                                        <td class=\"hidden-xs\">\n                                            <i class=\"material-icons\">star_border</i>\n                                        </td>\n                                        <td class=\"hidden-xs\">Nelson Lane</td>\n                                        <td class=\"max-texts\">\n                                            <a href=\"#\">\n                                                <span class=\"label l-bg-purple shadow-style m-r-10\">Work</span>\n                                                Lorem ipsum perspiciatis unde omnis iste natus</a>\n                                        </td>\n                                        <td class=\"hidden-xs\">\n                                            <i class=\"material-icons\">attach_file</i>\n                                        </td>\n                                        <td class=\"text-right\"> 12:30 PM </td>\n                                    </tr>\n\n                                </tbody>\n                            </table>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-7 \">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");

/***/ }),

/***/ "./src/app/boite-reception/boite-reception-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/boite-reception/boite-reception-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: BoiteReceptionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoiteReceptionRoutingModule", function() { return BoiteReceptionRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/boite-reception/inbox/inbox.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/boite-reception/compose/compose.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'inbox',
        pathMatch: 'full'
    },
    {
        path: 'inbox',
        component: _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_3__["InboxComponent"],
    },
    {
        path: 'compose',
        component: _compose_compose_component__WEBPACK_IMPORTED_MODULE_4__["ComposeComponent"],
    },
];
let BoiteReceptionRoutingModule = class BoiteReceptionRoutingModule {
};
BoiteReceptionRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BoiteReceptionRoutingModule);



/***/ }),

/***/ "./src/app/boite-reception/boite-reception.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/boite-reception/boite-reception.module.ts ***!
  \***********************************************************/
/*! exports provided: BoiteReceptionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoiteReceptionModule", function() { return BoiteReceptionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _boite_reception_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boite-reception-routing.module */ "./src/app/boite-reception/boite-reception-routing.module.ts");
/* harmony import */ var _inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inbox/inbox.component */ "./src/app/boite-reception/inbox/inbox.component.ts");
/* harmony import */ var _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./compose/compose.component */ "./src/app/boite-reception/compose/compose.component.ts");






let BoiteReceptionModule = class BoiteReceptionModule {
};
BoiteReceptionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_inbox_inbox_component__WEBPACK_IMPORTED_MODULE_4__["InboxComponent"], _compose_compose_component__WEBPACK_IMPORTED_MODULE_5__["ComposeComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _boite_reception_routing_module__WEBPACK_IMPORTED_MODULE_3__["BoiteReceptionRoutingModule"]
        ]
    })
], BoiteReceptionModule);



/***/ }),

/***/ "./src/app/boite-reception/compose/compose.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/boite-reception/compose/compose.component.sass ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaXRlLXJlY2VwdGlvbi9jb21wb3NlL2NvbXBvc2UuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/boite-reception/compose/compose.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/boite-reception/compose/compose.component.ts ***!
  \**************************************************************/
/*! exports provided: ComposeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposeComponent", function() { return ComposeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ComposeComponent = class ComposeComponent {
    constructor() { }
    ngOnInit() {
    }
};
ComposeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compose',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./compose.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/compose/compose.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./compose.component.sass */ "./src/app/boite-reception/compose/compose.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ComposeComponent);



/***/ }),

/***/ "./src/app/boite-reception/inbox/inbox.component.sass":
/*!************************************************************!*\
  !*** ./src/app/boite-reception/inbox/inbox.component.sass ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvaXRlLXJlY2VwdGlvbi9pbmJveC9pbmJveC5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/boite-reception/inbox/inbox.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/boite-reception/inbox/inbox.component.ts ***!
  \**********************************************************/
/*! exports provided: InboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxComponent", function() { return InboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InboxComponent = class InboxComponent {
    constructor() { }
    ngOnInit() {
    }
};
InboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inbox',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inbox.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/boite-reception/inbox/inbox.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./inbox.component.sass */ "./src/app/boite-reception/inbox/inbox.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InboxComponent);



/***/ })

}]);
//# sourceMappingURL=boite-reception-boite-reception-module.js.map