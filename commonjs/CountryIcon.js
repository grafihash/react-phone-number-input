"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCountryIconComponent = createCountryIconComponent;
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _InternationalIcon = _interopRequireDefault(require("./InternationalIcon.js"));
var _Flag = _interopRequireDefault(require("./Flag.js"));
var _excluded = ["country", "label", "aspectRatio"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function createCountryIconComponent(_ref) {
  var flags = _ref.flags,
    flagUrl = _ref.flagUrl,
    FlagComponent = _ref.flagComponent,
    InternationalIcon = _ref.internationalIcon;
  function CountryIcon(_ref2) {
    var country = _ref2.country,
      label = _ref2.label,
      aspectRatio = _ref2.aspectRatio,
      rest = _objectWithoutProperties(_ref2, _excluded);
    // `aspectRatio` is currently a hack for the default "International" icon
    // to render it as a square when Unicode flag icons are used.
    // So `aspectRatio` property is only used with the default "International" icon.
    var _aspectRatio = InternationalIcon === _InternationalIcon["default"] ? aspectRatio : undefined;
    return /*#__PURE__*/_react["default"].createElement("div", _extends({}, rest, {
      className: (0, _classnames["default"])('PhoneInputCountryIcon', {
        'PhoneInputCountryIcon--square': _aspectRatio === 1,
        'PhoneInputCountryIcon--border': country
      })
    }), country ? /*#__PURE__*/_react["default"].createElement(FlagComponent, {
      country: country,
      countryName: label,
      flags: flags,
      flagUrl: flagUrl,
      className: "PhoneInputCountryIconImg"
    }) : /*#__PURE__*/_react["default"].createElement(InternationalIcon, {
      title: label,
      aspectRatio: _aspectRatio,
      className: "PhoneInputCountryIconImg"
    }));
  }
  CountryIcon.propTypes = {
    country: _propTypes["default"].string,
    label: _propTypes["default"].string.isRequired,
    aspectRatio: _propTypes["default"].number
  };
  return CountryIcon;
}
var _default = exports["default"] = createCountryIconComponent({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg',
  flagComponent: _Flag["default"],
  internationalIcon: _InternationalIcon["default"]
});
//# sourceMappingURL=CountryIcon.js.map