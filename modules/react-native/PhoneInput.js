var _excluded = ["inputComponent", "metadata"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import PropTypes from 'prop-types';
import PhoneTextInput from './PhoneTextInput.js';
import PhoneInput_ from '../PhoneInput.js';
import InputBasic from '../InputBasic.js';
import { metadata as metadataType } from '../PropTypes.js';

/**
 * This is an _experimental_ React Native component.
 * Feedback thread: https://github.com/catamphetamine/react-phone-number-input/issues/296
 */
export function createPhoneInput(defaultMetadata) {
  var PhoneInput = function PhoneInput(_ref, ref) {
    var inputComponent = _ref.inputComponent,
      _ref$metadata = _ref.metadata,
      metadata = _ref$metadata === void 0 ? defaultMetadata : _ref$metadata,
      rest = _objectWithoutProperties(_ref, _excluded);
    return /*#__PURE__*/React.createElement(PhoneInput_, _extends({}, rest, {
      ref: ref,
      metadata: metadata,
      Component: InputBasic,
      inputComponent: PhoneTextInput,
      TextInputComponent: inputComponent
    }));
  };
  PhoneInput = /*#__PURE__*/React.forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    /**
     * Allows specifying a custom input field component,
     * like a "Material UI" input field or something.
     */
    inputComponent: PropTypes.elementType,
    /**
     * `libphonenumber-js` metadata.
     */
    metadata: metadataType
  };
  return PhoneInput;
}
export default createPhoneInput();
//# sourceMappingURL=PhoneInput.js.map