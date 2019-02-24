(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["logic-logic-module"],{

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvcGFnZS12aWRlby1saXN0L3BhZ2UtdmlkZW8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Lista video\n  <button (click)=\"getMovies()\">Pobierz filmy</button>\n</p>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-list/page-video-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/logic/components/page-video-list/page-video-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PageVideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoListComponent", function() { return PageVideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/logic/services/movies.service.ts");



var PageVideoListComponent = /** @class */ (function () {
    function PageVideoListComponent(moviesService) {
        this.moviesService = moviesService;
    }
    PageVideoListComponent.prototype.ngOnInit = function () { };
    PageVideoListComponent.prototype.getMovies = function () {
        this.movies = this.moviesService.fetchMovies().then(function (res) { return console.log(res); });
        ;
    };
    PageVideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-list',
            template: __webpack_require__(/*! ./page-video-list.component.html */ "./src/app/logic/components/page-video-list/page-video-list.component.html"),
            styles: [__webpack_require__(/*! ./page-video-list.component.css */ "./src/app/logic/components/page-video-list/page-video-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]])
    ], PageVideoListComponent);
    return PageVideoListComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvcGFnZS12aWRlby1ub3QtZm91bmQvcGFnZS12aWRlby1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Brak video\n</p>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PageVideoNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoNotFoundComponent", function() { return PageVideoNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageVideoNotFoundComponent = /** @class */ (function () {
    function PageVideoNotFoundComponent() {
    }
    PageVideoNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageVideoNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-not-found',
            template: __webpack_require__(/*! ./page-video-not-found.component.html */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-video-not-found.component.css */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageVideoNotFoundComponent);
    return PageVideoNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljL2NvbXBvbmVudHMvcGFnZS12aWRlby1wcm9maWxlL3BhZ2UtdmlkZW8tcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profil video\n</p>\n"

/***/ }),

/***/ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/logic/components/page-video-profile/page-video-profile.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PageVideoProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageVideoProfileComponent", function() { return PageVideoProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageVideoProfileComponent = /** @class */ (function () {
    function PageVideoProfileComponent() {
    }
    PageVideoProfileComponent.prototype.ngOnInit = function () {
    };
    PageVideoProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-video-profile',
            template: __webpack_require__(/*! ./page-video-profile.component.html */ "./src/app/logic/components/page-video-profile/page-video-profile.component.html"),
            styles: [__webpack_require__(/*! ./page-video-profile.component.css */ "./src/app/logic/components/page-video-profile/page-video-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageVideoProfileComponent);
    return PageVideoProfileComponent;
}());



/***/ }),

/***/ "./src/app/logic/logic-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/logic/logic-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LogicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicRoutingModule", function() { return LogicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-video-list/page-video-list.component */ "./src/app/logic/components/page-video-list/page-video-list.component.ts");
/* harmony import */ var _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-video-not-found/page-video-not-found.component */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts");
/* harmony import */ var _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-video-profile/page-video-profile.component */ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts");






var routes = [
    {
        path: 'list',
        component: _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__["PageVideoListComponent"]
    },
    {
        path: 'profile',
        component: _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_5__["PageVideoProfileComponent"]
    },
    {
        path: '**',
        component: _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageVideoNotFoundComponent"]
    }
];
var LogicRoutingModule = /** @class */ (function () {
    function LogicRoutingModule() {
    }
    LogicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LogicRoutingModule);
    return LogicRoutingModule;
}());



/***/ }),

/***/ "./src/app/logic/logic.module.ts":
/*!***************************************!*\
  !*** ./src/app/logic/logic.module.ts ***!
  \***************************************/
/*! exports provided: LogicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicModule", function() { return LogicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-video-list/page-video-list.component */ "./src/app/logic/components/page-video-list/page-video-list.component.ts");
/* harmony import */ var _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page-video-not-found/page-video-not-found.component */ "./src/app/logic/components/page-video-not-found/page-video-not-found.component.ts");
/* harmony import */ var _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/page-video-profile/page-video-profile.component */ "./src/app/logic/components/page-video-profile/page-video-profile.component.ts");
/* harmony import */ var _logic_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic-routing.module */ "./src/app/logic/logic-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var LogicModule = /** @class */ (function () {
    function LogicModule() {
    }
    LogicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__["PageVideoListComponent"],
                _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageVideoNotFoundComponent"],
                _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_5__["PageVideoProfileComponent"]
            ],
            exports: [
                _components_page_video_list_page_video_list_component__WEBPACK_IMPORTED_MODULE_3__["PageVideoListComponent"],
                _components_page_video_not_found_page_video_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageVideoNotFoundComponent"],
                _components_page_video_profile_page_video_profile_component__WEBPACK_IMPORTED_MODULE_5__["PageVideoProfileComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _logic_routing_module__WEBPACK_IMPORTED_MODULE_6__["LogicRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ]
        })
    ], LogicModule);
    return LogicModule;
}());



/***/ }),

/***/ "./src/app/logic/services/movies.service.ts":
/*!**************************************************!*\
  !*** ./src/app/logic/services/movies.service.ts ***!
  \**************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");




var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.fetchMovies = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].moviesURL + "/assets/movies.json").toPromise()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    moviesURL: 'https://martin89pl.github.io/warsawjs-workshop-29-movies'
};


/***/ })

}]);
//# sourceMappingURL=logic-logic-module.js.map