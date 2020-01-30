(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Success.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Success.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      pack: [],
      order: []
    };
  },
  methods: {
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
  created: function created() {
    this.pack = JSON.parse(localStorage.getItem('pack'));
    this.order = JSON.parse(localStorage.getItem('order'));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Success.vue?vue&type=template&id=e836a030&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Success.vue?vue&type=template&id=e836a030& ***!
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
  return _c(
    "div",
    { staticClass: "container mt-5", attrs: { id: "package-order" } },
    [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body p-4" }, [
          _c("h4", { staticClass: "mb-4" }, [_vm._v("You have selected:")]),
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
                    _vm._s(_vm.pack.newbie_note ? _vm.pack.newbie_note : "")
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2" }, [
              _c("div", { staticClass: "text-right" }, [
                _c("strong", { staticStyle: { "font-size": "18px" } }, [
                  _vm._v("$" + _vm._s(_vm.formatNumber(_vm.pack.pack_price)))
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
                  _vm._s(_vm.formatNumber(_vm.order.subtotal)) +
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
                  _vm._s(_vm.formatNumber(_vm.order.gst)) +
                  "\n\t\t\t\t"
              )
            ])
          ]),
          _vm._v(" "),
          _vm.order.discount > 0
            ? _c("div", { staticClass: "row" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("div", { staticClass: "col-auto" }, [
                  _c("strong", [
                    _vm._v("- $" + _vm._s(_vm.formatNumber(_vm.order.discount)))
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
                  _vm._s(_vm.formatNumber(_vm.order.grand_total)) +
                  "\n\t\t\t\t"
              )
            ])
          ])
        ])
      ])
    ]
  )
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Success.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Success.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Success.vue?vue&type=template&id=e836a030& */ "./resources/js/components/Success.vue?vue&type=template&id=e836a030&");
/* harmony import */ var _Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Success.vue?vue&type=script&lang=js& */ "./resources/js/components/Success.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Success.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Success.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Success.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Success.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Success.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Success.vue?vue&type=template&id=e836a030&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/Success.vue?vue&type=template&id=e836a030& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Success.vue?vue&type=template&id=e836a030& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Success.vue?vue&type=template&id=e836a030&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Success_vue_vue_type_template_id_e836a030___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);