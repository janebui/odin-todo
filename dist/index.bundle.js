/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(\n  45deg,\n  #ADD9D8,\n  #ADD9D8 10px,\n  #9dcac9 10px,\n  #9dcac9 20px\n  );\n  background-attachment: fixed;\n  margin: 8px;\n}\n\nmain {\n  display: flex;\n\n}\n\n#main-list {\n  display: flex;\n  flex-flow: nowrap;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 1em;\n  text-align: center;\n  \n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn, .del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover, .del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save, #btn-new-list, .show-add, #confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover, .pencil-btn:hover, .del-list-btn:hover, .show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add, #confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .list { \n    margin: 0 0 8px 0;\n    width: 100%;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  main {\n    flex-flow: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(\n  45deg,\n  #ADD9D8,\n  #ADD9D8 10px,\n  #9dcac9 10px,\n  #9dcac9 20px\n  );\n  background-attachment: fixed;\n  margin: 8px;\n}\n\nmain {\n  display: flex;\n\n}\n\n#main-list {\n  display: flex;\n  flex-flow: nowrap;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 1em;\n  text-align: center;\n  \n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn, .del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover, .del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save, #btn-new-list, .show-add, #confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover, .pencil-btn:hover, .del-list-btn:hover, .show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add, #confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .list { \n    margin: 0 0 8px 0;\n    width: 100%;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  main {\n    flex-flow: wrap;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isPast/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isPast/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isPast)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isPast
 * @category Common Helpers
 * @summary Is the given date in the past?
 * @pure false
 *
 * @description
 * Is the given date in the past?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */

function isPast(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  return (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime() < Date.now();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/SVG.js":
/*!***************************!*\
  !*** ./src/assets/SVG.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeIcon": () => (/* binding */ closeIcon),
/* harmony export */   "plusIcon": () => (/* binding */ plusIcon),
/* harmony export */   "pencilIcon": () => (/* binding */ pencilIcon),
/* harmony export */   "trashIcon": () => (/* binding */ trashIcon)
/* harmony export */ });
const closeIcon = `
    <span class="close">
        <svg version="1.1" id="close-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512.001 512.001" width="28px" height="28px" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
        <g>
            <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717
            L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859
            c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287
            l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285
            L284.286,256.002z"/>
        </g>
        </svg>
    </span>
`;

const plusIcon = `
    <svg version="1.1" class="plus-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 500 480" style="enable-background:new 0 0 512 512;" xml:space="preserve" height="24px" width="24px">
    <g>
    <path d="M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216
    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z"/>
    </g>
    </svg>
    `;

const pencilIcon = `
<svg class="pencil-icon" height="20px" width="20px" viewBox="-15 -15 484.00019 484" xmlns="http://www.w3.org/2000/svg"><path d="m401.648438 18.234375c-24.394532-24.351563-63.898438-24.351563-88.292969 0l-22.101563 22.222656-235.269531 235.144531-.5.503907c-.121094.121093-.121094.25-.25.25-.25.375-.625.746093-.871094 1.121093 0 .125-.128906.125-.128906.25-.25.375-.371094.625-.625 1-.121094.125-.121094.246094-.246094.375-.125.375-.25.625-.378906 1 0 .121094-.121094.121094-.121094.25l-52.199219 156.96875c-1.53125 4.46875-.367187 9.417969 2.996094 12.734376 2.363282 2.332031 5.550782 3.636718 8.867188 3.625 1.355468-.023438 2.699218-.234376 3.996094-.625l156.847656-52.324219c.121094 0 .121094 0 .25-.121094.394531-.117187.773437-.285156 1.121094-.503906.097656-.011719.183593-.054688.253906-.121094.371094-.25.871094-.503906 1.246094-.753906.371093-.246094.75-.621094 1.125-.871094.125-.128906.246093-.128906.246093-.25.128907-.125.378907-.246094.503907-.5l257.371093-257.371094c24.351563-24.394531 24.351563-63.898437 0-88.289062zm-232.273438 353.148437-86.914062-86.910156 217.535156-217.535156 86.914062 86.910156zm-99.15625-63.808593 75.929688 75.925781-114.015626 37.960938zm347.664062-184.820313-13.238281 13.363282-86.917969-86.917969 13.367188-13.359375c14.621094-14.609375 38.320312-14.609375 52.945312 0l33.964844 33.964844c14.511719 14.6875 14.457032 38.332031-.121094 52.949218zm0 0"/></svg>`;

const trashIcon = `
<svg enable-background="new 0 0 512 512" height="20px" width="20px" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/><path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/><path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/></g></svg>
`

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/modules/main.js");
/* harmony import */ var date_fns_isPast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/isPast */ "./node_modules/date-fns/esm/isPast/index.js");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_SVG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/SVG */ "./src/assets/SVG.js");








const body = document.querySelector('body');

body.innerHTML = `
<header><h1>Tremollo</h1></header>
<main>
    <div id="main-list">
    </div>
    <form id="form-new-list">
    <input id="input-new-list" type="text" required>
    <button id="btn-new-list">+ New</button>
    </form>
</main>
`;

const mainDiv = document.querySelector('#main-list');

// modal stuff
const modal = document.createElement('div');
modal.setAttribute('class', 'modal');
modal.innerHTML = `
<div class="modal-box">
    <div class="modal-header"><h2 class="modal-title"></h2>${_assets_SVG__WEBPACK_IMPORTED_MODULE_2__.closeIcon}</div>
    <div class="modal-content">
</div>
`;

document.body.appendChild(modal);
const modalContent = document.querySelector('.modal-content');
const closeBtn = document.getElementsByClassName("close")[0];

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('mousedown', (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})


// display the main list of lists
function displayMainList() {

    mainDiv.innerHTML = `
    ${_main__WEBPACK_IMPORTED_MODULE_0__.mainList.arr.map((item, i) => `<div class="list" data-list="${i}">` +
        displayList(item, i) + `</div>`
        ).join('')}
        `;
    addEventListeners();
};


// display an individual todo list
function displayList(list) {
    return `
    <div class="list-header">
        <div class="show-header">
            <h3>${list.name}</h3>
            <div class="edit-btns">
            <button class="pencil-btn">${_assets_SVG__WEBPACK_IMPORTED_MODULE_2__.pencilIcon}</button>
            <button class="del-list-btn">${_assets_SVG__WEBPACK_IMPORTED_MODULE_2__.trashIcon}</button>
            </div>
        </div>
        <form class="edit-list-header">
        <input class="edit-name-input" type="text" value="${list.name}" autofocus onfocus="var temp_value=this.value; this.value=''; this.value=temp_value" />
        <button class="edit-list-save">Save</button>
        </form>
    </div>

    <ul>` +
        list.todoList.map((item, i) =>
            `<li class="item" data-item="${i}">
            ${item.title} <span class="priority ${item.priority}">${item.priority}</span>
            </li>`
        ).join('') +
        `</ul>
    <button class="show-add">
        ${_assets_SVG__WEBPACK_IMPORTED_MODULE_2__.plusIcon}
    </button>
    `;
};


// add Event Listeners to list buttons
function addEventListeners() {
    document.querySelector('#form-new-list').addEventListener('submit', addNewList);

    document.querySelectorAll('.del-list-btn').forEach((del, i) => {
        del.number = i;
        del.addEventListener('click', deleteList);
    });

    document.querySelectorAll('.pencil-btn').forEach((pen, i) => {
        pen.number = i;
        pen.addEventListener('click', editListName);
    });

    document.querySelectorAll('.edit-list-header').forEach((form, i) => {
        form.number = i;
        form.name = form.querySelector('input').value;
        form.addEventListener('submit', submitListName);
    });

    document.querySelectorAll('.show-add').forEach((btn, i) => {
        btn.number = i;
        btn.addEventListener('click', addNewItem);
    });

    document.querySelectorAll('.item').forEach((item) => {
        item.addEventListener('click', editItem);
    });
};


// create a new list using the user's input
function addNewList(e) {
    e.preventDefault();
    e.stopPropagation();

    let newListName = (0,_main__WEBPACK_IMPORTED_MODULE_0__.sanitize)(document.querySelector('#input-new-list').value);
    _main__WEBPACK_IMPORTED_MODULE_0__.mainList.add((0,_main__WEBPACK_IMPORTED_MODULE_0__.List)(newListName));

    displayMainList();

    this.reset();
};


// when user clicks on pencil button to edit list name, change to edit mode display
function editListName(e) {
    e.preventDefault();
    e.stopPropagation();

    let editMode = true;

    let pen = e.currentTarget;
    let showHeader = pen.parentNode.parentNode;
    let editListHeader = showHeader.parentNode.lastElementChild;
    let editNameInput = editListHeader.querySelector('input');

    if (editMode) {
        showHeader.style.display = 'none';
        editListHeader.style.display = 'flex';
        editNameInput.focus();
    }

    // remove focus from input when the user clicks outside the input
    window.addEventListener('mousedown', removeFocus);

    function removeFocus(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.target != editNameInput) {
            editMode = false;
            showHeader.style.display = 'flex';
            editListHeader.style.display = 'none';
            window.removeEventListener('mousedown', removeFocus)
        }
    };
};


// when user changes a list's name, update main array and update display
function submitListName(e) {
    e.preventDefault();
    e.stopPropagation();

    let oldName = e.target.name;
    let newName = e.target.querySelector('input').value;

    if (newName != oldName) {
        _main__WEBPACK_IMPORTED_MODULE_0__.mainList.editName(e.target.number, newName);
        displayMainList();
    } else {
        return;
    };
};


// delete a list
function deleteList(e) {
    e.preventDefault();
    e.stopPropagation();

    let delTarget = e.currentTarget.number;

    _main__WEBPACK_IMPORTED_MODULE_0__.mainList.del(delTarget);
    displayMainList();
};


// create a new item inside a list
function addNewItem(e) {
    e.preventDefault();
    e.stopPropagation();

    const l = e.currentTarget.number;

    displayForm('', '', '', '', "Add a New Item");
    const form = document.querySelector('#item-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // grab the form values and return a new to-do item
        let newToDo = processForm(form);

        (0,_main__WEBPACK_IMPORTED_MODULE_0__.addToDo)(l, newToDo);

        modal.style.display = 'none';
        displayMainList();
    });
};


// when user clicks on an item or the edit item button, display modal
function editItem(e) {
    e.stopPropagation();

    let l = e.currentTarget.parentNode.parentNode.dataset.list;
    let i = e.currentTarget.dataset.item;
    let item = _main__WEBPACK_IMPORTED_MODULE_0__.mainList.arr[l].todoList[i];

    // display the edit form with the values pre-filled
    displayForm(item.title, item.description, item.dueDate, item.priority, "Edit Item");

    // when user edits the item, update the display and main list
    const form = document.querySelector('#item-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // grab the form values and return the edited todo item
        let newToDo = processForm(form);

        (0,_main__WEBPACK_IMPORTED_MODULE_0__.editToDo)(l, i, newToDo);

        modal.style.display = 'none';
        displayMainList();
    });

    // create a delete button
    const modalButtons = document.querySelector('.modal-buttons')
    const delBtn = document.createElement('button');
    delBtn.setAttribute('id', 'delete');
    delBtn.innerHTML = _assets_SVG__WEBPACK_IMPORTED_MODULE_2__.trashIcon;
    modalButtons.appendChild(delBtn);
    delBtn.addEventListener('click', deleteItem, false);
    delBtn.item = [l, i]; // add prototype so location of item can be accessed by deleteItem
};

// when user clicks delete button, delete from display and mainList
function deleteItem(e) {
    e.stopPropagation();
    let l = e.currentTarget.item[0];
    let i = e.currentTarget.item[1];

    (0,_main__WEBPACK_IMPORTED_MODULE_0__.delToDo)(l, i);

    modal.style.display = 'none';
    displayMainList();
};


// display the modal with the form inside
function displayForm(title, description, dueDate, priority, header) {
    modal.style.display = 'block';

    document.querySelector('.modal-title').innerHTML = header;

    modalContent.innerHTML = `
    <form id="item-form">
        <label for="title">Title:</label>
        <input name="title" type="text" value="${title}" required />

        <label for="description">Description:</label>
        <textarea name="description" type="text">${description}</textarea>

        <label for="duedate-input" id="duedate-label">Due Date:</label>
        <input id="duedate-input" name="duedate" type="date" value="${dueDate}" />

        <div id="radio-btns">
        Priority:
        <label class="rb-priority"><input name="priority" type="radio" value="low" 
        ${priority == 'low' ? 'checked':''} />Low</label>

        <label class="rb-priority"><input name="priority" type="radio" value="high" 
        ${priority == 'high' ? 'checked':''} />High</label>
        </div>
    </form>
    <div class="modal-buttons">
        <button id="confirm-btn" form="item-form">Confirm</button>
    </div>
    `;

    if (dueDate) {
        let dateObj = new Date((0,_main__WEBPACK_IMPORTED_MODULE_0__.replaceDate)(dueDate));
        if ((0,date_fns_isPast__WEBPACK_IMPORTED_MODULE_3__.default)(dateObj)) {
            const duedate = document.querySelector('#duedate-label');
            duedate.textContent = "OVERDUE";
            duedate.classList.add('overdue');
        }
    };
};

// grab the user inputs from the form
function processForm(form) {
    let priority = '';
    form.querySelectorAll('input[name="priority"]').forEach(function (rb) {
        if (rb.checked) {
            priority = rb.value;
        }
    });

    let date = form.querySelector('input[name="duedate"]').value;

    let newToDo = {
        title: (0,_main__WEBPACK_IMPORTED_MODULE_0__.sanitize)(form.querySelector('input[name="title"]').value),
        description: (0,_main__WEBPACK_IMPORTED_MODULE_0__.sanitize)(form.querySelector('textarea[name="description"]').value),
        dueDate: date,
        priority: priority
    };
    return newToDo;
};


displayMainList();

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainList": () => (/* binding */ mainList),
/* harmony export */   "List": () => (/* binding */ List),
/* harmony export */   "ToDo": () => (/* binding */ ToDo),
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "editToDo": () => (/* binding */ editToDo),
/* harmony export */   "delToDo": () => (/* binding */ delToDo),
/* harmony export */   "replaceDate": () => (/* binding */ replaceDate),
/* harmony export */   "sanitize": () => (/* binding */ sanitize)
/* harmony export */ });
// save the working Main List array to local storage as a string
function saveLS(arr) {
    localStorage.setItem('items', JSON.stringify(arr));
};

// module of the main list of lists
const mainList = (() => {
    // grab data from local storage. if there is none, then initialize w/ sample data
    let arr = JSON.parse(localStorage.getItem('items')) || 
        [ 
            {
                name: 'Monday',
                todoList: [
                    {
                        title: 'Feed the Cat',
                        description: 'Fish Tacos',
                        dueDate: '2021-12-20',
                        priority: 'high'
                    },
                    {
                        title: 'Go to Work',
                        description: 'Look Alive',
                        dueDate: '2021-12-20',
                        priority: ''
                    }
                ]
            }
        ];

    function add(list) {
        arr.push(list);
        saveLS(arr);
    };

    function editName(i, newName) {
        arr[i].name = newName;
        saveLS(arr);
    };

    function del(i) {
        arr.splice(i, 1);
        saveLS(arr);
    };

    return {
        arr,
        editName,
        add,
        del
    };
})();

// factory function for list
const List = (name) => {
    const todoList = [];
    return {
        name,
        todoList
    };
};

// factory function for to-do items. At a minimum they should have a title, description, dueDate and priority. You might also want to include notes or even a checklist.
const ToDo = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    };
};

// add a new to-do item to the list
function addToDo(l, todo) {
    mainList.arr[l].todoList.push(todo);
    saveLS(mainList.arr);
};

// edit an existing item i from list l
function editToDo(l, i, newObj) {
    Object.assign(mainList.arr[l].todoList[i], newObj);
    saveLS(mainList.arr);
};

// delete todo item i from list l
function delToDo(l, i) {
    mainList.arr[l].todoList.splice(i, 1);
    saveLS(mainList.arr);
};

// change the hyphens to slashes in the input date
function replaceDate(date) {
    return date.replace(/-/g, '/');;
};

// sanitize user input
function sanitize(string) {
    return string.replace(/[.*+?^${}()|<>[\]\\]/g, '');
};

// localStorage.clear();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hc3NldHMvU1ZHLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLGdJQUFnSTtBQUNoSTtBQUNBLGdEQUFnRCxpQkFBaUIsZ0JBQWdCLEdBQUcsVUFBVSx5Q0FBeUMsbUJBQW1CLHdIQUF3SCxpQ0FBaUMsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixHQUFHLFlBQVksOEJBQThCLHVCQUF1QixlQUFlLGNBQWMsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsaUJBQWlCLHVCQUF1QixPQUFPLFFBQVEsY0FBYyxzQkFBc0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQiw2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WUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8s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OztBQUVBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ087QUFDUCxvQ0FBb0M7QUFDcEM7O0FBRUEsd0I7Ozs7OztVQ25HQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTnNCIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMTJjMmE7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgNDVkZWcsXFxuICAjQUREOUQ4LFxcbiAgI0FERDlEOCAxMHB4LFxcbiAgIzlkY2FjOSAxMHB4LFxcbiAgIzlkY2FjOSAyMHB4XFxuICApO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG1hcmdpbjogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTQ4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4O1xcbn1cXG5cXG4ucGVuY2lsLWJ0biwgLmRlbC1saXN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZpbGw6ICM3OTcwNmI7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wZW5jaWwtYnRuOmhvdmVyLCAuZGVsLWxpc3QtYnRuOmhvdmVyIHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZWRpdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IG5vd3JhcDtcXG59XFxuXFxuLnNob3ctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmlsbC1vcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXI6aG92ZXIge1xcbiAgZmlsbC1vcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4jZm9ybS1uZXctbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG4uZWRpdC1saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzNkZDlkNjtcXG59XFxuXFxuLmVkaXQtbGlzdC1zYXZlLCAjYnRuLW5ldy1saXN0LCAuc2hvdy1hZGQsICNjb25maXJtLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5M2Q2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0OmhvdmVyLCAucGVuY2lsLWJ0bjpob3ZlciwgLmRlbC1saXN0LWJ0bjpob3ZlciwgLnNob3ctYWRkOmhvdmVyLFxcbiNjb25maXJtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsXFxuI2J0bi1uZXctbGlzdCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2J0bi1uZXctbGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQ5LCAyNTIsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDAgOHB4IDhweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3ctYWRkLCAjY29uZmlybS1idG4ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIGZpbGw6ICNmZmY7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogI0U4Nzg4ODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFODc4ODg7XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6ICNiYjlhNmI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmI5YTZiO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBjb2xvcjogIzExNTQ4ODtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogODB2dztcXG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZpbGw6ICM3OTcwNmI7XFxufVxcblxcbiNjbG9zZS1pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpdGVtLWZvcm0gaW5wdXQsXFxuI2R1ZWRhdGUtaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2Y5ZmM7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiNpdGVtLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkdWVkYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuI2NvbmZpcm0tYnRuLFxcbi5kZWxldGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbiNjb25maXJtLWJ0biB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNkZWxldGUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg3ODg4O1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNkZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlM2M1MjtcXG59XFxuXFxuLm92ZXJkdWUge1xcbiAgY29sb3I6ICNjZTNjNTI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJiLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAycHggOHB4IDJweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5saXN0IHsgXFxuICAgIG1hcmdpbjogMCAwIDhweCAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNtYWluLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZDs7Ozs7O0dBTUM7RUFDRCw0QkFBNEI7RUFDNUIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsY0FBYztF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V0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMTJjMmE7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgNDVkZWcsXFxuICAjQUREOUQ4LFxcbiAgI0FERDlEOCAxMHB4LFxcbiAgIzlkY2FjOSAxMHB4LFxcbiAgIzlkY2FjOSAyMHB4XFxuICApO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG1hcmdpbjogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTQ4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4O1xcbn1cXG5cXG4ucGVuY2lsLWJ0biwgLmRlbC1saXN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZpbGw6ICM3OTcwNmI7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wZW5jaWwtYnRuOmhvdmVyLCAuZGVsLWxpc3QtYnRuOmhvdmVyIHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZWRpdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IG5vd3JhcDtcXG59XFxuXFxuLnNob3ctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmlsbC1vcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXI6aG92ZXIge1xcbiAgZmlsbC1vcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4jZm9ybS1uZXctbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG4uZWRpdC1saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzNkZDlkNjtcXG59XFxuXFxuLmVkaXQtbGlzdC1zYXZlLCAjYnRuLW5ldy1saXN0LCAuc2hvdy1hZGQsICNjb25maXJtLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5M2Q2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0OmhvdmVyLCAucGVuY2lsLWJ0bjpob3ZlciwgLmRlbC1saXN0LWJ0bjpob3ZlciwgLnNob3ctYWRkOmhvdmVyLFxcbiNjb25maXJtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsXFxuI2J0bi1uZXctbGlzdCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2J0bi1uZXctbGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQ5LCAyNTIsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDAgOHB4IDhweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3ctYWRkLCAjY29uZmlybS1idG4ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIGZpbGw6ICNmZmY7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogI0U4Nzg4ODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFODc4ODg7XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6ICNiYjlhNmI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmI5YTZiO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBjb2xvcjogIzExNTQ4ODtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogODB2dztcXG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZpbGw6ICM3OTcwNmI7XFxufVxcblxcbiNjbG9zZS1pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpdGVtLWZvcm0gaW5wdXQsXFxuI2R1ZWRhdGUtaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2Y5ZmM7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiNpdGVtLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkdWVkYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuI2NvbmZpcm0tYnRuLFxcbi5kZWxldGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbiNjb25maXJtLWJ0biB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNkZWxldGUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg3ODg4O1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNkZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlM2M1MjtcXG59XFxuXFxuLm92ZXJkdWUge1xcbiAgY29sb3I6ICNjZTNjNTI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJiLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAycHggOHB4IDJweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5saXN0IHsgXFxuICAgIG1hcmdpbjogMCAwIDhweCAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNtYWluLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzUGFzdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgZnVuY3Rpb24gaXMgbm90IHByZXNlbnQgaW4gdGhlIEZQIHN1Ym1vZHVsZSBhc1xuICogPiBpdCB1c2VzIGBEYXRlLm5vdygpYCBpbnRlcm5hbGx5IGhlbmNlIGltcHVyZSBhbmQgY2FuJ3QgYmUgc2FmZWx5IGN1cnJpZWQuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgcGFzdFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGUgcGFzdD9cbiAqIHZhciByZXN1bHQgPSBpc1Bhc3QobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1Bhc3QoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpIDwgRGF0ZS5ub3coKTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBjb25zdCBjbG9zZUljb24gPSBgXG4gICAgPHNwYW4gY2xhc3M9XCJjbG9zZVwiPlxuICAgICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cImNsb3NlLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDEgNTEyLjAwMVwiIHdpZHRoPVwiMjhweFwiIGhlaWdodD1cIjI4cHhcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyLjAwMSA1MTIuMDAxO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICAgIDxnPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0yODQuMjg2LDI1Ni4wMDJMNTA2LjE0MywzNC4xNDRjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1Yy03LjgxMS03LjgxLTIwLjQ3NS03LjgxMS0yOC4yODUsMEwyNTYsMjI3LjcxN1xuICAgICAgICAgICAgTDM0LjE0Myw1Ljg1OWMtNy44MTEtNy44MTEtMjAuNDc1LTcuODExLTI4LjI4NSwwYy03LjgxLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWwyMjEuODU3LDIyMS44NTdMNS44NTgsNDc3Ljg1OVxuICAgICAgICAgICAgYy03LjgxMSw3LjgxMS03LjgxMSwyMC40NzUsMCwyOC4yODVjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3YzUuMTE5LDAsMTAuMjM3LTEuOTUyLDE0LjE0My01Ljg1N0wyNTYsMjg0LjI4N1xuICAgICAgICAgICAgbDIyMS44NTcsMjIxLjg1N2MzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdzMTAuMjM3LTEuOTUyLDE0LjE0My01Ljg1N2M3LjgxMS03LjgxMSw3LjgxMS0yMC40NzUsMC0yOC4yODVcbiAgICAgICAgICAgIEwyODQuMjg2LDI1Ni4wMDJ6XCIvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvc3Bhbj5cbmA7XG5cbmV4cG9ydCBjb25zdCBwbHVzSWNvbiA9IGBcbiAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBjbGFzcz1cInBsdXMtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG4gICAgdmlld0JveD1cIjAgMCA1MDAgNDgwXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIiBoZWlnaHQ9XCIyNHB4XCIgd2lkdGg9XCIyNHB4XCI+XG4gICAgPGc+XG4gICAgPHBhdGggZD1cIk00OTIsMjM2SDI3NlYyMGMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjB2MjE2SDIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHM4Ljk1NCwyMCwyMCwyMGgyMTZcbiAgICB2MjE2YzAsMTEuMDQ2LDguOTU0LDIwLDIwLDIwczIwLTguOTU0LDIwLTIwVjI3NmgyMTZjMTEuMDQ2LDAsMjAtOC45NTQsMjAtMjBDNTEyLDI0NC45NTQsNTAzLjA0NiwyMzYsNDkyLDIzNnpcIi8+XG4gICAgPC9nPlxuICAgIDwvc3ZnPlxuICAgIGA7XG5cbmV4cG9ydCBjb25zdCBwZW5jaWxJY29uID0gYFxuPHN2ZyBjbGFzcz1cInBlbmNpbC1pY29uXCIgaGVpZ2h0PVwiMjBweFwiIHdpZHRoPVwiMjBweFwiIHZpZXdCb3g9XCItMTUgLTE1IDQ4NC4wMDAxOSA0ODRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00MDEuNjQ4NDM4IDE4LjIzNDM3NWMtMjQuMzk0NTMyLTI0LjM1MTU2My02My44OTg0MzgtMjQuMzUxNTYzLTg4LjI5Mjk2OSAwbC0yMi4xMDE1NjMgMjIuMjIyNjU2LTIzNS4yNjk1MzEgMjM1LjE0NDUzMS0uNS41MDM5MDdjLS4xMjEwOTQuMTIxMDkzLS4xMjEwOTQuMjUtLjI1LjI1LS4yNS4zNzUtLjYyNS43NDYwOTMtLjg3MTA5NCAxLjEyMTA5MyAwIC4xMjUtLjEyODkwNi4xMjUtLjEyODkwNi4yNS0uMjUuMzc1LS4zNzEwOTQuNjI1LS42MjUgMS0uMTIxMDk0LjEyNS0uMTIxMDk0LjI0NjA5NC0uMjQ2MDk0LjM3NS0uMTI1LjM3NS0uMjUuNjI1LS4zNzg5MDYgMSAwIC4xMjEwOTQtLjEyMTA5NC4xMjEwOTQtLjEyMTA5NC4yNWwtNTIuMTk5MjE5IDE1Ni45Njg3NWMtMS41MzEyNSA0LjQ2ODc1LS4zNjcxODcgOS40MTc5NjkgMi45OTYwOTQgMTIuNzM0Mzc2IDIuMzYzMjgyIDIuMzMyMDMxIDUuNTUwNzgyIDMuNjM2NzE4IDguODY3MTg4IDMuNjI1IDEuMzU1NDY4LS4wMjM0MzggMi42OTkyMTgtLjIzNDM3NiAzLjk5NjA5NC0uNjI1bDE1Ni44NDc2NTYtNTIuMzI0MjE5Yy4xMjEwOTQgMCAuMTIxMDk0IDAgLjI1LS4xMjEwOTQuMzk0NTMxLS4xMTcxODcuNzczNDM3LS4yODUxNTYgMS4xMjEwOTQtLjUwMzkwNi4wOTc2NTYtLjAxMTcxOS4xODM1OTMtLjA1NDY4OC4yNTM5MDYtLjEyMTA5NC4zNzEwOTQtLjI1Ljg3MTA5NC0uNTAzOTA2IDEuMjQ2MDk0LS43NTM5MDYuMzcxMDkzLS4yNDYwOTQuNzUtLjYyMTA5NCAxLjEyNS0uODcxMDk0LjEyNS0uMTI4OTA2LjI0NjA5My0uMTI4OTA2LjI0NjA5My0uMjUuMTI4OTA3LS4xMjUuMzc4OTA3LS4yNDYwOTQuNTAzOTA3LS41bDI1Ny4zNzEwOTMtMjU3LjM3MTA5NGMyNC4zNTE1NjMtMjQuMzk0NTMxIDI0LjM1MTU2My02My44OTg0MzcgMC04OC4yODkwNjJ6bS0yMzIuMjczNDM4IDM1My4xNDg0MzctODYuOTE0MDYyLTg2LjkxMDE1NiAyMTcuNTM1MTU2LTIxNy41MzUxNTYgODYuOTE0MDYyIDg2LjkxMDE1NnptLTk5LjE1NjI1LTYzLjgwODU5MyA3NS45Mjk2ODggNzUuOTI1NzgxLTExNC4wMTU2MjYgMzcuOTYwOTM4em0zNDcuNjY0MDYyLTE4NC44MjAzMTMtMTMuMjM4MjgxIDEzLjM2MzI4Mi04Ni45MTc5NjktODYuOTE3OTY5IDEzLjM2NzE4OC0xMy4zNTkzNzVjMTQuNjIxMDk0LTE0LjYwOTM3NSAzOC4zMjAzMTItMTQuNjA5Mzc1IDUyLjk0NTMxMiAwbDMzLjk2NDg0NCAzMy45NjQ4NDRjMTQuNTExNzE5IDE0LjY4NzUgMTQuNDU3MDMyIDM4LjMzMjAzMS0uMTIxMDk0IDUyLjk0OTIxOHptMCAwXCIvPjwvc3ZnPmA7XG5cbmV4cG9ydCBjb25zdCB0cmFzaEljb24gPSBgXG48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiMjBweFwiIHdpZHRoPVwiMjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxnPjxwYXRoIGQ9XCJtNDI0IDY0aC04OHYtMTZjMC0yNi40NjctMjEuNTMzLTQ4LTQ4LTQ4aC02NGMtMjYuNDY3IDAtNDggMjEuNTMzLTQ4IDQ4djE2aC04OGMtMjIuMDU2IDAtNDAgMTcuOTQ0LTQwIDQwdjU2YzAgOC44MzYgNy4xNjQgMTYgMTYgMTZoOC43NDRsMTMuODIzIDI5MC4yODNjMS4yMjEgMjUuNjM2IDIyLjI4MSA0NS43MTcgNDcuOTQ1IDQ1LjcxN2gyNDIuOTc2YzI1LjY2NSAwIDQ2LjcyNS0yMC4wODEgNDcuOTQ1LTQ1LjcxN2wxMy44MjMtMjkwLjI4M2g4Ljc0NGM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2di01NmMwLTIyLjA1Ni0xNy45NDQtNDAtNDAtNDB6bS0yMTYtMTZjMC04LjgyMiA3LjE3OC0xNiAxNi0xNmg2NGM4LjgyMiAwIDE2IDcuMTc4IDE2IDE2djE2aC05NnptLTEyOCA1NmMwLTQuNDExIDMuNTg5LTggOC04aDMzNmM0LjQxMSAwIDggMy41ODkgOCA4djQwYy00LjkzMSAwLTMzMS41NjcgMC0zNTIgMHptMzEzLjQ2OSAzNjAuNzYxYy0uNDA3IDguNTQ1LTcuNDI3IDE1LjIzOS0xNS45ODEgMTUuMjM5aC0yNDIuOTc2Yy04LjU1NSAwLTE1LjU3NS02LjY5NC0xNS45ODEtMTUuMjM5bC0xMy43NTEtMjg4Ljc2MWgzMDIuNDR6XCIvPjxwYXRoIGQ9XCJtMjU2IDQ0OGM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2di0yMDhjMC04LjgzNi03LjE2NC0xNi0xNi0xNnMtMTYgNy4xNjQtMTYgMTZ2MjA4YzAgOC44MzYgNy4xNjMgMTYgMTYgMTZ6XCIvPjxwYXRoIGQ9XCJtMzM2IDQ0OGM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2di0yMDhjMC04LjgzNi03LjE2NC0xNi0xNi0xNnMtMTYgNy4xNjQtMTYgMTZ2MjA4YzAgOC44MzYgNy4xNjMgMTYgMTYgMTZ6XCIvPjxwYXRoIGQ9XCJtMTc2IDQ0OGM4LjgzNiAwIDE2LTcuMTY0IDE2LTE2di0yMDhjMC04LjgzNi03LjE2NC0xNi0xNi0xNnMtMTYgNy4xNjQtMTYgMTZ2MjA4YzAgOC44MzYgNy4xNjMgMTYgMTYgMTZ6XCIvPjwvZz48L3N2Zz5cbmAiLCJpbXBvcnQge1xuICAgIG1haW5MaXN0LFxuICAgIExpc3QsXG4gICAgYWRkVG9EbyxcbiAgICBlZGl0VG9EbyxcbiAgICBkZWxUb0RvLFxuICAgIHNhbml0aXplLFxuICAgIHJlcGxhY2VEYXRlLFxufSBmcm9tICcuL21haW4nO1xuXG5pbXBvcnQgaXNQYXN0IGZyb20gJ2RhdGUtZm5zL2lzUGFzdCc7XG5cbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7XG4gICAgY2xvc2VJY29uLFxuICAgIHBlbmNpbEljb24sXG4gICAgcGx1c0ljb24sXG4gICAgdHJhc2hJY29uLFxufSBmcm9tICcuLi9hc3NldHMvU1ZHJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuYm9keS5pbm5lckhUTUwgPSBgXG48aGVhZGVyPjxoMT5UcmVtb2xsbzwvaDE+PC9oZWFkZXI+XG48bWFpbj5cbiAgICA8ZGl2IGlkPVwibWFpbi1saXN0XCI+XG4gICAgPC9kaXY+XG4gICAgPGZvcm0gaWQ9XCJmb3JtLW5ldy1saXN0XCI+XG4gICAgPGlucHV0IGlkPVwiaW5wdXQtbmV3LWxpc3RcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPlxuICAgIDxidXR0b24gaWQ9XCJidG4tbmV3LWxpc3RcIj4rIE5ldzwvYnV0dG9uPlxuICAgIDwvZm9ybT5cbjwvbWFpbj5cbmA7XG5cbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1saXN0Jyk7XG5cbi8vIG1vZGFsIHN0dWZmXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubW9kYWwuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtb2RhbCcpO1xubW9kYWwuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cIm1vZGFsLWJveFwiPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj48aDIgY2xhc3M9XCJtb2RhbC10aXRsZVwiPjwvaDI+JHtjbG9zZUljb259PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbjwvZGl2PlxuYDtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XG5cbmNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0pXG5cblxuLy8gZGlzcGxheSB0aGUgbWFpbiBsaXN0IG9mIGxpc3RzXG5mdW5jdGlvbiBkaXNwbGF5TWFpbkxpc3QoKSB7XG5cbiAgICBtYWluRGl2LmlubmVySFRNTCA9IGBcbiAgICAke21haW5MaXN0LmFyci5tYXAoKGl0ZW0sIGkpID0+IGA8ZGl2IGNsYXNzPVwibGlzdFwiIGRhdGEtbGlzdD1cIiR7aX1cIj5gICtcbiAgICAgICAgZGlzcGxheUxpc3QoaXRlbSwgaSkgKyBgPC9kaXY+YFxuICAgICAgICApLmpvaW4oJycpfVxuICAgICAgICBgO1xuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG59O1xuXG5cbi8vIGRpc3BsYXkgYW4gaW5kaXZpZHVhbCB0b2RvIGxpc3RcbmZ1bmN0aW9uIGRpc3BsYXlMaXN0KGxpc3QpIHtcbiAgICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2hvdy1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoMz4ke2xpc3QubmFtZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVkaXQtYnRuc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInBlbmNpbC1idG5cIj4ke3BlbmNpbEljb259PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsLWxpc3QtYnRuXCI+JHt0cmFzaEljb259PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC1saXN0LWhlYWRlclwiPlxuICAgICAgICA8aW5wdXQgY2xhc3M9XCJlZGl0LW5hbWUtaW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtsaXN0Lm5hbWV9XCIgYXV0b2ZvY3VzIG9uZm9jdXM9XCJ2YXIgdGVtcF92YWx1ZT10aGlzLnZhbHVlOyB0aGlzLnZhbHVlPScnOyB0aGlzLnZhbHVlPXRlbXBfdmFsdWVcIiAvPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZWRpdC1saXN0LXNhdmVcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cblxuICAgIDx1bD5gICtcbiAgICAgICAgbGlzdC50b2RvTGlzdC5tYXAoKGl0ZW0sIGkpID0+XG4gICAgICAgICAgICBgPGxpIGNsYXNzPVwiaXRlbVwiIGRhdGEtaXRlbT1cIiR7aX1cIj5cbiAgICAgICAgICAgICR7aXRlbS50aXRsZX0gPHNwYW4gY2xhc3M9XCJwcmlvcml0eSAke2l0ZW0ucHJpb3JpdHl9XCI+JHtpdGVtLnByaW9yaXR5fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+YFxuICAgICAgICApLmpvaW4oJycpICtcbiAgICAgICAgYDwvdWw+XG4gICAgPGJ1dHRvbiBjbGFzcz1cInNob3ctYWRkXCI+XG4gICAgICAgICR7cGx1c0ljb259XG4gICAgPC9idXR0b24+XG4gICAgYDtcbn07XG5cblxuLy8gYWRkIEV2ZW50IExpc3RlbmVycyB0byBsaXN0IGJ1dHRvbnNcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLW5ldy1saXN0JykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkTmV3TGlzdCk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsLWxpc3QtYnRuJykuZm9yRWFjaCgoZGVsLCBpKSA9PiB7XG4gICAgICAgIGRlbC5udW1iZXIgPSBpO1xuICAgICAgICBkZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWxldGVMaXN0KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wZW5jaWwtYnRuJykuZm9yRWFjaCgocGVuLCBpKSA9PiB7XG4gICAgICAgIHBlbi5udW1iZXIgPSBpO1xuICAgICAgICBwZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0TGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQtbGlzdC1oZWFkZXInKS5mb3JFYWNoKChmb3JtLCBpKSA9PiB7XG4gICAgICAgIGZvcm0ubnVtYmVyID0gaTtcbiAgICAgICAgZm9ybS5uYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHN1Ym1pdExpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaG93LWFkZCcpLmZvckVhY2goKGJ0biwgaSkgPT4ge1xuICAgICAgICBidG4ubnVtYmVyID0gaTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkTmV3SXRlbSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaXRlbScpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRJdGVtKTtcbiAgICB9KTtcbn07XG5cblxuLy8gY3JlYXRlIGEgbmV3IGxpc3QgdXNpbmcgdGhlIHVzZXIncyBpbnB1dFxuZnVuY3Rpb24gYWRkTmV3TGlzdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgbmV3TGlzdE5hbWUgPSBzYW5pdGl6ZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtbmV3LWxpc3QnKS52YWx1ZSk7XG4gICAgbWFpbkxpc3QuYWRkKExpc3QobmV3TGlzdE5hbWUpKTtcblxuICAgIGRpc3BsYXlNYWluTGlzdCgpO1xuXG4gICAgdGhpcy5yZXNldCgpO1xufTtcblxuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIG9uIHBlbmNpbCBidXR0b24gdG8gZWRpdCBsaXN0IG5hbWUsIGNoYW5nZSB0byBlZGl0IG1vZGUgZGlzcGxheVxuZnVuY3Rpb24gZWRpdExpc3ROYW1lKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBlZGl0TW9kZSA9IHRydWU7XG5cbiAgICBsZXQgcGVuID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGxldCBzaG93SGVhZGVyID0gcGVuLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBsZXQgZWRpdExpc3RIZWFkZXIgPSBzaG93SGVhZGVyLnBhcmVudE5vZGUubGFzdEVsZW1lbnRDaGlsZDtcbiAgICBsZXQgZWRpdE5hbWVJbnB1dCA9IGVkaXRMaXN0SGVhZGVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG5cbiAgICBpZiAoZWRpdE1vZGUpIHtcbiAgICAgICAgc2hvd0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlZGl0TGlzdEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICBlZGl0TmFtZUlucHV0LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlIGZvY3VzIGZyb20gaW5wdXQgd2hlbiB0aGUgdXNlciBjbGlja3Mgb3V0c2lkZSB0aGUgaW5wdXRcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgcmVtb3ZlRm9jdXMpO1xuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRm9jdXMoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPSBlZGl0TmFtZUlucHV0KSB7XG4gICAgICAgICAgICBlZGl0TW9kZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2hvd0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgZWRpdExpc3RIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZW1vdmVGb2N1cylcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cbi8vIHdoZW4gdXNlciBjaGFuZ2VzIGEgbGlzdCdzIG5hbWUsIHVwZGF0ZSBtYWluIGFycmF5IGFuZCB1cGRhdGUgZGlzcGxheVxuZnVuY3Rpb24gc3VibWl0TGlzdE5hbWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IG9sZE5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCBuZXdOYW1lID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblxuICAgIGlmIChuZXdOYW1lICE9IG9sZE5hbWUpIHtcbiAgICAgICAgbWFpbkxpc3QuZWRpdE5hbWUoZS50YXJnZXQubnVtYmVyLCBuZXdOYW1lKTtcbiAgICAgICAgZGlzcGxheU1haW5MaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG59O1xuXG5cbi8vIGRlbGV0ZSBhIGxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGRlbFRhcmdldCA9IGUuY3VycmVudFRhcmdldC5udW1iZXI7XG5cbiAgICBtYWluTGlzdC5kZWwoZGVsVGFyZ2V0KTtcbiAgICBkaXNwbGF5TWFpbkxpc3QoKTtcbn07XG5cblxuLy8gY3JlYXRlIGEgbmV3IGl0ZW0gaW5zaWRlIGEgbGlzdFxuZnVuY3Rpb24gYWRkTmV3SXRlbShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBsID0gZS5jdXJyZW50VGFyZ2V0Lm51bWJlcjtcblxuICAgIGRpc3BsYXlGb3JtKCcnLCAnJywgJycsICcnLCBcIkFkZCBhIE5ldyBJdGVtXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1mb3JtJyk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBncmFiIHRoZSBmb3JtIHZhbHVlcyBhbmQgcmV0dXJuIGEgbmV3IHRvLWRvIGl0ZW1cbiAgICAgICAgbGV0IG5ld1RvRG8gPSBwcm9jZXNzRm9ybShmb3JtKTtcblxuICAgICAgICBhZGRUb0RvKGwsIG5ld1RvRG8pO1xuXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRpc3BsYXlNYWluTGlzdCgpO1xuICAgIH0pO1xufTtcblxuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIG9uIGFuIGl0ZW0gb3IgdGhlIGVkaXQgaXRlbSBidXR0b24sIGRpc3BsYXkgbW9kYWxcbmZ1bmN0aW9uIGVkaXRJdGVtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGwgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQubGlzdDtcbiAgICBsZXQgaSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgbGV0IGl0ZW0gPSBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3RbaV07XG5cbiAgICAvLyBkaXNwbGF5IHRoZSBlZGl0IGZvcm0gd2l0aCB0aGUgdmFsdWVzIHByZS1maWxsZWRcbiAgICBkaXNwbGF5Rm9ybShpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHksIFwiRWRpdCBJdGVtXCIpO1xuXG4gICAgLy8gd2hlbiB1c2VyIGVkaXRzIHRoZSBpdGVtLCB1cGRhdGUgdGhlIGRpc3BsYXkgYW5kIG1haW4gbGlzdFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1mb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gZ3JhYiB0aGUgZm9ybSB2YWx1ZXMgYW5kIHJldHVybiB0aGUgZWRpdGVkIHRvZG8gaXRlbVxuICAgICAgICBsZXQgbmV3VG9EbyA9IHByb2Nlc3NGb3JtKGZvcm0pO1xuXG4gICAgICAgIGVkaXRUb0RvKGwsIGksIG5ld1RvRG8pO1xuXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRpc3BsYXlNYWluTGlzdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIGEgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1idXR0b25zJylcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUnKTtcbiAgICBkZWxCdG4uaW5uZXJIVE1MID0gdHJhc2hJY29uO1xuICAgIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUl0ZW0sIGZhbHNlKTtcbiAgICBkZWxCdG4uaXRlbSA9IFtsLCBpXTsgLy8gYWRkIHByb3RvdHlwZSBzbyBsb2NhdGlvbiBvZiBpdGVtIGNhbiBiZSBhY2Nlc3NlZCBieSBkZWxldGVJdGVtXG59O1xuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIGRlbGV0ZSBidXR0b24sIGRlbGV0ZSBmcm9tIGRpc3BsYXkgYW5kIG1haW5MaXN0XG5mdW5jdGlvbiBkZWxldGVJdGVtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBsID0gZS5jdXJyZW50VGFyZ2V0Lml0ZW1bMF07XG4gICAgbGV0IGkgPSBlLmN1cnJlbnRUYXJnZXQuaXRlbVsxXTtcblxuICAgIGRlbFRvRG8obCwgaSk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpc3BsYXlNYWluTGlzdCgpO1xufTtcblxuXG4vLyBkaXNwbGF5IHRoZSBtb2RhbCB3aXRoIHRoZSBmb3JtIGluc2lkZVxuZnVuY3Rpb24gZGlzcGxheUZvcm0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaGVhZGVyKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKS5pbm5lckhUTUwgPSBoZWFkZXI7XG5cbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGlkPVwiaXRlbS1mb3JtXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aXRsZX1cIiByZXF1aXJlZCAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiPiR7ZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlZGF0ZS1pbnB1dFwiIGlkPVwiZHVlZGF0ZS1sYWJlbFwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImR1ZWRhdGUtaW5wdXRcIiBuYW1lPVwiZHVlZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2R1ZURhdGV9XCIgLz5cblxuICAgICAgICA8ZGl2IGlkPVwicmFkaW8tYnRuc1wiPlxuICAgICAgICBQcmlvcml0eTpcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmItcHJpb3JpdHlcIj48aW5wdXQgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJsb3dcIiBcbiAgICAgICAgJHtwcmlvcml0eSA9PSAnbG93JyA/ICdjaGVja2VkJzonJ30gLz5Mb3c8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJiLXByaW9yaXR5XCI+PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiaGlnaFwiIFxuICAgICAgICAke3ByaW9yaXR5ID09ICdoaWdoJyA/ICdjaGVja2VkJzonJ30gLz5IaWdoPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWJ0blwiIGZvcm09XCJpdGVtLWZvcm1cIj5Db25maXJtPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgIGxldCBkYXRlT2JqID0gbmV3IERhdGUocmVwbGFjZURhdGUoZHVlRGF0ZSkpO1xuICAgICAgICBpZiAoaXNQYXN0KGRhdGVPYmopKSB7XG4gICAgICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUtbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBcIk9WRVJEVUVcIjtcbiAgICAgICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgnb3ZlcmR1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8vIGdyYWIgdGhlIHVzZXIgaW5wdXRzIGZyb20gdGhlIGZvcm1cbmZ1bmN0aW9uIHByb2Nlc3NGb3JtKGZvcm0pIHtcbiAgICBsZXQgcHJpb3JpdHkgPSAnJztcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLmZvckVhY2goZnVuY3Rpb24gKHJiKSB7XG4gICAgICAgIGlmIChyYi5jaGVja2VkKSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IHJiLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImR1ZWRhdGVcIl0nKS52YWx1ZTtcblxuICAgIGxldCBuZXdUb0RvID0ge1xuICAgICAgICB0aXRsZTogc2FuaXRpemUoZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzYW5pdGl6ZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlKSxcbiAgICAgICAgZHVlRGF0ZTogZGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5XG4gICAgfTtcbiAgICByZXR1cm4gbmV3VG9Ebztcbn07XG5cblxuZGlzcGxheU1haW5MaXN0KCk7IiwiLy8gc2F2ZSB0aGUgd29ya2luZyBNYWluIExpc3QgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSBhcyBhIHN0cmluZ1xuZnVuY3Rpb24gc2F2ZUxTKGFycikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGFycikpO1xufTtcblxuLy8gbW9kdWxlIG9mIHRoZSBtYWluIGxpc3Qgb2YgbGlzdHNcbmV4cG9ydCBjb25zdCBtYWluTGlzdCA9ICgoKSA9PiB7XG4gICAgLy8gZ3JhYiBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZS4gaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBpbml0aWFsaXplIHcvIHNhbXBsZSBkYXRhXG4gICAgbGV0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpIHx8IFxuICAgICAgICBbIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNb25kYXknLFxuICAgICAgICAgICAgICAgIHRvZG9MaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVlZCB0aGUgQ2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmlzaCBUYWNvcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMS0xMi0yMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR28gdG8gV29yaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvb2sgQWxpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjEtMTItMjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICBmdW5jdGlvbiBhZGQobGlzdCkge1xuICAgICAgICBhcnIucHVzaChsaXN0KTtcbiAgICAgICAgc2F2ZUxTKGFycik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVkaXROYW1lKGksIG5ld05hbWUpIHtcbiAgICAgICAgYXJyW2ldLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICBzYXZlTFMoYXJyKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVsKGkpIHtcbiAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgc2F2ZUxTKGFycik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFycixcbiAgICAgICAgZWRpdE5hbWUsXG4gICAgICAgIGFkZCxcbiAgICAgICAgZGVsXG4gICAgfTtcbn0pKCk7XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGxpc3RcbmV4cG9ydCBjb25zdCBMaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvZG9MaXN0XG4gICAgfTtcbn07XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIHRvLWRvIGl0ZW1zLiBBdCBhIG1pbmltdW0gdGhleSBzaG91bGQgaGF2ZSBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSBhbmQgcHJpb3JpdHkuIFlvdSBtaWdodCBhbHNvIHdhbnQgdG8gaW5jbHVkZSBub3RlcyBvciBldmVuIGEgY2hlY2tsaXN0LlxuZXhwb3J0IGNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9O1xufTtcblxuLy8gYWRkIGEgbmV3IHRvLWRvIGl0ZW0gdG8gdGhlIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGwsIHRvZG8pIHtcbiAgICBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzYXZlTFMobWFpbkxpc3QuYXJyKTtcbn07XG5cbi8vIGVkaXQgYW4gZXhpc3RpbmcgaXRlbSBpIGZyb20gbGlzdCBsXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvRG8obCwgaSwgbmV3T2JqKSB7XG4gICAgT2JqZWN0LmFzc2lnbihtYWluTGlzdC5hcnJbbF0udG9kb0xpc3RbaV0sIG5ld09iaik7XG4gICAgc2F2ZUxTKG1haW5MaXN0LmFycik7XG59O1xuXG4vLyBkZWxldGUgdG9kbyBpdGVtIGkgZnJvbSBsaXN0IGxcbmV4cG9ydCBmdW5jdGlvbiBkZWxUb0RvKGwsIGkpIHtcbiAgICBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgIHNhdmVMUyhtYWluTGlzdC5hcnIpO1xufTtcblxuLy8gY2hhbmdlIHRoZSBoeXBoZW5zIHRvIHNsYXNoZXMgaW4gdGhlIGlucHV0IGRhdGVcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUucmVwbGFjZSgvLS9nLCAnLycpOztcbn07XG5cbi8vIHNhbml0aXplIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfDw+W1xcXVxcXFxdL2csICcnKTtcbn07XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbW9kdWxlcy9VSSc7XG4iXSwic291cmNlUm9vdCI6IiJ9