function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/item-product/item-product.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/item-product/item-product.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductItemProductItemProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-9\">\r\n              <label>Tên nhà</label>\r\n              <input\r\n                type=\"text\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"name\"\r\n                id=\"name\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-3\">\r\n              <label for=\"discount\">Giảm giá (%)</label>\r\n              <select class=\"form-control select2 select2-primary\" id=\"discount\" name=\"discount\"\r\n                      formControlName=\"discount\" data-dropdown-css-class=\"select2-primary\"\r\n                      style=\"width: 100%; margin-left: 0px\">\r\n                <option value=\"0\">0</option>\r\n                <option value=\"5\">5</option>\r\n                <option value=\"10\">10</option>\r\n                <option value=\"15\">15</option>\r\n                <option value=\"20\">20</option>\r\n                <option value=\"25\">25</option>\r\n                <option value=\"30\">30</option>\r\n                <option value=\"35\">35</option>\r\n                <option value=\"40\">40</option>\r\n              </select>\r\n              <div *ngIf=\"submitted && formGroup.controls['discount'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['discount'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Địa chỉ</label>\r\n            <input\r\n              type=\"text\"\r\n              name=\"\"\r\n              class=\"form-control\"\r\n              formControlName=\"address\"\r\n              id=\"address\"\r\n            />\r\n            <div *ngIf=\"submitted && formGroup.controls['address'].errors?.required\">\r\n              <div\r\n                *ngIf=\"formGroup.controls['address'].errors?.required\"\r\n                style=\"color: red\"\r\n              >\r\n                * Không để trống\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <label for=\"category\">Tiện ích cho HomeStay</label>\r\n            <table style=\"width: 100%;\" id=\"list-Utilitie\">\r\n              <tr\r\n                *ngFor=\"\r\n                      let utilitieAddToHouse of listUtilitieAddToHouse  | slice: (pageUtilitie-1) * pageSizeUtilitie : (pageUtilitie-1) * pageSizeUtilitie + pageSizeUtilitie;\r\n                      let i = index\r\n                    \">\r\n                <td><label>- {{utilitieAddToHouse.name}}</label></td>\r\n                <td [hidden]=\"!isInfo\" style=\"width: 30px\">\r\n                  <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\"\r\n                          (click)=\"delete(utilitieAddToHouse)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-top: 15px\">\r\n              <ngb-pagination *ngIf=\"listUtilitieAddToHouse.length\"\r\n                              [ellipses]=\"true\" [rotate]=\"true\"\r\n                              [boundaryLinks]=\"true\" [(page)]=\"pageUtilitie\"\r\n                              [pageSize]=\"pageSizeUtilitie\"\r\n                              [collectionSize]=\"this.listUtilitieAddToHouse.length\"></ngb-pagination>\r\n            </div>\r\n            <div *ngIf=\"submitted && formGroup.controls['utilitie'].errors?.required\">\r\n              <div\r\n                *ngIf=\"formGroup.controls['utilitie'].errors?.required\"\r\n                style=\"color: red\"\r\n              >\r\n                * Không để trống\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-6\">\r\n              <label>Giá thuê (VNĐ / ngày)</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"price\"\r\n                id=\"price\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['price'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['price'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label>Số lượng phòng</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"numberRoom\"\r\n                id=\"numberRoom\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['numberRoom'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['numberRoom'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"form-group col-6\">\r\n              <label>Diện tích (m²)</label>\r\n              <input\r\n                type=\"number\"\r\n                name=\"\"\r\n                class=\"form-control\"\r\n                formControlName=\"acreage\"\r\n                id=\"acreage\"\r\n              />\r\n              <div *ngIf=\"submitted && formGroup.controls['acreage'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['acreage'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group col-6\">\r\n              <label for=\"category\">Thể loại</label>\r\n              <select class=\"form-control select2 select2-primary\" id=\"category\" name=\"category\"\r\n                      formControlName=\"category\" data-dropdown-css-class=\"select2-primary\"\r\n                      style=\"width: 100%; margin-left: 0px\">\r\n                <option *ngFor=\"let category of listCategory\" [value]=\"category.id\">{{category.name}}</option>\r\n              </select>\r\n              <div *ngIf=\"submitted && formGroup.controls['category'].errors?.required\">\r\n                <div\r\n                  *ngIf=\"formGroup.controls['category'].errors?.required\"\r\n                  style=\"color: red\"\r\n                >\r\n                  * Không để trống\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"category\">Dịch vụ cho HomeStay</label>\r\n            <button\r\n              [hidden]=\"!isInfo\"\r\n              type=\"button\"\r\n              (click)=\"addMeta($event)\"\r\n              style=\"float: right; margin-bottom: 10px; border-radius: 5px\"\r\n              class=\"btn-success\"\r\n            >\r\n              <i class=\"fas fa-plus\"></i>\r\n            </button>\r\n            <table id=\"basicTable\">\r\n              <tbody>\r\n              <tr\r\n                *ngFor=\"let data of grid.rowData | slice: (pageService - 1) * pageSizeService:(pageService - 1) * pageSizeService + pageSizeService; let i = index\">\r\n                <td><input\r\n                  [disabled]=\"!isInfo\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  type=\"text\"\r\n                  [(ngModel)]=\"data.name\"\r\n                  placeholder=\"Tên dịch vụ\"\r\n                />\r\n                  <div *ngIf=\"submitted\">\r\n                    <div\r\n                      *ngIf=\"data.validName\"\r\n                      style=\"color: red\"\r\n                    >\r\n                      * Không để trống\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td><input\r\n                  [disabled]=\"!isInfo\"\r\n                  [ngModelOptions]=\"{ standalone: true }\"\r\n                  type=\"number\"\r\n                  [(ngModel)]=\"data.price\"\r\n                  placeholder=\"Giá dịch vụ\"\r\n                /> VNĐ\r\n                  <div *ngIf=\"submitted\">\r\n                    <div\r\n                      *ngIf=\"data.validPrice\"\r\n                      style=\"color: red\"\r\n                    >\r\n                      * Không để trống\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td [hidden]=\"!isInfo\">\r\n                  <button\r\n                    [disabled]=\"isInfo\"\r\n                    type=\"button\"\r\n                    class=\"btn btn-danger\"\r\n                    (click)=\"btnDeleteClickedHandler(data)\"\r\n                    title=\"Xóa\"\r\n                    [hidden]=\"isInfo\"\r\n                  >\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-top: 15px\">\r\n              <ngb-pagination *ngIf=\"grid.rowData.length \"\r\n                              [ellipses]=\"true\" [rotate]=\"true\"\r\n                              [boundaryLinks]=\"true\" [(page)]=\"pageService\"\r\n                              [pageSize]=\"pageSizeImage\"\r\n                              [collectionSize]=\"grid.rowData.length\"></ngb-pagination>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\">\r\n          <div class=\"form-group pad\">\r\n            <label for=\"description\">Mô tả chi tiết</label>\r\n            <ckeditor [editor]=\"Editor\" formControlName=\"description\"\r\n                      id=\"description\">>\r\n            </ckeditor>\r\n          </div>\r\n          <div *ngIf=\"submitted && formGroup.controls['description'].errors?.required\">\r\n            <div\r\n              *ngIf=\"formGroup.controls['description'].errors?.required\"\r\n              style=\"color: red\"\r\n            >\r\n              * Không để trống\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" [hidden]=\"!isInfo\">\r\n          <div class=\"form-group\">\r\n            <label for=\"image\">Chọn ảnh HomeStay</label>\r\n            <div class=\"input-group\">\r\n              <div class=\"custom-file\">\r\n                <input [disabled]=\"isInfo\" type=\"file\" class=\"custom-file-input\" (change)=\"uploadFile($event)\"\r\n                       multiple=\"multiple\" id=\"image\" name=\"image\">\r\n                <label class=\"custom-file-label\">Choose file</label>\r\n              </div>\r\n              <div *ngIf=\"isLoading\" class=\" spinner-border\" role=\"status\">\r\n                <span class=\"sr-only\">Loading...</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" [hidden]=\"!isInfo\">\r\n          <div class=\" clearfix col-lg-3 col-md-4 col-6 float-left\"\r\n               *ngFor=\"let image of urlPicture | slice: (pageImage-1) * pageSizeImage : (pageImage-1) * pageSizeImage + pageSizeImage index as i \">\r\n            <div class=\"img-galary\">\r\n              <p class=\"d-block mb-4 h-100\">\r\n                <span (click)=\"pushDeleteImage(image)\" class=\"close\">×</span>\r\n                <img class=\"img-fluid img-thumbnail\" [src]=\"image.link\" alt=\"\" style=\"width: 200px; height: 200px\">\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" style=\"display: flex; justify-content: center;align-items: center; margin-bottom: 30px\"\r\n             *ngIf=\"isInfo\">\r\n          <ngb-pagination *ngIf=\"urlPicture.length\"\r\n                          [ellipses]=\"true\" [rotate]=\"true\"\r\n                          [boundaryLinks]=\"true\" [(page)]=\"pageImage\"\r\n                          [pageSize]=\"pageSizeImage\"\r\n                          [collectionSize]=\"this.urlPicture.length\"></ngb-pagination>\r\n        </div>\r\n        <div class=\"col-12\" [hidden]=\"isInfo\">\r\n          <div\r\n            style=\"width: 1100px; text-align:center;margin:0; padding:0;\">\r\n            <ng-image-slider #nav\r\n                             [images]=\"imageObject\"\r\n                             [infinite]=\"false\"\r\n                             [autoSlide]=\"1\"\r\n                             [imageSize]=\"{width: '25%', height: 200}\"\r\n                             slideImage=\"1\"></ng-image-slider>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-12\" *ngIf=\"hasRoleAdmin\">\r\n          <div class=\"form-group\" style=\"display:inline\">\r\n            <label for=\"status\">Trạng thái: </label>\r\n            <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   for=\"status\" *ngIf=\"formGroup.controls.status.value\">Xác nhận</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red; color: #fff;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không xác nhận</label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductListProductListProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách HomeStay</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách HomeStay</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Đã xác nhận</option>\r\n        <option value=\"0\">Chờ xác nhận</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleUser\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-category\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên nhà</th>\r\n          <th style=\"text-align: center\">Địa chỉ</th>\r\n          <th style=\"text-align: center\">Số lượng phòng</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let house of listHouse; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listHouse[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ house.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.name}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.address}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{house.numberRoom}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"house.status === true\">Đã xác nhận</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"house.status === false\">Chờ xác nhận</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(house, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-check\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleUser\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(house, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getHouseId(house.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa thể loại</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa HomeStay này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteHouse()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách HomeStay</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách HomeStay này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListHouse()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n</section>\r\n\r\n<app-item-product (eventEmit)=\"getAllHouse()\"></app-item-product>\r\n";
    /***/
  },

  /***/
  "./src/app/product/list-product/item-product/item-product.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/product/list-product/item-product/item-product.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductItemProductItemProductComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n}\n\n.ck.ck-editor__main > .ck-editor__editable:not(.ck-focused) {\n  height: 500px !important;\n}\n\ntd,\nth {\n  padding: 8px;\n  text-align: center;\n  vertical-align: middle;\n  border: 1px solid #ddd;\n}\n\n.error {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9saXN0LXByb2R1Y3QvaXRlbS1wcm9kdWN0L0M6XFxVc2Vyc1xcUGhhbnRvbVxcRG93bmxvYWRzXFxEQVRORkUvc3JjXFxhcHBcXHByb2R1Y3RcXGxpc3QtcHJvZHVjdFxcaXRlbS1wcm9kdWN0XFxpdGVtLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2l0ZW0tcHJvZHVjdC9pdGVtLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0L2xpc3QtcHJvZHVjdC9pdGVtLXByb2R1Y3QvaXRlbS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XHJcbiAgaGVpZ2h0OiA1MDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG4uY2suY2stZWRpdG9yX19tYWluID4gLmNrLWVkaXRvcl9fZWRpdGFibGU6bm90KC5jay1mb2N1c2VkKSB7XG4gIGhlaWdodDogNTAwcHggIWltcG9ydGFudDtcbn1cblxudGQsXG50aCB7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/product/list-product/item-product/item-product.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/product/list-product/item-product/item-product.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ItemProductComponent */

  /***/
  function srcAppProductListProductItemProductItemProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemProductComponent", function () {
      return ItemProductComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../service/house/house.service */
    "./src/app/service/house/house.service.ts");
    /* harmony import */


    var _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/category/category.service */
    "./src/app/service/category/category.service.ts");
    /* harmony import */


    var _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/utilitie/utilitie.service */
    "./src/app/service/utilitie/utilitie.service.ts");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__);

    var ItemProductComponent = /*#__PURE__*/function () {
      function ItemProductComponent(modalService, fb, houseService, categoryService, utilitieService, authenticationService) {
        var _this = this;

        _classCallCheck(this, ItemProductComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.houseService = houseService;
        this.categoryService = categoryService;
        this.utilitieService = utilitieService;
        this.authenticationService = authenticationService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.listUtilitieAddToHouse = [];
        this.myItems = [];
        this.arrayPicture = [];
        this.urlPicture = [];
        this.isLoading = false;
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'HomeStay';
        this.imageObject = [];
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.grid = {
          rowData: []
        };
        this.pageUtilitie = 1;
        this.pageSizeUtilitie = 2;
        this.pageImage = 1;
        this.pageSizeImage = 4;
        this.pageService = 1;
        this.pageSizeService = 4;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_9__;
        this.config = {
          toolbar: ['heading', '|', 'bold', 'italic', 'Alignment', 'Autoformat', 'BlockQuote', 'CKFinder', 'CKFinderUploadAdapter', 'Image', 'Link', 'Table', 'TableToolbar', 'TextTransformation', 'MediaEmbed']
        };
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator = _createForOfIteratorHelper(roleList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var role = _step.value;

              if (role.authority === 'ROLE_USER') {
                this.hasRoleUser = true;
              }

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }

      _createClass(ItemProductComponent, [{
        key: "updateFormType",
        value: function updateFormType(type) {
          switch (type) {
            case 'add':
              this.isInfo = false;
              this.isEdit = false;
              this.isAdd = true;
              this.title = "Th\xEAm m\u1EDBi th\xF4ng tin ".concat(this.formName);
              break;

            case 'show':
              this.isInfo = true;
              this.isEdit = false;
              this.isAdd = false;
              this.title = "Xem chi ti\u1EBFt th\xF4ng tin ".concat(this.formName);
              break;

            case 'edit':
              this.isInfo = false;
              this.isEdit = true;
              this.isAdd = false;
              this.title = "Ch\u1EC9nh s\u1EEDa th\xF4ng tin ".concat(this.formName);
              break;

            default:
              this.isInfo = false;
              this.isEdit = false;
              this.isAdd = true;
              break;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.submitted = false;
          this.getAllCategory();
          this.getAllUtilitie();
          this.idUser = JSON.parse(localStorage.getItem('user') || '{id}').id;
        }
      }, {
        key: "view",
        value: function view(model) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          console.log(model);
          this.open(this.childModal);
          this.type = type;
          this.model = model;
          this.submitted = false;
          this.updateFormType(type);

          if (model.id === null || model.id === undefined) {
            this.grid.rowData = [];
            this.formGroup = this.fb.group({
              name: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              description: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              numberRoom: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              price: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              category: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              utilitie: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              discount: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              acreage: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              status: [{
                value: false,
                disabled: true
              }]
            });
          } else {
            this.imageObject = [];
            this.listUtilitieAddToHouse = this.model.utilitie;
            this.grid.rowData = this.model.services;
            this.urlPicture = this.model.images;
            this.listUtilitieAddToHouse = this.model.utilitie;

            for (var i = 0; i < this.urlPicture.length; i++) {
              this.imageObject[i] = {
                image: this.urlPicture[i].link,
                thumbImage: this.urlPicture[i].link
              };
            }

            this.formGroup = this.fb.group({
              name: [{
                value: this.model.name,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              address: [{
                value: this.model.address,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              description: [{
                value: this.model.description,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              numberRoom: [{
                value: this.model.numberRoom,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              price: [{
                value: this.model.price,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              discount: [{
                value: this.model.discount,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              category: [{
                value: this.model.category.id,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              utilitie: [{
                value: this.model.utilitie,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              acreage: [{
                value: this.model.acreage,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              status: [{
                value: this.model.status,
                disabled: false
              }]
            });
          }
        } // tslint:disable-next-line:typedef

      }, {
        key: "open",
        value: function open(content) {
          var _this2 = this;

          this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'xl'
          });
          this.modalReference.result.then(function (result) {
            _this2.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this2.closeResult = "Dismissed ".concat(_this2.getDismissReason(reason));
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          var house;
          this.submitted = true;

          if (this.formGroup.invalid && this.validCategoryMeta() === false) {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Kiểm tra thông tin các trường đã nhập'
              });
            });
            return;
          }

          console.log(this.grid.rowData);

          if (this.isEdit) {
            house = {
              name: this.formGroup.get('name').value,
              address: this.formGroup.get('address').value,
              description: this.formGroup.get('description').value,
              acreage: this.formGroup.get('acreage').value,
              numberRoom: this.formGroup.get('numberRoom').value,
              discount: this.formGroup.get('discount').value,
              status: this.formGroup.get('status').value,
              price: this.formGroup.get('price').value,
              category: {
                id: this.formGroup.get('category').value
              },
              utilitie: this.listUtilitieAddToHouse,
              user: {
                id: this.idUser
              },
              id: this.model.id,
              images: this.urlPicture,
              services: this.grid.rowData
            };
          } else {
            house = {
              name: this.formGroup.get('name').value,
              address: this.formGroup.get('address').value,
              description: this.formGroup.get('description').value,
              acreage: this.formGroup.get('acreage').value,
              numberRoom: this.formGroup.get('numberRoom').value,
              discount: this.formGroup.get('discount').value,
              status: this.formGroup.get('status').value,
              price: this.formGroup.get('price').value,
              numberHires: 0,
              category: {
                id: this.formGroup.get('category').value
              },
              utilitie: this.listUtilitieAddToHouse,
              user: {
                id: this.idUser
              },
              images: this.urlPicture,
              services: this.grid.rowData
            };
          }

          if (this.isAdd) {
            this.houseService.createHouse(house).subscribe(function (res) {
              _this3.closeModalReloadData();

              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Thêm mới thành công'
                });
              }); // this.grid.rowData = [];

              _this3.modalReference.dismiss();
            }, function (err) {
              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'error',
                  title: 'Thêm mới thất bại'
                });
              });
            });
          }

          if (this.isEdit) {
            this.houseService.updateHouse(house.id, house).subscribe(function (res) {
              _this3.closeModalReloadData();

              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'success',
                  title: 'Cập nhật thành công'
                });
              });

              _this3.modalReference.dismiss();

              _this3.imageObject = [];
            }, function (err) {
              $(function () {
                var Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000
                });
                Toast.fire({
                  type: 'error',
                  title: 'Cập nhật thất bại'
                });
              });
            });
          }
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            this.listUtilitieAddToHouse = [];
            this.urlPicture = [];
            return 'by clicking on a backdrop';
          } else {
            this.listUtilitieAddToHouse = [];
            this.urlPicture = [];
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "closeModalReloadData",
        value: function closeModalReloadData() {
          this.submitted = false;
          this.eventEmit.emit('success');
        }
      }, {
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this4 = this;

          this.categoryService.getAllCategoryStatusTrue().subscribe(function (listCategory) {
            _this4.listCategory = listCategory;
          });
        }
      }, {
        key: "getAllUtilitie",
        value: function getAllUtilitie() {
          var _this5 = this;

          this.utilitieService.getAllUtilitieStatusTrue().subscribe(function (listUtilitie) {
            _this5.listUtilitie = listUtilitie;
          });
        }
      }, {
        key: "addUtilitieToHouse",
        value: function addUtilitieToHouse(id) {
          var utilitie1 = this.listUtilitie.filter(function (utilitie) {
            return utilitie.id == id;
          });
          var utilitie2 = this.listUtilitieAddToHouse.filter(function (utilitie) {
            return utilitie1[0].id == utilitie.id;
          });

          if (utilitie2.length == 0) {
            this.listUtilitieAddToHouse.push(utilitie1[0]);
          }
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var indexOf = this.listUtilitieAddToHouse.indexOf(id);
          this.listUtilitieAddToHouse.splice(indexOf, 1);
        } // Upload avt

      }, {
        key: "uploadFile",
        value: function uploadFile(event) {
          this.myItems = [];
          var files = event.target.files;

          for (var i = 0; i < files.length; i++) {
            this.myItems.push(files[i]);
          }

          this.uploadAll(this.myItems);
        }
      }, {
        key: "uploadAll",
        value: function uploadAll(imge) {
          var _this6 = this;

          this.isLoading = true;
          Promise.all(imge.map(function (file) {
            return _this6.putStorageItem(file);
          })).then(function (url) {
            _this6.arrayPicture = url;

            for (var i = 0; i < _this6.arrayPicture.length; i++) {
              _this6.urlPicture.push(_this6.arrayPicture[i]);

              _this6.imageObject[i] = {
                image: _this6.arrayPicture[i].link,
                thumbImage: _this6.arrayPicture[i].link
              };
            }

            _this6.isLoading = false;
          })["catch"](function (error) {
            _this6.isLoading = false;
          });
        }
      }, {
        key: "putStorageItem",
        value: function putStorageItem(file) {
          // the return value will be a Promise
          var metadata = {
            contentType: 'image/jpeg'
          };
          return new Promise(function (resolve, reject) {
            firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref('img/' + Date.now()).put(file, metadata).then(function (snapshot) {
              snapshot.ref.getDownloadURL().then(function (downloadURL) {
                var link = {
                  link: downloadURL
                }; // @ts-ignore

                resolve(link);
              });
            })["catch"](function (error) {
              return reject(error);
            });
          });
        }
      }, {
        key: "pushDeleteImage",
        value: function pushDeleteImage(i) {
          var indexOf = this.urlPicture.indexOf(i);
          this.urlPicture.splice(indexOf, 1);
        }
      }, {
        key: "onClick",
        value: function onClick() {
          myTest();
        }
      }, {
        key: "addMeta",
        value: function addMeta(event) {
          var model = {
            name: '',
            price: '',
            status: true,
            validName: false,
            validPrice: false
          };
          this.grid.rowData.push(model);
        }
      }, {
        key: "btnDeleteClickedHandler",
        value: function btnDeleteClickedHandler(event) {
          var indexOfItem = this.grid.rowData.indexOf(event);
          this.grid.rowData.splice(indexOfItem, 1);
        }
      }, {
        key: "validCategoryMeta",
        value: function validCategoryMeta() {
          var flag = false;
          this.grid.rowData.forEach(function (item) {
            if (item.name === '' || item.name === null || item.name === undefined) {
              item.validName = true;
              flag = true;
            } else {
              item.validName = false;
              flag = false;
            }

            if (item.price === '' || item.price === null || item.price === undefined) {
              item.validPrice = true;
              flag = true;
            } else {
              item.validPrice = false;
              flag = false;
            }
          });

          if (flag === false) {
            return true;
          }

          return false;
        }
      }]);

      return ItemProductComponent;
    }();

    ItemProductComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_4__["HouseService"]
      }, {
        type: _service_category_category_service__WEBPACK_IMPORTED_MODULE_5__["CategoryService"]
      }, {
        type: _service_utilitie_utilitie_service__WEBPACK_IMPORTED_MODULE_6__["UtilitieService"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], ItemProductComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemProductComponent.prototype, "listHouse", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItemProductComponent.prototype, "eventEmit", void 0);
    ItemProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/item-product/item-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-product.component.scss */
      "./src/app/product/list-product/item-product/item-product.component.scss"))["default"]]
    })], ItemProductComponent);
    /***/
  },

  /***/
  "./src/app/product/list-product/list-product.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/product/list-product/list-product.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductListProductListProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvbGlzdC1wcm9kdWN0L2xpc3QtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/product/list-product/list-product.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/product/list-product/list-product.component.ts ***!
    \****************************************************************/

  /*! exports provided: ListProductComponent */

  /***/
  function srcAppProductListProductListProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListProductComponent", function () {
      return ListProductComponent;
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


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_house_house_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/house/house.service */
    "./src/app/service/house/house.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _item_product_item_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./item-product/item-product.component */
    "./src/app/product/list-product/item-product/item-product.component.ts");

    var ListProductComponent = /*#__PURE__*/function () {
      function ListProductComponent(houseService, modalService, authenticationService) {
        var _this7 = this;

        _classCallCheck(this, ListProductComponent);

        this.houseService = houseService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listFilterResult = [];
        this.listDelete = [];
        this.isSelected = true;
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this7.currentUser = value;
        });

        if (this.currentUser) {
          var roleList = this.currentUser.roles;

          var _iterator2 = _createForOfIteratorHelper(roleList),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var role = _step2.value;

              if (role.authority === 'ROLE_USER') {
                this.hasRoleUser = true;
              }

              if (role.authority === 'ROLE_ADMIN') {
                this.hasRoleAdmin = true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }

      _createClass(ListProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllHouse();
        }
      }, {
        key: "getHouseId",
        value: function getHouseId(id) {
          this.id = id;
        }
      }, {
        key: "initModal",
        value: function initModal(model) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.view.view(model, type);
        }
      }, {
        key: "checkAllCheckBox",
        value: function checkAllCheckBox(ev) {
          this.listHouse.forEach(function (x) {
            return x.checked = ev.target.checked;
          });
          this.changeModel();
        }
      }, {
        key: "changeModel",
        value: function changeModel() {
          var selectedHouse = _toConsumableArray(this.listHouse).filter(function (house) {
            return house.checked;
          }).map(function (p) {
            return p.id;
          });

          if (selectedHouse.length > 0) {
            this.isDelete = false;
          } else {
            this.isDelete = true;
          }
        }
      }, {
        key: "deleteHouse",
        value: function deleteHouse() {
          var _this8 = this;

          this.houseService.deleteHouse(this.id).subscribe(function () {
            _this8.houseService.getAllHouse().subscribe(function (listHouse) {
              _this8.listHouse = listHouse;
            });

            $(function () {
              $('#modal-delete').modal('hide');
            });
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: 'Xóa thành công'
              });
            });
          }, function () {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Xóa thất bại'
              });
            });
          });
        }
      }, {
        key: "getAllHouse",
        value: function getAllHouse() {
          var _this9 = this;

          this.houseService.getAllHouse().subscribe(function (listHouse) {
            _this9.listHouse = listHouse;
            _this9.listFilterResult = _this9.listHouse;
            $(function () {
              $('#table-category').DataTable({
                'paging': true,
                'lengthChange': true,
                'retrieve': true,
                'searching': true,
                'ordering': false,
                'info': false,
                'autoWidth': true
              });
            });
          });
        }
      }, {
        key: "deleteListHouse",
        value: function deleteListHouse() {
          var _this10 = this;

          for (var i = 0; i < this.listHouse.length; i++) {
            if (this.listHouse[i].checked === true) {
              this.listDelete.push(this.listHouse[i].id);
            }
          }

          this.houseService.deleteListHouse(this.listDelete).subscribe(function (res) {
            _this10.getAllHouse();

            $(function () {
              $('#modal-delete').modal('hide');
            });
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'success',
                title: 'Xóa thành công'
              });
            });
            _this10.listDelete = [];
            _this10.isDelete = true;
          }, function (err) {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Xóa thất bại'
              });
            });
          });
          this.getAllHouse();
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(event) {
          var list = []; // tslint:disable-next-line: radix

          switch (parseInt(event)) {
            case -1:
              this.listHouse = _toConsumableArray(this.listFilterResult);
              break;

            case 1:
              list = _toConsumableArray(this.listFilterResult);
              this.listHouse = list.filter(function (item) {
                return item.status === true;
              });
              break;

            case 0:
              list = _toConsumableArray(this.listFilterResult);
              this.listHouse = list.filter(function (item) {
                return item.status === false;
              });
              break;

            default:
              break;
          }
        }
      }]);

      return ListProductComponent;
    }();

    ListProductComponent.ctorParameters = function () {
      return [{
        type: _service_house_house_service__WEBPACK_IMPORTED_MODULE_3__["HouseService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_product_item_product_component__WEBPACK_IMPORTED_MODULE_5__["ItemProductComponent"])], ListProductComponent.prototype, "view", void 0);
    ListProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/list-product/list-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-product.component.css */
      "./src/app/product/list-product/list-product.component.css"))["default"]]
    })], ListProductComponent);
    /***/
  },

  /***/
  "./src/app/product/product-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/product/product-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: ProductRoutingModule */

  /***/
  function srcAppProductProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
      return ProductRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-product/list-product.component */
    "./src/app/product/list-product/list-product.component.ts");
    /* harmony import */


    var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../helper/auth-guard */
    "./src/app/helper/auth-guard.ts");

    var routes = [{
      path: '',
      component: _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_3__["ListProductComponent"],
      canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var ProductRoutingModule = function ProductRoutingModule() {
      _classCallCheck(this, ProductRoutingModule);
    };

    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductRoutingModule);
    /***/
  },

  /***/
  "./src/app/product/product.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/product/product.module.ts ***!
    \*******************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-routing.module */
    "./src/app/product/product-routing.module.ts");
    /* harmony import */


    var _list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-product/list-product.component */
    "./src/app/product/list-product/list-product.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _list_product_item_product_item_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-product/item-product/item-product.component */
    "./src/app/product/list-product/item-product/item-product.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/fesm2015/ckeditor-ckeditor5-angular.js");

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_product_list_product_component__WEBPACK_IMPORTED_MODULE_4__["ListProductComponent"], _list_product_item_product_item_product_component__WEBPACK_IMPORTED_MODULE_6__["ItemProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_8__["NgImageSliderModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_9__["CKEditorModule"]]
    })], ProductModule);
    /***/
  }
}]);
//# sourceMappingURL=product-product-module-es5.js.map