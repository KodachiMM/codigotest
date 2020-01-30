(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PackageOrder.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PackageOrder.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var GST = 7 / 100;
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pack_id: this.$route.params.id,
      pack: [],
      promoCode: null,
      promoSuccess: false,
      promoError: false,
      promoId: null,
      taxAmt: 0,
      discountAmt: 0,
      grandTotal: 0
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(['isLoaded', 'getPackById'])),
  methods: {
    getPackage: function getPackage() {
      this.pack = this.getPackById(this.pack_id);
      this.taxAmt = this.pack.pack_price * GST;
      this.grandTotal = this.pack.pack_price + this.taxAmt;
    },
    submitPromoCode: function submitPromoCode() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitPromoCode$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(this.promoCode == null || this.promoCode == '')) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", false);

            case 2:
              _context.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('/api/apply-promo', {
                promo_code: this.promoCode
              }).then(function (_ref) {
                var data = _ref.data;

                if (data.status == 'success') {
                  _this.promoError = false;
                  _this.promoSuccess = true;
                  _this.promoId = data.data.id;
                  _this.discountAmt = _this.pack.pack_price * data.data.discount / 100;
                  _this.grandTotal = _this.pack.pack_price + _this.taxAmt - _this.discountAmt;
                }
              })["catch"](function (error) {
                if (error.response.status == 406) {
                  _this.promoError = true;
                  _this.promoSuccess = false;
                  _this.promoId = null;
                  _this.discountAmt = 0;
                  _this.grandTotal = _this.taxAmt;
                }
              }));

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    purchase: function purchase() {
      var _this2 = this;

      var param;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function purchase$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              param = {
                pack_id: this.pack.pack_id,
                promo_id: this.promoId,
                subtotal: this.formatNumber(this.pack.pack_price),
                gst: this.formatNumber(this.taxAmt),
                discount: this.formatNumber(this.discountAmt),
                grand_total: this.formatNumber(this.grandTotal)
              };
              _context2.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('/api/orders', param).then(function (_ref2) {
                var data = _ref2.data;
                localStorage.setItem('pack', JSON.stringify(_this2.pack));
                localStorage.setItem('order', JSON.stringify(data.data));

                _this2.$router.push("/success");
              })["catch"](function (error) {
                console.log(error);
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    packColor: function packColor(pack_type) {
      if (pack_type == 'shareable') {
        return 'credit share-pack';
      } else if (pack_type == 'unlimited') {
        return 'credit unlimited-pack';
      }

      return 'credit';
    },
    formatNumber: function formatNumber(number) {
      if (number != null) {
        return number.toLocaleString(undefined, {
          minimumFractionDigits: 2
        });
      }
    }
  },
  mounted: function mounted() {
    this.getPackage();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isLoaded
    ? _c(
        "div",
        { staticClass: "container mt-5", attrs: { id: "package-order" } },
        [
          _c("div", { staticClass: "card" }, [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body p-4" },
              [
                _c("h4", { staticClass: "mb-4" }, [
                  _vm._v("You have selected:")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-1" }, [
                    _c(
                      "div",
                      {
                        staticClass: "float-left",
                        class: _vm.packColor(_vm.pack.pack_type)
                      },
                      [
                        _vm.pack.pack_type == "unlimited"
                          ? _c("i", { staticClass: "fas fa-infinity" })
                          : _c("span", [_vm._v(_vm._s(_vm.pack.total_credit))])
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-9" }, [
                    _c("div", [
                      _c("span", { staticClass: "class-color" }, [
                        _vm._v(_vm._s(_vm.pack.pack_name))
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "class-color-small" }, [
                        _vm._v(
                          _vm._s(
                            _vm.pack.newbie_note ? _vm.pack.newbie_note : ""
                          )
                        )
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-md-2" }, [
                    _c("div", { staticClass: "text-right" }, [
                      _c("strong", { staticStyle: { "font-size": "18px" } }, [
                        _vm._v(
                          "$" + _vm._s(_vm.formatNumber(_vm.pack.pack_price))
                        )
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _vm.pack.pack_type == "unlimited"
                        ? _c("small", { staticClass: "text-muted" }, [
                            _vm._v("per month")
                          ])
                        : _vm._e()
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-5" }, [
                    _c("div", { staticClass: "input-group mt-3" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.promoCode,
                            expression: "promoCode"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "Promo Code" },
                        domProps: { value: _vm.promoCode },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.promoCode = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "input-group-append" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-outline-info",
                            attrs: { type: "button" },
                            on: { click: _vm.submitPromoCode }
                          },
                          [_vm._v("Apply")]
                        )
                      ]),
                      _vm._v(" "),
                      _vm.promoSuccess
                        ? _c("i", {
                            staticClass:
                              "fa fa-check-circle text-success success-icon float-right"
                          })
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _vm.promoError
                      ? _c("span", { staticClass: "text-danger" }, [
                          _vm._v("Wrong Promo Code")
                        ])
                      : _vm._e()
                  ])
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "my-5" }),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _vm._v("\n\t\t\t\t\tSubtotal\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" }, [
                    _vm._v(
                      "\n\t\t\t\t\t$" +
                        _vm._s(_vm.formatNumber(_vm.pack.pack_price)) +
                        "\n\t\t\t\t"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col" }, [
                    _vm._v("\n\t\t\t\t\tGST\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" }, [
                    _vm._v(
                      "\n\t\t\t\t\t$" +
                        _vm._s(_vm.formatNumber(_vm.taxAmt)) +
                        "\n\t\t\t\t"
                    )
                  ])
                ]),
                _vm._v(" "),
                _vm.promoSuccess
                  ? _c("div", { staticClass: "row" }, [
                      _vm._m(1),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-auto" }, [
                        _c("strong", [
                          _vm._v(
                            "- $" + _vm._s(_vm.formatNumber(_vm.discountAmt))
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c("div", { staticClass: "row grand-total" }, [
                  _c("div", { staticClass: "col" }, [
                    _vm._v("\n\t\t\t\t\tGrand Total\n\t\t\t\t")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-auto" }, [
                    _vm._v(
                      "\n\t\t\t\t\t$" +
                        _vm._s(_vm.formatNumber(_vm.grandTotal)) +
                        "\n\t\t\t\t"
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("hr", { staticClass: "my-5" }),
                _vm._v(" "),
                _vm._m(2),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "text-info fas fa-arrow-left mt-3",
                    attrs: { to: { name: "package" }, title: "Back" }
                  },
                  [_c("span", { staticClass: "text-info" }, [_vm._v(" Back")])]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info float-right",
                    on: { click: _vm.purchase }
                  },
                  [_vm._v("Pay Now")]
                )
              ],
              1
            )
          ])
        ]
      )
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", [_vm._v("Class Pack Purchase Review")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("strong", [_vm._v("Discount")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [
      _vm._v("Please read all "),
      _c("span", { staticClass: "grand-total" }, [
        _vm._v("Terms & Conditions")
      ]),
      _vm._v(" before purchasing your YM Class or Class Pack.")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PackageOrder.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/PackageOrder.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PackageOrder.vue?vue&type=template&id=789e02da& */ "./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da&");
/* harmony import */ var _PackageOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PackageOrder.vue?vue&type=script&lang=js& */ "./resources/js/components/PackageOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PackageOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PackageOrder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PackageOrder.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/PackageOrder.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PackageOrder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PackageOrder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageOrder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PackageOrder.vue?vue&type=template&id=789e02da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PackageOrder.vue?vue&type=template&id=789e02da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PackageOrder_vue_vue_type_template_id_789e02da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);