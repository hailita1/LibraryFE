function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/service/author/author.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/author/author.service.ts ***!
    \**************************************************/

  /*! exports provided: AuthorService */

  /***/
  function srcAppServiceAuthorAuthorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorService", function () {
      return AuthorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);

    var AuthorService = /*#__PURE__*/function () {
      function AuthorService(http) {
        _classCallCheck(this, AuthorService);

        this.http = http;
      }

      _createClass(AuthorService, [{
        key: "getAllAuthor",
        value: function getAllAuthor() {
          return this.http.get(API_URL + '/authors');
        }
      }, {
        key: "createAuthor",
        value: function createAuthor(author) {
          return this.http.post(API_URL + '/authors', author);
        }
      }, {
        key: "getAuthor",
        value: function getAuthor(id) {
          return this.http.get(API_URL + "/authors/".concat(id));
        }
      }, {
        key: "updateAuthor",
        value: function updateAuthor(id, author) {
          return this.http.put(API_URL + "/authors/".concat(id), author);
        }
      }, {
        key: "deleteAuthor",
        value: function deleteAuthor(id) {
          return this.http["delete"](API_URL + "/authors/".concat(id));
        }
      }, {
        key: "deleteListAuthor",
        value: function deleteListAuthor(id) {
          return this.http.post(API_URL + '/authors/deleteList', id);
        }
      }]);

      return AuthorService;
    }();

    AuthorService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthorService);
    /***/
  },

  /***/
  "./src/app/service/publishing-company/publishing-company.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/service/publishing-company/publishing-company.service.ts ***!
    \**************************************************************************/

  /*! exports provided: PublishingCompanyService */

  /***/
  function srcAppServicePublishingCompanyPublishingCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublishingCompanyService", function () {
      return PublishingCompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl);

    var PublishingCompanyService = /*#__PURE__*/function () {
      function PublishingCompanyService(http) {
        _classCallCheck(this, PublishingCompanyService);

        this.http = http;
      }

      _createClass(PublishingCompanyService, [{
        key: "getAllPublishingCompany",
        value: function getAllPublishingCompany() {
          return this.http.get(API_URL + '/publishing-companies');
        }
      }, {
        key: "createPublishingCompany",
        value: function createPublishingCompany(publishingCompany) {
          return this.http.post(API_URL + '/publishing-companies', publishingCompany);
        }
      }, {
        key: "getPublishingCompany",
        value: function getPublishingCompany(id) {
          return this.http.get(API_URL + "/publishing-companies/".concat(id));
        }
      }, {
        key: "updatePublishingCompany",
        value: function updatePublishingCompany(id, publishingCompany) {
          return this.http.put(API_URL + "/publishing-companies/".concat(id), publishingCompany);
        }
      }, {
        key: "deletePublishingCompany",
        value: function deletePublishingCompany(id) {
          return this.http["delete"](API_URL + "/publishing-companies/".concat(id));
        }
      }, {
        key: "deleteListPublishingCompany",
        value: function deleteListPublishingCompany(id) {
          return this.http.post(API_URL + '/publishing-companies/deleteList', id);
        }
      }]);

      return PublishingCompanyService;
    }();

    PublishingCompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PublishingCompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PublishingCompanyService);
    /***/
  },

  /***/
  "./src/app/service/upload/upload.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/service/upload/upload.service.ts ***!
    \**************************************************/

  /*! exports provided: UploadService */

  /***/
  function srcAppServiceUploadUploadServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadService", function () {
      return UploadService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var API_URL = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl);

    var UploadService = /*#__PURE__*/function () {
      function UploadService(http) {
        _classCallCheck(this, UploadService);

        this.http = http;
      }

      _createClass(UploadService, [{
        key: "uploadBasic",
        value: function uploadBasic(file) {
          return this.http.post(API_URL + '/upload', file);
        }
      }]);

      return UploadService;
    }();

    UploadService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    UploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UploadService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map