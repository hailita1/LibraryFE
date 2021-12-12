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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administrator-topic-topic-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/item-topic/item-topic.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/item-topic/item-topic.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdministratorTopicItemTopicItemTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #content let-modal>\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">{{ title }}</h4>\r\n    <button\r\n      type=\"button\"\r\n      class=\"close\"\r\n      aria-label=\"Close\"\r\n      (click)=\"modal.dismiss('Cross click')\"\r\n    >\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"save()\">\r\n      <div class=\"form-group\">\r\n        <label>Tên đề tài</label>\r\n        <input\r\n          type=\"text\"\r\n          name=\"\"\r\n          class=\"form-control\"\r\n          formControlName=\"name\"\r\n          id=\"name\"\r\n        />\r\n        <div *ngIf=\"submitted && formGroup.controls['name'].errors?.required\">\r\n          <div\r\n            *ngIf=\"formGroup.controls['name'].errors?.required\"\r\n            style=\"color: red\"\r\n          >\r\n            * Tên đề tài không được để trống\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" style=\"display:inline\">\r\n        <label for=\"status\">Trạng thái: </label>\r\n        <input type=\"checkbox\" name=\"status\" formControlName=\"status\" id=\"status\"/>\r\n        <label class=\"status\"\r\n               style=\"background-color: green; color: #fff;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"formGroup.controls.status.value\">Hoạt động</label>\r\n        <label class=\"status\"\r\n               style=\"background-color: red;color:#fff; ;text-align: center; border-radius: 2px;vertical-align: middle; margin-left: 10px\"\r\n               for=\"status\" *ngIf=\"!formGroup.controls.status.value\">Không hoạt động</label>\r\n      </div>\r\n      <div class=\"form-group\" align=\"center\">\r\n        <button\r\n          [hidden]=\"checkButton\"\r\n          type=\"submit\"\r\n          class=\"btn btn-success\"\r\n          style=\"width: 100px\"\r\n          *ngIf=\"isEdit || isAdd\"\r\n        >\r\n          Lưu\r\n        </button>\r\n        <button\r\n          class=\"btn btn-danger\"\r\n          style=\"width: 100px; margin-left: 20px\"\r\n          (click)=\"modal.dismiss('Cross click')\"\r\n        >\r\n          Thoát\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/list-topic/list-topic.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/list-topic/list-topic.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdministratorTopicListTopicListTopicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row mb-2\">\r\n      <div class=\"col-sm-6\">\r\n        <h1>Danh sách đề tài</h1>\r\n      </div>\r\n      <div class=\"col-sm-6\">\r\n        <ol class=\"breadcrumb float-sm-right\">\r\n          <li class=\"breadcrumb-item\"><a routerLink=\"/\">Trang chủ</a></li>\r\n          <li class=\"breadcrumb-item active\">Danh sách đề tài</li>\r\n        </ol>\r\n      </div>\r\n    </div>\r\n  </div><!-- /.container-fluid -->\r\n</section>\r\n\r\n<section class=\"content\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h3 class=\"card-title\"></h3>\r\n      <label>Lọc theo trạng thái: </label>\r\n      <select (change)=\"changeStatus($event.target.value)\" class=\"custom-select\"\r\n              style=\"margin-right: 10px; width: 200px\">\r\n        <option [selected]=\"isSelected\" disabled>--- Chọn trạng thái ---</option>\r\n        <option value=\"-1\">Tất cả</option>\r\n        <option value=\"1\">Hoạt động</option>\r\n        <option value=\"0\">Không hoạt động</option>\r\n      </select>\r\n      <button (click)=\"initModal({}, 'add')\" *ngIf=\"hasRoleAdmin\" class=\"btn btn-success\" style=\"width: 100px\">\r\n        Tạo mới\r\n      </button>\r\n      <button [hidden]=\"isDelete\" *ngIf=\"hasRoleAdmin\"\r\n              class=\"btn btn-danger\" style=\"margin-left: 15px; width: 100px\" data-toggle=\"modal\"\r\n              data-target=\"#modal-delete-list\">\r\n        Xóa\r\n      </button>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-bordered\" id=\"table-topic\">\r\n        <thead>\r\n        <tr>\r\n          <th scope=\"col\" style=\"text-align: center;width: 10px\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              (change)=\"checkAllCheckBox($event)\"\r\n            />\r\n          </th>\r\n          <th style=\"text-align: center;width: 10px\">#</th>\r\n          <th style=\"text-align: center\">Tên đề tài</th>\r\n          <!-- <th style=\"text-align: center\">Trạng thái</th> -->\r\n          <th style=\"width: 200px; text-align: center\" *ngIf=\"hasRoleAdmin\">Thao tác</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let category of listCategory; index as i\">\r\n          <td style=\"text-align: center\" *ngIf=\"hasRoleAdmin\">\r\n            <input\r\n              type=\"checkbox\"\r\n              [(ngModel)]=\"listCategory[i].checked\"\r\n              (ngModelChange)=\"changeModel()\"\r\n              value=\"{{ category.id }}\"\r\n            />\r\n          </td>\r\n          <td style=\"text-align: center\">{{i + 1}}</td>\r\n          <td style=\"text-align: center\">\r\n            <p>{{category.name}}</p>\r\n          </td>\r\n          <!-- <td style=\"text-align: center\">\r\n            <label class=\"status\"\r\n                   style=\"background-color: green; color: #fff;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"category.status === true\">Hoạt động</label>\r\n            <label class=\"status\"\r\n                   style=\"background-color: red;color:#fff; ;text-align: center;vertical-align: middle;  padding-left: 10px;\r\n  padding-right: 10px;\r\n  border-radius: 5px;\"\r\n                   *ngIf=\"category.status === false\">Không hoạt động</label>\r\n          </td> -->\r\n          <td>\r\n            <div class=\"row\">\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(category, 'edit')\" class=\"btn btn-block btn-warning\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-edit\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button (click)=\"initModal(category, 'show')\" class=\"btn btn-block btn-primary\"\r\n                        style=\"color: white\">\r\n                  <i class=\"fas fa-info\"></i>\r\n                </button>\r\n              </div>\r\n              <div class=\"col-4\" style=\"margin-left: auto; margin-right: auto\">\r\n                <button type=\"button\" class=\"btn btn-block btn-danger\" style=\"color: white\" data-toggle=\"modal\"\r\n                        data-target=\"#modal-delete\" (click)=\"getCategoryId(category.id)\">\r\n                  <i class=\"fas fa-trash\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa đề tài</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa đề tài này</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n      <!-- /.modal-content -->\r\n    </div>\r\n    <!-- /.modal-dialog -->\r\n  </div>\r\n  <div class=\"modal fade\" id=\"modal-delete-list\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Xóa danh sách đề tài</h4>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Bạn có chắc muốn xóa danh sách đề tài này ?</p>\r\n        </div>\r\n        <div class=\"modal-footer justify-content-between\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Đóng</button>\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteListCategory()\">Xóa</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n<app-item-topic (eventEmit)=\"getAllCategory()\"></app-item-topic>\r\n";
    /***/
  },

  /***/
  "./src/app/administrator/topic/item-topic/item-topic.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/administrator/topic/item-topic/item-topic.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdministratorTopicItemTopicItemTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaXN0cmF0b3IvdG9waWMvaXRlbS10b3BpYy9pdGVtLXRvcGljLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/administrator/topic/item-topic/item-topic.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/administrator/topic/item-topic/item-topic.component.ts ***!
    \************************************************************************/

  /*! exports provided: ItemTopicComponent */

  /***/
  function srcAppAdministratorTopicItemTopicItemTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ItemTopicComponent", function () {
      return ItemTopicComponent;
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


    var src_app_service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/topic/topic.service */
    "./src/app/service/topic/topic.service.ts");

    var ItemTopicComponent = /*#__PURE__*/function () {
      function ItemTopicComponent(modalService, fb, topicService) {
        _classCallCheck(this, ItemTopicComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.topicService = topicService;
        this.eventEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkButton = false;
        this.isAdd = false;
        this.isEdit = false;
        this.isInfo = false;
        this.title = '';
        this.submitted = false;
        this.arrCheck = [];
        this.formName = 'đề tài';
      }

      _createClass(ItemTopicComponent, [{
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
          this.arrCheck = this.listtopics;
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
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              status: [{
                value: false,
                disabled: this.isInfo
              }]
            });
          } else {
            this.formGroup = this.fb.group({
              name: [{
                value: this.model.name,
                disabled: this.isInfo
              }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              status: [{
                value: this.model.status,
                disabled: this.isInfo
              }]
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

          var topic;
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
            topic = {
              name: this.formGroup.get('name').value,
              status: this.formGroup.get('status').value,
              id: this.model.id
            };
          } else {
            topic = {
              name: this.formGroup.get('name').value,
              status: this.formGroup.get('status').value
            };
          }

          if (this.isAdd) {
            this.topicService.createTopic(topic).subscribe(function (res) {
              _this2.closeModalReloadData(); // tslint:disable-next-line:only-arrow-functions


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
            this.topicService.updateTopic(topic.id, topic).subscribe(function (res) {
              _this2.closeModalReloadData(); // tslint:disable-next-line:only-arrow-functions


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

      return ItemTopicComponent;
    }();

    ItemTopicComponent.ctorParameters = function () {
      return [{
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', {
      "static": false
    })], ItemTopicComponent.prototype, "childModal", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ItemTopicComponent.prototype, "listtopics", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ItemTopicComponent.prototype, "eventEmit", void 0);
    ItemTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-item-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./item-topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/item-topic/item-topic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./item-topic.component.scss */
      "./src/app/administrator/topic/item-topic/item-topic.component.scss"))["default"]]
    })], ItemTopicComponent);
    /***/
  },

  /***/
  "./src/app/administrator/topic/list-topic/list-topic.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/administrator/topic/list-topic/list-topic.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAdministratorTopicListTopicListTopicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n\n.col-4 {\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5pc3RyYXRvci90b3BpYy9saXN0LXRvcGljL0M6XFxVc2Vyc1xcVlVfTUlOSF9QQ1xcRG93bmxvYWRzXFxEb0FuX1Bob25lXFxsaWJyYXJ5RkUvc3JjXFxhcHBcXGFkbWluaXN0cmF0b3JcXHRvcGljXFxsaXN0LXRvcGljXFxsaXN0LXRvcGljLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hZG1pbmlzdHJhdG9yL3RvcGljL2xpc3QtdG9waWMvbGlzdC10b3BpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvYWRtaW5pc3RyYXRvci90b3BpYy9saXN0LXRvcGljL2xpc3QtdG9waWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLmNvbC00e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkLCB0aCB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5jb2wtNCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/administrator/topic/list-topic/list-topic.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/administrator/topic/list-topic/list-topic.component.ts ***!
    \************************************************************************/

  /*! exports provided: ListTopicComponent */

  /***/
  function srcAppAdministratorTopicListTopicListTopicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListTopicComponent", function () {
      return ListTopicComponent;
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


    var src_app_service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/service/auth/authentication.service */
    "./src/app/service/auth/authentication.service.ts");
    /* harmony import */


    var src_app_service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/topic/topic.service */
    "./src/app/service/topic/topic.service.ts");
    /* harmony import */


    var _item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../item-topic/item-topic.component */
    "./src/app/administrator/topic/item-topic/item-topic.component.ts");
    /** Constants used to fill up our data base. */


    var FRUITS = ['blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'];
    var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

    var ListTopicComponent = /*#__PURE__*/function () {
      function ListTopicComponent(categoryService, modalService, authenticationService) {
        var _this3 = this;

        _classCallCheck(this, ListTopicComponent);

        this.categoryService = categoryService;
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

      _createClass(ListTopicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllCategory();
        }
      }, {
        key: "getCategoryId",
        value: function getCategoryId(id) {
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
          this.listCategory.forEach(function (x) {
            return x.checked = ev.target.checked;
          });
          this.changeModel();
        }
      }, {
        key: "changeModel",
        value: function changeModel() {
          var selectedCategory = _toConsumableArray(this.listCategory).filter(function (category) {
            return category.checked;
          }).map(function (p) {
            return p.id;
          });

          if (selectedCategory.length > 0) {
            this.isDelete = false;
          } else {
            this.isDelete = true;
          }
        }
      }, {
        key: "deleteCategory",
        value: function deleteCategory() {
          var _this4 = this;

          this.categoryService.deleteTopic(this.id).subscribe(function () {
            _this4.categoryService.getAllTopic().subscribe(function (listCategory) {
              _this4.listCategory = listCategory;
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
        key: "getAllCategory",
        value: function getAllCategory() {
          var _this5 = this;

          this.categoryService.getAllTopic().subscribe(function (listCategory) {
            _this5.listCategory = listCategory;
            _this5.listFilterResult = _this5.listCategory; // tslint:disable-next-line:only-arrow-functions

            $(function () {
              $('#table-topic').DataTable({
                paging: true,
                lengthChange: true,
                retrieve: true,
                searching: true,
                ordering: false,
                info: false,
                autoWidth: false
              });
            });
          });
        }
      }, {
        key: "deleteListCategory",
        value: function deleteListCategory() {
          var _this6 = this;

          // tslint:disable-next-line:prefer-for-of
          for (var i = 0; i < this.listCategory.length; i++) {
            if (this.listCategory[i].checked === true) {
              this.listDelete.push(this.listCategory[i].id);
            }
          }

          this.categoryService.deleteListTopic(this.listDelete).subscribe(function (res) {
            _this6.getAllCategory(); // tslint:disable-next-line:only-arrow-functions


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
            _this6.listDelete = [];
            _this6.isDelete = true;
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
          this.getAllCategory();
        }
      }, {
        key: "changeStatus",
        value: function changeStatus(event) {
          var list = []; // tslint:disable-next-line: radix

          switch (parseInt(event)) {
            case -1:
              this.listCategory = _toConsumableArray(this.listFilterResult);
              break;

            case 1:
              list = _toConsumableArray(this.listFilterResult);
              this.listCategory = list.filter(function (item) {
                return item.status === true;
              });
              break;

            case 0:
              list = _toConsumableArray(this.listFilterResult);
              this.listCategory = list.filter(function (item) {
                return item.status === false;
              });
              break;

            default:
              break;
          }
        }
      }]);

      return ListTopicComponent;
    }();

    ListTopicComponent.ctorParameters = function () {
      return [{
        type: src_app_service_topic_topic_service__WEBPACK_IMPORTED_MODULE_4__["TopicService"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
      }, {
        type: src_app_service_auth_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_5__["ItemTopicComponent"], {
      "static": false
    })], ListTopicComponent.prototype, "view", void 0);
    ListTopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-topic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list-topic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/administrator/topic/list-topic/list-topic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list-topic.component.scss */
      "./src/app/administrator/topic/list-topic/list-topic.component.scss"))["default"]]
    })], ListTopicComponent);
    /***/
  },

  /***/
  "./src/app/administrator/topic/topic-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/administrator/topic/topic-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: TopicRoutingModule */

  /***/
  function srcAppAdministratorTopicTopicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicRoutingModule", function () {
      return TopicRoutingModule;
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


    var _list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-topic/list-topic.component */
    "./src/app/administrator/topic/list-topic/list-topic.component.ts");

    var routes = [{
      path: '',
      component: _list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_4__["ListTopicComponent"],
      canActivate: [_helper_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var TopicRoutingModule = function TopicRoutingModule() {
      _classCallCheck(this, TopicRoutingModule);
    };

    TopicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TopicRoutingModule);
    /***/
  },

  /***/
  "./src/app/administrator/topic/topic.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/administrator/topic/topic.module.ts ***!
    \*****************************************************/

  /*! exports provided: TopicModule */

  /***/
  function srcAppAdministratorTopicTopicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopicModule", function () {
      return TopicModule;
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


    var _topic_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./topic-routing.module */
    "./src/app/administrator/topic/topic-routing.module.ts");
    /* harmony import */


    var _list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list-topic/list-topic.component */
    "./src/app/administrator/topic/list-topic/list-topic.component.ts");
    /* harmony import */


    var _item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./item-topic/item-topic.component */
    "./src/app/administrator/topic/item-topic/item-topic.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var TopicModule = function TopicModule() {
      _classCallCheck(this, TopicModule);
    };

    TopicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_topic_list_topic_component__WEBPACK_IMPORTED_MODULE_4__["ListTopicComponent"], _item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_5__["ItemTopicComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _topic_routing_module__WEBPACK_IMPORTED_MODULE_3__["TopicRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"]],
      entryComponents: [_item_topic_item_topic_component__WEBPACK_IMPORTED_MODULE_5__["ItemTopicComponent"]]
    })], TopicModule);
    /***/
  }
}]);
//# sourceMappingURL=administrator-topic-topic-module-es5.js.map