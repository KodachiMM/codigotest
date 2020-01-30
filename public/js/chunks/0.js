(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Package.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Package.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(['pack_list'])),
  methods: {
    packColor: function packColor(pack_type) {
      if (pack_type == 'shareable') {
        return 'credit share-pack';
      } else if (pack_type == 'unlimited') {
        return 'credit unlimited-pack';
      }

      return 'credit';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Package.vue?vue&type=template&id=0daacaab&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Package.vue?vue&type=template&id=0daacaab& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "package-style" } }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container package-list mt-5" }, [
      _c("div", { staticClass: "card-deck mb-3 text-center" }, [
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.pack_list, function(pack) {
            return _c("div", { key: pack.id, staticClass: "col-md-4" }, [
              _c("div", { staticClass: "card mb-4 shadow-sm" }, [
                _c("div", { staticClass: "card-header" }, [
                  pack.tag_name
                    ? _c("div", { staticClass: "ribbon ribbon-top-left" }, [
                        _c("span", [_vm._v(_vm._s(pack.tag_name))])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("h4", { staticClass: "my-0 font-weight-normal" }, [
                    _vm._v(_vm._s(pack.pack_name))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "card-body" },
                  [
                    _c("div", { class: _vm.packColor(pack.pack_type) }, [
                      pack.pack_type == "unlimited"
                        ? _c("i", { staticClass: "fas fa-infinity" })
                        : _c("span", [_vm._v(_vm._s(pack.total_credit))])
                    ]),
                    _vm._v(" "),
                    pack.pack_type != "unlimited"
                      ? _c("ul", { staticClass: "list-unstyled mt-3 mb-4" }, [
                          _c("li", [
                            _vm._v("Take your class at any YM studio!")
                          ]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Choose from 350 weekly classes")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("7 day booking window")])
                        ])
                      : _c("ul", { staticClass: "list-unstyled mt-3 mb-4" }, [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c("li", [_vm._v("Lorem ipsum dolar sit amet")]),
                          _vm._v(" "),
                          _c("li", [_vm._v("Consectetur adipiscing elit")])
                        ]),
                    _vm._v(" "),
                    _c("h1", { staticClass: "card-title pricing-card-title" }, [
                      _vm._v(
                        "\n\t\t\t\t\t\t\t\t$" +
                          _vm._s(pack.pack_price) +
                          "\n\t\t\t\t\t\t\t"
                      )
                    ]),
                    _vm._v(" "),
                    _c("ul", { staticClass: "list-unstyled mt-3 mb-4" }, [
                      _c("li", [
                        _c(
                          "small",
                          {
                            staticClass: "text-muted",
                            class:
                              pack.pack_alias == "single-pack"
                                ? "text-hidden"
                                : ""
                          },
                          [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t\t\t\t$" +
                                _vm._s(
                                  pack.pack_type == "unlimited"
                                    ? pack.pack_price
                                    : pack.estimate_price
                                ) +
                                "\n\t\t\t\t\t\t\t\t\t\t" +
                                _vm._s(
                                  pack.pack_type == "unlimited"
                                    ? "per month"
                                    : "per class!"
                                ) +
                                "\n\t\t\t\t\t\t\t\t\t"
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-lg btn-outline-info",
                        attrs: {
                          to: {
                            name: "packageOrder",
                            params: { id: pack.pack_id }
                          },
                          title: "Buy Now"
                        }
                      },
                      [_vm._v("\n\t\t\t\t\t\t\t\tBuy Now\n\t\t\t\t\t\t\t")]
                    )
                  ],
                  1
                )
              ])
            ])
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center"
      },
      [_c("h1", { staticClass: "display-4" }, [_vm._v("Pricing")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("strong", [_vm._v("Monthly Subscription Fees")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Package.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Package.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Package.vue?vue&type=template&id=0daacaab& */ "./resources/js/components/Package.vue?vue&type=template&id=0daacaab&");
/* harmony import */ var _Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Package.vue?vue&type=script&lang=js& */ "./resources/js/components/Package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Package.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Package.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Package.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Package.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Package.vue?vue&type=template&id=0daacaab&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Package.vue?vue&type=template&id=0daacaab& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Package.vue?vue&type=template&id=0daacaab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Package.vue?vue&type=template&id=0daacaab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Package_vue_vue_type_template_id_0daacaab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);