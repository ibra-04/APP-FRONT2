(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showLoadingIndicatior\" class=\"page-loader-wrapper\">\n    <app-page-loader></app-page-loader>\n</div>\n<app-header *ngIf=\"!_router.url.includes('/authentication')\"></app-header>\n<app-sidebar *ngIf=\"!_router.url.includes('/authentication')\"></app-sidebar>\n<app-right-sidebar></app-right-sidebar>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a href=\"#\" onClick=\"return false;\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\"\n                data-target=\"#navbar-collapse\" aria-expanded=\"false\"></a>\n            <a href=\"#\" onClick=\"return false;\" class=\"bars\"></a>\n            <a class=\"navbar-brand\" routerLink=\"dashboard/main\">\n                <img src=\"assets/images/logo.png\" alt=\"\" />\n                <span class=\"logo-name\">FiveSkills</span>\n            </a>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul class=\"pull-left\">\n                <li>\n                    <a href=\"#\" onClick=\"return false;\" class=\"sidemenu-collapse\">\n                        <i class=\"material-icons\">reorder</i>\n                    </a>\n                </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <!-- Full Screen Button -->\n                <li class=\"fullscreen\">\n                    <a href=\"javascript:;\" class=\"fullscreen-btn\">\n                        <i class=\"fas fa-expand\"></i>\n                    </a>\n                </li>\n                <!-- #END# Full Screen Button -->\n                <!-- #START# Notifications-->\n                <li class=\"dropdown\">\n                    <a href=\"#\" onClick=\"return false;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                        <i class=\"far fa-bell\"></i>\n                        <span class=\"label-count bg-orange\"></span>\n                    </a>\n                    <ul class=\"dropdown-menu pullDown\">\n                        <li class=\"header\">NOTIFICATIONS</li>\n                        <li class=\"body\">\n                            <ul class=\"menu\">\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user1.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">Sarah Smith</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 14 mins ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user2.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">Airi Satou</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 22 mins ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user3.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">John Doe</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 3 hours ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user4.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">Ashton Cox</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 2 hours ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user5.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">Cara Stevens</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 4 hours ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user6.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">Charde Marshall</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> 3 hours ago\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <span class=\"table-img msg-user\">\n                                            <img src=\"assets/images/user/user7.jpg\" alt=\"\">\n                                        </span>\n                                        <span class=\"menu-info\">\n                                            <span class=\"menu-title\">John Doe</span>\n                                            <span class=\"menu-desc\">\n                                                <i class=\"material-icons\">access_time</i> Yesterday\n                                            </span>\n                                            <span class=\"menu-desc\">Please check your email.</span>\n                                        </span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                        <li class=\"footer\">\n                            <a href=\"#\" onClick=\"return false;\">View All Notifications</a>\n                        </li>\n                    </ul>\n                </li>\n                <!-- #END# Notifications-->\n                <li class=\"dropdown user_profile\">\n                    <a href=\"#\" onClick=\"return false;\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\">\n                        <img src=\"assets/images/user.jpg\" width=\"32\" height=\"32\" alt=\"User\">\n                    </a>\n                    <ul class=\"dropdown-menu pullDown\">\n                        <li class=\"body\">\n                            <ul class=\"user_dw_menu\">\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <i class=\"material-icons\">person</i>Profile\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <i class=\"material-icons\">feedback</i>Feedback\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\" onClick=\"return false;\">\n                                        <i class=\"material-icons\">help</i>Help\n                                    </a>\n                                </li>\n                                <li>\n                                    <a routerLink=\"/authentication/signin\" onClick=\"return false;\">\n                                        <i class=\"material-icons\">power_settings_new</i>Logout\n                                    </a>\n                                </li>\n                            </ul>\n                        </li>\n                    </ul>\n                </li>\n                <!-- #END# Tasks -->\n                <li class=\"pull-right\">\n                    <a href=\"#\" onClick=\"return false;\" class=\"js-right-sidebar\" data-close=\"true\">\n                        <i class=\"fas fa-cog\"></i>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/page-loader/page-loader.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/page-loader/page-loader.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-loader-wrapper\">\n    <div class=\"loader\">\n        <div class=\"m-t-30\">\n            <img class=\"loading-img-spin\" src=\"assets/images/loading.png\" width=\"20\" height=\"20\" alt=\"admin\">\n        </div>\n        <p>Please wait...</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/right-sidebar/right-sidebar.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/right-sidebar/right-sidebar.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- Right Sidebar -->\n  <aside id=\"rightsidebar\" class=\"right-sidebar\">\n    <ul class=\"nav nav-tabs tab-nav-right\" role=\"tablist\">\n        <li role=\"presentation\">\n            <a href=\"#skins\" data-toggle=\"tab\" class=\"active\">SKINS</a>\n        </li>\n        <li role=\"presentation\">\n            <a href=\"#settings\" data-toggle=\"tab\">SETTINGS</a>\n        </li>\n    </ul>\n    <div class=\"tab-content\">\n        <div role=\"tabpanel\" class=\"tab-pane in active in active stretchLeft\" id=\"skins\">\n            <div class=\"demo-skin\">\n                <div class=\"rightSetting\">\n                    <p>GENERAL SETTINGS</p>\n                    <ul class=\"setting-list list-unstyled m-t-20\">\n                        <li>\n                            <div class=\"form-check\">\n                                <div class=\"form-check m-l-10\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Save\n                                        History\n                                        <span class=\"form-check-sign\">\n                                            <span class=\"check\"></span>\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"form-check\">\n                                <div class=\"form-check m-l-10\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Show\n                                        Status\n                                        <span class=\"form-check-sign\">\n                                            <span class=\"check\"></span>\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"form-check\">\n                                <div class=\"form-check m-l-10\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Auto\n                                        Submit Issue\n                                        <span class=\"form-check-sign\">\n                                            <span class=\"check\"></span>\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </li>\n                        <li>\n                            <div class=\"form-check\">\n                                <div class=\"form-check m-l-10\">\n                                    <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked> Show\n                                        Status To All\n                                        <span class=\"form-check-sign\">\n                                            <span class=\"check\"></span>\n                                        </span>\n                                    </label>\n                                </div>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"rightSetting\">\n                    <p>SIDEBAR MENU COLORS</p>\n                    <button type=\"button\"\n                        class=\"btn btn-sidebar-light btn-border-radius p-l-20 p-r-20\">Light</button>\n                    <button type=\"button\"\n                        class=\"btn btn-sidebar-dark btn-default btn-border-radius p-l-20 p-r-20\">Dark</button>\n                </div>\n                <div class=\"rightSetting\">\n                    <p>THEME COLORS</p>\n                    <button type=\"button\" class=\"btn btn-theme-light btn-border-radius p-l-20 p-r-20\">Light</button>\n                    <button type=\"button\"\n                        class=\"btn btn-theme-dark btn-default btn-border-radius p-l-20 p-r-20\">Dark</button>\n                </div>\n                <div class=\"rightSetting\">\n                    <p>SKINS</p>\n                    <ul class=\"demo-choose-skin choose-theme list-unstyled\">\n                        <li data-theme=\"black\" class=\"actived\">\n                            <div class=\"black-theme\"></div>\n                        </li>\n                        <li data-theme=\"white\">\n                            <div class=\"white-theme white-theme-border\"></div>\n                        </li>\n                        <li data-theme=\"purple\">\n                            <div class=\"purple-theme\"></div>\n                        </li>\n                        <li data-theme=\"blue\">\n                            <div class=\"blue-theme\"></div>\n                        </li>\n                        <li data-theme=\"cyan\">\n                            <div class=\"cyan-theme\"></div>\n                        </li>\n                        <li data-theme=\"green\">\n                            <div class=\"green-theme\"></div>\n                        </li>\n                        <li data-theme=\"orange\">\n                            <div class=\"orange-theme\"></div>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"rightSetting\">\n                    <p>Disk Space</p>\n                    <div class=\"sidebar-progress\">\n                        <div class=\"progress m-t-20\">\n                            <div class=\"progress-bar l-bg-cyan shadow-style width-per-45\" role=\"progressbar\"\n                                aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <span class=\"progress-description\">\n                            <small>26% remaining</small>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"rightSetting\">\n                    <p>Server Load</p>\n                    <div class=\"sidebar-progress\">\n                        <div class=\"progress m-t-20\">\n                            <div class=\"progress-bar l-bg-orange shadow-style width-per-63\" role=\"progressbar\"\n                                aria-valuenow=\"63\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                        <span class=\"progress-description\">\n                            <small>Highly Loaded</small>\n                        </span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div role=\"tabpanel\" class=\"tab-pane stretchRight\" id=\"settings\">\n            <div class=\"demo-settings\">\n                <p>GENERAL SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Report Panel Usage</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked>\n                                <span class=\"lever switch-col-green\"></span>\n                            </label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Email Redirect</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\">\n                                <span class=\"lever switch-col-blue\"></span>\n                            </label>\n                        </div>\n                    </li>\n                </ul>\n                <p>SYSTEM SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Notifications</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked>\n                                <span class=\"lever switch-col-purple\"></span>\n                            </label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Auto Updates</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked>\n                                <span class=\"lever switch-col-cyan\"></span>\n                            </label>\n                        </div>\n                    </li>\n                </ul>\n                <p>ACCOUNT SETTINGS</p>\n                <ul class=\"setting-list\">\n                    <li>\n                        <span>Offline</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\" checked>\n                                <span class=\"lever switch-col-red\"></span>\n                            </label>\n                        </div>\n                    </li>\n                    <li>\n                        <span>Location Permission</span>\n                        <div class=\"switch\">\n                            <label>\n                                <input type=\"checkbox\">\n                                <span class=\"lever switch-col-lime\"></span>\n                            </label>\n                        </div>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</aside>\n<!-- #END# Right Sidebar -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <!-- Left Sidebar -->\n    <aside id=\"leftsidebar\" class=\"sidebar\">\n        <!-- Menu -->\n        <div class=\"menu\">\n            <ul class=\"list\">\n                <li class=\"sidebar-user-panel\">\n                    <div class=\"user-panel\">\n                        <div class=\" image\">\n                            <img src=\"assets/images/usrbig.jpg\" class=\"img-circle user-img-circle\" alt=\"User Image\" />\n                        </div>\n                    </div>\n                    <div class=\"profile-usertitle\">\n                        <div class=\"sidebar-userpic-name\"> Emily Smith </div>\n                        <div class=\"profile-usertitle-job \">Manager </div>\n                    </div>\n                </li>\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"dashboard/main\">\n                        <i class=\"fas fa-home\"></i>\n                        <span>Home</span>\n                    </a>\n                </li>\n\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"gestion-formateur/liste-formateur\">\n                        <i class=\"fas fa-chalkboard-teacher\"></i>\n                        <span>Gestion Des Formateurs</span>\n                    </a>\n                </li>\n\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"gestion-categorie/liste-categorie\">\n                        <i class=\"fa fa-tag\" aria-hidden=\"true\"></i>\n\n                        <span>Gestion Des Catégories</span>\n                    </a>\n                </li>\n\n                \n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"gestion-formation/liste-formation\">\n                        <i class=\"fas fa-calendar-plus\"></i>\n\n                        <span>Gestion Des Formations</span>\n                    </a>\n                </li>\n\n\n             \n\n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"gestion-session/liste-session\">\n                        <i class=\"fas fa-users\"></i>\n                        <span>Gestion Des Sessions</span>\n                    </a>\n                   \n                </li>\n                \n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"gestion-participant/liste-participant\">\n                        <i class=\"fas fa-graduation-cap\"></i>\n\n                        <span>Gestion Des Participants</span>\n                    </a>\n                </li>\n  \n                <li routerLinkActive=\"active\">\n                    <a routerLink=\"email/inbox\">\n                        <i class=\"fas fa-envelope\"></i>\n\n                        <span>Boite De Reception  0</span>\n                    </a>\n                </li>\n  \n\n            \n          \n        \n           \n            </ul>\n        </div>\n        <!-- #Menu -->\n    </aside>\n    <!-- #END# Left Sidebar -->\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
    },
    {
        path: 'gestion-formateur',
        loadChildren: () => Promise.all(/*! import() | gestion-formateur-gestion-formateur-module */[__webpack_require__.e("default~gestion-categorie-gestion-categorie-module~gestion-formateur-gestion-formateur-module~gestio~7cca86cb"), __webpack_require__.e("gestion-formateur-gestion-formateur-module")]).then(__webpack_require__.bind(null, /*! ./gestion-formateur/gestion-formateur.module */ "./src/app/gestion-formateur/gestion-formateur.module.ts")).then(m => m.GestionFormateurModule)
    },
    {
        path: 'gestion-categorie',
        loadChildren: () => Promise.all(/*! import() | gestion-categorie-gestion-categorie-module */[__webpack_require__.e("default~gestion-categorie-gestion-categorie-module~gestion-formateur-gestion-formateur-module~gestio~7cca86cb"), __webpack_require__.e("gestion-categorie-gestion-categorie-module")]).then(__webpack_require__.bind(null, /*! ./gestion-categorie/gestion-categorie.module */ "./src/app/gestion-categorie/gestion-categorie.module.ts")).then(m => m.GestionCategorieModule)
    },
    {
        path: 'gestion-formation',
        loadChildren: () => Promise.all(/*! import() | gestion-formation-gestion-formation-module */[__webpack_require__.e("default~gestion-categorie-gestion-categorie-module~gestion-formateur-gestion-formateur-module~gestio~7cca86cb"), __webpack_require__.e("default~gestion-formation-gestion-formation-module~gestion-session-gestion-session-module")]).then(__webpack_require__.bind(null, /*! ./gestion-formation/gestion-formation.module */ "./src/app/gestion-formation/gestion-formation.module.ts")).then(m => m.GestionFormationModule)
    },
    {
        path: 'gestion-session',
        loadChildren: () => Promise.all(/*! import() | gestion-session-gestion-session-module */[__webpack_require__.e("default~gestion-categorie-gestion-categorie-module~gestion-formateur-gestion-formateur-module~gestio~7cca86cb"), __webpack_require__.e("default~gestion-participant-gestion-participant-module~gestion-session-gestion-session-module"), __webpack_require__.e("default~gestion-formation-gestion-formation-module~gestion-session-gestion-session-module"), __webpack_require__.e("gestion-session-gestion-session-module")]).then(__webpack_require__.bind(null, /*! ./gestion-session/gestion-session.module */ "./src/app/gestion-session/gestion-session.module.ts")).then(m => m.GestionSessionModule)
    },
    {
        path: 'gestion-participant',
        loadChildren: () => Promise.all(/*! import() | gestion-participant-gestion-participant-module */[__webpack_require__.e("default~gestion-categorie-gestion-categorie-module~gestion-formateur-gestion-formateur-module~gestio~7cca86cb"), __webpack_require__.e("default~gestion-participant-gestion-participant-module~gestion-session-gestion-session-module"), __webpack_require__.e("gestion-participant-gestion-participant-module")]).then(__webpack_require__.bind(null, /*! ./gestion-participant/gestion-participant.module */ "./src/app/gestion-participant/gestion-participant.module.ts")).then(m => m.GestionParticipantModule)
    },
    {
        path: 'email',
        loadChildren: () => __webpack_require__.e(/*! import() | boite-reception-boite-reception-module */ "boite-reception-boite-reception-module").then(__webpack_require__.bind(null, /*! ./boite-reception/boite-reception.module */ "./src/app/boite-reception/boite-reception.module.ts")).then(m => m.BoiteReceptionModule)
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AppComponent = class AppComponent {
    constructor(_router, location) {
        this._router = _router;
        this.showLoadingIndicatior = true;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.showLoadingIndicatior = true;
                location.onPopState(() => {
                    window.location.reload();
                });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf("/") + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                this.showLoadingIndicatior = false;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "./src/app/layout/page-loader/page-loader.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "./src/app/layout/right-sidebar/right-sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/dynamic-script-loader.service */ "./src/app/services/dynamic-script-loader.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
            _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_9__["PageLoaderComponent"],
            _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"],
            _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        ],
        providers: [
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] },
            _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_13__["DynamicScriptLoaderService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/layout/header/header.component.sass":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.sass ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const document = window.document;
let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
        this.setStartupStyles();
        this.callFullScreen();
        this.setNavbar();
        this.setRightSidebar();
        $(".navbar-right .dropdown-menu .body .menu").slimscroll({
            height: "254px",
            color: "rgba(0,0,0,0.5)",
            size: "4px",
            alwaysVisible: false,
            borderRadius: "0",
            railBorderRadius: "0"
        });
        $(window).on("scroll", function () {
            if ($(window).scrollTop() > 50) {
                $(".navbar").addClass("active");
            }
            else {
                $(".navbar").removeClass("active");
            }
        });
    }
    setStartupStyles() {
        //set theme on startup
        if (localStorage.getItem("theme")) {
            $("body").removeClass("dark light");
            jQuery("body").addClass(localStorage.getItem("theme"));
        }
        else {
            jQuery("body").addClass("light");
        }
        // set dark sidebar menu on startup
        if (localStorage.getItem("menu_option")) {
            jQuery("body").addClass(localStorage.getItem("menu_option"));
        }
        else {
            jQuery("body").addClass("menu_light");
        }
        // set header color on startup
        if (localStorage.getItem("choose_skin")) {
            jQuery("body").addClass(localStorage.getItem("choose_skin"));
        }
        else {
            jQuery("body").addClass("theme-black");
        }
        if (localStorage.getItem("choose_skin_active")) {
            $(".right-sidebar .demo-choose-skin li").each(function (index) {
                jQuery(this).removeClass("actived");
                if (jQuery(this).attr("data-theme") ==
                    localStorage.getItem("choose_skin_active")) {
                    jQuery(this).addClass("actived");
                }
            });
        }
        // set logo color on startup
        if (localStorage.getItem("choose_logoheader")) {
            jQuery("body").addClass(localStorage.getItem("choose_logoheader"));
        }
        else {
            jQuery("body").addClass("logo-white");
        }
        if (localStorage.getItem("choose_logoheader_active")) {
            $(".right-sidebar .demo-choose-logoheader li").each(function (index) {
                jQuery(this).removeClass("actived");
                if (jQuery(this).attr("data-theme") ==
                    localStorage.getItem("choose_logoheader_active")) {
                    jQuery(this).addClass("actived");
                }
            });
        }
    }
    callFullScreen() {
        $(document).on("click", ".fullscreen-btn", function (e) {
            if (!document.fullscreenElement && // alternative standard method
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement) {
                // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                }
                else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                }
                else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                }
                else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen();
                }
            }
            else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
                else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                }
                else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });
    }
    setNavbar() {
        var $body = $("body");
        var $overlay = $(".overlay");
        //Open left sidebar panel
        $(".bars").on("click", function () {
            $body.toggleClass("overlay-open");
            if ($body.hasClass("overlay-open")) {
                $overlay.fadeIn();
            }
            else {
                $overlay.fadeOut();
            }
        });
        //Close collapse bar on click event
        $('.nav [data-close="true"]').on("click", function () {
            var isVisible = $(".navbar-toggle").is(":visible");
            var $navbarCollapse = $(".navbar-collapse");
            if (isVisible) {
                $navbarCollapse.slideUp(function () {
                    $navbarCollapse.removeClass("in").removeAttr("style");
                });
            }
        });
    }
    setRightSidebar() {
        var _this = this;
        var $sidebar = $("#rightsidebar");
        var $overlay = $(".overlay");
        //Close sidebar
        $(window).on("click", function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === "i") {
                $target = $(e.target).parent();
            }
            if (!$target.hasClass("js-right-sidebar") &&
                _this.isOpen() &&
                $target.parents("#rightsidebar").length === 0) {
                if (!$target.hasClass("bars"))
                    $overlay.fadeOut();
                $sidebar.removeClass("open");
            }
        });
        $(".js-right-sidebar").on("click", function () {
            $sidebar.toggleClass("open");
            if (_this.isOpen()) {
                $overlay.fadeIn();
            }
            else {
                $overlay.fadeOut();
            }
        });
    }
    isOpen() {
        return $(".right-sidebar").hasClass("open");
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.sass */ "./src/app/layout/header/header.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/layout/page-loader/page-loader.component.sass":
/*!***************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.sass ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/page-loader/page-loader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PageLoaderComponent = class PageLoaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/page-loader/page-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-loader.component.sass */ "./src/app/layout/page-loader/page-loader.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PageLoaderComponent);



/***/ }),

/***/ "./src/app/layout/right-sidebar/right-sidebar.component.sass":
/*!*******************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.sass ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/right-sidebar/right-sidebar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RightSidebarComponent = class RightSidebarComponent {
    constructor() { }
    ngOnInit() {
        this.setSkinListHeightAndScroll(true);
        this.skinChanger();
        this.changeSidebarColor();
        this.changeDarkLightTheme();
        this.setSettingListHeightAndScroll(true);
    }
    setSkinListHeightAndScroll(isFirstTime) {
        var height = $(window).height() -
            ($(".navbar").innerHeight() + $(".right-sidebar .nav-tabs").outerHeight());
        var $el = $(".right-sidebar .demo-skin");
        if (!isFirstTime) {
            $el.slimScroll({ destroy: true }).height("auto");
            $el
                .parent()
                .find(".slimScrollBar, .slimScrollRail")
                .remove();
        }
        $el.slimscroll({
            height: height + "px",
            color: "rgba(0,0,0,0.5)",
            size: "6px",
            alwaysVisible: false,
            borderRadius: "0",
            railBorderRadius: "0"
        });
    }
    skinChanger() {
        $(".right-sidebar .demo-choose-skin li").on("click", function () {
            var $body = $("body");
            var $this = $(this);
            var existTheme = $(".right-sidebar .demo-choose-skin li.actived").data("theme");
            $(".right-sidebar .demo-choose-skin li").removeClass("actived");
            $body.removeClass("theme-" + existTheme);
            $this.addClass("actived");
            $body.addClass("theme-" + $this.data("theme"));
            var choose_skin = "theme-" + $this.data("theme");
            localStorage.setItem("choose_skin", choose_skin);
            localStorage.setItem("choose_skin_active", $this.data("theme"));
        });
    }
    changeSidebarColor() {
        $(".rightSetting .btn-sidebar-light").on("click", function () {
            $("body").removeClass("menu_dark logo-black");
            $("body").addClass("menu_light logo-white");
            var menu_option = "menu_light";
            localStorage.setItem("choose_logoheader", "logo-white");
            localStorage.setItem("menu_option", menu_option);
        }),
            $(".rightSetting .btn-sidebar-dark").on("click", function () {
                $("body").removeClass("menu_light logo-white");
                $("body").addClass("menu_dark logo-black");
                var menu_option = "menu_dark";
                localStorage.setItem("choose_logoheader", "logo-black");
                localStorage.setItem("menu_option", menu_option);
            });
    }
    changeDarkLightTheme() {
        $(".rightSetting .btn-theme-light").on("click", function () {
            $("body").removeClass("dark submenu-closed menu_dark logo-black");
            $("body").addClass("light submenu-closed menu_light logo-white");
            var theme = "light";
            var menu_option = "menu_light";
            localStorage.setItem("choose_logoheader", "logo-white");
            localStorage.setItem("choose_skin", "theme-black");
            localStorage.setItem("theme", theme);
            localStorage.setItem("menu_option", menu_option);
        }),
            $(".rightSetting .btn-theme-dark").on("click", function () {
                $("body").removeClass("light submenu-closed menu_light logo-white");
                $("body").addClass("dark submenu-closed menu_dark logo-black");
                var theme = "dark";
                var menu_option = "menu_dark";
                localStorage.setItem("choose_logoheader", "logo-black");
                localStorage.setItem("choose_skin", "theme-black");
                localStorage.setItem("theme", theme);
                localStorage.setItem("menu_option", menu_option);
            });
    }
    setSettingListHeightAndScroll(isFirstTime) {
        var height = $(window).height() -
            ($(".navbar").innerHeight() + $(".right-sidebar .nav-tabs").outerHeight());
        var $el = $(".right-sidebar .demo-settings");
        if (!isFirstTime) {
            $el.slimScroll({ destroy: true }).height("auto");
            $el
                .parent()
                .find(".slimScrollBar, .slimScrollRail")
                .remove();
        }
        $el.slimscroll({
            height: height + "px",
            color: "rgba(0,0,0,0.5)",
            size: "6px",
            alwaysVisible: false,
            borderRadius: "0",
            railBorderRadius: "0"
        });
    }
};
RightSidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-right-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./right-sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/right-sidebar/right-sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./right-sidebar.component.sass */ "./src/app/layout/right-sidebar/right-sidebar.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RightSidebarComponent);



/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.sass":
/*!*******************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.sass ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
        this.sidemenuCollapse();
        this.initLeftSidebar();
    }
    initLeftSidebar() {
        var _this = this;
        var $body = $("body");
        var $overlay = $(".overlay");
        //Close sidebar
        $(window).on("click", function (e) {
            var $target = $(e.target);
            if (e.target.nodeName.toLowerCase() === "i") {
                $target = $(e.target).parent();
            }
            if (!$target.hasClass("bars") &&
                _this.isOpen() &&
                $target.parents("#leftsidebar").length === 0) {
                if (!$target.hasClass("js-right-sidebar"))
                    $overlay.fadeOut();
                $body.removeClass("overlay-open");
            }
        });
        $.each($(".menu-toggle.toggled"), function (i, val) {
            $(val)
                .next()
                .slideToggle(0);
        });
        //When page load
        // $.each($('.menu .list li.active'), function (i, val) {
        //     var $activeAnchors = $(val).find('a:eq(0)');
        //     $activeAnchors.addClass('toggled');
        //     $activeAnchors.next().show();
        // });
        //Collapse or Expand Menu
        $(".menu-toggle").on("click", function (e) {
            var $this = $(this);
            var $content = $this.next();
            if ($($this.parents("ul")[0]).hasClass("list")) {
                var $not = $(e.target).hasClass("menu-toggle")
                    ? e.target
                    : $(e.target).parents(".menu-toggle");
                $.each($(".menu-toggle.toggled")
                    .not($not)
                    .next(), function (i, val) {
                    if ($(val).is(":visible")) {
                        $(val)
                            .prev()
                            .toggleClass("toggled");
                        $(val).slideUp();
                    }
                });
            }
            $this.toggleClass("toggled");
            $content.slideToggle(320);
        });
        //Set menu height
        _this.setMenuHeight(true);
        _this.checkStatuForResize(true);
        $(window).resize(function () {
            _this.setMenuHeight(false);
            _this.checkStatuForResize(false);
        });
        //Set Waves
        Waves.attach(".menu .list a", ["waves-block"]);
        Waves.init();
    }
    setMenuHeight(isFirstTime) {
        if (typeof $.fn.slimScroll != "undefined") {
            var height = $(window).height() - $(".navbar").innerHeight();
            var $el = $(".list");
            $el.slimscroll({
                height: height + "px",
                color: 'rgba(0,0,0,0.5)',
                size: '4px',
                alwaysVisible: false,
                borderRadius: '0',
                railBorderRadius: '0'
            });
        }
    }
    isOpen() {
        return $('body').hasClass('overlay-open');
    }
    checkStatuForResize(firstTime) {
        var $body = $('body');
        var $openCloseBar = $('.navbar .navbar-header .bars');
        var width = $body.width();
        if (firstTime) {
            $body.find('.content, .sidebar').addClass('no-animate').delay(1000).queue(function () {
                $(this).removeClass('no-animate').dequeue();
            });
        }
        if (width < 1170) {
            $body.addClass('ls-closed');
            $openCloseBar.fadeIn();
        }
        else {
            $body.removeClass('ls-closed');
            $openCloseBar.fadeOut();
        }
    }
    sidemenuCollapse() {
        $(".sidemenu-collapse").on("click", function () {
            var $body = $("body");
            if ($body.hasClass("side-closed")) {
                $body.removeClass("side-closed");
                $body.removeClass("submenu-closed");
            }
            else {
                $body.addClass("side-closed");
                $body.addClass("submenu-closed");
            }
        });
        $(".content, .navbar").mouseenter(function () {
            var $body = $("body");
            $body.removeClass("side-closed-hover");
            $body.addClass("submenu-closed");
        });
        $(".sidebar").mouseenter(function () {
            var $body = $("body");
            $body.addClass("side-closed-hover");
            $body.removeClass("submenu-closed");
        });
        if (localStorage.getItem("sidebar_option")) {
            jQuery("body").addClass(localStorage.getItem("sidebar_option"));
        }
        if ($("body").hasClass("side-closed")) {
            $(".sidebar-user-panel").css({ display: "none" });
        }
        else {
            $(".sidebar-user-panel").css({ display: "block" });
        }
        jQuery(document).on("click", ".sidemenu-collapse", function () {
            var sidebar_option = "";
            if ($("body").hasClass("side-closed")) {
                var sidebar_option = "side-closed submenu-closed";
                $(".sidebar-user-panel").css({ display: "none" });
            }
            else {
                $(".sidebar-user-panel").css({ display: "block" });
            }
            jQuery("body").addClass(sidebar_option);
            localStorage.setItem("sidebar_option", sidebar_option);
        });
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sidebar/sidebar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.sass */ "./src/app/layout/sidebar/sidebar.component.sass")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SidebarComponent);



/***/ }),

/***/ "./src/app/services/dynamic-script-loader.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/dynamic-script-loader.service.ts ***!
  \***********************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function() { return DynamicScriptLoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ScriptStore = [
    { name: 'form.min', src: 'assets/js/form.min.js' },
    { name: 'map.min', src: 'assets/js/map.min.js' },
    { name: 'tinymce', src: 'assets/js/bundles/tinymce/tinymce.min.js' },
    { name: 'lightgallery', src: 'assets/js/bundles/lightgallery/dist/js/lightgallery-all.min.js' },
    { name: 'dataTables.buttons', src: 'assets/js/bundles/export-tables/dataTables.buttons.min.js' },
    { name: 'editable-table', src: 'assets/js/bundles/editable-table/mindmup-editabletable.js' },
    { name: 'buttons.flash', src: 'assets/js/bundles/export-tables/buttons.flash.min.js' },
    { name: 'jszip', src: 'assets/js/bundles/export-tables/jszip.min.js' },
    { name: 'buttons.html5', src: 'assets/js/bundles/export-tables/buttons.html5.min.js' },
    { name: 'buttons.print', src: 'assets/js/bundles/export-tables/buttons.print.min.js' },
    { name: 'bootstrap-colorpicker', src: 'assets/js/bundles/bootstrap-colorpicker/dist/js/bootstrap-colorpicker.min.js' },
    { name: 'ion.rangeSlider', src: 'assets/js/bundles/rangeSlider/js/ion.rangeSlider.min.js' },
    { name: 'googleapi', src: 'https://maps.google.com/maps/api/js?v=3&sensor=false' },
];
let DynamicScriptLoaderService = class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach((script) => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                //load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) { //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === "loaded" || script.readyState === "complete") {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else { //Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
};
DynamicScriptLoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DynamicScriptLoaderService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\brahi\OneDrive\Bureau\PFE APP\Nouveau dossier\PFE-FRONT-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map