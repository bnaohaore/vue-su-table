module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/emitter");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/locale");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/util");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/migrating");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vue-popper");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nextYear = exports.prevYear = exports.nextMonth = exports.prevMonth = exports.timeWithinRange = exports.limitTimeRange = exports.clearMilliseconds = exports.clearTime = exports.modifyTime = exports.modifyDate = exports.range = exports.getRangeHours = exports.getWeekNumber = exports.getStartDateOfMonth = exports.nextDate = exports.prevDate = exports.getFirstDayOfMonth = exports.getDayCountOfYear = exports.getDayCountOfMonth = exports.parseDate = exports.formatDate = exports.isDateObject = exports.isDate = exports.toDate = undefined;

var _date = __webpack_require__(172);

var _date2 = _interopRequireDefault(_date);

var _locale = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var weeks = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
var getI18nSettings = function getI18nSettings() {
  return {
    dayNamesShort: weeks.map(function (week) {
      return (0, _locale.t)('el.datepicker.weeks.' + week);
    }),
    dayNames: weeks.map(function (week) {
      return (0, _locale.t)('el.datepicker.weeks.' + week);
    }),
    monthNamesShort: months.map(function (month) {
      return (0, _locale.t)('el.datepicker.months.' + month);
    }),
    monthNames: months.map(function (month, index) {
      return (0, _locale.t)('el.datepicker.month' + (index + 1));
    }),
    amPm: ['am', 'pm']
  };
};

var newArray = function newArray(start, end) {
  var result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};

var toDate = exports.toDate = function toDate(date) {
  return isDate(date) ? new Date(date) : null;
};

var isDate = exports.isDate = function isDate(date) {
  if (date === null || date === undefined) return false;
  if (isNaN(new Date(date).getTime())) return false;
  return true;
};

var isDateObject = exports.isDateObject = function isDateObject(val) {
  return val instanceof Date;
};

var formatDate = exports.formatDate = function formatDate(date, format) {
  date = toDate(date);
  if (!date) return '';
  return _date2.default.format(date, format || 'yyyy-MM-dd', getI18nSettings());
};

var parseDate = exports.parseDate = function parseDate(string, format) {
  return _date2.default.parse(string, format || 'yyyy-MM-dd', getI18nSettings());
};

var getDayCountOfMonth = exports.getDayCountOfMonth = function getDayCountOfMonth(year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30;
  }

  if (month === 1) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return 29;
    } else {
      return 28;
    }
  }

  return 31;
};

var getDayCountOfYear = exports.getDayCountOfYear = function getDayCountOfYear(year) {
  var isLeapYear = year % 400 === 0 || year % 100 !== 0 && year % 4 === 0;
  return isLeapYear ? 366 : 365;
};

var getFirstDayOfMonth = exports.getFirstDayOfMonth = function getFirstDayOfMonth(date) {
  var temp = new Date(date.getTime());
  temp.setDate(1);
  return temp.getDay();
};

// see: https://stackoverflow.com/questions/3674539/incrementing-a-date-in-javascript
// {prev, next} Date should work for Daylight Saving Time
// Adding 24 * 60 * 60 * 1000 does not work in the above scenario
var prevDate = exports.prevDate = function prevDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount);
};

var nextDate = exports.nextDate = function nextDate(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
};

var getStartDateOfMonth = exports.getStartDateOfMonth = function getStartDateOfMonth(year, month) {
  var result = new Date(year, month, 1);
  var day = result.getDay();

  if (day === 0) {
    return prevDate(result, 7);
  } else {
    return prevDate(result, day);
  }
};

var getWeekNumber = exports.getWeekNumber = function getWeekNumber(src) {
  var date = new Date(src.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};

var getRangeHours = exports.getRangeHours = function getRangeHours(ranges) {
  var hours = [];
  var disabledHours = [];

  (ranges || []).forEach(function (range) {
    var value = range.map(function (date) {
      return date.getHours();
    });

    disabledHours = disabledHours.concat(newArray(value[0], value[1]));
  });

  if (disabledHours.length) {
    for (var i = 0; i < 24; i++) {
      hours[i] = disabledHours.indexOf(i) === -1;
    }
  } else {
    for (var _i = 0; _i < 24; _i++) {
      hours[_i] = false;
    }
  }

  return hours;
};

var range = exports.range = function range(n) {
  // see https://stackoverflow.com/questions/3746725/create-a-javascript-array-containing-1-n
  return Array.apply(null, { length: n }).map(function (_, n) {
    return n;
  });
};

var modifyDate = exports.modifyDate = function modifyDate(date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
};

var modifyTime = exports.modifyTime = function modifyTime(date, h, m, s) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), h, m, s, date.getMilliseconds());
};

var clearTime = exports.clearTime = function clearTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

var clearMilliseconds = exports.clearMilliseconds = function clearMilliseconds(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0);
};

var limitTimeRange = exports.limitTimeRange = function limitTimeRange(date, ranges) {
  var format = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'HH:mm:ss';

  // TODO: refactory a more elegant solution
  if (ranges.length === 0) return date;
  var normalizeDate = function normalizeDate(date) {
    return _date2.default.parse(_date2.default.format(date, format), format);
  };
  var ndate = normalizeDate(date);
  var nranges = ranges.map(function (range) {
    return range.map(normalizeDate);
  });
  if (nranges.some(function (nrange) {
    return ndate >= nrange[0] && ndate <= nrange[1];
  })) return date;

  var minDate = nranges[0][0];
  var maxDate = nranges[0][0];

  nranges.forEach(function (nrange) {
    minDate = new Date(Math.min(nrange[0], minDate));
    maxDate = new Date(Math.max(nrange[1], minDate));
  });

  var ret = ndate < minDate ? minDate : maxDate;
  // preserve Year/Month/Date
  return modifyDate(ret, date.getFullYear(), date.getMonth(), date.getDate());
};

var timeWithinRange = exports.timeWithinRange = function timeWithinRange(date, selectableRange, format) {
  var limitedDate = limitTimeRange(date, selectableRange, format);
  return limitedDate.getTime() === date.getTime();
};

var prevMonth = exports.prevMonth = function prevMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  if (month === 0) {
    year -= 1;
    month = 11;
  } else {
    month -= 1;
  }
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

var nextMonth = exports.nextMonth = function nextMonth(date) {
  var year = date.getFullYear();
  var month = date.getMonth();
  if (month === 11) {
    year += 1;
    month = 0;
  } else {
    month += 1;
  }
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

// check for leap year Feburary
var prevYear = exports.prevYear = function prevYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear() - amount;
  var month = date.getMonth();
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

var nextYear = exports.nextYear = function nextYear(date) {
  var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var year = date.getFullYear() + amount;
  var month = date.getMonth();
  var monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month));
  return modifyDate(date, year, month, monthDate);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/debounce");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/clickoutside");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/merge");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/locale");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/popup");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/mixins/focus");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/resize-event");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/scrollbar");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/transitions/collapse-transition");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/vdom");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tooltip");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/tag");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scroll-into-view");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRowIdentity = exports.mousewheel = exports.getColumnByCell = exports.getColumnById = exports.orderBy = exports.getCell = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(4);

var getCell = exports.getCell = function getCell(event) {
  var cell = event.target;

  while (cell && cell.tagName.toUpperCase() !== 'HTML') {
    if (cell.tagName.toUpperCase() === 'TD') {
      return cell;
    }
    cell = cell.parentNode;
  }

  return null;
};

var isObject = function isObject(obj) {
  return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
};

var orderBy = exports.orderBy = function orderBy(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || Array.isArray(sortBy) && !sortBy.length)) {
    return array;
  }
  if (typeof reverse === 'string') {
    reverse = reverse === 'descending' ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  var getKey = sortMethod ? null : function (value, index) {
    if (sortBy) {
      if (!Array.isArray(sortBy)) {
        sortBy = [sortBy];
      }
      return sortBy.map(function (by) {
        if (typeof by === 'string') {
          return (0, _util.getValueByPath)(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== '$key') {
      if (isObject(value) && '$value' in value) value = value.$value;
    }
    return [isObject(value) ? (0, _util.getValueByPath)(value, sortKey) : value];
  };
  var compare = function compare(a, b) {
    if (sortMethod) {
      return sortMethod(a.value, b.value);
    }
    for (var i = 0, len = a.key.length; i < len; i++) {
      if (a.key[i] < b.key[i]) {
        return -1;
      }
      if (a.key[i] > b.key[i]) {
        return 1;
      }
    }
    return 0;
  };
  return array.map(function (value, index) {
    return {
      value: value,
      index: index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort(function (a, b) {
    var order = compare(a, b);
    if (!order) {
      // make stable https://en.wikipedia.org/wiki/Sorting_algorithm#Stability
      order = a.index - b.index;
    }
    return order * reverse;
  }).map(function (item) {
    return item.value;
  });
};

var getColumnById = exports.getColumnById = function getColumnById(table, columnId) {
  var column = null;
  table.columns.forEach(function (item) {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};

var getColumnByCell = exports.getColumnByCell = function getColumnByCell(table, cell) {
  var matches = (cell.className || '').match(/el-table_[^\s]+/gm);
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};

var isFirefox = typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

var mousewheel = exports.mousewheel = function mousewheel(element, callback) {
  if (element && element.addEventListener) {
    element.addEventListener(isFirefox ? 'DOMMouseScroll' : 'mousewheel', callback);
  }
};

var getRowIdentity = exports.getRowIdentity = function getRowIdentity(row, rowKey) {
  if (!row) throw new Error('row is required when get row identity');
  if (typeof rowKey === 'string') {
    if (rowKey.indexOf('.') < 0) {
      return row[rowKey];
    }
    var key = rowKey.split('.');
    var current = row;
    for (var i = 0; i < key.length; i++) {
      current = current[key[i]];
    }
    return current;
  } else if (typeof rowKey === 'function') {
    return rowKey.call(null, row);
  }
};

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba0fce8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__ = __webpack_require__(173);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7ba0fce8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dad59a8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__ = __webpack_require__(179);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8dad59a8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (element, options) {
  if (_vue2.default.prototype.$isServer) return;
  var moveFn = function moveFn(event) {
    if (options.drag) {
      options.drag(event);
    }
  };
  var upFn = function upFn(event) {
    document.removeEventListener('mousemove', moveFn);
    document.removeEventListener('mouseup', upFn);
    document.onselectstart = null;
    document.ondragstart = null;

    isDragging = false;

    if (options.end) {
      options.end(event);
    }
  };
  element.addEventListener('mousedown', function (event) {
    if (isDragging) return;
    document.onselectstart = function () {
      return false;
    };
    document.ondragstart = function () {
      return false;
    };

    document.addEventListener('mousemove', moveFn);
    document.addEventListener('mouseup', upFn);
    isDragging = true;

    if (options.start) {
      options.start(event);
    }
  });
};

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDragging = false;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var aria = aria || {};

aria.Utils = aria.Utils || {};

/**
 * @desc Set focus on descendant nodes until the first focusable element is
 *       found.
 * @param element
 *          DOM node for which to find the first focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */
aria.Utils.focusFirstDescendant = function (element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusFirstDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Find the last descendant node that is focusable.
 * @param element
 *          DOM node for which to find the last focusable descendant.
 * @returns
 *  true if a focusable element is found and focus is set.
 */

aria.Utils.focusLastDescendant = function (element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];
    if (aria.Utils.attemptFocus(child) || aria.Utils.focusLastDescendant(child)) {
      return true;
    }
  }
  return false;
};

/**
 * @desc Set Attempt to set focus on the current node.
 * @param element
 *          The node to attempt to focus on.
 * @returns
 *  true if element is focused.
 */
aria.Utils.attemptFocus = function (element) {
  if (!aria.Utils.isFocusable(element)) {
    return false;
  }
  aria.Utils.IgnoreUtilFocusChanges = true;
  try {
    element.focus();
  } catch (e) {}
  aria.Utils.IgnoreUtilFocusChanges = false;
  return document.activeElement === element;
};

aria.Utils.isFocusable = function (element) {
  if (element.tabIndex > 0 || element.tabIndex === 0 && element.getAttribute('tabIndex') !== null) {
    return true;
  }

  if (element.disabled) {
    return false;
  }

  switch (element.nodeName) {
    case 'A':
      return !!element.href && element.rel !== 'ignore';
    case 'INPUT':
      return element.type !== 'hidden' && element.type !== 'file';
    case 'BUTTON':
    case 'SELECT':
    case 'TEXTAREA':
      return true;
    default:
      return false;
  }
};

/**
 * 触发一个事件
 * mouseenter, mouseleave, mouseover, keyup, change, click 等
 * @param  {Element} elm
 * @param  {String} name
 * @param  {*} opts
 */
aria.Utils.triggerEvent = function (elm, name) {
  var eventName = void 0;

  if (/^mouse|click/.test(name)) {
    eventName = 'MouseEvents';
  } else if (/^key/.test(name)) {
    eventName = 'KeyboardEvent';
  } else {
    eventName = 'HTMLEvents';
  }
  var evt = document.createEvent(eventName);

  for (var _len = arguments.length, opts = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    opts[_key - 2] = arguments[_key];
  }

  evt.initEvent.apply(evt, [name].concat(opts));
  elm.dispatchEvent ? elm.dispatchEvent(evt) : elm.fireEvent('on' + name, evt);

  return elm;
};

aria.Utils.keys = {
  tab: 9,
  enter: 13,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

exports.default = aria.Utils;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  computed: {
    indexPath: function indexPath() {
      var path = [this.index];
      var parent = this.$parent;
      while (parent.$options.componentName !== 'ElMenu') {
        if (parent.index) {
          path.unshift(parent.index);
        }
        parent = parent.$parent;
      }
      return path;
    },
    rootMenu: function rootMenu() {
      var parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElMenu') {
        parent = parent.$parent;
      }
      return parent;
    },
    parentMenu: function parentMenu() {
      var parent = this.$parent;
      while (parent && ['ElMenu', 'ElSubmenu'].indexOf(parent.$options.componentName) === -1) {
        parent = parent.$parent;
      }
      return parent;
    },
    paddingStyle: function paddingStyle() {
      if (this.rootMenu.mode !== 'vertical') return {};

      var padding = 20;
      var parent = this.$parent;

      if (this.rootMenu.collapse) {
        padding = 20;
      } else {
        while (parent && parent.$options.componentName !== 'ElMenu') {
          if (parent.$options.componentName === 'ElSubmenu') {
            padding += 20;
          }
          parent = parent.$parent;
        }
      }
      return { paddingLeft: padding + 'px' };
    }
  }
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

exports.default = {
  bind: function bind(el, binding, vnode) {
    var interval = null;
    var startTime = void 0;
    var handler = function handler() {
      return vnode.context[binding.expression].apply();
    };
    var clear = function clear() {
      if (new Date() - startTime < 100) {
        handler();
      }
      clearInterval(interval);
      interval = null;
    };

    (0, _dom.on)(el, 'mousedown', function (e) {
      if (e.button !== 0) return;
      startTime = new Date();
      (0, _dom.once)(document, 'mouseup', clear);
      clearInterval(interval);
      interval = setInterval(handler, 100);
    });
  }
};

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5130d559_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__ = __webpack_require__(138);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5130d559_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("throttle-debounce/throttle");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/scrollbar-width");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/checkbox-group");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b9de870_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__ = __webpack_require__(178);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_spinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0b9de870_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_spinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2aeb8486_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__ = __webpack_require__(187);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2aeb8486_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var NODE_KEY = exports.NODE_KEY = '$treeNodeId';

var markNodeData = exports.markNodeData = function markNodeData(node, data) {
  if (data[NODE_KEY]) return;
  Object.defineProperty(data, NODE_KEY, {
    value: node.id,
    enumerable: false,
    configurable: false,
    writable: false
  });
};

var getNodeKey = exports.getNodeKey = function getNodeKey(key, data) {
  if (!key) return data[NODE_KEY];
  return data[key];
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a518dff0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__ = __webpack_require__(277);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loading_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a518dff0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loading_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/progress");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("babel-helper-vue-jsx-merge-props");

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f2c64d38_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_dragger_vue__ = __webpack_require__(297);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_dragger_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f2c64d38_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_dragger_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(45);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(52);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(56);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(63);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(67);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(71);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(75);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(82);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(86);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(90);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(94);

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__(99);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(103);

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__(107);

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__(111);

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__(115);

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__(119);

var _index34 = _interopRequireDefault(_index33);

var _index35 = __webpack_require__(123);

var _index36 = _interopRequireDefault(_index35);

var _index37 = __webpack_require__(127);

var _index38 = _interopRequireDefault(_index37);

var _index39 = __webpack_require__(131);

var _index40 = _interopRequireDefault(_index39);

var _index41 = __webpack_require__(141);

var _index42 = _interopRequireDefault(_index41);

var _index43 = __webpack_require__(142);

var _index44 = _interopRequireDefault(_index43);

var _index45 = __webpack_require__(146);

var _index46 = _interopRequireDefault(_index45);

var _index47 = __webpack_require__(150);

var _index48 = _interopRequireDefault(_index47);

var _index49 = __webpack_require__(154);

var _index50 = _interopRequireDefault(_index49);

var _index51 = __webpack_require__(167);

var _index52 = _interopRequireDefault(_index51);

var _index53 = __webpack_require__(169);

var _index54 = _interopRequireDefault(_index53);

var _index55 = __webpack_require__(192);

var _index56 = _interopRequireDefault(_index55);

var _index57 = __webpack_require__(197);

var _index58 = _interopRequireDefault(_index57);

var _index59 = __webpack_require__(202);

var _index60 = _interopRequireDefault(_index59);

var _index61 = __webpack_require__(207);

var _index62 = _interopRequireDefault(_index61);

var _index63 = __webpack_require__(209);

var _index64 = _interopRequireDefault(_index63);

var _index65 = __webpack_require__(215);

var _index66 = _interopRequireDefault(_index65);

var _index67 = __webpack_require__(219);

var _index68 = _interopRequireDefault(_index67);

var _index69 = __webpack_require__(223);

var _index70 = _interopRequireDefault(_index69);

var _index71 = __webpack_require__(227);

var _index72 = _interopRequireDefault(_index71);

var _index73 = __webpack_require__(232);

var _index74 = _interopRequireDefault(_index73);

var _index75 = __webpack_require__(240);

var _index76 = _interopRequireDefault(_index75);

var _index77 = __webpack_require__(244);

var _index78 = _interopRequireDefault(_index77);

var _index79 = __webpack_require__(248);

var _index80 = _interopRequireDefault(_index79);

var _index81 = __webpack_require__(257);

var _index82 = _interopRequireDefault(_index81);

var _index83 = __webpack_require__(261);

var _index84 = _interopRequireDefault(_index83);

var _index85 = __webpack_require__(266);

var _index86 = _interopRequireDefault(_index85);

var _index87 = __webpack_require__(274);

var _index88 = _interopRequireDefault(_index87);

var _index89 = __webpack_require__(279);

var _index90 = _interopRequireDefault(_index89);

var _index91 = __webpack_require__(283);

var _index92 = _interopRequireDefault(_index91);

var _index93 = __webpack_require__(285);

var _index94 = _interopRequireDefault(_index93);

var _index95 = __webpack_require__(287);

var _index96 = _interopRequireDefault(_index95);

var _index97 = __webpack_require__(300);

var _index98 = _interopRequireDefault(_index97);

var _index99 = __webpack_require__(304);

var _index100 = _interopRequireDefault(_index99);

var _index101 = __webpack_require__(308);

var _index102 = _interopRequireDefault(_index101);

var _index103 = __webpack_require__(313);

var _index104 = _interopRequireDefault(_index103);

var _index105 = __webpack_require__(317);

var _index106 = _interopRequireDefault(_index105);

var _index107 = __webpack_require__(321);

var _index108 = _interopRequireDefault(_index107);

var _index109 = __webpack_require__(325);

var _index110 = _interopRequireDefault(_index109);

var _index111 = __webpack_require__(329);

var _index112 = _interopRequireDefault(_index111);

var _index113 = __webpack_require__(333);

var _index114 = _interopRequireDefault(_index113);

var _index115 = __webpack_require__(337);

var _index116 = _interopRequireDefault(_index115);

var _index117 = __webpack_require__(341);

var _index118 = _interopRequireDefault(_index117);

var _index119 = __webpack_require__(345);

var _index120 = _interopRequireDefault(_index119);

var _index121 = __webpack_require__(349);

var _index122 = _interopRequireDefault(_index121);

var _index123 = __webpack_require__(353);

var _index124 = _interopRequireDefault(_index123);

var _index125 = __webpack_require__(360);

var _index126 = _interopRequireDefault(_index125);

var _index127 = __webpack_require__(377);

var _index128 = _interopRequireDefault(_index127);

var _index129 = __webpack_require__(384);

var _index130 = _interopRequireDefault(_index129);

var _index131 = __webpack_require__(388);

var _index132 = _interopRequireDefault(_index131);

var _index133 = __webpack_require__(392);

var _index134 = _interopRequireDefault(_index133);

var _index135 = __webpack_require__(396);

var _index136 = _interopRequireDefault(_index135);

var _index137 = __webpack_require__(400);

var _index138 = _interopRequireDefault(_index137);

var _locale = __webpack_require__(15);

var _locale2 = _interopRequireDefault(_locale);

var _collapseTransition = __webpack_require__(20);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [_index2.default, _index4.default, _index6.default, _index8.default, _index10.default, _index12.default, _index14.default, _index16.default, _index18.default, _index20.default, _index22.default, _index24.default, _index26.default, _index28.default, _index30.default, _index32.default, _index34.default, _index36.default, _index38.default, _index40.default, _index42.default, _index44.default, _index46.default, _index48.default, _index50.default, _index52.default, _index54.default, _index56.default, _index58.default, _index60.default, _index62.default, _index66.default, _index68.default, _index70.default, _index72.default, _index74.default, _index76.default, _index78.default, _index80.default, _index82.default, _index86.default, _index90.default, _index92.default, _index94.default, _index96.default, _index98.default, _index100.default, _index104.default, _index106.default, _index108.default, _index110.default, _index112.default, _index114.default, _index116.default, _index118.default, _index120.default, _index122.default, _index124.default, _index126.default, _index128.default, _index130.default, _index132.default, _index134.default, _index136.default, _index138.default, _collapseTransition2.default]; /* Automatically generated by './build/bin/build-entry.js' */

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _locale2.default.use(opts.locale);
  _locale2.default.i18n(opts.i18n);

  components.map(function (component) {
    Vue.component(component.name, component);
  });

  Vue.use(_index88.default.directive);

  var ELEMENT = {};
  ELEMENT.size = opts.size || '';

  Vue.prototype.$loading = _index88.default.service;
  Vue.prototype.$msgbox = _index64.default;
  Vue.prototype.$alert = _index64.default.alert;
  Vue.prototype.$confirm = _index64.default.confirm;
  Vue.prototype.$prompt = _index64.default.prompt;
  Vue.prototype.$notify = _index84.default;
  Vue.prototype.$message = _index102.default;

  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '2.0.7',
  locale: _locale2.default.use,
  i18n: _locale2.default.i18n,
  install: install,
  CollapseTransition: _collapseTransition2.default,
  Loading: _index88.default,
  Pagination: _index2.default,
  Dialog: _index4.default,
  Autocomplete: _index6.default,
  Dropdown: _index8.default,
  DropdownMenu: _index10.default,
  DropdownItem: _index12.default,
  Menu: _index14.default,
  Submenu: _index16.default,
  MenuItem: _index18.default,
  MenuItemGroup: _index20.default,
  Input: _index22.default,
  InputNumber: _index24.default,
  Radio: _index26.default,
  RadioGroup: _index28.default,
  RadioButton: _index30.default,
  Checkbox: _index32.default,
  CheckboxButton: _index34.default,
  CheckboxGroup: _index36.default,
  Switch: _index38.default,
  Select: _index40.default,
  Option: _index42.default,
  OptionGroup: _index44.default,
  Button: _index46.default,
  ButtonGroup: _index48.default,
  Table: _index50.default,
  TableColumn: _index52.default,
  DatePicker: _index54.default,
  TimeSelect: _index56.default,
  TimePicker: _index58.default,
  Popover: _index60.default,
  Tooltip: _index62.default,
  MessageBox: _index64.default,
  Breadcrumb: _index66.default,
  BreadcrumbItem: _index68.default,
  Form: _index70.default,
  FormItem: _index72.default,
  Tabs: _index74.default,
  TabPane: _index76.default,
  Tag: _index78.default,
  Tree: _index80.default,
  Alert: _index82.default,
  Notification: _index84.default,
  Slider: _index86.default,
  Icon: _index90.default,
  Row: _index92.default,
  Col: _index94.default,
  Upload: _index96.default,
  Progress: _index98.default,
  Spinner: _index100.default,
  Message: _index102.default,
  Badge: _index104.default,
  Card: _index106.default,
  Rate: _index108.default,
  Steps: _index110.default,
  Step: _index112.default,
  Carousel: _index114.default,
  Scrollbar: _index116.default,
  CarouselItem: _index118.default,
  Collapse: _index120.default,
  CollapseItem: _index122.default,
  Cascader: _index124.default,
  ColorPicker: _index126.default,
  Transfer: _index128.default,
  Container: _index130.default,
  Header: _index132.default,
  Aside: _index134.default,
  Main: _index136.default,
  Footer: _index138.default
};

module.exports.default = module.exports;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pagination = __webpack_require__(46);

var _pagination2 = _interopRequireDefault(_pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_pagination2.default.install = function (Vue) {
  Vue.component(_pagination2.default.name, _pagination2.default);
};

exports.default = _pagination2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _pager = __webpack_require__(47);

var _pager2 = _interopRequireDefault(_pager);

var _select = __webpack_require__(50);

var _select2 = _interopRequireDefault(_select);

var _option = __webpack_require__(51);

var _option2 = _interopRequireDefault(_option);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElPagination',

  props: {
    pageSize: {
      type: Number,
      default: 10
    },

    small: Boolean,

    total: Number,

    pageCount: Number,

    currentPage: {
      type: Number,
      default: 1
    },

    layout: {
      default: 'prev, pager, next, jumper, ->, total'
    },

    pageSizes: {
      type: Array,
      default: function _default() {
        return [10, 20, 30, 40, 50, 100];
      }
    },

    popperClass: String,

    prevText: String,

    nextText: String,

    background: Boolean
  },

  data: function data() {
    return {
      internalCurrentPage: 1,
      internalPageSize: 0
    };
  },
  render: function render(h) {
    var template = h(
      'div',
      { 'class': ['el-pagination', {
          'is-background': this.background,
          'el-pagination--small': this.small
        }] },
      []
    );
    var layout = this.layout || '';
    if (!layout) return;
    var TEMPLATE_MAP = {
      prev: h(
        'prev',
        null,
        []
      ),
      jumper: h(
        'jumper',
        null,
        []
      ),
      pager: h(
        'pager',
        {
          attrs: { currentPage: this.internalCurrentPage, pageCount: this.internalPageCount },
          on: {
            'change': this.handleCurrentChange
          }
        },
        []
      ),
      next: h(
        'next',
        null,
        []
      ),
      sizes: h(
        'sizes',
        {
          attrs: { pageSizes: this.pageSizes }
        },
        []
      ),
      slot: h(
        'my-slot',
        null,
        []
      ),
      total: h(
        'total',
        null,
        []
      )
    };
    var components = layout.split(',').map(function (item) {
      return item.trim();
    });
    var rightWrapper = h(
      'div',
      { 'class': 'el-pagination__rightwrapper' },
      []
    );
    var haveRightWrapper = false;

    components.forEach(function (compo) {
      if (compo === '->') {
        haveRightWrapper = true;
        return;
      }

      if (!haveRightWrapper) {
        template.children.push(TEMPLATE_MAP[compo]);
      } else {
        rightWrapper.children.push(TEMPLATE_MAP[compo]);
      }
    });

    if (haveRightWrapper) {
      template.children.unshift(rightWrapper);
    }

    return template;
  },


  components: {
    MySlot: {
      render: function render(h) {
        return this.$parent.$slots.default ? this.$parent.$slots.default[0] : '';
      }
    },
    Prev: {
      render: function render(h) {
        return h(
          'button',
          {
            attrs: {
              type: 'button'
            },
            'class': ['btn-prev', { disabled: this.$parent.internalCurrentPage <= 1 }],
            on: {
              'click': this.$parent.prev
            }
          },
          [this.$parent.prevText ? h(
            'span',
            null,
            [this.$parent.prevText]
          ) : h(
            'i',
            { 'class': 'el-icon el-icon-arrow-left' },
            []
          )]
        );
      }
    },

    Next: {
      render: function render(h) {
        return h(
          'button',
          {
            attrs: {
              type: 'button'
            },
            'class': ['btn-next', { disabled: this.$parent.internalCurrentPage === this.$parent.internalPageCount || this.$parent.internalPageCount === 0 }],
            on: {
              'click': this.$parent.next
            }
          },
          [this.$parent.nextText ? h(
            'span',
            null,
            [this.$parent.nextText]
          ) : h(
            'i',
            { 'class': 'el-icon el-icon-arrow-right' },
            []
          )]
        );
      }
    },

    Sizes: {
      mixins: [_locale2.default],

      props: {
        pageSizes: Array
      },

      watch: {
        pageSizes: {
          immediate: true,
          handler: function handler(newVal, oldVal) {
            if ((0, _util.valueEquals)(newVal, oldVal)) return;
            if (Array.isArray(newVal)) {
              this.$parent.internalPageSize = newVal.indexOf(this.$parent.pageSize) > -1 ? this.$parent.pageSize : this.pageSizes[0];
            }
          }
        }
      },

      render: function render(h) {
        var _this = this;

        return h(
          'span',
          { 'class': 'el-pagination__sizes' },
          [h(
            'el-select',
            {
              attrs: {
                value: this.$parent.internalPageSize,
                popperClass: (this.$parent.popperClass || '') + ' is-arrow-fixed'
              },
              on: {
                'input': this.handleChange
              }
            },
            [this.pageSizes.map(function (item) {
              return h(
                'el-option',
                {
                  attrs: {
                    value: item,
                    label: item + _this.t('el.pagination.pagesize') }
                },
                []
              );
            })]
          )]
        );
      },


      components: {
        ElSelect: _select2.default,
        ElOption: _option2.default
      },

      methods: {
        handleChange: function handleChange(val) {
          if (val !== this.$parent.internalPageSize) {
            this.$parent.internalPageSize = val = parseInt(val, 10);
            this.$parent.$emit('size-change', val);
          }
        }
      }
    },

    Jumper: {
      mixins: [_locale2.default],

      data: function data() {
        return {
          oldValue: null
        };
      },


      components: { ElInput: _input2.default },

      methods: {
        handleFocus: function handleFocus(event) {
          this.oldValue = event.target.value;
        },
        handleBlur: function handleBlur(_ref) {
          var target = _ref.target;

          this.resetValueIfNeed(target.value);
          this.reassignMaxValue(target.value);
        },
        handleChange: function handleChange(value) {
          this.$parent.internalCurrentPage = this.$parent.getValidCurrentPage(value);
          this.oldValue = null;
          this.resetValueIfNeed(value);
        },
        resetValueIfNeed: function resetValueIfNeed(value) {
          var num = parseInt(value, 10);
          if (!isNaN(num)) {
            if (num < 1) {
              this.$refs.input.$el.querySelector('input').value = 1;
            } else {
              this.reassignMaxValue(value);
            }
          }
        },
        reassignMaxValue: function reassignMaxValue(value) {
          if (+value > this.$parent.internalPageCount) {
            this.$refs.input.$el.querySelector('input').value = this.$parent.internalPageCount;
          }
        }
      },

      render: function render(h) {
        return h(
          'span',
          { 'class': 'el-pagination__jump' },
          [this.t('el.pagination.goto'), h(
            'el-input',
            {
              'class': 'el-pagination__editor is-in-pagination',
              attrs: { min: 1,
                max: this.$parent.internalPageCount,
                value: this.$parent.internalCurrentPage,

                type: 'number'
              },
              domProps: {
                'value': this.$parent.internalCurrentPage
              },
              ref: 'input',
              on: {
                'change': this.handleChange,
                'focus': this.handleFocus,
                'blur': this.handleBlur
              }
            },
            []
          ), this.t('el.pagination.pageClassifier')]
        );
      }
    },

    Total: {
      mixins: [_locale2.default],

      render: function render(h) {
        return typeof this.$parent.total === 'number' ? h(
          'span',
          { 'class': 'el-pagination__total' },
          [this.t('el.pagination.total', { total: this.$parent.total })]
        ) : '';
      }
    },

    Pager: _pager2.default
  },

  methods: {
    handleCurrentChange: function handleCurrentChange(val) {
      this.internalCurrentPage = this.getValidCurrentPage(val);
    },
    prev: function prev() {
      var newVal = this.internalCurrentPage - 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
    },
    next: function next() {
      var newVal = this.internalCurrentPage + 1;
      this.internalCurrentPage = this.getValidCurrentPage(newVal);
    },
    getValidCurrentPage: function getValidCurrentPage(value) {
      value = parseInt(value, 10);

      var havePageCount = typeof this.internalPageCount === 'number';

      var resetValue = void 0;
      if (!havePageCount) {
        if (isNaN(value) || value < 1) resetValue = 1;
      } else {
        if (value < 1) {
          resetValue = 1;
        } else if (value > this.internalPageCount) {
          resetValue = this.internalPageCount;
        }
      }

      if (resetValue === undefined && isNaN(value)) {
        resetValue = 1;
      } else if (resetValue === 0) {
        resetValue = 1;
      }

      return resetValue === undefined ? value : resetValue;
    }
  },

  computed: {
    internalPageCount: function internalPageCount() {
      if (typeof this.total === 'number') {
        return Math.ceil(this.total / this.internalPageSize);
      } else if (typeof this.pageCount === 'number') {
        return this.pageCount;
      }
      return null;
    }
  },

  watch: {
    currentPage: {
      immediate: true,
      handler: function handler(val) {
        this.internalCurrentPage = val;
      }
    },

    pageSize: {
      immediate: true,
      handler: function handler(val) {
        this.internalPageSize = val;
      }
    },

    internalCurrentPage: function internalCurrentPage(newVal, oldVal) {
      var _this2 = this;

      newVal = parseInt(newVal, 10);

      /* istanbul ignore if */
      if (isNaN(newVal)) {
        newVal = oldVal || 1;
      } else {
        newVal = this.getValidCurrentPage(newVal);
      }

      if (newVal !== undefined) {
        this.$nextTick(function () {
          _this2.internalCurrentPage = newVal;
          if (oldVal !== newVal) {
            _this2.$emit('update:currentPage', newVal);
            _this2.$emit('current-change', _this2.internalCurrentPage);
          }
        });
      } else {
        this.$emit('update:currentPage', newVal);
        this.$emit('current-change', this.internalCurrentPage);
      }
    },
    internalPageCount: function internalPageCount(newVal) {
      /* istanbul ignore if */
      var oldPage = this.internalCurrentPage;
      if (newVal > 0 && oldPage === 0) {
        this.internalCurrentPage = 1;
      } else if (oldPage > newVal) {
        this.internalCurrentPage = newVal === 0 ? 1 : newVal;
      }
    }
  }
};

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pager_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pager_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9dad1ace_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pager_vue__ = __webpack_require__(49);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pager_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9dad1ace_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pager_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElPager',

  props: {
    currentPage: Number,

    pageCount: Number
  },

  watch: {
    showPrevMore: function showPrevMore(val) {
      if (!val) this.quickprevIconClass = 'el-icon-more';
    },
    showNextMore: function showNextMore(val) {
      if (!val) this.quicknextIconClass = 'el-icon-more';
    }
  },

  methods: {
    onPagerClick: function onPagerClick(event) {
      var target = event.target;
      if (target.tagName === 'UL') {
        return;
      }

      var newPage = Number(event.target.textContent);
      var pageCount = this.pageCount;
      var currentPage = this.currentPage;

      if (target.className.indexOf('more') !== -1) {
        if (target.className.indexOf('quickprev') !== -1) {
          newPage = currentPage - 5;
        } else if (target.className.indexOf('quicknext') !== -1) {
          newPage = currentPage + 5;
        }
      }

      /* istanbul ignore if */
      if (!isNaN(newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }

        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }

      if (newPage !== currentPage) {
        this.$emit('change', newPage);
      }
    }
  },

  computed: {
    pagers: function pagers() {
      var pagerCount = 7;

      var currentPage = Number(this.currentPage);
      var pageCount = Number(this.pageCount);

      var showPrevMore = false;
      var showNextMore = false;

      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 3) {
          showPrevMore = true;
        }

        if (currentPage < pageCount - 3) {
          showNextMore = true;
        }
      }

      var array = [];

      if (showPrevMore && !showNextMore) {
        var startPage = pageCount - (pagerCount - 2);
        for (var i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {
        for (var _i = 2; _i < pagerCount; _i++) {
          array.push(_i);
        }
      } else if (showPrevMore && showNextMore) {
        var offset = Math.floor(pagerCount / 2) - 1;
        for (var _i2 = currentPage - offset; _i2 <= currentPage + offset; _i2++) {
          array.push(_i2);
        }
      } else {
        for (var _i3 = 2; _i3 < pageCount; _i3++) {
          array.push(_i3);
        }
      }

      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;

      return array;
    }
  },

  data: function data() {
    return {
      current: null,
      showPrevMore: false,
      showNextMore: false,
      quicknextIconClass: 'el-icon-more',
      quickprevIconClass: 'el-icon-more'
    };
  }
};

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"el-pager",on:{"click":_vm.onPagerClick}},[(_vm.pageCount > 0)?_c('li',{staticClass:"number",class:{ active: _vm.currentPage === 1 }},[_vm._v("1")]):_vm._e(),(_vm.showPrevMore)?_c('li',{staticClass:"el-icon more btn-quickprev",class:[_vm.quickprevIconClass],on:{"mouseenter":function($event){_vm.quickprevIconClass = 'el-icon-d-arrow-left'},"mouseleave":function($event){_vm.quickprevIconClass = 'el-icon-more'}}}):_vm._e(),_vm._l((_vm.pagers),function(pager){return _c('li',{staticClass:"number",class:{ active: _vm.currentPage === pager }},[_vm._v(_vm._s(pager))])}),(_vm.showNextMore)?_c('li',{staticClass:"el-icon more btn-quicknext",class:[_vm.quicknextIconClass],on:{"mouseenter":function($event){_vm.quicknextIconClass = 'el-icon-d-arrow-right'},"mouseleave":function($event){_vm.quicknextIconClass = 'el-icon-more'}}}):_vm._e(),(_vm.pageCount > 1)?_c('li',{staticClass:"number",class:{ active: _vm.currentPage === _vm.pageCount }},[_vm._v(_vm._s(_vm.pageCount))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/select");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/option");

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(53);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_component2.default.install = function (Vue) {
  Vue.component(_component2.default.name, _component2.default);
};

exports.default = _component2.default;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3726141c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(55);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3726141c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popup = __webpack_require__(16);

var _popup2 = _interopRequireDefault(_popup);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElDialog',

  mixins: [_popup2.default, _emitter2.default, _migrating2.default],

  props: {
    title: {
      type: String,
      default: ''
    },

    modal: {
      type: Boolean,
      default: true
    },

    modalAppendToBody: {
      type: Boolean,
      default: true
    },

    appendToBody: {
      type: Boolean,
      default: false
    },

    lockScroll: {
      type: Boolean,
      default: true
    },

    closeOnClickModal: {
      type: Boolean,
      default: false
    },

    closeOnPressEscape: {
      type: Boolean,
      default: false
    },

    showClose: {
      type: Boolean,
      default: true
    },

    width: String,

    fullscreen: Boolean,

    customClass: {
      type: String,
      default: ''
    },

    top: {
      type: String,
      default: '15vh'
    },
    beforeClose: Function,
    center: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: null
    }
  },

  data: function data() {
    return {
      closed: false
    };
  },


  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.closed = false;
        this.$emit('open');
        this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(function () {
          _this.$refs.dialog.scrollTop = 0;
        });
        if (this.appendToBody) {
          document.body.appendChild(this.$el);
        }
      } else {
        this.$el.removeEventListener('scroll', this.updatePopper);
        if (!this.closed) this.$emit('close');
      }
    }
  },

  computed: {
    style: function style() {
      var style = {};
      if (this.width) {
        style.width = this.width;
      }
      if (!this.fullscreen) {
        style.marginTop = this.top;
      }
      if (this.height) {
        style["height"] = this.height;
      }
      return style;
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'size': 'size is removed.'
        }
      };
    },
    handleWrapperClick: function handleWrapperClick() {
      if (!this.closeOnClickModal) return;
      this.handleClose();
    },
    handleClose: function handleClose() {
      if (typeof this.beforeClose === 'function') {
        this.beforeClose(this.hide);
      } else {
        this.hide();
      }
    },
    hide: function hide(cancel) {
      if (cancel !== false) {
        this.$emit('update:visible', false);
        this.$emit('close');
        this.closed = true;
      }
    },
    updatePopper: function updatePopper() {
      this.broadcast('ElSelectDropdown', 'updatePopper');
      this.broadcast('ElDropdownMenu', 'updatePopper');
    }
  },

  mounted: function mounted() {
    if (this.visible) {
      this.rendered = true;
      this.open();
      if (this.appendToBody) {
        document.body.appendChild(this.$el);
      }
    }
  }
}; //
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

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"dialog-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-dialog__wrapper",on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.handleWrapperClick($event)}}},[_c('div',{ref:"dialog",staticClass:"el-dialog",class:[{ 'is-fullscreen': _vm.fullscreen, 'el-dialog--center': _vm.center }, _vm.customClass],style:(_vm.style)},[_c('div',{staticClass:"el-dialog__header"},[_vm._t("title",[_c('span',{staticClass:"el-dialog__title"},[_vm._v(_vm._s(_vm.title))])]),(_vm.showClose)?_c('button',{staticClass:"el-dialog__headerbtn",attrs:{"type":"button","aria-label":"Close"},on:{"click":_vm.handleClose}},[_c('i',{staticClass:"el-dialog__close el-icon el-icon-close"})]):_vm._e()],2),(_vm.rendered)?_c('div',{staticClass:"el-dialog__body"},[_vm._t("default")],2):_vm._e(),(_vm.$slots.footer)?_c('div',{staticClass:"el-dialog__footer"},[_vm._t("footer")],2):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _autocomplete = __webpack_require__(57);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_autocomplete2.default.install = function (Vue) {
  Vue.component(_autocomplete2.default.name, _autocomplete2.default);
};

exports.default = _autocomplete2.default;

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e159d526_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__ = __webpack_require__(62);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e159d526_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_autocomplete_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _autocompleteSuggestions = __webpack_require__(59);

var _autocompleteSuggestions2 = _interopRequireDefault(_autocompleteSuggestions);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _util = __webpack_require__(4);

var _focus = __webpack_require__(17);

var _focus2 = _interopRequireDefault(_focus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElAutocomplete',

  mixins: [_emitter2.default, (0, _focus2.default)('input'), _migrating2.default],

  componentName: 'ElAutocomplete',

  components: {
    ElInput: _input2.default,
    ElAutocompleteSuggestions: _autocompleteSuggestions2.default
  },

  directives: { Clickoutside: _clickoutside2.default },

  props: {
    bt_loading: {
      type: String,
      default: ''
    },
    bt_loadingOver: {
      type: String,
      default: ''
    },
    valueKey: {
      type: String,
      default: 'value'
    },
    popperClass: String,
    placeholder: String,
    disabled: Boolean,
    name: String,
    size: String,
    value: String,
    autofocus: Boolean,
    fetchSuggestions: Function,
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    customItem: String,
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    prefixIcon: String,
    suffixIcon: String,
    label: String,
    debounce: {
      type: Number,
      default: 300
    }
  },
  data: function data() {
    return {
      bt_is_loading_over: false, //加载完毕
      bottom_is_back: true, //是否已经执行回调
      activated: false,
      isOnComposition: false,
      suggestions: [],
      loading: false,
      highlightedIndex: -1
    };
  },

  computed: {
    suggestionVisible: function suggestionVisible() {
      var suggestions = this.suggestions;
      var isValidData = Array.isArray(suggestions) && suggestions.length > 0;
      return (isValidData || this.loading) && this.activated;
    },
    id: function id() {
      return 'el-autocomplete-' + (0, _util.generateId)();
    }
  },
  watch: {
    suggestionVisible: function suggestionVisible(val) {
      this.broadcast('ElAutocompleteSuggestions', 'visible', [val, this.$refs.input.$refs.input.offsetWidth]);
    }
  },
  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'custom-item': 'custom-item is removed, use scoped slot instead.',
          'props': 'props is removed, use value-key instead.'
        }
      };
    },
    getData: function getData(queryString) {
      var _this = this;

      this.loading = true;
      this.fetchSuggestions(queryString, function (suggestions) {
        _this.loading = false;
        if (Array.isArray(suggestions)) {
          _this.suggestions = suggestions;
        } else {
          console.error('autocomplete suggestions must be an array');
        }
      });
    },
    handleComposition: function handleComposition(event) {
      if (event.type === 'compositionend') {
        this.isOnComposition = false;
        this.handleChange(event.target.value);
      } else {
        this.isOnComposition = true;
      }
    },
    handleChange: function handleChange(value) {
      this.$emit('input', value);
      if (this.isOnComposition || !this.triggerOnFocus && !value) {
        this.suggestions = [];
        return;
      }
      this.debouncedGetData(value);
    },
    handleFocus: function handleFocus(event) {
      this.activated = true;
      this.$emit('focus', event);
      if (this.triggerOnFocus) {
        this.debouncedGetData(this.value);
      }
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
    },
    close: function close(e) {
      this.activated = false;
    },
    handleKeyEnter: function handleKeyEnter(e) {
      var _this2 = this;

      if (this.suggestionVisible && this.highlightedIndex >= 0 && this.highlightedIndex < this.suggestions.length) {
        e.preventDefault();
        this.select(this.suggestions[this.highlightedIndex]);
      } else if (this.selectWhenUnmatched) {
        this.$emit('select', { value: this.value });
        this.$nextTick(function (_) {
          _this2.suggestions = [];
          _this2.highlightedIndex = -1;
        });
      }
    },
    select: function select(item) {
      var _this3 = this;

      this.$emit('input', item[this.valueKey]);
      this.$emit('select', item);
      this.$nextTick(function (_) {
        _this3.suggestions = [];
        _this3.highlightedIndex = -1;
      });
    },
    highlight: function highlight(index) {
      if (!this.suggestionVisible || this.loading) {
        return;
      }
      if (index < 0) {
        this.highlightedIndex = -1;
        return;
      }
      if (index >= this.suggestions.length) {
        index = this.suggestions.length - 1;
      }
      var suggestion = this.$refs.suggestions.$el.querySelector('.el-autocomplete-suggestion__wrap');
      var suggestionList = suggestion.querySelectorAll('.el-autocomplete-suggestion__list li');

      var highlightItem = suggestionList[index];
      var scrollTop = suggestion.scrollTop;
      var offsetTop = highlightItem.offsetTop;

      if (offsetTop + highlightItem.scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += highlightItem.scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= highlightItem.scrollHeight;
      }
      this.highlightedIndex = index;
      this.$el.querySelector('.el-input__inner').setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    var tha_yjb = this;
    this.$on('to_bottom', function () {
      if (!tha_yjb.bt_loading || !tha_yjb.bt_loadingOver || tha_yjb.bt_is_loading_over) {
        return;
      }
      var cb = function cb(suggestions, isover) {
        if (Array.isArray(suggestions)) {
          if (suggestions.length > 0) {
            suggestions.forEach(function (data) {
              tha_yjb.suggestions.push(data);
            });
            if (isover == 'over') {
              tha_yjb.bt_is_loading_over = true;
            }
          } else {
            tha_yjb.bt_is_loading_over = true;
          }
        } else {
          console.error('autocomplete suggestions must be an array');
        }
        tha_yjb.bottom_is_back = true;
      };

      if (tha_yjb.bottom_is_back) {
        tha_yjb.bottom_is_back = false;
        tha_yjb.$emit('is_bottom', cb);
      }
    });
    this.debouncedGetData = (0, _debounce2.default)(this.debounce, function (val) {
      _this4.getData(val);
    });
    this.$on('item-click', function (item) {
      _this4.select(item);
    });
    var $input = this.$el.querySelector('.el-input__inner');
    $input.setAttribute('role', 'textbox');
    $input.setAttribute('aria-autocomplete', 'list');
    $input.setAttribute('aria-controls', 'id');
    $input.setAttribute('aria-activedescendant', this.id + '-item-' + this.highlightedIndex);
  },
  beforeDestroy: function beforeDestroy() {
    this.$refs.suggestions.$destroy();
  }
};

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_suggestions_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_suggestions_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_suggestions_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c4b420b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_autocomplete_suggestions_vue__ = __webpack_require__(61);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_autocomplete_suggestions_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c4b420b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_autocomplete_suggestions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _scrollbar = __webpack_require__(19);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { ElScrollbar: _scrollbar2.default },
  mixins: [_vuePopper2.default, _emitter2.default],

  componentName: 'ElAutocompleteSuggestions',

  data: function data() {
    return {
      parent: this.$parent,
      dropdownWidth: ''
    };
  },


  props: {
    options: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },
    id: String
  },

  methods: {
    select: function select(item) {
      this.dispatch('ElAutocomplete', 'item-click', item);
    }
  },

  updated: function updated() {
    var _this = this;

    this.$nextTick(function (_) {
      _this.updatePopper();
    });
  },
  mounted: function mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$refs.input.$refs.input;
    this.referenceList = this.$el.querySelector('.el-autocomplete-suggestion__list');
    this.referenceList.setAttribute('role', 'listbox');
    this.referenceList.setAttribute('id', this.id);
  },
  created: function created() {
    var _this2 = this;

    this.$on('visible', function (val, inputWidth) {
      _this2.dropdownWidth = inputWidth + 'px';
      _this2.showPopper = val;
    });
  }
}; //
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

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":_vm.doDestroy}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-autocomplete-suggestion el-popper",class:{ 'is-loading': _vm.parent.loading },style:({ width: _vm.dropdownWidth }),attrs:{"role":"region"}},[_c('el-scrollbar',{attrs:{"tag":"ul","wrap-class":"el-autocomplete-suggestion__wrap","view-class":"el-autocomplete-suggestion__list"}},[(_vm.parent.loading)?_c('li',[_c('i',{staticClass:"el-icon-loading"})]):_vm._t("default")],2)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.close),expression:"close"}],staticClass:"el-autocomplete",attrs:{"aria-haspopup":"listbox","role":"combobox","aria-expanded":_vm.suggestionVisible,"aria-owns":_vm.id}},[_c('el-input',_vm._b({ref:"input",attrs:{"label":_vm.label},on:{"input":_vm.handleChange,"focus":_vm.handleFocus,"blur":_vm.handleBlur},nativeOn:{"compositionstart":function($event){_vm.handleComposition($event)},"compositionupdate":function($event){_vm.handleComposition($event)},"compositionend":function($event){_vm.handleComposition($event)},"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.preventDefault();_vm.highlight(_vm.highlightedIndex - 1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.preventDefault();_vm.highlight(_vm.highlightedIndex + 1)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleKeyEnter($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key)){ return null; }_vm.close($event)}]}},'el-input',_vm.$props,false),[(_vm.$slots.prepend)?_c('template',{slot:"prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.$slots.append)?_c('template',{slot:"append"},[_vm._t("append")],2):_vm._e(),(_vm.$slots.prefix)?_c('template',{slot:"prefix"},[_vm._t("prefix")],2):_vm._e(),(_vm.$slots.suffix)?_c('template',{slot:"suffix"},[_vm._t("suffix")],2):_vm._e()],2),_c('el-autocomplete-suggestions',{ref:"suggestions",class:[_vm.popperClass ? _vm.popperClass : ''],attrs:{"visible-arrow":"","placement":"bottom-start","id":_vm.id}},[_vm._l((_vm.suggestions),function(item,index){return _c('li',{key:index,class:{'highlighted': _vm.highlightedIndex === index},attrs:{"id":(_vm.id + "-item-" + index),"role":"option","aria-selected":_vm.highlightedIndex === index},on:{"click":function($event){_vm.select(item)}}},[_vm._t("default",[_vm._v("\n        "+_vm._s(item[_vm.valueKey])+"\n      ")],{item:item})],2)}),(_vm.bt_loading && _vm.bt_loadingOver)?_c('li',{staticStyle:{"text-align":"center"}},[_vm._v(_vm._s(_vm.bt_is_loading_over ? _vm.bt_loadingOver :  _vm.bt_loading))]):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dropdown = __webpack_require__(64);

var _dropdown2 = _interopRequireDefault(_dropdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_dropdown2.default.install = function (Vue) {
  Vue.component(_dropdown2.default.name, _dropdown2.default);
};

exports.default = _dropdown2.default;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

var _buttonGroup = __webpack_require__(66);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElDropdown',

  componentName: 'ElDropdown',

  mixins: [_emitter2.default, _migrating2.default],

  directives: { Clickoutside: _clickoutside2.default },

  components: {
    ElButton: _button2.default,
    ElButtonGroup: _buttonGroup2.default
  },

  provide: function provide() {
    return {
      dropdown: this
    };
  },


  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    type: String,
    size: {
      type: String,
      default: ''
    },
    splitButton: Boolean,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: 'bottom-end'
    },
    visibleArrow: {
      default: true
    },
    showTimeout: {
      type: Number,
      default: 250
    },
    hideTimeout: {
      type: Number,
      default: 150
    }
  },

  data: function data() {
    return {
      timeout: null,
      visible: false,
      triggerElm: null,
      menuItems: null,
      menuItemsArray: null,
      dropdownElm: null,
      focusing: false
    };
  },


  computed: {
    dropdownSize: function dropdownSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    listId: function listId() {
      return 'dropdown-menu-' + (0, _util.generateId)();
    }
  },

  mounted: function mounted() {
    this.$on('menu-item-click', this.handleMenuItemClick);
    this.initEvent();
    this.initAria();
  },


  watch: {
    visible: function visible(val) {
      this.broadcast('ElDropdownMenu', 'visible', val);
      this.$emit('visible-change', val);
    },
    focusing: function focusing(val) {
      var selfDefine = this.$el.querySelector('.el-dropdown-selfdefine');
      if (selfDefine) {
        // 自定义
        if (val) {
          selfDefine.className += ' focusing';
        } else {
          selfDefine.className = selfDefine.className.replace('focusing', '');
        }
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'menu-align': 'menu-align is renamed to placement.'
        }
      };
    },
    show: function show() {
      var _this = this;

      if (this.triggerElm.disabled) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.visible = true;
      }, this.showTimeout);
    },
    hide: function hide() {
      var _this2 = this;

      if (this.triggerElm.disabled) return;
      this.removeTabindex();
      this.resetTabindex(this.triggerElm);
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.visible = false;
      }, this.hideTimeout);
    },
    handleClick: function handleClick() {
      if (this.triggerElm.disabled) return;
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    },
    handleTriggerKeyDown: function handleTriggerKeyDown(ev) {
      var keyCode = ev.keyCode;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        this.removeTabindex();
        this.resetTabindex(this.menuItems[0]);
        this.menuItems[0].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // space enter选中
        this.handleClick();
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab || esc
        this.hide();
      }
      return;
    },
    handleItemKeyDown: function handleItemKeyDown(ev) {
      var keyCode = ev.keyCode;
      var target = ev.target;
      var currentIndex = this.menuItemsArray.indexOf(target);
      var max = this.menuItemsArray.length - 1;
      var nextIndex = void 0;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up/down
        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          // down
          nextIndex = currentIndex < max ? currentIndex + 1 : max;
        }
        this.removeTabindex();
        this.resetTabindex(this.menuItems[nextIndex]);
        this.menuItems[nextIndex].focus();
        ev.preventDefault();
        ev.stopPropagation();
      } else if (keyCode === 13) {
        // enter选中
        this.triggerElm.focus();
        target.click();
        if (!this.hideOnClick) {
          // click关闭
          this.visible = false;
        }
      } else if ([9, 27].indexOf(keyCode) > -1) {
        // tab // esc
        this.hide();
        this.triggerElm.focus();
      }
      return;
    },
    resetTabindex: function resetTabindex(ele) {
      // 下次tab时组件聚焦元素
      this.removeTabindex();
      ele.setAttribute('tabindex', '0'); // 下次期望的聚焦元素
    },
    removeTabindex: function removeTabindex() {
      this.triggerElm.setAttribute('tabindex', '-1');
      this.menuItemsArray.forEach(function (item) {
        item.setAttribute('tabindex', '-1');
      });
    },
    initAria: function initAria() {
      this.dropdownElm.setAttribute('id', this.listId);
      this.triggerElm.setAttribute('aria-haspopup', 'list');
      this.triggerElm.setAttribute('aria-controls', this.listId);
      this.menuItems = this.dropdownElm.querySelectorAll("[tabindex='-1']");
      this.menuItemsArray = Array.prototype.slice.call(this.menuItems);

      if (!this.splitButton) {
        // 自定义
        this.triggerElm.setAttribute('role', 'button');
        this.triggerElm.setAttribute('tabindex', '0');
        this.triggerElm.setAttribute('class', this.triggerElm.getAttribute('class') + ' el-dropdown-selfdefine'); // 控制
      }
    },
    initEvent: function initEvent() {
      var _this3 = this;

      var trigger = this.trigger,
          show = this.show,
          hide = this.hide,
          handleClick = this.handleClick,
          splitButton = this.splitButton,
          handleTriggerKeyDown = this.handleTriggerKeyDown,
          handleItemKeyDown = this.handleItemKeyDown;

      this.triggerElm = splitButton ? this.$refs.trigger.$el : this.$slots.default[0].elm;

      var dropdownElm = this.dropdownElm = this.$slots.dropdown[0].elm;

      this.triggerElm.addEventListener('keydown', handleTriggerKeyDown); // triggerElm keydown
      dropdownElm.addEventListener('keydown', handleItemKeyDown, true); // item keydown
      // 控制自定义元素的样式
      if (!splitButton) {
        this.triggerElm.addEventListener('focus', function () {
          _this3.focusing = true;
        });
        this.triggerElm.addEventListener('blur', function () {
          _this3.focusing = false;
        });
        this.triggerElm.addEventListener('click', function () {
          _this3.focusing = false;
        });
      }
      if (trigger === 'hover') {
        this.triggerElm.addEventListener('mouseenter', show);
        this.triggerElm.addEventListener('mouseleave', hide);
        dropdownElm.addEventListener('mouseenter', show);
        dropdownElm.addEventListener('mouseleave', hide);
      } else if (trigger === 'click') {
        this.triggerElm.addEventListener('click', handleClick);
      }
    },
    handleMenuItemClick: function handleMenuItemClick(command, instance) {
      if (this.hideOnClick) {
        this.visible = false;
      }
      this.$emit('command', command, instance);
    }
  },

  render: function render(h) {
    var _this4 = this;

    var hide = this.hide,
        splitButton = this.splitButton,
        type = this.type,
        dropdownSize = this.dropdownSize;


    var handleMainButtonClick = function handleMainButtonClick(event) {
      _this4.$emit('click', event);
      hide();
    };

    var triggerElm = !splitButton ? this.$slots.default : h(
      'el-button-group',
      null,
      [h(
        'el-button',
        {
          attrs: { type: type, size: dropdownSize },
          nativeOn: {
            'click': handleMainButtonClick
          }
        },
        [this.$slots.default]
      ), h(
        'el-button',
        { ref: 'trigger', attrs: { type: type, size: dropdownSize },
          'class': 'el-dropdown__caret-button' },
        [h(
          'i',
          { 'class': 'el-dropdown__icon el-icon-arrow-down' },
          []
        )]
      )]
    );

    return h(
      'div',
      { 'class': 'el-dropdown', directives: [{
          name: 'clickoutside',
          value: hide
        }]
      },
      [triggerElm, this.$slots.dropdown]
    );
  }
};

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/button-group");

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dropdownMenu = __webpack_require__(68);

var _dropdownMenu2 = _interopRequireDefault(_dropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_dropdownMenu2.default.install = function (Vue) {
  Vue.component(_dropdownMenu2.default.name, _dropdownMenu2.default);
};

exports.default = _dropdownMenu2.default;

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ba3e8d1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__ = __webpack_require__(70);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ba3e8d1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElDropdownMenu',

  componentName: 'ElDropdownMenu',

  mixins: [_vuePopper2.default],

  props: {
    visibleArrow: {
      type: Boolean,
      default: true
    }
  },

  data: function data() {
    return {
      size: this.dropdown.dropdownSize
    };
  },


  inject: ['dropdown'],

  created: function created() {
    var _this = this;

    this.$on('updatePopper', function () {
      if (_this.showPopper) _this.updatePopper();
    });
    this.$on('visible', function (val) {
      _this.showPopper = val;
    });
  },
  mounted: function mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },


  watch: {
    'dropdown.placement': {
      immediate: true,
      handler: function handler(val) {
        this.currentPlacement = val;
      }
    }
  }
}; //
//
//
//
//
//
//

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":_vm.doDestroy}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-dropdown-menu el-popper",class:[_vm.size && ("el-dropdown-menu--" + _vm.size)]},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dropdownItem = __webpack_require__(72);

var _dropdownItem2 = _interopRequireDefault(_dropdownItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_dropdownItem2.default.install = function (Vue) {
  Vue.component(_dropdownItem2.default.name, _dropdownItem2.default);
};

exports.default = _dropdownItem2.default;

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8eb7ee34_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__ = __webpack_require__(74);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_dropdown_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8eb7ee34_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_dropdown_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElDropdownItem',

  mixins: [_emitter2.default],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean
  },

  methods: {
    handleClick: function handleClick(e) {
      this.dispatch('ElDropdown', 'menu-item-click', [this.command, this]);
    }
  }
}; //
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

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"el-dropdown-menu__item",class:{
    'is-disabled': _vm.disabled,
    'el-dropdown-menu__item--divided': _vm.divided
  },attrs:{"aria-disabled":_vm.disabled,"tabindex":_vm.disabled ? null : -1},on:{"click":_vm.handleClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menu = __webpack_require__(76);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_menu2.default.install = function (Vue) {
  Vue.component(_menu2.default.name, _menu2.default);
};

exports.default = _menu2.default;

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26b0cd81_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(81);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26b0cd81_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _ariaMenubar = __webpack_require__(78);

var _ariaMenubar2 = _interopRequireDefault(_ariaMenubar);

var _dom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElMenu',

  componentName: 'ElMenu',

  mixins: [_emitter2.default, _migrating2.default],

  provide: function provide() {
    return {
      rootMenu: this
    };
  },


  components: {
    'el-menu-collapse-transition': {
      functional: true,
      render: function render(createElement, context) {
        var data = {
          props: {
            mode: 'out-in'
          },
          on: {
            beforeEnter: function beforeEnter(el) {
              el.style.opacity = 0.2;
            },
            enter: function enter(el) {
              (0, _dom.addClass)(el, 'el-opacity-transition');
              el.style.opacity = 1;
            },
            afterEnter: function afterEnter(el) {
              (0, _dom.removeClass)(el, 'el-opacity-transition');
              el.style.opacity = '';
            },
            beforeLeave: function beforeLeave(el) {
              if (!el.dataset) el.dataset = {};

              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
                (0, _dom.removeClass)(el, 'el-menu--collapse');
                el.dataset.oldOverflow = el.style.overflow;
                el.dataset.scrollWidth = el.scrollWidth;
                (0, _dom.addClass)(el, 'el-menu--collapse');
              }

              el.style.width = el.scrollWidth + 'px';
              el.style.overflow = 'hidden';
            },
            leave: function leave(el) {
              if (!(0, _dom.hasClass)(el, 'el-menu--collapse')) {
                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
                el.style.width = '64px';
              } else {
                (0, _dom.addClass)(el, 'horizontal-collapse-transition');
                el.style.width = el.dataset.scrollWidth + 'px';
              }
            },
            afterLeave: function afterLeave(el) {
              (0, _dom.removeClass)(el, 'horizontal-collapse-transition');
              if ((0, _dom.hasClass)(el, 'el-menu--collapse')) {
                el.style.width = el.dataset.scrollWidth + 'px';
              } else {
                el.style.width = '64px';
              }
              el.style.overflow = el.dataset.oldOverflow;
            }
          }
        };
        return createElement('transition', data, context.children);
      }
    }
  },

  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    defaultActive: {
      type: String,
      default: ''
    },
    defaultOpeneds: Array,
    uniqueOpened: Boolean,
    router: Boolean,
    menuTrigger: {
      type: String,
      default: 'hover'
    },
    collapse: Boolean,
    backgroundColor: String,
    textColor: String,
    activeTextColor: String
  },
  data: function data() {
    return {
      activeIndex: this.defaultActive,
      openedMenus: this.defaultOpeneds && !this.collapse ? this.defaultOpeneds.slice(0) : [],
      items: {},
      submenus: {}
    };
  },

  computed: {
    hoverBackground: function hoverBackground() {
      return this.backgroundColor ? this.mixColor(this.backgroundColor, 0.2) : '';
    }
  },
  watch: {
    defaultActive: function defaultActive(value) {
      var item = this.items[value];
      if (item) {
        this.activeIndex = item.index;
        this.initOpenedMenu();
      } else {
        this.activeIndex = '';
      }
    },
    defaultOpeneds: function defaultOpeneds(value) {
      if (!this.collapse) {
        this.openedMenus = value;
      }
    },
    collapse: function collapse(value) {
      if (value) this.openedMenus = [];
    }
  },
  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'theme': 'theme is removed.'
        }
      };
    },
    getColorChannels: function getColorChannels(color) {
      color = color.replace('#', '');
      if (/^[0-9a-fA-F]{3}$/.test(color)) {
        color = color.split('');
        for (var i = 2; i >= 0; i--) {
          color.splice(i, 0, color[i]);
        }
        color = color.join('');
      }
      if (/^[0-9a-fA-F]{6}$/.test(color)) {
        return {
          red: parseInt(color.slice(0, 2), 16),
          green: parseInt(color.slice(2, 4), 16),
          blue: parseInt(color.slice(4, 6), 16)
        };
      } else {
        return {
          red: 255,
          green: 255,
          blue: 255
        };
      }
    },
    mixColor: function mixColor(color, percent) {
      var _getColorChannels = this.getColorChannels(color),
          red = _getColorChannels.red,
          green = _getColorChannels.green,
          blue = _getColorChannels.blue;

      if (percent > 0) {
        // shade given color
        red *= 1 - percent;
        green *= 1 - percent;
        blue *= 1 - percent;
      } else {
        // tint given color
        red += (255 - red) * percent;
        green += (255 - green) * percent;
        blue += (255 - blue) * percent;
      }
      return 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
    },
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    openMenu: function openMenu(index, indexPath) {
      var openedMenus = this.openedMenus;
      if (openedMenus.indexOf(index) !== -1) return;
      // 将不在该菜单路径下的其余菜单收起
      // collapse all menu that are not under current menu item
      if (this.uniqueOpened) {
        this.openedMenus = openedMenus.filter(function (index) {
          return indexPath.indexOf(index) !== -1;
        });
      }
      this.openedMenus.push(index);
    },
    closeMenu: function closeMenu(index) {
      var i = this.openedMenus.indexOf(index);
      if (i !== -1) {
        this.openedMenus.splice(i, 1);
      }
    },
    handleSubmenuClick: function handleSubmenuClick(submenu) {
      var index = submenu.index,
          indexPath = submenu.indexPath;

      var isOpened = this.openedMenus.indexOf(index) !== -1;

      if (isOpened) {
        this.closeMenu(index);
        this.$emit('close', index, indexPath);
      } else {
        this.openMenu(index, indexPath);
        this.$emit('open', index, indexPath);
      }
    },
    handleItemClick: function handleItemClick(item) {
      var index = item.index,
          indexPath = item.indexPath;

      this.activeIndex = item.index;
      this.$emit('select', index, indexPath, item);

      if (this.mode === 'horizontal' || this.collapse) {
        this.openedMenus = [];
      }

      if (this.router) {
        this.routeToItem(item);
      }
    },

    // 初始化展开菜单
    // initialize opened menu
    initOpenedMenu: function initOpenedMenu() {
      var _this = this;

      var index = this.activeIndex;
      var activeItem = this.items[index];
      if (!activeItem || this.mode === 'horizontal' || this.collapse) return;

      var indexPath = activeItem.indexPath;

      // 展开该菜单项的路径上所有子菜单
      // expand all submenus of the menu item
      indexPath.forEach(function (index) {
        var submenu = _this.submenus[index];
        submenu && _this.openMenu(index, submenu.indexPath);
      });
    },
    routeToItem: function routeToItem(item) {
      var route = item.route || item.index;
      try {
        this.$router.push(route);
      } catch (e) {
        console.error(e);
      }
    },
    open: function open(index) {
      var _this2 = this;

      var indexPath = this.submenus[index.toString()].indexPath;

      indexPath.forEach(function (i) {
        return _this2.openMenu(i, indexPath);
      });
    },
    close: function close(index) {
      this.closeMenu(index);
    }
  },
  mounted: function mounted() {
    this.initOpenedMenu();
    this.$on('item-click', this.handleItemClick);
    this.$on('submenu-click', this.handleSubmenuClick);
    if (this.mode === 'horizontal') {
      new _ariaMenubar2.default(this.$el); // eslint-disable-line
    }
  }
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ariaMenuitem = __webpack_require__(79);

var _ariaMenuitem2 = _interopRequireDefault(_ariaMenuitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(domNode) {
  this.domNode = domNode;
  this.init();
};

Menu.prototype.init = function () {
  var menuChildren = this.domNode.childNodes;
  [].filter.call(menuChildren, function (child) {
    return child.nodeType === 1;
  }).forEach(function (child) {
    new _ariaMenuitem2.default(child); // eslint-disable-line
  });
};
exports.default = Menu;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ariaUtils = __webpack_require__(29);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

var _ariaSubmenu = __webpack_require__(80);

var _ariaSubmenu2 = _interopRequireDefault(_ariaSubmenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuItem = function MenuItem(domNode) {
  this.domNode = domNode;
  this.submenu = null;
  this.init();
};

MenuItem.prototype.init = function () {
  this.domNode.setAttribute('tabindex', '0');
  var menuChild = this.domNode.querySelector('.el-menu');
  if (menuChild) {
    this.submenu = new _ariaSubmenu2.default(this, menuChild);
  }
  this.addListeners();
};

MenuItem.prototype.addListeners = function () {
  var _this = this;

  var keys = _ariaUtils2.default.keys;
  this.domNode.addEventListener('keydown', function (event) {
    var prevDef = false;
    switch (event.keyCode) {
      case keys.down:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu.gotoSubIndex(0);
        prevDef = true;
        break;
      case keys.up:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseenter');
        _this.submenu.gotoSubIndex(_this.submenu.subMenuItems.length - 1);
        prevDef = true;
        break;
      case keys.tab:
        _ariaUtils2.default.triggerEvent(event.currentTarget, 'mouseleave');
        break;
      case keys.enter:
      case keys.space:
        prevDef = true;
        event.currentTarget.click();
        break;
    }
    if (prevDef) {
      event.preventDefault();
    }
  });
};

exports.default = MenuItem;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _ariaUtils = __webpack_require__(29);

var _ariaUtils2 = _interopRequireDefault(_ariaUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubMenu = function SubMenu(parent, domNode) {
  this.domNode = domNode;
  this.parent = parent;
  this.subMenuItems = [];
  this.subIndex = 0;
  this.init();
};

SubMenu.prototype.init = function () {
  this.subMenuItems = this.domNode.querySelectorAll('li');
  this.addListeners();
};

SubMenu.prototype.gotoSubIndex = function (idx) {
  if (idx === this.subMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = this.subMenuItems.length - 1;
  }
  this.subMenuItems[idx].focus();
  this.subIndex = idx;
};

SubMenu.prototype.addListeners = function () {
  var _this = this;

  var keys = _ariaUtils2.default.keys;
  var parentNode = this.parent.domNode;
  Array.prototype.forEach.call(this.subMenuItems, function (el) {
    el.addEventListener('keydown', function (event) {
      var prevDef = false;
      switch (event.keyCode) {
        case keys.down:
          _this.gotoSubIndex(_this.subIndex + 1);
          prevDef = true;
          break;
        case keys.up:
          _this.gotoSubIndex(_this.subIndex - 1);
          prevDef = true;
          break;
        case keys.tab:
          _ariaUtils2.default.triggerEvent(parentNode, 'mouseleave');
          break;
        case keys.enter:
        case keys.space:
          prevDef = true;
          event.currentTarget.click();
          break;
      }
      if (prevDef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
  });
};

exports.default = SubMenu;

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-menu-collapse-transition',[_c('ul',{key:+_vm.collapse,staticClass:"el-menu",class:{
      'el-menu--horizontal': _vm.mode === 'horizontal',
      'el-menu--collapse': _vm.collapse
    },style:({ backgroundColor: _vm.backgroundColor || '' }),attrs:{"role":"menubar"}},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _submenu = __webpack_require__(83);

var _submenu2 = _interopRequireDefault(_submenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_submenu2.default.install = function (Vue) {
  Vue.component(_submenu2.default.name, _submenu2.default);
};

exports.default = _submenu2.default;

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90542176_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_submenu_vue__ = __webpack_require__(85);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_submenu_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_90542176_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_submenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapseTransition = __webpack_require__(20);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _menuMixin = __webpack_require__(30);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElSubmenu',

  componentName: 'ElSubmenu',

  mixins: [_menuMixin2.default, _emitter2.default],

  components: { ElCollapseTransition: _collapseTransition2.default },

  props: {
    index: {
      type: String,
      required: true
    }
  },

  data: function data() {
    return {
      timeout: null,
      items: {},
      submenus: {}
    };
  },

  computed: {
    menuTransitionName: function menuTransitionName() {
      return this.rootMenu.collapse ? 'el-zoom-in-left' : 'el-zoom-in-top';
    },
    opened: function opened() {
      return this.rootMenu.openedMenus.indexOf(this.index) > -1;
    },
    active: function active() {
      var isActive = false;
      var submenus = this.submenus;
      var items = this.items;

      Object.keys(items).forEach(function (index) {
        if (items[index].active) {
          isActive = true;
        }
      });

      Object.keys(submenus).forEach(function (index) {
        if (submenus[index].active) {
          isActive = true;
        }
      });

      return isActive;
    },
    hoverBackground: function hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor: function backgroundColor() {
      return this.rootMenu.backgroundColor || '';
    },
    activeTextColor: function activeTextColor() {
      return this.rootMenu.activeTextColor || '';
    },
    textColor: function textColor() {
      return this.rootMenu.textColor || '';
    },
    mode: function mode() {
      return this.rootMenu.mode;
    },
    titleStyle: function titleStyle() {
      if (this.mode !== 'horizontal') {
        return {
          color: this.textColor
        };
      }
      return {
        borderBottomColor: this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent',
        color: this.active ? this.activeTextColor : this.textColor
      };
    }
  },
  methods: {
    addItem: function addItem(item) {
      this.$set(this.items, item.index, item);
    },
    removeItem: function removeItem(item) {
      delete this.items[item.index];
    },
    addSubmenu: function addSubmenu(item) {
      this.$set(this.submenus, item.index, item);
    },
    removeSubmenu: function removeSubmenu(item) {
      delete this.submenus[item.index];
    },
    handleClick: function handleClick() {
      var rootMenu = this.rootMenu;

      if (rootMenu.menuTrigger === 'hover' && rootMenu.mode === 'horizontal' || rootMenu.collapse && rootMenu.mode === 'vertical') {
        return;
      }
      this.dispatch('ElMenu', 'submenu-click', this);
    },
    handleMouseenter: function handleMouseenter() {
      var _this = this;

      var rootMenu = this.rootMenu;

      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
        return;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this.rootMenu.openMenu(_this.index, _this.indexPath);
      }, 300);
    },
    handleMouseleave: function handleMouseleave() {
      var _this2 = this;

      var rootMenu = this.rootMenu;

      if (rootMenu.menuTrigger === 'click' && rootMenu.mode === 'horizontal' || !rootMenu.collapse && rootMenu.mode === 'vertical') {
        return;
      }
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this2.rootMenu.closeMenu(_this2.index);
      }, 300);
    },
    handleTitleMouseenter: function handleTitleMouseenter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      var title = this.$refs['submenu-title'];
      title && (title.style.backgroundColor = this.rootMenu.hoverBackground);
    },
    handleTitleMouseleave: function handleTitleMouseleave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      var title = this.$refs['submenu-title'];
      title && (title.style.backgroundColor = this.rootMenu.backgroundColor || '');
    }
  },
  created: function created() {
    this.parentMenu.addSubmenu(this);
    this.rootMenu.addSubmenu(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeSubmenu(this);
    this.rootMenu.removeSubmenu(this);
  }
}; //
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

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{class:{
    'el-submenu': true,
    'is-active': _vm.active,
    'is-opened': _vm.opened
  },attrs:{"role":"menuitem","aria-haspopup":"true","aria-expanded":_vm.opened},on:{"mouseenter":_vm.handleMouseenter,"mouseleave":_vm.handleMouseleave,"focus":_vm.handleMouseenter}},[_c('div',{ref:"submenu-title",staticClass:"el-submenu__title",style:([_vm.paddingStyle, _vm.titleStyle, { backgroundColor: _vm.backgroundColor }]),on:{"click":_vm.handleClick,"mouseenter":_vm.handleTitleMouseenter,"mouseleave":_vm.handleTitleMouseleave}},[_vm._t("title"),_c('i',{class:{
      'el-submenu__icon-arrow': true,
      'el-icon-arrow-down': _vm.rootMenu.mode === 'horizontal' || _vm.rootMenu.mode === 'vertical' && !_vm.rootMenu.collapse,
      'el-icon-arrow-right': _vm.rootMenu.mode === 'vertical' && _vm.rootMenu.collapse
    }})],2),(_vm.rootMenu.mode === 'horizontal' || (_vm.rootMenu.mode === 'vertical' && _vm.rootMenu.collapse))?[_c('transition',{attrs:{"name":_vm.menuTransitionName}},[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"}],staticClass:"el-menu",style:({ backgroundColor: _vm.rootMenu.backgroundColor || '' }),attrs:{"role":"menu"}},[_vm._t("default")],2)])]:_c('el-collapse-transition',[_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.opened),expression:"opened"}],staticClass:"el-menu",style:({ backgroundColor: _vm.rootMenu.backgroundColor || '' }),attrs:{"role":"menu"}},[_vm._t("default")],2)])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menuItem = __webpack_require__(87);

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_menuItem2.default.install = function (Vue) {
  Vue.component(_menuItem2.default.name, _menuItem2.default);
};

exports.default = _menuItem2.default;

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ea121ba_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__ = __webpack_require__(89);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6ea121ba_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menuMixin = __webpack_require__(30);

var _menuMixin2 = _interopRequireDefault(_menuMixin);

var _tooltip = __webpack_require__(22);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElMenuItem',

  componentName: 'ElMenuItem',

  mixins: [_menuMixin2.default, _emitter2.default],

  components: { ElTooltip: _tooltip2.default },

  props: {
    index: {
      type: String,
      required: true
    },
    route: {
      type: [String, Object],
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    active: function active() {
      return this.index === this.rootMenu.activeIndex;
    },
    hoverBackground: function hoverBackground() {
      return this.rootMenu.hoverBackground;
    },
    backgroundColor: function backgroundColor() {
      return this.rootMenu.backgroundColor || '';
    },
    activeTextColor: function activeTextColor() {
      return this.rootMenu.activeTextColor || '';
    },
    textColor: function textColor() {
      return this.rootMenu.textColor || '';
    },
    mode: function mode() {
      return this.rootMenu.mode;
    },
    itemStyle: function itemStyle() {
      var style = {
        color: this.active ? this.activeTextColor : this.textColor
      };
      if (this.mode === 'horizontal' && !this.isNested) {
        style.borderBottomColor = this.active ? this.rootMenu.activeTextColor ? this.activeTextColor : '' : 'transparent';
      }
      return style;
    },
    isNested: function isNested() {
      return this.parentMenu !== this.rootMenu;
    }
  },
  methods: {
    onMouseEnter: function onMouseEnter() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      this.$el.style.backgroundColor = this.hoverBackground;
    },
    onMouseLeave: function onMouseLeave() {
      if (this.mode === 'horizontal' && !this.rootMenu.backgroundColor) return;
      this.$el.style.backgroundColor = this.backgroundColor;
    },
    handleClick: function handleClick() {
      this.dispatch('ElMenu', 'item-click', this);
      this.$emit('click', this);
    }
  },
  created: function created() {
    this.parentMenu.addItem(this);
    this.rootMenu.addItem(this);
  },
  beforeDestroy: function beforeDestroy() {
    this.parentMenu.removeItem(this);
    this.rootMenu.removeItem(this);
  }
}; //
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

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"el-menu-item",class:{
    'is-active': _vm.active,
    'is-disabled': _vm.disabled
  },style:([_vm.paddingStyle, _vm.itemStyle, { backgroundColor: _vm.backgroundColor }]),attrs:{"role":"menuitem","tabindex":"-1"},on:{"click":_vm.handleClick,"mouseenter":_vm.onMouseEnter,"focus":_vm.onMouseEnter,"blur":_vm.onMouseLeave,"mouseleave":_vm.onMouseLeave}},[(_vm.$parent === _vm.rootMenu && _vm.rootMenu.collapse)?_c('el-tooltip',{attrs:{"effect":"dark","placement":"right"}},[_c('div',{attrs:{"slot":"content"},slot:"content"},[_vm._t("title")],2),_c('div',{staticStyle:{"position":"absolute","left":"0","top":"0","height":"100%","width":"100%","display":"inline-block","box-sizing":"border-box","padding":"0 20px"}},[_vm._t("default")],2)]):[_vm._t("default"),_vm._t("title")]],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _menuItemGroup = __webpack_require__(91);

var _menuItemGroup2 = _interopRequireDefault(_menuItemGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_menuItemGroup2.default.install = function (Vue) {
  Vue.component(_menuItemGroup2.default.name, _menuItemGroup2.default);
};

exports.default = _menuItemGroup2.default;

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33b1bd3c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_group_vue__ = __webpack_require__(93);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33b1bd3c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElMenuItemGroup',

  componentName: 'ElMenuItemGroup',

  inject: ['rootMenu'],
  props: {
    title: {
      type: String
    }
  },
  data: function data() {
    return {
      paddingLeft: 20
    };
  },

  computed: {
    levelPadding: function levelPadding() {
      var padding = 20;
      var parent = this.$parent;
      if (this.rootMenu.collapse) return 20;
      while (parent && parent.$options.componentName !== 'ElMenu') {
        if (parent.$options.componentName === 'ElSubmenu') {
          padding += 20;
        }
        parent = parent.$parent;
      }
      return padding;
    }
  }
};

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"el-menu-item-group"},[_c('div',{staticClass:"el-menu-item-group__title",style:({paddingLeft: _vm.levelPadding + 'px'})},[(!_vm.$slots.title)?[_vm._v(_vm._s(_vm.title))]:_vm._t("title")],2),_c('ul',[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _input = __webpack_require__(95);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_input2.default.install = function (Vue) {
  Vue.component(_input2.default.name, _input2.default);
};

exports.default = _input2.default;

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d554740_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(98);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4d554740_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _calcTextareaHeight = __webpack_require__(97);

var _calcTextareaHeight2 = _interopRequireDefault(_calcTextareaHeight);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElInput',

  componentName: 'ElInput',

  mixins: [_emitter2.default, _migrating2.default],

  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      currentValue: this.value,
      textareaCalcStyle: {},
      prefixOffset: null,
      suffixOffset: null,
      hovering: false,
      focused: false
    };
  },


  props: {
    value: [String, Number],
    placeholder: String,
    size: String,
    resize: String,
    name: String,
    form: String,
    id: String,
    maxlength: Number,
    minlength: Number,
    readonly: Boolean,
    autofocus: Boolean,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    rows: {
      type: Number,
      default: 2
    },
    autoComplete: {
      type: String,
      default: 'off'
    },
    max: {},
    min: {},
    step: {},
    validateEvent: {
      type: Boolean,
      default: true
    },
    suffixIcon: String,
    prefixIcon: String,
    label: String,
    clearable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    validateState: function validateState() {
      return this.elFormItem ? this.elFormItem.validateState : '';
    },
    needStatusIcon: function needStatusIcon() {
      return this.elForm ? this.elForm.statusIcon : false;
    },
    validateIcon: function validateIcon() {
      return {
        validating: 'el-icon-loading',
        success: 'el-icon-circle-check',
        error: 'el-icon-circle-close'
      }[this.validateState];
    },
    textareaStyle: function textareaStyle() {
      return (0, _merge2.default)({}, this.textareaCalcStyle, { resize: this.resize });
    },
    inputSize: function inputSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isGroup: function isGroup() {
      return this.$slots.prepend || this.$slots.append;
    },
    showClear: function showClear() {
      return this.clearable && this.currentValue !== '' && (this.focused || this.hovering);
    }
  },

  watch: {
    'value': function value(val, oldValue) {
      this.setCurrentValue(val);
    }
  },

  methods: {
    focus: function focus() {
      (this.$refs.input || this.$refs.textarea).focus();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'icon': 'icon is removed, use suffix-icon / prefix-icon instead.',
          'on-icon-click': 'on-icon-click is removed.'
        },
        events: {
          'click': 'click is removed.'
        }
      };
    },
    handleBlur: function handleBlur(event) {
      this.focused = false;
      this.$emit('blur', event);
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.blur', [this.currentValue]);
      }
    },
    inputSelect: function inputSelect() {
      (this.$refs.input || this.$refs.textarea).select();
    },
    resizeTextarea: function resizeTextarea() {
      if (this.$isServer) return;
      var autosize = this.autosize,
          type = this.type;

      if (type !== 'textarea') return;
      if (!autosize) {
        this.textareaCalcStyle = {
          minHeight: (0, _calcTextareaHeight2.default)(this.$refs.textarea).minHeight
        };
        return;
      }
      var minRows = autosize.minRows;
      var maxRows = autosize.maxRows;

      this.textareaCalcStyle = (0, _calcTextareaHeight2.default)(this.$refs.textarea, minRows, maxRows);
    },
    handleFocus: function handleFocus(event) {
      this.focused = true;
      this.$emit('focus', event);
    },
    handleInput: function handleInput(event) {
      var value = event.target.value;
      this.$emit('input', value);
      this.setCurrentValue(value);
    },
    handleChange: function handleChange(event) {
      this.$emit('change', event.target.value);
    },
    setCurrentValue: function setCurrentValue(value) {
      var _this = this;

      if (value === this.currentValue) return;
      this.$nextTick(function (_) {
        _this.resizeTextarea();
      });
      this.currentValue = value;
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [value]);
      }
    },
    calcIconOffset: function calcIconOffset(place) {
      var pendantMap = {
        'suf': 'append',
        'pre': 'prepend'
      };

      var pendant = pendantMap[place];

      if (this.$slots[pendant]) {
        return { transform: 'translateX(' + (place === 'suf' ? '-' : '') + this.$el.querySelector('.el-input-group__' + pendant).offsetWidth + 'px)' };
      }
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.setCurrentValue('');
      this.focus();
    }
  },

  created: function created() {
    this.$on('inputSelect', this.inputSelect);
  },
  mounted: function mounted() {
    this.resizeTextarea();
    if (this.isGroup) {
      this.prefixOffset = this.calcIconOffset('pre');
      this.suffixOffset = this.calcIconOffset('suf');
    }
  }
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = calcTextareaHeight;
var hiddenTextarea = void 0;

var HIDDEN_STYLE = '\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n';

var CONTEXT_STYLE = ['letter-spacing', 'line-height', 'padding-top', 'padding-bottom', 'font-family', 'font-weight', 'font-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-left', 'padding-right', 'border-width', 'box-sizing'];

function calculateNodeStyling(targetElement) {
  var style = window.getComputedStyle(targetElement);

  var boxSizing = style.getPropertyValue('box-sizing');

  var paddingSize = parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));

  var borderSize = parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));

  var contextStyle = CONTEXT_STYLE.map(function (name) {
    return name + ':' + style.getPropertyValue(name);
  }).join(';');

  return { contextStyle: contextStyle, paddingSize: paddingSize, borderSize: borderSize, boxSizing: boxSizing };
}

function calcTextareaHeight(targetElement) {
  var minRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var maxRows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    document.body.appendChild(hiddenTextarea);
  }

  var _calculateNodeStyling = calculateNodeStyling(targetElement),
      paddingSize = _calculateNodeStyling.paddingSize,
      borderSize = _calculateNodeStyling.borderSize,
      boxSizing = _calculateNodeStyling.boxSizing,
      contextStyle = _calculateNodeStyling.contextStyle;

  hiddenTextarea.setAttribute('style', contextStyle + ';' + HIDDEN_STYLE);
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || '';

  var height = hiddenTextarea.scrollHeight;
  var result = {};

  if (boxSizing === 'border-box') {
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    height = height - paddingSize;
  }

  hiddenTextarea.value = '';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null) {
    var minHeight = singleRowHeight * minRows;
    if (boxSizing === 'border-box') {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = minHeight + 'px';
  }
  if (maxRows !== null) {
    var maxHeight = singleRowHeight * maxRows;
    if (boxSizing === 'border-box') {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = height + 'px';
  hiddenTextarea.parentNode && hiddenTextarea.parentNode.removeChild(hiddenTextarea);
  hiddenTextarea = null;
  return result;
};

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[
  _vm.type === 'textarea' ? 'el-textarea' : 'el-input',
  _vm.inputSize ? 'el-input--' + _vm.inputSize : '',
  {
    'is-disabled': _vm.disabled,
    'el-input-group': _vm.$slots.prepend || _vm.$slots.append,
    'el-input-group--append': _vm.$slots.append,
    'el-input-group--prepend': _vm.$slots.prepend,
    'el-input--prefix': _vm.$slots.prefix || _vm.prefixIcon,
    'el-input--suffix': _vm.$slots.suffix || _vm.suffixIcon
  }
  ],on:{"mouseenter":function($event){_vm.hovering = true},"mouseleave":function($event){_vm.hovering = false}}},[(_vm.type !== 'textarea')?[(_vm.$slots.prepend)?_c('div',{staticClass:"el-input-group__prepend",attrs:{"tabindex":"0"}},[_vm._t("prepend")],2):_vm._e(),(_vm.type !== 'textarea')?_c('input',_vm._b({ref:"input",staticClass:"el-input__inner",attrs:{"autocomplete":_vm.autoComplete,"aria-label":_vm.label},domProps:{"value":_vm.currentValue},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'input',_vm.$props,false)):_vm._e(),(_vm.$slots.prefix || _vm.prefixIcon)?_c('span',{staticClass:"el-input__prefix",style:(_vm.prefixOffset)},[_vm._t("prefix"),(_vm.prefixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.prefixIcon}):_vm._e()],2):_vm._e(),(_vm.$slots.suffix || _vm.suffixIcon || _vm.showClear || _vm.validateState && _vm.needStatusIcon)?_c('span',{staticClass:"el-input__suffix",style:(_vm.suffixOffset)},[_c('span',{staticClass:"el-input__suffix-inner"},[(!_vm.showClear)?[_vm._t("suffix"),(_vm.suffixIcon)?_c('i',{staticClass:"el-input__icon",class:_vm.suffixIcon}):_vm._e()]:_c('i',{staticClass:"el-input__icon el-icon-circle-close el-input__clear",on:{"click":_vm.clear}})],2),(_vm.validateState)?_c('i',{staticClass:"el-input__icon",class:['el-input__validateIcon', _vm.validateIcon]}):_vm._e()]):_vm._e(),(_vm.$slots.append)?_c('div',{staticClass:"el-input-group__append"},[_vm._t("append")],2):_vm._e()]:_c('textarea',_vm._b({ref:"textarea",staticClass:"el-textarea__inner",style:(_vm.textareaStyle),attrs:{"aria-label":_vm.label},domProps:{"value":_vm.currentValue},on:{"input":_vm.handleInput,"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":_vm.handleChange}},'textarea',_vm.$props,false))],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _inputNumber = __webpack_require__(100);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_inputNumber2.default.install = function (Vue) {
  Vue.component(_inputNumber2.default.name, _inputNumber2.default);
};

exports.default = _inputNumber2.default;

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_698b7648_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__ = __webpack_require__(102);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_number_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_698b7648_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_number_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _focus = __webpack_require__(17);

var _focus2 = _interopRequireDefault(_focus);

var _repeatClick = __webpack_require__(31);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElInputNumber',
  mixins: [(0, _focus2.default)('input')],
  inject: {
    elFormItem: {
      default: ''
    }
  },
  directives: {
    repeatClick: _repeatClick2.default
  },
  components: {
    ElInput: _input2.default
  },
  props: {
    step: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    value: {
      default: 0
    },
    disabled: Boolean,
    size: String,
    controls: {
      type: Boolean,
      default: true
    },
    controlsPosition: {
      type: String,
      default: ''
    },
    debounce: {
      type: Number,
      default: 300
    },
    name: String,
    label: String
  },
  data: function data() {
    return {
      currentValue: 0
    };
  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(value) {
        var newVal = Number(value);
        if (isNaN(newVal)) return;
        if (newVal >= this.max) newVal = this.max;
        if (newVal <= this.min) newVal = this.min;
        this.currentValue = newVal;
        this.$emit('input', newVal);
      }
    }
  },
  computed: {
    minDisabled: function minDisabled() {
      return this._decrease(this.value, this.step) < this.min;
    },
    maxDisabled: function maxDisabled() {
      return this._increase(this.value, this.step) > this.max;
    },
    precision: function precision() {
      var value = this.value,
          step = this.step,
          getPrecision = this.getPrecision;

      return Math.max(getPrecision(value), getPrecision(step));
    },
    controlsAtRight: function controlsAtRight() {
      return this.controlsPosition === 'right';
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    inputNumberSize: function inputNumberSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    toPrecision: function toPrecision(num, precision) {
      if (precision === undefined) precision = this.precision;
      return parseFloat(parseFloat(Number(num).toFixed(precision)));
    },
    getPrecision: function getPrecision(value) {
      var valueString = value.toString();
      var dotPosition = valueString.indexOf('.');
      var precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    },
    _increase: function _increase(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
    },
    _decrease: function _decrease(val, step) {
      if (typeof val !== 'number') return this.currentValue;

      var precisionFactor = Math.pow(10, this.precision);

      return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
    },
    increase: function increase() {
      if (this.disabled || this.maxDisabled) return;
      var value = this.value || 0;
      var newVal = this._increase(value, this.step);
      if (newVal > this.max) return;
      this.setCurrentValue(newVal);
    },
    decrease: function decrease() {
      if (this.disabled || this.minDisabled) return;
      var value = this.value || 0;
      var newVal = this._decrease(value, this.step);
      if (newVal < this.min) return;
      this.setCurrentValue(newVal);
    },
    handleBlur: function handleBlur(event) {
      this.$emit('blur', event);
      this.$refs.input.setCurrentValue(this.currentValue);
    },
    handleFocus: function handleFocus(event) {
      this.$emit('focus', event);
    },
    setCurrentValue: function setCurrentValue(newVal) {
      var oldVal = this.currentValue;
      if (newVal >= this.max) newVal = this.max;
      if (newVal <= this.min) newVal = this.min;
      if (oldVal === newVal) {
        this.$refs.input.setCurrentValue(this.currentValue);
        return;
      }
      this.$emit('change', newVal, oldVal);
      this.$emit('input', newVal);
      this.currentValue = newVal;
    },
    handleInput: function handleInput(value) {
      if (value === '') {
        return;
      }

      if (value.indexOf('.') === value.length - 1) {
        return;
      }

      if (value.indexOf('-') === value.length - 1) {
        return;
      }

      var newVal = Number(value);
      if (!isNaN(newVal)) {
        this.setCurrentValue(newVal);
      } else {
        this.$refs.input.setCurrentValue(this.currentValue);
      }
    }
  },
  created: function created() {
    var _this = this;

    this.debounceHandleInput = (0, _debounce2.default)(this.debounce, function (value) {
      _this.handleInput(value);
    });
  },
  mounted: function mounted() {
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('role', 'spinbutton');
    innerInput.setAttribute('aria-valuemax', this.max);
    innerInput.setAttribute('aria-valuemin', this.min);
    innerInput.setAttribute('aria-valuenow', this.currentValue);
    innerInput.setAttribute('aria-disabled', this.disabled);
  },
  updated: function updated() {
    var innerInput = this.$refs.input.$refs.input;
    innerInput.setAttribute('aria-valuenow', this.currentValue);
  }
};

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-input-number",class:[
    _vm.inputNumberSize ? 'el-input-number--' + _vm.inputNumberSize : '',
    { 'is-disabled': _vm.disabled },
    { 'is-without-controls': !_vm.controls },
    { 'is-controls-right': _vm.controlsAtRight }
  ]},[(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-input-number__decrease",class:{'is-disabled': _vm.minDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.decrease($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-down' : 'minus'))})]):_vm._e(),(_vm.controls)?_c('span',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-input-number__increase",class:{'is-disabled': _vm.maxDisabled},attrs:{"role":"button"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.increase($event)}}},[_c('i',{class:("el-icon-" + (_vm.controlsAtRight ? 'arrow-up' : 'plus'))})]):_vm._e(),_c('el-input',{ref:"input",attrs:{"value":_vm.currentValue,"disabled":_vm.disabled,"size":_vm.inputNumberSize,"max":_vm.max,"min":_vm.min,"name":_vm.name,"label":_vm.label},on:{"blur":_vm.handleBlur,"focus":_vm.handleFocus,"input":_vm.debounceHandleInput},nativeOn:{"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.preventDefault();_vm.increase($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.preventDefault();_vm.decrease($event)}]}},[(_vm.$slots.prepend)?_c('template',{slot:"prepend"},[_vm._t("prepend")],2):_vm._e(),(_vm.$slots.append)?_c('template',{slot:"append"},[_vm._t("append")],2):_vm._e()],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _radio = __webpack_require__(104);

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_radio2.default.install = function (Vue) {
  Vue.component('el-radio', _radio2.default);
};

exports.default = _radio2.default;

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a8f21f2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__ = __webpack_require__(106);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9a8f21f2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElRadio',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  componentName: 'ElRadio',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String
  },

  data: function data() {
    return {
      focus: false
    };
  },

  computed: {
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;
          return true;
        }
      }
      return false;
    },

    model: {
      get: function get() {
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioSize: function radioSize() {
      var temRadioSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
    },
    tabIndex: function tabIndex() {
      return !this.isDisabled ? this.isGroup ? this.model === this.label ? 0 : -1 : 0 : -1;
    }
  },

  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.$emit('change', _this.model);
        _this.isGroup && _this.dispatch('ElRadioGroup', 'handleChange', _this.model);
      });
    }
  }
}; //
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

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-radio",class:[
    _vm.border && _vm.radioSize ? 'el-radio--' + _vm.radioSize : '',
    { 'is-disabled': _vm.isDisabled },
    { 'is-focus': _vm.focus },
    { 'is-bordered': _vm.border },
    { 'is-checked': _vm.model === _vm.label }
  ],attrs:{"role":"radio","aria-checked":_vm.model === _vm.label,"aria-disabled":_vm.isDisabled,"tabindex":_vm.tabIndex},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.model = _vm.label}}},[_c('span',{staticClass:"el-radio__input",class:{
      'is-disabled': _vm.isDisabled,
      'is-checked': _vm.model === _vm.label
    }},[_c('span',{staticClass:"el-radio__inner"}),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-radio__original",attrs:{"type":"radio","name":_vm.name,"disabled":_vm.isDisabled,"tabindex":"-1"},domProps:{"value":_vm.label,"checked":_vm._q(_vm.model,_vm.label)},on:{"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false},"change":[function($event){_vm.model=_vm.label},_vm.handleChange]}})]),_c('span',{staticClass:"el-radio__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _radioGroup = __webpack_require__(108);

var _radioGroup2 = _interopRequireDefault(_radioGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_radioGroup2.default.install = function (Vue) {
  Vue.component(_radioGroup2.default.name, _radioGroup2.default);
};

exports.default = _radioGroup2.default;

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47173676_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__ = __webpack_require__(110);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47173676_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
}); //
//
//
//
//
//
//
//
//

exports.default = {
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  mixins: [_emitter2.default],

  props: {
    value: {},
    size: String,
    fill: String,
    textColor: String,
    disabled: Boolean
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    radioGroupSize: function radioGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  created: function created() {
    var _this = this;

    this.$on('handleChange', function (value) {
      _this.$emit('change', value);
    });
  },
  mounted: function mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    var radios = this.$el.querySelectorAll('[type=radio]');
    var firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    if (![].some.call(radios, function (radio) {
      return radio.checked;
    }) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  },

  methods: {
    handleKeydown: function handleKeydown(e) {
      // 左右上下按键 可以在radio组内切换不同选项
      var target = e.target;
      var className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
      var radios = this.$el.querySelectorAll(className);
      var length = radios.length;
      var index = [].indexOf.call(radios, target);
      var roleRadios = this.$el.querySelectorAll('[role=radio]');
      switch (e.keyCode) {
        case keyCode.LEFT:
        case keyCode.UP:
          e.stopPropagation();
          e.preventDefault();
          if (index === 0) {
            roleRadios[length - 1].click();
          } else {
            roleRadios[index - 1].click();
          }
          break;
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === length - 1) {
            e.stopPropagation();
            e.preventDefault();
            roleRadios[0].click();
          } else {
            roleRadios[index + 1].click();
          }
          break;
        default:
          break;
      }
    }
  },
  watch: {
    value: function value(_value) {
      this.dispatch('ElFormItem', 'el.form.change', [this.value]);
    }
  }
};

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-radio-group",attrs:{"role":"radiogroup"},on:{"keydown":_vm.handleKeydown}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _radioButton = __webpack_require__(112);

var _radioButton2 = _interopRequireDefault(_radioButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_radioButton2.default.install = function (Vue) {
  Vue.component(_radioButton2.default.name, _radioButton2.default);
};

exports.default = _radioButton2.default;

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_button_vue__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_188fd628_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_button_vue__ = __webpack_require__(114);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_radio_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_188fd628_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_radio_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElRadioButton',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    label: {},
    disabled: Boolean,
    name: String
  },
  data: function data() {
    return {
      focus: false
    };
  },

  computed: {
    value: {
      get: function get() {
        return this._radioGroup.value;
      },
      set: function set(value) {
        this._radioGroup.$emit('input', value);
      }
    },
    _radioGroup: function _radioGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._radioGroup.fill || '',
        borderColor: this._radioGroup.fill || '',
        boxShadow: this._radioGroup.fill ? '-1px 0 0 0 ' + this._radioGroup.fill : '',
        color: this._radioGroup.textColor || ''
      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._radioGroup.radioGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled: function isDisabled() {
      return this.disabled || this._radioGroup.disabled;
    },
    tabIndex: function tabIndex() {
      return !this.isDisabled ? this._radioGroup ? this.value === this.label ? 0 : -1 : 0 : -1;
    }
  },

  methods: {
    handleChange: function handleChange() {
      var _this = this;

      this.$nextTick(function () {
        _this.dispatch('ElRadioGroup', 'handleChange', _this.value);
      });
    }
  }
}; //
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

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-radio-button",class:[
    _vm.size ? 'el-radio-button--' + _vm.size : '',
    { 'is-active': _vm.value === _vm.label },
    { 'is-disabled': _vm.isDisabled },
    { 'is-focus': _vm.focus }
  ],attrs:{"role":"radio","aria-checked":_vm.value === _vm.label,"aria-disabled":_vm.isDisabled,"tabindex":_vm.tabIndex},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.value = _vm.label}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.value),expression:"value"}],staticClass:"el-radio-button__orig-radio",attrs:{"type":"radio","name":_vm.name,"disabled":_vm.isDisabled,"tabindex":"-1"},domProps:{"value":_vm.label,"checked":_vm._q(_vm.value,_vm.label)},on:{"change":[function($event){_vm.value=_vm.label},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}),_c('span',{staticClass:"el-radio-button__inner",style:(_vm.value === _vm.label ? _vm.activeStyle : null)},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkbox = __webpack_require__(116);

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkbox2.default.install = function (Vue) {
  Vue.component(_checkbox2.default.name, _checkbox2.default);
};

exports.default = _checkbox2.default;

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56cea193_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__ = __webpack_require__(118);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56cea193_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElCheckbox',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  componentName: 'ElCheckbox',

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },


  computed: {
    model: {
      get: function get() {
        return this.isGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this.isGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    isGroup: function isGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          this._checkboxGroup = parent;
          return true;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    isDisabled: function isDisabled() {
      return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxSize: function checkboxSize() {
      var temCheckboxSize = this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
      return this.isGroup ? this._checkboxGroup.checkboxGroupSize || temCheckboxSize : temCheckboxSize;
    }
  },

  props: {
    itemData: '',
    value: {},
    label: {},
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number],
    id: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    controls: String, /* 当indeterminate为真时，为controls提供相关连的checkbox的id，表明元素间的控制关系*/
    border: Boolean,
    size: String
  },

  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this.isGroup) {
          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  },
  mounted: function mounted() {
    // 为indeterminate元素 添加aria-controls 属性
    if (this.indeterminate) {
      this.$el.setAttribute('aria-controls', this.controls);
    }
  }
}; //
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

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-checkbox",class:[
    _vm.border && _vm.checkboxSize ? 'el-checkbox--' + _vm.checkboxSize : '',
    { 'is-disabled': _vm.isDisabled },
    { 'is-bordered': _vm.border },
    { 'is-checked': _vm.isChecked }
  ],attrs:{"role":"checkbox","aria-checked":_vm.indeterminate ? 'mixed': _vm.isChecked,"aria-disabled":_vm.isDisabled,"id":_vm.id}},[_c('span',{staticClass:"el-checkbox__input",class:{
      'is-disabled': _vm.isDisabled,
      'is-checked': _vm.isChecked,
      'is-indeterminate': _vm.indeterminate,
      'is-focus': _vm.focus
    },attrs:{"aria-checked":"mixed"}},[_c('span',{staticClass:"el-checkbox__inner"}),(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox__original",attrs:{"type":"checkbox","disabled":_vm.isDisabled,"name":_vm.name},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}})]),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"el-checkbox__label"},[_vm._t("default"),(!_vm.$slots.default)?[_vm._v(_vm._s(_vm.label))]:_vm._e()],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkboxButton = __webpack_require__(120);

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkboxButton2.default.install = function (Vue) {
  Vue.component(_checkboxButton2.default.name, _checkboxButton2.default);
};

exports.default = _checkboxButton2.default;

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_button_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13a21b11_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_button_vue__ = __webpack_require__(122);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_13a21b11_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElCheckboxButton',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  data: function data() {
    return {
      selfModel: false,
      focus: false,
      isLimitExceeded: false
    };
  },


  props: {
    value: {},
    label: {},
    disabled: Boolean,
    checked: Boolean,
    name: String,
    trueLabel: [String, Number],
    falseLabel: [String, Number]
  },
  computed: {
    model: {
      get: function get() {
        return this._checkboxGroup ? this.store : this.value !== undefined ? this.value : this.selfModel;
      },
      set: function set(val) {
        if (this._checkboxGroup) {
          this.isLimitExceeded = false;
          this._checkboxGroup.min !== undefined && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true);

          this._checkboxGroup.max !== undefined && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true);

          this.isLimitExceeded === false && this.dispatch('ElCheckboxGroup', 'input', [val]);
        } else if (this.value !== undefined) {
          this.$emit('input', val);
        } else {
          this.selfModel = val;
        }
      }
    },

    isChecked: function isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      } else if (Array.isArray(this.model)) {
        return this.model.indexOf(this.label) > -1;
      } else if (this.model !== null && this.model !== undefined) {
        return this.model === this.trueLabel;
      }
    },
    _checkboxGroup: function _checkboxGroup() {
      var parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== 'ElCheckboxGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }
      return false;
    },
    store: function store() {
      return this._checkboxGroup ? this._checkboxGroup.value : this.value;
    },
    activeStyle: function activeStyle() {
      return {
        backgroundColor: this._checkboxGroup.fill || '',
        borderColor: this._checkboxGroup.fill || '',
        color: this._checkboxGroup.textColor || '',
        'box-shadow': '-1px 0 0 0 ' + this._checkboxGroup.fill

      };
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    size: function size() {
      return this._checkboxGroup.checkboxGroupSize || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    isDisabled: function isDisabled() {
      return this._checkboxGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
    }
  },
  methods: {
    addToStore: function addToStore() {
      if (Array.isArray(this.model) && this.model.indexOf(this.label) === -1) {
        this.model.push(this.label);
      } else {
        this.model = this.trueLabel || true;
      }
    },
    handleChange: function handleChange(ev) {
      var _this = this;

      if (this.isLimitExceeded) return;
      var value = void 0;
      if (ev.target.checked) {
        value = this.trueLabel === undefined ? true : this.trueLabel;
      } else {
        value = this.falseLabel === undefined ? false : this.falseLabel;
      }
      this.$emit('change', value, ev);
      this.$nextTick(function () {
        if (_this._checkboxGroup) {
          _this.dispatch('ElCheckboxGroup', 'change', [_this._checkboxGroup.value]);
        }
      });
    }
  },

  created: function created() {
    this.checked && this.addToStore();
  }
}; //
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

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"el-checkbox-button",class:[
      _vm.size ? 'el-checkbox-button--' + _vm.size : '',
      { 'is-disabled': _vm.isDisabled },
      { 'is-checked': _vm.isChecked },
      { 'is-focus': _vm.focus } ],attrs:{"role":"checkbox","aria-checked":_vm.isChecked,"aria-disabled":_vm.isDisabled}},[(_vm.trueLabel || _vm.falseLabel)?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox-button__original",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.isDisabled,"true-value":_vm.trueLabel,"false-value":_vm.falseLabel},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:_vm._q(_vm.model,_vm.trueLabel)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(_vm.trueLabel):(_vm.falseLabel);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],staticClass:"el-checkbox-button__original",attrs:{"type":"checkbox","name":_vm.name,"disabled":_vm.isDisabled},domProps:{"value":_vm.label,"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,_vm.label)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.label,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},_vm.handleChange],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}),(_vm.$slots.default || _vm.label)?_c('span',{staticClass:"el-checkbox-button__inner",style:(_vm.isChecked ? _vm.activeStyle : null)},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkboxGroup = __webpack_require__(124);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_checkboxGroup2.default.install = function (Vue) {
  Vue.component(_checkboxGroup2.default.name, _checkboxGroup2.default);
};

exports.default = _checkboxGroup2.default;

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b583805e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__ = __webpack_require__(126);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_checkbox_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b583805e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_checkbox_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElCheckboxGroup',

  componentName: 'ElCheckboxGroup',

  mixins: [_emitter2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    value: {},
    disabled: Boolean,
    min: Number,
    max: Number,
    size: String,
    fill: String,
    textColor: String
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    checkboxGroupSize: function checkboxGroupSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value: function value(_value) {
      console.log(_value);
      this.dispatch('ElFormItem', 'el.form.change', [_value]);
    }
  }
};

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-checkbox-group",attrs:{"role":"group","aria-label":"checkbox-group"}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _component = __webpack_require__(128);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_component2.default.install = function (Vue) {
  Vue.component(_component2.default.name, _component2.default);
};

exports.default = _component2.default;

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea85ad8a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__ = __webpack_require__(130);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_component_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ea85ad8a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_component_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _focus = __webpack_require__(17);

var _focus2 = _interopRequireDefault(_focus);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElSwitch',
  mixins: [(0, _focus2.default)('input'), _migrating2.default],
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 0
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      coreWidth: this.width
    };
  },
  created: function created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },

  computed: {
    checked: function checked() {
      return this.value === this.activeValue;
    },
    transform: function transform() {
      return this.checked ? 'translate3d(' + (this.coreWidth - 20) + 'px, 0, 0)' : '';
    }
  },
  watch: {
    checked: function checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      var _this = this;

      this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
      this.$emit('change', !this.checked ? this.activeValue : this.inactiveValue);
      this.$nextTick(function () {
        // set input's checked property
        // in case parent refuses to change component's value
        _this.$refs.input.checked = _this.checked;
      });
    },
    setBackgroundColor: function setBackgroundColor() {
      var newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue: function switchValue() {
      this.$refs.input.click();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'on-color': 'on-color is renamed to active-color.',
          'off-color': 'off-color is renamed to inactive-color.',
          'on-text': 'on-text is renamed to active-text.',
          'off-text': 'off-text is renamed to inactive-text.',
          'on-value': 'on-value is renamed to active-value.',
          'off-value': 'off-value is renamed to inactive-value.',
          'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
          'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
        }
      };
    }
  },
  mounted: function mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
};

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-switch",class:{ 'is-disabled': _vm.disabled, 'is-checked': _vm.checked },attrs:{"role":"switch","aria-checked":_vm.checked,"aria-disabled":_vm.disabled},on:{"click":_vm.switchValue}},[_c('input',{ref:"input",staticClass:"el-switch__input",attrs:{"type":"checkbox","name":_vm.name,"true-value":_vm.activeValue,"false-value":_vm.inactiveValue,"disabled":_vm.disabled},on:{"change":_vm.handleChange,"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.switchValue($event)}}}),(_vm.inactiveIconClass || _vm.inactiveText)?_c('span',{class:['el-switch__label', 'el-switch__label--left', !_vm.checked ? 'is-active' : '']},[(_vm.inactiveIconClass)?_c('i',{class:[_vm.inactiveIconClass]}):_vm._e(),(!_vm.inactiveIconClass && _vm.inactiveText)?_c('span',{attrs:{"aria-hidden":_vm.checked}},[_vm._v(_vm._s(_vm.inactiveText))]):_vm._e()]):_vm._e(),_c('span',{ref:"core",staticClass:"el-switch__core",style:({ 'width': _vm.coreWidth + 'px' })},[_c('span',{staticClass:"el-switch__button",style:({ transform: _vm.transform })})]),(_vm.activeIconClass || _vm.activeText)?_c('span',{class:['el-switch__label', 'el-switch__label--right', _vm.checked ? 'is-active' : '']},[(_vm.activeIconClass)?_c('i',{class:[_vm.activeIconClass]}):_vm._e(),(!_vm.activeIconClass && _vm.activeText)?_c('span',{attrs:{"aria-hidden":!_vm.checked}},[_vm._v(_vm._s(_vm.activeText))]):_vm._e()]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _select = __webpack_require__(132);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_select2.default.install = function (Vue) {
  Vue.component(_select2.default.name, _select2.default);
};

exports.default = _select2.default;

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2be2b518_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__ = __webpack_require__(140);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2be2b518_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _focus = __webpack_require__(17);

var _focus2 = _interopRequireDefault(_focus);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _selectDropdown = __webpack_require__(134);

var _selectDropdown2 = _interopRequireDefault(_selectDropdown);

var _option = __webpack_require__(32);

var _option2 = _interopRequireDefault(_option);

var _tag = __webpack_require__(23);

var _tag2 = _interopRequireDefault(_tag);

var _scrollbar = __webpack_require__(19);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _dom = __webpack_require__(3);

var _resizeEvent = __webpack_require__(18);

var _locale3 = __webpack_require__(15);

var _scrollIntoView = __webpack_require__(24);

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _util = __webpack_require__(4);

var _navigationMixin = __webpack_require__(139);

var _navigationMixin2 = _interopRequireDefault(_navigationMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sizeMap = {
  'medium': 36,
  'small': 32,
  'mini': 28
}; //
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

exports.default = {
  mixins: [_emitter2.default, _locale2.default, (0, _focus2.default)('reference'), _navigationMixin2.default],

  name: 'ElSelect',

  componentName: 'ElSelect',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  provide: function provide() {
    return {
      'select': this
    };
  },


  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    iconClass: function iconClass() {
      var criteria = this.clearable && !this.disabled && this.inputHovering && !this.multiple && this.value !== undefined && this.value !== '';
      return criteria ? 'circle-close is-show-close' : this.remote && this.filterable ? '' : 'arrow-up';
    },
    debounce: function debounce() {
      return this.remote ? 300 : 0;
    },
    emptyText: function emptyText() {
      if (this.loading) {
        return this.loadingText || this.t('el.select.loading');
      } else {
        if (this.remote && this.query === '' && this.options.length === 0) return false;
        if (this.filterable && this.query && this.options.length > 0 && this.filteredOptionsCount === 0) {
          return this.noMatchText || this.t('el.select.noMatch');
        }
        if (this.options.length === 0) {
          return this.noDataText || this.t('el.select.noData');
        }
      }
      return null;
    },
    showNewOption: function showNewOption() {
      var _this = this;

      var hasExistingOption = this.options.filter(function (option) {
        return !option.created;
      }).some(function (option) {
        return option.currentLabel === _this.query;
      });
      return this.filterable && this.allowCreate && this.query !== '' && !hasExistingOption;
    },
    selectSize: function selectSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    multipleText: function multipleText() {
      var selected = this.selected;
      if (!selected || !selected.length) return '';
      var length = selected.length;
      var countText = length > 1 ? '(+' + (selected.length - 1) + ')' : '';
      return selected[0].currentLabel + ' ' + countText;
    }
  },

  components: {
    ElInput: _input2.default,
    ElSelectMenu: _selectDropdown2.default,
    ElOption: _option2.default,
    ElTag: _tag2.default,
    ElScrollbar: _scrollbar2.default
  },

  directives: { Clickoutside: _clickoutside2.default },

  props: {
    bt_loading: {
      type: String,
      default: ''
    },
    bt_loadingOver: {
      type: String,
      default: ''
    },
    name: String,
    id: String,
    value: {
      required: true
    },
    size: String,
    disabled: Boolean,
    clearable: Boolean,
    filterable: Boolean,
    allowCreate: Boolean,
    loading: Boolean,
    popperClass: String,
    remote: Boolean,
    loadingText: String,
    noMatchText: String,
    noDataText: String,
    remoteMethod: Function,
    filterMethod: Function,
    multiple: Boolean,
    multipleLimit: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.select.placeholder');
      }
    },
    defaultFirstOption: Boolean,
    reserveKeyword: Boolean,
    valueKey: {
      type: String,
      default: 'value'
    },
    collapseTags: Boolean,
    collapseTagsLine: Boolean,
    autoMultipleWidth: Boolean
  },

  data: function data() {
    return {
      bt_is_loading_over: false, //加载完毕
      bottom_is_back: true, //是否已经执行回调
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      cachedPlaceHolder: '',
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      selectedLabel: '',
      hoverIndex: -1,
      query: '',
      previousQuery: '',
      inputHovering: false,
      currentPlaceholder: ''
    };
  },


  watch: {
    disabled: function disabled() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.resetInputHeight();
      });
    },
    placeholder: function placeholder(val) {
      this.cachedPlaceHolder = this.currentPlaceholder = val;
    },
    query: function query(val) {
      this.$emit("select_value_change", this.query);
    },
    value: function value(val) {
      if (this.multiple) {
        this.resetInputHeight();

        if (val.length > 0 || this.$refs.input && this.query !== '') {
          this.currentPlaceholder = '';
        } else {
          this.currentPlaceholder = this.cachedPlaceHolder;
        }
        if (this.filterable && !this.reserveKeyword) {
          if (this.filterable && this.collapseTags && this.remote) {} else {
            this.query = '';
            this.handleQueryChange(this.query);
          }
        }
      }

      this.setSelected();
      if (this.filterable && !this.multiple) {
        this.inputLength = 20;
      }
    },
    visible: function visible(val) {
      var _this3 = this;

      if (!val) {
        if (this.filterable && this.collapseTags && this.remote) {
          this.query = '';
        }
        this.$refs.reference.$el.querySelector('input').blur();
        this.handleIconHide();
        this.broadcast('ElSelectDropdown', 'destroyPopper');
        if (this.$refs.input) {
          this.$refs.input.blur();
        }

        this.query = '';
        this.selectedLabel = '';
        this.inputLength = 20;
        this.resetHoverIndex();
        this.$nextTick(function () {
          if (_this3.$refs.input && _this3.$refs.input.value === '' && _this3.selected.length === 0) {
            _this3.currentPlaceholder = _this3.cachedPlaceHolder;
          }
        });

        if (!this.multiple) {
          if (this.selected) {
            if (this.filterable && this.allowCreate && this.createdSelected && this.createdOption) {
              this.selectedLabel = this.createdLabel;
            } else {
              this.selectedLabel = this.selected.currentLabel;
            }
            if (this.filterable) this.query = this.selectedLabel;
          }
        }
      } else {

        this.handleIconShow();
        this.broadcast('ElSelectDropdown', 'updatePopper');
        if (this.filterable) {
          this.query = this.remote ? '' : this.selectedLabel;
          //this.handleQueryChange(this.query);
          if (this.multiple) {
            this.$refs.input.focus();
          } else {
            if (!this.remote) {
              this.broadcast('ElOption', 'queryChange', '');
              this.broadcast('ElOptionGroup', 'queryChange');
            }
            this.broadcast('ElInput', 'inputSelect');
          }
        }
      }
      this.$emit('visible-change', val);
    },
    options: function options() {
      if (this.$isServer) return;
      if (this.multiple) {
        this.resetInputHeight();
      }
      var inputs = this.$el.querySelectorAll('input');
      if ([].indexOf.call(inputs, document.activeElement) === -1) {
        this.setSelected();
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    }
  },

  methods: {
    handleQueryChange: function handleQueryChange(val) {
      var _this4 = this;

      if (this.previousQuery === val) return;
      this.previousQuery = val;
      this.$nextTick(function () {
        if (_this4.visible) _this4.broadcast('ElSelectDropdown', 'updatePopper');
      });
      this.hoverIndex = -1;
      if (this.multiple && this.filterable) {
        var length = this.$refs.input.value.length * 15 + 20;
        this.inputLength = this.collapseTags ? Math.min(64, length) : length;
        this.managePlaceholder();
        this.resetInputHeight();
      }
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.hoverIndex = -1;
        this.remoteMethod(val);
      } else if (typeof this.filterMethod === 'function') {
        this.filterMethod(val);
        this.broadcast('ElOptionGroup', 'queryChange');
      } else {
        this.filteredOptionsCount = this.optionsCount;
        this.broadcast('ElOption', 'queryChange', val);
        this.broadcast('ElOptionGroup', 'queryChange');
      }
      if (this.defaultFirstOption && (this.filterable || this.remote) && this.filteredOptionsCount) {
        this.checkDefaultFirstOption();
      }
    },
    handleIconHide: function handleIconHide() {
      var icon = this.$el.querySelector('.el-input__icon');
      if (icon) {
        (0, _dom.removeClass)(icon, 'is-reverse');
      }
    },
    handleIconShow: function handleIconShow() {
      var icon = this.$el.querySelector('.el-input__icon');
      if (icon && !(0, _dom.hasClass)(icon, 'el-icon-circle-close')) {
        (0, _dom.addClass)(icon, 'is-reverse');
      }
    },
    scrollToOption: function scrollToOption(option) {
      var target = Array.isArray(option) && option[0] ? option[0].$el : option.$el;
      if (this.$refs.popper && target) {
        var menu = this.$refs.popper.$el.querySelector('.el-select-dropdown__wrap');
        (0, _scrollIntoView2.default)(menu, target);
      }
      this.$refs.scrollbar && this.$refs.scrollbar.handleScroll();
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this5 = this;

      this.$nextTick(function () {
        return _this5.scrollToOption(_this5.selected);
      });
    },
    emitChange: function emitChange(val, item_data) {
      if (!(0, _util.valueEquals)(this.value, val)) {
        this.$emit('change', val, item_data);
        this.dispatch('ElFormItem', 'el.form.change', val);
      }
    },
    getOption: function getOption(value) {
      var option = void 0;
      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      for (var i = this.cachedOptions.length - 1; i >= 0; i--) {
        var cachedOption = this.cachedOptions[i];
        var isEqual = isObject ? (0, _util.getValueByPath)(cachedOption.value, this.valueKey) === (0, _util.getValueByPath)(value, this.valueKey) : cachedOption.value === value;
        if (isEqual) {
          option = cachedOption;
          break;
        }
      }
      if (option) return option;
      var label = !isObject ? value : '';
      var newOption = {
        value: value,
        currentLabel: label
      };
      if (this.multiple) {
        newOption.hitState = false;
      }
      return newOption;
    },
    setSelected: function setSelected() {
      var _this6 = this;

      if (!this.multiple) {
        var option = this.getOption(this.value);
        if (option.created) {
          this.createdLabel = option.currentLabel;
          this.createdSelected = true;
        } else {
          this.createdSelected = false;
        }
        this.selectedLabel = option.currentLabel;
        this.selected = option;
        if (this.filterable) this.query = this.selectedLabel;
        return;
      }
      var result = [];
      if (Array.isArray(this.value)) {
        this.value.forEach(function (value) {
          result.push(_this6.getOption(value));
        });
      }
      this.selected = result;
      this.$nextTick(function () {
        _this6.resetInputHeight();
      });
    },
    handleFocus: function handleFocus(event) {
      this.visible = true;
      this.$emit('focus', event);
    },
    filtBlurs: function filtBlurs() {},
    handleBlur: function handleBlur(event) {

      this.$emit('blur', event);
    },
    handleIconClick: function handleIconClick(event) {
      if (this.iconClass.indexOf('circle-close') > -1) {
        this.deleteSelected(event);
      } else {
        this.toggleMenu();
      }
    },
    handleMouseDown: function handleMouseDown(event) {
      if (event.target.tagName !== 'INPUT') return;
      if (this.visible) {
        this.handleClose();
        event.preventDefault();
      }
    },
    doDestroy: function doDestroy() {
      this.$refs.popper && this.$refs.popper.doDestroy();
    },
    handleClose: function handleClose(event) {
      this.visible = false;
    },
    toggleLastOptionHitState: function toggleLastOptionHitState(hit) {
      if (!Array.isArray(this.selected)) return;
      var option = this.selected[this.selected.length - 1];
      if (!option) return;

      if (hit === true || hit === false) {
        option.hitState = hit;
        return hit;
      }

      option.hitState = !option.hitState;
      return option.hitState;
    },
    deletePrevTag: function deletePrevTag(e) {
      if (e.target.value.length <= 0 && !this.toggleLastOptionHitState()) {
        var value = this.value.slice();
        value.pop();
        this.$emit('input', value);
        this.emitChange(value);
      }
    },
    managePlaceholder: function managePlaceholder() {
      if (this.currentPlaceholder !== '') {

        this.currentPlaceholder = this.$refs.input.value ? '' : this.cachedPlaceHolder;
      }
    },
    resetInputState: function resetInputState(e) {
      if (this.filterable && this.collapseTags && this.remote) {
        return;
      }
      if (e.keyCode !== 8) this.toggleLastOptionHitState(false);
      this.inputLength = this.$refs.input.value.length * 15 + 20;
      this.resetInputHeight();
    },
    resetInputHeight: function resetInputHeight() {
      var _this7 = this;

      if (this.collapseTags) return;
      this.$nextTick(function () {
        if (!_this7.$refs.reference) return;
        var inputChildNodes = _this7.$refs.reference.$el.childNodes;
        var input = [].filter.call(inputChildNodes, function (item) {
          return item.tagName === 'INPUT';
        })[0];
        var tags = _this7.$refs.tags;
        input.style.height = _this7.selected.length === 0 ? (sizeMap[_this7.selectSize] || 40) + 'px' : Math.max(tags ? tags.clientHeight + 10 : 0, sizeMap[_this7.selectSize] || 40) + 'px';
        if (_this7.visible && _this7.emptyText !== false) {
          _this7.broadcast('ElSelectDropdown', 'updatePopper');
        }
      });
    },
    resetHoverIndex: function resetHoverIndex() {
      var _this8 = this;

      setTimeout(function () {
        if (!_this8.multiple) {
          _this8.hoverIndex = _this8.options.indexOf(_this8.selected);
        } else {
          if (_this8.selected.length > 0) {
            _this8.hoverIndex = Math.min.apply(null, _this8.selected.map(function (item) {
              return _this8.options.indexOf(item);
            }));
          } else {
            _this8.hoverIndex = -1;
          }
        }
      }, 300);
    },
    handleOptionSelect: function handleOptionSelect(option) {
      var _this9 = this;

      if (this.multiple) {
        var value = this.value.slice();
        var optionIndex = this.getValueIndex(value, option.value);
        if (optionIndex > -1) {
          value.splice(optionIndex, 1);
        } else if (this.multipleLimit <= 0 || value.length < this.multipleLimit) {
          value.push(option.value);
        }

        this.$emit('input', value);

        this.emitChange(value, option.item_data);

        if (option.created) {
          this.query = '';
          this.handleQueryChange('');
          this.inputLength = 20;
        }
        if (this.filterable) this.$refs.input.focus();
      } else {
        this.$emit('input', option.value);
        this.emitChange(option.value, option.item_data);
        this.visible = false;
      }
      this.$nextTick(function () {
        return _this9.scrollToOption(option);
      });
    },
    getValueIndex: function getValueIndex() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments[1];

      var isObject = Object.prototype.toString.call(value).toLowerCase() === '[object object]';
      if (!isObject) {
        return arr.indexOf(value);
      } else {
        var valueKey = this.valueKey;
        var index = -1;
        arr.some(function (item, i) {
          if ((0, _util.getValueByPath)(item, valueKey) === (0, _util.getValueByPath)(value, valueKey)) {
            index = i;
            return true;
          }
          return false;
        });
        return index;
      }
    },
    toggleMenu: function toggleMenu() {
      if (!this.disabled) {
        this.visible = !this.visible;
        if (this.visible) {
          (this.$refs.input || this.$refs.reference).focus();
        }
      }
    },
    selectOption: function selectOption() {
      if (this.options[this.hoverIndex]) {
        this.handleOptionSelect(this.options[this.hoverIndex]);
      } else {
        this.$emit('enter_no_selectOption');
      }
    },
    deleteSelected: function deleteSelected(event) {
      event.stopPropagation();
      this.$emit('input', '');
      this.emitChange('');
      this.visible = false;
      this.$emit('clear');
    },
    deleteTag: function deleteTag(event, tag) {
      var index = this.selected.indexOf(tag);
      if (index > -1 && !this.disabled) {
        var value = this.value.slice();
        value.splice(index, 1);
        this.$emit('input', value);
        this.emitChange(value);
        this.$emit('remove-tag', tag);
      }
      event.stopPropagation();
    },
    onInputChange: function onInputChange() {
      if (this.filterable && this.query !== this.selectedLabel) {
        this.query = this.selectedLabel;
        this.handleQueryChange(this.query);
      }
    },
    onOptionDestroy: function onOptionDestroy(index) {
      if (index > -1) {
        this.optionsCount--;
        this.filteredOptionsCount--;
        this.options.splice(index, 1);
      }
    },
    resetInputWidth: function resetInputWidth() {
      this.inputWidth = this.$refs.reference.$el.getBoundingClientRect().width;
    },
    handleResize: function handleResize() {
      this.resetInputWidth();
      if (this.multiple) this.resetInputHeight();
    },
    checkDefaultFirstOption: function checkDefaultFirstOption() {
      this.hoverIndex = -1;
      for (var i = 0; i !== this.options.length; ++i) {
        var option = this.options[i];
        if (this.query) {
          // pick first options that passes the filter
          if (!option.disabled && !option.groupDisabled && option.visible) {
            this.hoverIndex = i;
            break;
          }
        } else {
          // pick currently selected option
          if (option.itemSelected) {
            this.hoverIndex = i;
            break;
          }
        }
      }
    },
    getValueKey: function getValueKey(item) {
      if (Object.prototype.toString.call(item.value).toLowerCase() !== '[object object]') {
        return item.value;
      } else {
        return (0, _util.getValueByPath)(item.value, this.valueKey);
      }
    },
    refishScrollbar: function refishScrollbar() {
      this.$refs.scrollbar.wrap.scrollTop = 0;
      this.$refs.scrollbar.handleScroll();
    },
    to_bottom_cb: function to_bottom_cb(isover) {
      var tha_yjb = this;
      if (isover == 'over') {
        tha_yjb.bt_is_loading_over = true;
      } else {
        tha_yjb.bt_is_loading_over = false;
      }
      tha_yjb.bottom_is_back = true;
    }
  },
  created: function created() {
    var _this10 = this;

    this.cachedPlaceHolder = this.currentPlaceholder = this.placeholder;
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && Array.isArray(this.value)) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = (0, _debounce2.default)(this.debounce, function () {
      _this10.onInputChange();
    });

    this.$on('handleOptionClick', this.handleOptionSelect);
    this.$on('setSelected', this.setSelected);
  },
  mounted: function mounted() {
    var _this11 = this;

    var tha_yjb = this;
    this.$on('to_bottom', function () {
      if (!tha_yjb.bt_loading || !tha_yjb.bt_loadingOver || tha_yjb.bt_is_loading_over) {
        return;
      }
      if (tha_yjb.bottom_is_back) {
        tha_yjb.bottom_is_back = false;
        tha_yjb.$emit('is_bottom');
      }
    });

    if (this.multiple && Array.isArray(this.value) && this.value.length > 0) {
      this.currentPlaceholder = '';
    }
    (0, _resizeEvent.addResizeListener)(this.$el, this.handleResize);
    if (this.remote && this.multiple) {
      this.resetInputHeight();
    }
    this.$nextTick(function () {
      if (_this11.$refs.reference && _this11.$refs.reference.$el) {
        _this11.inputWidth = _this11.$refs.reference.$el.getBoundingClientRect().width;
      }
    });
    this.setSelected();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.handleResize) (0, _resizeEvent.removeResizeListener)(this.$el, this.handleResize);
  }
};

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_dropdown_vue__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26fa4191_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_dropdown_vue__ = __webpack_require__(136);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_select_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_26fa4191_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_select_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ElSelectDropdown",

  componentName: "ElSelectDropdown",

  mixins: [_vuePopper2.default],

  props: {
    placement: {
      default: "bottom-start"
    },

    boundariesPadding: {
      default: 0
    },

    popperOptions: {
      default: function _default() {
        return {
          gpuAcceleration: false
        };
      }
    },

    visibleArrow: {
      default: true
    }
  },

  data: function data() {
    return {
      minWidth: "",
      isMouseOut: true
    };
  },

  methods: {
    dropdownMouseenter: function dropdownMouseenter() {
      console.log('enter');
      this.isMouseOut = false;
    },
    dropdownMouseOut: function dropdownMouseOut() {
      console.log('out');
      this.isMouseOut = true;
    }
  },
  computed: {
    popperClass: function popperClass() {
      return this.$parent.popperClass;
    }
  },

  watch: {
    "$parent.inputWidth": function $parentInputWidth() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + "px";
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on("updatePopper", function () {
      if (_this.$parent.visible) _this.updatePopper();
    });
    this.$on("destroyPopper", this.destroyPopper);
  }
}; //
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

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-select-dropdown el-popper",class:[{ 'is-multiple': _vm.$parent.multiple }, _vm.popperClass],style:({ minWidth: _vm.minWidth }),on:{"mouseenter":_vm.dropdownMouseenter,"mouseleave":_vm.dropdownMouseOut}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  mixins: [_emitter2.default],

  name: "ElOption",

  componentName: "ElOption",

  inject: ["select"],

  props: {
    item_data: {},
    value: {
      required: true
    },
    label: [String, Number],
    created: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      index: -1,
      groupDisabled: false,
      visible: true,
      hitState: false,
      hover: false
    };
  },


  computed: {
    isObject: function isObject() {
      return Object.prototype.toString.call(this.value).toLowerCase() === "[object object]";
    },
    currentLabel: function currentLabel() {
      return this.label || (this.isObject ? "" : this.value);
    },
    currentValue: function currentValue() {
      return this.value || this.label || "";
    },
    itemSelected: function itemSelected() {
      if (!this.select.multiple) {
        return this.isEqual(this.value, this.select.value);
      } else {
        return this.contains(this.select.value, this.value);
      }
    },
    limitReached: function limitReached() {
      if (this.select.multiple) {
        return !this.itemSelected && (this.select.value || []).length >= this.select.multipleLimit && this.select.multipleLimit > 0;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentLabel: function currentLabel() {
      if (!this.created && !this.select.remote) this.dispatch("ElSelect", "setSelected");
    },
    value: function value() {
      if (!this.created && !this.select.remote) this.dispatch("ElSelect", "setSelected");
    }
  },

  methods: {
    isEqual: function isEqual(a, b) {
      if (!this.isObject) {
        return a === b;
      } else {
        var valueKey = this.select.valueKey;
        return (0, _util.getValueByPath)(a, valueKey) === (0, _util.getValueByPath)(b, valueKey);
      }
    },
    contains: function contains() {
      var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var target = arguments[1];

      if (!this.isObject) {
        return arr.indexOf(target) > -1;
      } else {
        var valueKey = this.select.valueKey;
        return arr.some(function (item) {
          return (0, _util.getValueByPath)(item, valueKey) === (0, _util.getValueByPath)(target, valueKey);
        });
      }
    },
    handleGroupDisabled: function handleGroupDisabled(val) {
      this.groupDisabled = val;
    },
    hoverItem: function hoverItem() {
      if (!this.disabled && !this.groupDisabled) {
        this.select.hoverIndex = this.select.options.indexOf(this);
      }
    },
    selectOptionClick: function selectOptionClick() {
      if (this.disabled !== true && this.groupDisabled !== true) {
        this.dispatch("ElSelect", "handleOptionClick", this);
      }
    },
    queryChange: function queryChange(query) {
      // query 里如果有正则中的特殊字符，需要先将这些字符转义
      var parsedQuery = String(query).replace(/(\^|\(|\)|\[|\]|\$|\*|\+|\.|\?|\\|\{|\}|\|)/g, "\\$1");
      this.visible = new RegExp(parsedQuery, "i").test(this.currentLabel) || this.created;
      if (!this.visible) {
        this.select.filteredOptionsCount--;
      }
    }
  },

  created: function created() {
    this.select.options.push(this);
    this.select.cachedOptions.push(this);
    this.select.optionsCount++;
    this.select.filteredOptionsCount++;

    this.$on("queryChange", this.queryChange);
    this.$on("handleGroupDisabled", this.handleGroupDisabled);
  },
  beforeDestroy: function beforeDestroy() {
    this.select.onOptionDestroy(this.select.options.indexOf(this));
  }
};

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-select-dropdown__item",class:{
    'selected': _vm.itemSelected,
    'is-disabled': _vm.disabled || _vm.groupDisabled || _vm.limitReached,
    'hover': _vm.hover
  },on:{"mouseenter":_vm.hoverItem,"click":function($event){$event.stopPropagation();_vm.selectOptionClick($event)}}},[_vm._t("default",[_c('span',[_vm._v(_vm._s(_vm.currentLabel))])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  data: function data() {
    return {
      hoverOption: -1
    };
  },


  computed: {
    optionsAllDisabled: function optionsAllDisabled() {
      return this.options.length === this.options.filter(function (item) {
        return item.disabled === true;
      }).length;
    }
  },

  watch: {
    hoverIndex: function hoverIndex(val) {
      var _this = this;

      if (typeof val === 'number' && val > -1) {
        this.hoverOption = this.options[val] || {};
      }
      this.options.forEach(function (option) {
        option.hover = _this.hoverOption === option;
      });
    }
  },

  methods: {
    navigateOptions: function navigateOptions(direction) {
      var _this2 = this;

      if (!this.visible) {
        this.visible = true;
        return;
      }
      if (this.options.length === 0 || this.filteredOptionsCount === 0) return;
      if (!this.optionsAllDisabled) {
        if (direction === 'next') {
          this.hoverIndex++;
          if (this.hoverIndex === this.options.length) {
            this.hoverIndex = 0;
          }
        } else if (direction === 'prev') {
          this.hoverIndex--;
          if (this.hoverIndex < 0) {
            this.hoverIndex = this.options.length - 1;
          }
        }
        var option = this.options[this.hoverIndex];
        if (option.disabled === true || option.groupDisabled === true || !option.visible) {
          this.navigateOptions(direction);
        }
      }
      this.$nextTick(function () {
        return _this2.scrollToOption(_this2.hoverOption);
      });
    }
  }
};

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],staticClass:"el-select",class:[_vm.selectSize ? 'el-select--' + _vm.selectSize : '']},[(_vm.multiple)?_c('div',{ref:"tags",staticClass:"el-select__tags",staticStyle:{"display":"flex"},style:({ 'max-width': _vm.inputWidth - 32 + 'px' }),on:{"click":function($event){$event.stopPropagation();_vm.toggleMenu($event)}}},[(_vm.collapseTags && _vm.selected.length && !_vm.collapseTagsLine)?_c('span',{staticStyle:{"display":"flex"}},[_c('el-tag',{staticStyle:{"display":"flex","align-items":"center"},attrs:{"closable":!_vm.disabled,"size":"small","hit":_vm.selected[0].hitState,"type":"info","disable-transitions":""},on:{"close":function($event){_vm.deleteTag($event, _vm.selected[0])}}},[_c('span',{staticClass:"el-select__tags-text",style:({width: _vm.autoMultipleWidth?_vm.inputWidth - 62 + 'px':'66px', whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow: 'hidden'})},[_vm._v(_vm._s(_vm.selected[0].currentLabel))])]),(_vm.selected.length > 1)?_c('el-tag',{attrs:{"closable":false,"size":"small","type":"info","disable-transitions":""}},[_c('span',{staticClass:"el-select__tags-text"},[_vm._v("+ "+_vm._s(_vm.selected.length - 1))])]):_vm._e()],1):_vm._e(),(_vm.collapseTagsLine)?_c('div',{staticStyle:{"width":"100%","overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},_vm._l((_vm.selected),function(item,index){return _c('span',{key:index,staticStyle:{"font-size":"10px","line-height":"22px","color":"#32c081","box-sizing":"border-box","border-color":"transparent","padding":"2px 4px","margin":"0 4px 0 4px","background-color":"#e1f6ec"}},[_c('i',{staticClass:"ui-cous el-tag__close el-icon-close",staticStyle:{"margin":"2px","border-radius":"50%","font-size":"10px"},on:{"click":function($event){$event.stopPropagation();_vm.deleteTag($event, item)}}}),_c('span',[_vm._v(_vm._s(item.currentLabel))])])})):_vm._e(),(!_vm.collapseTags && !_vm.collapseTagsLine)?_c('transition-group',{on:{"after-leave":_vm.resetInputHeight}},_vm._l((_vm.selected),function(item){return _c('el-tag',{key:_vm.getValueKey(item),attrs:{"closable":!_vm.disabled,"size":"small","hit":item.hitState,"type":"info","disable-transitions":""},on:{"close":function($event){_vm.deleteTag($event, item)}}},[_c('span',{staticClass:"el-select__tags-text"},[_vm._v(_vm._s(item.currentLabel))])])})):_vm._e(),(_vm.filterable )?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.query),expression:"query"}],ref:"input",staticClass:"el-select__input",class:[_vm.selectSize ? ("is-" + _vm.selectSize) : ''],style:({ width: _vm.inputLength + 'px', 'max-width': _vm.inputWidth - 42 + 'px' }),attrs:{"type":"text","disabled":_vm.disabled,"debounce":_vm.remote ? 300 : 0},domProps:{"value":(_vm.query)},on:{"focus":_vm.handleFocus,"click":function($event){$event.stopPropagation();},"keyup":[_vm.managePlaceholder,function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }$event.preventDefault();_vm.selectOption($event)}],"keydown":[_vm.resetInputState,function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.preventDefault();_vm.navigateOptions('next')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.preventDefault();_vm.navigateOptions('prev')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.visible = false},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key)){ return null; }_vm.deletePrevTag($event)}],"blur":_vm.filtBlurs,"input":[function($event){if($event.target.composing){ return; }_vm.query=$event.target.value},function (e) { return _vm.handleQueryChange(e.target.value); }]}}):_vm._e()],1):_vm._e(),_c('el-input',{ref:"reference",class:{ 'is-focus': _vm.visible },attrs:{"type":"text","placeholder":_vm.currentPlaceholder,"name":_vm.name,"id":_vm.id,"size":_vm.selectSize,"disabled":_vm.disabled,"readonly":!_vm.filterable || _vm.multiple,"validate-event":false},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur},nativeOn:{"mousedown":function($event){_vm.handleMouseDown($event)},"keyup":[function($event){_vm.debouncedOnInputChange($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }$event.preventDefault();_vm.selectOption($event)}],"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.navigateOptions('next')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.navigateOptions('prev')},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key)){ return null; }$event.stopPropagation();$event.preventDefault();_vm.visible = false},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"tab",9,$event.key)){ return null; }_vm.visible = false}],"paste":function($event){_vm.debouncedOnInputChange($event)},"mouseenter":function($event){_vm.inputHovering = true},"mouseleave":function($event){_vm.inputHovering = false}},model:{value:(_vm.selectedLabel),callback:function ($$v) {_vm.selectedLabel=$$v},expression:"selectedLabel"}},[_c('i',{class:['el-select__caret', 'el-input__icon', 'el-icon-' + _vm.iconClass],attrs:{"slot":"suffix"},on:{"click":_vm.handleIconClick},slot:"suffix"})]),_c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"before-enter":_vm.handleMenuEnter,"after-leave":_vm.doDestroy}},[_c('el-select-menu',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible && _vm.emptyText !== false),expression:"visible && emptyText !== false"}],ref:"popper"},[(_vm.bt_loading && _vm.bt_loadingOver )?_vm._t("input_slot_click"):_vm._e(),_c('el-scrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.length > 0 && !_vm.loading),expression:"options.length > 0 && !loading"}],ref:"scrollbar",class:{ 'is-empty': !_vm.allowCreate && _vm.query && _vm.filteredOptionsCount === 0 },attrs:{"tag":"ul","wrap-class":"el-select-dropdown__wrap","view-class":"el-select-dropdown__list"}},[(_vm.showNewOption)?_c('el-option',{attrs:{"value":_vm.query,"created":""}}):_vm._e(),_vm._t("default"),(_vm.bt_loading && _vm.bt_loadingOver)?_c('li',{staticStyle:{"text-align":"center","color":"#5a5e66","font-size":"12px"}},[_vm._v(_vm._s(_vm.bt_is_loading_over ? _vm.bt_loadingOver :  _vm.bt_loading))]):_vm._e()],2),(_vm.emptyText && (_vm.allowCreate && _vm.options.length === 0 || !_vm.allowCreate))?_c('p',{staticClass:"el-select-dropdown__empty"},[_vm._v(_vm._s(_vm.emptyText))]):_vm._e()],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _option = __webpack_require__(32);

var _option2 = _interopRequireDefault(_option);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_option2.default.install = function (Vue) {
  Vue.component(_option2.default.name, _option2.default);
};

exports.default = _option2.default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _optionGroup = __webpack_require__(143);

var _optionGroup2 = _interopRequireDefault(_optionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_optionGroup2.default.install = function (Vue) {
  Vue.component(_optionGroup2.default.name, _optionGroup2.default);
};

exports.default = _optionGroup2.default;

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ce302a1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__ = __webpack_require__(145);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_option_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ce302a1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_option_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_emitter2.default],

  name: 'ElOptionGroup',

  componentName: 'ElOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      visible: true
    };
  },


  watch: {
    disabled: function disabled(val) {
      this.broadcast('ElOption', 'handleGroupDisabled', val);
    }
  },

  methods: {
    queryChange: function queryChange() {
      this.visible = this.$children && Array.isArray(this.$children) && this.$children.some(function (option) {
        return option.visible === true;
      });
    }
  },

  created: function created() {
    this.$on('queryChange', this.queryChange);
  },
  mounted: function mounted() {
    if (this.disabled) {
      this.broadcast('ElOption', 'handleGroupDisabled', this.disabled);
    }
  }
}; //
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

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-select-group__wrap"},[_c('li',{staticClass:"el-select-group__title"},[_vm._v(_vm._s(_vm.label))]),_c('li',[_c('ul',{staticClass:"el-select-group"},[_vm._t("default")],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _button = __webpack_require__(147);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_button2.default.install = function (Vue) {
  Vue.component(_button2.default.name, _button2.default);
};

exports.default = _button2.default;

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc2ea35_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(149);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dc2ea35_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElButton',

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean
  },

  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize: function buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    },
    handleInnerClick: function handleInnerClick(evt) {
      if (this.disabled) {
        evt.stopPropagation();
      }
    }
  }
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"el-button",class:[
    _vm.type ? 'el-button--' + _vm.type : '',
    _vm.buttonSize ? 'el-button--' + _vm.buttonSize : '',
    {
      'is-disabled': _vm.disabled,
      'is-loading': _vm.loading,
      'is-plain': _vm.plain,
      'is-round': _vm.round
    }
  ],attrs:{"disabled":_vm.disabled,"autofocus":_vm.autofocus,"type":_vm.nativeType},on:{"click":_vm.handleClick}},[(_vm.loading)?_c('i',{staticClass:"el-icon-loading",on:{"click":_vm.handleInnerClick}}):_vm._e(),(_vm.icon && !_vm.loading)?_c('i',{class:_vm.icon,on:{"click":_vm.handleInnerClick}}):_vm._e(),(_vm.$slots.default)?_c('span',{on:{"click":_vm.handleInnerClick}},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _buttonGroup = __webpack_require__(151);

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_buttonGroup2.default.install = function (Vue) {
  Vue.component(_buttonGroup2.default.name, _buttonGroup2.default);
};

exports.default = _buttonGroup2.default;

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f386b308_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__ = __webpack_require__(153);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_group_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f386b308_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_group_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//

exports.default = {
  name: 'ElButtonGroup'
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _table = __webpack_require__(155);

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_table2.default.install = function (Vue) {

  Vue.component(_table2.default.name, _table2.default);
};

exports.default = _table2.default;

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f90111c2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__ = __webpack_require__(166);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f90111c2_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _throttle = __webpack_require__(33);

var _throttle2 = _interopRequireDefault(_throttle);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _resizeEvent = __webpack_require__(18);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

var _tableStore = __webpack_require__(157);

var _tableStore2 = _interopRequireDefault(_tableStore);

var _tableLayout = __webpack_require__(158);

var _tableLayout2 = _interopRequireDefault(_tableLayout);

var _tableBody = __webpack_require__(159);

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableHeader = __webpack_require__(160);

var _tableHeader2 = _interopRequireDefault(_tableHeader);

var _tableFooter = __webpack_require__(165);

var _tableFooter2 = _interopRequireDefault(_tableFooter);

var _util = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var tableIdSeed = 1;

exports.default = {
  name: 'ElTable',

  mixins: [_locale2.default, _migrating2.default],

  props: {
    sync: false,
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },

    size: String,

    width: [String, Number],

    height: [String, Number],

    maxHeight: [String, Number],

    fit: {
      type: Boolean,
      default: true
    },

    stripe: Boolean,

    border: Boolean,

    rowKey: [String, Function],

    context: {},

    showHeader: {
      type: Boolean,
      default: true
    },

    showSummary: Boolean,

    sumText: String,

    summaryMethod: Function,

    rowClassName: [String, Function],

    rowStyle: [Object, Function],

    cellClassName: [String, Function],

    cellStyle: [Object, Function],

    headerRowClassName: [String, Function],

    headerRowStyle: [Object, Function],

    headerCellClassName: [String, Function],

    headerCellStyle: [Object, Function],

    highlightCurrentRow: Boolean,

    currentRowKey: [String, Number],

    emptyText: String,

    expandRowKeys: Array,

    defaultExpandAll: Boolean,

    defaultSort: Object,

    tooltipEffect: String,

    spanMethod: Function
  },

  components: {
    TableHeader: _tableHeader2.default,
    TableFooter: _tableFooter2.default,
    TableBody: _tableBody2.default,
    ElCheckbox: _checkbox2.default
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        events: {
          expand: 'expand is renamed to expand-change'
        }
      };
    },
    setCurrentRow: function setCurrentRow(row) {
      this.store.commit('setCurrentRow', row);
    },
    toggleRowSelection: function toggleRowSelection(row, selected) {
      this.store.toggleRowSelection(row, selected);
      this.store.updateAllSelected();
    },
    toggleRowExpansion: function toggleRowExpansion(row, expanded) {
      this.store.toggleRowExpansion(row, expanded);
    },
    clearSelection: function clearSelection() {
      this.store.clearSelection();
    },
    clearFilter: function clearFilter() {
      this.store.clearFilter();
    },
    clearSort: function clearSort() {
      this.store.clearSort();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
      if (this.hoverState) this.hoverState = null;
    },
    updateScrollY: function updateScrollY() {
      this.layout.updateScrollY();
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var _$refs = this.$refs,
          headerWrapper = _$refs.headerWrapper,
          footerWrapper = _$refs.footerWrapper;

      var refs = this.$refs;
      var self = this;
      var bodyWrappers = this.bodyWrapper;

      /*ff*/
      var ticking = false; // rAF 触发锁
      var mamap = true;
      var settimoiut = '';
      function onScroll() {
        mamap = false;
        bodyWrappers.querySelectorAll('.el-table__body')[0].style.pointerEvents = 'none';
        if (settimoiut) {
          clearTimeout(settimoiut);
        }
        settimoiut = setTimeout(function () {
          bodyWrappers.querySelectorAll('.el-table__body')[0].style.pointerEvents = 'auto';
        }, 500);

        if (!ticking) {
          requestAnimationFrame(realFunc);
          ticking = true;
        }
      }

      function realFunc() {

        // do something...
        if (headerWrapper) headerWrapper.scrollLeft = bodyWrappers.scrollLeft;
        if (footerWrapper) footerWrapper.scrollLeft = bodyWrappers.scrollLeft;
        if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = bodyWrappers.scrollTop;
        if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = bodyWrappers.scrollTop;
        var maxScrollLeftPosition = bodyWrappers.scrollWidth - bodyWrappers.offsetWidth - 1;
        var scrollLeft = bodyWrappers.scrollLeft;
        if (scrollLeft >= maxScrollLeftPosition) {
          self.scrollPosition = 'right';
        } else if (scrollLeft === 0) {
          self.scrollPosition = 'left';
        } else {
          self.scrollPosition = 'middle';
        }
        ticking = false;
      }

      // 滚动事件监听
      this.bodyWrapper.addEventListener('scroll', onScroll, false);

      /*ff*/

      /*   this.bodyWrapper.addEventListener('scroll', function() {
           if (headerWrapper) headerWrapper.scrollLeft = this.scrollLeft;
           if (footerWrapper) footerWrapper.scrollLeft = this.scrollLeft;
           if (refs.fixedBodyWrapper) refs.fixedBodyWrapper.scrollTop = this.scrollTop;
           if (refs.rightFixedBodyWrapper) refs.rightFixedBodyWrapper.scrollTop = this.scrollTop;
           const maxScrollLeftPosition = this.scrollWidth - this.offsetWidth - 1;
           const scrollLeft = this.scrollLeft;
           if (scrollLeft >= maxScrollLeftPosition) {
             self.scrollPosition = 'right';
           } else if (scrollLeft === 0) {
             self.scrollPosition = 'left';
           } else {
             self.scrollPosition = 'middle';
           }
         });*/

      var scrollBodyWrapper = function scrollBodyWrapper(event) {
        var deltaX = event.deltaX,
            deltaY = event.deltaY;


        if (Math.abs(deltaX) < Math.abs(deltaY)) return;

        if (deltaX > 0) {
          _this.bodyWrapper.scrollLeft += 10;
        } else if (deltaX < 0) {
          _this.bodyWrapper.scrollLeft -= 10;
        }
      };
      if (headerWrapper) {
        (0, _util.mousewheel)(headerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
      }
      if (footerWrapper) {
        (0, _util.mousewheel)(footerWrapper, (0, _throttle2.default)(16, scrollBodyWrapper));
      }

      if (this.fit) {
        this.windowResizeListener = (0, _throttle2.default)(50, function () {
          if (_this.$ready) _this.doLayout();
        });
        (0, _resizeEvent.addResizeListener)(this.$el, this.windowResizeListener);
      }
    },
    doLayout: function doLayout() {
      var _this2 = this;

      this.store.updateColumns();
      this.updateScrollY();
      this.layout.update();
      this.$nextTick(function () {
        if (_this2.height) {
          _this2.layout.setHeight(_this2.height);
        } else if (_this2.maxHeight) {
          _this2.layout.setMaxHeight(_this2.maxHeight);
        } else if (_this2.shouldUpdateHeight) {
          _this2.layout.updateHeight();
        }
      });
    }
  },

  created: function created() {
    var _this3 = this;

    this.tableId = 'el-table_' + tableIdSeed + '_';
    this.debouncedLayout = (0, _debounce2.default)(50, function () {
      return _this3.doLayout();
    });
  },


  computed: {
    tableSize: function tableSize() {
      return this.size || (this.$ELEMENT || {}).size;
    },
    bodyWrapper: function bodyWrapper() {
      return this.$refs.bodyWrapper;
    },
    shouldUpdateHeight: function shouldUpdateHeight() {
      return typeof this.height === 'number' || this.fixedColumns.length > 0 || this.rightFixedColumns.length > 0;
    },
    selection: function selection() {
      return this.store.states.selection;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    tableData: function tableData() {
      return this.store.states.data;
    },
    fixedColumns: function fixedColumns() {
      return this.store.states.fixedColumns;
    },
    rightFixedColumns: function rightFixedColumns() {
      return this.store.states.rightFixedColumns;
    },
    bodyHeight: function bodyHeight() {
      var style = {};

      if (this.height) {
        style = {
          height: this.layout.bodyHeight ? this.layout.bodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        style = {
          'max-height': (this.showHeader ? this.maxHeight - this.layout.headerHeight - this.layout.footerHeight : this.maxHeight - this.layout.footerHeight) + 'px'
        };
      }

      return style;
    },
    bodyWidth: function bodyWidth() {
      var _layout = this.layout,
          bodyWidth = _layout.bodyWidth,
          scrollY = _layout.scrollY,
          gutterWidth = _layout.gutterWidth;

      return bodyWidth ? bodyWidth - (scrollY ? gutterWidth : 0) + 'px' : '';
    },
    fixedBodyHeight: function fixedBodyHeight() {
      var style = {};

      if (this.height) {
        style = {
          height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
        };
      } else if (this.maxHeight) {
        var maxHeight = this.layout.scrollX ? this.maxHeight - this.layout.gutterWidth : this.maxHeight;

        if (this.showHeader) {
          maxHeight -= this.layout.headerHeight;
        }

        style = {
          'max-height': maxHeight + 'px'
        };
      }

      return style;
    },
    fixedHeight: function fixedHeight() {
      var style = {};

      if (this.maxHeight) {
        style = {
          bottom: this.layout.scrollX && this.data.length ? this.layout.gutterWidth + 'px' : ''
        };
      } else {
        style = {
          height: this.layout.viewportHeight ? this.layout.viewportHeight + 'px' : ''
        };
      }

      return style;
    }
  },

  watch: {
    height: function height(value) {
      this.layout.setHeight(value);
    },
    maxHeight: function maxHeight(value) {
      this.layout.setMaxHeight(value);
    },
    currentRowKey: function currentRowKey(newVal) {
      this.store.setCurrentRowKey(newVal);
    },


    data: {
      immediate: true,
      handler: function handler(val) {
        var _this4 = this;

        this.store.commit('setData', val);
        if (this.$ready) {
          this.$nextTick(function () {
            _this4.doLayout();
          });
        }
      }
    },

    expandRowKeys: {
      immediate: true,
      handler: function handler(newVal) {
        if (newVal) {
          this.store.setExpandRowKeys(newVal);
        }
      }
    }
  },

  destroyed: function destroyed() {
    if (this.windowResizeListener) (0, _resizeEvent.removeResizeListener)(this.$el, this.windowResizeListener);
  },
  mounted: function mounted() {
    var _this5 = this;

    this.bindEvents();
    this.doLayout();

    // init filters
    this.store.states.columns.forEach(function (column) {
      if (column.filteredValue && column.filteredValue.length) {
        _this5.store.commit('filterChange', {
          column: column,
          values: column.filteredValue,
          silent: true
        });
      }
    });

    this.$ready = true;
  },
  data: function data() {
    var store = new _tableStore2.default(this, {
      rowKey: this.rowKey,
      defaultExpandAll: this.defaultExpandAll
    });
    var layout = new _tableLayout2.default({
      store: store,
      table: this,
      fit: this.fit,
      showHeader: this.showHeader
    });

    return {
      store: store,
      layout: layout,
      isHidden: false,
      renderExpanded: null,
      resizeProxyVisible: false,
      // 是否拥有多级表头
      isGroup: false,
      scrollPosition: 'left'
    };
  }
};

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortData = function sortData(data, states) {
  var sortingColumn = states.sortingColumn;
  if (!sortingColumn || typeof sortingColumn.sortable === 'string') {
    return data;
  }
  return (0, _util.orderBy)(data, states.sortProp, states.sortOrder, sortingColumn.sortMethod, sortingColumn.sortBy);
};

var getKeysMap = function getKeysMap(array, rowKey) {
  var arrayMap = {};
  (array || []).forEach(function (row, index) {
    arrayMap[(0, _util.getRowIdentity)(row, rowKey)] = { row: row, index: index };
  });
  return arrayMap;
};

var toggleRowSelection = function toggleRowSelection(states, row, selected) {
  var changed = false;
  var selection = states.selection;
  var index = selection.indexOf(row);
  if (typeof selected === 'undefined') {
    if (index === -1) {
      selection.push(row);
      changed = true;
    } else {
      selection.splice(index, 1);
      changed = true;
    }
  } else {
    if (selected && index === -1) {
      selection.push(row);
      changed = true;
    } else if (!selected && index > -1) {
      selection.splice(index, 1);
      changed = true;
    }
  }

  return changed;
};

var toggleRowExpansion = function toggleRowExpansion(states, row, expanded) {
  var changed = false;
  var expandRows = states.expandRows;
  if (typeof expanded !== 'undefined') {
    var index = expandRows.indexOf(row);
    if (expanded) {
      if (index === -1) {
        expandRows.push(row);
        changed = true;
      }
    } else {
      if (index !== -1) {
        expandRows.splice(index, 1);
        changed = true;
      }
    }
  } else {
    var _index = expandRows.indexOf(row);
    if (_index === -1) {
      expandRows.push(row);
      changed = true;
    } else {
      expandRows.splice(_index, 1);
      changed = true;
    }
  }

  return changed;
};

var TableStore = function TableStore(table) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!table) {
    throw new Error('Table is required.');
  }
  this.table = table;

  this.states = {
    rowKey: null,
    _columns: [],
    originColumns: [],
    columns: [],
    fixedColumns: [],
    rightFixedColumns: [],
    leafColumns: [],
    fixedLeafColumns: [],
    rightFixedLeafColumns: [],
    isComplex: false,
    _data: null,
    filteredData: null,
    data: null,
    sortingColumn: null,
    sortProp: null,
    sortOrder: null,
    isAllSelected: false,
    selection: [],
    reserveSelection: false,
    selectable: null,
    currentRow: null,
    hoverRow: null,
    filters: {},
    expandRows: [],
    defaultExpandAll: false
  };

  for (var prop in initialState) {
    if (initialState.hasOwnProperty(prop) && this.states.hasOwnProperty(prop)) {
      this.states[prop] = initialState[prop];
    }
  }
};

TableStore.prototype.mutations = {
  setData: function setData(states, data) {
    var _this = this;

    var dataInstanceChanged = states._data !== data;
    states._data = data;

    Object.keys(states.filters).forEach(function (columnId) {
      var values = states.filters[columnId];
      if (!values || values.length === 0) return;
      var column = (0, _util.getColumnById)(_this.states, columnId);
      if (column && column.filterMethod) {
        data = data.filter(function (row) {
          return values.some(function (value) {
            return column.filterMethod.call(null, value, row);
          });
        });
      }
    });

    states.filteredData = data;
    states.data = sortData(data || [], states);

    // states.data.forEach((item) => {
    //   if (!item.$extra) {
    //     Object.defineProperty(item, '$extra', {
    //       value: {},
    //       enumerable: false
    //     });
    //   }
    // });

    this.updateCurrentRow();

    if (!states.reserveSelection) {
      if (dataInstanceChanged) {
        this.clearSelection();
      } else {
        this.cleanSelection();
      }
      this.updateAllSelected();
    } else {
      var rowKey = states.rowKey;
      if (rowKey) {
        var selection = states.selection;
        var selectedMap = getKeysMap(selection, rowKey);

        states.data.forEach(function (row) {
          var rowId = (0, _util.getRowIdentity)(row, rowKey);
          var rowInfo = selectedMap[rowId];
          if (rowInfo) {
            selection[rowInfo.index] = row;
          }
        });

        this.updateAllSelected();
      } else {
        console.warn('WARN: rowKey is required when reserve-selection is enabled.');
      }
    }

    var defaultExpandAll = states.defaultExpandAll;
    if (defaultExpandAll) {
      this.states.expandRows = (states.data || []).slice(0);
    }

    _vue2.default.nextTick(function () {
      return _this.table.updateScrollY();
    });
  },
  changeSortCondition: function changeSortCondition(states, options) {
    var _this2 = this;

    states.data = sortData(states.filteredData || states._data || [], states);

    if (!options || !options.silent) {
      this.table.$emit('sort-change', {
        column: this.states.sortingColumn,
        prop: this.states.sortProp,
        order: this.states.sortOrder
      });
    }

    _vue2.default.nextTick(function () {
      return _this2.table.updateScrollY();
    });
  },
  filterChange: function filterChange(states, options) {
    var _this3 = this;

    this.table.$emit('filter-change', states, options);
    // let { column, values, silent } = options;
    // if (values && !Array.isArray(values)) {
    //   values = [values];
    // }
    //
    // const prop = column.property;
    // const filters = {};
    //
    // if (prop) {
    //   states.filters[column.id] = values;
    //   filters[column.columnKey || column.id] = values;
    // }
    //
    // let data = states._data;
    //
    // Object.keys(states.filters).forEach((columnId) => {
    //   const values = states.filters[columnId];
    //   if (!values || values.length === 0) return;
    //   const column = getColumnById(this.states, columnId);
    //   if (column && column.filterMethod) {
    //     data = data.filter((row) => {
    //       return values.some(value => column.filterMethod.call(null, value, row));
    //     });
    //   }
    // });
    //
    // states.filteredData = data;
    // states.data = sortData(data, states);
    //
    // if (!silent) {
    //   this.table.$emit('filter-change', filters);
    // }
    //
    _vue2.default.nextTick(function () {
      return _this3.table.updateScrollY();
    });
  },
  insertColumn: function insertColumn(states, column, index, parent) {
    var array = states._columns;
    if (parent) {
      array = parent.children;
      if (!array) array = parent.children = [];
    }

    if (typeof index !== 'undefined') {
      array.splice(index, 0, column);
    } else {
      array.push(column);
    }

    if (column.type === 'selection') {
      states.selectable = column.selectable;
      states.reserveSelection = column.reserveSelection;
    }

    this.updateColumns(); // hack for dynamics insert column
    this.scheduleLayout();
  },
  removeColumn: function removeColumn(states, column) {
    var _columns = states._columns;
    if (_columns) {
      _columns.splice(_columns.indexOf(column), 1);
    }

    this.updateColumns(); // hack for dynamics remove column
    this.scheduleLayout();
  },
  setHoverRow: function setHoverRow(states, row) {
    states.hoverRow = row;
  },
  setCurrentRow: function setCurrentRow(states, row) {
    var oldCurrentRow = states.currentRow;
    states.currentRow = row;

    if (oldCurrentRow !== row) {
      this.table.$emit('current-change', row, oldCurrentRow);
    }
  },
  rowSelectedChanged: function rowSelectedChanged(states, row) {
    var changed = toggleRowSelection(states, row);
    var selection = states.selection;

    if (changed) {
      var table = this.table;
      table.$emit('selection-change', selection);
      table.$emit('select', selection, row);
    }

    this.updateAllSelected();
  },


  toggleAllSelection: (0, _debounce2.default)(10, function (states) {
    var data = states.data || [];
    var value = !states.isAllSelected;
    var selection = this.states.selection;
    var selectionChanged = false;

    data.forEach(function (item, index) {
      if (states.selectable) {
        if (states.selectable.call(null, item, index) && toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      } else {
        if (toggleRowSelection(states, item, value)) {
          selectionChanged = true;
        }
      }
    });

    var table = this.table;
    if (selectionChanged) {
      table.$emit('selection-change', selection);
    }
    table.$emit('select-all', selection);
    states.isAllSelected = value;
  })
};

var doFlattenColumns = function doFlattenColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

TableStore.prototype.updateColumns = function () {
  var states = this.states;
  var _columns = states._columns || [];
  states.fixedColumns = _columns.filter(function (column) {
    return column.fixed === true || column.fixed === 'left';
  });
  states.rightFixedColumns = _columns.filter(function (column) {
    return column.fixed === 'right';
  });

  if (states.fixedColumns.length > 0 && _columns[0] && _columns[0].type === 'selection' && !_columns[0].fixed) {
    _columns[0].fixed = true;
    states.fixedColumns.unshift(_columns[0]);
  }

  var notFixedColumns = _columns.filter(function (column) {
    return !column.fixed;
  });
  states.originColumns = [].concat(states.fixedColumns).concat(notFixedColumns).concat(states.rightFixedColumns);

  var leafColumns = doFlattenColumns(notFixedColumns);
  var fixedLeafColumns = doFlattenColumns(states.fixedColumns);
  var rightFixedLeafColumns = doFlattenColumns(states.rightFixedColumns);

  states.leafColumnsLength = leafColumns.length;
  states.fixedLeafColumnsLength = fixedLeafColumns.length;
  states.rightFixedLeafColumnsLength = rightFixedLeafColumns.length;

  states.columns = [].concat(fixedLeafColumns).concat(leafColumns).concat(rightFixedLeafColumns);
  states.isComplex = states.fixedColumns.length > 0 || states.rightFixedColumns.length > 0;
};

TableStore.prototype.isSelected = function (row) {
  return (this.states.selection || []).indexOf(row) > -1;
};

TableStore.prototype.clearSelection = function () {
  var states = this.states;
  states.isAllSelected = false;
  var oldSelection = states.selection;
  states.selection = [];
  if (oldSelection.length > 0) {
    this.table.$emit('selection-change', states.selection);
  }
};

TableStore.prototype.setExpandRowKeys = function (rowKeys) {
  var expandRows = [];
  var data = this.states.data;
  var rowKey = this.states.rowKey;
  if (!rowKey) throw new Error('[Table] prop row-key should not be empty.');
  var keysMap = getKeysMap(data, rowKey);
  rowKeys.forEach(function (key) {
    var info = keysMap[key];
    if (info) {
      expandRows.push(info.row);
    }
  });

  this.states.expandRows = expandRows;
};

TableStore.prototype.toggleRowSelection = function (row, selected) {
  var changed = toggleRowSelection(this.states, row, selected);
  if (changed) {
    this.table.$emit('selection-change', this.states.selection);
  }
};

TableStore.prototype.toggleRowExpansion = function (row, expanded) {
  var changed = toggleRowExpansion(this.states, row, expanded);
  if (changed) {
    this.table.$emit('expand-change', row, this.states.expandRows);
  }
};

TableStore.prototype.cleanSelection = function () {
  var selection = this.states.selection || [];
  var data = this.states.data;
  var rowKey = this.states.rowKey;
  var deleted = void 0;
  if (rowKey) {
    deleted = [];
    var selectedMap = getKeysMap(selection, rowKey);
    var dataMap = getKeysMap(data, rowKey);
    for (var key in selectedMap) {
      if (selectedMap.hasOwnProperty(key) && !dataMap[key]) {
        deleted.push(selectedMap[key].row);
      }
    }
  } else {
    deleted = selection.filter(function (item) {
      return data.indexOf(item) === -1;
    });
  }

  deleted.forEach(function (deletedItem) {
    selection.splice(selection.indexOf(deletedItem), 1);
  });

  if (deleted.length) {
    this.table.$emit('selection-change', selection);
  }
};

TableStore.prototype.clearFilter = function () {
  var states = this.states;
  var _table$$refs = this.table.$refs,
      tableHeader = _table$$refs.tableHeader,
      fixedTableHeader = _table$$refs.fixedTableHeader,
      rightFixedTableHeader = _table$$refs.rightFixedTableHeader;

  var panels = {};

  if (tableHeader) panels = (0, _merge2.default)(panels, tableHeader.filterPanels);
  if (fixedTableHeader) panels = (0, _merge2.default)(panels, fixedTableHeader.filterPanels);
  if (rightFixedTableHeader) panels = (0, _merge2.default)(panels, rightFixedTableHeader.filterPanels);

  var keys = Object.keys(panels);
  if (!keys.length) return;

  keys.forEach(function (key) {
    panels[key].filteredValue = [];
  });

  states.filters = {};

  this.commit('filterChange', {
    column: {},
    values: [],
    silent: true
  });
};

TableStore.prototype.clearSort = function () {
  var states = this.states;
  if (!states.sortingColumn) return;
  states.sortingColumn.order = null;
  states.sortProp = null;
  states.sortOrder = null;

  this.commit('changeSortCondition', {
    silent: true
  });
};

TableStore.prototype.updateAllSelected = function () {
  var states = this.states;
  var selection = states.selection,
      rowKey = states.rowKey,
      selectable = states.selectable,
      data = states.data;

  if (!data || data.length === 0) {
    states.isAllSelected = false;
    return;
  }

  var selectedMap = void 0;
  if (rowKey) {
    selectedMap = getKeysMap(states.selection, rowKey);
  }

  var isSelected = function isSelected(row) {
    if (selectedMap) {
      return !!selectedMap[(0, _util.getRowIdentity)(row, rowKey)];
    } else {
      return selection.indexOf(row) !== -1;
    }
  };

  var isAllSelected = true;
  var selectedCount = 0;
  for (var i = 0, j = data.length; i < j; i++) {
    var item = data[i];
    if (selectable) {
      var isRowSelectable = selectable.call(null, item, i);
      if (isRowSelectable) {
        if (!isSelected(item)) {
          isAllSelected = false;
          break;
        } else {
          selectedCount++;
        }
      }
    } else {
      if (!isSelected(item)) {
        isAllSelected = false;
        break;
      } else {
        selectedCount++;
      }
    }
  }

  if (selectedCount === 0) isAllSelected = false;

  states.isAllSelected = isAllSelected;
};

TableStore.prototype.scheduleLayout = function () {
  this.table.debouncedLayout();
};

TableStore.prototype.setCurrentRowKey = function (key) {
  var states = this.states;
  var rowKey = states.rowKey;
  if (!rowKey) throw new Error('[Table] row-key should not be empty.');
  var data = states.data || [];
  var keysMap = getKeysMap(data, rowKey);
  var info = keysMap[key];
  if (info) {
    states.currentRow = info.row;
  }
};

TableStore.prototype.updateCurrentRow = function () {
  var states = this.states;
  var table = this.table;
  var data = states.data || [];
  var oldCurrentRow = states.currentRow;

  if (data.indexOf(oldCurrentRow) === -1) {
    states.currentRow = null;

    if (states.currentRow !== oldCurrentRow) {
      table.$emit('current-change', null, oldCurrentRow);
    }
  }
};

TableStore.prototype.commit = function (name) {
  var mutations = this.mutations;
  if (mutations[name]) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    mutations[name].apply(this, [this.states].concat(args));
  } else {
    throw new Error('Action not found: ' + name);
  }
};

exports.default = TableStore;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _scrollbarWidth = __webpack_require__(34);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TableLayout = function () {
  function TableLayout(options) {
    _classCallCheck(this, TableLayout);

    this.table = null;
    this.store = null;
    this.columns = null;
    this.fit = true;
    this.showHeader = true;

    this.height = null;
    this.scrollX = false;
    this.scrollY = false;
    this.bodyWidth = null;
    this.fixedWidth = null;
    this.rightFixedWidth = null;
    this.tableHeight = null;
    this.headerHeight = 44; // Table Header Height
    this.appendHeight = 0; // Append Slot Height
    this.footerHeight = 44; // Table Footer Height
    this.viewportHeight = null; // Table Height - Scroll Bar Height
    this.bodyHeight = null; // Table Height - Table Header Height
    this.fixedBodyHeight = null; // Table Height - Table Header Height - Scroll Bar Height
    this.gutterWidth = (0, _scrollbarWidth2.default)();

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    if (!this.table) {
      throw new Error('table is required for Table Layout');
    }
    if (!this.store) {
      throw new Error('store is required for Table Layout');
    }
  }

  TableLayout.prototype.updateScrollY = function updateScrollY() {
    var height = this.height;
    if (typeof height !== 'string' && typeof height !== 'number') return;
    var bodyWrapper = this.table.bodyWrapper;
    if (this.table.$el && bodyWrapper) {
      var body = bodyWrapper.querySelector('.el-table__body');
      this.scrollY = body.offsetHeight > bodyWrapper.offsetHeight;
    }
  };

  TableLayout.prototype.setHeight = function setHeight(value) {
    var prop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'height';

    var el = this.table.$el;
    if (typeof value === 'string' && /^\d+$/.test(value)) {
      value = Number(value);
    }

    this.height = value;

    if (!el) return;
    if (typeof value === 'number') {
      el.style[prop] = value + 'px';

      this.updateHeight();
    } else if (typeof value === 'string') {
      if (value === '') {
        el.style[prop] = '';
      }
      this.updateHeight();
    }
  };

  TableLayout.prototype.setMaxHeight = function setMaxHeight(value) {
    return this.setHeight(value, 'max-height');
  };

  TableLayout.prototype.updateHeight = function updateHeight() {
    var height = this.tableHeight = this.table.$el.clientHeight;
    var noData = !this.table.data || this.table.data.length === 0;
    var _table$$refs = this.table.$refs,
        headerWrapper = _table$$refs.headerWrapper,
        appendWrapper = _table$$refs.appendWrapper,
        footerWrapper = _table$$refs.footerWrapper;

    var footerHeight = this.footerHeight = footerWrapper ? footerWrapper.offsetHeight : 0;
    this.appendHeight = appendWrapper ? appendWrapper.offsetHeight : 0;
    if (this.showHeader && !headerWrapper) return;
    if (!this.showHeader) {
      this.headerHeight = 0;
      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
        this.bodyHeight = height - footerHeight + (footerWrapper ? 1 : 0);
      }
      this.fixedBodyHeight = this.scrollX ? height - this.gutterWidth : height;
    } else {
      var headerHeight = this.headerHeight = headerWrapper.offsetHeight;
      var bodyHeight = height - headerHeight - footerHeight + (footerWrapper ? 1 : 0);
      if (this.height !== null && (!isNaN(this.height) || typeof this.height === 'string')) {
        this.bodyHeight = bodyHeight;
      }
      this.fixedBodyHeight = this.scrollX ? bodyHeight - this.gutterWidth : bodyHeight;
    }
    this.viewportHeight = this.scrollX ? height - (noData ? 0 : this.gutterWidth) : height;
  };

  TableLayout.prototype.update = function update() {
    var fit = this.fit;
    var columns = this.table.columns;
    var bodyWidth = this.table.$el.clientWidth;
    var bodyMinWidth = 0;

    var flattenColumns = [];
    columns.forEach(function (column) {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });

    var flexColumns = flattenColumns.filter(function (column) {
      return typeof column.width !== 'number';
    });

    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach(function (column) {
        bodyMinWidth += column.width || column.minWidth || 80;
      });

      var scrollYWidth = this.scrollY ? this.gutterWidth : 0;

      if (bodyMinWidth <= bodyWidth - scrollYWidth) {
        // DON'T HAVE SCROLL BAR
        this.scrollX = false;

        var totalFlexWidth = bodyWidth - scrollYWidth - bodyMinWidth;

        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          var allColumnsWidth = flexColumns.reduce(function (prev, column) {
            return prev + (column.minWidth || 80);
          }, 0);
          var flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          var noneFirstWidth = 0;

          flexColumns.forEach(function (column, index) {
            if (index === 0) return;
            var flexWidth = Math.floor((column.minWidth || 80) * flexWidthPerPixel);
            noneFirstWidth += flexWidth;
            column.realWidth = (column.minWidth || 80) + flexWidth;
          });

          flexColumns[0].realWidth = (flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        // HAVE HORIZONTAL SCROLL BAR
        this.scrollX = true;
        flexColumns.forEach(function (column) {
          column.realWidth = column.minWidth;
        });
      }

      this.bodyWidth = Math.max(bodyMinWidth, bodyWidth);
    } else {
      flattenColumns.forEach(function (column) {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = column.width || column.minWidth;
        }

        bodyMinWidth += column.realWidth;
      });
      this.scrollX = bodyMinWidth > bodyWidth;

      this.bodyWidth = bodyMinWidth;
    }

    var fixedColumns = this.store.states.fixedColumns;

    if (fixedColumns.length > 0) {
      var fixedWidth = 0;
      fixedColumns.forEach(function (column) {
        fixedWidth += column.realWidth;
      });

      this.fixedWidth = fixedWidth;
    }

    var rightFixedColumns = this.store.states.rightFixedColumns;
    if (rightFixedColumns.length > 0) {
      var rightFixedWidth = 0;
      rightFixedColumns.forEach(function (column) {
        rightFixedWidth += column.realWidth;
      });

      this.rightFixedWidth = rightFixedWidth;
    }
  };

  return TableLayout;
}();

exports.default = TableLayout;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _util = __webpack_require__(25);

var _dom = __webpack_require__(3);

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tooltip = __webpack_require__(22);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ElCheckbox: _checkbox2.default,
    ElTooltip: _tooltip2.default
  },

  props: {
    myisfixed: false,
    sync: false,
    store: {
      required: true
    },
    stripe: Boolean,
    context: {},
    layout: {
      required: true
    },
    rowClassName: [String, Function],
    rowStyle: [Object, Function],
    fixed: String,
    highlight: Boolean
  },

  render: function render(h) {
    var _this = this;

    var columnsHidden = this.columns.map(function (column, index) {
      return _this.isColumnHidden(index);
    });
    return h(
      'table',
      {
        'class': 'el-table__body',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h(
        'colgroup',
        null,
        [this._l(this.columns, function (column) {
          return h(
            'col',
            {
              attrs: {
                name: column.id,
                width: column.realWidth || column.width
              }
            },
            []
          );
        })]
      ), h(
        'tbody',
        null,
        [this._l(this.data, function (row, $index) {
          return [_this.sync ? h(
            'lazy-render',
            {
              attrs: { time: 20 * $index, datas: { row: row, index: $index }
              },
              style: _this.rowStyle ? _this.getRowStyle(row, $index) : null,
              key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
              'class': [_this.getRowClass(row, $index)] },
            [_this._l(_this.columns, function (column, cellIndex) {
              var _getSpan = _this.getSpan(row, column, $index, cellIndex),
                  rowspan = _getSpan.rowspan,
                  colspan = _getSpan.colspan;

              if (!rowspan || !colspan) {
                return '';
              } else {
                if (rowspan === 1 && colspan === 1) {
                  return h(
                    'td',
                    {
                      style: _this.getCellStyle($index, cellIndex, row, column),
                      'class': _this.getCellClass($index, cellIndex, row, column),
                      on: {
                        'mouseenter': function mouseenter($event) {
                          return _this.handleCellMouseEnter($event, row);
                        },
                        'mouseleave': _this.handleCellMouseLeave
                      }
                    },
                    [column.renderCell.call(_this._renderProxy, h, {
                      row: row,
                      column: column,
                      $index: $index,
                      store: _this.store,
                      _self: _this.context || _this.table.$vnode.context
                    }, columnsHidden[cellIndex])]
                  );
                } else {
                  return h(
                    'td',
                    {
                      style: _this.getCellStyle($index, cellIndex, row, column),
                      'class': _this.getCellClass($index, cellIndex, row, column),
                      attrs: { rowspan: rowspan,
                        colspan: colspan
                      },
                      on: {
                        'mouseenter': function mouseenter($event) {
                          return _this.handleCellMouseEnter($event, row);
                        },
                        'mouseleave': _this.handleCellMouseLeave
                      }
                    },
                    [column.renderCell.call(_this._renderProxy, h, {
                      row: row,
                      column: column,
                      $index: $index,
                      store: _this.store,
                      _self: _this.context || _this.table.$vnode.context
                    }, columnsHidden[cellIndex])]
                  );
                }
              }
            }), !_this.fixed && _this.layout.scrollY && _this.layout.gutterWidth ? h(
              'td',
              { 'class': 'gutter' },
              []
            ) : '']
          ) : h(
            'tr',
            {
              style: _this.rowStyle ? _this.getRowStyle(row, $index) : null,
              key: _this.table.rowKey ? _this.getKeyOfRow(row, $index) : $index,
              on: {
                'dblclick': function dblclick($event) {
                  return _this.handleDoubleClick($event, row);
                },
                'click': function click($event) {
                  return _this.handleClick($event, row);
                },
                'mousedown': function mousedown($event) {
                  return _this.handleMousedown($event, row);
                },
                'contextmenu': function contextmenu($event) {
                  return _this.handleContextMenu($event, row);
                },
                'mouseenter': function mouseenter(_) {
                  return _this.handleMouseEnter($index);
                },
                'mouseleave': function mouseleave(_) {
                  return _this.handleMouseLeave();
                }
              },

              'class': [_this.getRowClass(row, $index)] },
            [_this._l(_this.columns, function (column, cellIndex) {
              var _getSpan2 = _this.getSpan(row, column, $index, cellIndex),
                  rowspan = _getSpan2.rowspan,
                  colspan = _getSpan2.colspan;

              if (!rowspan || !colspan) {
                return '';
              } else {
                if (rowspan === 1 && colspan === 1) {
                  return h(
                    'td',
                    {
                      style: _this.getCellStyle($index, cellIndex, row, column),
                      'class': _this.getCellClass($index, cellIndex, row, column),
                      on: {
                        'mouseenter': function mouseenter($event) {
                          return _this.handleCellMouseEnter($event, row);
                        },
                        'mouseleave': _this.handleCellMouseLeave
                      }
                    },
                    [column.renderCell.call(_this._renderProxy, h, {
                      row: row,
                      column: column,
                      $index: $index,
                      store: _this.store,
                      _self: _this.context || _this.table.$vnode.context
                    }, columnsHidden[cellIndex])]
                  );
                } else {
                  return h(
                    'td',
                    {
                      style: _this.getCellStyle($index, cellIndex, row, column),
                      'class': _this.getCellClass($index, cellIndex, row, column),
                      attrs: { rowspan: rowspan,
                        colspan: colspan
                      },
                      on: {
                        'mouseenter': function mouseenter($event) {
                          return _this.handleCellMouseEnter($event, row);
                        },
                        'mouseleave': _this.handleCellMouseLeave
                      }
                    },
                    [column.renderCell.call(_this._renderProxy, h, {
                      row: row,
                      column: column,
                      $index: $index,
                      store: _this.store,
                      _self: _this.context || _this.table.$vnode.context
                    }, columnsHidden[cellIndex])]
                  );
                }
              }
            }), !_this.fixed && _this.layout.scrollY && _this.layout.gutterWidth ? h(
              'td',
              { 'class': 'gutter' },
              []
            ) : '']
          ), _this.store.states.expandRows.indexOf(row) > -1 ? h(
            'tr',
            null,
            [h(
              'td',
              {
                attrs: { colspan: _this.columns.length },
                'class': 'el-table__expanded-cell' },
              [_this.table.renderExpanded ? _this.table.renderExpanded(h, { row: row, $index: $index, store: _this.store }) : '']
            )]
          ) : ''];
        }).concat(h(
          'el-tooltip',
          {
            attrs: { effect: this.table.tooltipEffect, placement: 'top', content: this.tooltipContent },
            ref: 'tooltip' },
          []
        ))]
      )]
    );
  },


  watch: {
    'store.states.hoverRow': function storeStatesHoverRow(newVal, oldVal) {
      if (!this.store.states.isComplex) return;
      var el = this.$el;
      if (!el) return;
      var tr = el.querySelector('tbody').children;
      var rows = [].filter.call(tr, function (row) {
        return (0, _dom.hasClass)(row, 'el-table__row');
      });
      var oldRow = rows[oldVal];
      var newRow = rows[newVal];
      if (oldRow) {
        (0, _dom.removeClass)(oldRow, 'hover-row');
      }
      if (newRow) {
        (0, _dom.addClass)(newRow, 'hover-row');
      }
    },
    'store.states.currentRow': function storeStatesCurrentRow(newVal, oldVal) {
      if (!this.highlight) return;
      var el = this.$el;
      if (!el) return;
      var data = this.store.states.data;
      var tr = el.querySelector('tbody').children;
      var rows = [].filter.call(tr, function (row) {
        return (0, _dom.hasClass)(row, 'el-table__row');
      });
      var oldRow = rows[data.indexOf(oldVal)];
      var newRow = rows[data.indexOf(newVal)];
      if (oldRow) {
        (0, _dom.removeClass)(oldRow, 'current-row');
      } else if (rows) {
        [].forEach.call(rows, function (row) {
          return (0, _dom.removeClass)(row, 'current-row');
        });
      }
      if (newRow) {
        (0, _dom.addClass)(newRow, 'current-row');
      }
    }
  },

  computed: {
    table: function table() {
      return this.$parent;
    },
    data: function data() {
      return this.store.states.data;
    },
    columnsCount: function columnsCount() {
      return this.store.states.columns.length;
    },
    leftFixedLeafCount: function leftFixedLeafCount() {
      return this.store.states.fixedLeafColumnsLength;
    },
    rightFixedLeafCount: function rightFixedLeafCount() {
      return this.store.states.rightFixedLeafColumnsLength;
    },
    leftFixedCount: function leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },
    columns: function columns() {
      return this.store.states.columns;
    }
  },

  data: function data() {
    return {
      tooltipContent: ''
    };
  },
  mounted: function mounted() {
    //重置ui-table-change组件内的edit_val_key
    //author 应进兵
    if (this.$parent.$parent.$options.name == 'table-change') {
      this.$parent.$parent.edit_arr = [];
      this.$parent.$parent.edit_val_key = -1;
    }
  },
  created: function created() {
    var tha = this;

    this.activateTooltip = (0, _debounce2.default)(50, function (tooltip) {
      return tooltip.handleShowPopper();
    });
    this.$on('dblclicks', function ($event, row) {
      tha.handleDoubleClick($event, row);
    });
    this.$on('clicks', function ($event, row) {
      tha.handleClick($event, row);
    });

    this.$on('mousedowns', function ($event, row) {
      tha.handleMousedown($event, row);
    });
    this.$on('contextmenus', function ($event, row) {
      tha.handleContextMenu($event, row);
    });

    this.$on('mouseenters', function ($index) {
      tha.handleMouseEnter($index);
    });
    this.$on('mouseleaves', function () {
      tha.handleMouseLeave();
    });
    /* on-dblclick={ ($event) => this.handleDoubleClick($event, row) }
     on-click={ ($event) => this.handleClick($event, row) }
      on-mousedown={ ($event) => this.handleMousedown($event, row) }
     on-contextmenu={ ($event) => this.handleContextMenu($event, row) }
      on-mouseenter={ _ => this.handleMouseEnter($index) }
     on-mouseleave={ _ => this.handleMouseLeave() }*/
  },


  methods: {
    getKeyOfRow: function getKeyOfRow(row, index) {
      var rowKey = this.table.rowKey;
      if (rowKey) {
        return (0, _util.getRowIdentity)(row, rowKey);
      }
      return index;
    },
    isColumnHidden: function isColumnHidden(index) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return index < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return index < this.leftFixedLeafCount || index >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getSpan: function getSpan(row, column, rowIndex, columnIndex) {
      var rowspan = 1;
      var colspan = 1;

      var fn = this.table.spanMethod;
      if (typeof fn === 'function') {
        var result = fn({
          row: row,
          column: column,
          rowIndex: rowIndex,
          columnIndex: columnIndex
        });

        if (Array.isArray(result)) {
          rowspan = result[0];
          colspan = result[1];
        } else if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object') {
          rowspan = result.rowspan;
          colspan = result.colspan;
        }
      }

      return {
        rowspan: rowspan,
        colspan: colspan
      };
    },
    getRowStyle: function getRowStyle(row, rowIndex) {
      var rowStyle = this.table.rowStyle;
      if (typeof rowStyle === 'function') {
        return rowStyle.call(null, {
          row: row,
          rowIndex: rowIndex
        });
      }
      return rowStyle;
    },
    getRowClass: function getRowClass(row, rowIndex) {
      var classes = ['el-table__row'];

      if (this.stripe && rowIndex % 2 === 1) {
        classes.push('el-table__row--striped');
      }
      var rowClassName = this.table.rowClassName;
      if (typeof rowClassName === 'string') {
        classes.push(rowClassName);
      } else if (typeof rowClassName === 'function') {
        classes.push(rowClassName.call(null, {
          row: row,
          rowIndex: rowIndex
        }));
      }

      if (this.store.states.expandRows.indexOf(row) > -1) {
        classes.push('expanded');
      }

      return classes.join(' ');
    },
    getCellStyle: function getCellStyle(rowIndex, columnIndex, row, column) {
      var cellStyle = this.table.cellStyle;
      if (typeof cellStyle === 'function') {
        return cellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return cellStyle;
    },
    getCellClass: function getCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.align, column.className];

      if (this.isColumnHidden(columnIndex)) {
        classes.push('is-hidden');
      }

      var cellClassName = this.table.cellClassName;
      if (typeof cellClassName === 'string') {
        classes.push(cellClassName);
      } else if (typeof cellClassName === 'function') {
        classes.push(cellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    handleCellMouseEnter: function handleCellMouseEnter(event, row) {
      var table = this.table;
      var cell = (0, _util.getCell)(event);

      if (cell) {
        var column = (0, _util.getColumnByCell)(table, cell);
        var hoverState = table.hoverState = { cell: cell, column: column, row: row };
        table.$emit('cell-mouse-enter', hoverState.row, hoverState.column, hoverState.cell, event);
      }

      // 判断是否text-overflow, 如果是就显示tooltip
      var cellChild = event.target.querySelector('.cell');

      if ((0, _dom.hasClass)(cellChild, 'el-tooltip') && cellChild.scrollWidth > cellChild.offsetWidth && this.$refs.tooltip) {
        var tooltip = this.$refs.tooltip;

        this.tooltipContent = cell.textContent || cell.innerText;
        tooltip.referenceElm = cell;
        tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
        tooltip.doDestroy();
        tooltip.setExpectedState(true);
        this.activateTooltip(tooltip);
      }
    },
    handleCellMouseLeave: function handleCellMouseLeave(event) {
      var tooltip = this.$refs.tooltip;
      if (tooltip) {
        tooltip.setExpectedState(false);
        tooltip.handleClosePopper();
      }
      var cell = (0, _util.getCell)(event);
      if (!cell) return;

      var oldHoverState = this.table.hoverState;
      this.table.$emit('cell-mouse-leave', oldHoverState.row, oldHoverState.column, oldHoverState.cell, event);
    },
    handleMouseEnter: function handleMouseEnter(index) {
      this.store.commit('setHoverRow', index);
    },
    handleMouseLeave: function handleMouseLeave() {
      this.store.commit('setHoverRow', null);
    },
    handleContextMenu: function handleContextMenu(event, row) {
      this.handleEvent(event, row, 'contextmenu');
    },
    handleDoubleClick: function handleDoubleClick(event, row) {
      this.handleEvent(event, row, 'dblclick');
    },
    handleClick: function handleClick(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'click');
    },
    handleMousedown: function handleMousedown(event, row) {
      this.store.commit('setCurrentRow', row);
      this.handleEvent(event, row, 'mousedown');
    },
    handleEvent: function handleEvent(event, row, name) {
      var table = this.table;
      var cell = (0, _util.getCell)(event);
      var column = void 0;
      if (cell) {
        column = (0, _util.getColumnByCell)(table, cell);
        if (column) {
          table.$emit('cell-' + name, row, column, cell, event);
        }
      }
      table.$emit('row-' + name, row, event, column);
    },
    handleExpandClick: function handleExpandClick(row) {
      this.store.toggleRowExpansion(row);
    }
  }
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = __webpack_require__(23);

var _tag2 = _interopRequireDefault(_tag);

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _filterPanel = __webpack_require__(161);

var _filterPanel2 = _interopRequireDefault(_filterPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAllColumns = function getAllColumns(columns) {
  var result = [];
  columns.forEach(function (column) {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};

var convertToRows = function convertToRows(originColumns) {
  var maxLevel = 1;
  var traverse = function traverse(column, parent) {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      var colSpan = 0;
      column.children.forEach(function (subColumn) {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };

  originColumns.forEach(function (column) {
    column.level = 1;
    traverse(column);
  });

  var rows = [];
  for (var i = 0; i < maxLevel; i++) {
    rows.push([]);
  }

  var allColumns = getAllColumns(originColumns);

  allColumns.forEach(function (column) {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
    }
    rows[column.level - 1].push(column);
  });

  return rows;
};

exports.default = {
  name: 'ElTableHeader',

  render: function render(h) {
    var _this = this;

    var originColumns = this.store.states.originColumns;
    var columnRows = convertToRows(originColumns, this.columns);
    // 是否拥有多级表头
    var isGroup = columnRows.length > 1;
    if (isGroup) this.$parent.isGroup = true;

    return h(
      'table',
      {
        'class': 'el-table__header',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h(
        'colgroup',
        null,
        [this._l(this.columns, function (column) {
          return h(
            'col',
            {
              attrs: {
                name: column.id,
                width: column.realWidth || column.width
              }
            },
            []
          );
        }), !this.fixed && this.layout.gutterWidth ? h(
          'col',
          {
            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
          },
          []
        ) : '']
      ), h(
        'thead',
        { 'class': [{ 'is-group': isGroup, 'has-gutter': this.hasGutter }] },
        [this._l(columnRows, function (columns, rowIndex) {
          return h(
            'tr',
            {
              style: _this.getHeaderRowStyle(rowIndex),
              'class': _this.getHeaderRowClass(rowIndex)
            },
            [_this._l(columns, function (column, cellIndex) {
              return h(
                'th',
                {
                  attrs: {
                    colspan: column.colSpan,
                    rowspan: column.rowSpan
                  },
                  on: {
                    'mouseover': function mouseover($event) {
                      return _this.show_width_pipper($event, column);
                    },
                    'mousemove': function mousemove($event) {
                      return _this.handleMouseMove($event, column);
                    },
                    'mouseout': _this.handleMouseOut,
                    'mousedown': function mousedown($event) {
                      return _this.handleMouseDown($event, column);
                    },
                    'click': function click($event) {
                      return _this.handleHeaderClick($event, column);
                    }
                  },

                  style: _this.getHeaderCellStyle(rowIndex, cellIndex, columns, column),
                  'class': _this.getHeaderCellClass(rowIndex, cellIndex, columns, column) },
                [h(
                  'div',
                  { ref: 'dom_span_out', 'class': ['cell', column.filteredValue && column.filteredValue.length > 0 ? 'highlight' : '', column.labelClassName] },
                  [column.renderHeader ? column.renderHeader.call(_this._renderProxy, h, { column: column, $index: cellIndex, store: _this.store, _self: _this.$parent.$vnode.context }) : h(
                    'span',
                    { ref: 'dom_span' },
                    [column.label]
                  ), column.filterable ? h(
                    'span',
                    null,
                    [h(
                      'em',
                      { 'class': 'el-table__column-filter-trigger', on: {
                          'click': function click($event) {
                            return _this.handleFilterClick($event, column);
                          }
                        }
                      },
                      [h(
                        'i',
                        { 'class': ['el-icon-arrow-down', column.filterOpened ? 'el-icon-arrow-up' : ''] },
                        []
                      )]
                    )]
                  ) : '', column.sortable ? h(
                    'span',
                    { 'class': 'caret-wrapper', on: {
                        'click': function click($event) {
                          return _this.handleSortClick($event, column);
                        }
                      }
                    },
                    [h(
                      'i',
                      { 'class': 'sort-caret ascending el-icon-caret-top', on: {
                          'click': function click($event) {
                            return _this.handleSortClick($event, column, 'ascending');
                          }
                        }
                      },
                      []
                    ), h(
                      'i',
                      { 'class': 'sort-caret descending el-icon-caret-bottom', on: {
                          'click': function click($event) {
                            return _this.handleSortClick($event, column, 'descending');
                          }
                        }
                      },
                      []
                    )]
                  ) : '']
                )]
              );
            }), _this.hasGutter ? h(
              'th',
              { 'class': 'gutter', style: { width: _this.layout.scrollY ? _this.layout.gutterWidth + 'px' : '0' } },
              []
            ) : '']
          );
        })]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    layout: {
      required: true
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  components: {
    ElCheckbox: _checkbox2.default,
    ElTag: _tag2.default
  },

  computed: {
    table: function table() {
      return this.$parent;
    },
    isAllSelected: function isAllSelected() {
      return this.store.states.isAllSelected;
    },
    columnsCount: function columnsCount() {
      return this.store.states.columns.length;
    },
    leftFixedCount: function leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },
    leftFixedLeafCount: function leftFixedLeafCount() {
      return this.store.states.fixedLeafColumnsLength;
    },
    rightFixedLeafCount: function rightFixedLeafCount() {
      return this.store.states.rightFixedLeafColumnsLength;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.layout.gutterWidth;
    }
  },

  created: function created() {
    this.filterPanels = {};
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.defaultSort.prop) {
      var states = this.store.states;
      states.sortProp = this.defaultSort.prop;
      states.sortOrder = this.defaultSort.order || 'ascending';
      this.$nextTick(function (_) {
        for (var i = 0, length = _this2.columns.length; i < length; i++) {
          var column = _this2.columns[i];
          if (column.property === states.sortProp) {
            column.order = states.sortOrder;
            states.sortingColumn = column;
            break;
          }
        }

        if (states.sortingColumn) {
          _this2.store.commit('changeSortCondition');
        }
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    var panels = this.filterPanels;
    for (var prop in panels) {
      if (panels.hasOwnProperty(prop) && panels[prop]) {
        panels[prop].$destroy(true);
      }
    }
  },


  methods: {
    show_width_pipper: function show_width_pipper(event, column) {
      if (column.renderHeader) {
        return;
      };
      try {
        var doms = event.currentTarget,
            doms_span = doms.querySelector('span'),
            tooltip = this.$parent.$parent.$refs.tooltip;
        if (tooltip && doms_span) {
          if (doms_span.offsetWidth < doms_span.scrollWidth) {
            this.$parent.$parent.innerText = doms_span.innerText;
            tooltip.referenceElm = doms;
            tooltip.$refs.popper && (tooltip.$refs.popper.style.display = 'none');
            tooltip.doDestroy();
            tooltip.setExpectedState(true);
            tooltip.handleShowPopper();
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    isCellHidden: function isCellHidden(index, columns) {
      var start = 0;
      for (var i = 0; i < index; i++) {
        start += columns[i].colSpan;
      }
      var after = start + columns[index].colSpan - 1;
      if (this.fixed === true || this.fixed === 'left') {
        return after >= this.leftFixedLeafCount;
      } else if (this.fixed === 'right') {
        return start < this.columnsCount - this.rightFixedLeafCount;
      } else {
        return after < this.leftFixedLeafCount || start >= this.columnsCount - this.rightFixedLeafCount;
      }
    },
    getHeaderRowStyle: function getHeaderRowStyle(rowIndex) {
      var headerRowStyle = this.table.headerRowStyle;
      if (typeof headerRowStyle === 'function') {
        return headerRowStyle.call(null, { rowIndex: rowIndex });
      }
      return headerRowStyle;
    },
    getHeaderRowClass: function getHeaderRowClass(rowIndex) {
      var classes = [];

      var headerRowClassName = this.table.headerRowClassName;
      if (typeof headerRowClassName === 'string') {
        classes.push(headerRowClassName);
      } else if (typeof headerRowClassName === 'function') {
        classes.push(headerRowClassName.call(null, { rowIndex: rowIndex }));
      }

      return classes.join(' ');
    },
    getHeaderCellStyle: function getHeaderCellStyle(rowIndex, columnIndex, row, column) {
      var headerCellStyle = this.table.headerCellStyle;
      if (typeof headerCellStyle === 'function') {
        return headerCellStyle.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        });
      }
      return headerCellStyle;
    },
    getHeaderCellClass: function getHeaderCellClass(rowIndex, columnIndex, row, column) {
      var classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

      if (rowIndex === 0 && this.isCellHidden(columnIndex, row)) {
        classes.push('is-hidden');
      }

      if (!column.children) {
        classes.push('is-leaf');
      }

      if (column.sortable) {
        classes.push('is-sortable');
      }

      var headerCellClassName = this.table.headerCellClassName;
      if (typeof headerCellClassName === 'string') {
        classes.push(headerCellClassName);
      } else if (typeof headerCellClassName === 'function') {
        classes.push(headerCellClassName.call(null, {
          rowIndex: rowIndex,
          columnIndex: columnIndex,
          row: row,
          column: column
        }));
      }

      return classes.join(' ');
    },
    toggleAllSelection: function toggleAllSelection() {
      this.store.commit('toggleAllSelection');
    },
    handleFilterClick: function handleFilterClick(event, column) {
      event.stopPropagation();
      var target = event.target;
      var cell = target.parentNode;
      var table = this.$parent;

      var filterPanel = this.filterPanels[column.id];

      if (filterPanel && column.filterOpened) {
        filterPanel.showPopper = false;
        return;
      }

      if (!filterPanel) {
        filterPanel = new _vue2.default(_filterPanel2.default);
        this.filterPanels[column.id] = filterPanel;
        if (column.filterPlacement) {
          filterPanel.placement = column.filterPlacement;
        }
        filterPanel.table = table;
        filterPanel.cell = cell;
        filterPanel.column = column;
        !this.$isServer && filterPanel.$mount(document.createElement('div'));
      }
      setTimeout(function () {
        filterPanel.showPopper = true;
      }, 16);
    },
    handleHeaderClick: function handleHeaderClick(event, column) {
      if (!column.filters && column.sortable) {
        this.handleSortClick(event, column);
      } else if (column.filters && !column.sortable) {
        this.handleFilterClick(event, column);
      }

      this.$parent.$emit('header-click', column, event);
    },
    handleMouseDown: function handleMouseDown(event, column) {
      var _this3 = this;

      if (this.$isServer) return;
      if (column.children && column.children.length > 0) return;
      /* istanbul ignore if */
      if (this.draggingColumn && this.border) {
        this.dragging = true;

        this.$parent.resizeProxyVisible = true;

        var table = this.$parent;
        var tableEl = table.$el;
        var tableLeft = tableEl.getBoundingClientRect().left;
        var columnEl = this.$el.querySelector('th.' + column.id);
        var columnRect = columnEl.getBoundingClientRect();
        var minLeft = columnRect.left - tableLeft + 30;

        (0, _dom.addClass)(columnEl, 'noclick');

        this.dragState = {
          startMouseLeft: event.clientX,
          startLeft: columnRect.right - tableLeft,
          startColumnLeft: columnRect.left - tableLeft,
          tableLeft: tableLeft
        };

        var resizeProxy = table.$refs.resizeProxy;
        resizeProxy.style.left = this.dragState.startLeft + 'px';

        document.onselectstart = function () {
          return false;
        };
        document.ondragstart = function () {
          return false;
        };

        var handleMouseMove = function handleMouseMove(event) {
          var deltaLeft = event.clientX - _this3.dragState.startMouseLeft;
          var proxyLeft = _this3.dragState.startLeft + deltaLeft;

          resizeProxy.style.left = Math.max(minLeft, proxyLeft) + 'px';
        };

        var handleMouseUp = function handleMouseUp() {
          if (_this3.dragging) {
            var _dragState = _this3.dragState,
                startColumnLeft = _dragState.startColumnLeft,
                startLeft = _dragState.startLeft;

            var finalLeft = parseInt(resizeProxy.style.left, 10);
            var columnWidth = finalLeft - startColumnLeft;
            column.width = column.realWidth = columnWidth;
            table.$emit('header-dragend', column.width, startLeft - startColumnLeft, column, event);

            _this3.store.scheduleLayout();

            document.body.style.cursor = '';
            _this3.dragging = false;
            _this3.draggingColumn = null;
            _this3.dragState = {};

            table.resizeProxyVisible = false;
          }

          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.onselectstart = null;
          document.ondragstart = null;

          setTimeout(function () {
            (0, _dom.removeClass)(columnEl, 'noclick');
          }, 0);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
      }
    },
    handleMouseMove: function handleMouseMove(event, column) {
      if (column.children && column.children.length > 0) return;
      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (!column || !column.resizable) return;

      if (!this.dragging && this.border) {
        var rect = target.getBoundingClientRect();

        var bodyStyle = document.body.style;
        if (rect.width > 12 && rect.right - event.pageX < 8) {
          bodyStyle.cursor = 'col-resize';
          if ((0, _dom.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'col-resize';
          }
          this.draggingColumn = column;
        } else if (!this.dragging) {
          bodyStyle.cursor = '';
          if ((0, _dom.hasClass)(target, 'is-sortable')) {
            target.style.cursor = 'pointer';
          }
          this.draggingColumn = null;
        }
      }
    },
    handleMouseOut: function handleMouseOut() {
      try {
        var tooltip = this.$parent.$parent.$refs.tooltip;
        if (tooltip) {
          tooltip.setExpectedState(false);
          tooltip.handleClosePopper();
        }
      } catch (err) {
        console.log(err);
      }
      if (this.$isServer) return;
      document.body.style.cursor = '';
    },
    toggleOrder: function toggleOrder(order) {
      return !order ? 'ascending' : order === 'ascending' ? 'descending' : null;
    },
    handleSortClick: function handleSortClick(event, column, givenOrder) {
      event.stopPropagation();
      var order = givenOrder || this.toggleOrder(column.order);

      var target = event.target;
      while (target && target.tagName !== 'TH') {
        target = target.parentNode;
      }

      if (target && target.tagName === 'TH') {
        if ((0, _dom.hasClass)(target, 'noclick')) {
          (0, _dom.removeClass)(target, 'noclick');
          return;
        }
      }

      if (!column.sortable) return;

      var states = this.store.states;
      var sortProp = states.sortProp;
      var sortOrder = void 0;
      var sortingColumn = states.sortingColumn;

      if (sortingColumn !== column) {
        if (sortingColumn) {
          sortingColumn.order = null;
        }
        states.sortingColumn = column;
        sortProp = column.property;
      }

      if (!order) {
        sortOrder = column.order = null;
        states.sortingColumn = null;
        sortProp = null;
      } else {
        sortOrder = column.order = order;
      }

      states.sortProp = sortProp;
      states.sortOrder = sortOrder;

      this.store.commit('changeSortCondition');
    }
  },

  data: function data() {
    return {
      draggingColumn: null,
      dragging: false,
      dragState: {}
    };
  }
};

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bf61482_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__ = __webpack_require__(164);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_filter_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bf61482_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_filter_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _popup = __webpack_require__(16);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _dropdown = __webpack_require__(163);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _checkboxGroup = __webpack_require__(35);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "ElTableFilterPanel",

  mixins: [_vuePopper2.default, _locale2.default],

  directives: {
    Clickoutside: _clickoutside2.default
  },

  components: {
    ElCheckbox: _checkbox2.default,
    ElCheckboxGroup: _checkboxGroup2.default
  },

  props: {
    placement: {
      type: String,
      default: "bottom-end"
    }
  },

  customRender: function customRender(h) {
    return h(
      "div",
      { "class": "el-table-filter" },
      [h(
        "div",
        { "class": "el-table-filter__content" },
        []
      ), h(
        "div",
        { "class": "el-table-filter__bottom" },
        [h(
          "button",
          {
            on: {
              "click": this.handleConfirm
            }
          },
          [this.t("el.table.confirmFilter")]
        ), h(
          "button",
          {
            on: {
              "click": this.handleReset
            }
          },
          [this.t("el.table.resetFilter")]
        )]
      )]
    );
  },
  data: function data() {
    return {
      table: null,
      cell: null,
      column: null,
      filterData: {
        type: "",
        min: "",
        max: ""
      },
      pickerOptions: {
        shortcuts: [{
          text: "今天",
          onClick: function onClick(picker) {
            var date = new Date();
            var start = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 00:00:00");
            var end = new Date(date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " 23:59:59");
            picker.$emit("pick", [start, end]);
          }
        }, {
          text: "最近一周",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          }
        }, {
          text: "最近一个月",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit("pick", [start, end]);
          }
        }, {
          text: "最近三个月",
          onClick: function onClick(picker) {
            var end = new Date();
            var start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit("pick", [start, end]);
          }
        }]
      }
    };
  },


  methods: {
    isActive: function isActive(filter) {
      return filter.value === this.filterValue;
    },
    handleOutsideClick: function handleOutsideClick() {
      this.showPopper = false;
    },
    handleConfirm: function handleConfirm() {
      this.confirmFilter(this.filteredValue);
      //this.handleOutsideClick();
    },
    handleConfirms: function handleConfirms() {
      this.confirmFilter(this.column.filterData);
      //this.handleOutsideClick();
    },
    handleReset: function handleReset() {
      this.filteredValue = [];
      this.confirmFilter(this.filteredValue);
      this.handleOutsideClick();
    },
    handleSelect: function handleSelect(filterValue) {
      this.filterValue = filterValue;

      if (typeof filterValue !== "undefined" && filterValue !== null) {
        this.confirmFilter(this.filteredValue);
      } else {
        this.confirmFilter([]);
      }

      this.handleOutsideClick();
    },
    confirmFilter: function confirmFilter(filteredValue) {
      this.table.store.commit("filterChange", {
        column: this.column,
        values: filteredValue
      });
    }
  },

  computed: {
    filters: function filters() {
      return this.column && this.column.filters;
    },


    filterValue: {
      get: function get() {
        return (this.column.filteredValue || [])[0];
      },
      set: function set(value) {
        if (this.filteredValue) {
          if (typeof value !== "undefined" && value !== null) {
            this.filteredValue.splice(0, 1, value);
          } else {
            this.filteredValue.splice(0, 1);
          }
        }
      }
    },

    filteredValue: {
      get: function get() {
        if (this.column) {
          return this.column.filteredValue || [];
        }
        return [];
      },
      set: function set(value) {
        if (this.column) {
          this.column.filteredValue = value;
        }
      }
    },
    //单选,多选
    multiple: function multiple() {
      if (this.column) {
        return this.column.filterMultiple;
      }
      return true;
    },
    filterType: function filterType() {
      this.filterData.type = this.column.filterType;
      return this.column.filterType;
    }
  },

  mounted: function mounted() {
    var _this = this;

    this.popperElm = this.$el;
    this.referenceElm = this.cell;
    this.table.bodyWrapper.addEventListener("scroll", function () {
      _this.updatePopper();
    });

    this.$watch("showPopper", function (value) {
      if (_this.column) _this.column.filterOpened = value;
      if (value) {
        _this.filterData = _this.column.filterData;
        _dropdown2.default.open(_this);
        _this.$nextTick(function () {
          _this.$refs.input.$el.getElementsByTagName("input")[0].focus();
        });
        //显示筛选时把输入框获取焦点
        // function focus(el) {
        //   el.getElementsByTagName("input")[0].focus();
        // }
        // function _focus(el) {
        //   return function() {
        //     focus(el);
        //   };
        // }
        // try {
        //   setTimeout(_focus(this.$refs.input.$el), 300);
        // } catch (e) {
        // //this.$refs.input.$el.focus();
        // }
      } else {
        _dropdown2.default.close(_this);
      }
    });
  },

  watch: {
    showPopper: function showPopper(val) {
      if (val === true && parseInt(this.popperJS._popper.style.zIndex, 10) < _popup.PopupManager.zIndex) {
        this.popperJS._popper.style.zIndex = _popup.PopupManager.nextZIndex();
      }
    },
    filteredValue: function filteredValue(val) {
      this.handleConfirm();
    },

    filterData: {
      handler: function handler(val, oldVal) {
        this.column.filterData = val;
        //类型检查
        switch (this.filterType) {
          case "string":
            this.handleConfirms();
            break;
          case "number":
            this.handleConfirms();
            break;
          case "dateTime":
            //debugger;
            this.handleConfirms();
            break;
        }
      },
      deep: true
    }
  }
}; //
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

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dropdowns = [];

!_vue2.default.prototype.$isServer && document.addEventListener('click', function (event) {
  dropdowns.forEach(function (dropdown) {
    var target = event.target;
    if (!dropdown || !dropdown.$el) return;
    if (target === dropdown.$el || dropdown.$el.contains(target)) {
      return;
    }
    dropdown.handleOutsideClick && dropdown.handleOutsideClick(event);
  });
});

exports.default = {
  open: function open(instance) {
    if (instance) {
      dropdowns.push(instance);
    }
  },
  close: function close(instance) {
    var index = dropdowns.indexOf(instance);
    if (index !== -1) {
      dropdowns.splice(instance, 1);
    }
  }
};

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"}},[(_vm.filterType == 'string')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('div',{staticClass:"el-table-filter__content"},[_c('div',{staticClass:"el-table-filter__checkbox-group"},[_c('el-input',{ref:"input",attrs:{"placeholder":"请输入关键字"},model:{value:(_vm.filterData.min),callback:function ($$v) {_vm.$set(_vm.filterData, "min", $$v)},expression:"filterData.min"}})],1)])]):_vm._e(),(_vm.filterType == 'number')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('div',{staticClass:"el-table-filter__content"},[_c('div',{staticClass:"el-table-filter__checkbox-group"},[_c('el-input',{ref:"input",attrs:{"placeholder":"请输入最小值"},model:{value:(_vm.filterData.min),callback:function ($$v) {_vm.$set(_vm.filterData, "min", $$v)},expression:"filterData.min"}}),_c('br'),_c('el-input',{ref:"input",attrs:{"placeholder":"请输入最大值"},model:{value:(_vm.filterData.max),callback:function ($$v) {_vm.$set(_vm.filterData, "max", $$v)},expression:"filterData.max"}})],1)])]):_vm._e(),(_vm.filterType == 'dateTime')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('div',{staticClass:"el-table-filter__content"},[_c('div',{staticClass:"el-table-filter__checkbox-group"},[_c('el-date-picker',{ref:"input",attrs:{"type":"datetimerange","placeholder":"请选择时间范围","picker-options":_vm.pickerOptions},model:{value:(_vm.filterData.min),callback:function ($$v) {_vm.$set(_vm.filterData, "min", $$v)},expression:"filterData.min"}})],1)])]):(_vm.multiple)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('div',{staticClass:"el-table-filter__content"},[_c('el-checkbox-group',{staticClass:"el-table-filter__checkbox-group",model:{value:(_vm.filteredValue),callback:function ($$v) {_vm.filteredValue=$$v},expression:"filteredValue"}},_vm._l((_vm.filters),function(filter){return _c('el-checkbox',{key:filter.value,attrs:{"label":filter.value}},[_vm._v(_vm._s(filter.text))])}))],1)]):_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-table-filter"},[_c('ul',{staticClass:"el-table-filter__list"},[_c('li',{staticClass:"el-table-filter__list-item",class:{ 'is-active': !_vm.filterValue },on:{"click":function($event){_vm.handleSelect(null)}}},[_vm._v(_vm._s(_vm.t('el.table.clearFilter')))]),_vm._l((_vm.filters),function(filter){return _c('li',{key:filter.value,staticClass:"el-table-filter__list-item",class:{ 'is-active': _vm.isActive(filter) },attrs:{"label":filter.value},on:{"click":function($event){_vm.handleSelect(filter.value)}}},[_vm._v(_vm._s(filter.text))])})],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  name: 'ElTableFooter',

  render: function render(h) {
    var _this = this;

    var sums = [];
    this.columns.forEach(function (column, index) {
      if (index === 0) {
        sums[index] = _this.sumText;
        return;
      }
      var values = _this.store.states.data.map(function (item) {
        return Number(item[column.property]);
      });
      var precisions = [];
      var notNumber = true;
      values.forEach(function (value) {
        if (!isNaN(value)) {
          notNumber = false;
          var decimal = ('' + value).split('.')[1];
          precisions.push(decimal ? decimal.length : 0);
        }
      });
      var precision = Math.max.apply(null, precisions);
      if (!notNumber) {
        sums[index] = values.reduce(function (prev, curr) {
          var value = Number(curr);
          if (!isNaN(value)) {
            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
          } else {
            return prev;
          }
        }, 0);
      } else {
        sums[index] = '';
      }
    });

    return h(
      'table',
      {
        'class': 'el-table__footer',
        attrs: { cellspacing: '0',
          cellpadding: '0',
          border: '0' }
      },
      [h(
        'colgroup',
        null,
        [this._l(this.columns, function (column) {
          return h(
            'col',
            {
              attrs: {
                name: column.id,
                width: column.realWidth || column.width
              }
            },
            []
          );
        }), !this.fixed && this.layout.gutterWidth ? h(
          'col',
          {
            attrs: { name: 'gutter', width: this.layout.scrollY ? this.layout.gutterWidth : '' }
          },
          []
        ) : '']
      ), h(
        'tbody',
        { 'class': [{ 'has-gutter': this.hasGutter }] },
        [h(
          'tr',
          null,
          [this._l(this.columns, function (column, cellIndex) {
            return h(
              'td',
              {
                attrs: {
                  colspan: column.colSpan,
                  rowspan: column.rowSpan
                },
                'class': [column.id, column.headerAlign, column.className || '', _this.isCellHidden(cellIndex, _this.columns) ? 'is-hidden' : '', !column.children ? 'is-leaf' : '', column.labelClassName] },
              [h(
                'div',
                { 'class': ['cell', column.labelClassName] },
                [_this.summaryMethod ? _this.summaryMethod({ columns: _this.columns, data: _this.store.states.data })[cellIndex] : sums[cellIndex]]
              )]
            );
          }), this.hasGutter ? h(
            'td',
            { 'class': 'gutter', style: { width: this.layout.scrollY ? this.layout.gutterWidth + 'px' : '0' } },
            []
          ) : '']
        )]
      )]
    );
  },


  props: {
    fixed: String,
    store: {
      required: true
    },
    layout: {
      required: true
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: function _default() {
        return {
          prop: '',
          order: ''
        };
      }
    }
  },

  computed: {
    isAllSelected: function isAllSelected() {
      return this.store.states.isAllSelected;
    },
    columnsCount: function columnsCount() {
      return this.store.states.columns.length;
    },
    leftFixedCount: function leftFixedCount() {
      return this.store.states.fixedColumns.length;
    },
    rightFixedCount: function rightFixedCount() {
      return this.store.states.rightFixedColumns.length;
    },
    columns: function columns() {
      return this.store.states.columns;
    },
    hasGutter: function hasGutter() {
      return !this.fixed && this.layout.gutterWidth;
    }
  },

  methods: {
    isCellHidden: function isCellHidden(index, columns) {
      if (this.fixed === true || this.fixed === 'left') {
        return index >= this.leftFixedCount;
      } else if (this.fixed === 'right') {
        var before = 0;
        for (var i = 0; i < index; i++) {
          before += columns[i].colSpan;
        }
        return before < this.columnsCount - this.rightFixedCount;
      } else {
        return index < this.leftFixedCount || index >= this.columnsCount - this.rightFixedCount;
      }
    }
  }
};

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-table",class:[{
    'el-table--fit': _vm.fit,
    'el-table--striped': _vm.stripe,
    'el-table--border': _vm.border || _vm.isGroup,
    'el-table--hidden': _vm.isHidden,
    'el-table--group': _vm.isGroup,
    'el-table--fluid-height': _vm.maxHeight,
    'el-table--enable-row-hover': !_vm.store.states.isComplex,
    'el-table--enable-row-transition': (_vm.store.states.data || []).length !== 0 && (_vm.store.states.data || []).length < 100
  }, _vm.tableSize ? ("el-table--" + _vm.tableSize) : ''],on:{"mouseleave":function($event){_vm.handleMouseLeave($event)}}},[_c('div',{ref:"hiddenColumns",staticClass:"hidden-columns"},[_vm._t("default")],2),(_vm.showHeader)?_c('div',{ref:"headerWrapper",staticClass:"el-table__header-wrapper"},[_c('table-header',{ref:"tableHeader",style:({ width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : '' }),attrs:{"store":_vm.store,"layout":_vm.layout,"border":_vm.border,"default-sort":_vm.defaultSort}})],1):_vm._e(),_c('div',{ref:"bodyWrapper",staticClass:"el-table__body-wrapper",class:[("is-scroll-" + _vm.scrollPosition)],style:([_vm.bodyHeight])},[_c('table-body',{style:({ width: _vm.bodyWidth }),attrs:{"sync":_vm.sync,"context":_vm.context,"store":_vm.store,"stripe":_vm.stripe,"layout":_vm.layout,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}}),(!_vm.data || _vm.data.length === 0)?_c('div',{staticClass:"el-table__empty-block",style:({ width: _vm.bodyWidth })},[_c('span',{staticClass:"el-table__empty-text"},[_vm._t("empty",[_vm._v(_vm._s(_vm.emptyText || _vm.t('el.table.emptyText')))])],2)]):_vm._e(),(_vm.$slots.append)?_c('div',{ref:"appendWrapper",staticClass:"el-table__append-wrapper"},[_vm._t("append")],2):_vm._e()],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"footerWrapper",staticClass:"el-table__footer-wrapper"},[_c('table-footer',{style:({ width: _vm.layout.bodyWidth ? _vm.layout.bodyWidth + 'px' : '' }),attrs:{"store":_vm.store,"layout":_vm.layout,"border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"default-sort":_vm.defaultSort}})],1):_vm._e(),(_vm.fixedColumns.length > 0)?_c('div',{ref:"fixedWrapper",staticClass:"el-table__fixed",style:([
      { width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : '' },
      _vm.fixedHeight
    ])},[(_vm.showHeader)?_c('div',{ref:"fixedHeaderWrapper",staticClass:"el-table__fixed-header-wrapper"},[_c('table-header',{ref:"fixedTableHeader",style:({ width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : '' }),attrs:{"fixed":"left","border":_vm.border,"store":_vm.store,"layout":_vm.layout}})],1):_vm._e(),_c('div',{ref:"fixedBodyWrapper",staticClass:"el-table__fixed-body-wrapper",style:([
        { top: _vm.layout.headerHeight + 'px' },
        _vm.fixedBodyHeight
      ])},[_c('table-body',{style:({ width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : '' }),attrs:{"myisfixed":true,"sync":_vm.sync,"fixed":"left","store":_vm.store,"stripe":_vm.stripe,"layout":_vm.layout,"highlight":_vm.highlightCurrentRow,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle}}),(_vm.$slots.append)?_c('div',{staticClass:"el-table__append-gutter",style:({ height: _vm.layout.appendHeight + 'px' })}):_vm._e()],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"fixedFooterWrapper",staticClass:"el-table__fixed-footer-wrapper"},[_c('table-footer',{style:({ width: _vm.layout.fixedWidth ? _vm.layout.fixedWidth + 'px' : '' }),attrs:{"fixed":"left","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store,"layout":_vm.layout}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{ref:"rightFixedWrapper",staticClass:"el-table__fixed-right",style:([
      { width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '' },
      { right: _vm.layout.scrollY ? (_vm.border ? _vm.layout.gutterWidth : (_vm.layout.gutterWidth || 0)) + 'px' : '' },
      _vm.fixedHeight
    ])},[(_vm.showHeader)?_c('div',{ref:"rightFixedHeaderWrapper",staticClass:"el-table__fixed-header-wrapper"},[_c('table-header',{ref:"rightFixedTableHeader",style:({ width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '' }),attrs:{"fixed":"right","border":_vm.border,"store":_vm.store,"layout":_vm.layout}})],1):_vm._e(),_c('div',{ref:"rightFixedBodyWrapper",staticClass:"el-table__fixed-body-wrapper",style:([
        { top: _vm.layout.headerHeight + 'px' },
        _vm.fixedBodyHeight
      ])},[_c('table-body',{style:({ width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '' }),attrs:{"sync":_vm.sync,"fixed":"right","store":_vm.store,"stripe":_vm.stripe,"layout":_vm.layout,"row-class-name":_vm.rowClassName,"row-style":_vm.rowStyle,"highlight":_vm.highlightCurrentRow}})],1),(_vm.showSummary)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.data && _vm.data.length > 0),expression:"data && data.length > 0"}],ref:"rightFixedFooterWrapper",staticClass:"el-table__fixed-footer-wrapper"},[_c('table-footer',{style:({ width: _vm.layout.rightFixedWidth ? _vm.layout.rightFixedWidth + 'px' : '' }),attrs:{"fixed":"right","border":_vm.border,"sum-text":_vm.sumText || _vm.t('el.table.sumText'),"summary-method":_vm.summaryMethod,"store":_vm.store,"layout":_vm.layout}})],1):_vm._e()]):_vm._e(),(_vm.rightFixedColumns.length > 0)?_c('div',{staticClass:"el-table__fixed-right-patch",style:({ width: _vm.layout.scrollY ? _vm.layout.gutterWidth + 'px' : '0', height: _vm.layout.headerHeight + 'px' })}):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.resizeProxyVisible),expression:"resizeProxyVisible"}],ref:"resizeProxy",staticClass:"el-table__column-resize-proxy"})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tableColumn = __webpack_require__(168);

var _tableColumn2 = _interopRequireDefault(_tableColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tableColumn2.default.install = function (Vue) {
  Vue.component(_tableColumn2.default.name, _tableColumn2.default);
};

exports.default = _tableColumn2.default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _tag = __webpack_require__(23);

var _tag2 = _interopRequireDefault(_tag);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var columnIdSeed = 1;

var defaults = {
  default: {
    order: ''
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: '',
    className: 'el-table-column--selection'
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ''
  }
};

var forced = {
  selection: {
    renderHeader: function renderHeader(h) {
      return h(
        'el-checkbox',
        {
          nativeOn: {
            'click': this.toggleAllSelection
          },
          attrs: {
            value: this.isAllSelected }
        },
        []
      );
    },
    renderCell: function renderCell(h, _ref) {
      var row = _ref.row,
          column = _ref.column,
          store = _ref.store,
          $index = _ref.$index;

      return h(
        'el-checkbox',
        {
          attrs: {
            value: store.isSelected(row),
            disabled: column.selectable ? !column.selectable.call(null, row, $index) : false
          },
          on: {
            'input': function input() {
              store.commit('rowSelectedChanged', row);
            }
          }
        },
        []
      );
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: function renderHeader(h, _ref2) {
      var column = _ref2.column;

      return column.label || '#';
    },
    renderCell: function renderCell(h, _ref3) {
      var $index = _ref3.$index,
          column = _ref3.column;

      var i = $index + 1;
      var index = column.index;

      if (typeof index === 'number') {
        i = $index + index;
      } else if (typeof index === 'function') {
        i = index($index);
      }

      return h(
        'div',
        null,
        [i]
      );
    },
    sortable: false
  },
  expand: {
    renderHeader: function renderHeader(h, _ref4) {
      var column = _ref4.column;


      return column.label || '';
    },
    renderCell: function renderCell(h, _ref5, proxy) {
      var row = _ref5.row,
          store = _ref5.store;

      var expanded = store.states.expandRows.indexOf(row) > -1;
      return h(
        'div',
        { 'class': 'el-table__expand-icon ' + (expanded ? 'el-table__expand-icon--expanded' : ''),
          on: {
            'click': function click() {
              return proxy.handleExpandClick(row);
            }
          }
        },
        [h(
          'i',
          { 'class': 'el-icon el-icon-arrow-right' },
          []
        )]
      );
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
};

var getDefaultColumn = function getDefaultColumn(type, options) {
  var column = {};

  (0, _merge2.default)(column, defaults[type || 'default']);

  for (var name in options) {
    if (options.hasOwnProperty(name)) {
      var value = options[name];
      if (typeof value !== 'undefined') {
        column[name] = value;
      }
    }
  }

  if (!column.minWidth) {
    if (column.label && column.label.length > 3) {
      column.minWidth = column.label.length * 24;
    }
    if (column.sortable) {
      column.minWidth += 20;
    }
    if (column.filterType) {
      column.minWidth += 20;
    }
  }

  column.realWidth = column.width || column.minWidth;

  return column;
};

var DEFAULT_RENDER_CELL = function DEFAULT_RENDER_CELL(h, _ref6) {
  var row = _ref6.row,
      column = _ref6.column;

  var property = column.property;
  var value = property && (0, _util.getPropByPath)(row, property).v;
  if (column && column.formatter) {
    return column.formatter(row, column, value);
  }
  return value;
};

exports.default = {
  name: 'ElTableColumn',

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    className: String,
    labelClassName: String,
    property: String,
    prop: String,
    width: {},
    minWidth: {},
    //renderHeader: Function,
    sortable: {
      type: [String, Boolean],
      default: false
    },
    sortMethod: Function,
    sortBy: [String, Function, Array],
    resizable: {
      type: Boolean,
      default: true
    },
    context: {},
    columnKey: String,
    align: String,
    headerAlign: String,
    showTooltipWhenOverflow: Boolean,
    showOverflowTooltip: Boolean,
    fixed: [Boolean, String],
    formatter: Function,
    selectable: Function,
    reserveSelection: Boolean,
    filterMethod: Function,
    filteredValue: Array,
    filters: Array,
    filterPlacement: String,
    filterMultiple: {
      type: Boolean,
      default: true
    },
    index: [Number, Function],
    filterType: String,
    edit: Object
  },

  data: function data() {
    return {
      isSubColumn: false,
      columns: []
    };
  },
  beforeCreate: function beforeCreate() {
    this.row = {};
    this.column = {};
    this.$index = 0;
  },


  components: {
    ElCheckbox: _checkbox2.default,
    ElTag: _tag2.default
  },

  computed: {
    owner: function owner() {
      var parent = this.$parent;
      while (parent && !parent.tableId) {
        parent = parent.$parent;
      }
      return parent;
    }
  },

  created: function created() {
    var _this = this;

    var h = this.$createElement;

    this.customRender = this.$options.render;
    this.$options.render = function (h) {
      return h('div', _this.$slots.default);
    };
    this.columnId = (this.$parent.tableId || this.$parent.columnId + '_') + 'column_' + columnIdSeed++;

    var parent = this.$parent;
    var owner = this.owner;
    this.isSubColumn = owner !== parent;

    var type = this.type;

    var width = this.width;
    if (width !== undefined) {
      width = parseInt(width, 10);
      if (isNaN(width)) {
        width = null;
      }
    }

    var minWidth = this.minWidth;
    if (minWidth !== undefined) {
      minWidth = parseInt(minWidth, 10);
      if (isNaN(minWidth)) {
        minWidth = 80;
      }
    }

    var isColumnGroup = false;

    var column = getDefaultColumn(type, {
      id: this.columnId,
      columnKey: this.columnKey,
      label: this.label,
      className: this.className,
      labelClassName: this.labelClassName,
      property: this.prop || this.property,
      type: type,
      renderCell: null,
      renderHeader: this.renderHeader,
      minWidth: minWidth,
      width: width,
      isColumnGroup: isColumnGroup,
      context: this.context,
      align: this.align ? 'is-' + this.align : null,
      headerAlign: this.headerAlign ? 'is-' + this.headerAlign : this.align ? 'is-' + this.align : null,
      sortable: this.sortable === '' ? true : this.sortable,
      sortMethod: this.sortMethod,
      sortBy: this.sortBy,
      resizable: this.resizable,
      showOverflowTooltip: this.showOverflowTooltip || this.showTooltipWhenOverflow,
      formatter: this.formatter,
      selectable: this.selectable,
      reserveSelection: this.reserveSelection,
      fixed: this.fixed === '' ? true : this.fixed,
      filterMethod: this.filterMethod,
      filters: this.filters,
      filterable: this.filters || this.filterMethod || this.filterType,
      filterMultiple: this.filterMultiple,
      filterOpened: false,
      filteredValue: this.filteredValue || [],
      filterPlacement: this.filterPlacement || '',
      index: this.index,
      filterType: this.filterType,
      edit: this.edit
    });

    (0, _merge2.default)(column, forced[type] || {});

    this.columnConfig = column;

    var renderCell = column.renderCell;
    var _self = this;

    if (type === 'expand') {
      owner.renderExpanded = function (h, data) {
        return _self.$scopedSlots.default ? _self.$scopedSlots.default(data) : _self.$slots.default;
      };

      column.renderCell = function (h, data) {
        return h(
          'div',
          { 'class': 'cell' },
          [renderCell(h, data, this._renderProxy)]
        );
      };

      return;
    }

    column.renderCell = function (h, data) {
      if (_self.$scopedSlots.default) {
        renderCell = function renderCell() {
          return _self.$scopedSlots.default(data);
        };
      }

      if (!renderCell) {
        renderCell = DEFAULT_RENDER_CELL;
      }

      return _self.showOverflowTooltip || _self.showTooltipWhenOverflow ? h(
        'div',
        { 'class': 'cell el-tooltip', style: 'width:' + (data.column.realWidth || data.column.width) + 'px' },
        [renderCell(h, data)]
      ) : h(
        'div',
        { 'class': 'cell' },
        [renderCell(h, data)]
      );
    };
  },
  destroyed: function destroyed() {
    if (!this.$parent) return;
    this.owner.store.commit('removeColumn', this.columnConfig);
  },


  watch: {
    label: function label(newVal) {
      if (this.columnConfig) {
        this.columnConfig.label = newVal;
      }
    },
    prop: function prop(newVal) {
      if (this.columnConfig) {
        this.columnConfig.property = newVal;
      }
    },
    property: function property(newVal) {
      if (this.columnConfig) {
        this.columnConfig.property = newVal;
      }
    },
    filters: function filters(newVal) {
      if (this.columnConfig) {
        this.columnConfig.filters = newVal;
      }
    },
    filterMultiple: function filterMultiple(newVal) {
      if (this.columnConfig) {
        this.columnConfig.filterMultiple = newVal;
      }
    },
    align: function align(newVal) {
      if (this.columnConfig) {
        this.columnConfig.align = newVal ? 'is-' + newVal : null;

        if (!this.headerAlign) {
          this.columnConfig.headerAlign = newVal ? 'is-' + newVal : null;
        }
      }
    },
    headerAlign: function headerAlign(newVal) {
      if (this.columnConfig) {
        this.columnConfig.headerAlign = 'is-' + (newVal ? newVal : this.align);
      }
    },
    width: function width(newVal) {
      if (this.columnConfig) {
        this.columnConfig.width = newVal;
        this.owner.store.scheduleLayout();
      }
    },
    minWidth: function minWidth(newVal) {
      if (this.columnConfig) {
        this.columnConfig.minWidth = newVal;
        this.owner.store.scheduleLayout();
      }
    },
    fixed: function fixed(newVal) {
      if (this.columnConfig) {
        this.columnConfig.fixed = newVal;
        this.owner.store.scheduleLayout();
      }
    },
    sortable: function sortable(newVal) {
      if (this.columnConfig) {
        this.columnConfig.sortable = newVal;
      }
    },
    index: function index(newVal) {
      if (this.columnConfig) {
        this.columnConfig.index = newVal;
      }
    }
  },

  mounted: function mounted() {
    var _this2 = this;

    var owner = this.owner;
    var parent = this.$parent;
    var columnIndex = void 0;

    if (!this.isSubColumn) {
      columnIndex = [].indexOf.call(parent.$refs.hiddenColumns.children, this.$el);
    } else {
      columnIndex = [].indexOf.call(parent.$el.children, this.$el);
    }

    if (this.$scopedSlots.hasOwnProperty('header')) {
      this.owner.renderExpanded = this.$scopedSlots.header;
      this.columnConfig.renderHeader = function () {
        return _this2.$scopedSlots.header();
      };
    }

    owner.store.commit('insertColumn', this.columnConfig, columnIndex, this.isSubColumn ? parent.columnConfig : null);
  }
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _datePicker = __webpack_require__(170);

var _datePicker2 = _interopRequireDefault(_datePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_datePicker2.default.install = function install(Vue) {
  Vue.component(_datePicker2.default.name, _datePicker2.default);
};

exports.default = _datePicker2.default;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _picker = __webpack_require__(26);

var _picker2 = _interopRequireDefault(_picker);

var _date = __webpack_require__(174);

var _date2 = _interopRequireDefault(_date);

var _dateRange = __webpack_require__(189);

var _dateRange2 = _interopRequireDefault(_dateRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getPanel = function getPanel(type) {
  if (type === 'daterange' || type === 'datetimerange') {
    return _dateRange2.default;
  }
  return _date2.default;
};

exports.default = {
  mixins: [_picker2.default],

  name: 'ElDatePicker',

  props: {
    type: {
      type: String,
      default: 'date'
    },
    timeArrowControl: Boolean
  },

  watch: {
    type: function type(_type) {
      if (this.picker) {
        this.unmountPicker();
        this.panel = getPanel(_type);
        this.mountPicker();
      } else {
        this.panel = getPanel(_type);
      }
    }
  },

  created: function created() {
    this.panel = getPanel(this.type);
  }
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _util = __webpack_require__(9);

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _focus = __webpack_require__(17);

var _focus2 = _interopRequireDefault(_focus);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var NewPopper = {
  props: {
    appendToBody: _vuePopper2.default.props.appendToBody,
    offset: _vuePopper2.default.props.offset,
    boundariesPadding: _vuePopper2.default.props.boundariesPadding
  },
  methods: _vuePopper2.default.methods,
  data: function data() {
    return (0, _merge2.default)({ visibleArrow: true }, _vuePopper2.default.data);
  },

  beforeDestroy: _vuePopper2.default.beforeDestroy
};

var DEFAULT_FORMATS = {
  date: 'yyyy-MM-dd',
  month: 'yyyy-MM',
  datetime: 'yyyy-MM-dd HH:mm:ss',
  time: 'HH:mm:ss',
  week: 'yyyywWW',
  timerange: 'HH:mm:ss',
  daterange: 'yyyy-MM-dd',
  datetimerange: 'yyyy-MM-dd HH:mm:ss',
  year: 'yyyy'
};
var HAVE_TRIGGER_TYPES = ['date', 'datetime', 'time', 'time-select', 'week', 'month', 'year', 'daterange', 'timerange', 'datetimerange'];
var DATE_FORMATTER = function DATE_FORMATTER(value, format) {
  return (0, _util.formatDate)(value, format);
};
var DATE_PARSER = function DATE_PARSER(text, format) {
  return (0, _util.parseDate)(text, format);
};
var RANGE_FORMATTER = function RANGE_FORMATTER(value, format) {
  if (Array.isArray(value) && value.length === 2) {
    var start = value[0];
    var end = value[1];

    if (start && end) {
      return [(0, _util.formatDate)(start, format), (0, _util.formatDate)(end, format)];
    }
  }
  return '';
};
var RANGE_PARSER = function RANGE_PARSER(array, format, separator) {
  if (!Array.isArray(array)) {
    array = array.split(separator);
  }
  if (array.length === 2) {
    var range1 = array[0];
    var range2 = array[1];

    return [(0, _util.parseDate)(range1, format), (0, _util.parseDate)(range2, format)];
  }
  return [];
};
var TYPE_VALUE_RESOLVER_MAP = {
  default: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      if (text === undefined || text === '') return null;
      return text;
    }
  },
  week: {
    formatter: function formatter(value, format) {
      var week = (0, _util.getWeekNumber)(value);
      var month = value.getMonth();
      var trueDate = new Date(value);
      if (week === 1 && month === 11) {
        trueDate.setHours(0, 0, 0, 0);
        trueDate.setDate(trueDate.getDate() + 3 - (trueDate.getDay() + 6) % 7);
      }
      var date = (0, _util.formatDate)(trueDate, format);

      date = /WW/.test(date) ? date.replace(/WW/, week < 10 ? '0' + week : week) : date.replace(/W/, week);
      return date;
    },
    parser: function parser(text) {
      var array = (text || '').split('w');
      if (array.length === 2) {
        var year = Number(array[0]);
        var month = Number(array[1]);

        if (!isNaN(year) && !isNaN(month) && month < 54) {
          return text;
        }
      }
      return null;
    }
  },
  date: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  datetime: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  daterange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  datetimerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  timerange: {
    formatter: RANGE_FORMATTER,
    parser: RANGE_PARSER
  },
  time: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  month: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  year: {
    formatter: DATE_FORMATTER,
    parser: DATE_PARSER
  },
  number: {
    formatter: function formatter(value) {
      if (!value) return '';
      return '' + value;
    },
    parser: function parser(text) {
      var result = Number(text);

      if (!isNaN(text)) {
        return result;
      } else {
        return null;
      }
    }
  }
};
var PLACEMENT_MAP = {
  left: 'bottom-start',
  center: 'bottom',
  right: 'bottom-end'
};

var parseAsFormatAndType = function parseAsFormatAndType(value, customFormat, type) {
  var rangeSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '-';

  if (!value) return null;
  var parser = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).parser;
  var format = customFormat || DEFAULT_FORMATS[type];
  return parser(value, format, rangeSeparator);
};

var formatAsFormatAndType = function formatAsFormatAndType(value, customFormat, type) {
  if (!value) return null;
  var formatter = (TYPE_VALUE_RESOLVER_MAP[type] || TYPE_VALUE_RESOLVER_MAP['default']).formatter;
  var format = customFormat || DEFAULT_FORMATS[type];
  return formatter(value, format);
};

// only considers date-picker's value: Date or [Date, Date]
var valueEquals = function valueEquals(a, b) {
  var aIsArray = a instanceof Array;
  var bIsArray = b instanceof Array;
  if (aIsArray && bIsArray) {
    return new Date(a[0]).getTime() === new Date(b[0]).getTime() && new Date(a[1]).getTime() === new Date(b[1]).getTime();
  }
  if (!aIsArray && !bIsArray) {
    return new Date(a).getTime() === new Date(b).getTime();
  }
  return false;
};

var isString = function isString(val) {
  return typeof val === 'string' || val instanceof String;
};

var validator = function validator(val) {
  // either: String, Array of String, null / undefined
  return val === null || val === undefined || isString(val) || Array.isArray(val) && val.length === 2 && val.every(isString);
};

exports.default = {
  mixins: [_emitter2.default, NewPopper, (0, _focus2.default)('reference')],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  props: {
    size: String,
    format: String,
    valueFormat: String,
    readonly: Boolean,
    placeholder: String,
    startPlaceholder: String,
    endPlaceholder: String,
    name: {
      default: '',
      validator: validator
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: true
    },
    id: {
      default: '',
      validator: validator
    },
    popperClass: String,
    editable: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    },
    value: {},
    defaultValue: {},
    rangeSeparator: {
      default: '-'
    },
    pickerOptions: {},
    unlinkPanels: Boolean
  },

  components: { ElInput: _input2.default },

  directives: { Clickoutside: _clickoutside2.default },

  data: function data() {
    return {
      date_table_click_value: '',
      pickerVisible: false,
      showClose: false,
      userInput: null,
      valueOnOpen: null, // value when picker opens, used to determine whether to emit change
      unwatchPickerOptions: null
    };
  },


  watch: {
    pickerVisible: function pickerVisible(val) {
      if (this.readonly || this.disabled) return;
      if (val) {
        this.showPicker();
        this.valueOnOpen = this.value;
      } else {
        this.hidePicker();
        //  this.emitChange(this.value);
        // flush user input if it is parsable
        // this.displayValue here is not a typo, it merges text for both panels in range mode
        var parsedValue = this.parseString(this.displayValue);
        if (this.userInput && parsedValue && this.isValidValue(parsedValue)) {
          this.userInput = null;
        }
        this.dispatch('ElFormItem', 'el.form.blur');
        this.blur();
      }
    },

    parsedValue: {
      immediate: true,
      handler: function handler(val) {
        if (this.picker) {
          this.picker.value = val;
        }
      }
    },
    defaultValue: function defaultValue(val) {
      // NOTE: should eventually move to jsx style picker + panel ?
      if (this.picker) {
        this.picker.defaultValue = val;
      }
    }
  },

  computed: {
    ranged: function ranged() {
      return this.type.indexOf('range') > -1;
    },
    reference: function reference() {
      var reference = this.$refs.reference;
      return reference.$el || reference;
    },
    refInput: function refInput() {
      if (this.reference) {
        return [].slice.call(this.reference.querySelectorAll('input'));
      }
      return [];
    },
    valueIsEmpty: function valueIsEmpty() {
      var val = this.value;
      if (Array.isArray(val)) {
        for (var i = 0, len = val.length; i < len; i++) {
          if (val[i]) {
            return false;
          }
        }
      } else {
        if (val) {
          return false;
        }
      }
      return true;
    },
    triggerClass: function triggerClass() {
      return this.type.indexOf('time') !== -1 ? 'el-icon-time' : 'el-icon-date';
    },
    selectionMode: function selectionMode() {
      if (this.type === 'week') {
        return 'week';
      } else if (this.type === 'month') {
        return 'month';
      } else if (this.type === 'year') {
        return 'year';
      }

      return 'day';
    },
    haveTrigger: function haveTrigger() {
      if (typeof this.showTrigger !== 'undefined') {
        return this.showTrigger;
      }
      return HAVE_TRIGGER_TYPES.indexOf(this.type) !== -1;
    },
    displayValue: function displayValue() {
      var formattedValue = formatAsFormatAndType(this.parsedValue, this.format, this.type, this.rangeSeparator);
      if (Array.isArray(this.userInput)) {
        return [this.userInput[0] || formattedValue && formattedValue[0] || '', this.userInput[1] || formattedValue && formattedValue[1] || ''];
      } else {
        return this.userInput !== null ? this.userInput : formattedValue || '';
      }
    },
    parsedValue: function parsedValue() {
      var isParsed = (0, _util.isDateObject)(this.value) || Array.isArray(this.value) && this.value.every(_util.isDateObject);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(this.value, this.valueFormat, this.type, this.rangeSeparator) || this.value;
      } else {
        return this.value;
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    pickerSize: function pickerSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  created: function created() {
    // vue-popper
    this.popperOptions = {
      boundariesPadding: 0,
      gpuAcceleration: false
    };
    this.placement = PLACEMENT_MAP[this.align] || PLACEMENT_MAP.left;
  },


  methods: {
    blur: function blur() {
      this.refInput.forEach(function (input) {
        return input.blur();
      });
    },


    // {parse, formatTo} Value deals maps component value with internal Date
    parseValue: function parseValue(value) {
      var isParsed = (0, _util.isDateObject)(value) || Array.isArray(value) && value.every(_util.isDateObject);
      if (this.valueFormat && !isParsed) {
        return parseAsFormatAndType(value, this.valueFormat, this.type, this.rangeSeparator) || value;
      } else {
        return value;
      }
    },
    formatToValue: function formatToValue(date) {
      var isFormattable = (0, _util.isDateObject)(date) || Array.isArray(date) && date.every(_util.isDateObject);
      if (this.valueFormat && isFormattable) {
        return formatAsFormatAndType(date, this.valueFormat, this.type, this.rangeSeparator);
      } else {
        return date;
      }
    },


    // {parse, formatTo} String deals with user input
    parseString: function parseString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return parseAsFormatAndType(value, this.format, type);
    },
    formatToString: function formatToString(value) {
      var type = Array.isArray(value) ? this.type : this.type.replace('range', '');
      return formatAsFormatAndType(value, this.format, type);
    },
    handleMouseEnter: function handleMouseEnter() {
      if (this.readonly || this.disabled) return;
      if (!this.valueIsEmpty && this.clearable) {
        this.showClose = true;
      }
    },
    handleChange: function handleChange() {
      if (this.userInput) {
        var value = this.parseString(this.displayValue);
        if (value) {
          this.picker.value = value;
          if (this.isValidValue(value)) {
            this.emitInput(value);
            this.userInput = null;
          }
        }
      }
      try {
        var _value = this.parseString(this.displayValue);
        this.emitChange(_value);
      } catch (err) {
        console.log('date-picker报错');
      }
    },
    handleStartInput: function handleStartInput(event) {
      if (this.userInput) {
        this.userInput = [event.target.value, this.userInput[1]];
      } else {
        this.userInput = [event.target.value, null];
      }
    },
    handleEndInput: function handleEndInput(event) {
      if (this.userInput) {
        this.userInput = [this.userInput[0], event.target.value];
      } else {
        this.userInput = [null, event.target.value];
      }
    },
    handleStartChange: function handleStartChange(event) {
      var value = this.parseString(this.userInput && this.userInput[0]);
      if (value) {
        this.userInput = [this.formatToString(value), this.displayValue[1]];
        var newValue = [value, this.picker.value && this.picker.value[1]];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleEndChange: function handleEndChange(event) {
      var value = this.parseString(this.userInput && this.userInput[1]);
      if (value) {
        this.userInput = [this.displayValue[0], this.formatToString(value)];
        var newValue = [this.picker.value && this.picker.value[0], value];
        this.picker.value = newValue;
        if (this.isValidValue(newValue)) {
          this.emitInput(newValue);
          this.userInput = null;
        }
      }
    },
    handleClickIcon: function handleClickIcon(event) {
      if (this.readonly || this.disabled) return;
      if (this.showClose) {
        event.stopPropagation();
        this.emitInput(null);
        // this.emitChange(null);
        this.showClose = false;
        if (this.picker && typeof this.picker.handleClear === 'function') {
          this.picker.handleClear();
        }
      } else {
        this.pickerVisible = !this.pickerVisible;
      }
    },
    handleClose: function handleClose() {
      this.pickerVisible = false;
      if (this.ranged) {
        this.$emit('blur', this);
      }
    },
    handleFocus: function handleFocus() {
      var type = this.type;

      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    handleBlur: function handleBlur() {
      this.$emit('blur', this);
    },
    handleKeydown: function handleKeydown(event) {
      var _this = this;

      var keyCode = event.keyCode;

      // ESC
      if (keyCode === 27) {
        this.pickerVisible = false;
        event.stopPropagation();
        return;
      }

      // Tab
      if (keyCode === 9) {
        if (!this.ranged) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
          event.stopPropagation();
        } else {
          // user may change focus between two input
          setTimeout(function () {
            if (_this.refInput.indexOf(document.activeElement) === -1) {
              _this.pickerVisible = false;
              _this.blur();
              event.stopPropagation();
            }
          }, 0);
        }
        return;
      }

      // Enter
      if (keyCode === 13 && this.displayValue) {
        var value = this.parseString(this.displayValue);
        if (this.isValidValue(value)) {
          this.handleChange();
          this.pickerVisible = this.picker.visible = false;
          this.blur();
        }
        event.stopPropagation();
        return;
      }

      // if user is typing, do not let picker handle key input
      if (this.userInput) {
        event.stopPropagation();
        return;
      }

      // delegate other keys to panel
      if (this.picker && this.picker.handleKeydown) {
        this.picker.handleKeydown(event);
      }
    },
    handleRangeClick: function handleRangeClick() {
      var type = this.type;
      if (HAVE_TRIGGER_TYPES.indexOf(type) !== -1 && !this.pickerVisible) {
        this.pickerVisible = true;
      }
      this.$emit('focus', this);
    },
    hidePicker: function hidePicker() {
      if (this.picker) {
        this.picker.resetView && this.picker.resetView();
        this.pickerVisible = this.picker.visible = false;
        this.destroyPopper();
      }
    },
    showPicker: function showPicker() {
      var _this2 = this;

      if (this.$isServer) return;
      if (!this.picker) {
        this.mountPicker();
      }
      this.pickerVisible = this.picker.visible = true;

      this.updatePopper();

      this.picker.value = this.parsedValue;
      this.picker.resetView && this.picker.resetView();

      this.$nextTick(function () {
        _this2.picker.adjustSpinners && _this2.picker.adjustSpinners();
      });
    },
    mountPicker: function mountPicker() {
      var _this3 = this;

      var tha = this;
      this.picker = new _vue2.default(this.panel).$mount();
      this.picker.defaultValue = this.defaultValue;
      this.picker.popperClass = this.popperClass;
      this.popperElm = this.picker.$el;
      this.picker.width = this.reference.getBoundingClientRect().width;
      this.picker.showTime = this.type === 'datetime' || this.type === 'datetimerange';
      this.picker.selectionMode = this.selectionMode;
      this.picker.unlinkPanels = this.unlinkPanels;
      this.picker.arrowControl = this.arrowControl || this.timeArrowControl || false;
      if (this.format) {
        this.picker.format = this.format;
      }

      var updateOptions = function updateOptions() {
        var options = _this3.pickerOptions;

        if (options && options.selectableRange) {
          var ranges = options.selectableRange;
          var parser = TYPE_VALUE_RESOLVER_MAP.datetimerange.parser;
          var format = DEFAULT_FORMATS.timerange;

          ranges = Array.isArray(ranges) ? ranges : [ranges];
          _this3.picker.selectableRange = ranges.map(function (range) {
            return parser(range, format, _this3.rangeSeparator);
          });
        }

        for (var option in options) {
          if (options.hasOwnProperty(option) &&
          // 忽略 time-picker 的该配置项
          option !== 'selectableRange') {
            _this3.picker[option] = options[option];
          }
        }
      };
      updateOptions();
      this.unwatchPickerOptions = this.$watch('pickerOptions', function () {
        return updateOptions();
      }, { deep: true });

      this.$el.appendChild(this.picker.$el);
      this.picker.resetView && this.picker.resetView();

      this.picker.$on('dodestroy', this.doDestroy);
      this.picker.$on('pick', function () {
        var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var visible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        _this3.userInput = null;
        _this3.pickerVisible = _this3.picker.visible = visible;
        _this3.emitInput(date);
        _this3.picker.resetView && _this3.picker.resetView();
        tha.date_table_click_value = date;
        tha.emitChange(tha.date_table_click_value);
      });
      this.picker.$on('date_table_click', function () {
        tha.emitChangeClick(tha.date_table_click_value);
      });
      this.picker.$on('visible_close', function () {
        tha.$emit('visibleClose');
      });

      this.picker.$on('select-range', function (start, end, pos) {
        if (_this3.refInput.length === 0) return;
        if (!pos || pos === 'min') {
          _this3.refInput[0].setSelectionRange(start, end);
          _this3.refInput[0].focus();
        } else if (pos === 'max') {
          _this3.refInput[1].setSelectionRange(start, end);
          _this3.refInput[1].focus();
        }
      });
    },
    unmountPicker: function unmountPicker() {
      if (this.picker) {
        this.picker.$destroy();
        this.picker.$off();
        if (typeof this.unwatchPickerOptions === 'function') {
          this.unwatchPickerOptions();
        }
        this.picker.$el.parentNode.removeChild(this.picker.$el);
      }
    },
    emitChangeClick: function emitChangeClick(val) {
      this.$emit('changeClick', val);
      this.dispatch('ElFormItem', 'el.form.change', val);
      this.valueOnOpen = val;
    },
    emitChange: function emitChange(val) {
      this.$emit('change', val);
      this.dispatch('ElFormItem', 'el.form.change', val);
      this.valueOnOpen = val;
    },
    emitInput: function emitInput(val) {
      var formatted = this.formatToValue(val);
      if (!valueEquals(this.value, formatted)) {
        this.$emit('input', formatted);
      }
    },
    isValidValue: function isValidValue(value) {
      if (!this.picker) {
        this.mountPicker();
      }
      if (this.picker.isValidValue) {
        return value && this.picker.isValidValue(value);
      } else {
        return true;
      }
    }
  }
};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/date");

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.ranged)?_c('el-input',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"el-date-editor",class:'el-date-editor--' + _vm.type,attrs:{"readonly":!_vm.editable || _vm.readonly,"disabled":_vm.disabled,"size":_vm.pickerSize,"id":_vm.id,"name":_vm.name,"placeholder":_vm.placeholder,"value":_vm.displayValue,"validateEvent":false,"prefix-icon":_vm.triggerClass},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":function (value) { return _vm.userInput = value; }},nativeOn:{"keydown":function($event){_vm.handleKeydown($event)},"mouseenter":function($event){_vm.handleMouseEnter($event)},"mouseleave":function($event){_vm.showClose = false},"change":function($event){_vm.handleChange($event)}}},[(_vm.haveTrigger)?_c('i',{staticClass:"el-input__icon",class:{ 'el-icon-circle-close': _vm.showClose },attrs:{"slot":"suffix"},on:{"click":_vm.handleClickIcon},slot:"suffix"}):_vm._e()]):_c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClose),expression:"handleClose"}],ref:"reference",staticClass:"el-date-editor el-range-editor el-input__inner",class:[
    'el-date-editor--' + _vm.type,
    _vm.pickerSize ? ("el-range-editor--" + _vm.pickerSize) : '',
    _vm.disabled ? 'is-disabled' : '',
    _vm.pickerVisible ? 'is-active' : ''
  ],on:{"click":_vm.handleRangeClick,"mouseenter":_vm.handleMouseEnter,"mouseleave":function($event){_vm.showClose = false},"keydown":_vm.handleKeydown}},[_c('i',{class:['el-input__icon', 'el-range__icon', _vm.triggerClass]}),_c('input',{staticClass:"el-range-input",attrs:{"placeholder":_vm.startPlaceholder,"disabled":_vm.disabled,"id":_vm.id && _vm.id[0],"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[0]},domProps:{"value":_vm.displayValue && _vm.displayValue[0]},on:{"input":_vm.handleStartInput,"change":_vm.handleStartChange,"focus":_vm.handleFocus}}),_c('span',{staticClass:"el-range-separator"},[_vm._v(_vm._s(_vm.rangeSeparator))]),_c('input',{staticClass:"el-range-input",attrs:{"placeholder":_vm.endPlaceholder,"disabled":_vm.disabled,"id":_vm.id && _vm.id[1],"readonly":!_vm.editable || _vm.readonly,"name":_vm.name && _vm.name[1]},domProps:{"value":_vm.displayValue && _vm.displayValue[1]},on:{"input":_vm.handleEndInput,"change":_vm.handleEndChange,"focus":_vm.handleFocus}}),(_vm.haveTrigger)?_c('i',{staticClass:"el-input__icon el-range__close-icon",class:{ 'el-icon-circle-close': _vm.showClose },on:{"click":_vm.handleClickIcon}}):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04800f9d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__ = __webpack_require__(188);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_04800f9d_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

var _time = __webpack_require__(27);

var _time2 = _interopRequireDefault(_time);

var _yearTable = __webpack_require__(180);

var _yearTable2 = _interopRequireDefault(_yearTable);

var _monthTable = __webpack_require__(183);

var _monthTable2 = _interopRequireDefault(_monthTable);

var _dateTable = __webpack_require__(37);

var _dateTable2 = _interopRequireDefault(_dateTable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  mixins: [_locale2.default],

  watch: {
    showTime: function showTime(val) {
      var _this = this;

      /* istanbul ignore if */
      if (!val) return;
      this.$nextTick(function (_) {
        var inputElm = _this.$refs.input.$el;
        if (inputElm) {
          _this.pickerWidth = inputElm.getBoundingClientRect().width + 10;
        }
      });
    },
    value: function value(val) {
      if ((0, _util.isDate)(val)) {
        this.date = new Date(val);
      } else {
        this.date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }
    },
    defaultValue: function defaultValue(val) {
      if (!(0, _util.isDate)(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    },
    timePickerVisible: function timePickerVisible(val) {
      var _this2 = this;

      if (val) this.$nextTick(function () {
        return _this2.$refs.timepicker.adjustSpinners();
      });
    },
    selectionMode: function selectionMode(newVal) {
      if (newVal === 'month') {
        /* istanbul ignore next */
        if (this.currentView !== 'year' || this.currentView !== 'month') {
          this.currentView = 'month';
        }
      }
    },
    visible: function visible(val) {
      if (!val) {
        this.$emit('visible_close');
      }
    }
  },

  methods: {
    proxyTimePickerDataProperties: function proxyTimePickerDataProperties() {
      var _this3 = this;

      var format = function format(timeFormat) {
        _this3.$refs.timepicker.format = timeFormat;
      };
      var value = function value(_value) {
        _this3.$refs.timepicker.value = _value;
      };
      var date = function date(_date) {
        _this3.$refs.timepicker.date = _date;
      };

      this.$watch('format', format);
      this.$watch('value', value);
      this.$watch('date', date);

      format(this.timeFormat);
      value(this.value);
      date(this.date);
    },
    handleClear: function handleClear() {
      this.date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      this.$emit('pick', null);
    },
    emit: function emit(value) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!value) {
        this.$emit.apply(this, ['pick', value].concat(args));
        return;
      }
      if (this.showTime) {
        this.$emit.apply(this, ['pick', (0, _util.clearMilliseconds)(value)].concat(args));
      } else {
        this.$emit.apply(this, ['pick', (0, _util.clearTime)(value)].concat(args));
      }
    },


    // resetDate() {
    //   this.date = new Date(this.date);
    // },

    showMonthPicker: function showMonthPicker() {
      this.currentView = 'month';
    },
    showYearPicker: function showYearPicker() {
      this.currentView = 'year';
    },


    // XXX: 没用到
    // handleLabelClick() {
    //   if (this.currentView === 'date') {
    //     this.showMonthPicker();
    //   } else if (this.currentView === 'month') {
    //     this.showYearPicker();
    //   }
    // },

    prevMonth: function prevMonth() {
      this.date = (0, _util.prevMonth)(this.date);
    },
    nextMonth: function nextMonth() {
      this.date = (0, _util.nextMonth)(this.date);
    },
    prevYear: function prevYear() {
      if (this.currentView === 'year') {
        this.date = (0, _util.prevYear)(this.date, 10);
      } else {
        this.date = (0, _util.prevYear)(this.date);
      }
    },
    nextYear: function nextYear() {
      if (this.currentView === 'year') {
        this.date = (0, _util.nextYear)(this.date, 10);
      } else {
        this.date = (0, _util.nextYear)(this.date);
      }
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleTimePick: function handleTimePick(value, visible, first) {
      if ((0, _util.isDate)(value)) {
        var newDate = (0, _util.modifyTime)(this.date, value.getHours(), value.getMinutes(), value.getSeconds());
        this.date = newDate;
        this.emit(this.date, true);
      } else {
        this.emit(value, true);
      }
      if (!first) {
        this.timePickerVisible = visible;
      }
    },
    handleMonthPick: function handleMonthPick(month) {
      if (this.selectionMode === 'month') {
        this.date = (0, _util.modifyDate)(this.date, this.year, month, 1);
        this.emit(this.date);
      } else {
        this.date = (0, _util.modifyDate)(this.date, this.year, month, this.monthDate);
        // TODO: should emit intermediate value ??
        // this.emit(this.date);
        this.currentView = 'date';
      }
    },
    handleDatePick: function handleDatePick(value) {
      if (this.selectionMode === 'day') {
        this.date = (0, _util.modifyDate)(this.date, value.getFullYear(), value.getMonth(), value.getDate());
        this.emit(this.date, this.showTime);
      } else if (this.selectionMode === 'week') {
        this.emit(value.date);
      }
    },
    handleDate_date_table_click: function handleDate_date_table_click() {
      this.$emit('date_table_click');
    },
    handleYearPick: function handleYearPick(year) {
      if (this.selectionMode === 'year') {
        this.date = (0, _util.modifyDate)(this.date, year, 0, 1);
        this.emit(this.date);
      } else {
        this.date = (0, _util.modifyDate)(this.date, year, this.month, this.monthDate);
        // TODO: should emit intermediate value ??
        // this.emit(this.date, true);
        this.currentView = 'month';
      }
    },
    changeToNow: function changeToNow() {
      this.date = new Date();
      this.emit(this.date);
      this.$emit('date_table_click');
    },
    confirm: function confirm() {
      this.emit(this.date);
      this.$emit('date_table_click');
    },
    resetView: function resetView() {
      if (this.selectionMode === 'month') {
        this.currentView = 'month';
      } else if (this.selectionMode === 'year') {
        this.currentView = 'year';
      } else {
        this.currentView = 'date';
      }
    },
    handleEnter: function handleEnter() {
      document.body.addEventListener('keydown', this.handleKeydown);
    },
    handleLeave: function handleLeave() {
      this.$emit('dodestroy');
      document.body.removeEventListener('keydown', this.handleKeydown);
    },
    handleKeydown: function handleKeydown(e) {
      var keyCode = e.keyCode;
      var list = [38, 40, 37, 39];
      if (this.visible && !this.timePickerVisible) {
        if (list.indexOf(keyCode) !== -1) {
          this.handleKeyControl(keyCode);
          event.stopPropagation();
          event.preventDefault();
        }
        if (keyCode === 13) {
          // Enter
          this.$emit('pick', this.date, false);
        }
      }
    },
    handleKeyControl: function handleKeyControl(keyCode) {
      var mapping = {
        'year': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setFullYear(date.getFullYear() + step);
          }
        },
        'month': {
          38: -4, 40: 4, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setMonth(date.getMonth() + step);
          }
        },
        'week': {
          38: -1, 40: 1, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step * 7);
          }
        },
        'day': {
          38: -7, 40: 7, 37: -1, 39: 1, offset: function offset(date, step) {
            return date.setDate(date.getDate() + step);
          }
        }
      };
      var mode = this.selectionMode;
      var year = 3.1536e10;
      var now = this.date.getTime();
      var newDate = new Date(this.date.getTime());
      while (Math.abs(now - newDate.getTime()) <= year) {
        var map = mapping[mode];
        map.offset(newDate, map[keyCode]);
        if (typeof this.disabledDate === 'function' && this.disabledDate(newDate)) {
          continue;
        }
        this.date = newDate;
        this.$emit('pick', newDate, true);
        break;
      }
    },
    handleVisibleTimeChange: function handleVisibleTimeChange(event) {
      var time = (0, _util.parseDate)(event.target.value, this.timeFormat);
      if (time) {
        this.date = (0, _util.modifyDate)(time, this.year, this.month, this.monthDate);
        this.$refs.timepicker.value = this.date;
        this.timePickerVisible = false;
        this.$emit('pick', this.date, true);
      }
    },
    handleVisibleDateChange: function handleVisibleDateChange(event) {
      var date = (0, _util.parseDate)(event.target.value, this.dateFormat);
      if (date) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(date)) {
          return;
        }
        this.date = (0, _util.modifyTime)(date, this.date.getHours(), this.date.getMinutes(), this.date.getSeconds());
        this.resetView();
        this.$emit('pick', this.date, true);
      }
    },
    isValidValue: function isValidValue(value) {
      return value && !isNaN(value) && (typeof this.disabledDate === 'function' ? !this.disabledDate(value) : true);
    }
  },

  components: {
    TimePicker: _time2.default, YearTable: _yearTable2.default, MonthTable: _monthTable2.default, DateTable: _dateTable2.default, ElInput: _input2.default, ElButton: _button2.default
  },

  data: function data() {
    return {
      popperClass: '',
      date: new Date(),
      value: '',
      defaultValue: null,
      showTime: false,
      selectionMode: 'day',
      shortcuts: '',
      visible: false,
      currentView: 'date',
      disabledDate: '',
      firstDayOfWeek: 7,
      showWeekNumber: false,
      timePickerVisible: false,
      format: '',
      arrowControl: false
    };
  },


  computed: {
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    week: function week() {
      return (0, _util.getWeekNumber)(this.date);
    },
    monthDate: function monthDate() {
      return this.date.getDate();
    },
    footerVisible: function footerVisible() {
      return this.showTime;
    },
    visibleTime: function visibleTime() {
      var date = this.value || this.defaultValue;
      return date ? (0, _util.formatDate)(date, this.timeFormat) : '';
    },
    visibleDate: function visibleDate() {
      var date = this.value || this.defaultValue;
      return date ? (0, _util.formatDate)(date, this.dateFormat) : '';
    },
    yearLabel: function yearLabel() {
      var yearTranslation = this.t('el.datepicker.year');
      if (this.currentView === 'year') {
        var startYear = Math.floor(this.year / 10) * 10;
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation;
        }
        return startYear + ' - ' + (startYear + 9);
      }
      return this.year + ' ' + yearTranslation;
    },
    timeFormat: function timeFormat() {
      if (this.format && this.format.indexOf('ss') === -1) {
        return 'HH:mm';
      } else {
        return 'HH:mm:ss';
      }
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return this.format.replace('HH', '').replace(/[^a-zA-Z]*mm/, '').replace(/[^a-zA-Z]*ss/, '').trim();
      } else {
        return 'yyyy-MM-dd';
      }
    }
  }
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _timeSpinner = __webpack_require__(36);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_locale2.default],

  components: {
    TimeSpinner: _timeSpinner2.default
  },

  props: {
    visible: Boolean,
    timeArrowControl: Boolean
  },

  watch: {
    visible: function visible(val) {
      var _this = this;

      if (val) {

        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.spinner.emitSelectRange('hours');
        });
      } else {
        this.$emit('visible_close');
        this.needInitAdjust = true;
      }
    },
    value: function value(newVal) {
      var _this2 = this;

      var date = void 0;
      if (newVal instanceof Date) {
        date = (0, _util.limitTimeRange)(newVal, this.selectableRange, this.format);
      } else if (!newVal) {
        date = this.defaultValue ? new Date(this.defaultValue) : new Date();
      }

      this.date = date;
      if (this.visible && this.needInitAdjust) {
        this.$nextTick(function (_) {
          return _this2.adjustSpinners();
        });
        this.needInitAdjust = false;
      }
    },
    selectableRange: function selectableRange(val) {
      this.$refs.spinner.selectableRange = val;
    },
    defaultValue: function defaultValue(val) {
      if (!(0, _util.isDate)(this.value)) {
        this.date = val ? new Date(val) : new Date();
      }
    }
  },

  data: function data() {
    return {
      popperClass: '',
      format: 'HH:mm:ss',
      value: '',
      defaultValue: null,
      date: new Date(),
      oldValue: new Date(),
      selectableRange: [],
      selectionRange: [0, 2],
      disabled: false,
      arrowControl: false,
      needInitAdjust: true
    };
  },


  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    useArrow: function useArrow() {
      return this.arrowControl || this.timeArrowControl || false;
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  methods: {
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue, false);
    },
    handleChange: function handleChange(date) {
      // this.visible avoids edge cases, when use scrolls during panel closing animation
      if (this.visible) {
        this.date = (0, _util.clearMilliseconds)(date);
        // if date is out of range, do not emit
        if (this.isValidValue(this.date)) {
          this.$emit('pick', this.date, true);
        }
      }
    },
    setSelectionRange: function setSelectionRange(start, end) {
      this.$emit('select-range', start, end);
      this.selectionRange = [start, end];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var first = arguments[1];

      if (first) return;
      var date = (0, _util.clearMilliseconds)((0, _util.limitTimeRange)(this.date, this.selectableRange, this.format));
      this.$emit('date_table_click');
      this.$emit('pick', date, visible, first);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.$refs.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    },
    isValidValue: function isValidValue(date) {
      return (0, _util.timeWithinRange)(date, this.selectableRange, this.format);
    },
    adjustSpinners: function adjustSpinners() {
      return this.$refs.spinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = [0, 3].concat(this.showSeconds ? [6] : []);
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      this.$refs.spinner.emitSelectRange(mapping[next]);
    }
  },

  mounted: function mounted() {
    var _this3 = this;

    this.$nextTick(function () {
      return _this3.handleConfirm(true, true);
    });
    this.$emit('mounted');
  }
}; //
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

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _scrollbar = __webpack_require__(19);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _repeatClick = __webpack_require__(31);

var _repeatClick2 = _interopRequireDefault(_repeatClick);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: { ElScrollbar: _scrollbar2.default },

  directives: {
    repeatClick: _repeatClick2.default
  },

  props: {
    date: {},
    defaultValue: {}, // reserved for future use
    showSeconds: {
      type: Boolean,
      default: true
    },
    arrowControl: Boolean,
    amPmMode: {
      type: String,
      default: '' // 'a': am/pm; 'A': AM/PM
    }
  },

  computed: {
    hours: function hours() {
      return this.date.getHours();
    },
    minutes: function minutes() {
      return this.date.getMinutes();
    },
    seconds: function seconds() {
      return this.date.getSeconds();
    },
    hoursList: function hoursList() {
      return (0, _util.getRangeHours)(this.selectableRange);
    },
    arrowHourList: function arrowHourList() {
      var hours = this.hours;
      return [hours > 0 ? hours - 1 : undefined, hours, hours < 23 ? hours + 1 : undefined];
    },
    arrowMinuteList: function arrowMinuteList() {
      var minutes = this.minutes;
      return [minutes > 0 ? minutes - 1 : undefined, minutes, minutes < 59 ? minutes + 1 : undefined];
    },
    arrowSecondList: function arrowSecondList() {
      var seconds = this.seconds;
      return [seconds > 0 ? seconds - 1 : undefined, seconds, seconds < 59 ? seconds + 1 : undefined];
    }
  },

  data: function data() {
    return {
      selectableRange: [],
      currentScrollbar: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      !_this.arrowControl && _this.bindScrollEvent();
    });
  },


  methods: {
    increase: function increase() {
      this.scrollDown(1);
    },
    decrease: function decrease() {
      this.scrollDown(-1);
    },
    modifyDateField: function modifyDateField(type, value) {
      switch (type) {
        case 'hours':
          this.$emit('change', (0, _util.modifyTime)(this.date, value, this.minutes, this.seconds));break;
        case 'minutes':
          this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, value, this.seconds));break;
        case 'seconds':
          this.$emit('change', (0, _util.modifyTime)(this.date, this.hours, this.minutes, value));break;
      }
    },
    handleClick: function handleClick(type, _ref) {
      var value = _ref.value,
          disabled = _ref.disabled;

      if (!disabled) {
        this.modifyDateField(type, value);
        this.emitSelectRange(type);
        this.adjustSpinner(type, value);
      }
    },
    emitSelectRange: function emitSelectRange(type) {
      if (type === 'hours') {
        this.$emit('select-range', 0, 2);
      } else if (type === 'minutes') {
        this.$emit('select-range', 3, 5);
      } else if (type === 'seconds') {
        this.$emit('select-range', 6, 8);
      }
      this.currentScrollbar = type;
    },
    bindScrollEvent: function bindScrollEvent() {
      var _this2 = this;

      var bindFuntion = function bindFuntion(type) {
        _this2.$refs[type].wrap.onscroll = function (e) {
          // TODO: scroll is emitted when set scrollTop programatically
          // should find better solutions in the future!
          _this2.handleScroll(type, e);
        };
      };
      bindFuntion('hours');
      bindFuntion('minutes');
      bindFuntion('seconds');
    },
    handleScroll: function handleScroll(type) {
      var value = Math.min(Math.floor((this.$refs[type].wrap.scrollTop - 80) / 32 + 3), type === 'hours' ? 23 : 59);
      this.modifyDateField(type, value);
    },


    // NOTE: used by datetime / date-range panel
    //       renamed from adjustScrollTop
    //       should try to refactory it
    adjustSpinners: function adjustSpinners() {
      this.adjustSpinner('hours', this.hours);
      this.adjustSpinner('minutes', this.minutes);
      this.adjustSpinner('seconds', this.seconds);
    },
    adjustCurrentSpinner: function adjustCurrentSpinner(type) {
      this.adjustSpinner(type, this[type]);
    },
    adjustSpinner: function adjustSpinner(type, value) {
      if (this.arrowControl) return;
      var el = this.$refs[type].wrap;
      if (el) {
        el.scrollTop = Math.max(0, (value - 2.5) * 32 + 80);
      }
    },
    scrollDown: function scrollDown(step) {
      if (!this.currentScrollbar) {
        this.emitSelectRange('hours');
      }

      var label = this.currentScrollbar;
      var hoursList = this.hoursList;
      var now = this[label];

      if (this.currentScrollbar === 'hours') {
        var total = Math.abs(step);
        step = step > 0 ? 1 : -1;
        var length = hoursList.length;
        while (length-- && total) {
          now = (now + step + hoursList.length) % hoursList.length;
          if (hoursList[now]) {
            continue;
          }
          total--;
        }
        if (hoursList[now]) return;
      } else {
        now = (now + step + 60) % 60;
      }

      this.modifyDateField(label, now);
      this.adjustSpinner(label, now);
    },
    amPm: function amPm(hour) {
      var shouldShowAmPm = this.amPmMode.toLowerCase() === 'a';
      if (!shouldShowAmPm) return '';
      var isCapital = this.amPmMode === 'A';
      var content = hour < 12 ? ' am' : ' pm';
      if (isCapital) content = content.toUpperCase();
      return content;
    }
  }
}; //
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

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-time-spinner",class:{ 'has-seconds': _vm.showSeconds }},[(!_vm.arrowControl)?[_c('el-scrollbar',{ref:"hours",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('hours')},"mousemove":function($event){_vm.adjustCurrentSpinner('hours')}}},_vm._l((_vm.hoursList),function(disabled,hour){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': disabled },on:{"click":function($event){_vm.handleClick('hours', { value: hour, disabled: disabled })}}},[_vm._v(_vm._s(('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2))+_vm._s(_vm.amPm(hour)))])})),_c('el-scrollbar',{ref:"minutes",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('minutes')},"mousemove":function($event){_vm.adjustCurrentSpinner('minutes')}}},_vm._l((60),function(minute,key){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': key === _vm.minutes },on:{"click":function($event){_vm.handleClick('minutes', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])})),_c('el-scrollbar',{directives:[{name:"show",rawName:"v-show",value:(_vm.showSeconds),expression:"showSeconds"}],ref:"seconds",staticClass:"el-time-spinner__wrapper",attrs:{"wrap-style":"max-height: inherit;","view-class":"el-time-spinner__list","noresize":"","tag":"ul"},nativeOn:{"mouseenter":function($event){_vm.emitSelectRange('seconds')},"mousemove":function($event){_vm.adjustCurrentSpinner('seconds')}}},_vm._l((60),function(second,key){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': key === _vm.seconds },on:{"click":function($event){_vm.handleClick('seconds', { value: key, disabled: false })}}},[_vm._v(_vm._s(('0' + key).slice(-2)))])}))]:_vm._e(),(_vm.arrowControl)?[_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('hours')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"hours",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowHourList),function(hour){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': hour === _vm.hours, 'disabled': _vm.hoursList[hour] }},[_vm._v(_vm._s(hour === undefined ? '' : ('0' + (_vm.amPmMode ? (hour % 12 || 12) : hour )).slice(-2) + _vm.amPm(hour)))])}))]),_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('minutes')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"minutes",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowMinuteList),function(minute){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': minute === _vm.minutes }},[_vm._v("\n          "+_vm._s(minute === undefined ? '' : ('0' + minute).slice(-2))+"\n        ")])}))]),(_vm.showSeconds)?_c('div',{staticClass:"el-time-spinner__wrapper is-arrow",on:{"mouseenter":function($event){_vm.emitSelectRange('seconds')}}},[_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.decrease),expression:"decrease"}],staticClass:"el-time-spinner__arrow el-icon-arrow-up"}),_c('i',{directives:[{name:"repeat-click",rawName:"v-repeat-click",value:(_vm.increase),expression:"increase"}],staticClass:"el-time-spinner__arrow el-icon-arrow-down"}),_c('ul',{ref:"seconds",staticClass:"el-time-spinner__list"},_vm._l((_vm.arrowSecondList),function(second){return _c('li',{staticClass:"el-time-spinner__item",class:{ 'active': second === _vm.seconds }},[_vm._v("\n          "+_vm._s(second === undefined ? '' : ('0' + second).slice(-2))+"\n        ")])}))]):_vm._e()]:_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-time-panel el-popper",class:_vm.popperClass},[_c('div',{staticClass:"el-time-panel__content",class:{ 'has-seconds': _vm.showSeconds }},[_c('time-spinner',{ref:"spinner",attrs:{"arrow-control":_vm.useArrow,"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"date":_vm.date},on:{"change":_vm.handleChange,"select-range":_vm.setSelectionRange}})],1),_c('div',{staticClass:"el-time-panel__footer"},[_c('button',{staticClass:"el-time-panel__btn cancel",attrs:{"type":"button"},on:{"click":_vm.handleCancel}},[_vm._v(_vm._s(_vm.t('el.datepicker.cancel')))]),_c('button',{staticClass:"el-time-panel__btn",class:{confirm: !_vm.disabled},attrs:{"type":"button"},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.confirm')))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_81343b3c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__ = __webpack_require__(182);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_year_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_81343b3c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_year_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

var _util = __webpack_require__(9);

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

var datesInYear = function datesInYear(year) {
  var numOfDays = (0, _util.getDayCountOfYear)(year);
  var firstDay = new Date(year, 0, 1);
  return (0, _util.range)(numOfDays).map(function (n) {
    return (0, _util.nextDate)(firstDay, n);
  });
};

exports.default = {
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && (0, _util.isDate)(val);
      }
    },
    date: {}
  },

  computed: {
    startYear: function startYear() {
      return Math.floor(this.date.getFullYear() / 10) * 10;
    }
  },

  methods: {
    getCellStyle: function getCellStyle(year) {
      var style = {};
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? datesInYear(year).every(this.disabledDate) : false;
      style.current = this.value.getFullYear() === year;
      style.today = today.getFullYear() === year;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year;

      return style;
    },
    handleYearTableClick: function handleYearTableClick(event) {
      var target = event.target;
      if (target.tagName === 'A') {
        if ((0, _dom.hasClass)(target.parentNode, 'disabled')) return;
        var year = target.textContent || target.innerText;
        this.$emit('pick', Number(year));
      }
    }
  }
};

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-year-table",on:{"click":_vm.handleYearTableClick}},[_c('tbody',[_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 0)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 1)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 1))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 2)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 2))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 3)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 3))])])]),_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 4)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 4))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 5)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 5))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 6)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 6))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 7)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 7))])])]),_c('tr',[_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 8)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 8))])]),_c('td',{staticClass:"available",class:_vm.getCellStyle(_vm.startYear + 9)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.startYear + 9))])]),_c('td'),_c('td')])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63c0b5be_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__ = __webpack_require__(185);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_month_table_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63c0b5be_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_month_table_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _util = __webpack_require__(9);

var _dom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var datesInMonth = function datesInMonth(year, month) {
  var numOfDays = (0, _util.getDayCountOfMonth)(year, month);
  var firstDay = new Date(year, month, 1);
  return (0, _util.range)(numOfDays).map(function (n) {
    return (0, _util.nextDate)(firstDay, n);
  });
}; //
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

exports.default = {
  props: {
    disabledDate: {},
    value: {},
    defaultValue: {
      validator: function validator(val) {
        // null or valid Date Object
        return val === null || val instanceof Date && (0, _util.isDate)(val);
      }
    },
    date: {}
  },
  mixins: [_locale2.default],
  methods: {
    getCellStyle: function getCellStyle(month) {
      var style = {};
      var year = this.date.getFullYear();
      var today = new Date();

      style.disabled = typeof this.disabledDate === 'function' ? datesInMonth(year, month).every(this.disabledDate) : false;
      style.current = this.value.getFullYear() === year && this.value.getMonth() === month;
      style.today = today.getFullYear() === year && today.getMonth() === month;
      style.default = this.defaultValue && this.defaultValue.getFullYear() === year && this.defaultValue.getMonth() === month;

      return style;
    },
    handleMonthTableClick: function handleMonthTableClick(event) {
      var target = event.target;
      if (target.tagName !== 'A') return;
      if ((0, _dom.hasClass)(target.parentNode, 'disabled')) return;
      var column = target.parentNode.cellIndex;
      var row = target.parentNode.parentNode.rowIndex;
      var month = row * 4 + column;

      this.$emit('pick', month);
    }
  }
};

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-month-table",on:{"click":_vm.handleMonthTableClick}},[_c('tbody',[_c('tr',[_c('td',{class:_vm.getCellStyle(0)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jan')))])]),_c('td',{class:_vm.getCellStyle(1)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.feb')))])]),_c('td',{class:_vm.getCellStyle(2)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.mar')))])]),_c('td',{class:_vm.getCellStyle(3)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.apr')))])])]),_c('tr',[_c('td',{class:_vm.getCellStyle(4)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.may')))])]),_c('td',{class:_vm.getCellStyle(5)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jun')))])]),_c('td',{class:_vm.getCellStyle(6)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.jul')))])]),_c('td',{class:_vm.getCellStyle(7)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.aug')))])])]),_c('tr',[_c('td',{class:_vm.getCellStyle(8)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.sep')))])]),_c('td',{class:_vm.getCellStyle(9)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.oct')))])]),_c('td',{class:_vm.getCellStyle(10)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.nov')))])]),_c('td',{class:_vm.getCellStyle(11)},[_c('a',{staticClass:"cell"},[_vm._v(_vm._s(_vm.t('el.datepicker.months.dec')))])])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _dom = __webpack_require__(3);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _WEEKS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']; //
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

var clearHours = function clearHours(time) {
  var cloneDate = new Date(time);
  cloneDate.setHours(0, 0, 0, 0);
  return cloneDate.getTime();
};

exports.default = {
  mixins: [_locale2.default],

  props: {
    firstDayOfWeek: {
      default: 7,
      type: Number,
      validator: function validator(val) {
        return val >= 1 && val <= 7;
      }
    },

    value: {},

    defaultValue: {
      validator: function validator(val) {
        // either: null, valid Date object, Array of valid Date objects
        return val === null || (0, _util.isDate)(val) || Array.isArray(val) && val.every(_util.isDate);
      }
    },

    date: {},

    selectionMode: {
      default: 'day'
    },

    showWeekNumber: {
      type: Boolean,
      default: false
    },

    disabledDate: {},

    minDate: {},

    maxDate: {},

    rangeState: {
      default: function _default() {
        return {
          endDate: null,
          selecting: false,
          row: null,
          column: null
        };
      }
    }
  },

  computed: {
    offsetDay: function offsetDay() {
      var week = this.firstDayOfWeek;
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week;
    },
    WEEKS: function WEEKS() {
      var week = this.firstDayOfWeek;
      return _WEEKS.concat(_WEEKS).slice(week, week + 7);
    },
    year: function year() {
      return this.date.getFullYear();
    },
    month: function month() {
      return this.date.getMonth();
    },
    startDate: function startDate() {
      return (0, _util.getStartDateOfMonth)(this.year, this.month);
    },
    rows: function rows() {
      // TODO: refactory rows / getCellClasses
      var date = new Date(this.year, this.month, 1);
      var day = (0, _util.getFirstDayOfMonth)(date); // day of first day
      var dateCountOfMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth());
      var dateCountOfLastMonth = (0, _util.getDayCountOfMonth)(date.getFullYear(), date.getMonth() === 0 ? 11 : date.getMonth() - 1);

      day = day === 0 ? 7 : day;

      var offset = this.offsetDay;
      var rows = this.tableRows;
      var count = 1;
      var firstDayPosition = void 0;

      var startDate = this.startDate;
      var disabledDate = this.disabledDate;
      var now = clearHours(new Date());

      for (var i = 0; i < 6; i++) {
        var row = rows[i];

        if (this.showWeekNumber) {
          if (!row[0]) {
            row[0] = { type: 'week', text: (0, _util.getWeekNumber)((0, _util.nextDate)(startDate, i * 7 + 1)) };
          }
        }

        for (var j = 0; j < 7; j++) {
          var cell = row[this.showWeekNumber ? j + 1 : j];
          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false };
          }

          cell.type = 'normal';

          var index = i * 7 + j;
          var time = (0, _util.nextDate)(startDate, index - offset).getTime();
          cell.inRange = time >= clearHours(this.minDate) && time <= clearHours(this.maxDate);
          cell.start = this.minDate && time === clearHours(this.minDate);
          cell.end = this.maxDate && time === clearHours(this.maxDate);
          var isToday = time === now;

          if (isToday) {
            cell.type = 'today';
          }

          if (i >= 0 && i <= 1) {
            if (j + i * 7 >= day + offset) {
              cell.text = count++;
              if (count === 2) {
                firstDayPosition = i * 7 + j;
              }
            } else {
              cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7;
              cell.type = 'prev-month';
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++;
              if (count === 2) {
                firstDayPosition = i * 7 + j;
              }
            } else {
              cell.text = count++ - dateCountOfMonth;
              cell.type = 'next-month';
            }
          }

          cell.disabled = typeof disabledDate === 'function' && disabledDate(new Date(time));

          this.$set(row, this.showWeekNumber ? j + 1 : j, cell);
        }

        if (this.selectionMode === 'week') {
          var start = this.showWeekNumber ? 1 : 0;
          var end = this.showWeekNumber ? 7 : 6;
          var isWeekActive = this.isWeekActive(row[start + 1]);

          row[start].inRange = isWeekActive;
          row[start].start = isWeekActive;
          row[end].inRange = isWeekActive;
          row[end].end = isWeekActive;
        }
      }

      rows.firstDayPosition = firstDayPosition;

      return rows;
    }
  },

  watch: {
    'rangeState.endDate': function rangeStateEndDate(newVal) {
      this.markRange(newVal);
    },
    minDate: function minDate(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.rangeState.selecting = true;
        this.markRange(newVal);
      } else if (!newVal) {
        this.rangeState.selecting = false;
        this.markRange(newVal);
      } else {
        this.markRange();
      }
    },
    maxDate: function maxDate(newVal, oldVal) {
      if (newVal && !oldVal) {
        this.rangeState.selecting = false;
        this.markRange(newVal);
        this.$emit('pick', {
          minDate: this.minDate,
          maxDate: this.maxDate
        });
      }
    }
  },

  data: function data() {
    return {
      tableRows: [[], [], [], [], [], []]
    };
  },


  methods: {
    cellMatchesDate: function cellMatchesDate(cell, date) {
      var value = new Date(date);
      return this.year === value.getFullYear() && this.month === value.getMonth() && Number(cell.text) === value.getDate();
    },
    getCellClasses: function getCellClasses(cell) {
      var _this = this;

      var selectionMode = this.selectionMode;
      var defaultValue = this.defaultValue ? Array.isArray(this.defaultValue) ? this.defaultValue : [this.defaultValue] : [];

      var classes = [];
      if ((cell.type === 'normal' || cell.type === 'today') && !cell.disabled) {
        classes.push('available');
        if (cell.type === 'today') {
          classes.push('today');
        }
      } else {
        classes.push(cell.type);
      }

      if (cell.type === 'normal' && defaultValue.some(function (date) {
        return _this.cellMatchesDate(cell, date);
      })) {
        classes.push('default');
      }

      if (selectionMode === 'day' && (cell.type === 'normal' || cell.type === 'today') && this.cellMatchesDate(cell, this.value)) {
        classes.push('current');
      }

      if (cell.inRange && (cell.type === 'normal' || cell.type === 'today' || this.selectionMode === 'week')) {
        classes.push('in-range');

        if (cell.start) {
          classes.push('start-date');
        }

        if (cell.end) {
          classes.push('end-date');
        }
      }

      if (cell.disabled) {
        classes.push('disabled');
      }

      return classes.join(' ');
    },
    getDateOfCell: function getDateOfCell(row, column) {
      var offsetFromStart = row * 7 + (column - (this.showWeekNumber ? 1 : 0)) - this.offsetDay;
      return (0, _util.nextDate)(this.startDate, offsetFromStart);
    },
    isWeekActive: function isWeekActive(cell) {
      if (this.selectionMode !== 'week') return false;
      var newDate = new Date(this.year, this.month, 1);
      var year = newDate.getFullYear();
      var month = newDate.getMonth();

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1);
        newDate.setFullYear(month === 0 ? year - 1 : year);
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1);
        newDate.setFullYear(month === 11 ? year + 1 : year);
      }

      newDate.setDate(parseInt(cell.text, 10));

      return (0, _util.getWeekNumber)(newDate) === (0, _util.getWeekNumber)(this.date);
    },
    markRange: function markRange(maxDate) {
      var startDate = this.startDate;
      if (!maxDate) {
        maxDate = this.maxDate;
      }

      var rows = this.rows;
      var minDate = this.minDate;
      for (var i = 0, k = rows.length; i < k; i++) {
        var row = rows[i];
        for (var j = 0, l = row.length; j < l; j++) {
          if (this.showWeekNumber && j === 0) continue;

          var cell = row[j];
          var index = i * 7 + j + (this.showWeekNumber ? -1 : 0);
          var time = (0, _util.nextDate)(startDate, index - this.offsetDay).getTime();

          cell.inRange = minDate && time >= clearHours(minDate) && time <= clearHours(maxDate);
          cell.start = minDate && time === clearHours(minDate.getTime());
          cell.end = maxDate && time === clearHours(maxDate.getTime());
        }
      }
    },
    handleMouseMove: function handleMouseMove(event) {
      if (!this.rangeState.selecting) return;

      this.$emit('changerange', {
        minDate: this.minDate,
        maxDate: this.maxDate,
        rangeState: this.rangeState
      });

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }
      if (target.tagName !== 'TD') return;

      var column = target.cellIndex;
      var row = target.parentNode.rowIndex - 1;
      var _rangeState = this.rangeState,
          oldRow = _rangeState.row,
          oldColumn = _rangeState.column;


      if (oldRow !== row || oldColumn !== column) {
        this.rangeState.row = row;
        this.rangeState.column = column;

        this.rangeState.endDate = this.getDateOfCell(row, column);
      }
    },
    handleClick: function handleClick(event) {
      var _this2 = this;

      var target = event.target;
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'DIV') {
        target = target.parentNode;
      }

      if (target.tagName !== 'TD') return;
      if ((0, _dom.hasClass)(target, 'disabled') || (0, _dom.hasClass)(target, 'week')) return;

      var selectionMode = this.selectionMode;

      if (selectionMode === 'week') {
        target = target.parentNode.cells[1];
      }

      var year = Number(this.year);
      var month = Number(this.month);

      var cellIndex = target.cellIndex;
      var rowIndex = target.parentNode.rowIndex;

      var cell = this.rows[rowIndex - 1][cellIndex];
      var text = cell.text;
      var className = target.className;

      var newDate = new Date(year, month, 1);

      if (className.indexOf('prev') !== -1) {
        if (month === 0) {
          year = year - 1;
          month = 11;
        } else {
          month = month - 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      } else if (className.indexOf('next') !== -1) {
        if (month === 11) {
          year = year + 1;
          month = 0;
        } else {
          month = month + 1;
        }
        newDate.setFullYear(year);
        newDate.setMonth(month);
      }

      newDate.setDate(parseInt(text, 10));

      if (this.selectionMode === 'range') {
        if (this.minDate && this.maxDate) {
          var minDate = new Date(newDate.getTime());
          var maxDate = null;

          this.$emit('pick', { minDate: minDate, maxDate: maxDate }, false);
          this.rangeState.selecting = true;
          this.markRange(this.minDate);
          this.$nextTick(function () {
            _this2.handleMouseMove(event);
          });
        } else if (this.minDate && !this.maxDate) {
          if (newDate >= this.minDate) {
            var _maxDate = new Date(newDate.getTime());
            this.rangeState.selecting = false;

            this.$emit('pick', {
              minDate: this.minDate,
              maxDate: _maxDate
            });
          } else {
            var _minDate = new Date(newDate.getTime());

            this.$emit('pick', { minDate: _minDate, maxDate: this.maxDate }, false);
          }
        } else if (!this.minDate) {
          var _minDate2 = new Date(newDate.getTime());

          this.$emit('pick', { minDate: _minDate2, maxDate: this.maxDate }, false);
          this.rangeState.selecting = true;
          this.markRange(this.minDate);
        }
      } else if (selectionMode === 'day') {
        this.$emit('pick', newDate);
      } else if (selectionMode === 'week') {
        var weekNumber = (0, _util.getWeekNumber)(newDate);

        var value = newDate.getFullYear() + 'w' + weekNumber;
        this.$emit('pick', {
          year: newDate.getFullYear(),
          week: weekNumber,
          value: value,
          date: newDate
        });
      }
      this.$emit('date_table_click');
    }
  }
};

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"el-date-table",class:{ 'is-week-mode': _vm.selectionMode === 'week' },attrs:{"cellspacing":"0","cellpadding":"0"},on:{"click":_vm.handleClick,"mousemove":_vm.handleMouseMove}},[_c('tbody',[_c('tr',[(_vm.showWeekNumber)?_c('th',[_vm._v(_vm._s(_vm.t('el.datepicker.week')))]):_vm._e(),_vm._l((_vm.WEEKS),function(week){return _c('th',[_vm._v(_vm._s(_vm.t('el.datepicker.weeks.' + week)))])})],2),_vm._l((_vm.rows),function(row){return _c('tr',{staticClass:"el-date-table__row",class:{ current: _vm.isWeekActive(row[1]) }},_vm._l((row),function(cell){return _c('td',{class:_vm.getCellClasses(cell)},[_c('div',[_c('span',[_vm._v("\n          "+_vm._s(cell.text)+"\n        ")])])])}))})],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-enter":_vm.handleEnter,"after-leave":_vm.handleLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-picker-panel el-date-picker el-popper",class:[{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass]},[_c('div',{staticClass:"el-picker-panel__body-wrapper"},[_vm._t("sidebar"),(_vm.shortcuts)?_c('div',{staticClass:"el-picker-panel__sidebar"},_vm._l((_vm.shortcuts),function(shortcut){return _c('button',{staticClass:"el-picker-panel__shortcut",attrs:{"type":"button"},on:{"click":function($event){_vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text))])})):_vm._e(),_c('div',{staticClass:"el-picker-panel__body"},[(_vm.showTime)?_c('div',{staticClass:"el-date-picker__time-header"},[_c('span',{staticClass:"el-date-picker__editor-wrap"},[_c('el-input',{attrs:{"placeholder":_vm.t('el.datepicker.selectDate'),"value":_vm.visibleDate,"size":"small"},nativeOn:{"change":function($event){_vm.handleVisibleDateChange($event)}}})],1),_c('span',{staticClass:"el-date-picker__editor-wrap"},[_c('el-input',{ref:"input",attrs:{"placeholder":_vm.t('el.datepicker.selectTime'),"value":_vm.visibleTime,"size":"small"},on:{"focus":function($event){_vm.timePickerVisible = !_vm.timePickerVisible}},nativeOn:{"change":function($event){_vm.handleVisibleTimeChange($event)}}}),_c('time-picker',{ref:"timepicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.timePickerVisible},on:{"pick":_vm.handleTimePick,"mounted":_vm.proxyTimePickerDataProperties}})],1)]):_vm._e(),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView !== 'time'),expression:"currentView !== 'time'"}],staticClass:"el-date-picker__header",class:{ 'el-date-picker__header--bordered': _vm.currentView === 'year' || _vm.currentView === 'month' }},[_c('button',{staticClass:"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-d-arrow-left",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.prevYear")},on:{"click":_vm.prevYear}}),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-picker-panel__icon-btn el-date-picker__prev-btn el-icon-arrow-left",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.prevMonth")},on:{"click":_vm.prevMonth}}),_c('span',{staticClass:"el-date-picker__header-label",attrs:{"role":"button"},on:{"click":_vm.showYearPicker}},[_vm._v(_vm._s(_vm.yearLabel))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-date-picker__header-label",class:{ active: _vm.currentView === 'month' },attrs:{"role":"button"},on:{"click":_vm.showMonthPicker}},[_vm._v(_vm._s(_vm.t(("el.datepicker.month" + (_vm.month + 1)))))]),_c('button',{staticClass:"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-d-arrow-right",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.nextYear")},on:{"click":_vm.nextYear}}),_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],staticClass:"el-picker-panel__icon-btn el-date-picker__next-btn el-icon-arrow-right",attrs:{"type":"button","aria-label":_vm.t("el.datepicker.nextMonth")},on:{"click":_vm.nextMonth}})]),_c('div',{staticClass:"el-picker-panel__content"},[_c('date-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'date'),expression:"currentView === 'date'"}],attrs:{"selection-mode":_vm.selectionMode,"first-day-of-week":_vm.firstDayOfWeek,"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleDatePick,"date_table_click":_vm.handleDate_date_table_click}}),_c('year-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'year'),expression:"currentView === 'year'"}],attrs:{"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleYearPick}}),_c('month-table',{directives:[{name:"show",rawName:"v-show",value:(_vm.currentView === 'month'),expression:"currentView === 'month'"}],attrs:{"value":new Date(_vm.value),"default-value":_vm.defaultValue ? new Date(_vm.defaultValue) : null,"date":_vm.date,"disabled-date":_vm.disabledDate},on:{"pick":_vm.handleMonthPick}})],1)])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.footerVisible && _vm.currentView === 'date'),expression:"footerVisible && currentView === 'date'"}],staticClass:"el-picker-panel__footer"},[_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":_vm.changeToNow}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.now'))+"\n      ")]),_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"plain":"","size":"mini"},on:{"click":_vm.confirm}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.confirm'))+"\n      ")])],1)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e788602_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__ = __webpack_require__(191);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_date_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9e788602_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_date_range_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _time = __webpack_require__(27);

var _time2 = _interopRequireDefault(_time);

var _dateTable = __webpack_require__(37);

var _dateTable2 = _interopRequireDefault(_dateTable);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var advanceDate = function advanceDate(date, amount) {
  return new Date(new Date(date).getTime() + amount);
};

var calcDefaultValue = function calcDefaultValue(defaultValue) {
  if (Array.isArray(defaultValue)) {
    return [new Date(defaultValue[0]), new Date(defaultValue[1])];
  } else if (defaultValue) {
    return [new Date(defaultValue), advanceDate(defaultValue, 24 * 60 * 60 * 1000)];
  } else {
    return [new Date(), advanceDate(Date.now(), 24 * 60 * 60 * 1000)];
  }
};

exports.default = {
  mixins: [_locale2.default],

  computed: {
    btnDisabled: function btnDisabled() {
      return !(this.minDate && this.maxDate && !this.selecting);
    },
    leftLabel: function leftLabel() {
      return this.leftDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.leftDate.getMonth() + 1));
    },
    rightLabel: function rightLabel() {
      return this.rightDate.getFullYear() + ' ' + this.t('el.datepicker.year') + ' ' + this.t('el.datepicker.month' + (this.rightDate.getMonth() + 1));
    },
    leftYear: function leftYear() {
      return this.leftDate.getFullYear();
    },
    leftMonth: function leftMonth() {
      return this.leftDate.getMonth();
    },
    leftMonthDate: function leftMonthDate() {
      return this.leftDate.getDate();
    },
    rightYear: function rightYear() {
      return this.rightDate.getFullYear();
    },
    rightMonth: function rightMonth() {
      return this.rightDate.getMonth();
    },
    rightMonthDate: function rightMonthDate() {
      return this.rightDate.getDate();
    },
    minVisibleDate: function minVisibleDate() {
      return this.minDate ? (0, _util.formatDate)(this.minDate) : '';
    },
    maxVisibleDate: function maxVisibleDate() {
      return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate) : '';
    },
    minVisibleTime: function minVisibleTime() {
      return this.minDate ? (0, _util.formatDate)(this.minDate, 'HH:mm:ss') : '';
    },
    maxVisibleTime: function maxVisibleTime() {
      return this.maxDate || this.minDate ? (0, _util.formatDate)(this.maxDate || this.minDate, 'HH:mm:ss') : '';
    },
    dateFormat: function dateFormat() {
      if (this.format) {
        return this.format.replace('HH:mm', '').replace(':ss', '').trim();
      } else {
        return 'yyyy-MM-dd';
      }
    },
    timeFormat: function timeFormat() {
      if (this.format && this.format.indexOf('ss') === -1) {
        return 'HH:mm';
      } else {
        return 'HH:mm:ss';
      }
    },
    enableMonthArrow: function enableMonthArrow() {
      var nextMonth = (this.leftMonth + 1) % 12;
      var yearOffset = this.leftMonth + 1 >= 12 ? 1 : 0;
      return this.unlinkPanels && new Date(this.leftYear + yearOffset + '-' + (nextMonth + 1)) < new Date(this.rightYear + '-' + (this.rightMonth + 1));
    },
    enableYearArrow: function enableYearArrow() {
      return this.unlinkPanels && this.rightYear * 12 + this.rightMonth - (this.leftYear * 12 + this.leftMonth + 1) >= 12;
    }
  },

  data: function data() {
    return {
      old_time: { hh: '', mm: '', ss: '' },
      popperClass: '',
      value: [],
      defaultValue: null,
      minDate: '',
      maxDate: '',
      leftDate: new Date(),
      rightDate: (0, _util.nextMonth)(new Date()),
      rangeState: {
        endDate: null,
        selecting: false,
        row: null,
        column: null
      },
      showTime: false,
      shortcuts: '',
      visible: '',
      disabledDate: '',
      firstDayOfWeek: 7,
      minTimePickerVisible: false,
      maxTimePickerVisible: false,
      format: '',
      arrowControl: false,
      unlinkPanels: false
    };
  },


  watch: {
    minDate: function minDate(val) {
      var _this = this;

      this.$nextTick(function () {
        if (_this.$refs.maxTimePicker && _this.maxDate && _this.maxDate < _this.minDate) {
          var format = 'HH:mm:ss';
          _this.$refs.maxTimePicker.selectableRange = [[(0, _util.parseDate)((0, _util.formatDate)(_this.minDate, format), format), (0, _util.parseDate)('23:59:59', format)]];
        }
      });
      if (val && this.$refs.minTimePicker) {
        this.$refs.minTimePicker.date = val;
        this.$refs.minTimePicker.value = val;
      }
    },
    maxDate: function maxDate(val) {
      if (val && this.$refs.maxTimePicker) {
        this.$refs.maxTimePicker.date = val;
        this.$refs.maxTimePicker.value = val;
      }
    },
    minTimePickerVisible: function minTimePickerVisible(val) {
      var _this2 = this;

      if (val) {
        this.$nextTick(function () {
          _this2.$refs.minTimePicker.date = _this2.minDate;
          _this2.$refs.minTimePicker.value = _this2.minDate;
          _this2.$refs.minTimePicker.adjustSpinners();
        });
      }
    },
    maxTimePickerVisible: function maxTimePickerVisible(val) {
      var _this3 = this;

      if (val) {
        this.$nextTick(function () {
          _this3.$refs.maxTimePicker.date = _this3.maxDate;
          _this3.$refs.maxTimePicker.value = _this3.maxDate;
          _this3.$refs.maxTimePicker.adjustSpinners();
        });
      }
    },
    value: function value(newVal) {
      if (!newVal) {
        this.minDate = null;
        this.maxDate = null;
      } else if (Array.isArray(newVal)) {
        this.minDate = (0, _util.isDate)(newVal[0]) ? new Date(newVal[0]) : null;
        this.maxDate = (0, _util.isDate)(newVal[1]) ? new Date(newVal[1]) : null;
        // NOTE: currently, maxDate = minDate + 1 month
        //       should allow them to be set individually in the future
        if (this.minDate) {
          this.leftDate = this.minDate;
          this.rightDate = this.unlinkPanels && this.maxDate ? this.maxDate : (0, _util.nextMonth)(this.leftDate);
        } else {
          this.leftDate = calcDefaultValue(this.defaultValue)[0];
          this.rightDate = (0, _util.nextMonth)(this.leftDate);
        }
      }
    },
    defaultValue: function defaultValue(val) {
      if (!Array.isArray(this.value)) {
        var _calcDefaultValue = calcDefaultValue(val),
            left = _calcDefaultValue[0],
            right = _calcDefaultValue[1];

        this.leftDate = left;
        this.rightDate = val && val[1] && this.unlinkPanels ? right : (0, _util.nextMonth)(this.leftDate);
      }
    },
    visible: function visible(val) {
      if (!val) {
        this.$emit('visible_close');
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.minDate = null;
      this.maxDate = null;
      this.leftDate = calcDefaultValue(this.defaultValue)[0];
      this.rightDate = (0, _util.nextMonth)(this.leftDate);
      this.$emit('pick', null);
    },
    handleChangeRange: function handleChangeRange(val) {
      this.minDate = val.minDate;
      this.maxDate = val.maxDate;
      this.rangeState = val.rangeState;
    },
    handleDateInput: function handleDateInput(event, type) {
      var value = event.target.value;
      if (value.length !== this.dateFormat.length) return;
      var parsedValue = (0, _util.parseDate)(value, this.dateFormat);

      if (parsedValue) {
        if (typeof this.disabledDate === 'function' && this.disabledDate(new Date(parsedValue))) {
          return;
        }
        if (type === 'min') {
          this.minDate = new Date(parsedValue);
          this.leftDate = new Date(parsedValue);
          this.rightDate = (0, _util.nextMonth)(this.leftDate);
        } else {
          this.maxDate = new Date(parsedValue);
          this.leftDate = (0, _util.prevMonth)(parsedValue);
          this.rightDate = new Date(parsedValue);
        }
      }
    },
    handleDateChange: function handleDateChange(event, type) {
      var value = event.target.value;
      var parsedValue = (0, _util.parseDate)(value, this.dateFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = (0, _util.modifyDate)(this.minDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
        } else {
          this.maxDate = (0, _util.modifyDate)(this.maxDate, parsedValue.getFullYear(), parsedValue.getMonth(), parsedValue.getDate());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
        }
      }
    },
    handleTimeChange: function handleTimeChange(event, type) {
      var value = event.target.value;
      var parsedValue = (0, _util.parseDate)(value, this.timeFormat);
      if (parsedValue) {
        if (type === 'min') {
          this.minDate = (0, _util.modifyTime)(this.minDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.minDate > this.maxDate) {
            this.maxDate = this.minDate;
          }
          this.$refs.minTimePicker.value = this.minDate;
          this.minTimePickerVisible = false;
        } else {
          this.maxDate = (0, _util.modifyTime)(this.maxDate, parsedValue.getHours(), parsedValue.getMinutes(), parsedValue.getSeconds());
          if (this.maxDate < this.minDate) {
            this.minDate = this.maxDate;
          }
          this.$refs.maxTimePicker.value = this.minDate;
          this.maxTimePickerVisible = false;
        }
      }
    },
    handleRangePick: function handleRangePick(val) {
      var _this4 = this;

      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (this.maxDate === val.maxDate && this.minDate === val.minDate) {
        return;
      }

      this.onPick && this.onPick(val);
      /*  if(this.minDate && val.minDate ){
            val.minDate.setHours(this.minDate.getHours());
            val.minDate.setMinutes(this.minDate.getMinutes());
            val.minDate.setSeconds(this.minDate.getSeconds());
        }
        if(this.maxDate && ! val.maxDate){
                this.old_time.hh=this.maxDate.getHours();
                this.old_time.mm=this.maxDate.getMinutes();
                this.old_time.ss=this.maxDate.getHours()
        }
        if(this.old_time.hh && val.maxDate ){
            val.maxDate.setHours(this.old_time.hh);
            val.maxDate.setMinutes(this.old_time.mm);
            val.maxDate.setSeconds(this.old_time.ss);
        }*/
      this.maxDate = val.maxDate;
      this.minDate = val.minDate;
      // workaround for https://github.com/ElemeFE/element/issues/7539, should remove this block when we don't have to care about Chromium 55 - 57
      setTimeout(function () {
        _this4.maxDate = val.maxDate;
        _this4.minDate = val.minDate;
      }, 10);
      if (!close || this.showTime) return;
      this.handleConfirm();
    },
    handleShortcutClick: function handleShortcutClick(shortcut) {
      if (shortcut.onClick) {
        shortcut.onClick(this);
      }
    },
    handleMinTimePick: function handleMinTimePick(value, visible, first) {
      this.minDate = this.minDate || new Date();
      if (value) {
        this.minDate = (0, _util.modifyTime)(this.minDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.minTimePickerVisible = visible;
      }

      if (!this.maxDate || this.maxDate && this.maxDate.getTime() < this.minDate.getTime()) {
        this.maxDate = new Date(this.minDate);
      }
    },
    handleMaxTimePick: function handleMaxTimePick(value, visible, first) {
      if (this.maxDate && value) {
        this.maxDate = (0, _util.modifyTime)(this.maxDate, value.getHours(), value.getMinutes(), value.getSeconds());
      }

      if (!first) {
        this.maxTimePickerVisible = visible;
      }

      if (this.maxDate && this.minDate && this.minDate.getTime() > this.maxDate.getTime()) {
        this.minDate = new Date(this.maxDate);
      }
    },
    leftPrevYear: function leftPrevYear() {
      this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear - 1, this.leftMonth, this.leftMonthDate);
      if (!this.unlinkPanels) {
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      }
    },
    leftNextYear: function leftNextYear() {
      this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear + 1, this.leftMonth, this.leftMonthDate);
    },
    leftPrevMonth: function leftPrevMonth() {
      this.leftDate = (0, _util.prevMonth)(this.leftDate);
      if (!this.unlinkPanels) {
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      }
    },
    leftNextMonth: function leftNextMonth() {
      this.leftDate = (0, _util.nextMonth)(this.leftDate);
    },
    rightPrevYear: function rightPrevYear() {
      this.rightDate = (0, _util.modifyDate)(this.rightDate, this.rightYear - 1, this.rightMonth, this.rightMonthDate);
    },
    rightNextYear: function rightNextYear() {
      if (!this.unlinkPanels) {
        this.leftDate = (0, _util.modifyDate)(this.leftDate, this.leftYear + 1, this.leftMonth, this.leftMonthDate);
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      } else {
        this.rightDate = (0, _util.modifyDate)(this.rightDate, this.rightYear + 1, this.rightMonth, this.rightMonthDate);
      }
    },
    rightPrevMonth: function rightPrevMonth() {
      this.rightDate = (0, _util.prevMonth)(this.rightDate);
    },
    rightNextMonth: function rightNextMonth() {
      if (!this.unlinkPanels) {
        this.leftDate = (0, _util.nextMonth)(this.leftDate);
        this.rightDate = (0, _util.nextMonth)(this.leftDate);
      } else {
        this.rightDate = (0, _util.nextMonth)(this.rightDate);
      }
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.$emit('pick', [this.minDate, this.maxDate], visible);
    },
    isValidValue: function isValidValue(value) {
      return Array.isArray(value) && value && value[0] && value[1] && (0, _util.isDate)(value[0]) && (0, _util.isDate)(value[1]) && value[0].getTime() <= value[1].getTime() && (typeof this.disabledDate === 'function' ? !this.disabledDate(value[0]) && !this.disabledDate(value[1]) : true);
    }
  },

  components: { TimePicker: _time2.default, DateTable: _dateTable2.default, ElInput: _input2.default, ElButton: _button2.default }
};

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-picker-panel el-date-range-picker el-popper",class:[{
      'has-sidebar': _vm.$slots.sidebar || _vm.shortcuts,
      'has-time': _vm.showTime
    }, _vm.popperClass]},[_c('div',{staticClass:"el-picker-panel__body-wrapper"},[_vm._t("sidebar"),(_vm.shortcuts)?_c('div',{staticClass:"el-picker-panel__sidebar"},_vm._l((_vm.shortcuts),function(shortcut,index){return _c('button',{key:index,staticClass:"el-picker-panel__shortcut",attrs:{"type":"button"},on:{"click":function($event){_vm.handleShortcutClick(shortcut)}}},[_vm._v(_vm._s(shortcut.text))])})):_vm._e(),_c('div',{staticClass:"el-picker-panel__body"},[(_vm.showTime)?_c('div',{staticClass:"el-date-range-picker__time-header"},[_c('span',{staticClass:"el-date-range-picker__editors-wrap"},[_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{ref:"minInput",staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.startDate'),"value":_vm.minVisibleDate},nativeOn:{"input":function($event){_vm.handleDateInput($event, 'min')},"change":function($event){_vm.handleDateChange($event, 'min')}}})],1),_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.startTime'),"value":_vm.minVisibleTime},on:{"focus":function($event){_vm.minTimePickerVisible = !_vm.minTimePickerVisible}},nativeOn:{"change":function($event){_vm.handleTimeChange($event, 'min')}}}),_c('time-picker',{ref:"minTimePicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.minTimePickerVisible},on:{"pick":_vm.handleMinTimePick,"mounted":function($event){_vm.$refs.minTimePicker.format=_vm.timeFormat}}})],1)]),_c('span',{staticClass:"el-icon-arrow-right"}),_c('span',{staticClass:"el-date-range-picker__editors-wrap is-right"},[_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.endDate'),"value":_vm.maxVisibleDate,"readonly":!_vm.minDate},nativeOn:{"input":function($event){_vm.handleDateInput($event, 'max')},"change":function($event){_vm.handleDateChange($event, 'max')}}})],1),_c('span',{staticClass:"el-date-range-picker__time-picker-wrap"},[_c('el-input',{ref:"maxInput",staticClass:"el-date-range-picker__editor",attrs:{"size":"small","disabled":_vm.rangeState.selecting,"placeholder":_vm.t('el.datepicker.endTime'),"value":_vm.maxVisibleTime,"readonly":!_vm.minDate},on:{"focus":function($event){_vm.minDate && (_vm.maxTimePickerVisible = !_vm.maxTimePickerVisible)}},nativeOn:{"change":function($event){_vm.handleTimeChange($event, 'max')}}}),_c('time-picker',{ref:"maxTimePicker",attrs:{"time-arrow-control":_vm.arrowControl,"visible":_vm.maxTimePickerVisible},on:{"pick":_vm.handleMaxTimePick,"mounted":function($event){_vm.$refs.maxTimePicker.format=_vm.timeFormat}}})],1)])]):_vm._e(),_c('div',{staticClass:"el-picker-panel__content el-date-range-picker__content is-left"},[_c('div',{staticClass:"el-date-range-picker__header"},[_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-left",attrs:{"type":"button"},on:{"click":_vm.leftPrevYear}}),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-left",attrs:{"type":"button"},on:{"click":_vm.leftPrevMonth}}),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-right",class:{ 'is-disabled': !_vm.enableYearArrow },attrs:{"type":"button","disabled":!_vm.enableYearArrow},on:{"click":_vm.leftNextYear}}):_vm._e(),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-right",class:{ 'is-disabled': !_vm.enableMonthArrow },attrs:{"type":"button","disabled":!_vm.enableMonthArrow},on:{"click":_vm.leftNextMonth}}):_vm._e(),_c('div',[_vm._v(_vm._s(_vm.leftLabel))])]),_c('date-table',{attrs:{"selection-mode":"range","date":_vm.leftDate,"default-value":_vm.defaultValue,"min-date":_vm.minDate,"max-date":_vm.maxDate,"range-state":_vm.rangeState,"disabled-date":_vm.disabledDate,"first-day-of-week":_vm.firstDayOfWeek},on:{"changerange":_vm.handleChangeRange,"pick":_vm.handleRangePick}})],1),_c('div',{staticClass:"el-picker-panel__content el-date-range-picker__content is-right"},[_c('div',{staticClass:"el-date-range-picker__header"},[(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-left",class:{ 'is-disabled': !_vm.enableYearArrow },attrs:{"type":"button","disabled":!_vm.enableYearArrow},on:{"click":_vm.rightPrevYear}}):_vm._e(),(_vm.unlinkPanels)?_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-left",class:{ 'is-disabled': !_vm.enableMonthArrow },attrs:{"type":"button","disabled":!_vm.enableMonthArrow},on:{"click":_vm.rightPrevMonth}}):_vm._e(),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-d-arrow-right",attrs:{"type":"button"},on:{"click":_vm.rightNextYear}}),_c('button',{staticClass:"el-picker-panel__icon-btn el-icon-arrow-right",attrs:{"type":"button"},on:{"click":_vm.rightNextMonth}}),_c('div',[_vm._v(_vm._s(_vm.rightLabel))])]),_c('date-table',{attrs:{"selection-mode":"range","date":_vm.rightDate,"default-value":_vm.defaultValue,"min-date":_vm.minDate,"max-date":_vm.maxDate,"range-state":_vm.rangeState,"disabled-date":_vm.disabledDate,"first-day-of-week":_vm.firstDayOfWeek},on:{"changerange":_vm.handleChangeRange,"pick":_vm.handleRangePick}})],1)])],2),(_vm.showTime)?_c('div',{staticClass:"el-picker-panel__footer"},[_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":_vm.handleClear}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.clear'))+"\n      ")]),_c('el-button',{staticClass:"el-picker-panel__link-btn",attrs:{"plain":"","size":"mini","disabled":_vm.btnDisabled},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v("\n        "+_vm._s(_vm.t('el.datepicker.confirm'))+"\n      ")])],1):_vm._e()])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _timeSelect = __webpack_require__(193);

var _timeSelect2 = _interopRequireDefault(_timeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_timeSelect2.default.install = function (Vue) {
  Vue.component(_timeSelect2.default.name, _timeSelect2.default);
};

exports.default = _timeSelect2.default;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _picker = __webpack_require__(26);

var _picker2 = _interopRequireDefault(_picker);

var _timeSelect = __webpack_require__(194);

var _timeSelect2 = _interopRequireDefault(_timeSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_picker2.default],

  name: 'ElTimeSelect',

  beforeCreate: function beforeCreate() {
    this.type = 'time-select';
    this.panel = _timeSelect2.default;
  }
};

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_select_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_select_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fbcaedd0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_select_vue__ = __webpack_require__(196);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_select_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fbcaedd0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_select_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _scrollbar = __webpack_require__(19);

var _scrollbar2 = _interopRequireDefault(_scrollbar);

var _scrollIntoView = __webpack_require__(24);

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var parseTime = function parseTime(time) {
  var values = (time || '').split(':');
  if (values.length >= 2) {
    var hours = parseInt(values[0], 10);
    var minutes = parseInt(values[1], 10);

    return {
      hours: hours,
      minutes: minutes
    };
  }
  /* istanbul ignore next */
  return null;
};

var compareTime = function compareTime(time1, time2) {
  var value1 = parseTime(time1);
  var value2 = parseTime(time2);

  var minutes1 = value1.minutes + value1.hours * 60;
  var minutes2 = value2.minutes + value2.hours * 60;

  if (minutes1 === minutes2) {
    return 0;
  }

  return minutes1 > minutes2 ? 1 : -1;
};

var formatTime = function formatTime(time) {
  return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
};

var nextTime = function nextTime(time, step) {
  var timeValue = parseTime(time);
  var stepValue = parseTime(step);

  var next = {
    hours: timeValue.hours,
    minutes: timeValue.minutes
  };

  next.minutes += stepValue.minutes;
  next.hours += stepValue.hours;

  next.hours += Math.floor(next.minutes / 60);
  next.minutes = next.minutes % 60;

  return formatTime(next);
};

exports.default = {
  components: { ElScrollbar: _scrollbar2.default },

  watch: {
    value: function value(val) {
      var _this = this;

      if (!val) return;
      this.$nextTick(function () {
        return _this.scrollToOption();
      });
    }
  },

  methods: {
    handleClick: function handleClick(item) {
      if (!item.disabled) {
        this.$emit('pick', item.value);
        this.$emit('date_table_click');
      }
    },
    handleClear: function handleClear() {
      this.$emit('pick', null);
    },
    scrollToOption: function scrollToOption() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.selected';

      var menu = this.$refs.popper.querySelector('.el-picker-panel__content');
      (0, _scrollIntoView2.default)(menu, menu.querySelector(selector));
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this2 = this;

      var selected = this.items.map(function (item) {
        return item.value;
      }).indexOf(this.value) !== -1;
      var hasDefault = this.items.map(function (item) {
        return item.value;
      }).indexOf(this.defaultValue) !== -1;
      var option = selected && '.selected' || hasDefault && '.default' || '.time-select-item:not(.disabled)';
      this.$nextTick(function () {
        return _this2.scrollToOption(option);
      });
    },
    scrollDown: function scrollDown(step) {
      var items = this.items;
      var length = items.length;
      var total = items.length;
      var index = items.map(function (item) {
        return item.value;
      }).indexOf(this.value);
      while (total--) {
        index = (index + step + length) % length;
        if (!items[index].disabled) {
          this.$emit('pick', items[index].value, true);
          return;
        }
      }
    },
    isValidValue: function isValidValue(date) {
      return this.items.filter(function (item) {
        return !item.disabled;
      }).map(function (item) {
        return item.value;
      }).indexOf(date) !== -1;
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      if (keyCode === 38 || keyCode === 40) {
        var mapping = { 40: 1, 38: -1 };
        var offset = mapping[keyCode.toString()];
        this.scrollDown(offset);
        event.stopPropagation();
        return;
      }
    }
  },

  data: function data() {
    return {
      popperClass: '',
      start: '09:00',
      end: '18:00',
      step: '00:30',
      value: '',
      defaultValue: '',
      visible: false,
      minTime: '',
      maxTime: '',
      width: 0
    };
  },


  computed: {
    items: function items() {
      var start = this.start;
      var end = this.end;
      var step = this.step;

      var result = [];

      if (start && end && step) {
        var current = start;
        while (compareTime(current, end) <= 0) {
          result.push({
            value: current,
            disabled: compareTime(current, this.minTime || '-1:-1') <= 0 || compareTime(current, this.maxTime || '100:100') >= 0
          });
          current = nextTime(current, step);
        }
      }

      return result;
    }
  }
};

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"before-enter":_vm.handleMenuEnter,"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"popper",staticClass:"el-picker-panel time-select el-popper",class:_vm.popperClass,style:({ width: _vm.width + 'px' })},[_c('el-scrollbar',{attrs:{"noresize":"","wrap-class":"el-picker-panel__content"}},_vm._l((_vm.items),function(item){return _c('div',{staticClass:"time-select-item",class:{ selected: _vm.value === item.value, disabled: item.disabled, default: item.value === _vm.defaultValue },attrs:{"disabled":item.disabled},on:{"click":function($event){_vm.handleClick(item)}}},[_vm._v(_vm._s(item.value))])}))],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _timePicker = __webpack_require__(198);

var _timePicker2 = _interopRequireDefault(_timePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_timePicker2.default.install = function (Vue) {
  Vue.component(_timePicker2.default.name, _timePicker2.default);
};

exports.default = _timePicker2.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _picker = __webpack_require__(26);

var _picker2 = _interopRequireDefault(_picker);

var _time = __webpack_require__(27);

var _time2 = _interopRequireDefault(_time);

var _timeRange = __webpack_require__(199);

var _timeRange2 = _interopRequireDefault(_timeRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  mixins: [_picker2.default],

  name: 'ElTimePicker',

  props: {
    isRange: Boolean,
    arrowControl: Boolean
  },

  data: function data() {
    return {
      type: ''
    };
  },


  watch: {
    isRange: function isRange(_isRange) {
      if (this.picker) {
        this.unmountPicker();
        this.type = _isRange ? 'timerange' : 'time';
        this.panel = _isRange ? _timeRange2.default : _time2.default;
        this.mountPicker();
      } else {
        this.type = _isRange ? 'timerange' : 'time';
        this.panel = _isRange ? _timeRange2.default : _time2.default;
      }
    }
  },

  created: function created() {
    this.type = this.isRange ? 'timerange' : 'time';
    this.panel = this.isRange ? _timeRange2.default : _time2.default;
  }
};

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4ea9f9c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__ = __webpack_require__(201);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_time_range_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4ea9f9c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_time_range_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _util = __webpack_require__(9);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _timeSpinner = __webpack_require__(36);

var _timeSpinner2 = _interopRequireDefault(_timeSpinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MIN_TIME = (0, _util.parseDate)('00:00:00', 'HH:mm:ss'); //
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

var MAX_TIME = (0, _util.parseDate)('23:59:59', 'HH:mm:ss');

var minTimeOfDay = function minTimeOfDay(date) {
  return (0, _util.modifyDate)(MIN_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

var maxTimeOfDay = function maxTimeOfDay(date) {
  return (0, _util.modifyDate)(MAX_TIME, date.getFullYear(), date.getMonth(), date.getDate());
};

// increase time by amount of milliseconds, but within the range of day
var advanceTime = function advanceTime(date, amount) {
  return new Date(Math.min(date.getTime() + amount, maxTimeOfDay(date).getTime()));
};

exports.default = {
  mixins: [_locale2.default],

  components: { TimeSpinner: _timeSpinner2.default },

  computed: {
    showSeconds: function showSeconds() {
      return (this.format || '').indexOf('ss') !== -1;
    },
    offset: function offset() {
      return this.showSeconds ? 11 : 8;
    },
    spinner: function spinner() {
      return this.selectionRange[0] < this.offset ? this.$refs.minSpinner : this.$refs.maxSpinner;
    },
    btnDisabled: function btnDisabled() {
      return this.minDate.getTime() > this.maxDate.getTime();
    },
    amPmMode: function amPmMode() {
      if ((this.format || '').indexOf('A') !== -1) return 'A';
      if ((this.format || '').indexOf('a') !== -1) return 'a';
      return '';
    }
  },

  data: function data() {
    return {
      popperClass: '',
      minDate: new Date(),
      maxDate: new Date(),
      value: [],
      oldValue: [new Date(), new Date()],
      defaultValue: null,
      format: 'HH:mm:ss',
      visible: false,
      selectionRange: [0, 2],
      arrowControl: false
    };
  },


  watch: {
    value: function value(_value) {
      if (Array.isArray(_value)) {
        this.minDate = new Date(_value[0]);
        this.maxDate = new Date(_value[1]);
      } else {
        if (Array.isArray(this.defaultValue)) {
          this.minDate = new Date(this.defaultValue[0]);
          this.maxDate = new Date(this.defaultValue[1]);
        } else if (this.defaultValue) {
          this.minDate = new Date(this.defaultValue);
          this.maxDate = advanceTime(new Date(this.defaultValue), 60 * 60 * 1000);
        } else {
          this.minDate = new Date();
          this.maxDate = advanceTime(new Date(), 60 * 60 * 1000);
        }
      }
    },
    visible: function visible(val) {
      var _this = this;

      if (val) {
        this.oldValue = this.value;
        this.$nextTick(function () {
          return _this.$refs.minSpinner.emitSelectRange('hours');
        });
      } else {
        this.$emit('visible_close');
      }
    }
  },

  methods: {
    handleClear: function handleClear() {
      this.$emit('pick', null);
    },
    handleCancel: function handleCancel() {
      this.$emit('pick', this.oldValue);
    },
    handleMinChange: function handleMinChange(date) {
      this.minDate = (0, _util.clearMilliseconds)(date);
      this.handleChange();
    },
    handleMaxChange: function handleMaxChange(date) {
      this.maxDate = (0, _util.clearMilliseconds)(date);
      this.handleChange();
    },
    handleChange: function handleChange() {
      if (this.isValidValue([this.minDate, this.maxDate])) {
        this.$refs.minSpinner.selectableRange = [[minTimeOfDay(this.minDate), this.maxDate]];
        this.$refs.maxSpinner.selectableRange = [[this.minDate, maxTimeOfDay(this.maxDate)]];
        this.$emit('pick', [this.minDate, this.maxDate], true);
      }
    },
    setMinSelectionRange: function setMinSelectionRange(start, end) {
      this.$emit('select-range', start, end, 'min');
      this.selectionRange = [start, end];
    },
    setMaxSelectionRange: function setMaxSelectionRange(start, end) {
      this.$emit('select-range', start, end, 'max');
      this.selectionRange = [start + this.offset, end + this.offset];
    },
    handleConfirm: function handleConfirm() {
      var visible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var minSelectableRange = this.$refs.minSpinner.selectableRange;
      var maxSelectableRange = this.$refs.maxSpinner.selectableRange;

      this.minDate = (0, _util.limitTimeRange)(this.minDate, minSelectableRange, this.format);
      this.maxDate = (0, _util.limitTimeRange)(this.maxDate, maxSelectableRange, this.format);
      this.$emit('date_table_click');
      this.$emit('pick', [this.minDate, this.maxDate], visible);
    },
    adjustSpinners: function adjustSpinners() {
      this.$refs.minSpinner.adjustSpinners();
      this.$refs.maxSpinner.adjustSpinners();
    },
    changeSelectionRange: function changeSelectionRange(step) {
      var list = this.showSeconds ? [0, 3, 6, 11, 14, 17] : [0, 3, 8, 11];
      var mapping = ['hours', 'minutes'].concat(this.showSeconds ? ['seconds'] : []);
      var index = list.indexOf(this.selectionRange[0]);
      var next = (index + step + list.length) % list.length;
      var half = list.length / 2;
      if (next < half) {
        this.$refs.minSpinner.emitSelectRange(mapping[next]);
      } else {
        this.$refs.maxSpinner.emitSelectRange(mapping[next - half]);
      }
    },
    isValidValue: function isValidValue(date) {
      return Array.isArray(date) && (0, _util.timeWithinRange)(this.minDate, this.$refs.minSpinner.selectableRange) && (0, _util.timeWithinRange)(this.maxDate, this.$refs.maxSpinner.selectableRange);
    },
    handleKeydown: function handleKeydown(event) {
      var keyCode = event.keyCode;
      var mapping = { 38: -1, 40: 1, 37: -1, 39: 1 };

      // Left or Right
      if (keyCode === 37 || keyCode === 39) {
        var step = mapping[keyCode];
        this.changeSelectionRange(step);
        event.preventDefault();
        return;
      }

      // Up or Down
      if (keyCode === 38 || keyCode === 40) {
        var _step = mapping[keyCode];
        this.spinner.scrollDown(_step);
        event.preventDefault();
        return;
      }
    }
  }
};

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":function($event){_vm.$emit('dodestroy')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-time-range-picker el-picker-panel el-popper",class:_vm.popperClass},[_c('div',{staticClass:"el-time-range-picker__content"},[_c('div',{staticClass:"el-time-range-picker__cell"},[_c('div',{staticClass:"el-time-range-picker__header"},[_vm._v(_vm._s(_vm.t('el.datepicker.startTime')))]),_c('div',{staticClass:"el-time-range-picker__body el-time-panel__content",class:{ 'has-seconds': _vm.showSeconds, 'is-arrow': _vm.arrowControl }},[_c('time-spinner',{ref:"minSpinner",attrs:{"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"arrow-control":_vm.arrowControl,"date":_vm.minDate},on:{"change":_vm.handleMinChange,"select-range":_vm.setMinSelectionRange}})],1)]),_c('div',{staticClass:"el-time-range-picker__cell"},[_c('div',{staticClass:"el-time-range-picker__header"},[_vm._v(_vm._s(_vm.t('el.datepicker.endTime')))]),_c('div',{staticClass:"el-time-range-picker__body el-time-panel__content",class:{ 'has-seconds': _vm.showSeconds, 'is-arrow': _vm.arrowControl }},[_c('time-spinner',{ref:"maxSpinner",attrs:{"show-seconds":_vm.showSeconds,"am-pm-mode":_vm.amPmMode,"arrow-control":_vm.arrowControl,"date":_vm.maxDate},on:{"change":_vm.handleMaxChange,"select-range":_vm.setMaxSelectionRange}})],1)])]),_c('div',{staticClass:"el-time-panel__footer"},[_c('button',{staticClass:"el-time-panel__btn cancel",attrs:{"type":"button"},on:{"click":function($event){_vm.handleCancel()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.cancel')))]),_c('button',{staticClass:"el-time-panel__btn confirm",attrs:{"type":"button","disabled":_vm.btnDisabled},on:{"click":function($event){_vm.handleConfirm()}}},[_vm._v(_vm._s(_vm.t('el.datepicker.confirm')))])])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(203);

var _main2 = _interopRequireDefault(_main);

var _directive = __webpack_require__(206);

var _directive2 = _interopRequireDefault(_directive);

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.directive('popover', _directive2.default);

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.directive('popover', _directive2.default);
  Vue.component(_main2.default.name, _main2.default);
};
_main2.default.directive = _directive2.default;

exports.default = _main2.default;

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd422570_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(205);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_bd422570_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _dom = __webpack_require__(3);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElPopover',

  mixins: [_vuePopper2.default],

  props: {
    trigger: {
      type: String,
      default: 'click',
      validator: function validator(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
      }
    },
    openDelay: {
      type: Number,
      default: 0
    },
    title: String,
    disabled: Boolean,
    content: String,
    reference: {},
    popperClass: String,
    width: {},
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    }
  },

  computed: {
    tooltipId: function tooltipId() {
      return 'el-popover-' + (0, _util.generateId)();
    }
  },
  watch: {
    showPopper: function showPopper(val) {
      val ? this.$emit('show') : this.$emit('hide');
    }
  },

  mounted: function mounted() {
    var reference = this.referenceElm = this.reference || this.$refs.reference;
    var popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceElm = this.$slots.reference[0].elm;
    }
    // 可访问性
    if (reference) {
      (0, _dom.addClass)(reference, 'el-popover__reference');
      reference.setAttribute('aria-describedby', this.tooltipId);
      reference.setAttribute('tabindex', 0); // tab序列

      this.trigger !== 'click' && (0, _dom.on)(reference, 'focus', this.handleFocus);
      this.trigger !== 'click' && (0, _dom.on)(reference, 'blur', this.handleBlur);
      (0, _dom.on)(reference, 'keydown', this.handleKeydown);
      (0, _dom.on)(reference, 'click', this.handleClick);
    }
    if (this.trigger === 'click') {
      (0, _dom.on)(reference, 'click', this.doToggle);
      (0, _dom.on)(document, 'click', this.handleDocumentClick);
    } else if (this.trigger === 'hover') {
      (0, _dom.on)(reference, 'mouseenter', this.handleMouseEnter);
      (0, _dom.on)(popper, 'mouseenter', this.handleMouseEnter);
      (0, _dom.on)(reference, 'mouseleave', this.handleMouseLeave);
      (0, _dom.on)(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      var found = false;

      if ([].slice.call(reference.children).length) {
        var children = reference.childNodes;
        var len = children.length;
        for (var i = 0; i < len; i++) {
          if (children[i].nodeName === 'INPUT' || children[i].nodeName === 'TEXTAREA') {
            (0, _dom.on)(children[i], 'focus', this.doShow);
            (0, _dom.on)(children[i], 'blur', this.doClose);
            found = true;
            break;
          }
        }
      }
      if (found) return;
      if (reference.nodeName === 'INPUT' || reference.nodeName === 'TEXTAREA') {
        (0, _dom.on)(reference, 'focus', this.doShow);
        (0, _dom.on)(reference, 'blur', this.doClose);
      } else {
        (0, _dom.on)(reference, 'mousedown', this.doShow);
        (0, _dom.on)(reference, 'mouseup', this.doClose);
      }
    }
  },


  methods: {
    doToggle: function doToggle() {
      this.showPopper = !this.showPopper;
    },
    doShow: function doShow() {
      this.showPopper = true;
    },
    doClose: function doClose() {
      this.showPopper = false;
    },
    handleFocus: function handleFocus() {
      (0, _dom.addClass)(this.referenceElm, 'focusing');
      if (this.trigger !== 'manual') this.showPopper = true;
    },
    handleClick: function handleClick() {
      (0, _dom.removeClass)(this.referenceElm, 'focusing');
    },
    handleBlur: function handleBlur() {
      (0, _dom.removeClass)(this.referenceElm, 'focusing');
      if (this.trigger !== 'manual') this.showPopper = false;
    },
    handleMouseEnter: function handleMouseEnter() {
      var _this = this;

      clearTimeout(this._timer);
      if (this.openDelay) {
        this._timer = setTimeout(function () {
          _this.showPopper = true;
        }, this.openDelay);
      } else {
        this.showPopper = true;
      }
    },
    handleKeydown: function handleKeydown(ev) {
      if (ev.keyCode === 27 && this.trigger !== 'manual') {
        // esc
        this.doClose();
      }
    },
    handleMouseLeave: function handleMouseLeave() {
      var _this2 = this;

      clearTimeout(this._timer);
      this._timer = setTimeout(function () {
        _this2.showPopper = false;
      }, 200);
    },
    handleDocumentClick: function handleDocumentClick(e) {
      var reference = this.reference || this.$refs.reference;
      var popper = this.popper || this.$refs.popper;

      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (!this.$el || !reference || this.$el.contains(e.target) || reference.contains(e.target) || !popper || popper.contains(e.target)) return;
      this.showPopper = false;
    }
  },

  destroyed: function destroyed() {
    var reference = this.reference;

    (0, _dom.off)(reference, 'click', this.doToggle);
    (0, _dom.off)(reference, 'mouseup', this.doClose);
    (0, _dom.off)(reference, 'mousedown', this.doShow);
    (0, _dom.off)(reference, 'focus', this.doShow);
    (0, _dom.off)(reference, 'blur', this.doClose);
    (0, _dom.off)(reference, 'mouseleave', this.handleMouseLeave);
    (0, _dom.off)(reference, 'mouseenter', this.handleMouseEnter);
    (0, _dom.off)(document, 'click', this.handleDocumentClick);
  }
};

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_c('transition',{attrs:{"name":_vm.transition},on:{"after-leave":_vm.doDestroy}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.disabled && _vm.showPopper),expression:"!disabled && showPopper"}],ref:"popper",staticClass:"el-popover el-popper",class:[_vm.popperClass, _vm.content && 'el-popover--plain'],style:({ width: _vm.width + 'px' }),attrs:{"role":"tooltip","id":_vm.tooltipId,"aria-hidden":(_vm.disabled || !_vm.showPopper) ? 'true' : 'false'}},[(_vm.title)?_c('div',{staticClass:"el-popover__title",domProps:{"textContent":_vm._s(_vm.title)}}):_vm._e(),_vm._t("default",[_vm._v(_vm._s(_vm.content))])],2)]),_vm._t("reference")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  bind: function bind(el, binding, vnode) {
    vnode.context.$refs[binding.arg].$refs.reference = el;
  }
};

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(208);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _dom = __webpack_require__(3);

var _vdom = __webpack_require__(21);

var _util = __webpack_require__(4);

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTooltip',

  mixins: [_vuePopper2.default],

  props: {
    openDelay: {
      type: Number,
      default: 0
    },
    disabled: Boolean,
    manual: Boolean,
    effect: {
      type: String,
      default: 'dark'
    },
    popperClass: String,
    content: String,
    visibleArrow: {
      default: true
    },
    transition: {
      type: String,
      default: 'el-fade-in-linear'
    },
    popperOptions: {
      default: function _default() {
        return {
          boundariesPadding: 10,
          gpuAcceleration: false
        };
      }
    },
    enterable: {
      type: Boolean,
      default: true
    },
    hideAfter: {
      type: Number,
      default: 0
    }
  },

  data: function data() {
    return {
      timeoutPending: null,
      focusing: false
    };
  },

  computed: {
    tooltipId: function tooltipId() {
      return 'el-tooltip-' + (0, _util.generateId)();
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    if (this.$isServer) return;

    this.popperVM = new _vue2.default({
      data: { node: '' },
      render: function render(h) {
        return this.node;
      }
    }).$mount();

    this.debounceClose = (0, _debounce2.default)(200, function () {
      return _this.handleClosePopper();
    });
  },
  render: function render(h) {
    var _this2 = this;

    if (this.popperVM) {
      this.popperVM.node = h(
        'transition',
        {
          attrs: {
            name: this.transition
          },
          on: {
            'afterLeave': this.doDestroy
          }
        },
        [h(
          'div',
          {
            on: {
              'mouseleave': function mouseleave() {
                _this2.setExpectedState(false);_this2.debounceClose();
              },
              'mouseenter': function mouseenter() {
                _this2.setExpectedState(true);
              }
            },

            ref: 'popper',
            attrs: { role: 'tooltip',
              id: this.tooltipId,
              'aria-hidden': this.disabled || !this.showPopper ? 'true' : 'false'
            },
            directives: [{
              name: 'show',
              value: !this.disabled && this.showPopper
            }],

            'class': ['el-tooltip__popper', 'is-' + this.effect, this.popperClass] },
          [this.$slots.content || this.content]
        )]
      );
    }

    if (!this.$slots.default || !this.$slots.default.length) return this.$slots.default;

    var vnode = (0, _vdom.getFirstComponentChild)(this.$slots.default);

    if (!vnode) return vnode;

    var data = vnode.data = vnode.data || {};
    var on = vnode.data.on = vnode.data.on || {};
    var nativeOn = vnode.data.nativeOn = vnode.data.nativeOn || {};

    data.staticClass = this.concatClass(data.staticClass, 'el-tooltip');
    nativeOn.mouseenter = on.mouseenter = this.addEventHandle(on.mouseenter, this.show);
    nativeOn.mouseleave = on.mouseleave = this.addEventHandle(on.mouseleave, this.hide);
    nativeOn.focus = on.focus = this.addEventHandle(on.focus, this.handleFocus);
    nativeOn.blur = on.blur = this.addEventHandle(on.blur, this.handleBlur);
    nativeOn.click = on.click = this.addEventHandle(on.click, function () {
      _this2.focusing = false;
    });
    return vnode;
  },
  mounted: function mounted() {
    this.referenceElm = this.$el;
    if (this.$el.nodeType === 1) {
      this.$el.setAttribute('aria-describedby', this.tooltipId);
      this.$el.setAttribute('tabindex', 0);
    }
  },

  watch: {
    focusing: function focusing(val) {
      if (val) {
        (0, _dom.addClass)(this.referenceElm, 'focusing');
      } else {
        (0, _dom.removeClass)(this.referenceElm, 'focusing');
      }
    }
  },
  methods: {
    show: function show() {
      this.setExpectedState(true);
      this.handleShowPopper();
    },
    hide: function hide() {
      this.setExpectedState(false);
      this.debounceClose();
    },
    handleFocus: function handleFocus() {
      this.focusing = true;
      this.show();
    },
    handleBlur: function handleBlur() {
      this.focusing = false;
      this.hide();
    },
    addEventHandle: function addEventHandle(old, fn) {
      if (!old) {
        return fn;
      } else if (Array.isArray(old)) {
        return old.indexOf(fn) > -1 ? old : old.concat(fn);
      } else {
        return old === fn ? old : [old, fn];
      }
    },
    concatClass: function concatClass(a, b) {
      if (a && a.indexOf(b) > -1) return a;
      return a ? b ? a + ' ' + b : a : b || '';
    },
    handleShowPopper: function handleShowPopper() {
      var _this3 = this;

      if (!this.expectedState || this.manual) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function () {
        _this3.showPopper = true;
      }, this.openDelay);

      if (this.hideAfter > 0) {
        this.timeoutPending = setTimeout(function () {
          _this3.showPopper = false;
        }, this.hideAfter);
      }
    },
    handleClosePopper: function handleClosePopper() {
      if (this.enterable && this.expectedState || this.manual) return;
      clearTimeout(this.timeout);

      if (this.timeoutPending) {
        clearTimeout(this.timeoutPending);
      }
      this.showPopper = false;
    },
    setExpectedState: function setExpectedState(expectedState) {
      if (expectedState === false) {
        clearTimeout(this.timeoutPending);
      }
      this.expectedState = expectedState;
    }
  }
};

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(210);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.MessageBox = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(211);

var _main2 = _interopRequireDefault(_main);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

var _vdom = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  title: undefined,
  message: '',
  type: '',
  showInput: false,
  showClose: true,
  modalFade: true,
  lockScroll: true,
  closeOnClickModal: true,
  closeOnPressEscape: true,
  closeOnHashChange: true,
  inputValue: null,
  inputPlaceholder: '',
  inputType: 'text',
  inputPattern: null,
  inputValidator: null,
  inputErrorMessage: '',
  showConfirmButton: true,
  showCancelButton: false,
  confirmButtonPosition: 'right',
  confirmButtonHighlight: false,
  cancelButtonHighlight: false,
  confirmButtonText: '',
  cancelButtonText: '',
  confirmButtonClass: '',
  cancelButtonClass: '',
  customClass: '',
  beforeClose: null,
  dangerouslyUseHTMLString: false,
  center: false,
  roundButton: false
};

var MessageBoxConstructor = _vue2.default.extend(_main2.default);

var currentMsg = void 0,
    instance = void 0;
var msgQueue = [];

var defaultCallback = function defaultCallback(action) {
  if (currentMsg) {
    var callback = currentMsg.callback;
    if (typeof callback === 'function') {
      if (instance.showInput) {
        callback(instance.inputValue, action);
      } else {
        callback(action);
      }
    }
    if (currentMsg.resolve) {
      if (action === 'confirm') {
        if (instance.showInput) {
          currentMsg.resolve({ value: instance.inputValue, action: action });
        } else {
          currentMsg.resolve(action);
        }
      } else if (action === 'cancel' && currentMsg.reject) {
        currentMsg.reject(action);
      }
    }
  }
};

var initInstance = function initInstance() {
  instance = new MessageBoxConstructor({
    el: document.createElement('div')
  });

  instance.callback = defaultCallback;
};

var showNextMsg = function showNextMsg() {
  if (!instance) {
    initInstance();
  }
  instance.action = '';

  if (!instance.visible || instance.closeTimer) {
    if (msgQueue.length > 0) {
      currentMsg = msgQueue.shift();

      var options = currentMsg.options;
      for (var prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop];
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback;
      }

      var oldCb = instance.callback;
      instance.callback = function (action, instance) {
        oldCb(action, instance);
        showNextMsg();
      };
      if ((0, _vdom.isVNode)(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null;
      } else {
        delete instance.$slots.default;
      }
      ['modal', 'showClose', 'closeOnClickModal', 'closeOnPressEscape', 'closeOnHashChange'].forEach(function (prop) {
        if (instance[prop] === undefined) {
          instance[prop] = true;
        }
      });
      document.body.appendChild(instance.$el);

      _vue2.default.nextTick(function () {
        instance.visible = true;
      });
    }
  }
};

var MessageBox = function MessageBox(options, callback) {
  if (_vue2.default.prototype.$isServer) return;
  if (typeof options === 'string' || (0, _vdom.isVNode)(options)) {
    options = {
      message: options
    };
    if (typeof arguments[1] === 'string') {
      options.title = arguments[1];
    }
  } else if (options.callback && !callback) {
    callback = options.callback;
  }

  if (typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      // eslint-disable-line
      msgQueue.push({
        options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
        callback: callback,
        resolve: resolve,
        reject: reject
      });

      showNextMsg();
    });
  } else {
    msgQueue.push({
      options: (0, _merge2.default)({}, defaults, MessageBox.defaults, options),
      callback: callback
    });

    showNextMsg();
  }
};

MessageBox.setDefaults = function (defaults) {
  MessageBox.defaults = defaults;
};

MessageBox.alert = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return MessageBox((0, _merge2.default)({
    title: title,
    message: message,
    $type: 'alert',
    closeOnPressEscape: false,
    closeOnClickModal: false
  }, options));
};

MessageBox.confirm = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return MessageBox((0, _merge2.default)({
    title: title,
    message: message,
    $type: 'confirm',
    showCancelButton: true
  }, options));
};

MessageBox.prompt = function (message, title, options) {
  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
    options = title;
    title = '';
  } else if (title === undefined) {
    title = '';
  }
  return MessageBox((0, _merge2.default)({
    title: title,
    message: message,
    showCancelButton: true,
    showInput: true,
    $type: 'prompt'
  }, options));
};

MessageBox.close = function () {
  instance.doClose();
  instance.visible = false;
  msgQueue = [];
  currentMsg = null;
};

exports.default = MessageBox;
exports.MessageBox = MessageBox;

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2031ea4a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(214);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2031ea4a_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _popup = __webpack_require__(16);

var _popup2 = _interopRequireDefault(_popup);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

var _dom = __webpack_require__(3);

var _locale3 = __webpack_require__(15);

var _ariaDialog = __webpack_require__(213);

var _ariaDialog2 = _interopRequireDefault(_ariaDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var messageBox = void 0; //
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

var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

exports.default = {
  mixins: [_popup2.default, _locale2.default],

  props: {
    modal: {
      default: true
    },
    lockScroll: {
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      default: true
    },
    closeOnPressEscape: {
      default: true
    },
    closeOnHashChange: {
      default: true
    },
    center: {
      default: false,
      type: Boolean
    },
    roundButton: {
      default: false,
      type: Boolean
    }
  },

  components: {
    ElInput: _input2.default,
    ElButton: _button2.default
  },

  computed: {
    typeClass: function typeClass() {
      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
    },
    confirmButtonClasses: function confirmButtonClasses() {
      return 'el-button--primary ' + this.confirmButtonClass;
    },
    cancelButtonClasses: function cancelButtonClasses() {
      return '' + this.cancelButtonClass;
    }
  },

  methods: {
    handleComposition: function handleComposition(event) {
      var _this = this;

      if (event.type === 'compositionend') {
        setTimeout(function () {
          _this.isOnComposition = false;
        }, 100);
      } else {
        this.isOnComposition = true;
      }
    },
    handleKeyup: function handleKeyup() {
      !this.isOnComposition && this.handleAction('confirm');
    },
    getSafeClose: function getSafeClose() {
      var _this2 = this;

      var currentId = this.uid;
      return function () {
        _this2.$nextTick(function () {
          if (currentId === _this2.uid) _this2.doClose();
        });
      };
    },
    doClose: function doClose() {
      var _this3 = this;

      if (!this.visible) return;
      this.visible = false;
      this._closing = true;

      this.onClose && this.onClose();
      messageBox.closeDialog(); // 解绑
      if (this.lockScroll) {
        setTimeout(function () {
          if (_this3.modal && _this3.bodyOverflow !== 'hidden') {
            document.body.style.overflow = _this3.bodyOverflow;
            document.body.style.paddingRight = _this3.bodyPaddingRight;
          }
          _this3.bodyOverflow = null;
          _this3.bodyPaddingRight = null;
        }, 200);
      }
      this.opened = false;

      if (!this.transition) {
        this.doAfterClose();
      }
      setTimeout(function () {
        if (_this3.action) _this3.callback(_this3.action, _this3);
      });
    },
    handleWrapperClick: function handleWrapperClick() {
      if (this.closeOnClickModal) {
        this.handleAction('cancel');
      }
    },
    handleAction: function handleAction(action) {
      if (this.$type === 'prompt' && action === 'confirm' && !this.validate()) {
        return;
      }
      this.action = action;
      if (typeof this.beforeClose === 'function') {
        this.close = this.getSafeClose();
        this.beforeClose(action, this, this.close);
      } else {
        this.doClose();
      }
    },
    validate: function validate() {
      if (this.$type === 'prompt') {
        var inputPattern = this.inputPattern;
        if (inputPattern && !inputPattern.test(this.inputValue || '')) {
          this.editorErrorMessage = this.inputErrorMessage || (0, _locale3.t)('el.messagebox.error');
          (0, _dom.addClass)(this.getInputElement(), 'invalid');
          return false;
        }
        var inputValidator = this.inputValidator;
        if (typeof inputValidator === 'function') {
          var validateResult = inputValidator(this.inputValue);
          if (validateResult === false) {
            this.editorErrorMessage = this.inputErrorMessage || (0, _locale3.t)('el.messagebox.error');
            (0, _dom.addClass)(this.getInputElement(), 'invalid');
            return false;
          }
          if (typeof validateResult === 'string') {
            this.editorErrorMessage = validateResult;
            return false;
          }
        }
      }
      this.editorErrorMessage = '';
      (0, _dom.removeClass)(this.getInputElement(), 'invalid');
      return true;
    },
    getFistFocus: function getFistFocus() {
      var $btns = this.$el.querySelector('.el-message-box__btns .el-button');
      var $title = this.$el.querySelector('.el-message-box__btns .el-message-box__title');
      return $btns && $btns[0] || $title;
    },
    getInputElement: function getInputElement() {
      var inputRefs = this.$refs.input.$refs;
      return inputRefs.input || inputRefs.textarea;
    }
  },

  watch: {
    inputValue: {
      immediate: true,
      handler: function handler(val) {
        var _this4 = this;

        this.$nextTick(function (_) {
          if (_this4.$type === 'prompt' && val !== null) {
            _this4.validate();
          }
        });
      }
    },

    visible: function visible(val) {
      var _this5 = this;

      if (val) {
        this.uid++;
        if (this.$type === 'alert' || this.$type === 'confirm') {
          this.$nextTick(function () {
            _this5.$refs.confirm.$el.focus();
          });
        }
        this.focusAfterClosed = document.activeElement;
        messageBox = new _ariaDialog2.default(this.$el, this.focusAfterClosed, this.getFistFocus());
      }

      // prompt
      if (this.$type !== 'prompt') return;
      if (val) {
        setTimeout(function () {
          if (_this5.$refs.input && _this5.$refs.input.$el) {
            _this5.getInputElement().focus();
          }
        }, 500);
      } else {
        this.editorErrorMessage = '';
        (0, _dom.removeClass)(this.getInputElement(), 'invalid');
      }
    }
  },

  mounted: function mounted() {
    if (this.closeOnHashChange) {
      window.addEventListener('hashchange', this.close);
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.closeOnHashChange) {
      window.removeEventListener('hashchange', this.close);
    }
    setTimeout(function () {
      messageBox.closeDialog();
    });
  },
  data: function data() {
    return {
      uid: 1,
      title: undefined,
      message: '',
      type: '',
      customClass: '',
      showInput: false,
      inputValue: null,
      inputPlaceholder: '',
      inputType: 'text',
      inputPattern: null,
      inputValidator: null,
      inputErrorMessage: '',
      showConfirmButton: true,
      showCancelButton: false,
      action: '',
      confirmButtonText: '',
      cancelButtonText: '',
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonClass: '',
      confirmButtonDisabled: false,
      cancelButtonClass: '',
      editorErrorMessage: null,
      callback: null,
      dangerouslyUseHTMLString: false,
      focusAfterClosed: null,
      isOnComposition: false
    };
  }
};

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/aria-dialog");

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"msgbox-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-message-box__wrapper",attrs:{"tabindex":"-1","role":"dialog","aria-modal":"true","aria-label":_vm.title || 'dialog'},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }_vm.handleWrapperClick($event)}}},[_c('div',{staticClass:"el-message-box",class:[_vm.customClass, _vm.center && 'el-message-box--center']},[(_vm.title !== undefined)?_c('div',{staticClass:"el-message-box__header"},[_c('div',{staticClass:"el-message-box__title"},[(_vm.typeClass && _vm.center)?_c('div',{staticClass:"el-message-box__status",class:[ _vm.typeClass ]}):_vm._e(),_c('span',[_vm._v(_vm._s(_vm.title))])]),(_vm.showClose)?_c('button',{staticClass:"el-message-box__headerbtn",attrs:{"type":"button","aria-label":"Close"},on:{"click":function($event){_vm.handleAction('cancel')},"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleAction('cancel')}}},[_c('i',{staticClass:"el-message-box__close el-icon-close"})]):_vm._e()]):_vm._e(),(_vm.message !== '')?_c('div',{staticClass:"el-message-box__content"},[(_vm.typeClass && !_vm.center)?_c('div',{staticClass:"el-message-box__status",class:[ _vm.typeClass ]}):_vm._e(),_c('div',{staticClass:"el-message-box__message"},[_vm._t("default",[(!_vm.dangerouslyUseHTMLString)?_c('p',[_vm._v(_vm._s(_vm.message))]):_c('p',{domProps:{"innerHTML":_vm._s(_vm.message)}})])],2),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showInput),expression:"showInput"}],staticClass:"el-message-box__input"},[_c('el-input',{ref:"input",attrs:{"type":_vm.inputType,"placeholder":_vm.inputPlaceholder},nativeOn:{"compositionstart":function($event){_vm.handleComposition($event)},"compositionupdate":function($event){_vm.handleComposition($event)},"compositionend":function($event){_vm.handleComposition($event)},"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleKeyup($event)}},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}}),_c('div',{staticClass:"el-message-box__errormsg",style:({ visibility: !!_vm.editorErrorMessage ? 'visible' : 'hidden' })},[_vm._v(_vm._s(_vm.editorErrorMessage))])],1)]):_vm._e(),_c('div',{staticClass:"el-message-box__btns"},[_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCancelButton),expression:"showCancelButton"}],class:[ _vm.cancelButtonClasses ],attrs:{"loading":_vm.cancelButtonLoading,"round":_vm.roundButton,"size":"small"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleAction('cancel')}},nativeOn:{"click":function($event){_vm.handleAction('cancel')}}},[_vm._v("\n          "+_vm._s(_vm.cancelButtonText || _vm.t('el.messagebox.cancel'))+"\n        ")]),_c('el-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showConfirmButton),expression:"showConfirmButton"}],ref:"confirm",class:[ _vm.confirmButtonClasses ],attrs:{"loading":_vm.confirmButtonLoading,"round":_vm.roundButton,"size":"small"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleAction('confirm')}},nativeOn:{"click":function($event){_vm.handleAction('confirm')}}},[_vm._v("\n          "+_vm._s(_vm.confirmButtonText || _vm.t('el.messagebox.confirm'))+"\n        ")])],1)])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _breadcrumb = __webpack_require__(216);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_breadcrumb2.default.install = function (Vue) {
  Vue.component(_breadcrumb2.default.name, _breadcrumb2.default);
};

exports.default = _breadcrumb2.default;

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_104b903c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__(218);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_104b903c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//

exports.default = {
  name: 'ElBreadcrumb',

  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },

  provide: function provide() {
    return {
      elBreadcrumb: this
    };
  },
  mounted: function mounted() {
    var items = this.$el.querySelectorAll('.el-breadcrumb__item');
    if (items.length) {
      items[items.length - 1].setAttribute('aria-current', 'page');
    }
  }
};

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-breadcrumb",attrs:{"aria-label":"Breadcrumb","role":"navigation"}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _breadcrumbItem = __webpack_require__(220);

var _breadcrumbItem2 = _interopRequireDefault(_breadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_breadcrumbItem2.default.install = function (Vue) {
  Vue.component(_breadcrumbItem2.default.name, _breadcrumbItem2.default);
};

exports.default = _breadcrumbItem2.default;

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_item_vue__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a2d1ded_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_item_vue__ = __webpack_require__(222);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0a2d1ded_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'ElBreadcrumbItem',
  props: {
    to: {},
    replace: Boolean
  },
  data: function data() {
    return {
      separator: '',
      separatorClass: ''
    };
  },


  inject: ['elBreadcrumb'],

  mounted: function mounted() {
    var _this = this;

    this.separator = this.elBreadcrumb.separator;
    this.separatorClass = this.elBreadcrumb.separatorClass;
    var self = this;
    if (this.to) {
      var link = this.$refs.link;
      link.setAttribute('role', 'link');
      link.addEventListener('click', function (_) {
        var to = _this.to;
        self.replace ? self.$router.replace(to) : self.$router.push(to);
      });
    }
  }
};

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"el-breadcrumb__item"},[_c('span',{ref:"link",staticClass:"el-breadcrumb__inner",attrs:{"role":"link"}},[_vm._t("default")],2),(_vm.separatorClass)?_c('i',{staticClass:"el-breadcrumb__separator",class:_vm.separatorClass}):_c('span',{staticClass:"el-breadcrumb__separator",attrs:{"role":"presentation"}},[_vm._v(_vm._s(_vm.separator))])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _form = __webpack_require__(224);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_form2.default.install = function (Vue) {
  Vue.component(_form2.default.name, _form2.default);
};

exports.default = _form2.default;

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_vue__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70576002_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_vue__ = __webpack_require__(226);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_70576002_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//
//

exports.default = {
  name: 'ElForm',

  componentName: 'ElForm',

  provide: function provide() {
    return {
      elForm: this
    };
  },


  props: {
    model: Object,
    rules: Object,
    labelPosition: String,
    labelWidth: String,
    labelSuffix: {
      type: String,
      default: ''
    },
    inline: Boolean,
    inlineMessage: Boolean,
    statusIcon: Boolean,
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  watch: {
    rules: function rules() {
      this.validate();
    }
  },
  data: function data() {
    return {
      fields: []
    };
  },
  created: function created() {
    var _this = this;

    this.$on('el.form.addField', function (field) {
      if (field) {
        _this.fields.push(field);
      }
    });
    /* istanbul ignore next */
    this.$on('el.form.removeField', function (field) {
      if (field.prop) {
        _this.fields.splice(_this.fields.indexOf(field), 1);
      }
    });
  },

  methods: {
    resetFields: function resetFields() {
      if (!this.model) {
        "production" !== 'production' && console.warn('[Element Warn][Form]model is required for resetFields to work.');
        return;
      }
      this.fields.forEach(function (field) {
        field.resetField();
      });
    },
    clearValidate: function clearValidate() {
      this.fields.forEach(function (field) {
        field.clearValidate();
      });
    },
    validate: function validate(callback) {
      var _this2 = this;

      if (!this.model) {
        console.warn('[Element Warn][Form]model is required for validate to work!');
        return;
      }

      var promise = void 0;
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise(function (resolve, reject) {
          callback = function callback(valid) {
            valid ? resolve(valid) : reject(valid);
          };
        });
      }

      var valid = true;
      var count = 0;
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true);
      }
      this.fields.forEach(function (field, index) {
        field.validate('', function (errors) {
          if (errors) {
            valid = false;
          }
          if (typeof callback === 'function' && ++count === _this2.fields.length) {
            callback(valid);
          }
        });
      });

      if (promise) {
        return promise;
      }
    },
    validateField: function validateField(prop, cb) {
      var field = this.fields.filter(function (field) {
        return field.prop === prop;
      })[0];
      if (!field) {
        throw new Error('must call validateField with valid prop string!');
      }

      field.validate('', cb);
    }
  }
};

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"el-form",class:[
  _vm.labelPosition ? 'el-form--label-' + _vm.labelPosition : '',
  { 'el-form--inline': _vm.inline }
]},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _formItem = __webpack_require__(228);

var _formItem2 = _interopRequireDefault(_formItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_formItem2.default.install = function (Vue) {
  Vue.component(_formItem2.default.name, _formItem2.default);
};

exports.default = _formItem2.default;

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_item_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3290eb88_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_item_vue__ = __webpack_require__(231);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_form_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3290eb88_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_form_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _asyncValidator = __webpack_require__(230);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElFormItem',

  componentName: 'ElFormItem',

  mixins: [_emitter2.default],

  provide: function provide() {
    return {
      elFormItem: this
    };
  },


  inject: ['elForm'],

  props: {
    label: String,
    labelWidth: String,
    prop: String,
    required: {
      type: Boolean,
      default: undefined
    },
    rules: [Object, Array],
    error: String,
    validateStatus: String,
    for: String,
    inlineMessage: {
      type: [String, Boolean],
      default: ''
    },
    showMessage: {
      type: Boolean,
      default: true
    },
    size: String
  },
  watch: {
    error: function error(value) {
      this.validateMessage = value;
      this.validateState = value ? 'error' : '';
    },
    validateStatus: function validateStatus(value) {
      this.validateState = value;
    }
  },
  computed: {
    labelFor: function labelFor() {
      return this.for || this.prop;
    },
    labelStyle: function labelStyle() {
      var ret = {};
      if (this.form.labelPosition === 'top') return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.width = labelWidth;
      }
      return ret;
    },
    contentStyle: function contentStyle() {
      var ret = {};
      var label = this.label;
      if (this.form.labelPosition === 'top' || this.form.inline) return ret;
      if (!label && !this.labelWidth && this.isNested) return ret;
      var labelWidth = this.labelWidth || this.form.labelWidth;
      if (labelWidth) {
        ret.marginLeft = labelWidth;
      }
      return ret;
    },
    form: function form() {
      var parent = this.$parent;
      var parentName = parent.$options.componentName;
      while (parentName !== 'ElForm') {
        if (parentName === 'ElFormItem') {
          this.isNested = true;
        }
        parent = parent.$parent;
        parentName = parent.$options.componentName;
      }
      return parent;
    },

    fieldValue: {
      cache: false,
      get: function get() {
        var model = this.form.model;
        if (!model || !this.prop) {
          return;
        }

        var path = this.prop;
        if (path.indexOf(':') !== -1) {
          path = path.replace(/:/, '.');
        }

        return (0, _util.getPropByPath)(model, path, true).v;
      }
    },
    isRequired: function isRequired() {
      var rules = this.getRules();
      var isRequired = false;

      if (rules && rules.length) {
        rules.every(function (rule) {
          if (rule.required) {
            isRequired = true;
            return false;
          }
          return true;
        });
      }
      return isRequired;
    },
    _formSize: function _formSize() {
      return this.elForm.size;
    },
    elFormItemSize: function elFormItemSize() {
      return this.size || this._formSize;
    },
    sizeClass: function sizeClass() {
      return (this.$ELEMENT || {}).size || this.elFormItemSize;
    }
  },
  data: function data() {
    return {
      validateState: '',
      validateMessage: '',
      validateDisabled: false,
      validator: {},
      isNested: false
    };
  },

  methods: {
    validate: function validate(trigger) {
      var _this = this;

      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _util.noop;

      this.validateDisabled = false;
      var rules = this.getFilteredRule(trigger);
      if ((!rules || rules.length === 0) && this.required === undefined) {
        callback();
        return true;
      }

      this.validateState = 'validating';

      var descriptor = {};
      if (rules && rules.length > 0) {
        rules.forEach(function (rule) {
          delete rule.trigger;
        });
      }
      descriptor[this.prop] = rules;

      var validator = new _asyncValidator2.default(descriptor);
      var model = {};

      model[this.prop] = this.fieldValue;

      validator.validate(model, { firstFields: true }, function (errors, fields) {
        if (errors && errors.length > 0) {
          errors.forEach(function (arr, index) {
            if (arr.message.indexOf('is required') != -1) {
              errors[index].message = '不能为空';
            }
          });
        }

        _this.validateState = !errors ? 'success' : 'error';
        _this.validateMessage = errors ? errors[0].message : '';
        callback(_this.validateMessage);
      });
    },
    clearValidate: function clearValidate() {
      this.validateState = '';
      this.validateMessage = '';
      this.validateDisabled = false;
    },
    resetField: function resetField() {
      this.validateState = '';
      this.validateMessage = '';

      var model = this.form.model;
      var value = this.fieldValue;
      var path = this.prop;
      if (path.indexOf(':') !== -1) {
        path = path.replace(/:/, '.');
      }

      var prop = (0, _util.getPropByPath)(model, path, true);

      if (Array.isArray(value)) {
        this.validateDisabled = true;
        prop.o[prop.k] = [].concat(this.initialValue);
      } else {
        this.validateDisabled = true;
        prop.o[prop.k] = this.initialValue;
      }
    },
    getRules: function getRules() {
      var formRules = this.form.rules;
      var selfRules = this.rules;
      var requiredRule = this.required !== undefined ? { required: !!this.required } : [];

      formRules = formRules ? formRules[this.prop] : [];

      return [].concat(selfRules || formRules || []).concat(requiredRule);
    },
    getFilteredRule: function getFilteredRule(trigger) {
      var rules = this.getRules();

      return rules.filter(function (rule) {
        return !rule.trigger || rule.trigger.indexOf(trigger) !== -1;
      });
    },
    onFieldBlur: function onFieldBlur() {
      this.validate('blur');
    },
    onFieldChange: function onFieldChange() {
      if (this.validateDisabled) {
        this.validateDisabled = false;
        return;
      }
      this.validate('change');
    }
  },
  mounted: function mounted() {
    if (this.prop) {
      this.dispatch('ElForm', 'el.form.addField', [this]);

      var initialValue = this.fieldValue;
      if (Array.isArray(initialValue)) {
        initialValue = [].concat(initialValue);
      }
      Object.defineProperty(this, 'initialValue', {
        value: initialValue
      });

      var rules = this.getRules();

      if (rules.length || this.required !== undefined) {
        this.$on('el.form.blur', this.onFieldBlur);
        this.$on('el.form.change', this.onFieldChange);
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.dispatch('ElForm', 'el.form.removeField', [this]);
  }
}; //
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

//增加错误字段名

/***/ }),
/* 230 */
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-form-item",class:[{
    'el-form-item--feedback': _vm.elForm && _vm.elForm.statusIcon,
    'is-error': _vm.validateState === 'error',
    'is-validating': _vm.validateState === 'validating',
    'is-success': _vm.validateState === 'success',
    'is-required': _vm.isRequired || _vm.required
  },
  _vm.sizeClass ? 'el-form-item--' + _vm.sizeClass : ''
]},[(_vm.label || _vm.$slots.label)?_c('label',{staticClass:"el-form-item__label",style:(_vm.labelStyle),attrs:{"for":_vm.labelFor}},[_vm._t("label",[_vm._v(_vm._s(_vm.label + _vm.form.labelSuffix))])],2):_vm._e(),_c('div',{staticClass:"el-form-item__content",style:(_vm.contentStyle)},[_vm._t("default"),_c('transition',{attrs:{"name":"el-zoom-in-top"}},[(_vm.validateState === 'error' && _vm.showMessage && _vm.form.showMessage)?_c('div',{staticClass:"el-form-item__error",class:{
          'el-form-item__error--inline': typeof _vm.inlineMessage === 'boolean'
            ? _vm.inlineMessage
            : (_vm.elForm && _vm.elForm.inlineMessage || false)
        }},[_vm._v("\n        "+_vm._s(_vm.label+_vm.validateMessage)+"\n      ")]):_vm._e()])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tabs = __webpack_require__(233);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tabs2.default.install = function (Vue) {
  Vue.component(_tabs2.default.name, _tabs2.default);
};

exports.default = _tabs2.default;

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tabNav = __webpack_require__(235);

var _tabNav2 = _interopRequireDefault(_tabNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTabs',

  components: {
    TabNav: _tabNav2.default
  },

  props: {
    type: String,
    activeName: String,
    closable: Boolean,
    addable: Boolean,
    value: {},
    editable: Boolean,
    tabPosition: {
      type: String,
      default: 'top'
    }
  },

  provide: function provide() {
    return {
      rootTabs: this
    };
  },
  data: function data() {
    return {
      currentName: this.value || this.activeName,
      panes: []
    };
  },


  watch: {
    activeName: function activeName(value) {
      this.setCurrentName(value);
    },
    value: function value(_value) {
      this.setCurrentName(_value);
    },
    currentName: function currentName(value) {
      var _this = this;

      if (this.$refs.nav) {
        this.$nextTick(function (_) {
          _this.$refs.nav.scrollToActiveTab();
        });
      }
    }
  },

  methods: {
    handleTabClick: function handleTabClick(tab, tabName, event) {
      if (tab.disabled) return;
      this.setCurrentName(tabName);
      this.$emit('tab-click', tab, event);
    },
    handleTabRemove: function handleTabRemove(pane, ev) {
      if (pane.disabled) return;
      ev.stopPropagation();
      this.$emit('edit', pane.name, 'remove');
      this.$emit('tab-remove', pane.name);
    },
    handleTabAdd: function handleTabAdd() {
      this.$emit('edit', null, 'add');
      this.$emit('tab-add');
    },
    setCurrentName: function setCurrentName(value) {
      this.currentName = value;
      this.$emit('input', value);
    },
    addPanes: function addPanes(item) {
      var index = this.$slots.default.filter(function (item) {
        return item.elm.nodeType === 1 && /\bel-tab-pane\b/.test(item.elm.className);
      }).indexOf(item.$vnode);
      this.panes.splice(index, 0, item);
    },
    removePanes: function removePanes(item) {
      var panes = this.panes;
      var index = panes.indexOf(item);
      if (index > -1) {
        panes.splice(index, 1);
      }
    }
  },
  render: function render(h) {
    var _ref;

    var type = this.type,
        handleTabClick = this.handleTabClick,
        handleTabRemove = this.handleTabRemove,
        handleTabAdd = this.handleTabAdd,
        currentName = this.currentName,
        panes = this.panes,
        editable = this.editable,
        addable = this.addable,
        tabPosition = this.tabPosition;


    var newButton = editable || addable ? h(
      'span',
      {
        'class': 'el-tabs__new-tab',
        on: {
          'click': handleTabAdd,
          'keydown': function keydown(ev) {
            if (ev.keyCode === 13) {
              handleTabAdd();
            }
          }
        },
        attrs: {
          tabindex: '0'
        }
      },
      [h(
        'i',
        { 'class': 'el-icon-plus' },
        []
      )]
    ) : null;

    var navData = {
      props: {
        currentName: currentName,
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove,
        editable: editable,
        type: type,
        panes: panes
      },
      ref: 'nav'
    };
    var header = h(
      'div',
      { 'class': 'el-tabs__header' },
      [newButton, h(
        'tab-nav',
        navData,
        []
      )]
    );
    var panels = h(
      'div',
      { 'class': 'el-tabs__content' },
      [this.$slots.default]
    );

    return h(
      'div',
      { 'class': (_ref = {
          'el-tabs': true,
          'el-tabs--card': type === 'card'
        }, _ref['el-tabs--' + tabPosition] = true, _ref['el-tabs--border-card'] = type === 'border-card', _ref) },
      [tabPosition !== 'bottom' ? [header, panels] : [panels, header]]
    );
  },
  created: function created() {
    if (!this.currentName) {
      this.setCurrentName('0');
    }
  }
};

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_nav_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_nav_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_nav_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_nav_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tabBar = __webpack_require__(237);

var _tabBar2 = _interopRequireDefault(_tabBar);

var _resizeEvent = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}
var firstUpperCase = function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
    return L.toUpperCase();
  });
};

exports.default = {
  name: 'TabNav',

  components: {
    TabBar: _tabBar2.default
  },

  inject: ['rootTabs'],

  props: {
    panes: Array,
    currentName: String,
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: noop
    },
    onTabRemove: {
      type: Function,
      default: noop
    },
    type: String
  },

  data: function data() {
    return {
      scrollable: false,
      navOffset: 0,
      isFocus: false
    };
  },


  computed: {
    navStyle: function navStyle() {
      var dir = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'X' : 'Y';
      return {
        transform: 'translate' + dir + '(-' + this.navOffset + 'px)'
      };
    },
    sizeName: function sizeName() {
      return ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
    }
  },

  methods: {
    scrollPrev: function scrollPrev() {
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (!currentOffset) return;

      var newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;

      this.navOffset = newOffset;
    },
    scrollNext: function scrollNext() {
      var navSize = this.$refs.nav['offset' + firstUpperCase(this.sizeName)];
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(this.sizeName)];
      var currentOffset = this.navOffset;

      if (navSize - currentOffset <= containerSize) return;

      var newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;

      this.navOffset = newOffset;
    },
    scrollToActiveTab: function scrollToActiveTab() {
      if (!this.scrollable) return;
      var nav = this.$refs.nav;
      var activeTab = this.$el.querySelector('.is-active');
      var navScroll = this.$refs.navScroll;
      var activeTabBounding = activeTab.getBoundingClientRect();
      var navScrollBounding = navScroll.getBoundingClientRect();
      var navBounding = nav.getBoundingClientRect();
      var currentOffset = this.navOffset;
      var newOffset = currentOffset;

      if (activeTabBounding.left < navScrollBounding.left) {
        newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
      }
      if (activeTabBounding.right > navScrollBounding.right) {
        newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
      }
      if (navBounding.right < navScrollBounding.right) {
        newOffset = nav.offsetWidth - navScrollBounding.width;
      }
      this.navOffset = Math.max(newOffset, 0);
    },
    update: function update() {
      if (!this.$refs.nav) return;
      var sizeName = this.sizeName;
      var navSize = this.$refs.nav['offset' + firstUpperCase(sizeName)];
      var containerSize = this.$refs.navScroll['offset' + firstUpperCase(sizeName)];
      var currentOffset = this.navOffset;

      if (containerSize < navSize) {
        var _currentOffset = this.navOffset;
        this.scrollable = this.scrollable || {};
        this.scrollable.prev = _currentOffset;
        this.scrollable.next = _currentOffset + containerSize < navSize;
        if (navSize - _currentOffset < containerSize) {
          this.navOffset = navSize - containerSize;
        }
      } else {
        this.scrollable = false;
        if (currentOffset > 0) {
          this.navOffset = 0;
        }
      }
    },
    changeTab: function changeTab(e) {
      var keyCode = e.keyCode;
      var nextIndex = void 0;
      var currentIndex = void 0,
          tabList = void 0;
      if ([37, 38, 39, 40].indexOf(keyCode) !== -1) {
        // 左右上下键更换tab
        tabList = e.currentTarget.querySelectorAll('[role=tab]');
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }
      if (keyCode === 37 || keyCode === 38) {
        // left
        if (currentIndex === 0) {
          // first
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        // right
        if (currentIndex < tabList.length - 1) {
          // not last
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus(); // 改变焦点元素
      tabList[nextIndex].click(); // 选中下一个tab
    },
    setFocus: function setFocus() {
      this.isFocus = true;
    },
    removeFocus: function removeFocus() {
      this.isFocus = false;
    }
  },

  updated: function updated() {
    this.update();
  },
  render: function render(h) {
    var _this = this;

    var type = this.type,
        panes = this.panes,
        editable = this.editable,
        onTabClick = this.onTabClick,
        onTabRemove = this.onTabRemove,
        navStyle = this.navStyle,
        scrollable = this.scrollable,
        scrollNext = this.scrollNext,
        scrollPrev = this.scrollPrev,
        changeTab = this.changeTab,
        setFocus = this.setFocus,
        removeFocus = this.removeFocus;

    var scrollBtn = scrollable ? [h(
      'span',
      { 'class': ['el-tabs__nav-prev', scrollable.prev ? '' : 'is-disabled'], on: {
          'click': scrollPrev
        }
      },
      [h(
        'i',
        { 'class': 'el-icon-arrow-left' },
        []
      )]
    ), h(
      'span',
      { 'class': ['el-tabs__nav-next', scrollable.next ? '' : 'is-disabled'], on: {
          'click': scrollNext
        }
      },
      [h(
        'i',
        { 'class': 'el-icon-arrow-right' },
        []
      )]
    )] : null;

    var tabs = this._l(panes, function (pane, index) {
      var tabName = pane.name || pane.index || index;
      var closable = pane.isClosable || editable;

      pane.index = '' + index;

      var btnClose = closable ? h(
        'span',
        { 'class': 'el-icon-close', on: {
            'click': function click(ev) {
              onTabRemove(pane, ev);
            }
          }
        },
        []
      ) : null;

      var tabLabelContent = pane.$slots.label || pane.label;
      var tabindex = pane.active ? 0 : -1;
      return h(
        'div',
        {
          'class': {
            'el-tabs__item': true,
            'is-active': pane.active,
            'is-disabled': pane.disabled,
            'is-closable': closable,
            'is-focus': _this.isFocus
          },
          attrs: { id: 'tab-' + tabName,
            'aria-controls': 'pane-' + tabName,
            role: 'tab',
            'aria-selected': pane.active,

            tabindex: tabindex
          },
          ref: 'tabs', refInFor: true,
          on: {
            'focus': function focus() {
              setFocus();
            },
            'blur': function blur() {
              removeFocus();
            },
            'click': function click(ev) {
              removeFocus();onTabClick(pane, tabName, ev);
            },
            'keydown': function keydown(ev) {
              if (closable && (ev.keyCode === 46 || ev.keyCode === 8)) {
                onTabRemove(pane, ev);
              }
            }
          }
        },
        [tabLabelContent, btnClose]
      );
    });
    return h(
      'div',
      { 'class': ['el-tabs__nav-wrap', scrollable ? 'is-scrollable' : ''] },
      [scrollBtn, h(
        'div',
        { 'class': ['el-tabs__nav-scroll'], ref: 'navScroll' },
        [h(
          'div',
          { 'class': 'el-tabs__nav', ref: 'nav', style: navStyle, attrs: { role: 'tablist' },
            on: {
              'keydown': changeTab
            }
          },
          [!type ? h(
            'tab-bar',
            {
              attrs: { tabs: panes }
            },
            []
          ) : null, tabs]
        )]
      )]
    );
  },
  mounted: function mounted() {
    (0, _resizeEvent.addResizeListener)(this.$el, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el && this.update) (0, _resizeEvent.removeResizeListener)(this.$el, this.update);
  }
};

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_bar_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_bar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67669d00_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_bar_vue__ = __webpack_require__(239);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_bar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_67669d00_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//

exports.default = {
  name: 'TabBar',

  props: {
    tabs: Array
  },

  inject: ['rootTabs'],

  computed: {
    barStyle: {
      cache: false,
      get: function get() {
        var _this = this;

        if (!this.$parent.$refs.tabs) return {};
        var style = {};
        var offset = 0;
        var tabSize = 0;
        var sizeName = ['top', 'bottom'].indexOf(this.rootTabs.tabPosition) !== -1 ? 'width' : 'height';
        var sizeDir = sizeName === 'width' ? 'x' : 'y';
        var firstUpperCase = function firstUpperCase(str) {
          return str.toLowerCase().replace(/( |^)[a-z]/g, function (L) {
            return L.toUpperCase();
          });
        };
        this.tabs.every(function (tab, index) {
          var $el = _this.$parent.$refs.tabs[index];
          if (!$el) {
            return false;
          }

          if (!tab.active) {
            offset += $el['client' + firstUpperCase(sizeName)];
            return true;
          } else {
            tabSize = $el['client' + firstUpperCase(sizeName)];
            if (sizeName === 'width') {
              tabSize -= index === 0 ? 20 : 40;
            }
            return false;
          }
        });

        if (sizeName === 'width' && offset !== 0) {
          offset += 20;
        }
        var transform = 'translate' + firstUpperCase(sizeDir) + '(' + offset + 'px)';
        style[sizeName] = tabSize + 'px';
        style.transform = transform;
        style.msTransform = transform;
        style.webkitTransform = transform;

        return style;
      }
    }
  }
};

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-tabs__active-bar",style:(_vm.barStyle)})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tabPane = __webpack_require__(241);

var _tabPane2 = _interopRequireDefault(_tabPane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tabPane2.default.install = function (Vue) {
  Vue.component(_tabPane2.default.name, _tabPane2.default);
};

exports.default = _tabPane2.default;

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_pane_vue__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_pane_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_pane_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f6493e0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_pane_vue__ = __webpack_require__(243);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tab_pane_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6f6493e0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tab_pane_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElTabPane',

  componentName: 'ElTabPane',

  props: {
    label: String,
    labelContent: Function,
    name: String,
    closable: Boolean,
    disabled: Boolean
  },

  data: function data() {
    return {
      index: null
    };
  },


  computed: {
    isClosable: function isClosable() {
      return this.closable || this.$parent.closable;
    },
    active: function active() {
      return this.$parent.currentName === (this.name || this.index);
    },
    paneName: function paneName() {
      return this.name || this.index;
    }
  },

  mounted: function mounted() {
    this.$parent.addPanes(this);
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removePanes(this);
  },


  watch: {
    label: function label() {
      this.$parent.$forceUpdate();
    }
  }
};

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"el-tab-pane",attrs:{"role":"tabpanel","aria-hidden":!_vm.active,"id":("pane-" + _vm.paneName),"aria-labelledby":("tab-" + _vm.paneName)}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tag = __webpack_require__(245);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tag2.default.install = function (Vue) {
  Vue.component(_tag2.default.name, _tag2.default);
};

exports.default = _tag2.default;

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_vue__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c19538f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tag_vue__ = __webpack_require__(247);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tag_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7c19538f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tag_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElTag',
  props: {
    text: String,
    closable: Boolean,
    type: String,
    hit: Boolean,
    disableTransitions: Boolean,
    color: String,
    size: String
  },
  methods: {
    handleClose: function handleClose(event) {
      this.$emit('close', event);
    }
  },
  computed: {
    tagSize: function tagSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  }
};

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":_vm.disableTransitions ? '' : 'el-zoom-in-center'}},[_c('span',{staticClass:"el-tag",class:[
      _vm.type ? 'el-tag--' + _vm.type : '',
      _vm.tagSize && ("el-tag--" + _vm.tagSize),
      {'is-hit': _vm.hit}
    ],style:({backgroundColor: _vm.color})},[_vm._t("default"),(_vm.closable)?_c('i',{staticClass:"el-tag__close el-icon-close",on:{"click":function($event){$event.stopPropagation();_vm.handleClose($event)}}}):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tree = __webpack_require__(249);

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_tree2.default.install = function (Vue) {
  Vue.component(_tree2.default.name, _tree2.default);
};

exports.default = _tree2.default;

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_633bb64f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__(256);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_633bb64f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _treeStore = __webpack_require__(251);

var _treeStore2 = _interopRequireDefault(_treeStore);

var _treeNode = __webpack_require__(253);

var _treeNode2 = _interopRequireDefault(_treeNode);

var _locale = __webpack_require__(15);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElTree',

  mixins: [_emitter2.default],

  components: {
    ElTreeNode: _treeNode2.default
  },

  data: function data() {
    return {
      store: null,
      root: null,
      currentNode: null,
      treeItems: null,
      checkboxItems: []
    };
  },


  props: {
    data: {
      type: Array
    },
    emptyText: {
      type: String,
      default: function _default() {
        return (0, _locale.t)('el.tree.emptyText');
      }
    },
    nodeKey: String,
    checkStrictly: Boolean,
    defaultExpandAll: Boolean,
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    checkDescendants: {
      type: Boolean,
      default: false
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    defaultCheckedKeys: Array,
    defaultExpandedKeys: Array,
    renderContent: Function,
    showCheckbox: {
      type: Boolean,
      default: false
    },
    props: {
      default: function _default() {
        return {
          children: 'children',
          label: 'label',
          icon: 'icon',
          disabled: 'disabled'
        };
      }
    },
    lazy: {
      type: Boolean,
      default: false
    },
    highlightCurrent: Boolean,
    load: Function,
    filterNodeMethod: Function,
    accordion: Boolean,
    indent: {
      type: Number,
      default: 18
    }
  },

  computed: {
    children: {
      set: function set(value) {
        this.data = value;
      },
      get: function get() {
        return this.data;
      }
    },
    treeItemArray: function treeItemArray() {
      return Array.prototype.slice.call(this.treeItems);
    }
  },

  watch: {
    defaultCheckedKeys: function defaultCheckedKeys(newVal) {
      this.store.defaultCheckedKeys = newVal;
      this.store.setDefaultCheckedKey(newVal);
    },
    defaultExpandedKeys: function defaultExpandedKeys(newVal) {
      this.store.defaultExpandedKeys = newVal;
      this.store.setDefaultExpandedKeys(newVal);
    },
    data: function data(newVal) {
      this.store.setData(newVal);
    },
    checkboxItems: function checkboxItems(val) {
      Array.prototype.forEach.call(val, function (checkbox) {
        checkbox.setAttribute('tabindex', -1);
      });
    }
  },

  methods: {
    filter: function filter(value) {
      if (!this.filterNodeMethod) throw new Error('[Tree] filterNodeMethod is required when filter');
      this.store.filter(value);
    },
    getNodeKey: function getNodeKey(node, index) {
      var nodeKey = this.nodeKey;
      if (nodeKey && node) {
        return node.data[nodeKey];
      }
      return index;
    },
    getCheckedNodes: function getCheckedNodes(leafOnly) {
      return this.store.getCheckedNodes(leafOnly);
    },
    getAllCheckedNodes: function getAllCheckedNodes() {
      return this.store.getAllCheckedNodes();
    },
    getAllCheckedKeys: function getAllCheckedKeys() {
      return this.store.getAllCheckedKeys();
    },
    getCheckedKeys: function getCheckedKeys(leafOnly) {
      return this.store.getCheckedKeys(leafOnly);
    },
    getCurrentNodePro: function getCurrentNodePro() {
      var currentNode = this.store.getCurrentNode();
      return currentNode ? currentNode : null;
    },
    getCurrentNode: function getCurrentNode() {
      var currentNode = this.store.getCurrentNode();
      return currentNode ? currentNode.data : null;
    },
    getCurrentKey: function getCurrentKey() {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in getCurrentKey');
      var currentNode = this.getCurrentNode();
      return currentNode ? currentNode[this.nodeKey] : null;
    },
    setCheckedNodes: function setCheckedNodes(nodes, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedNodes');
      this.store.setCheckedNodes(nodes, leafOnly);
    },
    setCheckedKeys: function setCheckedKeys(keys, leafOnly) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCheckedKeys');
      this.store.setCheckedKeys(keys, leafOnly);
    },
    setChecked: function setChecked(data, checked, deep) {
      this.store.setChecked(data, checked, deep);
    },
    setCurrentNode: function setCurrentNode(node) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentNode');
      this.store.setUserCurrentNode(node);
    },
    setCurrentKey: function setCurrentKey(key) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in setCurrentKey');
      this.store.setCurrentNodeKey(key);
    },
    handleNodeExpand: function handleNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.$emit('node-expand', nodeData, node, instance);
    },
    updateKeyChildren: function updateKeyChildren(key, data) {
      if (!this.nodeKey) throw new Error('[Tree] nodeKey is required in updateKeyChild');
      this.store.updateChildren(key, data);
    },
    initTabindex: function initTabindex() {
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
      var checkedItem = this.$el.querySelectorAll('.is-checked[role=treeitem]');
      if (checkedItem.length) {
        checkedItem[0].setAttribute('tabindex', 0);
        return;
      }
      this.treeItems[0] && this.treeItems[0].setAttribute('tabindex', 0);
    },
    handelKeydown: function handelKeydown(ev) {
      var currentItem = ev.target;
      if (currentItem.className.indexOf('el-tree-node') === -1) return;
      ev.preventDefault();
      var keyCode = ev.keyCode;
      this.treeItems = this.$el.querySelectorAll('.is-focusable[role=treeitem]');
      var currentIndex = this.treeItemArray.indexOf(currentItem);
      var nextIndex = void 0;
      if ([38, 40].indexOf(keyCode) > -1) {
        // up、down
        if (keyCode === 38) {
          // up
          nextIndex = currentIndex !== 0 ? currentIndex - 1 : 0;
        } else {
          nextIndex = currentIndex < this.treeItemArray.length - 1 ? currentIndex + 1 : 0;
        }
        this.treeItemArray[nextIndex].focus(); // 选中
      }
      var hasInput = currentItem.querySelector('[type="checkbox"]');
      if ([37, 39].indexOf(keyCode) > -1) {
        // left、right 展开
        currentItem.click(); // 选中
      }
      if ([13, 32].indexOf(keyCode) > -1) {
        // space enter选中checkbox
        if (hasInput) {
          hasInput.click();
        }
      }
    }
  },

  created: function created() {
    this.isTree = true;

    this.store = new _treeStore2.default({
      key: this.nodeKey,
      data: this.data,
      lazy: this.lazy,
      props: this.props,
      load: this.load,
      currentNodeKey: this.currentNodeKey,
      checkStrictly: this.checkStrictly,
      checkDescendants: this.checkDescendants,
      defaultCheckedKeys: this.defaultCheckedKeys,
      defaultExpandedKeys: this.defaultExpandedKeys,
      autoExpandParent: this.autoExpandParent,
      defaultExpandAll: this.defaultExpandAll,
      filterNodeMethod: this.filterNodeMethod
    });

    this.root = this.store.root;
  },
  mounted: function mounted() {
    this.initTabindex();
    this.$el.addEventListener('keydown', this.handelKeydown);
  },
  updated: function updated() {
    this.treeItems = this.$el.querySelectorAll('[role=treeitem]');
    this.checkboxItems = this.$el.querySelectorAll('input[type=checkbox]');
  }
};

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _node = __webpack_require__(252);

var _node2 = _interopRequireDefault(_node);

var _util = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TreeStore = function () {
  function TreeStore(options) {
    var _this = this;

    _classCallCheck(this, TreeStore);

    this.currentNode = null;
    this.currentNodeKey = null;

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.nodesMap = {};

    this.root = new _node2.default({
      data: this.data,
      store: this
    });

    if (this.lazy && this.load) {
      var loadFn = this.load;
      loadFn(this.root, function (data) {
        _this.root.doCreateChildren(data);
        _this._initDefaultCheckedNodes();
      });
    } else {
      this._initDefaultCheckedNodes();
    }
  }

  TreeStore.prototype.filter = function filter(value) {
    var filterNodeMethod = this.filterNodeMethod;
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        child.visible = filterNodeMethod.call(child, value, child.data, child);

        traverse(child);
      });

      if (!node.visible && childNodes.length) {
        var allHidden = true;

        childNodes.forEach(function (child) {
          if (child.visible) allHidden = false;
        });

        if (node.root) {
          node.root.visible = allHidden === false;
        } else {
          node.visible = allHidden === false;
        }
      }
      if (!value) return;

      if (node.visible && !node.isLeaf) node.expand();
    };

    traverse(this);
  };

  TreeStore.prototype.setData = function setData(newVal) {
    var instanceChanged = newVal !== this.root.data;
    this.root.setData(newVal);
    if (instanceChanged) {
      this._initDefaultCheckedNodes();
    }
  };

  TreeStore.prototype.getNode = function getNode(data) {
    var key = (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' ? data : (0, _util.getNodeKey)(this.key, data);
    return this.nodesMap[key];
  };

  TreeStore.prototype.insertBefore = function insertBefore(data, refData) {
    var refNode = this.getNode(refData);
    refNode.parent.insertBefore({ data: data }, refNode);
  };

  TreeStore.prototype.insertAfter = function insertAfter(data, refData) {
    var refNode = this.getNode(refData);
    refNode.parent.insertAfter({ data: data }, refNode);
  };

  TreeStore.prototype.remove = function remove(data) {
    var node = this.getNode(data);
    if (node) {
      node.parent.removeChild(node);
    }
  };

  TreeStore.prototype.append = function append(data, parentData) {
    var parentNode = parentData ? this.getNode(parentData) : this.root;

    if (parentNode) {
      parentNode.insertChild({ data: data });
    }
  };

  TreeStore.prototype._initDefaultCheckedNodes = function _initDefaultCheckedNodes() {
    var _this2 = this;

    var defaultCheckedKeys = this.defaultCheckedKeys || [];
    var nodesMap = this.nodesMap;

    defaultCheckedKeys.forEach(function (checkedKey) {
      var node = nodesMap[checkedKey];

      if (node) {
        node.setChecked(true, !_this2.checkStrictly);
      }
    });
  };

  TreeStore.prototype._initDefaultCheckedNode = function _initDefaultCheckedNode(node) {
    var defaultCheckedKeys = this.defaultCheckedKeys || [];

    if (defaultCheckedKeys.indexOf(node.key) !== -1) {
      node.setChecked(true, !this.checkStrictly);
    }
  };

  TreeStore.prototype.setDefaultCheckedKey = function setDefaultCheckedKey(newVal) {
    if (newVal !== this.defaultCheckedKeys) {
      this.defaultCheckedKeys = newVal;
      this._initDefaultCheckedNodes();
    }
  };

  TreeStore.prototype.registerNode = function registerNode(node) {
    var key = this.key;
    if (!key || !node || !node.data) return;

    var nodeKey = node.key;
    if (nodeKey !== undefined) this.nodesMap[node.key] = node;
  };

  TreeStore.prototype.deregisterNode = function deregisterNode(node) {
    var key = this.key;
    if (!key || !node || !node.data) return;

    var childNodes = node.childNodes;
    for (var i = 0, j = childNodes.length; i < j; i++) {
      var child = childNodes[i];
      this.deregisterNode(child);
    }

    delete this.nodesMap[node.key];
  };

  TreeStore.prototype.getCheckedNodes = function getCheckedNodes() {
    var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var checkedNodes = [];
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        if (!leafOnly && child.checked || leafOnly && child.isLeaf && child.checked) {
          checkedNodes.push(child.data);
        }

        traverse(child);
      });
    };

    traverse(this);

    return checkedNodes;
  };

  TreeStore.prototype.getAllCheckedNodes = function getAllCheckedNodes() {
    var checkedNodes = [];
    var traverse = function traverse(node) {
      var childNodes = node.root ? node.root.childNodes : node.childNodes;

      childNodes.forEach(function (child) {
        if (child.checked || child.indeterminate) {
          checkedNodes.push(child.data);
        }

        traverse(child);
      });
    };

    traverse(this);

    return checkedNodes;
  };

  TreeStore.prototype.getAllCheckedKeys = function getAllCheckedKeys() {
    var key = this.key;
    var allNodes = this._getAllNodes();
    var keys = [];
    allNodes.forEach(function (node) {
      if (node.checked || node.indeterminate) {
        debugger;
        keys.push((node.data || {})[key]);
      }
    });
    return keys;
  };

  TreeStore.prototype.getCheckedKeys = function getCheckedKeys() {
    var leafOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var key = this.key;
    var allNodes = this._getAllNodes();
    var keys = [];
    allNodes.forEach(function (node) {
      if (!leafOnly || leafOnly && node.isLeaf) {
        if (node.checked) {
          keys.push((node.data || {})[key]);
        }
      }
    });
    return keys;
  };

  TreeStore.prototype._getAllNodes = function _getAllNodes() {
    var allNodes = [];
    var nodesMap = this.nodesMap;
    for (var nodeKey in nodesMap) {
      if (nodesMap.hasOwnProperty(nodeKey)) {
        allNodes.push(nodesMap[nodeKey]);
      }
    }

    return allNodes;
  };

  TreeStore.prototype.updateChildren = function updateChildren(key, data) {
    var node = this.nodesMap[key];
    if (!node) return;
    var childNodes = node.childNodes;
    for (var i = childNodes.length - 1; i >= 0; i--) {
      var child = childNodes[i];
      this.remove(child.data);
    }
    for (var _i = 0, j = data.length; _i < j; _i++) {
      var _child = data[_i];
      this.append(_child, node.data);
    }
  };

  TreeStore.prototype._setCheckedKeys = function _setCheckedKeys(key) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var checkedKeys = arguments[2];

    var allNodes = this._getAllNodes().sort(function (a, b) {
      return b.level - a.level;
    });
    var cache = Object.create(null);
    var keys = Object.keys(checkedKeys);
    allNodes.forEach(function (node) {
      return node.setChecked(false, false);
    });
    for (var i = 0, j = allNodes.length; i < j; i++) {
      var node = allNodes[i];
      var nodeKey = node.data[key].toString();
      var checked = keys.indexOf(nodeKey) > -1;
      if (!checked) {
        if (node.checked && !cache[nodeKey]) {
          node.setChecked(false, false);
        }
        continue;
      }

      var parent = node.parent;
      while (parent && parent.level > 0) {
        cache[parent.data[key]] = true;
        parent = parent.parent;
      }

      if (node.isLeaf || this.checkStrictly) {
        node.setChecked(true, false);
        continue;
      }
      node.setChecked(true, true);

      if (leafOnly) {
        (function () {
          node.setChecked(false, false);
          var traverse = function traverse(node) {
            var childNodes = node.childNodes;
            childNodes.forEach(function (child) {
              if (!child.isLeaf) {
                child.setChecked(false, false);
              }
              traverse(child);
            });
          };
          traverse(node);
        })();
      }
    }
  };

  TreeStore.prototype.setCheckedNodes = function setCheckedNodes(array) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var key = this.key;
    var checkedKeys = {};
    array.forEach(function (item) {
      checkedKeys[(item || {})[key]] = true;
    });

    this._setCheckedKeys(key, leafOnly, checkedKeys);
  };

  TreeStore.prototype.setCheckedKeys = function setCheckedKeys(keys) {
    var leafOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    this.defaultCheckedKeys = keys;
    var key = this.key;
    var checkedKeys = {};
    keys.forEach(function (key) {
      checkedKeys[key] = true;
    });

    this._setCheckedKeys(key, leafOnly, checkedKeys);
  };

  TreeStore.prototype.setDefaultExpandedKeys = function setDefaultExpandedKeys(keys) {
    var _this3 = this;

    keys = keys || [];
    this.defaultExpandedKeys = keys;

    keys.forEach(function (key) {
      var node = _this3.getNode(key);
      if (node) node.expand(null, _this3.autoExpandParent);
    });
  };

  TreeStore.prototype.setChecked = function setChecked(data, checked, deep) {
    var node = this.getNode(data);

    if (node) {
      node.setChecked(!!checked, deep);
    }
  };

  TreeStore.prototype.getCurrentNode = function getCurrentNode() {
    console.log(this.currentNode);
    return this.currentNode;
  };

  TreeStore.prototype.setCurrentNode = function setCurrentNode(node) {
    this.currentNode = node;
  };

  TreeStore.prototype.setUserCurrentNode = function setUserCurrentNode(node) {
    var key = node[this.key];
    var currNode = this.nodesMap[key];
    this.setCurrentNode(currNode);
  };

  TreeStore.prototype.setCurrentNodeKey = function setCurrentNodeKey(key) {
    var node = this.getNode(key);
    if (node) {
      this.currentNode = node;
    }
  };

  return TreeStore;
}();

exports.default = TreeStore;
;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

var _util = __webpack_require__(38);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var getChildState = exports.getChildState = function getChildState(node) {
  var all = true;
  var none = true;
  var allWithoutDisable = true;
  for (var i = 0, j = node.length; i < j; i++) {
    var n = node[i];
    if (n.checked !== true || n.indeterminate) {
      all = false;
      if (!n.disabled) {
        allWithoutDisable = false;
      }
    }
    if (n.checked !== false || n.indeterminate) {
      none = false;
    }
  }

  return { all: all, none: none, allWithoutDisable: allWithoutDisable, half: !all && !none };
};

var reInitChecked = function reInitChecked(node) {
  if (node.childNodes.length === 0) return;

  var _getChildState = getChildState(node.childNodes),
      all = _getChildState.all,
      none = _getChildState.none,
      half = _getChildState.half;

  if (all) {
    node.checked = true;
    node.indeterminate = false;
  } else if (half) {
    node.checked = false;
    node.indeterminate = true;
  } else if (none) {
    node.checked = false;
    node.indeterminate = false;
  }

  var parent = node.parent;
  if (!parent || parent.level === 0) return;

  if (!node.store.checkStrictly) {
    reInitChecked(parent);
  }
};

var getPropertyFromData = function getPropertyFromData(node, prop) {
  var props = node.store.props;
  var data = node.data || {};
  var config = props[prop];

  if (typeof config === 'function') {
    return config(data, node);
  } else if (typeof config === 'string') {
    return data[config];
  } else if (typeof config === 'undefined') {
    var dataProp = data[prop];
    return dataProp === undefined ? '' : dataProp;
  }
};

var nodeIdSeed = 0;

var Node = function () {
  function Node(options) {
    _classCallCheck(this, Node);

    this.id = nodeIdSeed++;
    this.text = null;
    this.checked = false;
    this.indeterminate = false;
    this.data = null;
    this.expanded = false;
    this.parent = null;
    this.visible = true;

    for (var name in options) {
      if (options.hasOwnProperty(name)) {
        this[name] = options[name];
      }
    }

    // internal
    this.level = 0;
    this.loaded = false;
    this.childNodes = [];
    this.loading = false;

    if (this.parent) {
      this.level = this.parent.level + 1;
    }

    var store = this.store;
    if (!store) {
      throw new Error('[Node]store is required!');
    }
    store.registerNode(this);

    var props = store.props;
    if (props && typeof props.isLeaf !== 'undefined') {
      var isLeaf = getPropertyFromData(this, 'isLeaf');
      if (typeof isLeaf === 'boolean') {
        this.isLeafByUser = isLeaf;
      }
    }

    if (store.lazy !== true && this.data) {
      this.setData(this.data);

      if (store.defaultExpandAll) {
        this.expanded = true;
      }
    } else if (this.level > 0 && store.lazy && store.defaultExpandAll) {
      this.expand();
    }

    if (!this.data) return;
    var defaultExpandedKeys = store.defaultExpandedKeys;
    var key = store.key;
    if (key && defaultExpandedKeys && defaultExpandedKeys.indexOf(this.key) !== -1) {
      this.expand(null, store.autoExpandParent);
    }

    if (key && store.currentNodeKey !== undefined && this.key === store.currentNodeKey) {
      store.currentNode = this;
    }

    if (store.lazy) {
      store._initDefaultCheckedNode(this);
    }

    this.updateLeafState();
  }

  Node.prototype.setData = function setData(data) {
    if (!Array.isArray(data)) {
      (0, _util.markNodeData)(this, data);
    }

    this.data = data;
    this.childNodes = [];

    var children = void 0;
    if (this.level === 0 && this.data instanceof Array) {
      children = this.data;
    } else {
      children = getPropertyFromData(this, 'children') || [];
    }

    for (var i = 0, j = children.length; i < j; i++) {
      this.insertChild({ data: children[i] });
    }
  };

  Node.prototype.insertChild = function insertChild(child, index) {
    if (!child) throw new Error('insertChild error: child is required.');

    if (!(child instanceof Node)) {
      (0, _merge2.default)(child, {
        parent: this,
        store: this.store
      });
      child = new Node(child);
    }

    child.level = this.level + 1;

    if (typeof index === 'undefined' || index < 0) {
      this.childNodes.push(child);
    } else {
      this.childNodes.splice(index, 0, child);
    }

    this.updateLeafState();
  };

  Node.prototype.insertBefore = function insertBefore(child, ref) {
    var index = void 0;
    if (ref) {
      index = this.childNodes.indexOf(ref);
    }
    this.insertChild(child, index);
  };

  Node.prototype.insertAfter = function insertAfter(child, ref) {
    var index = void 0;
    if (ref) {
      index = this.childNodes.indexOf(ref);
      if (index !== -1) index += 1;
    }
    this.insertChild(child, index);
  };

  Node.prototype.removeChild = function removeChild(child) {
    var index = this.childNodes.indexOf(child);

    if (index > -1) {
      this.store && this.store.deregisterNode(child);
      child.parent = null;
      this.childNodes.splice(index, 1);
    }

    this.updateLeafState();
  };

  Node.prototype.removeChildByData = function removeChildByData(data) {
    var targetNode = null;
    this.childNodes.forEach(function (node) {
      if (node.data === data) {
        targetNode = node;
      }
    });

    if (targetNode) {
      this.removeChild(targetNode);
    }
  };

  Node.prototype.expand = function expand(callback, expandParent) {
    var _this = this;

    var done = function done() {
      if (expandParent) {
        var parent = _this.parent;
        while (parent.level > 0) {
          parent.expanded = true;
          parent = parent.parent;
        }
      }
      _this.expanded = true;
      if (callback) callback();
    };

    if (this.shouldLoadData()) {
      this.loadData(function (data) {
        if (data instanceof Array) {
          if (_this.checked) {
            _this.setChecked(true, true);
          } else {
            reInitChecked(_this);
          }
          done();
        }
      });
    } else {
      done();
    }
  };

  Node.prototype.doCreateChildren = function doCreateChildren(array) {
    var _this2 = this;

    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    array.forEach(function (item) {
      _this2.insertChild((0, _merge2.default)({ data: item }, defaultProps));
    });
  };

  Node.prototype.collapse = function collapse() {
    this.expanded = false;
  };

  Node.prototype.shouldLoadData = function shouldLoadData() {
    return this.store.lazy === true && this.store.load && !this.loaded;
  };

  Node.prototype.updateLeafState = function updateLeafState() {
    if (this.store.lazy === true && this.loaded !== true && typeof this.isLeafByUser !== 'undefined') {
      this.isLeaf = this.isLeafByUser;
      return;
    }
    var childNodes = this.childNodes;
    if (!this.store.lazy || this.store.lazy === true && this.loaded === true) {
      this.isLeaf = !childNodes || childNodes.length === 0;
      return;
    }
    this.isLeaf = false;
  };

  Node.prototype.setChecked = function setChecked(value, deep, recursion, passValue) {
    var _this3 = this;

    this.indeterminate = value === 'half';
    this.checked = value === true;

    if (this.store.checkStrictly) return;

    if (!(this.shouldLoadData() && !this.store.checkDescendants)) {
      var _getChildState2 = getChildState(this.childNodes),
          all = _getChildState2.all,
          allWithoutDisable = _getChildState2.allWithoutDisable;

      if (!this.isLeaf && !all && allWithoutDisable) {
        this.checked = false;
        value = false;
      }

      var handleDescendants = function handleDescendants() {
        if (deep) {
          var childNodes = _this3.childNodes;
          for (var i = 0, j = childNodes.length; i < j; i++) {
            var child = childNodes[i];
            passValue = passValue || value !== false;
            var isCheck = child.disabled ? child.checked : passValue;
            child.setChecked(isCheck, deep, true, passValue);
          }

          var _getChildState3 = getChildState(childNodes),
              half = _getChildState3.half,
              _all = _getChildState3.all;

          if (!_all) {
            _this3.checked = _all;
            _this3.indeterminate = half;
          }
        }
      };

      if (this.shouldLoadData()) {
        // Only work on lazy load data.
        this.loadData(function () {
          handleDescendants();
          reInitChecked(_this3);
        }, {
          checked: value !== false
        });
        return;
      } else {
        handleDescendants();
      }
    }

    var parent = this.parent;
    if (!parent || parent.level === 0) return;

    if (!recursion) {
      reInitChecked(parent);
    }
  };

  Node.prototype.getChildren = function getChildren() {
    // this is data
    var data = this.data;
    if (!data) return null;

    var props = this.store.props;
    var children = 'children';
    if (props) {
      children = props.children || 'children';
    }

    if (data[children] === undefined) {
      data[children] = null;
    }

    return data[children];
  };

  Node.prototype.updateChildren = function updateChildren() {
    var _this4 = this;

    var newData = this.getChildren() || [];
    var oldData = this.childNodes.map(function (node) {
      return node.data;
    });

    var newDataMap = {};
    var newNodes = [];

    newData.forEach(function (item, index) {
      if (item[_util.NODE_KEY]) {
        newDataMap[item[_util.NODE_KEY]] = { index: index, data: item };
      } else {
        newNodes.push({ index: index, data: item });
      }
    });

    oldData.forEach(function (item) {
      if (!newDataMap[item[_util.NODE_KEY]]) _this4.removeChildByData(item);
    });

    newNodes.forEach(function (_ref) {
      var index = _ref.index,
          data = _ref.data;

      _this4.insertChild({ data: data }, index);
    });

    this.updateLeafState();
  };

  Node.prototype.loadData = function loadData(callback) {
    var _this5 = this;

    var defaultProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.store.lazy === true && this.store.load && !this.loaded && (!this.loading || Object.keys(defaultProps).length)) {
      this.loading = true;

      var resolve = function resolve(children) {
        _this5.loaded = true;
        _this5.loading = false;
        _this5.childNodes = [];

        _this5.doCreateChildren(children, defaultProps);

        _this5.updateLeafState();
        if (callback) {
          callback.call(_this5, children);
        }
      };

      this.store.load(this, resolve);
    } else {
      if (callback) {
        callback.call(this);
      }
    }
  };

  _createClass(Node, [{
    key: 'label',
    get: function get() {
      return getPropertyFromData(this, 'label');
    }
  }, {
    key: 'icon',
    get: function get() {
      return getPropertyFromData(this, 'icon');
    }
  }, {
    key: 'key',
    get: function get() {
      var nodeKey = this.store.key;
      if (this.data) return this.data[nodeKey];
      return null;
    }
  }, {
    key: 'disabled',
    get: function get() {
      return getPropertyFromData(this, 'disabled');
    }
  }]);

  return Node;
}();

exports.default = Node;

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cb2dfb0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_node_vue__ = __webpack_require__(255);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_node_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4cb2dfb0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_node_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapseTransition = __webpack_require__(20);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTreeNode',

  componentName: 'ElTreeNode',

  mixins: [_emitter2.default],

  props: {
    node: {
      default: function _default() {
        return {};
      }
    },
    props: {},
    renderContent: Function
  },

  components: {
    ElCollapseTransition: _collapseTransition2.default,
    ElCheckbox: _checkbox2.default,
    NodeContent: {
      props: {
        node: {
          required: true
        }
      },
      render: function render(h) {
        var parent = this.$parent;
        var node = this.node;
        var data = node.data;
        var store = node.store;
        return parent.renderContent ? parent.renderContent.call(parent._renderProxy, h, { _self: parent.tree.$vnode.context, node: node, data: data, store: store }) : h(
          'span',
          { 'class': 'el-tree-node__label' },
          [this.node.label]
        );
      }
    }
  },

  data: function data() {
    return {
      tree: null,
      expanded: false,
      childNodeRendered: false,
      showCheckbox: false,
      oldChecked: null,
      oldIndeterminate: null
    };
  },


  watch: {
    'node.indeterminate': function nodeIndeterminate(val) {
      this.handleSelectChange(this.node.checked, val);
    },
    'node.checked': function nodeChecked(val) {
      this.handleSelectChange(val, this.node.indeterminate);
    },
    'node.expanded': function nodeExpanded(val) {
      var _this = this;

      this.$nextTick(function () {
        return _this.expanded = val;
      });
      if (val) {
        this.childNodeRendered = true;
      }
    }
  },

  methods: {
    getNodeKey: function getNodeKey(node, index) {
      var nodeKey = this.tree.nodeKey;
      if (nodeKey && node) {
        return node.data[nodeKey];
      }
      return index;
    },
    handleSelectChange: function handleSelectChange(checked, indeterminate) {
      if (this.oldChecked !== checked && this.oldIndeterminate !== indeterminate) {
        this.tree.$emit('check-change', this.node.data, checked, indeterminate);
      }
      this.oldChecked = checked;
      this.indeterminate = indeterminate;
    },
    handleClick: function handleClick() {
      var store = this.tree.store;
      store.setCurrentNode(this.node);
      this.tree.$emit('current-change', store.currentNode ? store.currentNode.data : null, store.currentNode);
      this.tree.currentNode = this;
      if (this.tree.expandOnClickNode) {
        this.handleExpandIconClick();
      }
      this.tree.$emit('node-click', this.node.data, this.node, this);
    },
    handleExpandIconClick: function handleExpandIconClick() {
      if (this.node.isLeaf) return;
      if (this.expanded) {
        this.tree.$emit('node-collapse', this.node.data, this.node, this);
        this.node.collapse();
      } else {
        this.node.expand();
        this.$emit('node-expand', this.node.data, this.node, this);
      }
    },
    handleCheckChange: function handleCheckChange(value, ev) {
      this.node.setChecked(ev.target.checked, !this.tree.checkStrictly);
    },
    handleChildNodeExpand: function handleChildNodeExpand(nodeData, node, instance) {
      this.broadcast('ElTreeNode', 'tree-node-expand', node);
      this.tree.$emit('node-expand', nodeData, node, instance);
    }
  },

  created: function created() {
    var _this2 = this;

    var parent = this.$parent;

    if (parent.isTree) {
      this.tree = parent;
    } else {
      this.tree = parent.tree;
    }

    var tree = this.tree;
    if (!tree) {
      console.warn('Can not find node\'s tree.');
    }

    var props = tree.props || {};
    var childrenKey = props['children'] || 'children';

    this.$watch('node.data.' + childrenKey, function () {
      _this2.node.updateChildren();
    });

    this.showCheckbox = tree.showCheckbox;

    if (this.node.expanded) {
      this.expanded = true;
      this.childNodeRendered = true;
    }

    if (this.tree.accordion) {
      this.$on('tree-node-expand', function (node) {
        if (_this2.node !== node) {
          _this2.node.collapse();
        }
      });
    }
  }
}; //
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

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.node.visible),expression:"node.visible"}],staticClass:"el-tree-node",class:{
    'is-expanded': _vm.expanded,
    'is-current': _vm.tree.store.currentNode === _vm.node,
    'is-hidden': !_vm.node.visible,
    'is-focusable': !_vm.node.disabled,
    'is-checked': !_vm.node.disabled && _vm.node.checked
  },attrs:{"role":"treeitem","tabindex":"-1","aria-expanded":_vm.expanded,"aria-disabled":_vm.node.disabled,"aria-checked":_vm.node.checked},on:{"click":function($event){$event.stopPropagation();_vm.handleClick($event)}}},[_c('div',{staticClass:"el-tree-node__content",style:({ 'padding-left': (_vm.node.level - 1) * _vm.tree.indent + 'px' })},[_c('span',{staticClass:"el-tree-node__expand-icon el-icon-caret-right",class:{ 'is-leaf': _vm.node.isLeaf, expanded: !_vm.node.isLeaf && _vm.expanded },on:{"click":function($event){$event.stopPropagation();_vm.handleExpandIconClick($event)}}}),(_vm.showCheckbox)?_c('el-checkbox',{attrs:{"indeterminate":_vm.node.indeterminate,"disabled":!!_vm.node.disabled},on:{"change":_vm.handleCheckChange},nativeOn:{"click":function($event){$event.stopPropagation();}},model:{value:(_vm.node.checked),callback:function ($$v) {_vm.$set(_vm.node, "checked", $$v)},expression:"node.checked"}}):_vm._e(),(_vm.node.loading)?_c('span',{staticClass:"el-tree-node__loading-icon el-icon-loading"}):_vm._e(),_c('node-content',{attrs:{"node":_vm.node}})],1),_c('el-collapse-transition',[(_vm.childNodeRendered)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.expanded),expression:"expanded"}],staticClass:"el-tree-node__children",attrs:{"role":"group","aria-expanded":_vm.expanded}},_vm._l((_vm.node.childNodes),function(child){return _c('el-tree-node',{key:_vm.getNodeKey(child),attrs:{"render-content":_vm.renderContent,"node":child},on:{"node-expand":_vm.handleChildNodeExpand}})})):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-tree",class:{ 'el-tree--highlight-current': _vm.highlightCurrent },attrs:{"role":"tree"}},[_vm._l((_vm.root.childNodes),function(child){return _c('el-tree-node',{key:_vm.getNodeKey(child),attrs:{"node":child,"props":_vm.props,"render-content":_vm.renderContent},on:{"node-expand":_vm.handleNodeExpand}})}),(!_vm.root.childNodes || _vm.root.childNodes.length === 0)?_c('div',{staticClass:"el-tree__empty-block"},[_c('span',{staticClass:"el-tree__empty-text"},[_vm._v(_vm._s(_vm.emptyText))])]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(258);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3424c8b8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(260);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3424c8b8_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

var TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
exports.default = {
  name: 'ElAlert',

  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean
  },

  data: function data() {
    return {
      visible: true
    };
  },


  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('close');
    }
  },

  computed: {
    typeClass: function typeClass() {
      return 'el-alert--' + this.type;
    },
    iconClass: function iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
    },
    isBigIcon: function isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle: function isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    }
  }
};

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-alert-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-alert",class:[_vm.typeClass, _vm.center ? 'is-center' : ''],attrs:{"role":"alert"}},[(_vm.showIcon)?_c('i',{staticClass:"el-alert__icon",class:[ _vm.iconClass, _vm.isBigIcon ]}):_vm._e(),_c('div',{staticClass:"el-alert__content"},[(_vm.title)?_c('span',{staticClass:"el-alert__title",class:[ _vm.isBoldTitle ]},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._t("default",[(_vm.description)?_c('p',{staticClass:"el-alert__description"},[_vm._v(_vm._s(_vm.description))]):_vm._e()]),_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.closable),expression:"closable"}],staticClass:"el-alert__closebtn",class:{ 'is-customed': _vm.closeText !== '', 'el-icon-close': _vm.closeText === '' },on:{"click":function($event){_vm.close()}}},[_vm._v(_vm._s(_vm.closeText))])],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(262);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(263);

var _main2 = _interopRequireDefault(_main);

var _popup = __webpack_require__(16);

var _vdom = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotificationConstructor = _vue2.default.extend(_main2.default);

var instance = void 0;
var instances = [];
var seed = 1;

var Notification = function Notification(options) {
  if (_vue2.default.prototype.$isServer) return;
  options = options || {};
  var userOnClose = options.onClose;
  var id = 'notification_' + seed++;
  var position = options.position || 'top-right';

  options.onClose = function () {
    Notification.close(id, userOnClose);
  };

  instance = new NotificationConstructor({
    data: options
  });

  if ((0, _vdom.isVNode)(options.message)) {
    instance.$slots.default = [options.message];
    options.message = '';
  }
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = _popup.PopupManager.nextZIndex();

  var verticalOffset = options.offset || 0;
  instances.filter(function (item) {
    return item.position === position;
  }).forEach(function (item) {
    verticalOffset += item.$el.offsetHeight + 16;
  });
  verticalOffset += 16;
  instance.verticalOffset = verticalOffset;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(function (type) {
  Notification[type] = function (options) {
    if (typeof options === 'string' || (0, _vdom.isVNode)(options)) {
      options = {
        message: options
      };
    }
    options.type = type;
    return Notification(options);
  };
});

Notification.close = function (id, userOnClose) {
  var index = -1;
  var len = instances.length;
  var instance = instances.filter(function (instance, i) {
    if (instance.id === id) {
      index = i;
      return true;
    }
    return false;
  })[0];
  if (!instance) return;

  if (typeof userOnClose === 'function') {
    userOnClose(instance);
  }
  instances.splice(index, 1);

  if (len <= 1) return;
  var position = instance.position;
  var removedHeight = instance.dom.offsetHeight;
  for (var i = index; i < len - 1; i++) {
    if (instances[i].position === position) {
      instances[i].dom.style[instance.verticalProperty] = parseInt(instances[i].dom.style[instance.verticalProperty], 10) - removedHeight - 16 + 'px';
    }
  }
};

exports.default = Notification;

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3da4088b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(265);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3da4088b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

exports.default = {
  data: function data() {
    return {
      visible: false,
      title: '',
      message: '',
      duration: 4500,
      type: '',
      showClose: true,
      customClass: '',
      iconClass: '',
      onClose: null,
      onClick: null,
      closed: false,
      verticalOffset: 0,
      timer: null,
      dangerouslyUseHTMLString: false,
      position: 'top-right'
    };
  },


  computed: {
    typeClass: function typeClass() {
      return this.type && typeMap[this.type] ? 'el-icon-' + typeMap[this.type] : '';
    },
    horizontalClass: function horizontalClass() {
      return this.position.indexOf('right') > -1 ? 'right' : 'left';
    },
    verticalProperty: function verticalProperty() {
      return (/^top-/.test(this.position) ? 'top' : 'bottom'
      );
    },
    positionStyle: function positionStyle() {
      var _ref;

      return _ref = {}, _ref[this.verticalProperty] = this.verticalOffset + 'px', _ref;
    }
  },

  watch: {
    closed: function closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement: function destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    click: function click() {
      if (typeof this.onClick === 'function') {
        this.onClick();
      }
    },
    close: function close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (!_this.closed) {
            _this.close();
          }
        }, this.duration);
      }
    },
    keydown: function keydown(e) {
      if (e.keyCode === 46 || e.keyCode === 8) {
        this.clearTimer(); // detele 取消倒计时
      } else if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      } else {
        this.startTimer(); // 恢复倒计时
      }
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.duration > 0) {
      this.timer = setTimeout(function () {
        if (!_this2.closed) {
          _this2.close();
        }
      }, this.duration);
    }
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
};

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-notification-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:['el-notification', _vm.customClass, _vm.horizontalClass],style:(_vm.positionStyle),attrs:{"role":"alert"},on:{"mouseenter":function($event){_vm.clearTimer()},"mouseleave":function($event){_vm.startTimer()},"click":_vm.click}},[(_vm.type || _vm.iconClass)?_c('i',{staticClass:"el-notification__icon",class:[ _vm.typeClass, _vm.iconClass ]}):_vm._e(),_c('div',{staticClass:"el-notification__group",class:{ 'is-with-icon': _vm.typeClass || _vm.iconClass }},[_c('h2',{staticClass:"el-notification__title",domProps:{"textContent":_vm._s(_vm.title)}}),_c('div',{staticClass:"el-notification__content"},[_vm._t("default",[(!_vm.dangerouslyUseHTMLString)?_c('p',[_vm._v(_vm._s(_vm.message))]):_c('p',{domProps:{"innerHTML":_vm._s(_vm.message)}})])],2),(_vm.showClose)?_c('div',{staticClass:"el-notification__closeBtn el-icon-close",on:{"click":function($event){$event.stopPropagation();_vm.close($event)}}}):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(267);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41648868_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(273);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_41648868_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _inputNumber = __webpack_require__(269);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _button = __webpack_require__(270);

var _button2 = _interopRequireDefault(_button);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElSlider',

  mixins: [_emitter2.default],

  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    step: {
      type: Number,
      default: 1
    },
    value: {
      type: [Number, Array],
      default: 0
    },
    showInput: {
      type: Boolean,
      default: false
    },
    showInputControls: {
      type: Boolean,
      default: true
    },
    showStops: {
      type: Boolean,
      default: false
    },
    showTooltip: {
      type: Boolean,
      default: true
    },
    formatTooltip: Function,
    disabled: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    height: {
      type: String
    },
    debounce: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    }
  },

  components: {
    ElInputNumber: _inputNumber2.default,
    SliderButton: _button2.default
  },

  data: function data() {
    return {
      firstValue: null,
      secondValue: null,
      oldValue: null,
      dragging: false,
      sliderSize: 1
    };
  },


  watch: {
    value: function value(val, oldVal) {
      if (this.dragging || Array.isArray(val) && Array.isArray(oldVal) && val.every(function (item, index) {
        return item === oldVal[index];
      })) {
        return;
      }
      this.setValues();
    },
    dragging: function dragging(val) {
      if (!val) {
        this.setValues();
      }
    },
    firstValue: function firstValue(val) {
      if (this.range) {
        this.$emit('input', [this.minValue, this.maxValue]);
      } else {
        this.$emit('input', val);
      }
    },
    secondValue: function secondValue() {
      if (this.range) {
        this.$emit('input', [this.minValue, this.maxValue]);
      }
    },
    min: function min() {
      this.setValues();
    },
    max: function max() {
      this.setValues();
    }
  },

  methods: {
    valueChanged: function valueChanged() {
      var _this = this;

      if (this.range) {
        return ![this.minValue, this.maxValue].every(function (item, index) {
          return item === _this.oldValue[index];
        });
      } else {
        return this.value !== this.oldValue;
      }
    },
    setValues: function setValues() {
      var val = this.value;
      if (this.range && Array.isArray(val)) {
        if (val[1] < this.min) {
          this.$emit('input', [this.min, this.min]);
        } else if (val[0] > this.max) {
          this.$emit('input', [this.max, this.max]);
        } else if (val[0] < this.min) {
          this.$emit('input', [this.min, val[1]]);
        } else if (val[1] > this.max) {
          this.$emit('input', [val[0], this.max]);
        } else {
          this.firstValue = val[0];
          this.secondValue = val[1];
          if (this.valueChanged()) {
            this.dispatch('ElFormItem', 'el.form.change', [this.minValue, this.maxValue]);
            this.oldValue = val.slice();
          }
        }
      } else if (!this.range && typeof val === 'number' && !isNaN(val)) {
        if (val < this.min) {
          this.$emit('input', this.min);
        } else if (val > this.max) {
          this.$emit('input', this.max);
        } else {
          this.firstValue = val;
          if (this.valueChanged()) {
            this.dispatch('ElFormItem', 'el.form.change', val);
            this.oldValue = val;
          }
        }
      }
    },
    setPosition: function setPosition(percent) {
      var targetValue = this.min + percent * (this.max - this.min) / 100;
      if (!this.range) {
        this.$refs.button1.setPosition(percent);
        return;
      }
      var button = void 0;
      if (Math.abs(this.minValue - targetValue) < Math.abs(this.maxValue - targetValue)) {
        button = this.firstValue < this.secondValue ? 'button1' : 'button2';
      } else {
        button = this.firstValue > this.secondValue ? 'button1' : 'button2';
      }
      this.$refs[button].setPosition(percent);
    },
    onSliderClick: function onSliderClick(event) {
      if (this.disabled || this.dragging) return;
      this.resetSize();
      if (this.vertical) {
        var sliderOffsetBottom = this.$refs.slider.getBoundingClientRect().bottom;
        this.setPosition((sliderOffsetBottom - event.clientY) / this.sliderSize * 100);
      } else {
        var sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
        this.setPosition((event.clientX - sliderOffsetLeft) / this.sliderSize * 100);
      }
      this.emitChange();
    },
    resetSize: function resetSize() {
      if (this.$refs.slider) {
        this.sliderSize = this.$refs.slider['client' + (this.vertical ? 'Height' : 'Width')];
      }
    },
    emitChange: function emitChange() {
      var _this2 = this;

      this.$nextTick(function () {
        _this2.$emit('change', _this2.range ? [_this2.minValue, _this2.maxValue] : _this2.value);
      });
    }
  },

  computed: {
    stops: function stops() {
      var _this3 = this;

      if (this.step === 0) {
        "production" !== 'production' && console.warn('[Element Warn][Slider]step should not be 0.');
        return [];
      }
      var stopCount = (this.max - this.min) / this.step;
      var stepWidth = 100 * this.step / (this.max - this.min);
      var result = [];
      for (var i = 1; i < stopCount; i++) {
        result.push(i * stepWidth);
      }
      if (this.range) {
        return result.filter(function (step) {
          return step < 100 * (_this3.minValue - _this3.min) / (_this3.max - _this3.min) || step > 100 * (_this3.maxValue - _this3.min) / (_this3.max - _this3.min);
        });
      } else {
        return result.filter(function (step) {
          return step > 100 * (_this3.firstValue - _this3.min) / (_this3.max - _this3.min);
        });
      }
    },
    minValue: function minValue() {
      return Math.min(this.firstValue, this.secondValue);
    },
    maxValue: function maxValue() {
      return Math.max(this.firstValue, this.secondValue);
    },
    barSize: function barSize() {
      return this.range ? 100 * (this.maxValue - this.minValue) / (this.max - this.min) + '%' : 100 * (this.firstValue - this.min) / (this.max - this.min) + '%';
    },
    barStart: function barStart() {
      return this.range ? 100 * (this.minValue - this.min) / (this.max - this.min) + '%' : '0%';
    },
    precision: function precision() {
      var precisions = [this.min, this.max, this.step].map(function (item) {
        var decimal = ('' + item).split('.')[1];
        return decimal ? decimal.length : 0;
      });
      return Math.max.apply(null, precisions);
    },
    runwayStyle: function runwayStyle() {
      return this.vertical ? { height: this.height } : {};
    },
    barStyle: function barStyle() {
      return this.vertical ? {
        height: this.barSize,
        bottom: this.barStart
      } : {
        width: this.barSize,
        left: this.barStart
      };
    }
  },

  mounted: function mounted() {
    var valuetext = void 0;
    if (this.range) {
      if (Array.isArray(this.value)) {
        this.firstValue = Math.max(this.min, this.value[0]);
        this.secondValue = Math.min(this.max, this.value[1]);
      } else {
        this.firstValue = this.min;
        this.secondValue = this.max;
      }
      this.oldValue = [this.firstValue, this.secondValue];
      valuetext = this.firstValue + '-' + this.secondValue;
    } else {
      if (typeof this.value !== 'number' || isNaN(this.value)) {
        this.firstValue = this.min;
      } else {
        this.firstValue = Math.min(this.max, Math.max(this.min, this.value));
      }
      this.oldValue = this.firstValue;
      valuetext = this.firstValue;
    }
    this.$el.setAttribute('aria-valuetext', valuetext);

    // label screen reader
    this.$el.setAttribute('aria-label', this.label ? this.label : 'slider between ' + this.min + ' and ' + this.max);

    this.resetSize();
    window.addEventListener('resize', this.resetSize);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.resetSize);
  }
}; //
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

/***/ }),
/* 269 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/input-number");

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad99260c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__ = __webpack_require__(272);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_button_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ad99260c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_button_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _tooltip = __webpack_require__(22);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElSliderButton',

  components: {
    ElTooltip: _tooltip2.default
  },

  props: {
    value: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },

  data: function data() {
    return {
      hovering: false,
      dragging: false,
      isClick: false,
      startX: 0,
      currentX: 0,
      startY: 0,
      currentY: 0,
      startPosition: 0,
      newPosition: null,
      oldValue: this.value
    };
  },


  computed: {
    disabled: function disabled() {
      return this.$parent.disabled;
    },
    max: function max() {
      return this.$parent.max;
    },
    min: function min() {
      return this.$parent.min;
    },
    step: function step() {
      return this.$parent.step;
    },
    showTooltip: function showTooltip() {
      return this.$parent.showTooltip;
    },
    precision: function precision() {
      return this.$parent.precision;
    },
    currentPosition: function currentPosition() {
      return (this.value - this.min) / (this.max - this.min) * 100 + '%';
    },
    enableFormat: function enableFormat() {
      return this.$parent.formatTooltip instanceof Function;
    },
    formatValue: function formatValue() {
      return this.enableFormat && this.$parent.formatTooltip(this.value) || this.value;
    },
    wrapperStyle: function wrapperStyle() {
      return this.vertical ? { bottom: this.currentPosition } : { left: this.currentPosition };
    }
  },

  watch: {
    dragging: function dragging(val) {
      this.$parent.dragging = val;
    }
  },

  methods: {
    displayTooltip: function displayTooltip() {
      this.$refs.tooltip && (this.$refs.tooltip.showPopper = true);
    },
    hideTooltip: function hideTooltip() {
      this.$refs.tooltip && (this.$refs.tooltip.showPopper = false);
    },
    handleMouseEnter: function handleMouseEnter() {
      this.hovering = true;
      this.displayTooltip();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hovering = false;
      this.hideTooltip();
    },
    onButtonDown: function onButtonDown(event) {
      if (this.disabled) return;
      event.preventDefault();
      this.onDragStart(event);
      window.addEventListener('mousemove', this.onDragging);
      window.addEventListener('mouseup', this.onDragEnd);
      window.addEventListener('contextmenu', this.onDragEnd);
    },
    onLeftKeyDown: function onLeftKeyDown() {
      if (this.disabled) return;
      this.newPosition = parseFloat(this.currentPosition) - this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
    },
    onRightKeyDown: function onRightKeyDown() {
      if (this.disabled) return;
      this.newPosition = parseFloat(this.currentPosition) + this.step / (this.max - this.min) * 100;
      this.setPosition(this.newPosition);
    },
    onDragStart: function onDragStart(event) {
      this.dragging = true;
      this.isClick = true;
      if (this.vertical) {
        this.startY = event.clientY;
      } else {
        this.startX = event.clientX;
      }
      this.startPosition = parseFloat(this.currentPosition);
      this.newPosition = this.startPosition;
    },
    onDragging: function onDragging(event) {
      if (this.dragging) {
        this.isClick = false;
        this.displayTooltip();
        this.$parent.resetSize();
        var diff = 0;
        if (this.vertical) {
          this.currentY = event.clientY;
          diff = (this.startY - this.currentY) / this.$parent.sliderSize * 100;
        } else {
          this.currentX = event.clientX;
          diff = (this.currentX - this.startX) / this.$parent.sliderSize * 100;
        }
        this.newPosition = this.startPosition + diff;
        this.setPosition(this.newPosition);
      }
    },
    onDragEnd: function onDragEnd() {
      var _this = this;

      if (this.dragging) {
        /*
         * 防止在 mouseup 后立即触发 click，导致滑块有几率产生一小段位移
         * 不使用 preventDefault 是因为 mouseup 和 click 没有注册在同一个 DOM 上
         */
        setTimeout(function () {
          _this.dragging = false;
          _this.hideTooltip();
          if (!_this.isClick) {
            _this.setPosition(_this.newPosition);
            _this.$parent.emitChange();
          }
        }, 0);
        window.removeEventListener('mousemove', this.onDragging);
        window.removeEventListener('mouseup', this.onDragEnd);
        window.removeEventListener('contextmenu', this.onDragEnd);
      }
    },
    setPosition: function setPosition(newPosition) {
      var _this2 = this;

      if (newPosition === null) return;
      if (newPosition < 0) {
        newPosition = 0;
      } else if (newPosition > 100) {
        newPosition = 100;
      }
      var lengthPerStep = 100 / ((this.max - this.min) / this.step);
      var steps = Math.round(newPosition / lengthPerStep);
      var value = steps * lengthPerStep * (this.max - this.min) * 0.01 + this.min;
      value = parseFloat(value.toFixed(this.precision));
      this.$emit('input', value);
      this.$nextTick(function () {
        _this2.$refs.tooltip && _this2.$refs.tooltip.updatePopper();
      });
      if (!this.dragging && this.value !== this.oldValue) {
        this.oldValue = this.value;
      }
    }
  }
}; //
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

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"button",staticClass:"el-slider__button-wrapper",class:{ 'hover': _vm.hovering, 'dragging': _vm.dragging },style:(_vm.wrapperStyle),attrs:{"tabindex":"0"},on:{"mouseenter":_vm.handleMouseEnter,"mouseleave":_vm.handleMouseLeave,"mousedown":_vm.onButtonDown,"focus":_vm.handleMouseEnter,"blur":_vm.handleMouseLeave,"keydown":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"left",37,$event.key)){ return null; }if('button' in $event && $event.button !== 0){ return null; }_vm.onLeftKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"right",39,$event.key)){ return null; }if('button' in $event && $event.button !== 2){ return null; }_vm.onRightKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"down",40,$event.key)){ return null; }$event.preventDefault();_vm.onLeftKeyDown($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"up",38,$event.key)){ return null; }$event.preventDefault();_vm.onRightKeyDown($event)}]}},[_c('el-tooltip',{ref:"tooltip",attrs:{"placement":"top","disabled":!_vm.showTooltip}},[_c('span',{attrs:{"slot":"content"},slot:"content"},[_vm._v(_vm._s(_vm.formatValue))]),_c('div',{staticClass:"el-slider__button",class:{ 'hover': _vm.hovering, 'dragging': _vm.dragging }})])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-slider",class:{ 'is-vertical': _vm.vertical, 'el-slider--with-input': _vm.showInput },attrs:{"role":"slider","aria-valuemin":_vm.min,"aria-valuemax":_vm.max,"aria-orientation":_vm.vertical ? 'vertical': 'horizontal',"aria-disabled":_vm.disabled}},[(_vm.showInput && !_vm.range)?_c('el-input-number',{ref:"input",staticClass:"el-slider__input",attrs:{"step":_vm.step,"disabled":_vm.disabled,"controls":_vm.showInputControls,"min":_vm.min,"max":_vm.max,"debounce":_vm.debounce,"size":"small"},on:{"change":function($event){_vm.$nextTick(_vm.emitChange)}},model:{value:(_vm.firstValue),callback:function ($$v) {_vm.firstValue=$$v},expression:"firstValue"}}):_vm._e(),_c('div',{ref:"slider",staticClass:"el-slider__runway",class:{ 'show-input': _vm.showInput, 'disabled': _vm.disabled },style:(_vm.runwayStyle),on:{"click":_vm.onSliderClick}},[_c('div',{staticClass:"el-slider__bar",style:(_vm.barStyle)}),_c('slider-button',{ref:"button1",attrs:{"vertical":_vm.vertical},model:{value:(_vm.firstValue),callback:function ($$v) {_vm.firstValue=$$v},expression:"firstValue"}}),(_vm.range)?_c('slider-button',{ref:"button2",attrs:{"vertical":_vm.vertical},model:{value:(_vm.secondValue),callback:function ($$v) {_vm.secondValue=$$v},expression:"secondValue"}}):_vm._e(),_vm._l((_vm.stops),function(item){return (_vm.showStops)?_c('div',{staticClass:"el-slider__stop",style:(_vm.vertical ? { 'bottom': item + '%' } : { 'left': item + '%' })}):_vm._e()})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _directive = __webpack_require__(275);

var _directive2 = _interopRequireDefault(_directive);

var _index = __webpack_require__(278);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: function install(Vue) {
    Vue.use(_directive2.default);
    Vue.prototype.$loading = _index2.default;
  },

  directive: _directive2.default,
  service: _index2.default
};

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _loading = __webpack_require__(39);

var _loading2 = _interopRequireDefault(_loading);

var _dom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mask = _vue2.default.extend(_loading2.default);

exports.install = function (Vue) {
  if (Vue.prototype.$isServer) return;
  var toggleLoading = function toggleLoading(el, binding) {
    if (binding.value) {
      Vue.nextTick(function () {
        if (binding.modifiers.fullscreen) {
          el.originalPosition = (0, _dom.getStyle)(document.body, 'position');
          el.originalOverflow = (0, _dom.getStyle)(document.body, 'overflow');

          (0, _dom.addClass)(el.mask, 'is-fullscreen');
          insertDom(document.body, el, binding);
        } else {
          (0, _dom.removeClass)(el.mask, 'is-fullscreen');

          if (binding.modifiers.body) {
            el.originalPosition = (0, _dom.getStyle)(document.body, 'position');

            ['top', 'left'].forEach(function (property) {
              var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
              el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
            });
            ['height', 'width'].forEach(function (property) {
              el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
            });

            insertDom(document.body, el, binding);
          } else {
            el.originalPosition = (0, _dom.getStyle)(el, 'position');
            insertDom(el, el, binding);
          }
        }
      });
    } else {
      if (el.domVisible) {
        el.instance.$on('after-leave', function (_) {
          el.domVisible = false;
          var target = binding.modifiers.fullscreen || binding.modifiers.body ? document.body : el;
          (0, _dom.removeClass)(target, 'el-loading-parent--relative');
          (0, _dom.removeClass)(target, 'el-loading-parent--hidden');
        });
        el.instance.visible = false;
      }
    }
  };
  var insertDom = function insertDom(parent, el, binding) {
    if (!el.domVisible && (0, _dom.getStyle)(el, 'display') !== 'none' && (0, _dom.getStyle)(el, 'visibility') !== 'hidden') {
      Object.keys(el.maskStyle).forEach(function (property) {
        el.mask.style[property] = el.maskStyle[property];
      });

      if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
        (0, _dom.addClass)(parent, 'el-loading-parent--relative');
      }
      if (binding.modifiers.fullscreen && binding.modifiers.lock) {
        (0, _dom.addClass)(parent, 'el-loading-parent--hidden');
      }
      el.domVisible = true;

      parent.appendChild(el.mask);
      Vue.nextTick(function () {
        el.instance.visible = true;
      });
      el.domInserted = true;
    }
  };

  Vue.directive('loading', {
    bind: function bind(el, binding, vnode) {
      var textExr = el.getAttribute('element-loading-text');
      var spinnerExr = el.getAttribute('element-loading-spinner');
      var backgroundExr = el.getAttribute('element-loading-background');
      var vm = vnode.context;
      var mask = new Mask({
        el: document.createElement('div'),
        data: {
          text: vm && vm[textExr] || textExr,
          spinner: vm && vm[spinnerExr] || spinnerExr,
          background: vm && vm[backgroundExr] || backgroundExr,
          fullscreen: !!binding.modifiers.fullscreen
        }
      });
      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      toggleLoading(el, binding);
    },

    update: function update(el, binding) {
      el.instance.setText(el.getAttribute('element-loading-text'));
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },

    unbind: function unbind(el, binding) {
      if (el.domInserted) {
        el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask);
      }
    }
  });
};

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  data: function data() {
    return {
      text: null,
      spinner: null,
      background: null,
      fullscreen: true,
      visible: false,
      customClass: ''
    };
  },


  methods: {
    handleAfterLeave: function handleAfterLeave() {
      this.$emit('after-leave');
    },
    setText: function setText(text) {
      this.text = text;
    }
  }
};

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-loading-fade"},on:{"after-leave":_vm.handleAfterLeave}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],staticClass:"el-loading-mask",class:[_vm.customClass, { 'is-fullscreen': _vm.fullscreen }],style:({ backgroundColor: _vm.background || '' })},[_c('div',{staticClass:"el-loading-spinner"},[(!_vm.spinner)?_c('svg',{staticClass:"circular",attrs:{"viewBox":"25 25 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"50","cy":"50","r":"20","fill":"none"}})]):_c('i',{class:_vm.spinner}),(_vm.text)?_c('p',{staticClass:"el-loading-text"},[_vm._v(_vm._s(_vm.text))]):_vm._e()])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _loading = __webpack_require__(39);

var _loading2 = _interopRequireDefault(_loading);

var _dom = __webpack_require__(3);

var _merge = __webpack_require__(12);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoadingConstructor = _vue2.default.extend(_loading2.default);

var defaults = {
  text: null,
  fullscreen: true,
  body: false,
  lock: false,
  customClass: ''
};

var fullscreenLoading = void 0;

LoadingConstructor.prototype.originalPosition = '';
LoadingConstructor.prototype.originalOverflow = '';

LoadingConstructor.prototype.close = function () {
  var _this = this;

  if (this.fullscreen) {
    fullscreenLoading = undefined;
  }
  this.$on('after-leave', function (_) {
    var target = _this.fullscreen || _this.body ? document.body : _this.target;
    (0, _dom.removeClass)(target, 'el-loading-parent--relative');
    (0, _dom.removeClass)(target, 'el-loading-parent--hidden');
    if (_this.$el && _this.$el.parentNode) {
      _this.$el.parentNode.removeChild(_this.$el);
    }
    _this.$destroy();
  });
  this.visible = false;
};

var addStyle = function addStyle(options, parent, instance) {
  var maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition = (0, _dom.getStyle)(document.body, 'position');
    instance.originalOverflow = (0, _dom.getStyle)(document.body, 'overflow');
  } else if (options.body) {
    instance.originalPosition = (0, _dom.getStyle)(document.body, 'position');
    ['top', 'left'].forEach(function (property) {
      var scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
      maskStyle[property] = options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
    });
    ['height', 'width'].forEach(function (property) {
      maskStyle[property] = options.target.getBoundingClientRect()[property] + 'px';
    });
  } else {
    instance.originalPosition = (0, _dom.getStyle)(parent, 'position');
  }
  Object.keys(maskStyle).forEach(function (property) {
    instance.$el.style[property] = maskStyle[property];
  });
};

var Loading = function Loading() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (_vue2.default.prototype.$isServer) return;
  options = (0, _merge2.default)({}, defaults, options);
  if (typeof options.target === 'string') {
    options.target = document.querySelector(options.target);
  }
  options.target = options.target || document.body;
  if (options.target !== document.body) {
    options.fullscreen = false;
  } else {
    options.body = true;
  }
  if (options.fullscreen && fullscreenLoading) {
    return fullscreenLoading;
  }

  var parent = options.body ? document.body : options.target;
  var instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: options
  });

  addStyle(options, parent, instance);
  if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
    (0, _dom.addClass)(parent, 'el-loading-parent--relative');
  }
  if (options.fullscreen && options.lock) {
    (0, _dom.addClass)(parent, 'el-loading-parent--hidden');
  }
  parent.appendChild(instance.$el);
  _vue2.default.nextTick(function () {
    instance.visible = true;
  });
  if (options.fullscreen) {
    fullscreenLoading = instance;
  }
  return instance;
};

exports.default = Loading;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _icon = __webpack_require__(280);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_icon2.default.install = function (Vue) {
  Vue.component(_icon2.default.name, _icon2.default);
};

exports.default = _icon2.default;

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc583ebe_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(282);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_icon_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_cc583ebe_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//

exports.default = {
  name: 'ElIcon',

  props: {
    name: String
  }
};

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:'el-icon-' + _vm.name})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _row = __webpack_require__(284);

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_row2.default.install = function (Vue) {
  Vue.component(_row2.default.name, _row2.default);
};

exports.default = _row2.default;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = {
  name: 'ElRow',

  componentName: 'ElRow',

  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'top'
    }
  },

  computed: {
    style: function style() {
      var ret = {};

      if (this.gutter) {
        ret.marginLeft = '-' + this.gutter / 2 + 'px';
        ret.marginRight = ret.marginLeft;
      }

      return ret;
    }
  },

  render: function render(h) {
    return h(this.tag, {
      class: ['el-row', this.justify !== 'start' ? 'is-justify-' + this.justify : '', this.align !== 'top' ? 'is-align-' + this.align : '', { 'el-row--flex': this.type === 'flex' }],
      style: this.style
    }, this.$slots.default);
  }
};

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _col = __webpack_require__(286);

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_col2.default.install = function (Vue) {
  Vue.component(_col2.default.name, _col2.default);
};

exports.default = _col2.default;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  name: 'ElCol',

  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },

  computed: {
    gutter: function gutter() {
      var parent = this.$parent;
      while (parent && parent.$options.componentName !== 'ElRow') {
        parent = parent.$parent;
      }
      return parent ? parent.gutter : 0;
    }
  },
  render: function render(h) {
    var _this = this;

    var classList = [];
    var style = {};

    if (this.gutter) {
      style.paddingLeft = this.gutter / 2 + 'px';
      style.paddingRight = style.paddingLeft;
    }

    ['span', 'offset', 'pull', 'push'].forEach(function (prop) {
      if (_this[prop] || _this[prop] === 0) {
        classList.push(prop !== 'span' ? 'el-col-' + prop + '-' + _this[prop] : 'el-col-' + _this[prop]);
      }
    });

    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(function (size) {
      if (typeof _this[size] === 'number') {
        classList.push('el-col-' + size + '-' + _this[size]);
      } else if (_typeof(_this[size]) === 'object') {
        var props = _this[size];
        Object.keys(props).forEach(function (prop) {
          classList.push(prop !== 'span' ? 'el-col-' + size + '-' + prop + '-' + props[prop] : 'el-col-' + size + '-' + props[prop]);
        });
      }
    });

    return h(this.tag, {
      class: ['el-col', classList],
      style: style
    }, this.$slots.default);
  }
};

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _src = __webpack_require__(288);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_src2.default.install = function (Vue) {
  Vue.component(_src2.default.name, _src2.default);
};

exports.default = _src2.default;

/***/ }),
/* 288 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _uploadList = __webpack_require__(290);

var _uploadList2 = _interopRequireDefault(_uploadList);

var _upload = __webpack_require__(293);

var _upload2 = _interopRequireDefault(_upload);

var _iframeUpload = __webpack_require__(298);

var _iframeUpload2 = _interopRequireDefault(_iframeUpload);

var _progress = __webpack_require__(40);

var _progress2 = _interopRequireDefault(_progress);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

exports.default = {
  name: 'ElUpload',

  mixins: [_migrating2.default],

  components: {
    ElProgress: _progress2.default,
    UploadList: _uploadList2.default,
    Upload: _upload2.default,
    IframeUpload: _iframeUpload2.default
  },

  provide: {
    uploader: undefined
  },

  props: {
    action: {
      type: String,
      required: true
    },
    headers: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    data: Object,
    multiple: Boolean,
    name: {
      type: String,
      default: 'file'
    },
    drag: Boolean,
    dragger: Boolean,
    withCredentials: Boolean,
    showFileList: {
      type: Boolean,
      default: true
    },
    accept: String,
    type: {
      type: String,
      default: 'select'
    },
    beforeUpload: Function,
    onRemove: {
      type: Function,
      default: noop
    },
    onChange: {
      type: Function,
      default: noop
    },
    onPreview: {
      type: Function
    },
    onSuccess: {
      type: Function,
      default: noop
    },
    onProgress: {
      type: Function,
      default: noop
    },
    onError: {
      type: Function,
      default: noop
    },
    fileList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: 'text' // text,picture,picture-card
    },
    httpRequest: Function,
    disabled: Boolean,
    limit: Number,
    onExceed: {
      type: Function,
      default: noop
    }
  },

  data: function data() {
    return {
      uploadFiles: [],
      dragOver: false,
      draging: false,
      tempIndex: 1
    };
  },


  watch: {
    fileList: {
      immediate: true,
      handler: function handler(fileList) {
        var _this = this;

        this.uploadFiles = fileList.map(function (item) {
          item.uid = item.uid || Date.now() + _this.tempIndex++;
          item.status = 'success';
          return item;
        });
      }
    }
  },

  methods: {
    handleStart: function handleStart(rawFile) {
      rawFile.uid = Date.now() + this.tempIndex++;
      var file = {
        status: 'ready',
        name: rawFile.name,
        size: rawFile.size,
        percentage: 0,
        uid: rawFile.uid,
        raw: rawFile
      };

      try {
        file.url = URL.createObjectURL(rawFile);
      } catch (err) {
        console.error(err);
        return;
      }

      this.uploadFiles.push(file);
      this.onChange(file, this.uploadFiles);
    },
    handleProgress: function handleProgress(ev, rawFile) {
      var file = this.getFile(rawFile);
      this.onProgress(ev, file, this.uploadFiles);
      file.status = 'uploading';
      file.percentage = ev.percent || 0;
    },
    handleSuccess: function handleSuccess(res, rawFile) {
      var file = this.getFile(rawFile);

      if (file) {
        file.status = 'success';
        file.response = res;

        this.onSuccess(res, file, this.uploadFiles);
        this.onChange(file, this.uploadFiles);
      }
    },
    handleError: function handleError(err, rawFile) {
      var file = this.getFile(rawFile);
      var fileList = this.uploadFiles;

      file.status = 'fail';

      fileList.splice(fileList.indexOf(file), 1);

      this.onError(err, file, this.uploadFiles);
      this.onChange(file, this.uploadFiles);
    },
    handleRemove: function handleRemove(file, raw) {
      if (raw) {
        file = this.getFile(raw);
      }
      this.abort(file);
      var fileList = this.uploadFiles;
      fileList.splice(fileList.indexOf(file), 1);
      this.onRemove(file, fileList);
    },
    getFile: function getFile(rawFile) {
      var fileList = this.uploadFiles;
      var target = void 0;
      fileList.every(function (item) {
        target = rawFile.uid === item.uid ? item : null;
        return !target;
      });
      return target;
    },
    abort: function abort(file) {
      this.$refs['upload-inner'].abort(file);
    },
    clearFiles: function clearFiles() {
      this.uploadFiles = [];
    },
    submit: function submit() {
      var _this2 = this;

      this.uploadFiles.filter(function (file) {
        return file.status === 'ready';
      }).forEach(function (file) {
        _this2.$refs['upload-inner'].upload(file.raw);
      });
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'default-file-list': 'default-file-list is renamed to file-list.',
          'show-upload-list': 'show-upload-list is renamed to show-file-list.',
          'thumbnail-mode': 'thumbnail-mode has been deprecated, you can implement the same effect according to this case: http://element.eleme.io/#/zh-CN/component/upload#yong-hu-tou-xiang-shang-chuan'
        }
      };
    }
  },

  render: function render(h) {
    var uploadList = void 0;

    if (this.showFileList) {
      uploadList = h(
        _uploadList2.default,
        {
          attrs: {
            disabled: this.disabled,
            listType: this.listType,
            files: this.uploadFiles,

            handlePreview: this.onPreview },
          on: {
            'remove': this.handleRemove
          }
        },
        []
      );
    }

    var uploadData = {
      props: {
        type: this.type,
        drag: this.drag,
        action: this.action,
        multiple: this.multiple,
        'before-upload': this.beforeUpload,
        'with-credentials': this.withCredentials,
        headers: this.headers,
        name: this.name,
        data: this.data,
        accept: this.accept,
        fileList: this.uploadFiles,
        autoUpload: this.autoUpload,
        listType: this.listType,
        disabled: this.disabled,
        limit: this.limit,
        'on-exceed': this.onExceed,
        'on-start': this.handleStart,
        'on-progress': this.handleProgress,
        'on-success': this.handleSuccess,
        'on-error': this.handleError,
        'on-preview': this.onPreview,
        'on-remove': this.handleRemove,
        'http-request': this.httpRequest
      },
      ref: 'upload-inner'
    };

    var trigger = this.$slots.trigger || this.$slots.default;
    var uploadComponent = typeof FormData !== 'undefined' || this.$isServer ? h(
      'upload',
      uploadData,
      [trigger]
    ) : h(
      'iframeUpload',
      uploadData,
      [trigger]
    );

    return h(
      'div',
      null,
      [this.listType === 'picture-card' ? uploadList : '', this.$slots.trigger ? [uploadComponent, this.$slots.default] : uploadComponent, this.$slots.tip, this.listType !== 'picture-card' ? uploadList : '']
    );
  }
};

/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_list_vue__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_list_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d904b34_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_list_vue__ = __webpack_require__(292);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d904b34_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_upload_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _progress = __webpack_require__(40);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  mixins: [_locale2.default],

  data: function data() {
    return {
      focusing: false
    };
  },

  components: { ElProgress: _progress2.default },

  props: {
    files: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    handlePreview: Function,
    listType: String
  },
  methods: {
    parsePercentage: function parsePercentage(val) {
      return parseInt(val, 10);
    },
    handleClick: function handleClick(file) {
      this.handlePreview && this.handlePreview(file);
    }
  }
};

/***/ }),
/* 292 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition-group',{class:[
    'el-upload-list',
    'el-upload-list--' + _vm.listType,
    { 'is-disabled': _vm.disabled }
  ],attrs:{"tag":"ul","name":"el-list"}},_vm._l((_vm.files),function(file,index){return _c('li',{key:index,class:['el-upload-list__item', 'is-' + file.status, _vm.focusing ? 'focusing' : ''],attrs:{"tabindex":"0"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"delete",[8,46],$event.key)){ return null; }!_vm.disabled && _vm.$emit('remove', file)},"focus":function($event){_vm.focusing = true},"blur":function($event){_vm.focusing = false},"click":function($event){_vm.focusing = false}}},[(file.status !== 'uploading' && ['picture-card', 'picture'].indexOf(_vm.listType) > -1)?_c('img',{staticClass:"el-upload-list__item-thumbnail",attrs:{"src":file.url,"alt":""}}):_vm._e(),_c('a',{staticClass:"el-upload-list__item-name",on:{"click":function($event){_vm.handleClick(file)}}},[_c('i',{staticClass:"el-icon-document"}),_vm._v(_vm._s(file.name)+"\n    ")]),_c('label',{staticClass:"el-upload-list__item-status-label"},[_c('i',{class:{
        'el-icon-upload-success': true,
        'el-icon-circle-check': _vm.listType === 'text',
        'el-icon-check': ['picture-card', 'picture'].indexOf(_vm.listType) > -1
      }})]),(!_vm.disabled)?_c('i',{staticClass:"el-icon-close",on:{"click":function($event){_vm.$emit('remove', file)}}}):_vm._e(),(!_vm.disabled)?_c('i',{staticClass:"el-icon-close-tip"},[_vm._v(_vm._s(_vm.t('el.upload.deleteTip')))]):_vm._e(),(file.status === 'uploading')?_c('el-progress',{attrs:{"type":_vm.listType === 'picture-card' ? 'circle' : 'line',"stroke-width":_vm.listType === 'picture-card' ? 6 : 2,"percentage":_vm.parsePercentage(file.percentage)}}):_vm._e(),(_vm.listType === 'picture-card')?_c('span',{staticClass:"el-upload-list__item-actions"},[(_vm.handlePreview && _vm.listType === 'picture-card')?_c('span',{staticClass:"el-upload-list__item-preview",on:{"click":function($event){_vm.handlePreview(file)}}},[_c('i',{staticClass:"el-icon-zoom-in"})]):_vm._e(),(!_vm.disabled)?_c('span',{staticClass:"el-upload-list__item-delete",on:{"click":function($event){_vm.$emit('remove', file)}}},[_c('i',{staticClass:"el-icon-delete"})]):_vm._e()]):_vm._e()],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 293 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_upload_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _babelHelperVueJsxMergeProps = __webpack_require__(41);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _ajax = __webpack_require__(295);

var _ajax2 = _interopRequireDefault(_ajax);

var _uploadDragger = __webpack_require__(42);

var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  inject: ['uploader'],
  components: {
    UploadDragger: _uploadDragger2.default
  },
  props: {
    type: String,
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    data: Object,
    headers: Object,
    withCredentials: Boolean,
    multiple: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    drag: Boolean,
    onPreview: {
      type: Function,
      default: function _default() {}
    },
    onRemove: {
      type: Function,
      default: function _default() {}
    },
    fileList: Array,
    autoUpload: Boolean,
    listType: String,
    httpRequest: {
      type: Function,
      default: _ajax2.default
    },
    disabled: Boolean,
    limit: Number,
    onExceed: Function
  },

  data: function data() {
    return {
      mouseover: false,
      reqs: {}
    };
  },


  methods: {
    isImage: function isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleChange: function handleChange(ev) {
      var files = ev.target.files;

      if (!files) return;
      this.uploadFiles(files);
    },
    uploadFiles: function uploadFiles(files) {
      var _this = this;

      if (this.limit && this.fileList.length + files.length > this.limit) {
        this.onExceed && this.onExceed(files, this.fileList);
        return;
      }

      var postFiles = Array.prototype.slice.call(files);
      if (!this.multiple) {
        postFiles = postFiles.slice(0, 1);
      }

      if (postFiles.length === 0) {
        return;
      }

      postFiles.forEach(function (rawFile) {
        _this.onStart(rawFile);
        if (_this.autoUpload) _this.upload(rawFile);
      });
    },
    upload: function upload(rawFile, file) {
      var _this2 = this;

      this.$refs.input.value = null;

      if (!this.beforeUpload) {
        return this.post(rawFile);
      }

      var before = this.beforeUpload(rawFile);
      if (before && before.then) {
        before.then(function (processedFile) {
          var fileType = Object.prototype.toString.call(processedFile);
          if (fileType === '[object File]' || fileType === '[object Blob]') {
            _this2.post(processedFile);
          } else {
            _this2.post(rawFile);
          }
        }, function () {
          _this2.onRemove(null, rawFile);
        });
      } else if (before !== false) {
        this.post(rawFile);
      } else {
        this.onRemove(null, rawFile);
      }
    },
    abort: function abort(file) {
      var reqs = this.reqs;

      if (file) {
        var uid = file;
        if (file.uid) uid = file.uid;
        if (reqs[uid]) {
          reqs[uid].abort();
        }
      } else {
        Object.keys(reqs).forEach(function (uid) {
          if (reqs[uid]) reqs[uid].abort();
          delete reqs[uid];
        });
      }
    },
    post: function post(rawFile) {
      var _this3 = this;

      var uid = rawFile.uid;

      var options = {
        headers: this.headers,
        withCredentials: this.withCredentials,
        file: rawFile,
        data: this.data,
        filename: this.name,
        action: this.action,
        onProgress: function onProgress(e) {
          _this3.onProgress(e, rawFile);
        },
        onSuccess: function onSuccess(res) {
          _this3.onSuccess(res, rawFile);
          delete _this3.reqs[uid];
        },
        onError: function onError(err) {
          _this3.onError(err, rawFile);
          delete _this3.reqs[uid];
        }
      };
      var req = this.httpRequest(options);
      this.reqs[uid] = req;
      if (req && req.then) {
        req.then(options.onSuccess, options.onError);
      }
    },
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.$refs.input.value = null;
        this.$refs.input.click();
      }
    },
    handleKeydown: function handleKeydown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        this.handleClick();
      }
    }
  },

  render: function render(h) {
    var handleClick = this.handleClick,
        drag = this.drag,
        name = this.name,
        handleChange = this.handleChange,
        multiple = this.multiple,
        accept = this.accept,
        listType = this.listType,
        uploadFiles = this.uploadFiles,
        disabled = this.disabled,
        handleKeydown = this.handleKeydown;

    var data = {
      class: {
        'el-upload': true
      },
      on: {
        click: handleClick,
        keydown: handleKeydown
      }
    };
    data.class['el-upload--' + listType] = true;
    return h(
      'div',
      (0, _babelHelperVueJsxMergeProps2.default)([data, {
        attrs: { tabindex: '0' }
      }]),
      [drag ? h(
        'upload-dragger',
        {
          attrs: { disabled: disabled },
          on: {
            'file': uploadFiles
          }
        },
        [this.$slots.default]
      ) : this.$slots.default, h(
        'input',
        { 'class': 'el-upload__input', attrs: { type: 'file', name: name, multiple: multiple, accept: accept },
          ref: 'input', on: {
            'change': handleChange
          }
        },
        []
      )]
    );
  }
};

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = upload;
function getError(action, option, xhr) {
  var msg = void 0;
  if (xhr.response) {
    msg = '' + (xhr.response.error || xhr.response);
  } else if (xhr.responseText) {
    msg = '' + xhr.responseText;
  } else {
    msg = 'fail to post ' + action + ' ' + xhr.status;
  }

  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = action;
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) {
    return text;
  }

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}

function upload(option) {
  if (typeof XMLHttpRequest === 'undefined') {
    return;
  }

  var xhr = new XMLHttpRequest();
  var action = option.action;

  if (xhr.upload) {
    xhr.upload.onprogress = function progress(e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      option.onProgress(e);
    };
  }

  var formData = new FormData();

  if (option.data) {
    Object.keys(option.data).forEach(function (key) {
      formData.append(key, option.data[key]);
    });
  }

  formData.append(option.filename, option.file);

  xhr.onerror = function error(e) {
    option.onError(e);
  };

  xhr.onload = function onload() {
    if (xhr.status < 200 || xhr.status >= 300) {
      return option.onError(getError(action, option, xhr));
    }

    option.onSuccess(getBody(xhr));
  };

  xhr.open('post', action, true);

  if (option.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = option.headers || {};

  for (var item in headers) {
    if (headers.hasOwnProperty(item) && headers[item] !== null) {
      xhr.setRequestHeader(item, headers[item]);
    }
  }
  xhr.send(formData);
  return xhr;
}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElUploadDrag',
  props: {
    disabled: Boolean
  },
  data: function data() {
    return {
      dragover: false
    };
  },

  methods: {
    onDragover: function onDragover() {
      if (!this.disabled) {
        this.dragover = true;
      }
    },
    onDrop: function onDrop(e) {
      if (!this.disabled) {
        this.dragover = false;
        this.$emit('file', e.dataTransfer.files);
      }
    }
  }
};

/***/ }),
/* 297 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-upload-dragger",class:{
    'is-dragover': _vm.dragover
  },on:{"drop":function($event){$event.preventDefault();_vm.onDrop($event)},"dragover":function($event){$event.preventDefault();_vm.onDragover($event)},"dragleave":function($event){$event.preventDefault();_vm.dragover = false}}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 298 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_iframe_upload_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _uploadDragger = __webpack_require__(42);

var _uploadDragger2 = _interopRequireDefault(_uploadDragger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    UploadDragger: _uploadDragger2.default
  },
  props: {
    type: String,
    data: {},
    action: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: 'file'
    },
    withCredentials: Boolean,
    accept: String,
    onStart: Function,
    onProgress: Function,
    onSuccess: Function,
    onError: Function,
    beforeUpload: Function,
    onPreview: {
      type: Function,
      default: function _default() {}
    },
    onRemove: {
      type: Function,
      default: function _default() {}
    },
    drag: Boolean,
    listType: String,
    disabled: Boolean,
    limit: Number,
    onExceed: Function
  },

  data: function data() {
    return {
      mouseover: false,
      domain: '',
      file: null,
      submitting: false
    };
  },


  methods: {
    isImage: function isImage(str) {
      return str.indexOf('image') !== -1;
    },
    handleClick: function handleClick() {
      if (!this.disabled) {
        this.$refs.input.click();
      }
    },
    handleChange: function handleChange(ev) {
      var file = ev.target.value;
      if (file) {
        this.uploadFiles(file);
      }
    },
    uploadFiles: function uploadFiles(file) {
      if (this.limit && this.$parent.uploadFiles.length + file.length > this.limit) {
        this.onExceed && this.onExceed(this.fileList);
        return;
      }

      if (this.submitting) return;
      this.submitting = true;
      this.file = file;
      this.onStart(file);

      var formNode = this.getFormNode();
      var dataSpan = this.getFormDataNode();
      var data = this.data;
      if (typeof data === 'function') {
        data = data(file);
      }
      var inputs = [];
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          inputs.push('<input name="' + key + '" value="' + data[key] + '"/>');
        }
      }
      dataSpan.innerHTML = inputs.join('');
      formNode.submit();
      dataSpan.innerHTML = '';
    },
    getFormNode: function getFormNode() {
      return this.$refs.form;
    },
    getFormDataNode: function getFormDataNode() {
      return this.$refs.data;
    }
  },

  created: function created() {
    this.frameName = 'frame-' + Date.now();
  },
  mounted: function mounted() {
    var self = this;
    !this.$isServer && window.addEventListener('message', function (event) {
      if (!self.file) return;
      var targetOrigin = new URL(self.action).origin;
      if (event.origin !== targetOrigin) return;
      var response = event.data;
      if (response.result === 'success') {
        self.onSuccess(response, self.file);
      } else if (response.result === 'failed') {
        self.onError(response, self.file);
      }
      self.submitting = false;
      self.file = null;
    }, false);
  },
  render: function render(h) {
    var drag = this.drag,
        uploadFiles = this.uploadFiles,
        listType = this.listType,
        frameName = this.frameName,
        disabled = this.disabled;

    var oClass = { 'el-upload': true };
    oClass['el-upload--' + listType] = true;

    return h(
      'div',
      {
        'class': oClass,
        on: {
          'click': this.handleClick
        },
        nativeOn: {
          'drop': this.onDrop,
          'dragover': this.handleDragover,
          'dragleave': this.handleDragleave
        }
      },
      [h(
        'iframe',
        {
          on: {
            'load': this.onload
          },

          ref: 'iframe',
          attrs: { name: frameName
          }
        },
        []
      ), h(
        'form',
        { ref: 'form', attrs: { action: this.action, target: frameName, enctype: 'multipart/form-data', method: 'POST' }
        },
        [h(
          'input',
          {
            'class': 'el-upload__input',
            attrs: { type: 'file',

              name: 'file',

              accept: this.accept },
            ref: 'input', on: {
              'change': this.handleChange
            }
          },
          []
        ), h(
          'input',
          {
            attrs: { type: 'hidden', name: 'documentDomain' },
            domProps: {
              'value': this.$isServer ? '' : document.domain
            }
          },
          []
        ), h(
          'span',
          { ref: 'data' },
          []
        )]
      ), drag ? h(
        'upload-dragger',
        {
          on: {
            'file': uploadFiles
          },
          attrs: { disabled: disabled }
        },
        [this.$slots.default]
      ) : this.$slots.default]
    );
  }
};

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _progress = __webpack_require__(301);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_progress2.default.install = function (Vue) {
  Vue.component(_progress2.default.name, _progress2.default);
};

exports.default = _progress2.default;

/***/ }),
/* 301 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dbf4f40_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_progress_vue__ = __webpack_require__(303);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7dbf4f40_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_progress_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElProgress',
  props: {
    type: {
      type: String,
      default: 'line',
      validator: function validator(val) {
        return ['line', 'circle'].indexOf(val) > -1;
      }
    },
    percentage: {
      type: Number,
      default: 0,
      required: true,
      validator: function validator(val) {
        return val >= 0 && val <= 100;
      }
    },
    status: {
      type: String
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    textInside: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 126
    },
    showText: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    barStyle: function barStyle() {
      var style = {};
      style.width = this.percentage + '%';
      return style;
    },
    relativeStrokeWidth: function relativeStrokeWidth() {
      return (this.strokeWidth / this.width * 100).toFixed(1);
    },
    trackPath: function trackPath() {
      var radius = parseInt(50 - parseFloat(this.relativeStrokeWidth) / 2, 10);

      return 'M 50 50 m 0 -' + radius + ' a ' + radius + ' ' + radius + ' 0 1 1 0 ' + radius * 2 + ' a ' + radius + ' ' + radius + ' 0 1 1 0 -' + radius * 2;
    },
    perimeter: function perimeter() {
      var radius = 50 - parseFloat(this.relativeStrokeWidth) / 2;
      return 2 * Math.PI * radius;
    },
    circlePathStyle: function circlePathStyle() {
      var perimeter = this.perimeter;
      return {
        strokeDasharray: perimeter + 'px,' + perimeter + 'px',
        strokeDashoffset: (1 - this.percentage / 100) * perimeter + 'px',
        transition: 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      };
    },
    stroke: function stroke() {
      var ret;
      switch (this.status) {
        case 'success':
          ret = '#13ce66';
          break;
        case 'exception':
          ret = '#ff4949';
          break;
        default:
          ret = '#20a0ff';
      }
      return ret;
    },
    iconClass: function iconClass() {
      if (this.type === 'line') {
        return this.status === 'success' ? 'el-icon-circle-check' : 'el-icon-circle-cross';
      } else {
        return this.status === 'success' ? 'el-icon-check' : 'el-icon-close';
      }
    },
    progressTextSize: function progressTextSize() {
      return this.type === 'line' ? 12 + this.strokeWidth * 0.4 : this.width * 0.111111 + 2;
    }
  }
};

/***/ }),
/* 303 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-progress",class:[
    'el-progress--' + _vm.type,
    _vm.status ? 'is-' + _vm.status : '',
    {
      'el-progress--without-text': !_vm.showText,
      'el-progress--text-inside': _vm.textInside,
    }
  ],attrs:{"role":"progressbar","aria-valuenow":_vm.percentage,"aria-valuemin":"0","aria-valuemax":"100"}},[(_vm.type === 'line')?_c('div',{staticClass:"el-progress-bar"},[_c('div',{staticClass:"el-progress-bar__outer",style:({height: _vm.strokeWidth + 'px'})},[_c('div',{staticClass:"el-progress-bar__inner",style:(_vm.barStyle)},[(_vm.showText && _vm.textInside)?_c('div',{staticClass:"el-progress-bar__innerText"},[_vm._v(_vm._s(_vm.percentage)+"%")]):_vm._e()])])]):_c('div',{staticClass:"el-progress-circle",style:({height: _vm.width + 'px', width: _vm.width + 'px'})},[_c('svg',{attrs:{"viewBox":"0 0 100 100"}},[_c('path',{staticClass:"el-progress-circle__track",attrs:{"d":_vm.trackPath,"stroke":"#e5e9f2","stroke-width":_vm.relativeStrokeWidth,"fill":"none"}}),_c('path',{staticClass:"el-progress-circle__path",style:(_vm.circlePathStyle),attrs:{"d":_vm.trackPath,"stroke-linecap":"round","stroke":_vm.stroke,"stroke-width":_vm.relativeStrokeWidth,"fill":"none"}})])]),(_vm.showText && !_vm.textInside)?_c('div',{staticClass:"el-progress__text",style:({fontSize: _vm.progressTextSize + 'px'})},[(!_vm.status)?[_vm._v(_vm._s(_vm.percentage)+"%")]:_c('i',{class:_vm.iconClass})],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _spinner = __webpack_require__(305);

var _spinner2 = _interopRequireDefault(_spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_spinner2.default.install = function (Vue) {
  Vue.component(_spinner2.default.name, _spinner2.default);
};

exports.default = _spinner2.default;

/***/ }),
/* 305 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinner_vue__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinner_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinner_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0932a299_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spinner_vue__ = __webpack_require__(307);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_spinner_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0932a299_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_spinner_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//
//

exports.default = {
  name: 'ElSpinner',
  props: {
    type: String,
    radius: {
      type: Number,
      default: 100
    },
    strokeWidth: {
      type: Number,
      default: 5
    },
    strokeColor: {
      type: String,
      default: '#efefef'
    }
  }
};

/***/ }),
/* 307 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"el-spinner"},[_c('svg',{staticClass:"el-spinner-inner",style:({ width: _vm.radius/2 + 'px', height: _vm.radius/2 + 'px' }),attrs:{"viewBox":"0 0 50 50"}},[_c('circle',{staticClass:"path",attrs:{"cx":"25","cy":"25","r":"20","fill":"none","stroke":_vm.strokeColor,"stroke-width":_vm.strokeWidth}})])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(309);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _main2.default;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _main = __webpack_require__(310);

var _main2 = _interopRequireDefault(_main);

var _popup = __webpack_require__(16);

var _vdom = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessageConstructor = _vue2.default.extend(_main2.default);

var instance = void 0;
var instances = [];
var seed = 1;

var Message = function Message(options) {
  if (_vue2.default.prototype.$isServer) return;
  options = options || {};
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  var userOnClose = options.onClose;
  var id = 'message_' + seed++;

  options.onClose = function () {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  if ((0, _vdom.isVNode)(instance.message)) {
    instance.$slots.default = [instance.message];
    instance.message = null;
  }
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = _popup.PopupManager.nextZIndex();
  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(function (type) {
  Message[type] = function (options) {
    if (typeof options === 'string') {
      options = {
        message: options
      };
    }
    options.type = type;
    return Message(options);
  };
});

Message.close = function (id, userOnClose) {
  for (var i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

Message.closeAll = function () {
  for (var i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

exports.default = Message;

/***/ }),
/* 310 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46a205d5_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(312);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_46a205d5_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

var typeMap = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error'
};

exports.default = {
  data: function data() {
    return {
      visible: false,
      message: '',
      duration: 3000,
      type: 'info',
      iconClass: '',
      customClass: '',
      onClose: null,
      showClose: false,
      closed: false,
      timer: null,
      dangerouslyUseHTMLString: false,
      center: false
    };
  },


  computed: {
    iconWrapClass: function iconWrapClass() {
      var classes = ['el-message__icon'];
      if (this.type && !this.iconClass) {
        classes.push('el-message__icon--' + this.type);
      }
      return classes;
    },
    typeClass: function typeClass() {
      return this.type && !this.iconClass ? 'el-message__icon el-icon-' + typeMap[this.type] : '';
    }
  },

  watch: {
    closed: function closed(newVal) {
      if (newVal) {
        this.visible = false;
        this.$el.addEventListener('transitionend', this.destroyElement);
      }
    }
  },

  methods: {
    destroyElement: function destroyElement() {
      this.$el.removeEventListener('transitionend', this.destroyElement);
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close: function close() {
      this.closed = true;
      if (typeof this.onClose === 'function') {
        this.onClose(this);
      }
    },
    clearTimer: function clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer: function startTimer() {
      var _this = this;

      if (this.duration > 0) {
        this.timer = setTimeout(function () {
          if (!_this.closed) {
            _this.close();
          }
        }, this.duration);
      }
    },
    keydown: function keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    }
  },
  mounted: function mounted() {
    this.startTimer();
    document.addEventListener('keydown', this.keydown);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keydown);
  }
};

/***/ }),
/* 312 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-message-fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],class:[
      'el-message',
      _vm.type && !_vm.iconClass ? ("el-message--" + _vm.type) : '',
      _vm.center ? 'is-center' : '',
      _vm.customClass],attrs:{"role":"alert"},on:{"mouseenter":_vm.clearTimer,"mouseleave":_vm.startTimer}},[(_vm.iconClass)?_c('i',{class:_vm.iconClass}):_c('i',{class:_vm.typeClass}),_vm._t("default",[(!_vm.dangerouslyUseHTMLString)?_c('p',{staticClass:"el-message__content"},[_vm._v(_vm._s(_vm.message))]):_c('p',{staticClass:"el-message__content",domProps:{"innerHTML":_vm._s(_vm.message)}})]),(_vm.showClose)?_c('i',{staticClass:"el-message__closeBtn el-icon-close",on:{"click":_vm.close}}):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(314);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_146966ca_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(316);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_146966ca_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElBadge',

  props: {
    value: {},
    max: Number,
    isDot: Boolean,
    hidden: Boolean
  },

  computed: {
    content: function content() {
      if (this.isDot) return;

      var value = this.value;
      var max = this.max;

      if (typeof value === 'number' && typeof max === 'number') {
        return max < value ? max + '+' : value;
      }

      return value;
    }
  }
};

/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-badge"},[_vm._t("default"),_c('transition',{attrs:{"name":"el-zoom-in-center"}},[_c('sup',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hidden && ( _vm.content || _vm.isDot )),expression:"!hidden && ( content || isDot )"}],staticClass:"el-badge__content",class:{ 'is-fixed': _vm.$slots.default, 'is-dot': _vm.isDot },domProps:{"textContent":_vm._s(_vm.content)}})])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(318);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca20504_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(320);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca20504_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElCard',

  props: ['header', 'bodyStyle']
};

/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-card"},[(_vm.$slots.header || _vm.header)?_c('div',{staticClass:"el-card__header"},[_vm._t("header",[_vm._v(_vm._s(_vm.header))])],2):_vm._e(),_c('div',{staticClass:"el-card__body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(322);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3733bfb3_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(324);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3733bfb3_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElRate',

  mixins: [_migrating2.default],

  data: function data() {
    return {
      classMap: {},
      pointerAtLeftHalf: true,
      currentValue: this.value,
      hoverIndex: -1
    };
  },


  props: {
    value: {
      type: Number,
      default: 0
    },
    lowThreshold: {
      type: Number,
      default: 2
    },
    highThreshold: {
      type: Number,
      default: 4
    },
    max: {
      type: Number,
      default: 5
    },
    colors: {
      type: Array,
      default: function _default() {
        return ['#F7BA2A', '#F7BA2A', '#F7BA2A'];
      }
    },
    voidColor: {
      type: String,
      default: '#C6D1DE'
    },
    disabledVoidColor: {
      type: String,
      default: '#EFF2F7'
    },
    iconClasses: {
      type: Array,
      default: function _default() {
        return ['el-icon-star-on', 'el-icon-star-on', 'el-icon-star-on'];
      }
    },
    voidIconClass: {
      type: String,
      default: 'el-icon-star-off'
    },
    disabledVoidIconClass: {
      type: String,
      default: 'el-icon-star-on'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    showScore: {
      type: Boolean,
      default: false
    },
    textColor: {
      type: String,
      default: '#1f2d3d'
    },
    texts: {
      type: Array,
      default: function _default() {
        return ['极差', '失望', '一般', '满意', '惊喜'];
      }
    },
    scoreTemplate: {
      type: String,
      default: '{value}'
    }
  },

  computed: {
    text: function text() {
      var result = '';
      if (this.showScore) {
        result = this.scoreTemplate.replace(/\{\s*value\s*\}/, this.disabled ? this.value : this.currentValue);
      } else if (this.showText) {
        result = this.texts[Math.ceil(this.currentValue) - 1];
      }
      return result;
    },
    decimalStyle: function decimalStyle() {
      var width = '';
      if (this.disabled) {
        width = (this.valueDecimal < 50 ? 0 : 50) + '%';
      }
      if (this.allowHalf) {
        width = '50%';
      }
      return {
        color: this.activeColor,
        width: width
      };
    },
    valueDecimal: function valueDecimal() {
      return this.value * 100 - Math.floor(this.value) * 100;
    },
    decimalIconClass: function decimalIconClass() {
      return this.getValueFromMap(this.value, this.classMap);
    },
    voidClass: function voidClass() {
      return this.disabled ? this.classMap.disabledVoidClass : this.classMap.voidClass;
    },
    activeClass: function activeClass() {
      return this.getValueFromMap(this.currentValue, this.classMap);
    },
    colorMap: function colorMap() {
      return {
        lowColor: this.colors[0],
        mediumColor: this.colors[1],
        highColor: this.colors[2],
        voidColor: this.voidColor,
        disabledVoidColor: this.disabledVoidColor
      };
    },
    activeColor: function activeColor() {
      return this.getValueFromMap(this.currentValue, this.colorMap);
    },
    classes: function classes() {
      var result = [];
      var i = 0;
      var threshold = this.currentValue;
      if (this.allowHalf && this.currentValue !== Math.floor(this.currentValue)) {
        threshold--;
      }
      for (; i < threshold; i++) {
        result.push(this.activeClass);
      }
      for (; i < this.max; i++) {
        result.push(this.voidClass);
      }
      return result;
    }
  },

  watch: {
    value: function value(val) {
      this.currentValue = val;
      this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'text-template': 'text-template is renamed to score-template.'
        }
      };
    },
    getValueFromMap: function getValueFromMap(value, map) {
      var result = '';
      if (value <= this.lowThreshold) {
        result = map.lowColor || map.lowClass;
      } else if (value >= this.highThreshold) {
        result = map.highColor || map.highClass;
      } else {
        result = map.mediumColor || map.mediumClass;
      }
      return result;
    },
    showDecimalIcon: function showDecimalIcon(item) {
      var showWhenDisabled = this.disabled && this.valueDecimal > 0 && item - 1 < this.value && item > this.value;
      /* istanbul ignore next */
      var showWhenAllowHalf = this.allowHalf && this.pointerAtLeftHalf && item - 0.5 <= this.currentValue && item > this.currentValue;
      return showWhenDisabled || showWhenAllowHalf;
    },
    getIconStyle: function getIconStyle(item) {
      var voidColor = this.disabled ? this.colorMap.disabledVoidColor : this.colorMap.voidColor;
      return {
        color: item <= this.currentValue ? this.activeColor : voidColor
      };
    },
    selectValue: function selectValue(value) {
      if (this.disabled) {
        return;
      }
      if (this.allowHalf && this.pointerAtLeftHalf) {
        this.$emit('input', this.currentValue);
        this.$emit('change', this.currentValue);
      } else {
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    handelKey: function handelKey(e) {
      var currentValue = this.currentValue;
      var keyCode = e.keyCode;
      if (keyCode === 38 || keyCode === 39) {
        // left / down
        if (this.allowHalf) {
          currentValue += 0.5;
        } else {
          currentValue += 1;
        }
        e.stopPropagation();
        e.preventDefault();
      } else if (keyCode === 37 || keyCode === 40) {
        if (this.allowHalf) {
          currentValue -= 0.5;
        } else {
          currentValue -= 1;
        }
        e.stopPropagation();
        e.preventDefault();
      }
      currentValue = currentValue < 0 ? 0 : currentValue;
      currentValue = currentValue > this.max ? this.max : currentValue;

      this.$emit('input', currentValue);
      this.$emit('change', currentValue);
    },
    setCurrentValue: function setCurrentValue(value, event) {
      if (this.disabled) {
        return;
      }
      /* istanbul ignore if */
      if (this.allowHalf) {
        var target = event.target;
        if ((0, _dom.hasClass)(target, 'el-rate__item')) {
          target = target.querySelector('.el-rate__icon');
        }
        if ((0, _dom.hasClass)(target, 'el-rate__decimal')) {
          target = target.parentNode;
        }
        this.pointerAtLeftHalf = event.offsetX * 2 <= target.clientWidth;
        this.currentValue = this.pointerAtLeftHalf ? value - 0.5 : value;
      } else {
        this.currentValue = value;
      }
      this.hoverIndex = value;
    },
    resetCurrentValue: function resetCurrentValue() {
      if (this.disabled) {
        return;
      }
      if (this.allowHalf) {
        this.pointerAtLeftHalf = this.value !== Math.floor(this.value);
      }
      this.currentValue = this.value;
      this.hoverIndex = -1;
    }
  },

  created: function created() {
    if (!this.value) {
      this.$emit('input', 0);
    }
    this.classMap = {
      lowClass: this.iconClasses[0],
      mediumClass: this.iconClasses[1],
      highClass: this.iconClasses[2],
      voidClass: this.voidIconClass,
      disabledVoidClass: this.disabledVoidIconClass
    };
  }
};

/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-rate",attrs:{"role":"slider","aria-valuenow":_vm.currentValue,"aria-valuetext":_vm.text,"aria-valuemin":"0","aria-valuemax":_vm.max,"tabindex":"0"},on:{"keydown":_vm.handelKey}},[_vm._l((_vm.max),function(item){return _c('span',{staticClass:"el-rate__item",style:({ cursor: _vm.disabled ? 'auto' : 'pointer' }),on:{"mousemove":function($event){_vm.setCurrentValue(item, $event)},"mouseleave":_vm.resetCurrentValue,"click":function($event){_vm.selectValue(item)}}},[_c('i',{staticClass:"el-rate__icon",class:[_vm.classes[item - 1], { 'hover': _vm.hoverIndex === item }],style:(_vm.getIconStyle(item))},[(_vm.showDecimalIcon(item))?_c('i',{staticClass:"el-rate__decimal",class:_vm.decimalIconClass,style:(_vm.decimalStyle)}):_vm._e()])])}),(_vm.showText || _vm.showScore)?_c('span',{staticClass:"el-rate__text",style:({ color: _vm.textColor })},[_vm._v(_vm._s(_vm.text))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _steps = __webpack_require__(326);

var _steps2 = _interopRequireDefault(_steps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_steps2.default.install = function (Vue) {
  Vue.component(_steps2.default.name, _steps2.default);
};

exports.default = _steps2.default;

/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_steps_vue__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_steps_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_steps_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32db8c94_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_steps_vue__ = __webpack_require__(328);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_steps_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_32db8c94_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_steps_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElSteps',

  mixins: [_migrating2.default],

  props: {
    space: [Number, String],
    active: Number,
    direction: {
      type: String,
      default: 'horizontal'
    },
    alignCenter: Boolean,
    simple: Boolean,
    finishStatus: {
      type: String,
      default: 'finish'
    },
    processStatus: {
      type: String,
      default: 'process'
    }
  },

  data: function data() {
    return {
      steps: [],
      stepOffset: 0
    };
  },


  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'center': 'center is removed.'
        }
      };
    }
  },

  watch: {
    active: function active(newVal, oldVal) {
      this.$emit('change', newVal, oldVal);
    },
    steps: function steps(_steps) {
      _steps.forEach(function (child, index) {
        child.index = index;
      });
    }
  }
}; //
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

/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-steps",class:[
     !_vm.simple && 'el-steps--' + _vm.direction,
     _vm.simple && 'el-steps--simple'
   ]},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _step = __webpack_require__(330);

var _step2 = _interopRequireDefault(_step);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_step2.default.install = function (Vue) {
  Vue.component(_step2.default.name, _step2.default);
};

exports.default = _step2.default;

/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_step_vue__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_step_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_step_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ca27296_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_step_vue__ = __webpack_require__(332);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_step_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ca27296_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_step_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

exports.default = {
  name: 'ElStep',

  props: {
    title: String,
    icon: String,
    description: String,
    status: String
  },

  data: function data() {
    return {
      index: -1,
      lineStyle: {},
      internalStatus: ''
    };
  },
  beforeCreate: function beforeCreate() {
    this.$parent.steps.push(this);
  },
  beforeDestroy: function beforeDestroy() {
    var steps = this.$parent.steps;
    var index = steps.indexOf(this);
    if (index >= 0) {
      steps.splice(index, 1);
    }
  },


  computed: {
    currentStatus: function currentStatus() {
      return this.status || this.internalStatus;
    },
    prevStatus: function prevStatus() {
      var prevStep = this.$parent.steps[this.index - 1];
      return prevStep ? prevStep.currentStatus : 'wait';
    },
    isCenter: function isCenter() {
      return this.$parent.alignCenter;
    },
    isVertical: function isVertical() {
      return this.$parent.direction === 'vertical';
    },
    isSimple: function isSimple() {
      return this.$parent.simple;
    },
    isLast: function isLast() {
      var parent = this.$parent;
      return parent.steps[parent.steps.length - 1] === this;
    },
    stepsCount: function stepsCount() {
      return this.$parent.steps.length;
    },
    space: function space() {
      var isSimple = this.isSimple,
          space = this.$parent.space;

      return isSimple ? '' : space;
    },

    style: function style() {
      var style = {};
      var parent = this.$parent;
      var len = parent.steps.length;

      var space = typeof this.space === 'number' ? this.space + 'px' : this.space ? this.space : 100 / (len - 1) + '%';
      style.flexBasis = space;
      if (this.isVertical) return style;
      if (this.isLast) {
        style.maxWidth = 100 / this.stepsCount + '%';
      } else {
        style.marginRight = -this.$parent.stepOffset + 'px';
      }

      return style;
    }
  },

  methods: {
    updateStatus: function updateStatus(val) {
      var prevChild = this.$parent.$children[this.index - 1];

      if (val > this.index) {
        this.internalStatus = this.$parent.finishStatus;
      } else if (val === this.index && this.prevStatus !== 'error') {
        this.internalStatus = this.$parent.processStatus;
      } else {
        this.internalStatus = 'wait';
      }

      if (prevChild) prevChild.calcProgress(this.internalStatus);
    },
    calcProgress: function calcProgress(status) {
      var step = 100;
      var style = {};

      style.transitionDelay = 150 * this.index + 'ms';
      if (status === this.$parent.processStatus) {
        step = this.currentStatus !== 'error' ? 0 : 0;
      } else if (status === 'wait') {
        step = 0;
        style.transitionDelay = -150 * this.index + 'ms';
      }

      style.borderWidth = step ? '1px' : 0;
      this.$parent.direction === 'vertical' ? style.height = step + '%' : style.width = step + '%';

      this.lineStyle = style;
    }
  },

  mounted: function mounted() {
    var _this = this;

    var unwatch = this.$watch('index', function (val) {
      _this.$watch('$parent.active', _this.updateStatus, { immediate: true });
      unwatch();
    });
  }
};

/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-step",class:[
    !_vm.isSimple && ("is-" + (_vm.$parent.direction)),
    _vm.isSimple && 'is-simple',
    _vm.isLast && !_vm.space && !_vm.isCenter && 'is-flex',
    _vm.isCenter && !_vm.isVertical && !_vm.isSimple && 'is-center'
   ],style:(_vm.style)},[_c('div',{staticClass:"el-step__head",class:("is-" + _vm.currentStatus)},[_c('div',{staticClass:"el-step__line",style:(_vm.isLast ? '' : { marginRight: _vm.$parent.stepOffset + 'px' })},[_c('i',{staticClass:"el-step__line-inner",style:(_vm.lineStyle)})]),_c('div',{staticClass:"el-step__icon",class:("is-" + (_vm.icon ? 'icon' : 'text'))},[(_vm.currentStatus !== 'success' && _vm.currentStatus !== 'error')?_vm._t("icon",[(_vm.icon)?_c('i',{staticClass:"el-step__icon-inner",class:[_vm.icon]}):_vm._e(),(!_vm.icon && !_vm.isSimple)?_c('div',{staticClass:"el-step__icon-inner"},[_vm._v(_vm._s(_vm.index + 1))]):_vm._e()]):_c('i',{staticClass:"el-step__icon-inner is-status",class:['el-icon-' + (_vm.currentStatus === 'success' ? 'check' : 'close')]})],2)]),_c('div',{staticClass:"el-step__main"},[_c('div',{ref:"title",staticClass:"el-step__title",class:['is-' + _vm.currentStatus]},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2),(_vm.isSimple)?_c('div',{staticClass:"el-step__arrow"}):_c('div',{staticClass:"el-step__description",class:['is-' + _vm.currentStatus]},[_vm._t("description",[_vm._v(_vm._s(_vm.description))])],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(334);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30c26296_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(336);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30c26296_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _throttle = __webpack_require__(33);

var _throttle2 = _interopRequireDefault(_throttle);

var _resizeEvent = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'ElCarousel',

  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    height: String,
    trigger: {
      type: String,
      default: 'hover'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 3000
    },
    indicatorPosition: String,
    indicator: {
      type: Boolean,
      default: true
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    type: String
  },

  data: function data() {
    return {
      items: [],
      activeIndex: -1,
      containerWidth: 0,
      timer: null,
      hover: false
    };
  },


  computed: {
    hasLabel: function hasLabel() {
      return this.items.some(function (item) {
        return item.label.toString().length > 0;
      });
    }
  },

  watch: {
    items: function items(val) {
      if (val.length > 0) this.setActiveItem(this.initialIndex);
    },
    activeIndex: function activeIndex(val, oldVal) {
      this.resetItemPosition(oldVal);
      this.$emit('change', val, oldVal);
    },
    autoplay: function autoplay(val) {
      val ? this.startTimer() : this.pauseTimer();
    }
  },

  methods: {
    handleMouseEnter: function handleMouseEnter() {
      this.hover = true;
      this.pauseTimer();
    },
    handleMouseLeave: function handleMouseLeave() {
      this.hover = false;
      this.startTimer();
    },
    itemInStage: function itemInStage(item, index) {
      var length = this.items.length;
      if (index === length - 1 && item.inStage && this.items[0].active || item.inStage && this.items[index + 1] && this.items[index + 1].active) {
        return 'left';
      } else if (index === 0 && item.inStage && this.items[length - 1].active || item.inStage && this.items[index - 1] && this.items[index - 1].active) {
        return 'right';
      }
      return false;
    },
    handleButtonEnter: function handleButtonEnter(arrow) {
      var _this = this;

      this.items.forEach(function (item, index) {
        if (arrow === _this.itemInStage(item, index)) {
          item.hover = true;
        }
      });
    },
    handleButtonLeave: function handleButtonLeave() {
      this.items.forEach(function (item) {
        item.hover = false;
      });
    },
    updateItems: function updateItems() {
      this.items = this.$children.filter(function (child) {
        return child.$options.name === 'ElCarouselItem';
      });
    },
    resetItemPosition: function resetItemPosition(oldIndex) {
      var _this2 = this;

      this.items.forEach(function (item, index) {
        item.translateItem(index, _this2.activeIndex, oldIndex);
      });
    },
    playSlides: function playSlides() {
      if (this.activeIndex < this.items.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },
    pauseTimer: function pauseTimer() {
      clearInterval(this.timer);
    },
    startTimer: function startTimer() {
      if (this.interval <= 0 || !this.autoplay) return;
      this.timer = setInterval(this.playSlides, this.interval);
    },
    setActiveItem: function setActiveItem(index) {
      if (typeof index === 'string') {
        var filteredItems = this.items.filter(function (item) {
          return item.name === index;
        });
        if (filteredItems.length > 0) {
          index = this.items.indexOf(filteredItems[0]);
        }
      }
      index = Number(index);
      if (isNaN(index) || index !== Math.floor(index)) {
        "production" !== 'production' && console.warn('[Element Warn][Carousel]index must be an integer.');
        return;
      }
      var length = this.items.length;
      if (index < 0) {
        this.activeIndex = length - 1;
      } else if (index >= length) {
        this.activeIndex = 0;
      } else {
        this.activeIndex = index;
      }
    },
    prev: function prev() {
      this.setActiveItem(this.activeIndex - 1);
    },
    next: function next() {
      this.setActiveItem(this.activeIndex + 1);
    },
    handleIndicatorClick: function handleIndicatorClick(index) {
      this.activeIndex = index;
    },
    handleIndicatorHover: function handleIndicatorHover(index) {
      if (this.trigger === 'hover' && index !== this.activeIndex) {
        this.activeIndex = index;
      }
    }
  },

  created: function created() {
    var _this3 = this;

    this.throttledArrowClick = (0, _throttle2.default)(300, true, function (index) {
      _this3.setActiveItem(index);
    });
    this.throttledIndicatorHover = (0, _throttle2.default)(300, function (index) {
      _this3.handleIndicatorHover(index);
    });
  },
  mounted: function mounted() {
    var _this4 = this;

    this.updateItems();
    this.$nextTick(function () {
      (0, _resizeEvent.addResizeListener)(_this4.$el, _this4.resetItemPosition);
      if (_this4.initialIndex < _this4.items.length && _this4.initialIndex >= 0) {
        _this4.activeIndex = _this4.initialIndex;
      }
      _this4.startTimer();
    });
  },
  beforeDestroy: function beforeDestroy() {
    if (this.$el) (0, _resizeEvent.removeResizeListener)(this.$el, this.resetItemPosition);
  }
};

/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-carousel",class:{ 'el-carousel--card': _vm.type === 'card' },on:{"mouseenter":function($event){$event.stopPropagation();_vm.handleMouseEnter($event)},"mouseleave":function($event){$event.stopPropagation();_vm.handleMouseLeave($event)}}},[_c('div',{staticClass:"el-carousel__container",style:({ height: _vm.height })},[_c('transition',{attrs:{"name":"carousel-arrow-left"}},[(_vm.arrow !== 'never')?_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"el-carousel__arrow el-carousel__arrow--left",on:{"mouseenter":function($event){_vm.handleButtonEnter('left')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();_vm.throttledArrowClick(_vm.activeIndex - 1)}}},[_c('i',{staticClass:"el-icon-arrow-left"})]):_vm._e()]),_c('transition',{attrs:{"name":"carousel-arrow-right"}},[(_vm.arrow !== 'never')?_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.arrow === 'always' || _vm.hover),expression:"arrow === 'always' || hover"}],staticClass:"el-carousel__arrow el-carousel__arrow--right",on:{"mouseenter":function($event){_vm.handleButtonEnter('right')},"mouseleave":_vm.handleButtonLeave,"click":function($event){$event.stopPropagation();_vm.throttledArrowClick(_vm.activeIndex + 1)}}},[_c('i',{staticClass:"el-icon-arrow-right"})]):_vm._e()]),_vm._t("default")],2),(_vm.indicatorPosition !== 'none')?_c('ul',{staticClass:"el-carousel__indicators",class:{ 'el-carousel__indicators--labels': _vm.hasLabel, 'el-carousel__indicators--outside': _vm.indicatorPosition === 'outside' || _vm.type === 'card' }},_vm._l((_vm.items),function(item,index){return _c('li',{staticClass:"el-carousel__indicator",class:{ 'is-active': index === _vm.activeIndex },on:{"mouseenter":function($event){_vm.throttledIndicatorHover(index)},"click":function($event){$event.stopPropagation();_vm.handleIndicatorClick(index)}}},[_c('button',{staticClass:"el-carousel__button"},[(_vm.hasLabel)?_c('span',[_vm._v(_vm._s(item.label))]):_vm._e()])])})):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(338);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _resizeEvent = __webpack_require__(18);

var _scrollbarWidth = __webpack_require__(34);

var _scrollbarWidth2 = _interopRequireDefault(_scrollbarWidth);

var _util = __webpack_require__(4);

var _bar = __webpack_require__(339);

var _bar2 = _interopRequireDefault(_bar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
// reference https://github.com/noeldelgado/gemini-scrollbar/blob/master/index.js

exports.default = {
  name: 'ElScrollbar',

  components: { Bar: _bar2.default },

  props: {
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },

  data: function data() {
    return {
      sizeWidth: '0',
      sizeHeight: '0',
      moveX: 0,
      moveY: 0
    };
  },


  computed: {
    wrap: function wrap() {
      return this.$refs.wrap;
    }
  },

  render: function render(h) {
    var gutter = (0, _scrollbarWidth2.default)();
    var style = this.wrapStyle;

    if (gutter) {
      var gutterWith = '-' + gutter + 'px';
      var gutterStyle = 'margin-bottom: ' + gutterWith + '; margin-right: ' + gutterWith + ';';

      if (Array.isArray(this.wrapStyle)) {
        style = (0, _util.toObject)(this.wrapStyle);
        style.marginRight = style.marginBottom = gutterWith;
      } else if (typeof this.wrapStyle === 'string') {
        style += gutterStyle;
      } else {
        style = gutterStyle;
      }
    }
    var view = h(this.tag, {
      class: ['el-scrollbar__view', this.viewClass],
      style: this.viewStyle,
      ref: 'resize'
    }, this.$slots.default);
    var wrap = h(
      'div',
      {
        ref: 'wrap',
        style: style,
        on: {
          'scroll': this.handleScroll
        },

        'class': [this.wrapClass, 'el-scrollbar__wrap', gutter ? '' : 'el-scrollbar__wrap--hidden-default'] },
      [[view]]
    );
    var nodes = void 0;

    if (!this.native) {
      nodes = [wrap, h(
        _bar2.default,
        {
          attrs: {
            move: this.moveX,
            size: this.sizeWidth }
        },
        []
      ), h(
        _bar2.default,
        {
          attrs: {
            vertical: true,
            move: this.moveY,
            size: this.sizeHeight }
        },
        []
      )];
    } else {
      nodes = [h(
        'div',
        {
          ref: 'wrap',
          'class': [this.wrapClass, 'el-scrollbar__wrap'],
          style: style },
        [[view]]
      )];
    }
    return h('div', { class: 'el-scrollbar' }, nodes);
  },


  methods: {
    handleScroll: function handleScroll() {

      var wrap = this.wrap;
      this.moveY = wrap.scrollTop * 100 / wrap.clientHeight;
      this.moveX = wrap.scrollLeft * 100 / wrap.clientWidth;
      var hei = wrap.scrollTop + wrap.clientHeight;
      if (hei + 2 > this.$refs.resize.offsetHeight && hei - 2 < this.$refs.resize.offsetHeight) {
        if (wrap.scrollTop == 0) {
          return;
        }
        if (this.$parent.$parent) {
          this.$parent.$parent.$emit('to_bottom');
        }
      }
    },
    update: function update() {
      var heightPercentage = void 0,
          widthPercentage = void 0;
      var wrap = this.wrap;
      if (!wrap) return;

      heightPercentage = wrap.clientHeight * 100 / wrap.scrollHeight;
      widthPercentage = wrap.clientWidth * 100 / wrap.scrollWidth;

      this.sizeHeight = heightPercentage < 100 ? heightPercentage + '%' : '';
      this.sizeWidth = widthPercentage < 100 ? widthPercentage + '%' : '';
    }
  },

  mounted: function mounted() {
    if (this.native) return;
    this.$nextTick(this.update);
    !this.noresize && (0, _resizeEvent.addResizeListener)(this.$refs.resize, this.update);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.native) return;
    !this.noresize && (0, _resizeEvent.removeResizeListener)(this.$refs.resize, this.update);
  }
};

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _dom = __webpack_require__(3);

var _util = __webpack_require__(340);

/* istanbul ignore next */
exports.default = {
  name: 'Bar',

  props: {
    vertical: Boolean,
    size: String,
    move: Number
  },

  computed: {
    bar: function bar() {
      return _util.BAR_MAP[this.vertical ? 'vertical' : 'horizontal'];
    },
    wrap: function wrap() {
      return this.$parent.wrap;
    }
  },

  render: function render(h) {
    var size = this.size,
        move = this.move,
        bar = this.bar;


    return h(
      'div',
      {
        'class': ['el-scrollbar__bar', 'is-' + bar.key],
        on: {
          'mousedown': this.clickTrackHandler
        }
      },
      [h(
        'div',
        {
          ref: 'thumb',
          'class': 'el-scrollbar__thumb',
          on: {
            'mousedown': this.clickThumbHandler
          },

          style: (0, _util.renderThumbStyle)({ size: size, move: move, bar: bar }) },
        []
      )]
    );
  },


  methods: {
    clickThumbHandler: function clickThumbHandler(e) {
      this.startDrag(e);
      this[this.bar.axis] = e.currentTarget[this.bar.offset] - (e[this.bar.client] - e.currentTarget.getBoundingClientRect()[this.bar.direction]);
    },
    clickTrackHandler: function clickTrackHandler(e) {
      var offset = Math.abs(e.target.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]);
      var thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      var thumbPositionPercentage = (offset - thumbHalf) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    startDrag: function startDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;

      (0, _dom.on)(document, 'mousemove', this.mouseMoveDocumentHandler);
      (0, _dom.on)(document, 'mouseup', this.mouseUpDocumentHandler);
      document.onselectstart = function () {
        return false;
      };
    },
    mouseMoveDocumentHandler: function mouseMoveDocumentHandler(e) {
      if (this.cursorDown === false) return;
      var prevPage = this[this.bar.axis];

      if (!prevPage) return;

      var offset = (this.$el.getBoundingClientRect()[this.bar.direction] - e[this.bar.client]) * -1;
      var thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      var thumbPositionPercentage = (offset - thumbClickPosition) * 100 / this.$el[this.bar.offset];

      this.wrap[this.bar.scroll] = thumbPositionPercentage * this.wrap[this.bar.scrollSize] / 100;
    },
    mouseUpDocumentHandler: function mouseUpDocumentHandler(e) {
      this.cursorDown = false;
      this[this.bar.axis] = 0;
      (0, _dom.off)(document, 'mousemove', this.mouseMoveDocumentHandler);
      document.onselectstart = null;
    }
  },

  destroyed: function destroyed() {
    (0, _dom.off)(document, 'mouseup', this.mouseUpDocumentHandler);
  }
};

/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.renderThumbStyle = renderThumbStyle;
var BAR_MAP = exports.BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scroll: 'scrollTop',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top'
  },
  horizontal: {
    offset: 'offsetWidth',
    scroll: 'scrollLeft',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left'
  }
};

function renderThumbStyle(_ref) {
  var move = _ref.move,
      size = _ref.size,
      bar = _ref.bar;

  var style = {};
  var translate = 'translate' + bar.axis + '(' + move + '%)';

  style[bar.size] = size;
  style.transform = translate;
  style.msTransform = translate;
  style.webkitTransform = translate;

  return style;
};

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _item = __webpack_require__(342);

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_item2.default.install = function (Vue) {
  Vue.component(_item2.default.name, _item2.default);
};

exports.default = _item2.default;

/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_db3942f6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__ = __webpack_require__(344);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_db3942f6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
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

var CARD_SCALE = 0.83;
exports.default = {
  name: 'ElCarouselItem',

  props: {
    name: String,
    label: {
      type: [String, Number],
      default: ''
    }
  },

  data: function data() {
    return {
      hover: false,
      translate: 0,
      scale: 1,
      active: false,
      ready: false,
      inStage: false,
      animating: false
    };
  },


  methods: {
    processIndex: function processIndex(index, activeIndex, length) {
      if (activeIndex === 0 && index === length - 1) {
        return -1;
      } else if (activeIndex === length - 1 && index === 0) {
        return length;
      } else if (index < activeIndex - 1 && activeIndex - index >= length / 2) {
        return length + 1;
      } else if (index > activeIndex + 1 && index - activeIndex >= length / 2) {
        return -2;
      }
      return index;
    },
    calculateTranslate: function calculateTranslate(index, activeIndex, parentWidth) {
      if (this.inStage) {
        return parentWidth * ((2 - CARD_SCALE) * (index - activeIndex) + 1) / 4;
      } else if (index < activeIndex) {
        return -(1 + CARD_SCALE) * parentWidth / 4;
      } else {
        return (3 + CARD_SCALE) * parentWidth / 4;
      }
    },
    translateItem: function translateItem(index, activeIndex, oldIndex) {
      var parentWidth = this.$parent.$el.offsetWidth;
      var length = this.$parent.items.length;
      if (this.$parent.type !== 'card' && oldIndex !== undefined) {
        this.animating = index === activeIndex || index === oldIndex;
      }
      if (index !== activeIndex && length > 2) {
        index = this.processIndex(index, activeIndex, length);
      }
      if (this.$parent.type === 'card') {
        this.inStage = Math.round(Math.abs(index - activeIndex)) <= 1;
        this.active = index === activeIndex;
        this.translate = this.calculateTranslate(index, activeIndex, parentWidth);
        this.scale = this.active ? 1 : CARD_SCALE;
      } else {
        this.active = index === activeIndex;
        this.translate = parentWidth * (index - activeIndex);
      }
      this.ready = true;
    },
    handleItemClick: function handleItemClick() {
      var parent = this.$parent;
      if (parent && parent.type === 'card') {
        var index = parent.items.indexOf(this);
        parent.setActiveItem(index);
      }
    }
  },

  created: function created() {
    this.$parent && this.$parent.updateItems();
  },
  destroyed: function destroyed() {
    this.$parent && this.$parent.updateItems();
  }
};

/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.ready),expression:"ready"}],staticClass:"el-carousel__item",class:{
    'is-active': _vm.active,
    'el-carousel__item--card': _vm.$parent.type === 'card',
    'is-in-stage': _vm.inStage,
    'is-hover': _vm.hover,
    'is-animating': _vm.animating
  },style:({
    msTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
    webkitTransform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")"),
    transform: ("translateX(" + _vm.translate + "px) scale(" + _vm.scale + ")")
  }),on:{"click":_vm.handleItemClick}},[(_vm.$parent.type === 'card')?_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.active),expression:"!active"}],staticClass:"el-carousel__mask"}):_vm._e(),_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapse = __webpack_require__(346);

var _collapse2 = _interopRequireDefault(_collapse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_collapse2.default.install = function (Vue) {
  Vue.component(_collapse2.default.name, _collapse2.default);
};

exports.default = _collapse2.default;

/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f8b90b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__ = __webpack_require__(348);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_33f8b90b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//

exports.default = {
  name: 'ElCollapse',

  componentName: 'ElCollapse',

  props: {
    accordion: Boolean,
    value: {
      type: [Array, String, Number],
      default: function _default() {
        return [];
      }
    }
  },

  data: function data() {
    return {
      activeNames: [].concat(this.value)
    };
  },
  provide: function provide() {
    return {
      collapse: this
    };
  },


  watch: {
    value: function value(_value) {
      this.activeNames = [].concat(_value);
    }
  },

  methods: {
    setActiveNames: function setActiveNames(activeNames) {
      activeNames = [].concat(activeNames);
      var value = this.accordion ? activeNames[0] : activeNames;
      this.activeNames = activeNames;
      this.$emit('input', value);
      this.$emit('change', value);
    },
    handleItemClick: function handleItemClick(item) {
      if (this.accordion) {
        this.setActiveNames((this.activeNames[0] || this.activeNames[0] === 0) && this.activeNames[0] === item.name ? '' : item.name);
      } else {
        var activeNames = this.activeNames.slice(0);
        var index = activeNames.indexOf(item.name);

        if (index > -1) {
          activeNames.splice(index, 1);
        } else {
          activeNames.push(item.name);
        }
        this.setActiveNames(activeNames);
      }
    }
  },

  created: function created() {
    this.$on('item-click', this.handleItemClick);
  }
};

/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-collapse",attrs:{"role":"tablist","aria-multiselectable":"true"}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapseItem = __webpack_require__(350);

var _collapseItem2 = _interopRequireDefault(_collapseItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_collapseItem2.default.install = function (Vue) {
  Vue.component(_collapseItem2.default.name, _collapseItem2.default);
};

exports.default = _collapseItem2.default;

/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292e4744_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__ = __webpack_require__(352);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_collapse_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_292e4744_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_collapse_item_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _collapseTransition = __webpack_require__(20);

var _collapseTransition2 = _interopRequireDefault(_collapseTransition);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElCollapseItem',

  componentName: 'ElCollapseItem',

  mixins: [_emitter2.default],

  components: { ElCollapseTransition: _collapseTransition2.default },

  data: function data() {
    return {
      contentWrapStyle: {
        height: 'auto',
        display: 'block'
      },
      contentHeight: 0,
      focusing: false,
      isClick: false
    };
  },


  inject: ['collapse'],

  props: {
    title: String,
    name: {
      type: [String, Number],
      default: function _default() {
        return this._uid;
      }
    }
  },

  computed: {
    isActive: function isActive() {
      return this.collapse.activeNames.indexOf(this.name) > -1;
    },
    id: function id() {
      return (0, _util.generateId)();
    }
  },

  methods: {
    handleFocus: function handleFocus() {
      var _this = this;

      setTimeout(function () {
        if (!_this.isClick) {
          _this.focusing = true;
        } else {
          _this.isClick = false;
        }
      }, 50);
    },
    handleHeaderClick: function handleHeaderClick() {
      this.dispatch('ElCollapse', 'item-click', this);
      this.focusing = false;
      this.isClick = true;
    },
    handleEnterClick: function handleEnterClick() {
      this.dispatch('ElCollapse', 'item-click', this);
    }
  }
}; //
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

/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-collapse-item",class:{'is-active': _vm.isActive}},[_c('div',{attrs:{"role":"tab","aria-expanded":_vm.isActive,"aria-controls":("el-collapse-content-" + _vm.id),"aria-describedby":("el-collapse-content-" + _vm.id)}},[_c('div',{staticClass:"el-collapse-item__header",class:{'focusing': _vm.focusing},attrs:{"role":"button","id":("el-collapse-head-" + _vm.id),"tabindex":"0"},on:{"click":_vm.handleHeaderClick,"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"space",32,$event.key)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }$event.stopPropagation();_vm.handleEnterClick($event)},"focus":_vm.handleFocus,"blur":function($event){_vm.focusing = false}}},[_c('i',{staticClass:"el-collapse-item__arrow el-icon-arrow-right"}),_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2)]),_c('el-collapse-transition',[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isActive),expression:"isActive"}],staticClass:"el-collapse-item__wrap",attrs:{"role":"tabpanel","aria-hidden":!_vm.isActive,"aria-labelledby":("el-collapse-head-" + _vm.id),"id":("el-collapse-content-" + _vm.id)}},[_c('div',{staticClass:"el-collapse-item__content"},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(354);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2621e506_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(359);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2621e506_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _menu = __webpack_require__(356);

var _menu2 = _interopRequireDefault(_menu);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _locale3 = __webpack_require__(15);

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var popperMixin = {
  props: {
    placement: {
      type: String,
      default: 'bottom-start'
    },
    appendToBody: _vuePopper2.default.props.appendToBody,
    offset: _vuePopper2.default.props.offset,
    boundariesPadding: _vuePopper2.default.props.boundariesPadding,
    popperOptions: _vuePopper2.default.props.popperOptions
  },
  methods: _vuePopper2.default.methods,
  data: _vuePopper2.default.data,
  beforeDestroy: _vuePopper2.default.beforeDestroy
};
//兼容字符串格式
function getarr(options, props, value) {
  var arr = [];
  options.forEach(function (item) {
    if (Array.isArray(item[props.children]) && item[props.children].length > 0) {
      var temp = getarr(item[props.children], props, value);
      if (temp.length > 0) {
        arr.push(item[props.value]);
      }
      arr.push.apply(arr, temp);
    }
    if (item[props.value] == value) {
      arr.push(item[props.value]);
    }
  });
  return arr;
}
exports.default = {
  name: 'ElCascader',

  directives: { Clickoutside: _clickoutside2.default },

  mixins: [popperMixin, _emitter2.default, _locale2.default],

  inject: {
    elFormItem: {
      default: ''
    }
  },

  components: {
    ElInput: _input2.default
  },

  props: {
    options: {
      type: Array,
      required: true
    },
    props: {
      type: Object,
      default: function _default() {
        return {
          children: 'children',
          label: 'label',
          value: 'value',
          disabled: 'disabled'
        };
      }
    },
    value: '', //兼容字符串格式
    separator: {
      type: String,
      default: '/'
    },
    placeholder: {
      type: String,
      default: function _default() {
        return (0, _locale3.t)('el.cascader.placeholder');
      }
    },
    disabled: Boolean,
    clearable: {
      type: Boolean,
      default: false
    },
    changeOnSelect: Boolean,
    popperClass: String,
    expandTrigger: {
      type: String,
      default: 'click'
    },
    filterable: Boolean,
    size: String,
    showAllLevels: {
      type: Boolean,
      default: true
    },
    debounce: {
      type: Number,
      default: 300
    },
    beforeFilter: {
      type: Function,
      default: function _default() {
        return function () {};
      }
    },
    hoverThreshold: {
      type: Number,
      default: 500
    }
  },

  data: function data() {
    return {
      currentValue: Array.isArray(this.value) ? this.value : getarr(this.options, this.props, this.value),
      menu: null,
      debouncedInputChange: function debouncedInputChange() {},

      menuVisible: false,
      inputHover: false,
      inputValue: '',
      flatOptions: null
    };
  },


  computed: {
    labelKey: function labelKey() {
      return this.props.label || 'label';
    },
    valueKey: function valueKey() {
      return this.props.value || 'value';
    },
    childrenKey: function childrenKey() {
      return this.props.children || 'children';
    },
    currentLabels: function currentLabels() {
      var _this = this;

      var options = this.options;
      var labels = [];
      this.currentValue.forEach(function (value) {
        var targetOption = options && options.filter(function (option) {
          return option[_this.valueKey] === value;
        })[0];
        if (targetOption) {
          labels.push(targetOption[_this.labelKey]);
          options = targetOption[_this.childrenKey];
        }
      });
      return labels;
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    cascaderSize: function cascaderSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    id: function id() {
      return (0, _util.generateId)();
    }
  },

  watch: {
    menuVisible: function menuVisible(value) {
      this.$refs.input.$refs.input.setAttribute('aria-expanded', value);
      value ? this.showMenu() : this.hideMenu();
    },
    value: function value(_value) {
      if (!Array.isArray(_value)) {
        this.currentValue = getarr(this.options, this.props, _value);
      }
    },
    currentValue: function currentValue(value) {
      this.dispatch('ElFormItem', 'el.form.change', [value]);
    },
    currentLabels: function currentLabels(value) {
      var inputLabel = this.showAllLevels ? value.join('/') : value[value.length - 1];
      this.$refs.input.$refs.input.setAttribute('value', inputLabel);
    },

    options: {
      deep: true,
      handler: function handler(value) {
        if (!this.menu) {
          this.initMenu();
        }
        this.flatOptions = this.flattenOptions(this.options);
        this.menu.options = value;
      }
    }
  },

  methods: {
    initMenu: function initMenu() {
      this.menu = new _vue2.default(_menu2.default).$mount();
      this.menu.options = this.options;
      this.menu.props = this.props;
      this.menu.expandTrigger = this.expandTrigger;
      this.menu.changeOnSelect = this.changeOnSelect;
      this.menu.popperClass = this.popperClass;
      this.menu.hoverThreshold = this.hoverThreshold;
      this.popperElm = this.menu.$el;
      this.menu.$refs.menus[0].setAttribute('id', 'cascader-menu-' + this.id);
      this.menu.$on('pick', this.handlePick);
      this.menu.$on('activeItemChange', this.handleActiveItemChange);
      this.menu.$on('menuLeave', this.doDestroy);
      this.menu.$on('closeInside', this.handleClickoutside);
    },
    showMenu: function showMenu() {
      var _this2 = this;

      if (!this.menu) {
        this.initMenu();
      }

      this.menu.value = this.currentValue.slice(0);
      this.menu.visible = true;
      this.menu.options = this.options;
      this.$nextTick(function (_) {
        _this2.updatePopper();
        _this2.menu.inputWidth = _this2.$refs.input.$el.offsetWidth - 2;
      });
    },
    hideMenu: function hideMenu() {
      this.inputValue = '';
      this.menu.visible = false;
      this.$refs.input.focus();
    },
    handleActiveItemChange: function handleActiveItemChange(value) {
      var _this3 = this;

      this.$nextTick(function (_) {
        _this3.updatePopper();
      });
      this.$emit('active-item-change', value);
    },
    handleKeydown: function handleKeydown(e) {
      var _this4 = this;

      var keyCode = e.keyCode;
      if (keyCode === 13) {
        this.handleClick();
      } else if (keyCode === 40) {
        // down
        this.menuVisible = true; // 打开
        setTimeout(function () {
          var firstMenu = _this4.popperElm.querySelectorAll('.el-cascader-menu')[0];
          firstMenu.querySelectorAll("[tabindex='-1']")[0].focus();
        });
        e.stopPropagation();
        e.preventDefault();
      } else if (keyCode === 27 || keyCode === 9) {
        // esc  tab
        this.inputValue = '';
        if (this.menu) this.menu.visible = false;
      }
    },
    handlePick: function handlePick(value) {
      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this.currentValue = value;
      if (Array.isArray(this.value)) {
        this.$emit('input', value);
        this.$emit('change', value);
      } else {
        this.$emit('input', value[value.length - 1]);
        this.$emit('change', value[value.length - 1]);
      }

      if (close) {
        this.menuVisible = false;
      } else {
        this.$nextTick(this.updatePopper);
      }
    },
    handleInputChange: function handleInputChange(value) {
      var _this5 = this;

      if (!this.menuVisible) return;
      var flatOptions = this.flatOptions;

      if (!value) {
        this.menu.options = this.options;
        this.$nextTick(this.updatePopper);
        return;
      }

      var filteredFlatOptions = flatOptions.filter(function (optionsStack) {
        return optionsStack.some(function (option) {
          return new RegExp(value, 'i').test(option[_this5.labelKey]);
        });
      });

      if (filteredFlatOptions.length > 0) {
        filteredFlatOptions = filteredFlatOptions.map(function (optionStack) {
          return {
            __IS__FLAT__OPTIONS: true,
            value: optionStack.map(function (item) {
              return item[_this5.valueKey];
            }),
            label: _this5.renderFilteredOptionLabel(value, optionStack)
          };
        });
      } else {
        filteredFlatOptions = [{
          __IS__FLAT__OPTIONS: true,
          label: this.t('el.cascader.noMatch'),
          value: '',
          disabled: true
        }];
      }
      this.menu.options = filteredFlatOptions;
      this.$nextTick(this.updatePopper);
    },
    renderFilteredOptionLabel: function renderFilteredOptionLabel(inputValue, optionsStack) {
      var _this6 = this;

      return optionsStack.map(function (option, index) {
        var label = option[_this6.labelKey];
        var keywordIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
        var labelPart = label.slice(keywordIndex, inputValue.length + keywordIndex);
        var node = keywordIndex > -1 ? _this6.highlightKeyword(label, labelPart) : label;
        return index === 0 ? node : [' / ', node];
      });
    },
    highlightKeyword: function highlightKeyword(label, keyword) {
      var _this7 = this;

      var h = this._c;
      return label.split(keyword).map(function (node, index) {
        return index === 0 ? node : [h('span', { class: { 'el-cascader-menu__item__keyword': true } }, [_this7._v(keyword)]), node];
      });
    },
    flattenOptions: function flattenOptions(options) {
      var _this8 = this;

      var ancestor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var flatOptions = [];
      options.forEach(function (option) {
        var optionsStack = ancestor.concat(option);
        if (!option[_this8.childrenKey]) {
          flatOptions.push(optionsStack);
        } else {
          if (_this8.changeOnSelect) {
            flatOptions.push(optionsStack);
          }
          flatOptions = flatOptions.concat(_this8.flattenOptions(option[_this8.childrenKey], optionsStack));
        }
      });
      return flatOptions;
    },
    clearValue: function clearValue(ev) {
      ev.stopPropagation();
      this.handlePick([], true);
    },
    handleClickoutside: function handleClickoutside() {
      this.menuVisible = false;
    },
    handleClick: function handleClick() {
      if (this.disabled) return;
      this.$refs.input.focus();
      if (this.filterable) {
        this.menuVisible = true;
        return;
      }
      this.menuVisible = !this.menuVisible;
    }
  },

  created: function created() {
    var _this9 = this;

    this.debouncedInputChange = (0, _debounce2.default)(this.debounce, function (value) {
      var before = _this9.beforeFilter(value);

      if (before && before.then) {
        _this9.menu.options = [{
          __IS__FLAT__OPTIONS: true,
          label: _this9.t('el.cascader.loading'),
          value: '',
          disabled: true
        }];
        before.then(function () {
          _this9.$nextTick(function () {
            _this9.handleInputChange(value);
          });
        });
      } else if (before !== false) {
        _this9.$nextTick(function () {
          _this9.handleInputChange(value);
        });
      }
    });
  },
  mounted: function mounted() {
    this.flatOptions = this.flattenOptions(this.options);
  }
};

/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue___default.a,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _babelHelperVueJsxMergeProps = __webpack_require__(41);

var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

var _shared = __webpack_require__(358);

var _scrollIntoView = __webpack_require__(24);

var _scrollIntoView2 = _interopRequireDefault(_scrollIntoView);

var _util = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copyArray = function copyArray(arr, props) {
  if (!arr || !Array.isArray(arr) || !props) return arr;
  var result = [];
  var configurableProps = ['__IS__FLAT__OPTIONS', 'label', 'value', 'disabled'];
  var childrenProp = props.children || 'children';
  arr.forEach(function (item) {
    var itemCopy = {};
    configurableProps.forEach(function (prop) {
      var name = props[prop];
      var value = item[name];
      if (value === undefined) {
        name = prop;
        value = item[name];
      }
      if (value !== undefined) itemCopy[name] = value;
    });
    if (Array.isArray(item[childrenProp])) {
      itemCopy[childrenProp] = copyArray(item[childrenProp], props);
    }
    result.push(itemCopy);
  });
  return result;
};

exports.default = {
  name: 'ElCascaderMenu',

  data: function data() {
    return {
      inputWidth: 0,
      options: [],
      props: {},
      visible: false,
      activeValue: [],
      value: [],
      expandTrigger: 'click',
      changeOnSelect: false,
      popperClass: '',
      hoverTimer: 0,
      clicking: false
    };
  },


  watch: {
    visible: function visible(value) {
      if (value) {
        this.activeValue = this.value;
      }
    },

    value: {
      immediate: true,
      handler: function handler(value) {
        this.activeValue = value;
      }
    }
  },

  computed: {
    activeOptions: {
      cache: false,
      get: function get() {
        var _this = this;

        var activeValue = this.activeValue;
        var configurableProps = ['label', 'value', 'children', 'disabled'];

        var formatOptions = function formatOptions(options) {
          options.forEach(function (option) {
            if (option.__IS__FLAT__OPTIONS) return;
            configurableProps.forEach(function (prop) {
              var value = option[_this.props[prop] || prop];
              if (value !== undefined) option[prop] = value;
            });
            if (Array.isArray(option.children) && option.children.length > 0) {
              formatOptions(option.children);
            } else {
              //下级是空时删除下级
              delete option.children;
            }
          });
        };

        var loadActiveOptions = function loadActiveOptions(options) {
          var activeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

          var level = activeOptions.length;
          activeOptions[level] = options;
          var active = activeValue[level];
          if ((0, _shared.isDef)(active)) {
            options = options.filter(function (option) {
              return option.value === active;
            })[0];
            if (options && options.children) {
              loadActiveOptions(options.children, activeOptions);
            }
          }
          return activeOptions;
        };

        var optionsCopy = copyArray(this.options, this.props);
        formatOptions(optionsCopy);
        return loadActiveOptions(optionsCopy);
      }
    },
    id: function id() {
      return (0, _util.generateId)();
    }
  },

  methods: {
    select: function select(item, menuIndex) {
      if (item.__IS__FLAT__OPTIONS) {
        this.activeValue = item.value;
      } else if (menuIndex) {
        this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
      } else {
        this.activeValue = [item.value];
      }
      this.$emit('pick', this.activeValue.slice());
    },
    handleMenuLeave: function handleMenuLeave() {
      this.$emit('menuLeave');
    },
    activeItem: function activeItem(item, menuIndex) {
      var len = this.activeOptions.length;
      this.activeValue.splice(menuIndex, len, item.value);
      this.activeOptions.splice(menuIndex + 1, len, item.children);
      if (this.changeOnSelect) {
        this.$emit('pick', this.activeValue.slice(), false);
      } else {
        this.$emit('activeItemChange', this.activeValue);
      }
    },
    scrollMenu: function scrollMenu(menu) {
      (0, _scrollIntoView2.default)(menu, menu.getElementsByClassName('is-active')[0]);
    },
    handleMenuEnter: function handleMenuEnter() {
      var _this2 = this;

      this.$nextTick(function () {
        return _this2.$refs.menus.forEach(function (menu) {
          return _this2.scrollMenu(menu);
        });
      });
    }
  },

  render: function render(h) {
    var _this3 = this;

    var activeValue = this.activeValue,
        activeOptions = this.activeOptions,
        visible = this.visible,
        expandTrigger = this.expandTrigger,
        popperClass = this.popperClass,
        hoverThreshold = this.hoverThreshold;

    var itemId = null;
    var itemIndex = 0;

    var hoverMenuRefs = {};
    var hoverMenuHandler = function hoverMenuHandler(e) {
      var activeMenu = hoverMenuRefs.activeMenu;
      if (!activeMenu) return;
      var offsetX = e.offsetX;
      var width = activeMenu.offsetWidth;
      var height = activeMenu.offsetHeight;

      if (e.target === hoverMenuRefs.activeItem) {
        clearTimeout(_this3.hoverTimer);
        var _hoverMenuRefs = hoverMenuRefs,
            activeItem = _hoverMenuRefs.activeItem;

        var offsetY_top = activeItem.offsetTop;
        var offsetY_Bottom = offsetY_top + activeItem.offsetHeight;

        hoverMenuRefs.hoverZone.innerHTML = '\n          <path style="pointer-events: auto;" fill="transparent" d="M' + offsetX + ' ' + offsetY_top + ' L' + width + ' 0 V' + offsetY_top + ' Z" />\n          <path style="pointer-events: auto;" fill="transparent" d="M' + offsetX + ' ' + offsetY_Bottom + ' L' + width + ' ' + height + ' V' + offsetY_Bottom + ' Z" />\n        ';
      } else {
        if (!_this3.hoverTimer) {
          _this3.hoverTimer = setTimeout(function () {
            hoverMenuRefs.hoverZone.innerHTML = '';
          }, hoverThreshold);
        }
      }
    };

    var menus = this._l(activeOptions, function (menu, menuIndex) {
      var isFlat = false;
      var menuId = 'menu-' + _this3.id + '-' + menuIndex;
      var ownsId = 'menu-' + _this3.id + '-' + (menuIndex + 1);
      var items = _this3._l(menu, function (item) {
        var events = {
          on: {}
        };

        if (item.__IS__FLAT__OPTIONS) isFlat = true;

        if (!item.disabled) {
          // keydown up/down/left/right/enter
          events.on.keydown = function (ev) {
            var keyCode = ev.keyCode;
            if ([37, 38, 39, 40, 13, 9, 27].indexOf(keyCode) < 0) {
              return;
            }
            var currentEle = ev.target;
            var parentEle = _this3.$refs.menus[menuIndex];
            var menuItemList = parentEle.querySelectorAll("[tabindex='-1']");
            var currentIndex = Array.prototype.indexOf.call(menuItemList, currentEle); // 当前索引
            var nextIndex = void 0,
                nextMenu = void 0;
            if ([38, 40].indexOf(keyCode) > -1) {
              if (keyCode === 38) {
                // up键
                nextIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex;
              } else if (keyCode === 40) {
                // down
                nextIndex = currentIndex !== menuItemList.length - 1 ? currentIndex + 1 : currentIndex;
              }
              menuItemList[nextIndex].focus();
            } else if (keyCode === 37) {
              // left键
              if (menuIndex !== 0) {
                var previousMenu = _this3.$refs.menus[menuIndex - 1];
                previousMenu.querySelector('[aria-expanded=true]').focus();
              }
            } else if (keyCode === 39) {
              // right
              if (item.children) {
                // 有子menu 选择子menu的第一个menuitem
                nextMenu = _this3.$refs.menus[menuIndex + 1];
                nextMenu.querySelectorAll("[tabindex='-1']")[0].focus();
              }
            } else if (keyCode === 13) {
              if (!item.children) {
                var id = currentEle.getAttribute('id');
                parentEle.setAttribute('aria-activedescendant', id);
                _this3.select(item, menuIndex);
                _this3.$nextTick(function () {
                  return _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
                });
              }
            } else if (keyCode === 9 || keyCode === 27) {
              // esc tab
              _this3.$emit('closeInside');
            }
          };
          if (item.children) {
            var triggerEvent = {
              click: 'click',
              hover: 'mouseenter'
            }[expandTrigger];
            var triggerHandler = function triggerHandler() {
              _this3.activeItem(item, menuIndex);
              _this3.$nextTick(function () {
                // adjust self and next level
                _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
                _this3.scrollMenu(_this3.$refs.menus[menuIndex + 1]);
              });
            };
            events.on[triggerEvent] = triggerHandler;
            events.on['mousedown'] = function () {
              _this3.clicking = true;
            };
            events.on['focus'] = function () {
              // focus 选中
              if (_this3.clicking) {
                _this3.clicking = false;
                return;
              }
              triggerHandler();
            };
          } else {
            events.on.click = function () {
              _this3.select(item, menuIndex);
              _this3.$nextTick(function () {
                return _this3.scrollMenu(_this3.$refs.menus[menuIndex]);
              });
            };
          }
        }
        if (!item.disabled && !item.children) {
          // no children set id
          itemId = menuId + '-' + itemIndex;
          itemIndex++;
        }
        return h(
          'li',
          (0, _babelHelperVueJsxMergeProps2.default)([{
            'class': {
              'el-cascader-menu__item': true,
              'el-cascader-menu__item--extensible': item.children,
              'is-active': item.value === activeValue[menuIndex],
              'is-disabled': item.disabled
            },
            ref: item.value === activeValue[menuIndex] ? 'activeItem' : null
          }, events, {
            attrs: {
              tabindex: item.disabled ? null : -1,
              role: 'menuitem',
              'aria-haspopup': !!item.children,
              'aria-expanded': item.value === activeValue[menuIndex],
              id: itemId,
              'aria-owns': !item.children ? null : ownsId
            }
          }]),
          [item.label]
        );
      });
      var menuStyle = {};
      if (isFlat) {
        menuStyle.minWidth = _this3.inputWidth + 'px';
      }

      var isHoveredMenu = expandTrigger === 'hover' && activeValue.length - 1 === menuIndex;
      var hoverMenuEvent = {
        on: {}
      };

      if (isHoveredMenu) {
        hoverMenuEvent.on.mousemove = hoverMenuHandler;
        menuStyle.position = 'relative';
      }

      return h(
        'ul',
        (0, _babelHelperVueJsxMergeProps2.default)([{
          'class': {
            'el-cascader-menu': true,
            'el-cascader-menu--flexible': isFlat
          }
        }, hoverMenuEvent, {
          style: menuStyle,
          refInFor: true,
          ref: 'menus',
          attrs: { role: 'menu',
            id: menuId
          }
        }]),
        [items, isHoveredMenu ? h(
          'svg',
          {
            ref: 'hoverZone',
            style: {
              position: 'absolute',
              top: 0,
              height: '100%',
              width: '100%',
              left: 0,
              pointerEvents: 'none'
            }
          },
          []
        ) : null]
      );
    });

    if (expandTrigger === 'hover') {
      this.$nextTick(function () {
        var activeItem = _this3.$refs.activeItem;

        if (activeItem) {
          var activeMenu = activeItem.parentElement;
          var hoverZone = _this3.$refs.hoverZone;

          hoverMenuRefs = {
            activeMenu: activeMenu,
            activeItem: activeItem,
            hoverZone: hoverZone
          };
        } else {
          hoverMenuRefs = {};
        }
      });
    }

    return h(
      'transition',
      {
        attrs: { name: 'el-zoom-in-top' },
        on: {
          'before-enter': this.handleMenuEnter,
          'after-leave': this.handleMenuLeave
        }
      },
      [h(
        'div',
        {
          directives: [{
            name: 'show',
            value: visible
          }],

          'class': ['el-cascader-menus el-popper', popperClass],
          ref: 'wrapper'
        },
        [h(
          'div',
          {
            attrs: { 'x-arrow': true },
            'class': 'popper__arrow' },
          []
        ), menus]
      )]
    );
  }
};

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports = require("element-ui/lib/utils/shared");

/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.handleClickoutside),expression:"handleClickoutside"}],ref:"reference",staticClass:"el-cascader",class:[
    {
      'is-opened': _vm.menuVisible,
      'is-disabled': _vm.disabled
    },
    _vm.cascaderSize ? 'el-cascader--' + _vm.cascaderSize : ''
  ],on:{"click":_vm.handleClick,"mouseenter":function($event){_vm.inputHover = true},"focus":function($event){_vm.inputHover = true},"mouseleave":function($event){_vm.inputHover = false},"blur":function($event){_vm.inputHover = false},"keydown":_vm.handleKeydown}},[_c('el-input',{ref:"input",attrs:{"readonly":!_vm.filterable,"placeholder":_vm.currentLabels.length ? undefined : _vm.placeholder,"validate-event":false,"size":_vm.size,"disabled":_vm.disabled},on:{"input":_vm.debouncedInputChange},model:{value:(_vm.inputValue),callback:function ($$v) {_vm.inputValue=$$v},expression:"inputValue"}},[_c('template',{slot:"suffix"},[(_vm.clearable && _vm.inputHover && _vm.currentLabels.length)?_c('i',{key:"1",staticClass:"el-input__icon el-icon-circle-close el-cascader__clearIcon",on:{"click":_vm.clearValue}}):_c('i',{key:"2",staticClass:"el-input__icon el-icon-arrow-down",class:{ 'is-reverse': _vm.menuVisible }})])],2),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.inputValue === ''),expression:"inputValue === ''"}],staticClass:"el-cascader__label"},[(_vm.showAllLevels)?[_vm._l((_vm.currentLabels),function(label,index){return [_vm._v("\n        "+_vm._s(label)+"\n        "),(index < _vm.currentLabels.length - 1)?_c('span',[_vm._v(" "+_vm._s(_vm.separator)+" ")]):_vm._e()]})]:[_vm._v("\n      "+_vm._s(_vm.currentLabels[_vm.currentLabels.length - 1])+"\n    ")]],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(361);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_352b12a9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(376);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_352b12a9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _color = __webpack_require__(363);

var _color2 = _interopRequireDefault(_color);

var _pickerDropdown = __webpack_require__(364);

var _pickerDropdown2 = _interopRequireDefault(_pickerDropdown);

var _clickoutside = __webpack_require__(11);

var _clickoutside2 = _interopRequireDefault(_clickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElColorPicker',

  props: {
    value: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: String,
    popperClass: String
  },

  inject: {
    elFormItem: {
      default: ''
    }
  },

  directives: { Clickoutside: _clickoutside2.default },

  computed: {
    displayedColor: function displayedColor() {
      if (!this.value && !this.showPanelColor) {
        return 'transparent';
      } else {
        var _color$toRgb = this.color.toRgb(),
            r = _color$toRgb.r,
            g = _color$toRgb.g,
            b = _color$toRgb.b;

        return this.showAlpha ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + this.color.get('alpha') / 100 + ')' : 'rgb(' + r + ', ' + g + ', ' + b + ')';
      }
    },
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    colorSize: function colorSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    }
  },

  watch: {
    value: function value(val) {
      if (!val) {
        this.showPanelColor = false;
      } else if (val && val !== this.color.value) {
        this.color.fromString(val);
      }
    },

    color: {
      deep: true,
      handler: function handler() {
        this.showPanelColor = true;
      }
    },
    displayedColor: function displayedColor(val) {
      this.$emit('active-change', val);
    }
  },

  methods: {
    handleTrigger: function handleTrigger() {
      if (this.disabled) return;
      this.showPicker = !this.showPicker;
    },
    confirmValue: function confirmValue(value) {
      this.$emit('input', this.color.value);
      this.$emit('change', this.color.value);
      this.showPicker = false;
    },
    clearValue: function clearValue() {
      this.$emit('input', null);
      this.$emit('change', null);
      this.showPanelColor = false;
      this.showPicker = false;
      this.resetColor();
    },
    hide: function hide() {
      this.showPicker = false;
      this.resetColor();
    },
    resetColor: function resetColor() {
      var _this = this;

      this.$nextTick(function (_) {
        if (_this.value) {
          _this.color.fromString(_this.value);
        } else {
          _this.showPanelColor = false;
        }
      });
    }
  },

  mounted: function mounted() {
    var value = this.value;
    if (value) {
      this.color.fromString(value);
    }
    this.popperElm = this.$refs.dropdown.$el;
  },
  data: function data() {
    var color = new _color2.default({
      enableAlpha: this.showAlpha,
      format: this.colorFormat
    });
    return {
      color: color,
      showPicker: false,
      showPanelColor: false
    };
  },


  components: {
    PickerDropdown: _pickerDropdown2.default
  }
}; //
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

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hsv2hsl = function hsv2hsl(hue, sat, val) {
  return [hue, sat * val / ((hue = (2 - sat) * val) < 1 ? hue : 2 - hue) || 0, hue / 2];
};

// Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
// <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
var isOnePointZero = function isOnePointZero(n) {
  return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
};

var isPercentage = function isPercentage(n) {
  return typeof n === 'string' && n.indexOf('%') !== -1;
};

// Take input from [0, n] and return it as [0, 1]
var bound01 = function bound01(value, max) {
  if (isOnePointZero(value)) value = '100%';

  var processPercent = isPercentage(value);
  value = Math.min(max, Math.max(0, parseFloat(value)));

  // Automatically convert percentage into number
  if (processPercent) {
    value = parseInt(value * max, 10) / 100;
  }

  // Handle floating point rounding errors
  if (Math.abs(value - max) < 0.000001) {
    return 1;
  }

  // Convert into [0, 1] range if it isn't already
  return value % max / parseFloat(max);
};

var INT_HEX_MAP = { 10: 'A', 11: 'B', 12: 'C', 13: 'D', 14: 'E', 15: 'F' };

var toHex = function toHex(_ref) {
  var r = _ref.r,
      g = _ref.g,
      b = _ref.b;

  var hexOne = function hexOne(value) {
    value = Math.min(Math.round(value), 255);
    var high = Math.floor(value / 16);
    var low = value % 16;
    return '' + (INT_HEX_MAP[high] || high) + (INT_HEX_MAP[low] || low);
  };

  if (isNaN(r) || isNaN(g) || isNaN(b)) return '';

  return '#' + hexOne(r) + hexOne(g) + hexOne(b);
};

var HEX_INT_MAP = { A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };

var parseHexChannel = function parseHexChannel(hex) {
  if (hex.length === 2) {
    return (HEX_INT_MAP[hex[0].toUpperCase()] || +hex[0]) * 16 + (HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1]);
  }

  return HEX_INT_MAP[hex[1].toUpperCase()] || +hex[1];
};

var hsl2hsv = function hsl2hsv(hue, sat, light) {
  sat = sat / 100;
  light = light / 100;
  var smin = sat;
  var lmin = Math.max(light, 0.01);
  var sv = void 0;
  var v = void 0;

  light *= 2;
  sat *= light <= 1 ? light : 2 - light;
  smin *= lmin <= 1 ? lmin : 2 - lmin;
  v = (light + sat) / 2;
  sv = light === 0 ? 2 * smin / (lmin + smin) : 2 * sat / (light + sat);

  return {
    h: hue,
    s: sv * 100,
    v: v * 100
  };
};

// `rgbToHsv`
// Converts an RGB color value to HSV
// *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
// *Returns:* { h, s, v } in [0,1]
var rgb2hsv = function rgb2hsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);

  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = void 0,
      s = void 0;
  var v = max;

  var d = max - min;
  s = max === 0 ? 0 : d / max;

  if (max === min) {
    h = 0; // achromatic
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: h * 360, s: s * 100, v: v * 100 };
};

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
var hsv2rgb = function hsv2rgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);

  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
};

var Color = function () {
  function Color(options) {
    _classCallCheck(this, Color);

    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;

    this.enableAlpha = false;
    this.format = 'hex';
    this.value = '';

    options = options || {};

    for (var option in options) {
      if (options.hasOwnProperty(option)) {
        this[option] = options[option];
      }
    }

    this.doOnChange();
  }

  Color.prototype.set = function set(prop, value) {
    if (arguments.length === 1 && (typeof prop === 'undefined' ? 'undefined' : _typeof(prop)) === 'object') {
      for (var p in prop) {
        if (prop.hasOwnProperty(p)) {
          this.set(p, prop[p]);
        }
      }

      return;
    }

    this['_' + prop] = value;
    this.doOnChange();
  };

  Color.prototype.get = function get(prop) {
    return this['_' + prop];
  };

  Color.prototype.toRgb = function toRgb() {
    return hsv2rgb(this._hue, this._saturation, this._value);
  };

  Color.prototype.fromString = function fromString(value) {
    var _this = this;

    if (!value) {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;

      this.doOnChange();
      return;
    }

    var fromHSV = function fromHSV(h, s, v) {
      _this._hue = h;
      _this._saturation = s;
      _this._value = v;

      _this.doOnChange();
    };

    if (value.indexOf('hsl') !== -1) {
      var parts = value.replace(/hsla|hsl|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (parts.length === 4) {
        this._alpha = Math.floor(parseFloat(parts[3]) * 100);
      }
      if (parts.length >= 3) {
        var _hsl2hsv = hsl2hsv(parts[0], parts[1], parts[2]),
            h = _hsl2hsv.h,
            s = _hsl2hsv.s,
            v = _hsl2hsv.v;

        fromHSV(h, s, v);
      }
    } else if (value.indexOf('hsv') !== -1) {
      var _parts = value.replace(/hsva|hsv|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts[3]) * 100);
      }
      if (_parts.length >= 3) {
        fromHSV(_parts[0], _parts[1], _parts[2]);
      }
    } else if (value.indexOf('rgb') !== -1) {
      var _parts2 = value.replace(/rgba|rgb|\(|\)/gm, '').split(/\s|,/g).filter(function (val) {
        return val !== '';
      }).map(function (val, index) {
        return index > 2 ? parseFloat(val) : parseInt(val, 10);
      });

      if (_parts2.length === 4) {
        this._alpha = Math.floor(parseFloat(_parts2[3]) * 100);
      }
      if (_parts2.length >= 3) {
        var _rgb2hsv = rgb2hsv(_parts2[0], _parts2[1], _parts2[2]),
            _h = _rgb2hsv.h,
            _s = _rgb2hsv.s,
            _v = _rgb2hsv.v;

        fromHSV(_h, _s, _v);
      }
    } else if (value.indexOf('#') !== -1) {
      var hex = value.replace('#', '').trim();
      var r = void 0,
          g = void 0,
          b = void 0;

      if (hex.length === 3) {
        r = parseHexChannel(hex[0] + hex[0]);
        g = parseHexChannel(hex[1] + hex[1]);
        b = parseHexChannel(hex[2] + hex[2]);
      } else if (hex.length === 6) {
        r = parseHexChannel(hex.substring(0, 2));
        g = parseHexChannel(hex.substring(2, 4));
        b = parseHexChannel(hex.substring(4));
      }

      var _rgb2hsv2 = rgb2hsv(r, g, b),
          _h2 = _rgb2hsv2.h,
          _s2 = _rgb2hsv2.s,
          _v2 = _rgb2hsv2.v;

      fromHSV(_h2, _s2, _v2);
    }
  };

  Color.prototype.doOnChange = function doOnChange() {
    var _hue = this._hue,
        _saturation = this._saturation,
        _value = this._value,
        _alpha = this._alpha,
        format = this.format;


    if (this.enableAlpha) {
      switch (format) {
        case 'hsl':
          var hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsla(' + _hue + ', ' + Math.round(hsl[1] * 100) + '%, ' + Math.round(hsl[2] * 100) + '%, ' + _alpha / 100 + ')';
          break;
        case 'hsv':
          this.value = 'hsva(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%, ' + _alpha / 100 + ')';
          break;
        default:
          var _hsv2rgb = hsv2rgb(_hue, _saturation, _value),
              r = _hsv2rgb.r,
              g = _hsv2rgb.g,
              b = _hsv2rgb.b;

          this.value = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + _alpha / 100 + ')';
      }
    } else {
      switch (format) {
        case 'hsl':
          var _hsl = hsv2hsl(_hue, _saturation / 100, _value / 100);
          this.value = 'hsl(' + _hue + ', ' + Math.round(_hsl[1] * 100) + '%, ' + Math.round(_hsl[2] * 100) + '%)';
          break;
        case 'hsv':
          this.value = 'hsv(' + _hue + ', ' + Math.round(_saturation) + '%, ' + Math.round(_value) + '%)';
          break;
        case 'rgb':
          var _hsv2rgb2 = hsv2rgb(_hue, _saturation, _value),
              _r = _hsv2rgb2.r,
              _g = _hsv2rgb2.g,
              _b = _hsv2rgb2.b;

          this.value = 'rgb(' + _r + ', ' + _g + ', ' + _b + ')';
          break;
        default:
          this.value = toHex(hsv2rgb(_hue, _saturation, _value));
      }
    }
  };

  return Color;
}();

exports.default = Color;
;

/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76c9022b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__ = __webpack_require__(375);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_picker_dropdown_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_76c9022b_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_picker_dropdown_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _svPanel = __webpack_require__(366);

var _svPanel2 = _interopRequireDefault(_svPanel);

var _hueSlider = __webpack_require__(369);

var _hueSlider2 = _interopRequireDefault(_hueSlider);

var _alphaSlider = __webpack_require__(372);

var _alphaSlider2 = _interopRequireDefault(_alphaSlider);

var _vuePopper = __webpack_require__(8);

var _vuePopper2 = _interopRequireDefault(_vuePopper);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'el-color-picker-dropdown',

  mixins: [_vuePopper2.default, _locale2.default],

  components: {
    SvPanel: _svPanel2.default,
    HueSlider: _hueSlider2.default,
    AlphaSlider: _alphaSlider2.default,
    ElInput: _input2.default,
    ElButton: _button2.default
  },

  props: {
    color: {
      required: true
    },
    showAlpha: Boolean
  },

  data: function data() {
    return {
      customInput: ''
    };
  },


  computed: {
    currentColor: function currentColor() {
      var parent = this.$parent;
      return !parent.value && !parent.showPanelColor ? '' : parent.color.value;
    }
  },

  methods: {
    confirmValue: function confirmValue() {
      this.$emit('pick');
    },
    handleConfirm: function handleConfirm() {
      var valid = this.showAlpha ? this.validRGBA(this.customInput) : this.validRGBHex(this.customInput);
      if (valid) {
        this.color.fromString(this.customInput);
      } else {
        this.customInput = this.currentColor;
      }
    },
    validRGBHex: function validRGBHex(color) {
      return (/^#[A-Fa-f0-9]{6}$/.test(color)
      );
    },
    validRGBA: function validRGBA(color) {
      var matches = color.match(/^rgba\((\d+), ?(\d+), ?(\d+), ?([.0-9]+)\)$/);
      if (!matches) return false;
      var list = matches.map(function (v) {
        return parseInt(v, 10);
      }).slice(1);
      if (list.some(function (v) {
        return isNaN(v);
      })) return false;
      var r = list[0],
          g = list[1],
          b = list[2],
          a = list[3];

      if ([r, g, b].some(function (v) {
        return v < 0 || v > 255;
      }) || a < 0 || a > 1) return false;
      return true;
    }
  },

  mounted: function mounted() {
    this.$parent.popperElm = this.popperElm = this.$el;
    this.referenceElm = this.$parent.$el;
  },


  watch: {
    showPopper: function showPopper(val) {
      var _this = this;

      if (val === true) {
        this.$nextTick(function () {
          var _$refs = _this.$refs,
              sl = _$refs.sl,
              hue = _$refs.hue,
              alpha = _$refs.alpha;

          sl && sl.update();
          hue && hue.update();
          alpha && alpha.update();
        });
      }
    },
    currentColor: function currentColor(val) {
      this.customInput = val;
    }
  }
}; //
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

/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3be8fc4f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__ = __webpack_require__(368);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sv_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3be8fc4f_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sv_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _draggable = __webpack_require__(28);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'el-sl-panel',

  props: {
    color: {
      required: true
    }
  },

  computed: {
    colorValue: function colorValue() {
      var hue = this.color.get('hue');
      var value = this.color.get('value');
      return { hue: hue, value: value };
    }
  },

  watch: {
    colorValue: function colorValue() {
      this.update();
    }
  },

  methods: {
    update: function update() {
      var saturation = this.color.get('saturation');
      var value = this.color.get('value');

      var el = this.$el;

      var _el$getBoundingClient = el.getBoundingClientRect(),
          width = _el$getBoundingClient.width,
          height = _el$getBoundingClient.height;

      if (!height) height = width * 3 / 4;

      this.cursorLeft = saturation * width / 100;
      this.cursorTop = (100 - value) * height / 100;

      this.background = 'hsl(' + this.color.get('hue') + ', 100%, 50%)';
    },
    handleDrag: function handleDrag(event) {
      var el = this.$el;
      var rect = el.getBoundingClientRect();

      var left = event.clientX - rect.left;
      var top = event.clientY - rect.top;
      left = Math.max(0, left);
      left = Math.min(left, rect.width);

      top = Math.max(0, top);
      top = Math.min(top, rect.height);

      this.cursorLeft = left;
      this.cursorTop = top;
      this.color.set({
        saturation: left / rect.width * 100,
        value: 100 - top / rect.height * 100
      });
    }
  },

  mounted: function mounted() {
    var _this = this;

    (0, _draggable2.default)(this.$el, {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    });

    this.update();
  },
  data: function data() {
    return {
      cursorTop: 0,
      cursorLeft: 0,
      background: 'hsl(0, 100%, 50%)'
    };
  }
}; //
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

/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-color-svpanel",style:({
      backgroundColor: _vm.background
    })},[_c('div',{staticClass:"el-color-svpanel__white"}),_c('div',{staticClass:"el-color-svpanel__black"}),_c('div',{staticClass:"el-color-svpanel__cursor",style:({
      top: _vm.cursorTop + 'px',
      left: _vm.cursorLeft + 'px'
    })},[_c('div')])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bc7d0a5_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__ = __webpack_require__(371);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_hue_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3bc7d0a5_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_hue_slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _draggable = __webpack_require__(28);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'el-color-hue-slider',

  props: {
    color: {
      required: true
    },

    vertical: Boolean
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0
    };
  },


  computed: {
    hueValue: function hueValue() {
      var hue = this.color.get('hue');
      return hue;
    }
  },

  watch: {
    hueValue: function hueValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;

      var hue = void 0;

      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);
        left = Math.max(thumb.offsetWidth / 2, left);

        hue = Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 360);
      } else {
        var top = event.clientY - rect.top;
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);
        top = Math.max(thumb.offsetHeight / 2, top);

        hue = Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 360);
      }

      this.color.set('hue', hue);
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetWidth - thumb.offsetWidth / 2) / 360);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var hue = this.color.get('hue');

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(hue * (el.offsetHeight - thumb.offsetHeight / 2) / 360);
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
    }
  },

  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    (0, _draggable2.default)(bar, dragConfig);
    (0, _draggable2.default)(thumb, dragConfig);
    this.update();
  }
}; //
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

/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-color-hue-slider",class:{ 'is-vertical': _vm.vertical }},[_c('div',{ref:"bar",staticClass:"el-color-hue-slider__bar",on:{"click":_vm.handleClick}}),_c('div',{ref:"thumb",staticClass:"el-color-hue-slider__thumb",style:({
         left: _vm.thumbLeft + 'px',
         top: _vm.thumbTop + 'px'
       })})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a307896_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__ = __webpack_require__(374);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_alpha_slider_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5a307896_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_alpha_slider_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _draggable = __webpack_require__(28);

var _draggable2 = _interopRequireDefault(_draggable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'el-color-alpha-slider',

  props: {
    color: {
      required: true
    },
    vertical: Boolean
  },

  watch: {
    'color._alpha': function color_alpha() {
      this.update();
    },
    'color.value': function colorValue() {
      this.update();
    }
  },

  methods: {
    handleClick: function handleClick(event) {
      var thumb = this.$refs.thumb;
      var target = event.target;

      if (target !== thumb) {
        this.handleDrag(event);
      }
    },
    handleDrag: function handleDrag(event) {
      var rect = this.$el.getBoundingClientRect();
      var thumb = this.$refs.thumb;


      if (!this.vertical) {
        var left = event.clientX - rect.left;
        left = Math.max(thumb.offsetWidth / 2, left);
        left = Math.min(left, rect.width - thumb.offsetWidth / 2);

        this.color.set('alpha', Math.round((left - thumb.offsetWidth / 2) / (rect.width - thumb.offsetWidth) * 100));
      } else {
        var top = event.clientY - rect.top;
        top = Math.max(thumb.offsetHeight / 2, top);
        top = Math.min(top, rect.height - thumb.offsetHeight / 2);

        this.color.set('alpha', Math.round((top - thumb.offsetHeight / 2) / (rect.height - thumb.offsetHeight) * 100));
      }
    },
    getThumbLeft: function getThumbLeft() {
      if (this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetWidth - thumb.offsetWidth / 2) / 100);
    },
    getThumbTop: function getThumbTop() {
      if (!this.vertical) return 0;
      var el = this.$el;
      var alpha = this.color._alpha;

      if (!el) return 0;
      var thumb = this.$refs.thumb;
      return Math.round(alpha * (el.offsetHeight - thumb.offsetHeight / 2) / 100);
    },
    getBackground: function getBackground() {
      if (this.color && this.color.value) {
        var _color$toRgb = this.color.toRgb(),
            r = _color$toRgb.r,
            g = _color$toRgb.g,
            b = _color$toRgb.b;

        return 'linear-gradient(to right, rgba(' + r + ', ' + g + ', ' + b + ', 0) 0%, rgba(' + r + ', ' + g + ', ' + b + ', 1) 100%)';
      }
      return null;
    },
    update: function update() {
      this.thumbLeft = this.getThumbLeft();
      this.thumbTop = this.getThumbTop();
      this.background = this.getBackground();
    }
  },

  data: function data() {
    return {
      thumbLeft: 0,
      thumbTop: 0,
      background: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var _$refs = this.$refs,
        bar = _$refs.bar,
        thumb = _$refs.thumb;


    var dragConfig = {
      drag: function drag(event) {
        _this.handleDrag(event);
      },
      end: function end(event) {
        _this.handleDrag(event);
      }
    };

    (0, _draggable2.default)(bar, dragConfig);
    (0, _draggable2.default)(thumb, dragConfig);
    this.update();
  }
}; //
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

/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-color-alpha-slider",class:{ 'is-vertical': _vm.vertical }},[_c('div',{ref:"bar",staticClass:"el-color-alpha-slider__bar",style:({
         background: _vm.background
       }),on:{"click":_vm.handleClick}}),_c('div',{ref:"thumb",staticClass:"el-color-alpha-slider__thumb",style:({
         left: _vm.thumbLeft + 'px',
         top: _vm.thumbTop + 'px'
       })})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"el-zoom-in-top"},on:{"after-leave":_vm.doDestroy}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showPopper),expression:"showPopper"}],staticClass:"el-color-dropdown"},[_c('div',{staticClass:"el-color-dropdown__main-wrapper"},[_c('hue-slider',{ref:"hue",staticStyle:{"float":"right"},attrs:{"color":_vm.color,"vertical":""}}),_c('sv-panel',{ref:"sl",attrs:{"color":_vm.color}})],1),(_vm.showAlpha)?_c('alpha-slider',{ref:"alpha",attrs:{"color":_vm.color}}):_vm._e(),_c('div',{staticClass:"el-color-dropdown__btns"},[_c('span',{staticClass:"el-color-dropdown__value"},[_c('el-input',{attrs:{"size":"mini"},on:{"blur":_vm.handleConfirm},nativeOn:{"keyup":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key)){ return null; }_vm.handleConfirm($event)}},model:{value:(_vm.customInput),callback:function ($$v) {_vm.customInput=$$v},expression:"customInput"}})],1),_c('el-button',{staticClass:"el-color-dropdown__link-btn",attrs:{"size":"mini","type":"text"},on:{"click":function($event){_vm.$emit('clear')}}},[_vm._v("\n        "+_vm._s(_vm.t('el.colorpicker.clear'))+"\n      ")]),_c('el-button',{staticClass:"el-color-dropdown__btn",attrs:{"plain":"","size":"mini"},on:{"click":_vm.confirmValue}},[_vm._v("\n        "+_vm._s(_vm.t('el.colorpicker.confirm'))+"\n      ")])],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"clickoutside",rawName:"v-clickoutside",value:(_vm.hide),expression:"hide"}],class:[
    'el-color-picker',
    _vm.disabled ? 'is-disabled' : '',
    _vm.colorSize ? ("el-color-picker--" + _vm.colorSize) : ''
  ]},[(_vm.disabled)?_c('div',{staticClass:"el-color-picker__mask"}):_vm._e(),_c('div',{staticClass:"el-color-picker__trigger",on:{"click":_vm.handleTrigger}},[_c('span',{staticClass:"el-color-picker__color",class:{ 'is-alpha': _vm.showAlpha }},[_c('span',{staticClass:"el-color-picker__color-inner",style:({
          backgroundColor: _vm.displayedColor
        })}),(!_vm.value && !_vm.showPanelColor)?_c('span',{staticClass:"el-color-picker__empty el-icon-close"}):_vm._e()]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.value || _vm.showPanelColor),expression:"value || showPanelColor"}],staticClass:"el-color-picker__icon el-icon-arrow-down"})]),_c('picker-dropdown',{ref:"dropdown",class:['el-color-picker__panel', _vm.popperClass || ''],attrs:{"color":_vm.color,"show-alpha":_vm.showAlpha},on:{"pick":_vm.confirmValue,"clear":_vm.clearValue},model:{value:(_vm.showPicker),callback:function ($$v) {_vm.showPicker=$$v},expression:"showPicker"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(378);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e67946bc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(383);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e67946bc_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _button = __webpack_require__(14);

var _button2 = _interopRequireDefault(_button);

var _emitter = __webpack_require__(1);

var _emitter2 = _interopRequireDefault(_emitter);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

var _transferPanel = __webpack_require__(380);

var _transferPanel2 = _interopRequireDefault(_transferPanel);

var _migrating = __webpack_require__(7);

var _migrating2 = _interopRequireDefault(_migrating);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'ElTransfer',

  mixins: [_emitter2.default, _locale2.default, _migrating2.default],

  components: {
    TransferPanel: _transferPanel2.default,
    ElButton: _button2.default
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    titles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    buttonTexts: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    filterPlaceholder: {
      type: String,
      default: ''
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    rightDefaultChecked: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    format: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    filterable: Boolean,
    props: {
      type: Object,
      default: function _default() {
        return {
          label: 'label',
          key: 'key',
          disabled: 'disabled'
        };
      }
    }
  },

  data: function data() {
    return {
      leftChecked: [],
      rightChecked: []
    };
  },


  computed: {
    sourceData: function sourceData() {
      var _this = this;

      return this.data.filter(function (item) {
        return _this.value.indexOf(item[_this.props.key]) === -1;
      });
    },
    targetData: function targetData() {
      var _this2 = this;

      return this.data.filter(function (item) {
        return _this2.value.indexOf(item[_this2.props.key]) > -1;
      });
    },
    hasButtonTexts: function hasButtonTexts() {
      return this.buttonTexts.length === 2;
    }
  },

  watch: {
    value: function value(val) {
      this.dispatch('ElFormItem', 'el.form.change', val);
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'footer-format': 'footer-format is renamed to format.'
        }
      };
    },
    onSourceCheckedChange: function onSourceCheckedChange(val) {
      this.leftChecked = val;
    },
    onTargetCheckedChange: function onTargetCheckedChange(val) {
      this.rightChecked = val;
    },
    addToLeft: function addToLeft() {
      var currentValue = this.value.slice();
      this.rightChecked.forEach(function (item) {
        var index = currentValue.indexOf(item);
        if (index > -1) {
          currentValue.splice(index, 1);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'left', this.rightChecked);
    },
    addToRight: function addToRight() {
      var _this3 = this;

      var currentValue = this.value.slice();
      this.leftChecked.forEach(function (item) {
        if (_this3.value.indexOf(item) === -1) {
          currentValue = currentValue.concat(item);
        }
      });
      this.$emit('input', currentValue);
      this.$emit('change', currentValue, 'right', this.leftChecked);
    }
  }
}; //
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

/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dc766d9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_transfer_panel_vue__ = __webpack_require__(382);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_transfer_panel_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dc766d9_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_transfer_panel_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _checkboxGroup = __webpack_require__(35);

var _checkboxGroup2 = _interopRequireDefault(_checkboxGroup);

var _checkbox = __webpack_require__(13);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _locale = __webpack_require__(2);

var _locale2 = _interopRequireDefault(_locale);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  mixins: [_locale2.default],

  name: 'ElTransferPanel',

  componentName: 'ElTransferPanel',

  components: {
    ElCheckboxGroup: _checkboxGroup2.default,
    ElCheckbox: _checkbox2.default,
    ElInput: _input2.default,
    OptionContent: {
      props: {
        option: Object
      },
      render: function render(h) {
        var getParent = function getParent(vm) {
          if (vm.$options.componentName === 'ElTransferPanel') {
            return vm;
          } else if (vm.$parent) {
            return getParent(vm.$parent);
          } else {
            return vm;
          }
        };
        var parent = getParent(this);
        return parent.renderContent ? parent.renderContent(h, this.option) : h(
          'span',
          null,
          [this.option[parent.labelProp] || this.option[parent.keyProp]]
        );
      }
    }
  },

  props: {
    data: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    renderContent: Function,
    placeholder: String,
    title: String,
    filterable: Boolean,
    format: Object,
    filterMethod: Function,
    defaultChecked: Array,
    props: Object
  },

  data: function data() {
    return {
      checked: [],
      allChecked: false,
      query: '',
      inputHover: false
    };
  },


  watch: {
    checked: function checked(val) {
      this.updateAllChecked();
      this.$emit('checked-change', val);
    },
    data: function data() {
      var _this = this;

      var checked = [];
      var filteredDataKeys = this.filteredData.map(function (item) {
        return item[_this.keyProp];
      });
      this.checked.forEach(function (item) {
        if (filteredDataKeys.indexOf(item) > -1) {
          checked.push(item);
        }
      });
      this.checked = checked;
    },
    checkableData: function checkableData() {
      this.updateAllChecked();
    },


    defaultChecked: {
      immediate: true,
      handler: function handler(val, oldVal) {
        var _this2 = this;

        if (oldVal && val.length === oldVal.length && val.every(function (item) {
          return oldVal.indexOf(item) > -1;
        })) return;
        var checked = [];
        var checkableDataKeys = this.checkableData.map(function (item) {
          return item[_this2.keyProp];
        });
        val.forEach(function (item) {
          if (checkableDataKeys.indexOf(item) > -1) {
            checked.push(item);
          }
        });
        this.checked = checked;
      }
    }
  },

  computed: {
    filteredData: function filteredData() {
      var _this3 = this;

      return this.data.filter(function (item) {
        if (typeof _this3.filterMethod === 'function') {
          return _this3.filterMethod(_this3.query, item);
        } else {
          var label = item[_this3.labelProp] || item[_this3.keyProp].toString();
          return label.toLowerCase().indexOf(_this3.query.toLowerCase()) > -1;
        }
      });
    },
    checkableData: function checkableData() {
      var _this4 = this;

      return this.filteredData.filter(function (item) {
        return !item[_this4.disabledProp];
      });
    },
    checkedSummary: function checkedSummary() {
      var checkedLength = this.checked.length;
      var dataLength = this.data.length;
      var _format = this.format,
          noChecked = _format.noChecked,
          hasChecked = _format.hasChecked;

      if (noChecked && hasChecked) {
        return checkedLength > 0 ? hasChecked.replace(/\${checked}/g, checkedLength).replace(/\${total}/g, dataLength) : noChecked.replace(/\${total}/g, dataLength);
      } else {
        return checkedLength + '/' + dataLength;
      }
    },
    isIndeterminate: function isIndeterminate() {
      var checkedLength = this.checked.length;
      return checkedLength > 0 && checkedLength < this.checkableData.length;
    },
    hasNoMatch: function hasNoMatch() {
      return this.query.length > 0 && this.filteredData.length === 0;
    },
    inputIcon: function inputIcon() {
      return this.query.length > 0 && this.inputHover ? 'circle-close' : 'search';
    },
    labelProp: function labelProp() {
      return this.props.label || 'label';
    },
    keyProp: function keyProp() {
      return this.props.key || 'key';
    },
    disabledProp: function disabledProp() {
      return this.props.disabled || 'disabled';
    },
    hasFooter: function hasFooter() {
      return !!this.$slots.default;
    }
  },

  methods: {
    updateAllChecked: function updateAllChecked() {
      var _this5 = this;

      var checkableDataKeys = this.checkableData.map(function (item) {
        return item[_this5.keyProp];
      });
      this.allChecked = checkableDataKeys.length > 0 && checkableDataKeys.every(function (item) {
        return _this5.checked.indexOf(item) > -1;
      });
    },
    handleAllCheckedChange: function handleAllCheckedChange(value) {
      var _this6 = this;

      this.checked = value ? this.checkableData.map(function (item) {
        return item[_this6.keyProp];
      }) : [];
    },
    clearQuery: function clearQuery() {
      if (this.inputIcon === 'circle-close') {
        this.query = '';
      }
    }
  }
};

/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-transfer-panel"},[_c('p',{staticClass:"el-transfer-panel__header"},[_c('el-checkbox',{attrs:{"indeterminate":_vm.isIndeterminate},on:{"change":_vm.handleAllCheckedChange},model:{value:(_vm.allChecked),callback:function ($$v) {_vm.allChecked=$$v},expression:"allChecked"}},[_vm._v("\n      "+_vm._s(_vm.title)+"\n      "),_c('span',[_vm._v(_vm._s(_vm.checkedSummary))])])],1),_c('div',{class:['el-transfer-panel__body', _vm.hasFooter ? 'is-with-footer' : '']},[(_vm.filterable)?_c('el-input',{staticClass:"el-transfer-panel__filter",attrs:{"size":"small","placeholder":_vm.placeholder},nativeOn:{"mouseenter":function($event){_vm.inputHover = true},"mouseleave":function($event){_vm.inputHover = false}},model:{value:(_vm.query),callback:function ($$v) {_vm.query=$$v},expression:"query"}},[_c('i',{class:['el-input__icon', 'el-icon-' + _vm.inputIcon],attrs:{"slot":"prefix"},on:{"click":_vm.clearQuery},slot:"prefix"})]):_vm._e(),_c('el-checkbox-group',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasNoMatch && _vm.data.length > 0),expression:"!hasNoMatch && data.length > 0"}],staticClass:"el-transfer-panel__list",class:{ 'is-filterable': _vm.filterable },model:{value:(_vm.checked),callback:function ($$v) {_vm.checked=$$v},expression:"checked"}},_vm._l((_vm.filteredData),function(item){return _c('el-checkbox',{key:item[_vm.keyProp],staticClass:"el-transfer-panel__item",attrs:{"label":item[_vm.keyProp],"disabled":item[_vm.disabledProp]}},[_c('option-content',{attrs:{"option":item}})],1)})),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasNoMatch),expression:"hasNoMatch"}],staticClass:"el-transfer-panel__empty"},[_vm._v(_vm._s(_vm.t('el.transfer.noMatch')))]),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.data.length === 0 && !_vm.hasNoMatch),expression:"data.length === 0 && !hasNoMatch"}],staticClass:"el-transfer-panel__empty"},[_vm._v(_vm._s(_vm.t('el.transfer.noData')))])],1),(_vm.hasFooter)?_c('p',{staticClass:"el-transfer-panel__footer"},[_vm._t("default")],2):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"el-transfer"},[_c('transfer-panel',_vm._b({attrs:{"data":_vm.sourceData,"title":_vm.titles[0] || _vm.t('el.transfer.titles.0'),"default-checked":_vm.leftDefaultChecked,"placeholder":_vm.filterPlaceholder || _vm.t('el.transfer.filterPlaceholder')},on:{"checked-change":_vm.onSourceCheckedChange}},'transfer-panel',_vm.$props,false),[_vm._t("left-footer")],2),_c('div',{staticClass:"el-transfer__buttons"},[_c('el-button',{class:['el-transfer__button', _vm.hasButtonTexts ? 'is-with-texts' : ''],attrs:{"type":"primary","disabled":_vm.rightChecked.length === 0},nativeOn:{"click":function($event){_vm.addToLeft($event)}}},[_c('i',{staticClass:"el-icon-arrow-left"}),(_vm.buttonTexts[0] !== undefined)?_c('span',[_vm._v(_vm._s(_vm.buttonTexts[0]))]):_vm._e()]),_c('el-button',{class:['el-transfer__button', _vm.hasButtonTexts ? 'is-with-texts' : ''],attrs:{"type":"primary","disabled":_vm.leftChecked.length === 0},nativeOn:{"click":function($event){_vm.addToRight($event)}}},[(_vm.buttonTexts[1] !== undefined)?_c('span',[_vm._v(_vm._s(_vm.buttonTexts[1]))]):_vm._e(),_c('i',{staticClass:"el-icon-arrow-right"})])],1),_c('transfer-panel',_vm._b({attrs:{"data":_vm.targetData,"title":_vm.titles[1] || _vm.t('el.transfer.titles.1'),"default-checked":_vm.rightDefaultChecked,"placeholder":_vm.filterPlaceholder || _vm.t('el.transfer.filterPlaceholder')},on:{"checked-change":_vm.onTargetCheckedChange}},'transfer-panel',_vm.$props,false),[_vm._t("right-footer")],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(385);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f431087_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(387);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f431087_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//

exports.default = {
  name: 'ElContainer',

  componentName: 'ElContainer',

  props: {
    direction: String
  },

  computed: {
    isVertical: function isVertical() {
      if (this.direction === 'vertical') {
        return true;
      } else if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default ? this.$slots.default.some(function (vnode) {
        var tag = vnode.componentOptions && vnode.componentOptions.tag;
        return tag === 'el-header' || tag === 'el-footer';
      }) : false;
    }
  }
};

/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"el-container",class:{ 'is-vertical': _vm.isVertical }},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(389);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f9e7fcf_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(391);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3f9e7fcf_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//

exports.default = {
  name: 'ElHeader',

  componentName: 'ElHeader',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};

/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"el-header",style:({ height: _vm.height })},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(393);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63107512_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(395);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63107512_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//

exports.default = {
  name: 'ElAside',

  componentName: 'ElAside',

  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
};

/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('aside',{staticClass:"el-aside",style:({ width: _vm.width })},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(397);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_260c3fa1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(399);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_260c3fa1_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//

exports.default = {
  name: 'ElMain',
  componentName: 'ElMain'
};

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main',{staticClass:"el-main"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _main = __webpack_require__(401);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* istanbul ignore next */
_main2.default.install = function (Vue) {
  Vue.component(_main2.default.name, _main2.default);
};

exports.default = _main2.default;

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdc5108e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__ = __webpack_require__(403);
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_main_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fdc5108e_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_main_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
//
//
//
//
//
//

exports.default = {
  name: 'ElFooter',

  componentName: 'ElFooter',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
};

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"el-footer",style:({ height: _vm.height })},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);