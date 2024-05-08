"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/main.js?{"page":"pages%2Fcamera%2Fidphoto"} ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_camera_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/camera/idphoto.nvue?mpType=page */ 5);\n\n        \n        \n        \n        \n        _pages_camera_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_camera_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/camera/idphoto'\n        _pages_camera_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_camera_idphoto_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBaUU7QUFDakUsUUFBUSw4RUFBRztBQUNYLFFBQVEsOEVBQUc7QUFDWCxRQUFRLDhFQUFHO0FBQ1gsZ0JBQWdCLDhFQUFHIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgXG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0ICd1bmktcG9seWZpbGwnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9jYW1lcmEvaWRwaG90by5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9jYW1lcmEvaWRwaG90bydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!********************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/main.js?{"type":"appStyle"} ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/GitHub_Project/music-frontend/App.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@VERSION": 2
}

/***/ }),
/* 4 */
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ }),
/* 5 */
/*!******************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?mpType=page ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idphoto.nvue?vue&type=template&id=46178de8&mpType=page */ 6);\n/* harmony import */ var _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idphoto.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"1d09ffcc\",\n  false,\n  _idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/camera/idphoto.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0k7QUFDaEk7QUFDdUU7QUFDTDtBQUNsRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFFQUE2RDtBQUNqSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUVBQTZEO0FBQ3RIOztBQUVBOztBQUVBO0FBQ21LO0FBQ25LLGdCQUFnQiw2S0FBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSw4RkFBTTtBQUNSLEVBQUUsdUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsa0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYxNzhkZTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2lkcGhvdG8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2lkcGhvdG8ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxZDA5ZmZjY1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9jYW1lcmEvaWRwaG90by5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!************************************************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=template&id=46178de8&mpType=page ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=template&id=46178de8&mpType=page */ 7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_template_id_46178de8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 7 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=template&id=46178de8&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        {
          staticClass: ["music-camera"],
          style: { width: _vm.windowWidth, height: _vm.windowHeight },
        },
        [
          _c(
            "view",
            {
              staticClass: ["preview"],
              style: { width: _vm.windowWidth, height: _vm.windowHeight - 80 },
            },
            [
              _c("live-pusher", {
                ref: "livePusher",
                staticClass: ["livePusher"],
                style: { width: _vm.cameraWidth, height: _vm.cameraHeight },
                attrs: {
                  id: "livePusher",
                  mode: "FHD",
                  beauty: "1",
                  whiteness: "0",
                  aspect: _vm.aspect,
                  minBitrate: "1000",
                  audioQuality: "16KHz",
                  devicePosition: "front",
                  autoFocus: true,
                  muted: true,
                  enableCamera: true,
                  enableMic: false,
                  zoom: false,
                },
                on: { statechange: _vm.statechange },
              }),
              _c("cover-view", { staticClass: ["remind"] }, [
                _c(
                  "u-text",
                  {
                    staticClass: ["remind-text"],
                    appendAsTree: true,
                    attrs: { append: "tree" },
                  },
                  [_vm._v(_vm._s(_vm.message))]
                ),
              ]),
              _c(
                "cover-view",
                {
                  staticClass: ["outline-box"],
                  style: {
                    width: _vm.windowWidth,
                    height: _vm.windowHeight - 255,
                  },
                },
                [
                  _c("cover-image", {
                    staticClass: ["outline-img"],
                    attrs: { src: "/static/outline/idphotoskin.png" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          _c(
            "view",
            { staticClass: ["menu"] },
            [
              _c("cover-image", {
                staticClass: ["menu-mask"],
                attrs: { src: "/static/bar.png" },
              }),
              _c("cover-image", {
                staticClass: ["menu-back"],
                attrs: { src: "/static/back.png" },
                on: { click: _vm.back },
              }),
              _c("cover-image", {
                staticClass: ["menu-snapshot"],
                attrs: { src: "/static/shutter.png" },
                on: { click: _vm.snapshot },
              }),
              _c("cover-image", {
                staticClass: ["menu-flip"],
                attrs: { src: "/static/flip.png" },
                on: { click: _vm.flip },
              }),
            ],
            1
          ),
        ]
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 8 */
/*!******************************************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--5-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=script&lang=js&mpType=page */ 9);\n/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtiLENBQWdCLHVkQUFHLEVBQUMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS01LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pZHBob3RvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lkcGhvdG8ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar _this = null;\nvar _default = {\n  data: function data() {\n    return {\n      dotype: 'idphoto',\n      //操作类型\n      message: '',\n      //提示\n      aspect: '2:3',\n      //比例\n      cameraWidth: '',\n      //相机画面宽度\n      cameraHeight: '',\n      //相机画面宽度\n      windowWidth: '',\n      //屏幕可用宽度\n      windowHeight: '',\n      //屏幕可用高度\n      camerastate: false,\n      //相机准备好了\n      livePusher: null,\n      //流视频对象\n      snapshotsrc: null //快照\n    };\n  },\n  onLoad: function onLoad(e) {\n    _this = this;\n    if (e.dotype != undefined) this.dotype = e.dotype;\n    this.initCamera();\n  },\n  onReady: function onReady() {\n    this.livePusher = uni.createLivePusherContext('livePusher', this);\n    this.startPreview(); //开启预览并设置摄像头\n    this.poenCarme();\n  },\n  methods: {\n    //轮询打开\n    poenCarme: function poenCarme() {\n      if (plus.os.name == 'Android') {\n        this.poenCarmeInterval = setInterval(function () {\n          __f__(\"log\", _this.camerastate, \" at pages/camera/idphoto.nvue:84\");\n          if (!_this.camerastate) _this.startPreview();\n        }, 2500);\n      }\n    },\n    //初始化相机\n    initCamera: function initCamera() {\n      uni.getSystemInfo({\n        success: function success(res) {\n          _this.windowWidth = res.windowWidth;\n          _this.windowHeight = res.windowHeight;\n          _this.cameraWidth = res.windowWidth;\n          _this.cameraHeight = res.windowWidth * 1.5;\n        }\n      });\n    },\n    //开始预览\n    startPreview: function startPreview() {\n      this.livePusher.startPreview({\n        success: function success(a) {\n          __f__(\"log\", a, \" at pages/camera/idphoto.nvue:107\");\n        }\n      });\n    },\n    //停止预览\n    stopPreview: function stopPreview() {\n      this.livePusher.stopPreview({\n        success: function success(a) {\n          _this.camerastate = false; //标记相机未启动\n        }\n      });\n    },\n    //状态\n    statechange: function statechange(e) {\n      //状态改变\n      __f__(\"log\", e, \" at pages/camera/idphoto.nvue:123\");\n      if (e.detail.code == 1007) {\n        _this.camerastate = true;\n      } else if (e.detail.code == -1301) {\n        _this.camerastate = false;\n      }\n    },\n    //返回\n    back: function back() {\n      uni.navigateBack();\n    },\n    //抓拍\n    snapshot: function snapshot() {\n      this.livePusher.snapshot({\n        success: function success(e) {\n          _this.snapshotsrc = e.message.tempImagePath;\n          _this.stopPreview();\n          _this.setImage();\n          uni.navigateBack();\n        }\n      });\n    },\n    //反转\n    flip: function flip() {\n      this.livePusher.switchCamera();\n    },\n    //设置\n    setImage: function setImage() {\n      var pages = getCurrentPages();\n      var prevPage = pages[pages.length - 2]; //上一个页面\n\n      //直接调用上一个页面的setImage()方法，把数据存到上一个页面中去\n      prevPage.$vm.setImage({\n        path: _this.snapshotsrc,\n        dotype: this.dotype\n      });\n    }\n  }\n};\nexports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 10)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY2FtZXJhL2lkcGhvdG8ubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwiZG90eXBlIiwibWVzc2FnZSIsImFzcGVjdCIsImNhbWVyYVdpZHRoIiwiY2FtZXJhSGVpZ2h0Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjYW1lcmFzdGF0ZSIsImxpdmVQdXNoZXIiLCJzbmFwc2hvdHNyYyIsIm9uTG9hZCIsIl90aGlzIiwib25SZWFkeSIsIm1ldGhvZHMiLCJwb2VuQ2FybWUiLCJpbml0Q2FtZXJhIiwidW5pIiwic3VjY2VzcyIsInN0YXJ0UHJldmlldyIsInN0b3BQcmV2aWV3Iiwic3RhdGVjaGFuZ2UiLCJiYWNrIiwic25hcHNob3QiLCJmbGlwIiwic2V0SW1hZ2UiLCJwcmV2UGFnZSIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUFBLGVBQ0E7RUFDQUE7SUFDQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztNQUFBO01BQ0FDO01BQUE7TUFDQUM7TUFBQTtNQUNBQztJQUNBO0VBQ0E7RUFDQUM7SUFDQUM7SUFDQTtJQUNBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7RUFDQTtFQUNBQztJQUNBO0lBQ0FDO01BRUE7UUFDQTtVQUNBO1VBQ0E7UUFDQTtNQUNBO0lBRUE7SUFFQTtJQUNBQztNQUNBQztRQUNBQztVQUNBTjtVQUNBQTtVQUNBQTtVQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0lBQ0FPO01BQ0E7UUFDQUQ7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBO0lBQ0FFO01BQ0E7UUFDQUY7VUFDQU47UUFDQTtNQUNBO0lBQ0E7SUFFQTtJQUNBUztNQUNBO01BQ0E7TUFDQTtRQUNBVDtNQUNBO1FBQ0FBO01BQ0E7SUFDQTtJQUVBO0lBQ0FVO01BQ0FMO0lBQ0E7SUFFQTtJQUNBTTtNQUNBO1FBQ0FMO1VBQ0FOO1VBQ0FBO1VBQ0FBO1VBQ0FLO1FBQ0E7TUFDQTtJQUNBO0lBRUE7SUFDQU87TUFDQTtJQUNBO0lBRUE7SUFDQUM7TUFDQTtNQUNBOztNQUVBO01BQ0FDO1FBQUFDO1FBQUExQjtNQUFBO0lBQ0E7RUFDQTtBQUNBO0FBQUEsMkIiLCJmaWxlIjoiOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cIm11c2ljLWNhbWVyYVwiIDpzdHlsZT1cInsgd2lkdGg6IHdpbmRvd1dpZHRoLCBoZWlnaHQ6IHdpbmRvd0hlaWdodCB9XCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInByZXZpZXdcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aW5kb3dXaWR0aCwgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgLSA4MCB9XCI+XHJcblx0XHRcdDxsaXZlLXB1c2hlclxyXG5cdFx0XHRcdGlkPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdFx0cmVmPVwibGl2ZVB1c2hlclwiXHJcblx0XHRcdFx0Y2xhc3M9XCJsaXZlUHVzaGVyXCJcclxuXHRcdFx0XHRtb2RlPVwiRkhEXCJcclxuXHRcdFx0XHRiZWF1dHk9XCIxXCJcclxuXHRcdFx0XHR3aGl0ZW5lc3M9XCIwXCJcclxuXHRcdFx0XHQ6YXNwZWN0PVwiYXNwZWN0XCJcclxuXHRcdFx0XHRtaW4tYml0cmF0ZT1cIjEwMDBcIlxyXG5cdFx0XHRcdGF1ZGlvLXF1YWxpdHk9XCIxNktIelwiXHJcblx0XHRcdFx0ZGV2aWNlLXBvc2l0aW9uPVwiZnJvbnRcIlxyXG5cdFx0XHRcdDphdXRvLWZvY3VzPVwidHJ1ZVwiXHJcblx0XHRcdFx0Om11dGVkPVwidHJ1ZVwiXHJcblx0XHRcdFx0OmVuYWJsZS1jYW1lcmE9XCJ0cnVlXCJcclxuXHRcdFx0XHQ6ZW5hYmxlLW1pYz1cImZhbHNlXCJcclxuXHRcdFx0XHQ6em9vbT1cImZhbHNlXCJcclxuXHRcdFx0XHRAc3RhdGVjaGFuZ2U9XCJzdGF0ZWNoYW5nZVwiXHJcblx0XHRcdFx0OnN0eWxlPVwieyB3aWR0aDogY2FtZXJhV2lkdGgsIGhlaWdodDogY2FtZXJhSGVpZ2h0IH1cIlxyXG5cdFx0XHQ+PC9saXZlLXB1c2hlcj5cclxuXHJcblx0XHRcdDwhLS3mj5DnpLror60tLT5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJyZW1pbmRcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cInJlbWluZC10ZXh0XCIgc3R5bGU9XCJcIj57eyBtZXNzYWdlIH19PC90ZXh0PlxyXG5cdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblxyXG5cdFx0XHQ8IS0t6L6F5Yqp57q/LS0+XHJcblx0XHRcdDxjb3Zlci12aWV3IGNsYXNzPVwib3V0bGluZS1ib3hcIiA6c3R5bGU9XCJ7IHdpZHRoOiB3aW5kb3dXaWR0aCwgaGVpZ2h0OiB3aW5kb3dIZWlnaHQgLSAyNTUgfVwiPlxyXG5cdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm91dGxpbmUtaW1nXCIgc3JjPVwiL3N0YXRpYy9vdXRsaW5lL2lkcGhvdG9za2luLnBuZ1wiIHN0eWxlPVwiXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwibWVudVwiPlxyXG5cdFx0XHQ8IS0t5bqV6YOo6I+c5Y2V5Yy65Z+f6IOM5pmvLS0+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm1lbnUtbWFza1wiIHNyYz1cIi9zdGF0aWMvYmFyLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblxyXG5cdFx0XHQ8IS0t6L+U5Zue6ZSuLS0+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm1lbnUtYmFja1wiIEB0YXA9XCJiYWNrXCIgc3JjPVwiL3N0YXRpYy9iYWNrLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblxyXG5cdFx0XHQ8IS0t5b+r6Zeo6ZSuLS0+XHJcblx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cIm1lbnUtc25hcHNob3RcIiBAdGFwPVwic25hcHNob3RcIiBzcmM9XCIvc3RhdGljL3NodXR0ZXIucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHJcblx0XHRcdDwhLS3lj43ovazplK4tLT5cclxuXHRcdFx0PGNvdmVyLWltYWdlIGNsYXNzPVwibWVudS1mbGlwXCIgQHRhcD1cImZsaXBcIiBzcmM9XCIvc3RhdGljL2ZsaXAucG5nXCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5sZXQgX3RoaXMgPSBudWxsO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRvdHlwZTogJ2lkcGhvdG8nLCAvL+aTjeS9nOexu+Wei1xyXG5cdFx0XHRtZXNzYWdlOiAnJywgLy/mj5DnpLpcclxuXHRcdFx0YXNwZWN0OiAnMjozJywgLy/mr5TkvotcclxuXHRcdFx0Y2FtZXJhV2lkdGg6ICcnLCAvL+ebuOacuueUu+mdouWuveW6plxyXG5cdFx0XHRjYW1lcmFIZWlnaHQ6ICcnLCAvL+ebuOacuueUu+mdouWuveW6plxyXG5cdFx0XHR3aW5kb3dXaWR0aDogJycsIC8v5bGP5bmV5Y+v55So5a695bqmXHJcblx0XHRcdHdpbmRvd0hlaWdodDogJycsIC8v5bGP5bmV5Y+v55So6auY5bqmXHJcblx0XHRcdGNhbWVyYXN0YXRlOiBmYWxzZSwgLy/nm7jmnLrlh4blpIflpb3kuoZcclxuXHRcdFx0bGl2ZVB1c2hlcjogbnVsbCwgLy/mtYHop4bpopHlr7nosaFcclxuXHRcdFx0c25hcHNob3RzcmM6IG51bGwgLy/lv6vnhadcclxuXHRcdH07XHJcblx0fSxcclxuXHRvbkxvYWQoZSkge1xyXG5cdFx0X3RoaXMgPSB0aGlzO1xyXG5cdFx0aWYgKGUuZG90eXBlICE9IHVuZGVmaW5lZCkgdGhpcy5kb3R5cGUgPSBlLmRvdHlwZTtcclxuXHRcdHRoaXMuaW5pdENhbWVyYSgpO1xyXG5cdH0sXHJcblx0b25SZWFkeSgpIHtcclxuXHRcdHRoaXMubGl2ZVB1c2hlciA9IHVuaS5jcmVhdGVMaXZlUHVzaGVyQ29udGV4dCgnbGl2ZVB1c2hlcicsIHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydFByZXZpZXcoKTsgLy/lvIDlkK/pooTop4jlubborr7nva7mkYTlg4/lpLRcclxuXHRcdHRoaXMucG9lbkNhcm1lKCk7XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHQvL+i9ruivouaJk+W8gFxyXG5cdFx0cG9lbkNhcm1lKCkge1xyXG5cdFx0XHQvLyNpZmRlZiBBUFAtUExVU1xyXG5cdFx0XHRpZiAocGx1cy5vcy5uYW1lID09ICdBbmRyb2lkJykge1xyXG5cdFx0XHRcdHRoaXMucG9lbkNhcm1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKF90aGlzLmNhbWVyYXN0YXRlKTtcclxuXHRcdFx0XHRcdGlmICghX3RoaXMuY2FtZXJhc3RhdGUpIF90aGlzLnN0YXJ0UHJldmlldygpO1xyXG5cdFx0XHRcdH0sIDI1MDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vI2VuZGlmXHJcblx0XHR9LFxyXG5cclxuXHRcdC8v5Yid5aeL5YyW55u45py6XHJcblx0XHRpbml0Q2FtZXJhKCkge1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRfdGhpcy53aW5kb3dXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdF90aGlzLndpbmRvd0hlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0XHRfdGhpcy5jYW1lcmFXaWR0aCA9IHJlcy53aW5kb3dXaWR0aDtcclxuXHRcdFx0XHRcdF90aGlzLmNhbWVyYUhlaWdodCA9IHJlcy53aW5kb3dXaWR0aCAqIDEuNTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+W8gOWni+mihOiniFxyXG5cdFx0c3RhcnRQcmV2aWV3KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3RhcnRQcmV2aWV3KHtcclxuXHRcdFx0XHRzdWNjZXNzOiBhID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0Ly/lgZzmraLpooTop4hcclxuXHRcdHN0b3BQcmV2aWV3KCkge1xyXG5cdFx0XHR0aGlzLmxpdmVQdXNoZXIuc3RvcFByZXZpZXcoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGEgPT4ge1xyXG5cdFx0XHRcdFx0X3RoaXMuY2FtZXJhc3RhdGUgPSBmYWxzZTsgLy/moIforrDnm7jmnLrmnKrlkK/liqhcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+eKtuaAgVxyXG5cdFx0c3RhdGVjaGFuZ2UoZSkge1xyXG5cdFx0XHQvL+eKtuaAgeaUueWPmFxyXG5cdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0aWYgKGUuZGV0YWlsLmNvZGUgPT0gMTAwNykge1xyXG5cdFx0XHRcdF90aGlzLmNhbWVyYXN0YXRlID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIGlmIChlLmRldGFpbC5jb2RlID09IC0xMzAxKSB7XHJcblx0XHRcdFx0X3RoaXMuY2FtZXJhc3RhdGUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHQvL+i/lOWbnlxyXG5cdFx0YmFjaygpIHtcclxuXHRcdFx0dW5pLm5hdmlnYXRlQmFjaygpO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvL+aKk+aLjVxyXG5cdFx0c25hcHNob3QoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zbmFwc2hvdCh7XHJcblx0XHRcdFx0c3VjY2VzczogZSA9PiB7XHJcblx0XHRcdFx0XHRfdGhpcy5zbmFwc2hvdHNyYyA9IGUubWVzc2FnZS50ZW1wSW1hZ2VQYXRoO1xyXG5cdFx0XHRcdFx0X3RoaXMuc3RvcFByZXZpZXcoKTtcclxuXHRcdFx0XHRcdF90aGlzLnNldEltYWdlKCk7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/lj43ovaxcclxuXHRcdGZsaXAoKSB7XHJcblx0XHRcdHRoaXMubGl2ZVB1c2hlci5zd2l0Y2hDYW1lcmEoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly/orr7nva5cclxuXHRcdHNldEltYWdlKCkge1xyXG5cdFx0XHRsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuXHRcdFx0bGV0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl07IC8v5LiK5LiA5Liq6aG16Z2iXHJcblxyXG5cdFx0XHQvL+ebtOaOpeiwg+eUqOS4iuS4gOS4qumhtemdoueahHNldEltYWdlKCnmlrnms5XvvIzmiormlbDmja7lrZjliLDkuIrkuIDkuKrpobXpnaLkuK3ljrtcclxuXHRcdFx0cHJldlBhZ2UuJHZtLnNldEltYWdlKHsgcGF0aDogX3RoaXMuc25hcHNob3RzcmMsIGRvdHlwZTogdGhpcy5kb3R5cGUgfSk7XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4ubXVzaWMtY2FtZXJhIHtcclxuXHQucHJldmlldyB7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHQub3V0bGluZS1ib3gge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0bGVmdDogMDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdC5vdXRsaW5lLWltZyB7XHJcblx0XHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0XHRoZWlnaHQ6IDExMjVycHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5yZW1pbmQge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdHRvcDogODgwcnB4O1xyXG5cdFx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0XHR6LWluZGV4OiAxMDA7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHQucmVtaW5kLXRleHQge1xyXG5cdFx0XHRcdGNvbG9yOiAjZGRkZGRkO1xyXG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC5tZW51IHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1NTBycHg7XHJcblx0XHR6LWluZGV4OiA5ODtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdC5tZW51LW1hc2sge1xyXG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0aGVpZ2h0OiA1NTBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk4O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtYmFjayB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0bGVmdDogNjBycHg7XHJcblx0XHRcdGJvdHRvbTogMTAwcnB4O1xyXG5cdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5tZW51LXNuYXBzaG90IHtcclxuXHRcdFx0d2lkdGg6IDEzMHJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMzBycHg7XHJcblx0XHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0fVxyXG5cdFx0Lm1lbnUtZmxpcCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDYwcnB4O1xyXG5cdFx0XHRib3R0b206IDEwMHJweDtcclxuXHRcdFx0d2lkdGg6IDgwcnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDgwcnB4O1xyXG5cdFx0XHR6LWluZGV4OiA5OTtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = formatLog;
exports.log = log;
function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}
function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}
function jsonStringifyReplacer(k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }';
    default:
      return p;
  }
}
function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}
function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }
  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();
    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---';
      } catch (e) {
        v = type;
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();
        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }
    return v;
  });
  var msg = '';
  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');
    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }
  console[type](msg);
}

/***/ }),
/* 11 */
/*!***************************************************************************************************************!*\
  !*** D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page */ 12);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_11_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_0_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_idphoto_nvue_vue_type_style_index_0_lang_scss_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-1!./node_modules/postcss-loader/src??ref--11-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--11-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/GitHub_Project/music-frontend/pages/camera/idphoto.nvue?vue&type=style&index=0&lang=scss&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".preview": {
    ".music-camera ": {
      "justifyContent": [
        "center",
        0,
        1,
        0
      ],
      "alignItems": [
        "center",
        0,
        1,
        0
      ]
    }
  },
  ".outline-box": {
    ".music-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        1
      ],
      "top": [
        0,
        0,
        2,
        1
      ],
      "left": [
        0,
        0,
        2,
        1
      ],
      "bottom": [
        0,
        0,
        2,
        1
      ],
      "zIndex": [
        99,
        0,
        2,
        1
      ],
      "alignItems": [
        "center",
        0,
        2,
        1
      ],
      "justifyContent": [
        "center",
        0,
        2,
        1
      ]
    }
  },
  ".outline-img": {
    ".music-camera .preview .outline-box ": {
      "width": [
        "750rpx",
        0,
        3,
        2
      ],
      "height": [
        "1125rpx",
        0,
        3,
        2
      ]
    }
  },
  ".remind": {
    ".music-camera .preview ": {
      "position": [
        "absolute",
        0,
        2,
        3
      ],
      "top": [
        "880rpx",
        0,
        2,
        3
      ],
      "width": [
        "750rpx",
        0,
        2,
        3
      ],
      "zIndex": [
        100,
        0,
        2,
        3
      ],
      "alignItems": [
        "center",
        0,
        2,
        3
      ],
      "justifyContent": [
        "center",
        0,
        2,
        3
      ]
    }
  },
  ".remind-text": {
    ".music-camera .preview .remind ": {
      "color": [
        "#dddddd",
        0,
        3,
        4
      ],
      "fontWeight": [
        "bold",
        0,
        3,
        4
      ]
    }
  },
  ".menu": {
    ".music-camera ": {
      "position": [
        "absolute",
        0,
        1,
        5
      ],
      "left": [
        0,
        0,
        1,
        5
      ],
      "bottom": [
        0,
        0,
        1,
        5
      ],
      "width": [
        "750rpx",
        0,
        1,
        5
      ],
      "height": [
        "550rpx",
        0,
        1,
        5
      ],
      "zIndex": [
        98,
        0,
        1,
        5
      ],
      "alignItems": [
        "center",
        0,
        1,
        5
      ],
      "justifyContent": [
        "center",
        0,
        1,
        5
      ]
    }
  },
  ".menu-mask": {
    ".music-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        6
      ],
      "left": [
        0,
        0,
        2,
        6
      ],
      "bottom": [
        0,
        0,
        2,
        6
      ],
      "width": [
        "750rpx",
        0,
        2,
        6
      ],
      "height": [
        "550rpx",
        0,
        2,
        6
      ],
      "zIndex": [
        98,
        0,
        2,
        6
      ]
    }
  },
  ".menu-back": {
    ".music-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        7
      ],
      "left": [
        "60rpx",
        0,
        2,
        7
      ],
      "bottom": [
        "100rpx",
        0,
        2,
        7
      ],
      "width": [
        "80rpx",
        0,
        2,
        7
      ],
      "height": [
        "80rpx",
        0,
        2,
        7
      ],
      "zIndex": [
        99,
        0,
        2,
        7
      ],
      "alignItems": [
        "center",
        0,
        2,
        7
      ],
      "justifyContent": [
        "center",
        0,
        2,
        7
      ]
    }
  },
  ".menu-snapshot": {
    ".music-camera .menu ": {
      "width": [
        "130rpx",
        0,
        2,
        8
      ],
      "height": [
        "130rpx",
        0,
        2,
        8
      ],
      "zIndex": [
        99,
        0,
        2,
        8
      ]
    }
  },
  ".menu-flip": {
    ".music-camera .menu ": {
      "position": [
        "absolute",
        0,
        2,
        9
      ],
      "right": [
        "60rpx",
        0,
        2,
        9
      ],
      "bottom": [
        "100rpx",
        0,
        2,
        9
      ],
      "width": [
        "80rpx",
        0,
        2,
        9
      ],
      "height": [
        "80rpx",
        0,
        2,
        9
      ],
      "zIndex": [
        99,
        0,
        2,
        9
      ],
      "alignItems": [
        "center",
        0,
        2,
        9
      ],
      "justifyContent": [
        "center",
        0,
        2,
        9
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);