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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrator-reader-reader-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/item-reader/item-reader.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/item-reader/item-reader.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdministratorReaderItemReaderItemReaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên thể loại</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên thể loại không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-6\">\r\n          <label>Đề tài</label>\r\n          <br>\r\n          <select formControlName=\"topicId\" class=\"custom-select\" style=\"margin-left: 0px\">\r\n            <option *ngFor=\"let item of listTopic\" [value]=\"item.id\">\r\n              {{item.name}}\r\n            </option>\r\n          </select>\r\n          <div *ngIf=\"submitted && formGroup.controls['topicId'].errors?.required\">\r\n            <div\r\n              *ngIf=\"formGroup.controls['topicId'].errors?.required\"\r\n              style=\"color: red\"\r\n            >\r\n              * Topic không được để trống\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group col-6\">\r\n          <label for=\"exampleFormControlFile1\">Ảnh</label>\r\n          <input type=\"file\" class=\"form-control-file\" (change)=\"upload($event.target.files)\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <img width=\"100%\" height=\"200px\" [src]=\"isAdd?apiFileUrl+imageName:apiFileUrl+model.image\" alt=\"Image\">\r\n      </div>\r\n      <div class=\"form-group\" style=\"display:inline\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không hoạt động</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/list-reader/list-reader.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/list-reader/list-reader.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdministratorReaderListReaderListReaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách đọc giả</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách đọc giả</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Không hoạt động</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-author\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"width: 10px\">#</th>\r\n          <th style=\"text-align: center\">đọc giả</th>\r\n          <th style=\"text-align: center\">Ảnh</th>\r\n          <th style=\"text-align: center\">Trạng thái</th>\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let reader of listReader; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listReader[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ reader.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{reader.fullName}}</p>\r\n          </td>\r\n          <td>\r\n            <div class=\"form-group\">\r\n              <img width=\"100%\" height=\"200px\" [src]=\"apiFileUrl+reader.avt\" alt=\"Image\">\r\n            </div>\r\n          </td>\r\n          <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"reader.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"reader.status === false\">Không hoạt động</label>\r\n          </td>\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(reader, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(reader, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getReaderId(reader.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa đọc giả</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa đọc giả này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteReader()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách đọc giả</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách đọc giả này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListReader()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-item-reader (eventEmit)=\"getAllReader()\"></app-item-reader>\r\n";
    /***/
  },

  /***/
  "./src/app/administrator/reader/item-reader/item-reader.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/administrator/reader/item-reader/item-reader.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdministratorReaderItemReaderItemReaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvcmVhZGVyL2l0ZW0tcmVhZGVyL2l0ZW0tcmVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/administrator/reader/item-reader/item-reader.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/administrator/reader/item-reader/item-reader.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ItemReaderComponent */

  /***/
  function srcAppAdministratorReaderItemReaderItemReaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemReaderComponent", function () {
      return ItemReaderComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_upload_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../service/upload/upload.service */
    "./src/app/service/upload/upload.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../service/user/user.service */
    "./src/app/service/user/user.service.ts");

    var ItemReaderComponent = /*#__PURE__*/function () {
      // tslint:disable-next-line:max-line-length
      function ItemReaderComponent(modalService, fb, userService, uploadService) {
        _classCallCheck(this, ItemReaderComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.userService = userService;
        this.uploadService = uploadService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.imageName = '';
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.apiFileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUploadUrl;
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'độc giả';
        this.listTopic = [];
      }

      _createClass(ItemReaderComponent, [{
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
              this.title = "C\u1EADp nh\u1EADt th\xF4ng tin ".concat(this.formName);
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
          this.arrCheck = this.listReaders;
          this.open(this.childModal);
          this.type = type;
          this.model = model;
          this.submitted = false;
          this.updateFormType(type);

          if (model.id === null || model.id === undefined) {
            this.formGroup = this.fb.group({
              name: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              status: [{
                value: false,
                disabled: this.isInfo
              }],
              topicId: [{
                value: null,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          } else {
            this.formGroup = this.fb.group({
              name: [{
                value: this.model.name,
                disabled: true
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              status: [{
                value: this.model.status,
                disabled: this.isInfo
              }],
              topicId: [{
                value: this.model.topic.id,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
            });
          }
        }
      }, {
        key: "upload",
        value: function upload(files) {
          // pick from one of the 4 styles of file uploads below
          this.basicUpload(files);
        }
      }, {
        key: "basicUpload",
        value: function basicUpload(files) {
          var _this = this;

          var formData = new FormData();
          Array.from(files).forEach(function (f) {
            return formData.append('file', f);
          });
          this.uploadService.uploadBasic(formData).subscribe(function (event) {
            _this.imageName = event.message;
          });
        } // tslint:disable-next-line:typedef

      }, {
        key: "open",
        value: function open(content) {
          var _this2 = this;

          this.modalReference = this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title',
            centered: true,
            size: 'sl'
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

          var reader;
          this.submitted = true;

          if (this.formGroup.invalid) {
            // tslint:disable-next-line:only-arrow-functions
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
            reader = {
              name: this.formGroup.get('name').value,
              status: this.formGroup.get('status').value,
              topic: this.listTopic.filter(function (x) {
                return x.id == _this3.formGroup.get('topicId').value;
              })[0],
              id: this.model.id,
              image: this.imageName
            };
          } else {
            reader = {
              name: this.formGroup.get('name').value,
              status: this.formGroup.get('status').value,
              topic: this.listTopic.filter(function (x) {
                return x.id == _this3.formGroup.get('topicId').value;
              })[0],
              image: this.imageName
            };
          }

          if (this.isAdd) {
            this.userService.register(reader).subscribe(function (res) {
              _this3.closeModalReloadData(); // tslint:disable-next-line:only-arrow-functions


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

              _this3.modalReference.dismiss();
            }, function (err) {
              // tslint:disable-next-line:only-arrow-functions
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
            this.userService.updateUser(reader).subscribe(function (res) {
              _this3.closeModalReloadData(); // tslint:disable-next-line:only-arrow-functions


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
            }, function (err) {
              // tslint:disable-next-line:only-arrow-functions
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
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
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

      return ItemReaderComponent;
    }();

    ItemReaderComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
      }, {
        type: _service_upload_upload_service__WEBPACK_IMPORTED_MODULE_4__["UploadService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], ItemReaderComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemReaderComponent.prototype, "listReaders", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItemReaderComponent.prototype, "eventEmit", void 0);
    ItemReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-reader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-reader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/item-reader/item-reader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-reader.component.scss */
      "./src/app/administrator/reader/item-reader/item-reader.component.scss"))["default"]]
    })], ItemReaderComponent);
    /***/
  },

  /***/
  "./src/app/administrator/reader/list-reader/list-reader.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/administrator/reader/list-reader/list-reader.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdministratorReaderListReaderListReaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvcmVhZGVyL2xpc3QtcmVhZGVyL2xpc3QtcmVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/administrator/reader/list-reader/list-reader.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/administrator/reader/list-reader/list-reader.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ListReaderComponent */

  /***/
  function srcAppAdministratorReaderListReaderListReaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListReaderComponent", function () {
      return ListReaderComponent;
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
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../service/user/user.service */
    "./src/app/service/user/user.service.ts");
    /* harmony import */


    var _item_reader_item_reader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../item-reader/item-reader.component */
    "./src/app/administrator/reader/item-reader/item-reader.component.ts");

    var ListReaderComponent = /*#__PURE__*/function () {
      function ListReaderComponent(userService, modalService, authenticationService) {
        var _this4 = this;

        _classCallCheck(this, ListReaderComponent);

        this.userService = userService;
        this.modalService = modalService;
        this.authenticationService = authenticationService;
        this.hasRoleUser = false;
        this.hasRoleAdmin = false;
        this.isDelete = true;
        this.listFilterResult = [];
        this.listDelete = [];
        this.isSelected = true;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        this.apiFileUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUploadUrl;
        this.imageName = '';
        this.authenticationService.currentUser.subscribe(function (value) {
          return _this4.currentUser = value;
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

      _createClass(ListReaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllReader();
        }
      }, {
        key: "getReaderId",
        value: function getReaderId(id) {
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
          this.listReader.forEach(function (x) {
            return x.checked = ev.target.checked;
          });
          this.changeModel();
        }
      }, {
        key: "changeModel",
        value: function changeModel() {
          var selectedReader = _toConsumableArray(this.listReader).filter(function (reader) {
            return reader.checked;
          }).map(function (p) {
            return p.id;
          });

          if (selectedReader.length > 0) {
            this.isDelete = false;
          } else {
            this.isDelete = true;
          }
        }
      }, {
        key: "deleteReader",
        value: function deleteReader() {
          var _this5 = this;

          this.userService.deleteUser(this.id).subscribe(function () {
            _this5.userService.getAllUser().subscribe(function (listReader) {
              _this5.listReader = listReader;
            }); // tslint:disable-next-line:only-arrow-functions


            $(function () {
              $('#modal-delete').modal('hide');
            }); // tslint:disable-next-line:only-arrow-functions

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
            // tslint:disable-next-line:only-arrow-functions
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
        key: "getAllReader",
        value: function getAllReader() {
          var _this6 = this;

          this.userService.getAllUser().subscribe(function (listReader) {
            _this6.listReader = listReader;
            _this6.listFilterResult = _this6.listReader; // tslint:disable-next-line:only-arrow-functions

            $(function () {
              $('#table-reader').DataTable({
                paging: true,
                lengthChange: true,
                retrieve: true,
                searching: true,
                ordering: false,
                info: false,
                autoWidth: true
              });
            });
          });
        }
      }, {
        key: "deleteListReader",
        value: function deleteListReader() {
          var _this7 = this;

          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < this.listReader.length; i++) {
            if (this.listReader[i].checked === true) {
              this.listDelete.push(this.listReader[i].id);
            }
          }

          this.userService.deleteListReader(this.listDelete).subscribe(function (res) {
            _this7.getAllReader(); // tslint:disable-next-line:only-arrow-functions


            $(function () {
              $('#modal-delete-list').modal('hide');
            }); // tslint:disable-next-line:only-arrow-functions

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
            _this7.listDelete = [];
            _this7.isDelete = true;
          }, function (err) {
            // tslint:disable-next-line:only-arrow-functions
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
          this.getAllReader();
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(event) {
          var list = []; // tslint:disable-next-line: radix

          switch (parseInt(event)) {
            case -1:
              this.listReader = _toConsumableArray(this.listFilterResult);
              break;

            case 1:
              list = _toConsumableArray(this.listFilterResult);
              this.listReader = list.filter(function (item) {
                return item.status === true;
              });
              break;

            case 0:
              list = _toConsumableArray(this.listFilterResult);
              this.listReader = list.filter(function (item) {
                return item.status === false;
              });
              break;

            default:
              break;
          }
        }
      }]);

      return ListReaderComponent;
    }();

    ListReaderComponent.ctorParameters = function () {
      return [{
        type: _service_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_reader_item_reader_component__WEBPACK_IMPORTED_MODULE_6__["ItemReaderComponent"])], ListReaderComponent.prototype, "view", void 0);
    ListReaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-reader',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-reader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/reader/list-reader/list-reader.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-reader.component.scss */
      "./src/app/administrator/reader/list-reader/list-reader.component.scss"))["default"]]
    })], ListReaderComponent);
    /***/
  },

  /***/
  "./src/app/administrator/reader/reader-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/administrator/reader/reader-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: ReaderRoutingModule */

  /***/
  function srcAppAdministratorReaderReaderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReaderRoutingModule", function () {
      return ReaderRoutingModule;
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
    /*! ../../helper/auth-guard */
    "./src/app/helper/auth-guard.ts");
    /* harmony import */


    var _list_reader_list_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-reader/list-reader.component */
    "./src/app/administrator/reader/list-reader/list-reader.component.ts");

    var routes = [{
      path: '',
      canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      component: _list_reader_list_reader_component__WEBPACK_IMPORTED_MODULE_4__["ListReaderComponent"]
    }];

    var ReaderRoutingModule = function ReaderRoutingModule() {
      _classCallCheck(this, ReaderRoutingModule);
    };

    ReaderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ReaderRoutingModule);
    /***/
  },

  /***/
  "./src/app/administrator/reader/reader.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/administrator/reader/reader.module.ts ***!
    \*******************************************************/

  /*! exports provided: ReaderModule */

  /***/
  function srcAppAdministratorReaderReaderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReaderModule", function () {
      return ReaderModule;
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


    var _reader_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./reader-routing.module */
    "./src/app/administrator/reader/reader-routing.module.ts");
    /* harmony import */


    var _list_reader_list_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-reader/list-reader.component */
    "./src/app/administrator/reader/list-reader/list-reader.component.ts");
    /* harmony import */


    var _item_reader_item_reader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./item-reader/item-reader.component */
    "./src/app/administrator/reader/item-reader/item-reader.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var ReaderModule = function ReaderModule() {
      _classCallCheck(this, ReaderModule);
    };

    ReaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_reader_list_reader_component__WEBPACK_IMPORTED_MODULE_4__["ListReaderComponent"], _item_reader_item_reader_component__WEBPACK_IMPORTED_MODULE_5__["ItemReaderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _reader_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReaderRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
    })], ReaderModule);
    /***/
  }
}]);
//# sourceMappingURL=administrator-reader-reader-module-es5.js.map