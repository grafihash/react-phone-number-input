"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getCountries", {
  enumerable: true,
  get: function get() {
    return _core.getCountries;
  }
});
exports.getSupportedCountries = getSupportedCountries;
exports.getSupportedCountryOptions = getSupportedCountryOptions;
exports.isCountrySupportedWithError = isCountrySupportedWithError;
exports.sortCountryOptions = sortCountryOptions;
var _core = require("libphonenumber-js/core");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } // Ignores weird istanbul error: "else path not taken".
/**
 * Sorts country `<select/>` options.
 * Can move some country `<select/>` options
 * to the top of the list, for example.
 * @param  {object[]} countryOptions — Country `<select/>` options.
 * @param  {string[]} [countryOptionsOrder] — Country `<select/>` options order. Example: `["US", "CA", "AU", "|", "..."]`.
 * @return {object[]}
 */
function sortCountryOptions(options, order) {
  if (!order) {
    return options;
  }
  var optionsOnTop = [];
  var optionsOnBottom = [];
  var appendTo = optionsOnTop;
  var _loop = function _loop() {
    var element = _step.value;
    if (element === '|') {
      appendTo.push({
        divider: true
      });
    } else if (element === '...' || element === '…') {
      appendTo = optionsOnBottom;
    } else {
      var countryCode;
      if (element === '🌐') {
        countryCode = undefined;
      } else {
        countryCode = element;
      }
      // Find the position of the option.
      var index = options.indexOf(options.filter(function (option) {
        return option.value === countryCode;
      })[0]);
      // Get the option.
      var option = options[index];
      // Remove the option from its default position.
      options.splice(index, 1);
      // Add the option on top.
      appendTo.push(option);
    }
  };
  for (var _iterator = _createForOfIteratorHelperLoose(order), _step; !(_step = _iterator()).done;) {
    _loop();
  }
  return optionsOnTop.concat(options).concat(optionsOnBottom);
}
function getSupportedCountryOptions(countryOptions, metadata) {
  if (countryOptions) {
    countryOptions = countryOptions.filter(function (option) {
      switch (option) {
        case '🌐':
        case '|':
        case '...':
        case '…':
          return true;
        default:
          return isCountrySupportedWithError(option, metadata);
      }
    });
    if (countryOptions.length > 0) {
      return countryOptions;
    }
  }
}
function isCountrySupportedWithError(country, metadata) {
  if ((0, _core.isSupportedCountry)(country, metadata)) {
    return true;
  } else {
    console.error("Country not found: ".concat(country));
    return false;
  }
}
function getSupportedCountries(countries, metadata) {
  if (countries) {
    countries = countries.filter(function (country) {
      return isCountrySupportedWithError(country, metadata);
    });
    if (countries.length === 0) {
      countries = undefined;
    }
  }
  return countries;
}
//# sourceMappingURL=countries.js.map