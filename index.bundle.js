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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lobster&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(45deg,\n      #ADD9D8,\n      #ADD9D8 10px,\n      #9dcac9 10px,\n      #9dcac9 20px);\n  background-attachment: fixed;\n}\n\nmain {\n  display: flex;\n}\n\n#main-list {\n  display: flex;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 0.5em;\n  text-align: center;\n  font-family: 'Lobster', cursive;\n  font-size: 3em;\n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn,\n.del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover,\n.del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list,\n.show-add,\n#confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover,\n.pencil-btn:hover,\n.del-list-btn:hover,\n.show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n  margin-right: 8px;\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add,\n#confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  margin: 2em 0;\n  color: #22394b;\n}\n\na:link {\n  color: #115488;\n}\n\na:hover {\n  text-decoration: none;\n  background-color: #3dd9d6;\n}\n\n@media only screen and (max-width: 600px) {\n  main {\n    flex-flow: wrap;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  .list {\n    margin: 0 0 8px 0;\n    width: 100%;\n  }\n\n  #btn-new-list {\n    margin-right: 0;\n  }\n}", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap');\n@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  font-family: 'Quicksand', sans-serif;\n  color: #312c2a;\n  background: repeating-linear-gradient(45deg,\n      #ADD9D8,\n      #ADD9D8 10px,\n      #9dcac9 10px,\n      #9dcac9 20px);\n  background-attachment: fixed;\n}\n\nmain {\n  display: flex;\n}\n\n#main-list {\n  display: flex;\n}\n\nheader {\n  background-color: #115488;\n  border-radius: 5px;\n  padding: 0;\n  margin: 0;\n}\n\nh1 {\n  color: #fff;\n  margin: 0 0 8px 0;\n  padding: 0.5em;\n  text-align: center;\n  font-family: 'Lobster', cursive;\n  font-size: 3em;\n}\n\nh3 {\n  margin: 0;\n  padding-left: 5px;\n}\n\n.list-header {\n  margin-bottom: 2px;\n  display: grid;\n  grid-template-rows: 28px;\n}\n\n.pencil-btn,\n.del-list-btn {\n  background-color: transparent;\n  fill: #79706b;\n  padding: 2px;\n}\n\n.pencil-btn:hover,\n.del-list-btn:hover {\n  fill: black;\n}\n\n.edit-btns {\n  display: flex;\n  flex-flow: nowrap;\n}\n\n.show-header {\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n  justify-content: space-between;\n  fill-opacity: 0;\n}\n\n.show-header:hover {\n  fill-opacity: 100%;\n}\n\n#form-new-list {\n  display: flex;\n  height: 40px;\n  width: 316px;\n}\n\n.edit-list-header {\n  display: none;\n}\n\n.edit-name-input,\n#input-new-list {\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  flex-grow: 1;\n  border-radius: 5px 0 0 5px;\n  border: 0;\n  padding: 8px;\n  min-width: 100px;\n}\n\n#input-new-list {\n  width: 100%;\n}\n\n.edit-name-input,\n#input-new-list:focus {\n  outline: 0;\n  box-shadow: 0 0 1px 1px #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list,\n.show-add,\n#confirm-btn {\n  background-color: #2a93d6;\n  text-align: center;\n}\n\n#btn-new-list:hover,\n.pencil-btn:hover,\n.del-list-btn:hover,\n.show-add:hover,\n#confirm-btn:hover {\n  background-color: #3dd9d6;\n}\n\n.edit-list-save,\n#btn-new-list {\n  border-radius: 0 5px 5px 0;\n  padding: 8px;\n  font-family: 'Quicksand', sans-serif;\n}\n\n#btn-new-list {\n  height: 40px;\n  width: 80px;\n  margin-right: 8px;\n}\n\n.list {\n  background-color: rgb(236, 249, 252, 0.8);\n  border-radius: 5px;\n  padding: 8px;\n  margin: 0 8px 8px 0;\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n}\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  flex-grow: 1;\n}\n\n.list li {\n  background-color: #fff;\n  padding: 5px;\n  margin: 5px 0;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n}\n\nbutton {\n  border: none;\n  border-radius: 5px;\n  color: #fff;\n  cursor: pointer;\n}\n\n.show-add,\n#confirm-btn {\n  width: 40px;\n  height: 40px;\n  align-self: flex-end;\n  justify-self: end;\n  justify-content: center;\n  align-items: center;\n}\n\n.plus-icon {\n  fill: #fff;\n}\n\n.priority {\n  border-radius: 3px;\n  padding: 1px 4px;\n  font-size: 0.8em;\n  width: 26px;\n  text-align: center;\n}\n\n.high {\n  color: #E87888;\n  border: 1px solid #E87888;\n}\n\n.low {\n  color: #bb9a6b;\n  border: 1px solid #bb9a6b;\n}\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: rgb(0, 0, 0);\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */\n  color: #115488;\n}\n\n/* Modal Content/Box */\n.modal-box {\n  background-color: #fff;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, .2);\n  margin: 10% auto;\n  /* 15% from the top and centered */\n  padding: 16px;\n  border-radius: 2px;\n  width: 80vw;\n  /* Could be more or less, depending on screen size */\n  max-width: 600px;\n}\n\n.modal-content {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.modal-title {\n  padding: 0;\n  margin: 0 0 10px;\n}\n\n.close {\n  fill: #79706b;\n}\n\n#close-icon:hover {\n  fill: #000;\n  cursor: pointer;\n}\n\n#item-form input,\n#duedate-input,\ntextarea {\n  margin-bottom: 20px;\n  font-family: 'Quicksand', sans-serif;\n  font-size: 1em;\n  border: 1px solid #bdbdbd;\n  border-radius: 5px;\n  background-color: #ecf9fc;\n  padding: 6px;\n}\n\ntextarea {\n  resize: none;\n  font-size: 0.9em;\n}\n\n#item-form {\n  display: flex;\n  flex-direction: column;\n}\n\n#duedate-input {\n  width: 125px;\n  cursor: pointer;\n}\n\n.modal-buttons {\n  display: flex;\n  justify-content: space-between;\n  height: 40px;\n}\n\n#confirm-btn,\n.delete {\n  font-size: 1em;\n}\n\n#confirm-btn {\n  width: 160px;\n}\n\n#delete {\n  width: 40px;\n  background-color: #E87888;\n  fill: white;\n}\n\n#delete:hover {\n  background-color: #ce3c52;\n}\n\n.overdue {\n  color: #ce3c52;\n  font-weight: bold;\n}\n\n.rb-priority {\n  border: 1px solid grey;\n  border-radius: 2px;\n  padding: 2px 8px 2px 2px;\n  cursor: pointer;\n}\n\nfooter {\n  display: flex;\n  justify-content: center;\n  margin: 2em 0;\n  color: #22394b;\n}\n\na:link {\n  color: #115488;\n}\n\na:hover {\n  text-decoration: none;\n  background-color: #3dd9d6;\n}\n\n@media only screen and (max-width: 600px) {\n  main {\n    flex-flow: wrap;\n  }\n\n  #main-list {\n    width: 100%;\n    flex-flow: wrap;\n  }\n\n  .list {\n    margin: 0 0 8px 0;\n    width: 100%;\n  }\n\n  #btn-new-list {\n    margin-right: 0;\n  }\n}"],"sourceRoot":""}]);
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
<header><h1>tremollo</h1></header>
<main>
    <div id="main-list">
    </div>
    <form id="form-new-list">
    <input id="input-new-list" type="text" required>
    <button id="btn-new-list">+ New</button>
    </form>
</main>
<footer>by&nbsp;<a href="https://www.janebui.com" target="_blank">Jane Bui</a>&nbsp;|&nbsp;<a href="https://github.com/janebui/tremollo" target="_blank">Github Repo</a></footer>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1Bhc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3M/NjAxZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9hc3NldHMvU1ZHLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9tb2R1bGVzL21haW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLGdJQUFnSTtBQUNoSSxxSEFBcUg7QUFDckg7QUFDQSxnREFBZ0QsaUJBQWlCLGdCQUFnQixHQUFHLFVBQVUseUNBQXlDLG1CQUFtQixnSUFBZ0ksaUNBQWlDLEdBQUcsVUFBVSxrQkFBa0IsR0FBRyxnQkFBZ0Isa0JBQWtCLEdBQUcsWUFBWSw4QkFBOEIsdUJBQXVCLGVBQWUsY0FBYyxHQUFHLFFBQVEsZ0JBQWdCLHNCQUFzQixtQkFBbUIsdUJBQXVCLG9DQUFvQyxtQkFBbUIsR0FBRyxRQUFRLGNBQWMsc0JBQXNCLEdBQUcsa0JBQWtCLHVC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QU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLE9BQU8sU0FBUyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlB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QUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1Asb0NBQW9DO0FBQ3BDOztBQUVBLHdCOzs7Ozs7VUNuR0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05zQiIsImZpbGUiOiJpbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMzMTJjMmE7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDQ1ZGVnLFxcbiAgICAgICNBREQ5RDgsXFxuICAgICAgI0FERDlEOCAxMHB4LFxcbiAgICAgICM5ZGNhYzkgMTBweCxcXG4gICAgICAjOWRjYWM5IDIwcHgpO1xcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jbWFpbi1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTE1NDg4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuaDEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW46IDAgMCA4cHggMDtcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdMb2JzdGVyJywgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogM2VtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuLmxpc3QtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDJweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDI4cHg7XFxufVxcblxcbi5wZW5jaWwtYnRuLFxcbi5kZWwtbGlzdC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBmaWxsOiAjNzk3MDZiO1xcbiAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4ucGVuY2lsLWJ0bjpob3ZlcixcXG4uZGVsLWxpc3QtYnRuOmhvdmVyIHtcXG4gIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG4uZWRpdC1idG5zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IG5vd3JhcDtcXG59XFxuXFxuLnNob3ctaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1ncm93OiAxO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZmlsbC1vcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXI6aG92ZXIge1xcbiAgZmlsbC1vcGFjaXR5OiAxMDAlO1xcbn1cXG5cXG4jZm9ybS1uZXctbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDMxNnB4O1xcbn1cXG5cXG4uZWRpdC1saXN0LWhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdCB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWluLXdpZHRoOiAxMDBweDtcXG59XFxuXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZWRpdC1uYW1lLWlucHV0LFxcbiNpbnB1dC1uZXctbGlzdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDFweCAxcHggIzNkZDlkNjtcXG59XFxuXFxuLmVkaXQtbGlzdC1zYXZlLFxcbiNidG4tbmV3LWxpc3QsXFxuLnNob3ctYWRkLFxcbiNjb25maXJtLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE5M2Q2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0OmhvdmVyLFxcbi5wZW5jaWwtYnRuOmhvdmVyLFxcbi5kZWwtbGlzdC1idG46aG92ZXIsXFxuLnNob3ctYWRkOmhvdmVyLFxcbiNjb25maXJtLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsXFxuI2J0bi1uZXctbGlzdCB7XFxuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2J0bi1uZXctbGlzdCB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5cXG4ubGlzdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyNDksIDI1MiwgMC44KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIG1hcmdpbjogMCA4cHggOHB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LWdyb3c6IDE7XFxufVxcblxcbi5saXN0IGxpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hvdy1hZGQsXFxuI2NvbmZpcm0tYnRuIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsdXMtaWNvbiB7XFxuICBmaWxsOiAjZmZmO1xcbn1cXG5cXG4ucHJpb3JpdHkge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgcGFkZGluZzogMXB4IDRweDtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICB3aWR0aDogMjZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpZ2gge1xcbiAgY29sb3I6ICNFODc4ODg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRTg3ODg4O1xcbn1cXG5cXG4ubG93IHtcXG4gIGNvbG9yOiAjYmI5YTZiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiOWE2YjtcXG59XFxuXFxuLm1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xcbiAgei1pbmRleDogMTtcXG4gIC8qIFNpdCBvbiB0b3AgKi9cXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIC8qIEZ1bGwgd2lkdGggKi9cXG4gIGhlaWdodDogMTAwJTtcXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXFxuICBvdmVyZmxvdzogYXV0bztcXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAvKiBGYWxsYmFjayBjb2xvciAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xcbiAgY29sb3I6ICMxMTU0ODg7XFxufVxcblxcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXFxuLm1vZGFsLWJveCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgd2lkdGg6IDgwdnc7XFxuICAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDEwcHg7XFxufVxcblxcbi5jbG9zZSB7XFxuICBmaWxsOiAjNzk3MDZiO1xcbn1cXG5cXG4jY2xvc2UtaWNvbjpob3ZlciB7XFxuICBmaWxsOiAjMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jaXRlbS1mb3JtIGlucHV0LFxcbiNkdWVkYXRlLWlucHV0LFxcbnRleHRhcmVhIHtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmOWZjO1xcbiAgcGFkZGluZzogNnB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbn1cXG5cXG4jaXRlbS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jZHVlZGF0ZS1pbnB1dCB7XFxuICB3aWR0aDogMTI1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbiNjb25maXJtLWJ0bixcXG4uZGVsZXRlIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4jY29uZmlybS1idG4ge1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4jZGVsZXRlIHtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U4Nzg4ODtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jZGVsZXRlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTNjNTI7XFxufVxcblxcbi5vdmVyZHVlIHtcXG4gIGNvbG9yOiAjY2UzYzUyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yYi1wcmlvcml0eSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgcGFkZGluZzogMnB4IDhweCAycHggMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAyZW0gMDtcXG4gIGNvbG9yOiAjMjIzOTRiO1xcbn1cXG5cXG5hOmxpbmsge1xcbiAgY29sb3I6ICMxMTU0ODg7XFxufVxcblxcbmE6aG92ZXIge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkZDlkNjtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgbWFpbiB7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gIH1cXG5cXG4gICNtYWluLWxpc3Qge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcbiAgfVxcblxcbiAgLmxpc3Qge1xcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICAjYnRuLW5ldy1saXN0IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkOzs7O21CQUlpQjtFQUNqQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxZQUFZO0VBQ1osMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOztFQUVFLFVBQVU7RUFDViwrQkFB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RUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UXVpY2tzYW5kOndnaHRANjAwJmRpc3BsYXk9c3dhcCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZGlzcGxheT1zd2FwJyk7XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzMxMmMyYTtcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoNDVkZWcsXFxuICAgICAgI0FERDlEOCxcXG4gICAgICAjQUREOUQ4IDEwcHgsXFxuICAgICAgIzlkY2FjOSAxMHB4LFxcbiAgICAgICM5ZGNhYzkgMjBweCk7XFxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNtYWluLWxpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTU0ODg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5oMSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbjogMCAwIDhweCAwO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0xvYnN0ZXInLCBjdXJzaXZlO1xcbiAgZm9udC1zaXplOiAzZW07XFxufVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG4ubGlzdC1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjhweDtcXG59XFxuXFxuLnBlbmNpbC1idG4sXFxuLmRlbC1saXN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGZpbGw6ICM3OTcwNmI7XFxuICBwYWRkaW5nOiAycHg7XFxufVxcblxcbi5wZW5jaWwtYnRuOmhvdmVyLFxcbi5kZWwtbGlzdC1idG46aG92ZXIge1xcbiAgZmlsbDogYmxhY2s7XFxufVxcblxcbi5lZGl0LWJ0bnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogbm93cmFwO1xcbn1cXG5cXG4uc2hvdy1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWdyb3c6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmaWxsLW9wYWNpdHk6IDA7XFxufVxcblxcbi5zaG93LWhlYWRlcjpob3ZlciB7XFxuICBmaWxsLW9wYWNpdHk6IDEwMCU7XFxufVxcblxcbiNmb3JtLW5ldy1saXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMzE2cHg7XFxufVxcblxcbi5lZGl0LWxpc3QtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lZGl0LW5hbWUtaW5wdXQsXFxuI2lucHV0LW5ldy1saXN0IHtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZmxleC1ncm93OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XFxuICBib3JkZXI6IDA7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBtaW4td2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jaW5wdXQtbmV3LWxpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5lZGl0LW5hbWUtaW5wdXQsXFxuI2lucHV0LW5ldy1saXN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjM2RkOWQ2O1xcbn1cXG5cXG4uZWRpdC1saXN0LXNhdmUsXFxuI2J0bi1uZXctbGlzdCxcXG4uc2hvdy1hZGQsXFxuI2NvbmZpcm0tYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTkzZDY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNidG4tbmV3LWxpc3Q6aG92ZXIsXFxuLnBlbmNpbC1idG46aG92ZXIsXFxuLmRlbC1saXN0LWJ0bjpob3ZlcixcXG4uc2hvdy1hZGQ6aG92ZXIsXFxuI2NvbmZpcm0tYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZGQ5ZDY7XFxufVxcblxcbi5lZGl0LWxpc3Qtc2F2ZSxcXG4jYnRuLW5ldy1saXN0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1mYW1pbHk6ICdRdWlja3NhbmQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYnRuLW5ldy1saXN0IHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxufVxcblxcbi5saXN0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDI0OSwgMjUyLCAwLjgpO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgbWFyZ2luOiAwIDhweCA4cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLmxpc3QgbGkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaG93LWFkZCxcXG4jY29uZmlybS1idG4ge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGx1cy1pY29uIHtcXG4gIGZpbGw6ICNmZmY7XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBwYWRkaW5nOiAxcHggNHB4O1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIHdpZHRoOiAyNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGlnaCB7XFxuICBjb2xvcjogI0U4Nzg4ODtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFODc4ODg7XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6ICNiYjlhNmI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYmI5YTZiO1xcbn1cXG5cXG4ubW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICAvKiBTdGF5IGluIHBsYWNlICovXFxuICB6LWluZGV4OiAxO1xcbiAgLyogU2l0IG9uIHRvcCAqL1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogRnVsbCB3aWR0aCAqL1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgLyogRnVsbCBoZWlnaHQgKi9cXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovXFxuICBjb2xvcjogIzExNTQ4ODtcXG59XFxuXFxuLyogTW9kYWwgQ29udGVudC9Cb3ggKi9cXG4ubW9kYWwtYm94IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XFxuICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgLyogMTUlIGZyb20gdGhlIHRvcCBhbmQgY2VudGVyZWQgKi9cXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICB3aWR0aDogODB2dztcXG4gIC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTBweDtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIGZpbGw6ICM3OTcwNmI7XFxufVxcblxcbiNjbG9zZS1pY29uOmhvdmVyIHtcXG4gIGZpbGw6ICMwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNpdGVtLWZvcm0gaW5wdXQsXFxuI2R1ZWRhdGUtaW5wdXQsXFxudGV4dGFyZWEge1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2Y5ZmM7XFxuICBwYWRkaW5nOiA2cHg7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbiNpdGVtLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNkdWVkYXRlLWlucHV0IHtcXG4gIHdpZHRoOiAxMjVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuI2NvbmZpcm0tYnRuLFxcbi5kZWxldGUge1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbiNjb25maXJtLWJ0biB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcblxcbiNkZWxldGUge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTg3ODg4O1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNkZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlM2M1MjtcXG59XFxuXFxuLm92ZXJkdWUge1xcbiAgY29sb3I6ICNjZTNjNTI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJiLXByaW9yaXR5IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBwYWRkaW5nOiAycHggOHB4IDJweCAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgY29sb3I6ICMyMjM5NGI7XFxufVxcblxcbmE6bGluayB7XFxuICBjb2xvcjogIzExNTQ4ODtcXG59XFxuXFxuYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2RkOWQ2O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICBtYWluIHtcXG4gICAgZmxleC1mbG93OiB3cmFwO1xcbiAgfVxcblxcbiAgI21haW4tbGlzdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuICB9XFxuXFxuICAubGlzdCB7XFxuICAgIG1hcmdpbjogMCAwIDhweCAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gICNidG4tbmV3LWxpc3Qge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1Bhc3RcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKiBAcHVyZSBmYWxzZVxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgMiBKdWx5IDIwMTQgaW4gdGhlIHBhc3Q/XG4gKiB2YXIgcmVzdWx0ID0gaXNQYXN0KG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNQYXN0KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKSA8IERhdGUubm93KCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY29uc3QgY2xvc2VJY29uID0gYFxuICAgIDxzcGFuIGNsYXNzPVwiY2xvc2VcIj5cbiAgICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJjbG9zZS1pY29uXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCA1MTIuMDAxIDUxMi4wMDFcIiB3aWR0aD1cIjI4cHhcIiBoZWlnaHQ9XCIyOHB4XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMi4wMDEgNTEyLjAwMTtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjg0LjI4NiwyNTYuMDAyTDUwNi4xNDMsMzQuMTQ0YzcuODExLTcuODExLDcuODExLTIwLjQ3NSwwLTI4LjI4NWMtNy44MTEtNy44MS0yMC40NzUtNy44MTEtMjguMjg1LDBMMjU2LDIyNy43MTdcbiAgICAgICAgICAgIEwzNC4xNDMsNS44NTljLTcuODExLTcuODExLTIwLjQ3NS03LjgxMS0yOC4yODUsMGMtNy44MSw3LjgxMS03LjgxMSwyMC40NzUsMCwyOC4yODVsMjIxLjg1NywyMjEuODU3TDUuODU4LDQ3Ny44NTlcbiAgICAgICAgICAgIGMtNy44MTEsNy44MTEtNy44MTEsMjAuNDc1LDAsMjguMjg1YzMuOTA1LDMuOTA1LDkuMDI0LDUuODU3LDE0LjE0Myw1Ljg1N2M1LjExOSwwLDEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdMMjU2LDI4NC4yODdcbiAgICAgICAgICAgIGwyMjEuODU3LDIyMS44NTdjMy45MDUsMy45MDUsOS4wMjQsNS44NTcsMTQuMTQzLDUuODU3czEwLjIzNy0xLjk1MiwxNC4xNDMtNS44NTdjNy44MTEtNy44MTEsNy44MTEtMjAuNDc1LDAtMjguMjg1XG4gICAgICAgICAgICBMMjg0LjI4NiwyNTYuMDAyelwiLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L3NwYW4+XG5gO1xuXG5leHBvcnQgY29uc3QgcGx1c0ljb24gPSBgXG4gICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgY2xhc3M9XCJwbHVzLWljb25cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgIHZpZXdCb3g9XCIwIDAgNTAwIDQ4MFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgaGVpZ2h0PVwiMjRweFwiIHdpZHRoPVwiMjRweFwiPlxuICAgIDxnPlxuICAgIDxwYXRoIGQ9XCJNNDkyLDIzNkgyNzZWMjBjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBjLTExLjA0NiwwLTIwLDguOTU0LTIwLDIwdjIxNkgyMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjBzOC45NTQsMjAsMjAsMjBoMjE2XG4gICAgdjIxNmMwLDExLjA0Niw4Ljk1NCwyMCwyMCwyMHMyMC04Ljk1NCwyMC0yMFYyNzZoMjE2YzExLjA0NiwwLDIwLTguOTU0LDIwLTIwQzUxMiwyNDQuOTU0LDUwMy4wNDYsMjM2LDQ5MiwyMzZ6XCIvPlxuICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgICBgO1xuXG5leHBvcnQgY29uc3QgcGVuY2lsSWNvbiA9IGBcbjxzdmcgY2xhc3M9XCJwZW5jaWwtaWNvblwiIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiB2aWV3Qm94PVwiLTE1IC0xNSA0ODQuMDAwMTkgNDg0XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtNDAxLjY0ODQzOCAxOC4yMzQzNzVjLTI0LjM5NDUzMi0yNC4zNTE1NjMtNjMuODk4NDM4LTI0LjM1MTU2My04OC4yOTI5NjkgMGwtMjIuMTAxNTYzIDIyLjIyMjY1Ni0yMzUuMjY5NTMxIDIzNS4xNDQ1MzEtLjUuNTAzOTA3Yy0uMTIxMDk0LjEyMTA5My0uMTIxMDk0LjI1LS4yNS4yNS0uMjUuMzc1LS42MjUuNzQ2MDkzLS44NzEwOTQgMS4xMjEwOTMgMCAuMTI1LS4xMjg5MDYuMTI1LS4xMjg5MDYuMjUtLjI1LjM3NS0uMzcxMDk0LjYyNS0uNjI1IDEtLjEyMTA5NC4xMjUtLjEyMTA5NC4yNDYwOTQtLjI0NjA5NC4zNzUtLjEyNS4zNzUtLjI1LjYyNS0uMzc4OTA2IDEgMCAuMTIxMDk0LS4xMjEwOTQuMTIxMDk0LS4xMjEwOTQuMjVsLTUyLjE5OTIxOSAxNTYuOTY4NzVjLTEuNTMxMjUgNC40Njg3NS0uMzY3MTg3IDkuNDE3OTY5IDIuOTk2MDk0IDEyLjczNDM3NiAyLjM2MzI4MiAyLjMzMjAzMSA1LjU1MDc4MiAzLjYzNjcxOCA4Ljg2NzE4OCAzLjYyNSAxLjM1NTQ2OC0uMDIzNDM4IDIuNjk5MjE4LS4yMzQzNzYgMy45OTYwOTQtLjYyNWwxNTYuODQ3NjU2LTUyLjMyNDIxOWMuMTIxMDk0IDAgLjEyMTA5NCAwIC4yNS0uMTIxMDk0LjM5NDUzMS0uMTE3MTg3Ljc3MzQzNy0uMjg1MTU2IDEuMTIxMDk0LS41MDM5MDYuMDk3NjU2LS4wMTE3MTkuMTgzNTkzLS4wNTQ2ODguMjUzOTA2LS4xMjEwOTQuMzcxMDk0LS4yNS44NzEwOTQtLjUwMzkwNiAxLjI0NjA5NC0uNzUzOTA2LjM3MTA5My0uMjQ2MDk0Ljc1LS42MjEwOTQgMS4xMjUtLjg3MTA5NC4xMjUtLjEyODkwNi4yNDYwOTMtLjEyODkwNi4yNDYwOTMtLjI1LjEyODkwNy0uMTI1LjM3ODkwNy0uMjQ2MDk0LjUwMzkwNy0uNWwyNTcuMzcxMDkzLTI1Ny4zNzEwOTRjMjQuMzUxNTYzLTI0LjM5NDUzMSAyNC4zNTE1NjMtNjMuODk4NDM3IDAtODguMjg5MDYyem0tMjMyLjI3MzQzOCAzNTMuMTQ4NDM3LTg2LjkxNDA2Mi04Ni45MTAxNTYgMjE3LjUzNTE1Ni0yMTcuNTM1MTU2IDg2LjkxNDA2MiA4Ni45MTAxNTZ6bS05OS4xNTYyNS02My44MDg1OTMgNzUuOTI5Njg4IDc1LjkyNTc4MS0xMTQuMDE1NjI2IDM3Ljk2MDkzOHptMzQ3LjY2NDA2Mi0xODQuODIwMzEzLTEzLjIzODI4MSAxMy4zNjMyODItODYuOTE3OTY5LTg2LjkxNzk2OSAxMy4zNjcxODgtMTMuMzU5Mzc1YzE0LjYyMTA5NC0xNC42MDkzNzUgMzguMzIwMzEyLTE0LjYwOTM3NSA1Mi45NDUzMTIgMGwzMy45NjQ4NDQgMzMuOTY0ODQ0YzE0LjUxMTcxOSAxNC42ODc1IDE0LjQ1NzAzMiAzOC4zMzIwMzEtLjEyMTA5NCA1Mi45NDkyMTh6bTAgMFwiLz48L3N2Zz5gO1xuXG5leHBvcnQgY29uc3QgdHJhc2hJY29uID0gYFxuPHN2ZyBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjIwcHhcIiB3aWR0aD1cIjIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMlwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48Zz48cGF0aCBkPVwibTQyNCA2NGgtODh2LTE2YzAtMjYuNDY3LTIxLjUzMy00OC00OC00OGgtNjRjLTI2LjQ2NyAwLTQ4IDIxLjUzMy00OCA0OHYxNmgtODhjLTIyLjA1NiAwLTQwIDE3Ljk0NC00MCA0MHY1NmMwIDguODM2IDcuMTY0IDE2IDE2IDE2aDguNzQ0bDEzLjgyMyAyOTAuMjgzYzEuMjIxIDI1LjYzNiAyMi4yODEgNDUuNzE3IDQ3Ljk0NSA0NS43MTdoMjQyLjk3NmMyNS42NjUgMCA0Ni43MjUtMjAuMDgxIDQ3Ljk0NS00NS43MTdsMTMuODIzLTI5MC4yODNoOC43NDRjOC44MzYgMCAxNi03LjE2NCAxNi0xNnYtNTZjMC0yMi4wNTYtMTcuOTQ0LTQwLTQwLTQwem0tMjE2LTE2YzAtOC44MjIgNy4xNzgtMTYgMTYtMTZoNjRjOC44MjIgMCAxNiA3LjE3OCAxNiAxNnYxNmgtOTZ6bS0xMjggNTZjMC00LjQxMSAzLjU4OS04IDgtOGgzMzZjNC40MTEgMCA4IDMuNTg5IDggOHY0MGMtNC45MzEgMC0zMzEuNTY3IDAtMzUyIDB6bTMxMy40NjkgMzYwLjc2MWMtLjQwNyA4LjU0NS03LjQyNyAxNS4yMzktMTUuOTgxIDE1LjIzOWgtMjQyLjk3NmMtOC41NTUgMC0xNS41NzUtNi42OTQtMTUuOTgxLTE1LjIzOWwtMTMuNzUxLTI4OC43NjFoMzAyLjQ0elwiLz48cGF0aCBkPVwibTI1NiA0NDhjOC44MzYgMCAxNi03LjE2NCAxNi0xNnYtMjA4YzAtOC44MzYtNy4xNjQtMTYtMTYtMTZzLTE2IDcuMTY0LTE2IDE2djIwOGMwIDguODM2IDcuMTYzIDE2IDE2IDE2elwiLz48cGF0aCBkPVwibTMzNiA0NDhjOC44MzYgMCAxNi03LjE2NCAxNi0xNnYtMjA4YzAtOC44MzYtNy4xNjQtMTYtMTYtMTZzLTE2IDcuMTY0LTE2IDE2djIwOGMwIDguODM2IDcuMTYzIDE2IDE2IDE2elwiLz48cGF0aCBkPVwibTE3NiA0NDhjOC44MzYgMCAxNi03LjE2NCAxNi0xNnYtMjA4YzAtOC44MzYtNy4xNjQtMTYtMTYtMTZzLTE2IDcuMTY0LTE2IDE2djIwOGMwIDguODM2IDcuMTYzIDE2IDE2IDE2elwiLz48L2c+PC9zdmc+XG5gIiwiaW1wb3J0IHtcbiAgICBtYWluTGlzdCxcbiAgICBMaXN0LFxuICAgIGFkZFRvRG8sXG4gICAgZWRpdFRvRG8sXG4gICAgZGVsVG9EbyxcbiAgICBzYW5pdGl6ZSxcbiAgICByZXBsYWNlRGF0ZSxcbn0gZnJvbSAnLi9tYWluJztcblxuaW1wb3J0IGlzUGFzdCBmcm9tICdkYXRlLWZucy9pc1Bhc3QnO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZS5jc3MnO1xuXG5pbXBvcnQge1xuICAgIGNsb3NlSWNvbixcbiAgICBwZW5jaWxJY29uLFxuICAgIHBsdXNJY29uLFxuICAgIHRyYXNoSWNvbixcbn0gZnJvbSAnLi4vYXNzZXRzL1NWRyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbmJvZHkuaW5uZXJIVE1MID0gYFxuPGhlYWRlcj48aDE+dHJlbW9sbG88L2gxPjwvaGVhZGVyPlxuPG1haW4+XG4gICAgPGRpdiBpZD1cIm1haW4tbGlzdFwiPlxuICAgIDwvZGl2PlxuICAgIDxmb3JtIGlkPVwiZm9ybS1uZXctbGlzdFwiPlxuICAgIDxpbnB1dCBpZD1cImlucHV0LW5ldy1saXN0XCIgdHlwZT1cInRleHRcIiByZXF1aXJlZD5cbiAgICA8YnV0dG9uIGlkPVwiYnRuLW5ldy1saXN0XCI+KyBOZXc8L2J1dHRvbj5cbiAgICA8L2Zvcm0+XG48L21haW4+XG48Zm9vdGVyPmJ5Jm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LmphbmVidWkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+SmFuZSBCdWk8L2E+Jm5ic3A7fCZuYnNwOzxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vamFuZWJ1aS90cmVtb2xsb1wiIHRhcmdldD1cIl9ibGFua1wiPkdpdGh1YiBSZXBvPC9hPjwvZm9vdGVyPlxuYDtcblxuY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWxpc3QnKTtcblxuLy8gbW9kYWwgc3R1ZmZcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5tb2RhbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21vZGFsJyk7XG5tb2RhbC5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwibW9kYWwtYm94XCI+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPjxoMiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+PC9oMj4ke2Nsb3NlSWNvbn08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuPC9kaXY+XG5gO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbmNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG5jb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKVswXTtcblxuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSlcblxuXG4vLyBkaXNwbGF5IHRoZSBtYWluIGxpc3Qgb2YgbGlzdHNcbmZ1bmN0aW9uIGRpc3BsYXlNYWluTGlzdCgpIHtcblxuICAgIG1haW5EaXYuaW5uZXJIVE1MID0gYFxuICAgICR7bWFpbkxpc3QuYXJyLm1hcCgoaXRlbSwgaSkgPT4gYDxkaXYgY2xhc3M9XCJsaXN0XCIgZGF0YS1saXN0PVwiJHtpfVwiPmAgK1xuICAgICAgICBkaXNwbGF5TGlzdChpdGVtLCBpKSArIGA8L2Rpdj5gXG4gICAgICAgICkuam9pbignJyl9XG4gICAgICAgIGA7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn07XG5cblxuLy8gZGlzcGxheSBhbiBpbmRpdmlkdWFsIHRvZG8gbGlzdFxuZnVuY3Rpb24gZGlzcGxheUxpc3QobGlzdCkge1xuICAgIHJldHVybiBgXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaG93LWhlYWRlclwiPlxuICAgICAgICAgICAgPGgzPiR7bGlzdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdC1idG5zXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicGVuY2lsLWJ0blwiPiR7cGVuY2lsSWNvbn08L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWwtbGlzdC1idG5cIj4ke3RyYXNoSWNvbn08L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJlZGl0LWxpc3QtaGVhZGVyXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzcz1cImVkaXQtbmFtZS1pbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2xpc3QubmFtZX1cIiBhdXRvZm9jdXMgb25mb2N1cz1cInZhciB0ZW1wX3ZhbHVlPXRoaXMudmFsdWU7IHRoaXMudmFsdWU9Jyc7IHRoaXMudmFsdWU9dGVtcF92YWx1ZVwiIC8+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJlZGl0LWxpc3Qtc2F2ZVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuXG4gICAgPHVsPmAgK1xuICAgICAgICBsaXN0LnRvZG9MaXN0Lm1hcCgoaXRlbSwgaSkgPT5cbiAgICAgICAgICAgIGA8bGkgY2xhc3M9XCJpdGVtXCIgZGF0YS1pdGVtPVwiJHtpfVwiPlxuICAgICAgICAgICAgJHtpdGVtLnRpdGxlfSA8c3BhbiBjbGFzcz1cInByaW9yaXR5ICR7aXRlbS5wcmlvcml0eX1cIj4ke2l0ZW0ucHJpb3JpdHl9PC9zcGFuPlxuICAgICAgICAgICAgPC9saT5gXG4gICAgICAgICkuam9pbignJykgK1xuICAgICAgICBgPC91bD5cbiAgICA8YnV0dG9uIGNsYXNzPVwic2hvdy1hZGRcIj5cbiAgICAgICAgJHtwbHVzSWNvbn1cbiAgICA8L2J1dHRvbj5cbiAgICBgO1xufTtcblxuXG4vLyBhZGQgRXZlbnQgTGlzdGVuZXJzIHRvIGxpc3QgYnV0dG9uc1xuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tbmV3LWxpc3QnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBhZGROZXdMaXN0KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZWwtbGlzdC1idG4nKS5mb3JFYWNoKChkZWwsIGkpID0+IHtcbiAgICAgICAgZGVsLm51bWJlciA9IGk7XG4gICAgICAgIGRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRlbGV0ZUxpc3QpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBlbmNpbC1idG4nKS5mb3JFYWNoKChwZW4sIGkpID0+IHtcbiAgICAgICAgcGVuLm51bWJlciA9IGk7XG4gICAgICAgIHBlbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRMaXN0TmFtZSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1saXN0LWhlYWRlcicpLmZvckVhY2goKGZvcm0sIGkpID0+IHtcbiAgICAgICAgZm9ybS5udW1iZXIgPSBpO1xuICAgICAgICBmb3JtLm5hbWUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykudmFsdWU7XG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc3VibWl0TGlzdE5hbWUpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNob3ctYWRkJykuZm9yRWFjaCgoYnRuLCBpKSA9PiB7XG4gICAgICAgIGJ0bi5udW1iZXIgPSBpO1xuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGROZXdJdGVtKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdEl0ZW0pO1xuICAgIH0pO1xufTtcblxuXG4vLyBjcmVhdGUgYSBuZXcgbGlzdCB1c2luZyB0aGUgdXNlcidzIGlucHV0XG5mdW5jdGlvbiBhZGROZXdMaXN0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGxldCBuZXdMaXN0TmFtZSA9IHNhbml0aXplKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1uZXctbGlzdCcpLnZhbHVlKTtcbiAgICBtYWluTGlzdC5hZGQoTGlzdChuZXdMaXN0TmFtZSkpO1xuXG4gICAgZGlzcGxheU1haW5MaXN0KCk7XG5cbiAgICB0aGlzLnJlc2V0KCk7XG59O1xuXG5cbi8vIHdoZW4gdXNlciBjbGlja3Mgb24gcGVuY2lsIGJ1dHRvbiB0byBlZGl0IGxpc3QgbmFtZSwgY2hhbmdlIHRvIGVkaXQgbW9kZSBkaXNwbGF5XG5mdW5jdGlvbiBlZGl0TGlzdE5hbWUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgbGV0IGVkaXRNb2RlID0gdHJ1ZTtcblxuICAgIGxldCBwZW4gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgbGV0IHNob3dIZWFkZXIgPSBwZW4ucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIGxldCBlZGl0TGlzdEhlYWRlciA9IHNob3dIZWFkZXIucGFyZW50Tm9kZS5sYXN0RWxlbWVudENoaWxkO1xuICAgIGxldCBlZGl0TmFtZUlucHV0ID0gZWRpdExpc3RIZWFkZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcblxuICAgIGlmIChlZGl0TW9kZSkge1xuICAgICAgICBzaG93SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGVkaXRMaXN0SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIGVkaXROYW1lSW5wdXQuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmUgZm9jdXMgZnJvbSBpbnB1dCB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoZSBpbnB1dFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCByZW1vdmVGb2N1cyk7XG5cbiAgICBmdW5jdGlvbiByZW1vdmVGb2N1cyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9IGVkaXROYW1lSW5wdXQpIHtcbiAgICAgICAgICAgIGVkaXRNb2RlID0gZmFsc2U7XG4gICAgICAgICAgICBzaG93SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICBlZGl0TGlzdEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHJlbW92ZUZvY3VzKVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cblxuLy8gd2hlbiB1c2VyIGNoYW5nZXMgYSBsaXN0J3MgbmFtZSwgdXBkYXRlIG1haW4gYXJyYXkgYW5kIHVwZGF0ZSBkaXNwbGF5XG5mdW5jdGlvbiBzdWJtaXRMaXN0TmFtZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgb2xkTmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgbGV0IG5ld05hbWUgPSBlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlO1xuXG4gICAgaWYgKG5ld05hbWUgIT0gb2xkTmFtZSkge1xuICAgICAgICBtYWluTGlzdC5lZGl0TmFtZShlLnRhcmdldC5udW1iZXIsIG5ld05hbWUpO1xuICAgICAgICBkaXNwbGF5TWFpbkxpc3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgfTtcbn07XG5cblxuLy8gZGVsZXRlIGEgbGlzdFxuZnVuY3Rpb24gZGVsZXRlTGlzdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgZGVsVGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm51bWJlcjtcblxuICAgIG1haW5MaXN0LmRlbChkZWxUYXJnZXQpO1xuICAgIGRpc3BsYXlNYWluTGlzdCgpO1xufTtcblxuXG4vLyBjcmVhdGUgYSBuZXcgaXRlbSBpbnNpZGUgYSBsaXN0XG5mdW5jdGlvbiBhZGROZXdJdGVtKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGNvbnN0IGwgPSBlLmN1cnJlbnRUYXJnZXQubnVtYmVyO1xuXG4gICAgZGlzcGxheUZvcm0oJycsICcnLCAnJywgJycsIFwiQWRkIGEgTmV3IEl0ZW1cIik7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWZvcm0nKTtcblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgIC8vIGdyYWIgdGhlIGZvcm0gdmFsdWVzIGFuZCByZXR1cm4gYSBuZXcgdG8tZG8gaXRlbVxuICAgICAgICBsZXQgbmV3VG9EbyA9IHByb2Nlc3NGb3JtKGZvcm0pO1xuXG4gICAgICAgIGFkZFRvRG8obCwgbmV3VG9Ebyk7XG5cbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGlzcGxheU1haW5MaXN0KCk7XG4gICAgfSk7XG59O1xuXG5cbi8vIHdoZW4gdXNlciBjbGlja3Mgb24gYW4gaXRlbSBvciB0aGUgZWRpdCBpdGVtIGJ1dHRvbiwgZGlzcGxheSBtb2RhbFxuZnVuY3Rpb24gZWRpdEl0ZW0oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICBsZXQgbCA9IGUuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuZGF0YXNldC5saXN0O1xuICAgIGxldCBpID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbTtcbiAgICBsZXQgaXRlbSA9IG1haW5MaXN0LmFycltsXS50b2RvTGlzdFtpXTtcblxuICAgIC8vIGRpc3BsYXkgdGhlIGVkaXQgZm9ybSB3aXRoIHRoZSB2YWx1ZXMgcHJlLWZpbGxlZFxuICAgIGRpc3BsYXlGb3JtKGl0ZW0udGl0bGUsIGl0ZW0uZGVzY3JpcHRpb24sIGl0ZW0uZHVlRGF0ZSwgaXRlbS5wcmlvcml0eSwgXCJFZGl0IEl0ZW1cIik7XG5cbiAgICAvLyB3aGVuIHVzZXIgZWRpdHMgdGhlIGl0ZW0sIHVwZGF0ZSB0aGUgZGlzcGxheSBhbmQgbWFpbiBsaXN0XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpdGVtLWZvcm0nKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBncmFiIHRoZSBmb3JtIHZhbHVlcyBhbmQgcmV0dXJuIHRoZSBlZGl0ZWQgdG9kbyBpdGVtXG4gICAgICAgIGxldCBuZXdUb0RvID0gcHJvY2Vzc0Zvcm0oZm9ybSk7XG5cbiAgICAgICAgZWRpdFRvRG8obCwgaSwgbmV3VG9Ebyk7XG5cbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZGlzcGxheU1haW5MaXN0KCk7XG4gICAgfSk7XG5cbiAgICAvLyBjcmVhdGUgYSBkZWxldGUgYnV0dG9uXG4gICAgY29uc3QgbW9kYWxCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJ1dHRvbnMnKVxuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RlbGV0ZScpO1xuICAgIGRlbEJ0bi5pbm5lckhUTUwgPSB0cmFzaEljb247XG4gICAgbW9kYWxCdXR0b25zLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gICAgZGVsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlSXRlbSwgZmFsc2UpO1xuICAgIGRlbEJ0bi5pdGVtID0gW2wsIGldOyAvLyBhZGQgcHJvdG90eXBlIHNvIGxvY2F0aW9uIG9mIGl0ZW0gY2FuIGJlIGFjY2Vzc2VkIGJ5IGRlbGV0ZUl0ZW1cbn07XG5cbi8vIHdoZW4gdXNlciBjbGlja3MgZGVsZXRlIGJ1dHRvbiwgZGVsZXRlIGZyb20gZGlzcGxheSBhbmQgbWFpbkxpc3RcbmZ1bmN0aW9uIGRlbGV0ZUl0ZW0oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IGwgPSBlLmN1cnJlbnRUYXJnZXQuaXRlbVswXTtcbiAgICBsZXQgaSA9IGUuY3VycmVudFRhcmdldC5pdGVtWzFdO1xuXG4gICAgZGVsVG9EbyhsLCBpKTtcblxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZGlzcGxheU1haW5MaXN0KCk7XG59O1xuXG5cbi8vIGRpc3BsYXkgdGhlIG1vZGFsIHdpdGggdGhlIGZvcm0gaW5zaWRlXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBoZWFkZXIpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC10aXRsZScpLmlubmVySFRNTCA9IGhlYWRlcjtcblxuICAgIG1vZGFsQ29udGVudC5pbm5lckhUTUwgPSBgXG4gICAgPGZvcm0gaWQ9XCJpdGVtLWZvcm1cIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IG5hbWU9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke3RpdGxlfVwiIHJlcXVpcmVkIC8+XG5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJkZXNjcmlwdGlvblwiIHR5cGU9XCJ0ZXh0XCI+JHtkZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuXG4gICAgICAgIDxsYWJlbCBmb3I9XCJkdWVkYXRlLWlucHV0XCIgaWQ9XCJkdWVkYXRlLWxhYmVsXCI+RHVlIERhdGU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiZHVlZGF0ZS1pbnB1dFwiIG5hbWU9XCJkdWVkYXRlXCIgdHlwZT1cImRhdGVcIiB2YWx1ZT1cIiR7ZHVlRGF0ZX1cIiAvPlxuXG4gICAgICAgIDxkaXYgaWQ9XCJyYWRpby1idG5zXCI+XG4gICAgICAgIFByaW9yaXR5OlxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJyYi1wcmlvcml0eVwiPjxpbnB1dCBuYW1lPVwicHJpb3JpdHlcIiB0eXBlPVwicmFkaW9cIiB2YWx1ZT1cImxvd1wiIFxuICAgICAgICAke3ByaW9yaXR5ID09ICdsb3cnID8gJ2NoZWNrZWQnOicnfSAvPkxvdzwvbGFiZWw+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzPVwicmItcHJpb3JpdHlcIj48aW5wdXQgbmFtZT1cInByaW9yaXR5XCIgdHlwZT1cInJhZGlvXCIgdmFsdWU9XCJoaWdoXCIgXG4gICAgICAgICR7cHJpb3JpdHkgPT0gJ2hpZ2gnID8gJ2NoZWNrZWQnOicnfSAvPkhpZ2g8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJ1dHRvbnNcIj5cbiAgICAgICAgPGJ1dHRvbiBpZD1cImNvbmZpcm0tYnRuXCIgZm9ybT1cIml0ZW0tZm9ybVwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgaWYgKGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IGRhdGVPYmogPSBuZXcgRGF0ZShyZXBsYWNlRGF0ZShkdWVEYXRlKSk7XG4gICAgICAgIGlmIChpc1Bhc3QoZGF0ZU9iaikpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1ZWRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlZGF0ZS1sYWJlbCcpO1xuICAgICAgICAgICAgZHVlZGF0ZS50ZXh0Q29udGVudCA9IFwiT1ZFUkRVRVwiO1xuICAgICAgICAgICAgZHVlZGF0ZS5jbGFzc0xpc3QuYWRkKCdvdmVyZHVlJyk7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuLy8gZ3JhYiB0aGUgdXNlciBpbnB1dHMgZnJvbSB0aGUgZm9ybVxuZnVuY3Rpb24gcHJvY2Vzc0Zvcm0oZm9ybSkge1xuICAgIGxldCBwcmlvcml0eSA9ICcnO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdJykuZm9yRWFjaChmdW5jdGlvbiAocmIpIHtcbiAgICAgICAgaWYgKHJiLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHByaW9yaXR5ID0gcmIudmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBkYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZHVlZGF0ZVwiXScpLnZhbHVlO1xuXG4gICAgbGV0IG5ld1RvRG8gPSB7XG4gICAgICAgIHRpdGxlOiBzYW5pdGl6ZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlKSxcbiAgICAgICAgZGVzY3JpcHRpb246IHNhbml0aXplKGZvcm0ucXVlcnlTZWxlY3RvcigndGV4dGFyZWFbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWUpLFxuICAgICAgICBkdWVEYXRlOiBkYXRlLFxuICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlcbiAgICB9O1xuICAgIHJldHVybiBuZXdUb0RvO1xufTtcblxuXG5kaXNwbGF5TWFpbkxpc3QoKTsiLCIvLyBzYXZlIHRoZSB3b3JraW5nIE1haW4gTGlzdCBhcnJheSB0byBsb2NhbCBzdG9yYWdlIGFzIGEgc3RyaW5nXG5mdW5jdGlvbiBzYXZlTFMoYXJyKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoYXJyKSk7XG59O1xuXG4vLyBtb2R1bGUgb2YgdGhlIG1haW4gbGlzdCBvZiBsaXN0c1xuZXhwb3J0IGNvbnN0IG1haW5MaXN0ID0gKCgpID0+IHtcbiAgICAvLyBncmFiIGRhdGEgZnJvbSBsb2NhbCBzdG9yYWdlLiBpZiB0aGVyZSBpcyBub25lLCB0aGVuIGluaXRpYWxpemUgdy8gc2FtcGxlIGRhdGFcbiAgICBsZXQgYXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXRlbXMnKSkgfHwgXG4gICAgICAgIFsgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ01vbmRheScsXG4gICAgICAgICAgICAgICAgdG9kb0xpc3Q6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdGZWVkIHRoZSBDYXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdGaXNoIFRhY29zJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1ZURhdGU6ICcyMDIxLTEyLTIwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAnaGlnaCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdHbyB0byBXb3JrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9vayBBbGl2ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiAnMjAyMS0xMi0yMCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogJydcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgIGZ1bmN0aW9uIGFkZChsaXN0KSB7XG4gICAgICAgIGFyci5wdXNoKGxpc3QpO1xuICAgICAgICBzYXZlTFMoYXJyKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZWRpdE5hbWUoaSwgbmV3TmFtZSkge1xuICAgICAgICBhcnJbaV0ubmFtZSA9IG5ld05hbWU7XG4gICAgICAgIHNhdmVMUyhhcnIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkZWwoaSkge1xuICAgICAgICBhcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICBzYXZlTFMoYXJyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXJyLFxuICAgICAgICBlZGl0TmFtZSxcbiAgICAgICAgYWRkLFxuICAgICAgICBkZWxcbiAgICB9O1xufSkoKTtcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgbGlzdFxuZXhwb3J0IGNvbnN0IExpc3QgPSAobmFtZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgdG9kb0xpc3RcbiAgICB9O1xufTtcblxuLy8gZmFjdG9yeSBmdW5jdGlvbiBmb3IgdG8tZG8gaXRlbXMuIEF0IGEgbWluaW11bSB0aGV5IHNob3VsZCBoYXZlIGEgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlIGFuZCBwcmlvcml0eS4gWW91IG1pZ2h0IGFsc28gd2FudCB0byBpbmNsdWRlIG5vdGVzIG9yIGV2ZW4gYSBjaGVja2xpc3QuXG5leHBvcnQgY29uc3QgVG9EbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBwcmlvcml0eVxuICAgIH07XG59O1xuXG4vLyBhZGQgYSBuZXcgdG8tZG8gaXRlbSB0byB0aGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8obCwgdG9kbykge1xuICAgIG1haW5MaXN0LmFycltsXS50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgIHNhdmVMUyhtYWluTGlzdC5hcnIpO1xufTtcblxuLy8gZWRpdCBhbiBleGlzdGluZyBpdGVtIGkgZnJvbSBsaXN0IGxcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VG9EbyhsLCBpLCBuZXdPYmopIHtcbiAgICBPYmplY3QuYXNzaWduKG1haW5MaXN0LmFycltsXS50b2RvTGlzdFtpXSwgbmV3T2JqKTtcbiAgICBzYXZlTFMobWFpbkxpc3QuYXJyKTtcbn07XG5cbi8vIGRlbGV0ZSB0b2RvIGl0ZW0gaSBmcm9tIGxpc3QgbFxuZXhwb3J0IGZ1bmN0aW9uIGRlbFRvRG8obCwgaSkge1xuICAgIG1haW5MaXN0LmFycltsXS50b2RvTGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgc2F2ZUxTKG1haW5MaXN0LmFycik7XG59O1xuXG4vLyBjaGFuZ2UgdGhlIGh5cGhlbnMgdG8gc2xhc2hlcyBpbiB0aGUgaW5wdXQgZGF0ZVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VEYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5yZXBsYWNlKC8tL2csICcvJyk7O1xufTtcblxuLy8gc2FuaXRpemUgdXNlciBpbnB1dFxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplKHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8PD5bXFxdXFxcXF0vZywgJycpO1xufTtcblxuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9tb2R1bGVzL1VJJztcbiJdLCJzb3VyY2VSb290IjoiIn0=