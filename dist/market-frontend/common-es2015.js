(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/service/author/author.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/author/author.service.ts ***!
  \**************************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let AuthorService = class AuthorService {
    constructor(http) {
        this.http = http;
    }
    getAllAuthor() {
        return this.http.get(API_URL + '/authors');
    }
    createAuthor(author) {
        return this.http.post(API_URL + '/authors', author);
    }
    getAuthor(id) {
        return this.http.get(API_URL + `/authors/${id}`);
    }
    updateAuthor(id, author) {
        return this.http.put(API_URL + `/authors/${id}`, author);
    }
    deleteAuthor(id) {
        return this.http.delete(API_URL + `/authors/${id}`);
    }
    deleteListAuthor(id) {
        return this.http.post(API_URL + '/authors/deleteList', id);
    }
};
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorService);



/***/ }),

/***/ "./src/app/service/publishing-company/publishing-company.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/service/publishing-company/publishing-company.service.ts ***!
  \**************************************************************************/
/*! exports provided: PublishingCompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishingCompanyService", function() { return PublishingCompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl}`;
let PublishingCompanyService = class PublishingCompanyService {
    constructor(http) {
        this.http = http;
    }
    getAllPublishingCompany() {
        return this.http.get(API_URL + '/publishing-companies');
    }
    createPublishingCompany(publishingCompany) {
        return this.http.post(API_URL + '/publishing-companies', publishingCompany);
    }
    getPublishingCompany(id) {
        return this.http.get(API_URL + `/publishing-companies/${id}`);
    }
    updatePublishingCompany(id, publishingCompany) {
        return this.http.put(API_URL + `/publishing-companies/${id}`, publishingCompany);
    }
    deletePublishingCompany(id) {
        return this.http.delete(API_URL + `/publishing-companies/${id}`);
    }
    deleteListPublishingCompany(id) {
        return this.http.post(API_URL + '/publishing-companies/deleteList', id);
    }
};
PublishingCompanyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PublishingCompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PublishingCompanyService);



/***/ }),

/***/ "./src/app/service/upload/upload.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/upload/upload.service.ts ***!
  \**************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}`;
let UploadService = class UploadService {
    constructor(http) {
        this.http = http;
    }
    uploadBasic(file) {
        return this.http.post(API_URL + '/upload', file);
    }
};
UploadService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UploadService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map