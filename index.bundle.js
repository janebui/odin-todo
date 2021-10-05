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
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(\n  45deg,\n  #ADD9D8,\n  #ADD9D8 10px,\n  #9dcac9 10px,\n  #9dcac9 20px\n  );\n  background-attachment: fixed;\n  margin: 8px;\n}\n\nmain {\n  display: flex;\n\n}\n\n#main-list {\n  display: flex;\n  flex-flow: nowrap;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 1em;\n  text-align: center;\n  \n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn, .del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover, .del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save, #btn-new-list, .show-add, #confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover, .pencil-btn:hover, .del-list-btn:hover, .show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add, #confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .list { \n    margin: 0 0 8px 0;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  main {\n    flex-flow: wrap;\n  }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(\n  45deg,\n  #ADD9D8,\n  #ADD9D8 10px,\n  #9dcac9 10px,\n  #9dcac9 20px\n  );\n  background-attachment: fixed;\n  margin: 8px;\n}\n\nmain {\n  display: flex;\n\n}\n\n#main-list {\n  display: flex;\n  flex-flow: nowrap;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 1em;\n  text-align: center;\n  \n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn, .del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover, .del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save, #btn-new-list, .show-add, #confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover, .pencil-btn:hover, .del-list-btn:hover, .show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add, #confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\n@media only screen and (max-width: 600px) {\n  .list { \n    margin: 0 0 8px 0;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  main {\n    flex-flow: wrap;\n  }\n}"],"sourceRoot":""}]);
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

window.addEventListener('click', (e) => {
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
            window.removeEventListener('click', removeFocus)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hc3NldHMvU1ZHLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLGdJQUFnSTtBQUNoSTtBQUNBLGdEQUFnRCxpQkFBaUIsZ0JBQWdCLEdBQUcsVUFBVSx5Q0FBeUMsbUJBQW1CLHdIQUF3SCxpQ0FBaUMsZ0JBQWdCLEdBQUcsVUFBVSxrQkFBa0IsS0FBSyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixHQUFHLFlBQVksOEJBQThCLHVCQUF1QixlQUFlLGNBQWMsR0FBRyxRQUFRLGdCQUFnQixzQkFBc0IsaUJBQWlCLHVCQUF1QixPQUFPLFFBQVEsY0FBYyxzQkFBc0IsR0FBRyxrQkFBa0IsdUJBQXVCLGtCQUFrQiw2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QVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVB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Q0E7O0FBRUE7QUFDTztBQUNQLG9DQUFvQztBQUNwQzs7QUFFQSx3Qjs7Ozs7O1VDbkdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNOc0IiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1RdWlja3NhbmQ6d2dodEA2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMxMmMyYTtcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXFxuICA0NWRlZyxcXG4gICNBREQ5RDgsXFxuICAjQUREOUQ4IDEwcHgsXFxuICAjOWRjYWM5IDEwcHgsXFxuICAjOWRjYWM5IDIwcHhcXG4gICk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgbWFyZ2luOiA4cHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG5cXG59XFxuXFxuI21haW4tbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBub3dyYXA7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1NDg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDAgMCA4cHggMDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIFxcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHg7XFxufVxcblxcbi5wZW5jaWwtYnRuLCAuZGVsLWxpc3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgZmlsbDogIzc5NzA2YjtcXG4gIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuLnBlbmNpbC1idG46aG92ZXIsIC5kZWwtbGlzdC1idG46aG92ZXIge1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblxcbi5lZGl0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogbm93cmFwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmaWxsLW9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93LWhlYWRlcjpob3ZlciB7XFxuICBmaWxsLW9wYWNpdHk6IDEwMCU7XFxufVxcblxcbiNmb3JtLW5ldy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMzE2cHg7XFxufVxcblxcbi5lZGl0LWxpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LW5hbWUtaW5wdXQsXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0LW5hbWUtaW5wdXQsXFxuI2lucHV0LW5ldy1saXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsICNidG4tbmV3LWxpc3QsIC5zaG93LWFkZCwgI2NvbmZpcm0tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTkzZDY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNidG4tbmV3LWxpc3Q6aG92ZXIsIC5wZW5jaWwtYnRuOmhvdmVyLCAuZGVsLWxpc3QtYnRuOmhvdmVyLCAuc2hvdy1hZGQ6aG92ZXIsXFxuI2NvbmZpcm0tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGQ5ZDY7XFxufVxcblxcbi5lZGl0LWxpc3Qtc2F2ZSxcXG4jYnRuLW5ldy1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcblxcbn1cXG5cXG4ubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyNDksIDI1MiwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogMCA4cHggOHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5saXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvdy1hZGQsICNjb25maXJtLWJ0biB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbHVzLWljb24ge1xcbiAgZmlsbDogI2ZmZjtcXG59XFxuXFxuLnByaW9yaXR5IHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIHBhZGRpbmc6IDFweCA0cHg7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgd2lkdGg6IDI2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5oaWdoIHtcXG4gIGNvbG9yOiAjRTg3ODg4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0U4Nzg4ODtcXG59XFxuXFxuLmxvdyB7XFxuICBjb2xvcjogI2JiOWE2YjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYjlhNmI7XFxufVxcblxcbi5tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cXG4gIHotaW5kZXg6IDE7XFxuICAvKiBTaXQgb24gdG9wICovXFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBGdWxsIHdpZHRoICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBGdWxsIGhlaWdodCAqL1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cXG4gIGNvbG9yOiAjMTE1NDg4O1xcbn1cXG5cXG4vKiBNb2RhbCBDb250ZW50L0JveCAqL1xcbi5tb2RhbC1ib3gge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcXG4gIG1hcmdpbjogMTAlIGF1dG87XFxuICAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHdpZHRoOiA4MHZ3O1xcbiAgLyogQ291bGQgYmUgbW9yZSBvciBsZXNzLCBkZXBlbmRpbmcgb24gc2NyZWVuIHNpemUgKi9cXG4gIG1heC13aWR0aDogNjAwcHg7XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDAgMCAxMHB4O1xcbn1cXG5cXG4uY2xvc2Uge1xcbiAgZmlsbDogIzc5NzA2YjtcXG59XFxuXFxuI2Nsb3NlLWljb246aG92ZXIge1xcbiAgZmlsbDogIzAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2l0ZW0tZm9ybSBpbnB1dCxcXG4jZHVlZGF0ZS1pbnB1dCxcXG50ZXh0YXJlYSB7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjlmYztcXG4gIHBhZGRpbmc6IDZweDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuI2l0ZW0tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI2R1ZWRhdGUtaW5wdXQge1xcbiAgd2lkdGg6IDEyNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubW9kYWwtYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4jY29uZmlybS1idG4sXFxuLmRlbGV0ZSB7XFxuICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuI2NvbmZpcm0tYnRuIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuXFxuI2RlbGV0ZSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFODc4ODg7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuI2RlbGV0ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2UzYzUyO1xcbn1cXG5cXG4ub3ZlcmR1ZSB7XFxuICBjb2xvcjogI2NlM2M1MjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucmItcHJpb3JpdHkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHBhZGRpbmc6IDJweCA4cHggMnB4IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmxpc3QgeyBcXG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XFxuICB9XFxuXFxuICAjbWFpbi1saXN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2Q7Ozs7OztHQU1DO0VBQ0QsNEJBQTRCO0VBQzVCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFVBQVU7RUFDViwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXOztBQUViOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0Usc0JBQXNCO0VBQ3RCLDZDQUE2QztFQUM3QyxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9EQUFvRDtFQUNwRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLG1CQUFtQjtFQUNuQixvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMTJjMmE7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxcbiAgNDVkZWcsXFxuICAjQUREOUQ4LFxcbiAgI0FERDlEOCAxMHB4LFxcbiAgIzlkY2FjOSAxMHB4LFxcbiAgIzlkY2FjOSAyMHB4XFxuICApO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gIG1hcmdpbjogOHB4O1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogbm93cmFwO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExNTQ4ODtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgbWFyZ2luOiAwIDAgOHB4IDA7XFxuICBwYWRkaW5nOiAxZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBcXG59XFxuXFxuaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcbi5saXN0LWhlYWRlciB7XFxuICBtYXJnaW4tYm90dG9tOiAycHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyOHB4O1xcbn1cXG5cXG4ucGVuY2lsLWJ0biwgLmRlbC1saXN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZpbGw6ICM3OTcwNmI7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wZW5jaWwtYnRuOmhvdmVyLCAuZGVsLWxpc3QtYnRuOmhvdmVyIHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZWRpdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IG5vd3JhcDtcXG59XFxuXFxuLnNob3ctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmlsbC1vcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXI6aG92ZXIge1xcbiAgZmlsbC1vcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4jZm9ybS1uZXctbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG4uZWRpdC1saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzNkZDlkNjtcXG59XFxuXFxuLmVkaXQtbGlzdC1zYXZlLCAjYnRuLW5ldy1saXN0LCAuc2hvdy1hZGQsICNjb25maXJtLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5M2Q2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0OmhvdmVyLCAucGVuY2lsLWJ0bjpob3ZlciwgLmRlbC1saXN0LWJ0bjpob3ZlciwgLnNob3ctYWRkOmhvdmVyLFxcbiNjb25maXJtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsXFxuI2J0bi1uZXctbGlzdCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2J0bi1uZXctbGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG5cXG59XFxuXFxuLmxpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjQ5LCAyNTIsIDAuOCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtYXJnaW46IDAgOHB4IDhweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4ubGlzdCBsaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgbWFyZ2luOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNob3ctYWRkLCAjY29uZmlybS1idG4ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIGZpbGw6ICNmZmY7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogI0U4Nzg4ODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFODc4ODg7XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6ICNiYjlhNmI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmI5YTZiO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBjb2xvcjogIzExNTQ4ODtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogODB2dztcXG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZpbGw6ICM3OTcwNmI7XFxufVxcblxcbiNjbG9zZS1pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpdGVtLWZvcm0gaW5wdXQsXFxuI2R1ZWRhdGUtaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2Y5ZmM7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiNpdGVtLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkdWVkYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuI2NvbmZpcm0tYnRuLFxcbi5kZWxldGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbiNjb25maXJtLWJ0biB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNkZWxldGUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg3ODg4O1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNkZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlM2M1MjtcXG59XFxuXFxuLm92ZXJkdWUge1xcbiAgY29sb3I6ICNjZTNjNTI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJiLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAycHggOHB4IDJweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5saXN0IHsgXFxuICAgIG1hcmdpbjogMCAwIDhweCAwO1xcbiAgfVxcblxcbiAgI21haW4tbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuICB9XFxuXFxuICBtYWluIHtcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcbiAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNQYXN0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBwYXN0P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBwYXN0XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogdmFyIHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzUGFzdChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBEYXRlLm5vdygpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNvbnN0IGNsb3NlSWNvbiA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+XG4gICAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiY2xvc2UtaWNvblwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMSA1MTIuMDAxXCIgd2lkdGg9XCIyOHB4XCIgaGVpZ2h0PVwiMjhweFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIuMDAxIDUxMi4wMDE7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgPGc+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTI4NC4yODYsMjU2LjAwMkw1MDYuMTQzLDM0LjE0NGM3LjgxMS03LjgxMSw3LjgxMS0yMC40NzUsMC0yOC4yODVjLTcuODExLTcuODEtMjAuNDc1LTcuODExLTI4LjI4NSwwTDI1NiwyMjcuNzE3XG4gICAgICAgICAgICBMMzQuMTQzLDUuODU5Yy03LjgxMS03LjgxMS0yMC40NzUtNy44MTEtMjguMjg1LDBjLTcuODEsNy44MTEtNy44MTEsMjAuNDc1LDAsMjguMjg1bDIyMS44NTcsMjIxLjg1N0w1Ljg1OCw0NzcuODU5XG4gICAgICAgICAgICBjLTcuODExLDcuODExLTcuODExLDIwLjQ3NSwwLDI4LjI4NWMzLjkwNSwzLjkwNSw5LjAyNCw1Ljg1NywxNC4xNDMsNS44NTdjNS4xMTksMCwxMC4yMzctMS45NTIsMTQuMTQzLTUuODU3TDI1NiwyODQuMjg3XG4gICAgICAgICAgICBsMjIxLjg1NywyMjEuODU3YzMuOTA1LDMuOTA1LDkuMDI0LDUuODU3LDE0LjE0Myw1Ljg1N3MxMC4yMzctMS45NTIsMTQuMTQzLTUuODU3YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NVxuICAgICAgICAgICAgTDI4NC4yODYsMjU2LjAwMnpcIi8+XG4gICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9zcGFuPlxuYDtcblxuZXhwb3J0IGNvbnN0IHBsdXNJY29uID0gYFxuICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGNsYXNzPVwicGx1cy1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcbiAgICB2aWV3Qm94PVwiMCAwIDUwMCA0ODBcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIGhlaWdodD1cIjI0cHhcIiB3aWR0aD1cIjI0cHhcIj5cbiAgICA8Zz5cbiAgICA8cGF0aCBkPVwiTTQ5MiwyMzZIMjc2VjIwYzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwYy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMHYyMTZIMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwczguOTU0LDIwLDIwLDIwaDIxNlxuICAgIHYyMTZjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBWMjc2aDIxNmMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMEM1MTIsMjQ0Ljk1NCw1MDMuMDQ2LDIzNiw0OTIsMjM2elwiLz5cbiAgICA8L2c+XG4gICAgPC9zdmc+XG4gICAgYDtcblxuZXhwb3J0IGNvbnN0IHBlbmNpbEljb24gPSBgXG48c3ZnIGNsYXNzPVwicGVuY2lsLWljb25cIiBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgdmlld0JveD1cIi0xNSAtMTUgNDg0LjAwMDE5IDQ4NFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBkPVwibTQwMS42NDg0MzggMTguMjM0Mzc1Yy0yNC4zOTQ1MzItMjQuMzUxNTYzLTYzLjg5ODQzOC0yNC4zNTE1NjMtODguMjkyOTY5IDBsLTIyLjEwMTU2MyAyMi4yMjI2NTYtMjM1LjI2OTUzMSAyMzUuMTQ0NTMxLS41LjUwMzkwN2MtLjEyMTA5NC4xMjEwOTMtLjEyMTA5NC4yNS0uMjUuMjUtLjI1LjM3NS0uNjI1Ljc0NjA5My0uODcxMDk0IDEuMTIxMDkzIDAgLjEyNS0uMTI4OTA2LjEyNS0uMTI4OTA2LjI1LS4yNS4zNzUtLjM3MTA5NC42MjUtLjYyNSAxLS4xMjEwOTQuMTI1LS4xMjEwOTQuMjQ2MDk0LS4yNDYwOTQuMzc1LS4xMjUuMzc1LS4yNS42MjUtLjM3ODkwNiAxIDAgLjEyMTA5NC0uMTIxMDk0LjEyMTA5NC0uMTIxMDk0LjI1bC01Mi4xOTkyMTkgMTU2Ljk2ODc1Yy0xLjUzMTI1IDQuNDY4NzUtLjM2NzE4NyA5LjQxNzk2OSAyLjk5NjA5NCAxMi43MzQzNzYgMi4zNjMyODIgMi4zMzIwMzEgNS41NTA3ODIgMy42MzY3MTggOC44NjcxODggMy42MjUgMS4zNTU0NjgtLjAyMzQzOCAyLjY5OTIxOC0uMjM0Mzc2IDMuOTk2MDk0LS42MjVsMTU2Ljg0NzY1Ni01Mi4zMjQyMTljLjEyMTA5NCAwIC4xMjEwOTQgMCAuMjUtLjEyMTA5NC4zOTQ1MzEtLjExNzE4Ny43NzM0MzctLjI4NTE1NiAxLjEyMTA5NC0uNTAzOTA2LjA5NzY1Ni0uMDExNzE5LjE4MzU5My0uMDU0Njg4LjI1MzkwNi0uMTIxMDk0LjM3MTA5NC0uMjUuODcxMDk0LS41MDM5MDYgMS4yNDYwOTQtLjc1MzkwNi4zNzEwOTMtLjI0NjA5NC43NS0uNjIxMDk0IDEuMTI1LS44NzEwOTQuMTI1LS4xMjg5MDYuMjQ2MDkzLS4xMjg5MDYuMjQ2MDkzLS4yNS4xMjg5MDctLjEyNS4zNzg5MDctLjI0NjA5NC41MDM5MDctLjVsMjU3LjM3MTA5My0yNTcuMzcxMDk0YzI0LjM1MTU2My0yNC4zOTQ1MzEgMjQuMzUxNTYzLTYzLjg5ODQzNyAwLTg4LjI4OTA2MnptLTIzMi4yNzM0MzggMzUzLjE0ODQzNy04Ni45MTQwNjItODYuOTEwMTU2IDIxNy41MzUxNTYtMjE3LjUzNTE1NiA4Ni45MTQwNjIgODYuOTEwMTU2em0tOTkuMTU2MjUtNjMuODA4NTkzIDc1LjkyOTY4OCA3NS45MjU3ODEtMTE0LjAxNTYyNiAzNy45NjA5Mzh6bTM0Ny42NjQwNjItMTg0LjgyMDMxMy0xMy4yMzgyODEgMTMuMzYzMjgyLTg2LjkxNzk2OS04Ni45MTc5NjkgMTMuMzY3MTg4LTEzLjM1OTM3NWMxNC42MjEwOTQtMTQuNjA5Mzc1IDM4LjMyMDMxMi0xNC42MDkzNzUgNTIuOTQ1MzEyIDBsMzMuOTY0ODQ0IDMzLjk2NDg0NGMxNC41MTE3MTkgMTQuNjg3NSAxNC40NTcwMzIgMzguMzMyMDMxLS4xMjEwOTQgNTIuOTQ5MjE4em0wIDBcIi8+PC9zdmc+YDtcblxuZXhwb3J0IGNvbnN0IHRyYXNoSWNvbiA9IGBcbjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCIyMHB4XCIgd2lkdGg9XCIyMHB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PGc+PHBhdGggZD1cIm00MjQgNjRoLTg4di0xNmMwLTI2LjQ2Ny0yMS41MzMtNDgtNDgtNDhoLTY0Yy0yNi40NjcgMC00OCAyMS41MzMtNDggNDh2MTZoLTg4Yy0yMi4wNTYgMC00MCAxNy45NDQtNDAgNDB2NTZjMCA4LjgzNiA3LjE2NCAxNiAxNiAxNmg4Ljc0NGwxMy44MjMgMjkwLjI4M2MxLjIyMSAyNS42MzYgMjIuMjgxIDQ1LjcxNyA0Ny45NDUgNDUuNzE3aDI0Mi45NzZjMjUuNjY1IDAgNDYuNzI1LTIwLjA4MSA0Ny45NDUtNDUuNzE3bDEzLjgyMy0yOTAuMjgzaDguNzQ0YzguODM2IDAgMTYtNy4xNjQgMTYtMTZ2LTU2YzAtMjIuMDU2LTE3Ljk0NC00MC00MC00MHptLTIxNi0xNmMwLTguODIyIDcuMTc4LTE2IDE2LTE2aDY0YzguODIyIDAgMTYgNy4xNzggMTYgMTZ2MTZoLTk2em0tMTI4IDU2YzAtNC40MTEgMy41ODktOCA4LThoMzM2YzQuNDExIDAgOCAzLjU4OSA4IDh2NDBjLTQuOTMxIDAtMzMxLjU2NyAwLTM1MiAwem0zMTMuNDY5IDM2MC43NjFjLS40MDcgOC41NDUtNy40MjcgMTUuMjM5LTE1Ljk4MSAxNS4yMzloLTI0Mi45NzZjLTguNTU1IDAtMTUuNTc1LTYuNjk0LTE1Ljk4MS0xNS4yMzlsLTEzLjc1MS0yODguNzYxaDMwMi40NHpcIi8+PHBhdGggZD1cIm0yNTYgNDQ4YzguODM2IDAgMTYtNy4xNjQgMTYtMTZ2LTIwOGMwLTguODM2LTcuMTY0LTE2LTE2LTE2cy0xNiA3LjE2NC0xNiAxNnYyMDhjMCA4LjgzNiA3LjE2MyAxNiAxNiAxNnpcIi8+PHBhdGggZD1cIm0zMzYgNDQ4YzguODM2IDAgMTYtNy4xNjQgMTYtMTZ2LTIwOGMwLTguODM2LTcuMTY0LTE2LTE2LTE2cy0xNiA3LjE2NC0xNiAxNnYyMDhjMCA4LjgzNiA3LjE2MyAxNiAxNiAxNnpcIi8+PHBhdGggZD1cIm0xNzYgNDQ4YzguODM2IDAgMTYtNy4xNjQgMTYtMTZ2LTIwOGMwLTguODM2LTcuMTY0LTE2LTE2LTE2cy0xNiA3LjE2NC0xNiAxNnYyMDhjMCA4LjgzNiA3LjE2MyAxNiAxNiAxNnpcIi8+PC9nPjwvc3ZnPlxuYCIsImltcG9ydCB7XG4gICAgbWFpbkxpc3QsXG4gICAgTGlzdCxcbiAgICBhZGRUb0RvLFxuICAgIGVkaXRUb0RvLFxuICAgIGRlbFRvRG8sXG4gICAgc2FuaXRpemUsXG4gICAgcmVwbGFjZURhdGUsXG59IGZyb20gJy4vbWFpbic7XG5cbmltcG9ydCBpc1Bhc3QgZnJvbSAnZGF0ZS1mbnMvaXNQYXN0JztcblxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGUuY3NzJztcblxuaW1wb3J0IHtcbiAgICBjbG9zZUljb24sXG4gICAgcGVuY2lsSWNvbixcbiAgICBwbHVzSWNvbixcbiAgICB0cmFzaEljb24sXG59IGZyb20gJy4uL2Fzc2V0cy9TVkcnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5ib2R5LmlubmVySFRNTCA9IGBcbjxoZWFkZXI+PGgxPlRyZW1vbGxvPC9oMT48L2hlYWRlcj5cbjxtYWluPlxuICAgIDxkaXYgaWQ9XCJtYWluLWxpc3RcIj5cbiAgICA8L2Rpdj5cbiAgICA8Zm9ybSBpZD1cImZvcm0tbmV3LWxpc3RcIj5cbiAgICA8aW5wdXQgaWQ9XCJpbnB1dC1uZXctbGlzdFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ+XG4gICAgPGJ1dHRvbiBpZD1cImJ0bi1uZXctbGlzdFwiPisgTmV3PC9idXR0b24+XG4gICAgPC9mb3JtPlxuPC9tYWluPlxuYDtcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWxpc3QnKTtcblxuLy8gbW9kYWwgc3R1ZmZcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XG5tb2RhbC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwibW9kYWwtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPjxoMiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+PC9oMj4ke2Nsb3NlSWNvbn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuPC9kaXY+XG5gO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59KVxuXG5cbi8vIGRpc3BsYXkgdGhlIG1haW4gbGlzdCBvZiBsaXN0c1xuZnVuY3Rpb24gZGlzcGxheU1haW5MaXN0KCkge1xuXG4gICAgbWFpbkRpdi5pbm5lckhUTUwgPSBgXG4gICAgJHttYWluTGlzdC5hcnIubWFwKChpdGVtLCBpKSA9PiBgPGRpdiBjbGFzcz1cImxpc3RcIiBkYXRhLWxpc3Q9XCIke2l9XCI+YCArXG4gICAgICAgIGRpc3BsYXlMaXN0KGl0ZW0sIGkpICsgYDwvZGl2PmBcbiAgICAgICAgKS5qb2luKCcnKX1cbiAgICAgICAgYDtcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xufTtcblxuXG4vLyBkaXNwbGF5IGFuIGluZGl2aWR1YWwgdG9kbyBsaXN0XG5mdW5jdGlvbiBkaXNwbGF5TGlzdChsaXN0KSB7XG4gICAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC1oZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNob3ctaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDM+JHtsaXN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlZGl0LWJ0bnNcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwZW5jaWwtYnRuXCI+JHtwZW5jaWxJY29ufTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbC1saXN0LWJ0blwiPiR7dHJhc2hJY29ufTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImVkaXQtbGlzdC1oZWFkZXJcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZWRpdC1uYW1lLWlucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cIiR7bGlzdC5uYW1lfVwiIGF1dG9mb2N1cyBvbmZvY3VzPVwidmFyIHRlbXBfdmFsdWU9dGhpcy52YWx1ZTsgdGhpcy52YWx1ZT0nJzsgdGhpcy52YWx1ZT10ZW1wX3ZhbHVlXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImVkaXQtbGlzdC1zYXZlXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG5cbiAgICA8dWw+YCArXG4gICAgICAgIGxpc3QudG9kb0xpc3QubWFwKChpdGVtLCBpKSA9PlxuICAgICAgICAgICAgYDxsaSBjbGFzcz1cIml0ZW1cIiBkYXRhLWl0ZW09XCIke2l9XCI+XG4gICAgICAgICAgICAke2l0ZW0udGl0bGV9IDxzcGFuIGNsYXNzPVwicHJpb3JpdHkgJHtpdGVtLnByaW9yaXR5fVwiPiR7aXRlbS5wcmlvcml0eX08L3NwYW4+XG4gICAgICAgICAgICA8L2xpPmBcbiAgICAgICAgKS5qb2luKCcnKSArXG4gICAgICAgIGA8L3VsPlxuICAgIDxidXR0b24gY2xhc3M9XCJzaG93LWFkZFwiPlxuICAgICAgICAke3BsdXNJY29ufVxuICAgIDwvYnV0dG9uPlxuICAgIGA7XG59O1xuXG5cbi8vIGFkZCBFdmVudCBMaXN0ZW5lcnMgdG8gbGlzdCBidXR0b25zXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybS1uZXctbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZE5ld0xpc3QpO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlbC1saXN0LWJ0bicpLmZvckVhY2goKGRlbCwgaSkgPT4ge1xuICAgICAgICBkZWwubnVtYmVyID0gaTtcbiAgICAgICAgZGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlTGlzdCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGVuY2lsLWJ0bicpLmZvckVhY2goKHBlbiwgaSkgPT4ge1xuICAgICAgICBwZW4ubnVtYmVyID0gaTtcbiAgICAgICAgcGVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdExpc3ROYW1lKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lZGl0LWxpc3QtaGVhZGVyJykuZm9yRWFjaCgoZm9ybSwgaSkgPT4ge1xuICAgICAgICBmb3JtLm51bWJlciA9IGk7XG4gICAgICAgIGZvcm0ubmFtZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXRMaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1hZGQnKS5mb3JFYWNoKChidG4sIGkpID0+IHtcbiAgICAgICAgYnRuLm51bWJlciA9IGk7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld0l0ZW0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0SXRlbSk7XG4gICAgfSk7XG59O1xuXG5cbi8vIGNyZWF0ZSBhIG5ldyBsaXN0IHVzaW5nIHRoZSB1c2VyJ3MgaW5wdXRcbmZ1bmN0aW9uIGFkZE5ld0xpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IG5ld0xpc3ROYW1lID0gc2FuaXRpemUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0LW5ldy1saXN0JykudmFsdWUpO1xuICAgIG1haW5MaXN0LmFkZChMaXN0KG5ld0xpc3ROYW1lKSk7XG5cbiAgICBkaXNwbGF5TWFpbkxpc3QoKTtcblxuICAgIHRoaXMucmVzZXQoKTtcbn07XG5cblxuLy8gd2hlbiB1c2VyIGNsaWNrcyBvbiBwZW5jaWwgYnV0dG9uIHRvIGVkaXQgbGlzdCBuYW1lLCBjaGFuZ2UgdG8gZWRpdCBtb2RlIGRpc3BsYXlcbmZ1bmN0aW9uIGVkaXRMaXN0TmFtZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgZWRpdE1vZGUgPSB0cnVlO1xuXG4gICAgbGV0IHBlbiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBsZXQgc2hvd0hlYWRlciA9IHBlbi5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgbGV0IGVkaXRMaXN0SGVhZGVyID0gc2hvd0hlYWRlci5wYXJlbnROb2RlLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgbGV0IGVkaXROYW1lSW5wdXQgPSBlZGl0TGlzdEhlYWRlci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuXG4gICAgaWYgKGVkaXRNb2RlKSB7XG4gICAgICAgIHNob3dIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZWRpdExpc3RIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgZWRpdE5hbWVJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSBmb2N1cyBmcm9tIGlucHV0IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG91dHNpZGUgdGhlIGlucHV0XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHJlbW92ZUZvY3VzKTtcblxuICAgIGZ1bmN0aW9uIHJlbW92ZUZvY3VzKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZS50YXJnZXQgIT0gZWRpdE5hbWVJbnB1dCkge1xuICAgICAgICAgICAgZWRpdE1vZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNob3dIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIGVkaXRMaXN0SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVGb2N1cylcbiAgICAgICAgfVxuICAgIH07XG59O1xuXG5cbi8vIHdoZW4gdXNlciBjaGFuZ2VzIGEgbGlzdCdzIG5hbWUsIHVwZGF0ZSBtYWluIGFycmF5IGFuZCB1cGRhdGUgZGlzcGxheVxuZnVuY3Rpb24gc3VibWl0TGlzdE5hbWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IG9sZE5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGxldCBuZXdOYW1lID0gZS50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcblxuICAgIGlmIChuZXdOYW1lICE9IG9sZE5hbWUpIHtcbiAgICAgICAgbWFpbkxpc3QuZWRpdE5hbWUoZS50YXJnZXQubnVtYmVyLCBuZXdOYW1lKTtcbiAgICAgICAgZGlzcGxheU1haW5MaXN0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG59O1xuXG5cbi8vIGRlbGV0ZSBhIGxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUxpc3QoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGRlbFRhcmdldCA9IGUuY3VycmVudFRhcmdldC5udW1iZXI7XG5cbiAgICBtYWluTGlzdC5kZWwoZGVsVGFyZ2V0KTtcbiAgICBkaXNwbGF5TWFpbkxpc3QoKTtcbn07XG5cblxuLy8gY3JlYXRlIGEgbmV3IGl0ZW0gaW5zaWRlIGEgbGlzdFxuZnVuY3Rpb24gYWRkTmV3SXRlbShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBjb25zdCBsID0gZS5jdXJyZW50VGFyZ2V0Lm51bWJlcjtcblxuICAgIGRpc3BsYXlGb3JtKCcnLCAnJywgJycsICcnLCBcIkFkZCBhIE5ldyBJdGVtXCIpO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1mb3JtJyk7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBncmFiIHRoZSBmb3JtIHZhbHVlcyBhbmQgcmV0dXJuIGEgbmV3IHRvLWRvIGl0ZW1cbiAgICAgICAgbGV0IG5ld1RvRG8gPSBwcm9jZXNzRm9ybShmb3JtKTtcblxuICAgICAgICBhZGRUb0RvKGwsIG5ld1RvRG8pO1xuXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRpc3BsYXlNYWluTGlzdCgpO1xuICAgIH0pO1xufTtcblxuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIG9uIGFuIGl0ZW0gb3IgdGhlIGVkaXQgaXRlbSBidXR0b24sIGRpc3BsYXkgbW9kYWxcbmZ1bmN0aW9uIGVkaXRJdGVtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGwgPSBlLmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmRhdGFzZXQubGlzdDtcbiAgICBsZXQgaSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgbGV0IGl0ZW0gPSBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3RbaV07XG5cbiAgICAvLyBkaXNwbGF5IHRoZSBlZGl0IGZvcm0gd2l0aCB0aGUgdmFsdWVzIHByZS1maWxsZWRcbiAgICBkaXNwbGF5Rm9ybShpdGVtLnRpdGxlLCBpdGVtLmRlc2NyaXB0aW9uLCBpdGVtLmR1ZURhdGUsIGl0ZW0ucHJpb3JpdHksIFwiRWRpdCBJdGVtXCIpO1xuXG4gICAgLy8gd2hlbiB1c2VyIGVkaXRzIHRoZSBpdGVtLCB1cGRhdGUgdGhlIGRpc3BsYXkgYW5kIG1haW4gbGlzdFxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXRlbS1mb3JtJyk7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gZ3JhYiB0aGUgZm9ybSB2YWx1ZXMgYW5kIHJldHVybiB0aGUgZWRpdGVkIHRvZG8gaXRlbVxuICAgICAgICBsZXQgbmV3VG9EbyA9IHByb2Nlc3NGb3JtKGZvcm0pO1xuXG4gICAgICAgIGVkaXRUb0RvKGwsIGksIG5ld1RvRG8pO1xuXG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRpc3BsYXlNYWluTGlzdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gY3JlYXRlIGEgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IG1vZGFsQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1idXR0b25zJylcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGUnKTtcbiAgICBkZWxCdG4uaW5uZXJIVE1MID0gdHJhc2hJY29uO1xuICAgIG1vZGFsQnV0dG9ucy5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICAgIGRlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUl0ZW0sIGZhbHNlKTtcbiAgICBkZWxCdG4uaXRlbSA9IFtsLCBpXTsgLy8gYWRkIHByb3RvdHlwZSBzbyBsb2NhdGlvbiBvZiBpdGVtIGNhbiBiZSBhY2Nlc3NlZCBieSBkZWxldGVJdGVtXG59O1xuXG4vLyB3aGVuIHVzZXIgY2xpY2tzIGRlbGV0ZSBidXR0b24sIGRlbGV0ZSBmcm9tIGRpc3BsYXkgYW5kIG1haW5MaXN0XG5mdW5jdGlvbiBkZWxldGVJdGVtKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBsID0gZS5jdXJyZW50VGFyZ2V0Lml0ZW1bMF07XG4gICAgbGV0IGkgPSBlLmN1cnJlbnRUYXJnZXQuaXRlbVsxXTtcblxuICAgIGRlbFRvRG8obCwgaSk7XG5cbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRpc3BsYXlNYWluTGlzdCgpO1xufTtcblxuXG4vLyBkaXNwbGF5IHRoZSBtb2RhbCB3aXRoIHRoZSBmb3JtIGluc2lkZVxuZnVuY3Rpb24gZGlzcGxheUZvcm0odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaGVhZGVyKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtdGl0bGUnKS5pbm5lckhUTUwgPSBoZWFkZXI7XG5cbiAgICBtb2RhbENvbnRlbnQuaW5uZXJIVE1MID0gYFxuICAgIDxmb3JtIGlkPVwiaXRlbS1mb3JtXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBuYW1lPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHt0aXRsZX1cIiByZXF1aXJlZCAvPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiZGVzY3JpcHRpb25cIiB0eXBlPVwidGV4dFwiPiR7ZGVzY3JpcHRpb259PC90ZXh0YXJlYT5cblxuICAgICAgICA8bGFiZWwgZm9yPVwiZHVlZGF0ZS1pbnB1dFwiIGlkPVwiZHVlZGF0ZS1sYWJlbFwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImR1ZWRhdGUtaW5wdXRcIiBuYW1lPVwiZHVlZGF0ZVwiIHR5cGU9XCJkYXRlXCIgdmFsdWU9XCIke2R1ZURhdGV9XCIgLz5cblxuICAgICAgICA8ZGl2IGlkPVwicmFkaW8tYnRuc1wiPlxuICAgICAgICBQcmlvcml0eTpcbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmItcHJpb3JpdHlcIj48aW5wdXQgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJsb3dcIiBcbiAgICAgICAgJHtwcmlvcml0eSA9PSAnbG93JyA/ICdjaGVja2VkJzonJ30gLz5Mb3c8L2xhYmVsPlxuXG4gICAgICAgIDxsYWJlbCBjbGFzcz1cInJiLXByaW9yaXR5XCI+PGlucHV0IG5hbWU9XCJwcmlvcml0eVwiIHR5cGU9XCJyYWRpb1wiIHZhbHVlPVwiaGlnaFwiIFxuICAgICAgICAke3ByaW9yaXR5ID09ICdoaWdoJyA/ICdjaGVja2VkJzonJ30gLz5IaWdoPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1idXR0b25zXCI+XG4gICAgICAgIDxidXR0b24gaWQ9XCJjb25maXJtLWJ0blwiIGZvcm09XCJpdGVtLWZvcm1cIj5Db25maXJtPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGlmIChkdWVEYXRlKSB7XG4gICAgICAgIGxldCBkYXRlT2JqID0gbmV3IERhdGUocmVwbGFjZURhdGUoZHVlRGF0ZSkpO1xuICAgICAgICBpZiAoaXNQYXN0KGRhdGVPYmopKSB7XG4gICAgICAgICAgICBjb25zdCBkdWVkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZWRhdGUtbGFiZWwnKTtcbiAgICAgICAgICAgIGR1ZWRhdGUudGV4dENvbnRlbnQgPSBcIk9WRVJEVUVcIjtcbiAgICAgICAgICAgIGR1ZWRhdGUuY2xhc3NMaXN0LmFkZCgnb3ZlcmR1ZScpO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbi8vIGdyYWIgdGhlIHVzZXIgaW5wdXRzIGZyb20gdGhlIGZvcm1cbmZ1bmN0aW9uIHByb2Nlc3NGb3JtKGZvcm0pIHtcbiAgICBsZXQgcHJpb3JpdHkgPSAnJztcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXScpLmZvckVhY2goZnVuY3Rpb24gKHJiKSB7XG4gICAgICAgIGlmIChyYi5jaGVja2VkKSB7XG4gICAgICAgICAgICBwcmlvcml0eSA9IHJiLnZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsZXQgZGF0ZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImR1ZWRhdGVcIl0nKS52YWx1ZTtcblxuICAgIGxldCBuZXdUb0RvID0ge1xuICAgICAgICB0aXRsZTogc2FuaXRpemUoZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSksXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzYW5pdGl6ZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhW25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlKSxcbiAgICAgICAgZHVlRGF0ZTogZGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5XG4gICAgfTtcbiAgICByZXR1cm4gbmV3VG9Ebztcbn07XG5cblxuZGlzcGxheU1haW5MaXN0KCk7IiwiLy8gc2F2ZSB0aGUgd29ya2luZyBNYWluIExpc3QgYXJyYXkgdG8gbG9jYWwgc3RvcmFnZSBhcyBhIHN0cmluZ1xuZnVuY3Rpb24gc2F2ZUxTKGFycikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGFycikpO1xufTtcblxuLy8gbW9kdWxlIG9mIHRoZSBtYWluIGxpc3Qgb2YgbGlzdHNcbmV4cG9ydCBjb25zdCBtYWluTGlzdCA9ICgoKSA9PiB7XG4gICAgLy8gZ3JhYiBkYXRhIGZyb20gbG9jYWwgc3RvcmFnZS4gaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBpbml0aWFsaXplIHcvIHNhbXBsZSBkYXRhXG4gICAgbGV0IGFyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpIHx8IFxuICAgICAgICBbIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNb25kYXknLFxuICAgICAgICAgICAgICAgIHRvZG9MaXN0OiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRmVlZCB0aGUgQ2F0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRmlzaCBUYWNvcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMS0xMi0yMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogJ2hpZ2gnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnR28gdG8gV29yaycsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvb2sgQWxpdmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogJzIwMjEtMTItMjAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHk6ICcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICBmdW5jdGlvbiBhZGQobGlzdCkge1xuICAgICAgICBhcnIucHVzaChsaXN0KTtcbiAgICAgICAgc2F2ZUxTKGFycik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGVkaXROYW1lKGksIG5ld05hbWUpIHtcbiAgICAgICAgYXJyW2ldLm5hbWUgPSBuZXdOYW1lO1xuICAgICAgICBzYXZlTFMoYXJyKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGVsKGkpIHtcbiAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgc2F2ZUxTKGFycik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFycixcbiAgICAgICAgZWRpdE5hbWUsXG4gICAgICAgIGFkZCxcbiAgICAgICAgZGVsXG4gICAgfTtcbn0pKCk7XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIGxpc3RcbmV4cG9ydCBjb25zdCBMaXN0ID0gKG5hbWUpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHRvZG9MaXN0XG4gICAgfTtcbn07XG5cbi8vIGZhY3RvcnkgZnVuY3Rpb24gZm9yIHRvLWRvIGl0ZW1zLiBBdCBhIG1pbmltdW0gdGhleSBzaG91bGQgaGF2ZSBhIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSBhbmQgcHJpb3JpdHkuIFlvdSBtaWdodCBhbHNvIHdhbnQgdG8gaW5jbHVkZSBub3RlcyBvciBldmVuIGEgY2hlY2tsaXN0LlxuZXhwb3J0IGNvbnN0IFRvRG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHlcbiAgICB9O1xufTtcblxuLy8gYWRkIGEgbmV3IHRvLWRvIGl0ZW0gdG8gdGhlIGxpc3RcbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKGwsIHRvZG8pIHtcbiAgICBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICBzYXZlTFMobWFpbkxpc3QuYXJyKTtcbn07XG5cbi8vIGVkaXQgYW4gZXhpc3RpbmcgaXRlbSBpIGZyb20gbGlzdCBsXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvRG8obCwgaSwgbmV3T2JqKSB7XG4gICAgT2JqZWN0LmFzc2lnbihtYWluTGlzdC5hcnJbbF0udG9kb0xpc3RbaV0sIG5ld09iaik7XG4gICAgc2F2ZUxTKG1haW5MaXN0LmFycik7XG59O1xuXG4vLyBkZWxldGUgdG9kbyBpdGVtIGkgZnJvbSBsaXN0IGxcbmV4cG9ydCBmdW5jdGlvbiBkZWxUb0RvKGwsIGkpIHtcbiAgICBtYWluTGlzdC5hcnJbbF0udG9kb0xpc3Quc3BsaWNlKGksIDEpO1xuICAgIHNhdmVMUyhtYWluTGlzdC5hcnIpO1xufTtcblxuLy8gY2hhbmdlIHRoZSBoeXBoZW5zIHRvIHNsYXNoZXMgaW4gdGhlIGlucHV0IGRhdGVcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUucmVwbGFjZSgvLS9nLCAnLycpOztcbn07XG5cbi8vIHNhbml0aXplIHVzZXIgaW5wdXRcbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1suKis/XiR7fSgpfDw+W1xcXVxcXFxdL2csICcnKTtcbn07XG5cbi8vIGxvY2FsU3RvcmFnZS5jbGVhcigpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vbW9kdWxlcy9VSSc7XG4iXSwic291cmNlUm9vdCI6IiJ9