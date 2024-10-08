var _excluded = ["country", "label", "aspectRatio"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DefaultInternationalIcon from './InternationalIcon.js';
import Flag from './Flag.js';
export function createCountryIconComponent(_ref) {
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
    var _aspectRatio = InternationalIcon === DefaultInternationalIcon ? aspectRatio : undefined;
    return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
      className: classNames('PhoneInputCountryIcon', {
        'PhoneInputCountryIcon--square': _aspectRatio === 1,
        'PhoneInputCountryIcon--border': country
      })
    }), country ? /*#__PURE__*/React.createElement(FlagComponent, {
      country: country,
      countryName: label,
      flags: flags,
      flagUrl: flagUrl,
      className: "PhoneInputCountryIconImg"
    }) : /*#__PURE__*/React.createElement(InternationalIcon, {
      title: label,
      aspectRatio: _aspectRatio,
      className: "PhoneInputCountryIconImg"
    }));
  }
  CountryIcon.propTypes = {
    country: PropTypes.string,
    label: PropTypes.string.isRequired,
    aspectRatio: PropTypes.number
  };
  return CountryIcon;
}
export default createCountryIconComponent({
  // Must be equal to `defaultProps.flagUrl` in `./PhoneInputWithCountry.js`.
  flagUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg',
  flagComponent: Flag,
  internationalIcon: DefaultInternationalIcon
});
//# sourceMappingURL=CountryIcon.js.map