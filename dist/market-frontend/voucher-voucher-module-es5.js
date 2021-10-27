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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["voucher-voucher-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/item-voucher/item-voucher.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/item-voucher/item-voucher.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVoucherItemVoucherItemVoucherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tiêu đề</label>\r\n        <input type=\"text\" name=\"\" class=\"form-control\" formControlName=\"title\" id=\"title\"/>\r\n        <div *ngIf=\"submitted && formGroup.controls['title'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['title'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tiêu đề không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Mã giảm giá</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"voucher_code\"\r\n          id=\"voucher_code\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['voucher_code'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['voucher_code'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Mã giảm giá không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"category\">Loại giảm giá</label>\r\n        <select class=\"form-control select2 select2-primary\" id=\"category\" name=\"category\"\r\n                formControlName=\"category\" data-dropdown-css-class=\"select2-primary\"\r\n                style=\"width: 100%; margin-left: 0px\">\r\n          <option value=\"0\">Giảm theo tiền (VNĐ)</option>\r\n          <option value=\"1\">Giảm theo phần trăm (%)</option>\r\n        </select>\r\n        <div *ngIf=\"submitted && formGroup.controls['category'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['category'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Giảm giá không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Giảm giá</label>\r\n        <input\r\n          type=\"number\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"discount\"\r\n          id=\"discount\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['discount'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['discount'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Giảm giá không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Ngày áp dụng</label>\r\n        <input\r\n          type=\"date\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"startDate\"\r\n          id=\"startDate\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['startDate'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['startDate'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Ngày áp dụng không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label>Ngày kết thúc</label>\r\n        <input\r\n          type=\"date\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"expiredDate\"\r\n          id=\"expiredDate\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['expiredDate'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['expiredDate'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Ngày kết thúc không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/voucher/voucher.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/voucher/voucher.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppVoucherVoucherVoucherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách Voucher</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách Voucher</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Còn hạn</option>\r\n        <option value=\"0\">Hết hạn</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-category\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Mã giảm giá</th>\r\n          <th style=\"text-align: center\">Giảm giá</th>\r\n          <th style=\"text-align: center\">Loại giảm giá</th>\r\n          <th style=\"text-align: center\">Ngày áp dụng</th>\r\n          <th style=\"text-align: center\">Ngày kết thúc</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let voucher of listVoucher; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listVoucher[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ voucher.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{voucher.voucher_code}}</p>\r\n          </td>\r\n\r\n          <td style=\"text-align: center\">\r\n            <p>{{voucher.discount}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p class=\"status\" *ngIf=\"voucher.typeVoucher === 0\">Giảm tiền</p>\r\n            <p class=\"status\" *ngIf=\"voucher.typeVoucher === 1\">Giảm phần trăm</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{voucher.startDate | date:'dd/MM/yyyy'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{voucher.expiredDate | date:'dd/MM/yyyy'}}</p>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center; padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"voucher.status === true\">Còn hạn</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;vertical-align: middle;\"\r\n                   *ngIf=\"voucher.status === false\">Hết hạn</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(voucher, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(voucher, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" *ngIf=\"hasRoleAdmin\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getVoucherId(voucher.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa Voucher</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa Voucher này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteVoucher()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách Voucher</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách Voucher này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListVoucher()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<app-item-voucher (eventEmit)=\"getAllVoucher()\"></app-item-voucher>\r\n";
    /***/
  },

  /***/
  "./src/app/voucher/item-voucher/item-voucher.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/voucher/item-voucher/item-voucher.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVoucherItemVoucherItemVoucherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdWNoZXIvaXRlbS12b3VjaGVyL2l0ZW0tdm91Y2hlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/voucher/item-voucher/item-voucher.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/voucher/item-voucher/item-voucher.component.ts ***!
    \****************************************************************/

  /*! exports provided: ItemVoucherComponent */

  /***/
  function srcAppVoucherItemVoucherItemVoucherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemVoucherComponent", function () {
      return ItemVoucherComponent;
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


    var _service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../service/voucher/voucher.service */
    "./src/app/service/voucher/voucher.service.ts");

    var ItemVoucherComponent = /*#__PURE__*/function () {
      function ItemVoucherComponent(modalService, fb, voucherService) {
        _classCallCheck(this, ItemVoucherComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.voucherService = voucherService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'voucher';
      }

      _createClass(ItemVoucherComponent, [{
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
              this.title = "S\u1EEDa th\xF4ng tin ".concat(this.formName);
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
        }
      }, {
        key: "view",
        value: function view(model) {
          var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
          this.arrCheck = this.listVoucher;
          this.open(this.childModal);
          this.type = type;
          this.model = model;
          this.submitted = false;
          this.updateFormType(type);

          if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
              voucher_code: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              title: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              discount: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              startDate: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              expiredDate: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              category: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
          } else {
            this.formGroup = this.fb.group({
              voucher_code: [{
                value: this.model.voucher_code,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              title: [{
                value: this.model.title,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              discount: [{
                value: this.model.discount,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              startDate: [{
                value: this.model.startDate,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              expiredDate: [{
                value: this.model.expiredDate,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              category: [{
                value: this.model.typeVoucher,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
          }
        } // tslint:disable-next-line:typedef

      }, {
        key: "open",
        value: function open(content) {
          var _this = this;

          this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'sl'
          });
          this.modalReference.result.then(function (result) {
            _this.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this.closeResult = "Dismissed ".concat(_this.getDismissReason(reason));
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this2 = this;

          var voucher;
          this.submitted = true;

          if (this.formGroup.invalid) {
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

          if (this.isEdit) {
            voucher = {
              voucher_code: this.formGroup.get('voucher_code').value,
              title: this.formGroup.get('title').value,
              discount: this.formGroup.get('discount').value,
              startDate: this.formGroup.get('startDate').value,
              expiredDate: this.formGroup.get('expiredDate').value,
              typeVoucher: this.formGroup.get('category').value,
              status: true,
              id: this.model.id
            };
          } else {
            voucher = {
              voucher_code: this.formGroup.get('voucher_code').value,
              title: this.formGroup.get('title').value,
              discount: this.formGroup.get('discount').value,
              startDate: this.formGroup.get('startDate').value,
              expiredDate: this.formGroup.get('expiredDate').value,
              typeVoucher: this.formGroup.get('category').value,
              status: true
            };
          }

          var sd = new Date(this.formGroup.get('startDate').value).getTime();
          var ed = new Date(this.formGroup.get('expiredDate').value).getTime();

          if (sd > ed) {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Ngày bắt đầu phải nhỏ hơn ngày kết thúc'
              });
            });
          } else if (this.formGroup.get('category').value === '1' && this.formGroup.get('discount').value > 100) {
            $(function () {
              var Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000
              });
              Toast.fire({
                type: 'error',
                title: 'Phần trăm giảm giá phải bé hơn 100'
              });
            });
          } else {
            if (this.isAdd) {
              this.voucherService.createVoucher(voucher).subscribe(function (res) {
                _this2.closeModalReloadData();

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
                });

                _this2.modalReference.dismiss();
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
              this.voucherService.updateVoucher(voucher.id, voucher).subscribe(function (res) {
                _this2.closeModalReloadData();

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

                _this2.modalReference.dismiss();
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
        }
      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "closeModalReloadData",
        value: function closeModalReloadData() {
          this.submitted = false;
          this.eventEmit.emit('success');
        }
      }]);

      return ItemVoucherComponent;
    }();

    ItemVoucherComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_4__["VoucherService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], ItemVoucherComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemVoucherComponent.prototype, "listVoucher", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItemVoucherComponent.prototype, "eventEmit", void 0);
    ItemVoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-voucher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-voucher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/item-voucher/item-voucher.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-voucher.component.scss */
      "./src/app/voucher/item-voucher/item-voucher.component.scss"))["default"]]
    })], ItemVoucherComponent);
    /***/
  },

  /***/
  "./src/app/voucher/voucher-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/voucher/voucher-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: VoucherRoutingModule */

  /***/
  function srcAppVoucherVoucherRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoucherRoutingModule", function () {
      return VoucherRoutingModule;
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


    var _helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helper/auth-guard */
    "./src/app/helper/auth-guard.ts");
    /* harmony import */


    var _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./voucher/voucher.component */
    "./src/app/voucher/voucher/voucher.component.ts");

    var routes = [{
      path: '',
      canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      component: _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_4__["VoucherComponent"]
    }];

    var VoucherRoutingModule = function VoucherRoutingModule() {
      _classCallCheck(this, VoucherRoutingModule);
    };

    VoucherRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VoucherRoutingModule);
    /***/
  },

  /***/
  "./src/app/voucher/voucher.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/voucher/voucher.module.ts ***!
    \*******************************************/

  /*! exports provided: VoucherModule */

  /***/
  function srcAppVoucherVoucherModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoucherModule", function () {
      return VoucherModule;
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


    var _voucher_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./voucher-routing.module */
    "./src/app/voucher/voucher-routing.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _voucher_voucher_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./voucher/voucher.component */
    "./src/app/voucher/voucher/voucher.component.ts");
    /* harmony import */


    var _item_voucher_item_voucher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./item-voucher/item-voucher.component */
    "./src/app/voucher/item-voucher/item-voucher.component.ts");

    var VoucherModule = function VoucherModule() {
      _classCallCheck(this, VoucherModule);
    };

    VoucherModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_voucher_voucher_component__WEBPACK_IMPORTED_MODULE_6__["VoucherComponent"], _item_voucher_item_voucher_component__WEBPACK_IMPORTED_MODULE_7__["ItemVoucherComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _voucher_routing_module__WEBPACK_IMPORTED_MODULE_3__["VoucherRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], VoucherModule);
    /***/
  },

  /***/
  "./src/app/voucher/voucher/voucher.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/voucher/voucher/voucher.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppVoucherVoucherVoucherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZvdWNoZXIvdm91Y2hlci92b3VjaGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/voucher/voucher/voucher.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/voucher/voucher/voucher.component.ts ***!
    \******************************************************/

  /*! exports provided: VoucherComponent */

  /***/
  function srcAppVoucherVoucherVoucherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoucherComponent", function () {
      return VoucherComponent;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _item_voucher_item_voucher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../item-voucher/item-voucher.component */
    "./src/app/voucher/item-voucher/item-voucher.component.ts");
    /* harmony import */


    var _service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../service/voucher/voucher.service */
    "./src/app/service/voucher/voucher.service.ts");

    ;

    var VoucherComponent = /*#__PURE__*/function () {
      function VoucherComponent(voucherService, modalService, authenticationService) {
        var _this3 = this;

        _classCallCheck(this, VoucherComponent);

        this.voucherService = voucherService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listFilterResult = [];
        this.listDelete = [];
        this.isSelected = true;
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this3.currentUser = value;
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

      _createClass(VoucherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllVoucher();
        }
      }, {
        key: "getVoucherId",
        value: function getVoucherId(id) {
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
          this.listVoucher.forEach(function (x) {
            return x.checked = ev.target.checked;
          });
          this.changeModel();
        }
      }, {
        key: "changeModel",
        value: function changeModel() {
          var selectedVoucher = _toConsumableArray(this.listVoucher).filter(function (voucher) {
            return voucher.checked;
          }).map(function (p) {
            return p.id;
          });

          if (selectedVoucher.length > 0) {
            this.isDelete = false;
          } else {
            this.isDelete = true;
          }
        }
      }, {
        key: "deleteVoucher",
        value: function deleteVoucher() {
          var _this4 = this;

          this.voucherService.deleteVoucher(this.id).subscribe(function () {
            _this4.voucherService.getAll().subscribe(function (listVoucher) {
              _this4.listVoucher = listVoucher;
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
        key: "getAllVoucher",
        value: function getAllVoucher() {
          var _this5 = this;

          this.voucherService.getAll().subscribe(function (listVoucher) {
            _this5.listVoucher = listVoucher;
            _this5.listFilterResult = _this5.listVoucher;
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
        key: "deleteListVoucher",
        value: function deleteListVoucher() {
          var _this6 = this;

          for (var i = 0; i < this.listVoucher.length; i++) {
            if (this.listVoucher[i].checked === true) {
              this.listDelete.push(this.listVoucher[i].id);
            }
          }

          this.voucherService.deleteListVoucher(this.listDelete).subscribe(function (res) {
            _this6.getAllVoucher();

            $(function () {
              $('#modal-delete-list').modal('hide');
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
            _this6.listDelete = [];
            _this6.isDelete = true;
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
          this.getAllVoucher();
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(event) {
          var list = []; // tslint:disable-next-line: radix

          switch (parseInt(event)) {
            case -1:
              this.listVoucher = _toConsumableArray(this.listFilterResult);
              break;

            case 1:
              list = _toConsumableArray(this.listFilterResult);
              this.listVoucher = list.filter(function (item) {
                return item.status === true;
              });
              break;

            case 0:
              list = _toConsumableArray(this.listFilterResult);
              this.listVoucher = list.filter(function (item) {
                return item.status === false;
              });
              break;

            default:
              break;
          }
        }
      }]);

      return VoucherComponent;
    }();

    VoucherComponent.ctorParameters = function () {
      return [{
        type: _service_voucher_voucher_service__WEBPACK_IMPORTED_MODULE_5__["VoucherService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_voucher_item_voucher_component__WEBPACK_IMPORTED_MODULE_4__["ItemVoucherComponent"])], VoucherComponent.prototype, "view", void 0);
    VoucherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-voucher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./voucher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/voucher/voucher/voucher.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./voucher.component.scss */
      "./src/app/voucher/voucher/voucher.component.scss"))["default"]]
    })], VoucherComponent);
    /***/
  }
}]);
//# sourceMappingURL=voucher-voucher-module-es5.js.map