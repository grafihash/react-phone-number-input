"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _InputSmart = _interopRequireDefault(require("./InputSmart.js"));
var _InputBasic = _interopRequireDefault(require("./InputBasic.js"));
var _CountrySelect = require("./CountrySelect.js");
var _Flag = _interopRequireDefault(require("./Flag.js"));
var _InternationalIcon = _interopRequireDefault(require("./InternationalIcon.js"));
var _isE164Number = require("./helpers/isE164Number.js");
var _countries2 = require("./helpers/countries.js");
var _CountryIcon = require("./CountryIcon.js");
var _useExternalRef = require("./useExternalRef.js");
var _PropTypes = require("./PropTypes.js");
var _phoneInputHelpers = require("./helpers/phoneInputHelpers.js");
var _getPhoneInputWithCountryStateUpdateFromNewProps = _interopRequireDefault(require("./helpers/getPhoneInputWithCountryStateUpdateFromNewProps.js"));
var _excluded = ["name", "disabled", "readOnly", "autoComplete", "style", "className", "inputRef", "inputComponent", "numberInputProps", "smartCaret", "countrySelectComponent", "countrySelectProps", "containerComponent", "containerComponentProps", "defaultCountry", "countries", "countryOptionsOrder", "labels", "flags", "flagComponent", "flagUrl", "addInternationalOption", "internationalIcon", "displayInitialValueAsLocalNumber", "initialValueFormat", "onCountryChange", "limitMaxLength", "countryCallingCodeEditable", "focusInputOnCountrySelection", "reset", "metadata", "international", "locales"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var PhoneNumberInput_ = /*#__PURE__*/function (_React$PureComponent) {
  function PhoneNumberInput_(props) {
    var _this;
    _classCallCheck(this, PhoneNumberInput_);
    _this = _callSuper(this, PhoneNumberInput_, [props]);
    // This function mimicks `refSetter` function returned from `useExternalRef()` hook
    // because this class-like React component can't use the `useExternalRef()` hook.
    _defineProperty(_this, "setInputRef", function (instance) {
      (0, _useExternalRef.setRefsValue)([_this.props.inputRef, _this.inputRef], instance);
    });
    // A shorthand for not passing `metadata` as a second argument.
    _defineProperty(_this, "isCountrySupportedWithError", function (country) {
      var metadata = _this.props.metadata;
      return (0, _countries2.isCountrySupportedWithError)(country, metadata);
    });
    // Country `<select/>` `onChange` handler.
    _defineProperty(_this, "onCountryChange", function (newCountry) {
      var _this$props = _this.props,
        international = _this$props.international,
        metadata = _this$props.metadata,
        onChange = _this$props.onChange,
        focusInputOnCountrySelection = _this$props.focusInputOnCountrySelection;
      var _this$state = _this.state,
        prevPhoneDigits = _this$state.phoneDigits,
        prevCountry = _this$state.country;

      // After the new `country` has been selected,
      // if the phone number `<input/>` holds any digits
      // then migrate those digits for the new `country`.
      var newPhoneDigits = (0, _phoneInputHelpers.getPhoneDigitsForNewCountry)(prevPhoneDigits, {
        prevCountry: prevCountry,
        newCountry: newCountry,
        metadata: metadata,
        // Convert the phone number to "national" format
        // when the user changes the selected country by hand.
        useNationalFormat: !international
      });
      var newValue = (0, _phoneInputHelpers.e164)(newPhoneDigits, newCountry, metadata);

      // Focus phone number `<input/>` upon country selection.
      if (focusInputOnCountrySelection) {
        _this.inputRef.current.focus();
      }

      // If the user has already manually selected a country
      // then don't override that already selected country
      // if the `defaultCountry` property changes.
      // That's what `hasUserSelectedACountry` flag is for.

      _this.setState({
        country: newCountry,
        latestCountrySelectedByUser: newCountry,
        hasUserSelectedACountry: true,
        phoneDigits: newPhoneDigits,
        value: newValue
      }, function () {
        // Update the new `value` property.
        // Doing it after the `state` has been updated
        // because `onChange()` will trigger `getDerivedStateFromProps()`
        // with the new `value` which will be compared to `state.value` there.
        onChange(newValue);
      });
    });
    /**
     * `<input/>` `onChange()` handler.
     * Updates `value` property accordingly (so that they are kept in sync).
     * @param {string?} input — Either a parsed phone number or an empty string. Examples: `""`, `"+"`, `"+123"`, `"123"`.
     */
    _defineProperty(_this, "onChange", function (_phoneDigits) {
      var _this$props2 = _this.props,
        defaultCountry = _this$props2.defaultCountry,
        onChange = _this$props2.onChange,
        addInternationalOption = _this$props2.addInternationalOption,
        international = _this$props2.international,
        limitMaxLength = _this$props2.limitMaxLength,
        countryCallingCodeEditable = _this$props2.countryCallingCodeEditable,
        metadata = _this$props2.metadata;
      var _this$state2 = _this.state,
        countries = _this$state2.countries,
        prevPhoneDigits = _this$state2.phoneDigits,
        currentlySelectedCountry = _this$state2.country,
        latestCountrySelectedByUser = _this$state2.latestCountrySelectedByUser;
      var _onPhoneDigitsChange = (0, _phoneInputHelpers.onPhoneDigitsChange)(_phoneDigits, {
          prevPhoneDigits: prevPhoneDigits,
          country: currentlySelectedCountry,
          countryRequired: !addInternationalOption,
          defaultCountry: defaultCountry,
          latestCountrySelectedByUser: latestCountrySelectedByUser,
          getAnyCountry: function getAnyCountry() {
            return _this.getFirstSupportedCountry({
              countries: countries
            });
          },
          countries: countries,
          international: international,
          limitMaxLength: limitMaxLength,
          countryCallingCodeEditable: countryCallingCodeEditable,
          metadata: metadata
        }),
        phoneDigits = _onPhoneDigitsChange.phoneDigits,
        country = _onPhoneDigitsChange.country,
        value = _onPhoneDigitsChange.value;
      var stateUpdate = {
        phoneDigits: phoneDigits,
        value: value,
        country: country
      };

      // Reset `latestCountrySelectedByUser` if it no longer fits the `value`.
      if (latestCountrySelectedByUser && value && !(0, _phoneInputHelpers.couldNumberBelongToCountry)(value, latestCountrySelectedByUser, metadata)) {
        stateUpdate.latestCountrySelectedByUser = undefined;
      }
      if (countryCallingCodeEditable === false) {
        // If it simply did `setState({ phoneDigits: intlPrefix })` here,
        // then it would have no effect when erasing an inital international prefix
        // via Backspace, because `phoneDigits` in `state` wouldn't change
        // as a result, because it was `prefix` and it became `prefix`,
        // so the component wouldn't rerender, and the user would be able
        // to erase the country calling code part, and that part is
        // assumed to be non-eraseable. That's why the component is
        // forcefully rerendered here.
        // https://github.com/catamphetamine/react-phone-number-input/issues/367#issuecomment-721703501
        if (!value && phoneDigits === _this.state.phoneDigits) {
          // Force a re-render of the `<input/>` in order to reset its value.
          stateUpdate.forceRerender = {};
        }
      }
      _this.setState(stateUpdate,
      // Update the new `value` property.
      // Doing it after the `state` has been updated
      // because `onChange()` will trigger `getDerivedStateFromProps()`
      // with the new `value` which will be compared to `state.value` there.
      function () {
        return onChange(value);
      });
    });
    // Toggles the `--focus` CSS class.
    _defineProperty(_this, "_onFocus", function () {
      return _this.setState({
        isFocused: true
      });
    });
    // Toggles the `--focus` CSS class.
    _defineProperty(_this, "_onBlur", function () {
      return _this.setState({
        isFocused: false
      });
    });
    _defineProperty(_this, "onFocus", function (event) {
      _this._onFocus();
      var onFocus = _this.props.onFocus;
      if (onFocus) {
        onFocus(event);
      }
    });
    _defineProperty(_this, "onBlur", function (event) {
      var onBlur = _this.props.onBlur;
      _this._onBlur();
      if (onBlur) {
        onBlur(event);
      }
    });
    _defineProperty(_this, "onCountryFocus", function (event) {
      _this._onFocus();
      // this.setState({ countrySelectFocused: true })
      var countrySelectProps = _this.props.countrySelectProps;
      if (countrySelectProps) {
        var onFocus = countrySelectProps.onFocus;
        if (onFocus) {
          onFocus(event);
        }
      }
    });
    _defineProperty(_this, "onCountryBlur", function (event) {
      _this._onBlur();
      // this.setState({ countrySelectFocused: false })
      var countrySelectProps = _this.props.countrySelectProps;
      if (countrySelectProps) {
        var onBlur = countrySelectProps.onBlur;
        if (onBlur) {
          onBlur(event);
        }
      }
    });
    _this.inputRef = /*#__PURE__*/_react["default"].createRef();
    var _this$props3 = _this.props,
      _value = _this$props3.value,
      labels = _this$props3.labels,
      _international = _this$props3.international,
      _addInternationalOption = _this$props3.addInternationalOption,
      displayInitialValueAsLocalNumber = _this$props3.displayInitialValueAsLocalNumber,
      initialValueFormat = _this$props3.initialValueFormat,
      _metadata = _this$props3.metadata;
    var _this$props4 = _this.props,
      _defaultCountry = _this$props4.defaultCountry,
      _countries = _this$props4.countries;

    // Validate `defaultCountry`.
    if (_defaultCountry) {
      if (!_this.isCountrySupportedWithError(_defaultCountry)) {
        _defaultCountry = undefined;
      }
    }

    // Validate that the initially-supplied `value` is in `E.164` format.
    // Because sometimes people attempt to supply a `value` like "+1 (879) 490-8676".
    // https://gitlab.com/catamphetamine/react-phone-number-input/-/issues/231#note_2016334796
    if (_value) {
      (0, _isE164Number.validateE164Number)(_value);
    }

    // Validate `countries`.
    _countries = (0, _countries2.getSupportedCountries)(_countries, _metadata);
    var phoneNumber = (0, _phoneInputHelpers.parsePhoneNumber)(_value, _metadata);
    _this.CountryIcon = (0, _CountryIcon.createCountryIconComponent)(_this.props);
    var preSelectedCountry = (0, _phoneInputHelpers.getPreSelectedCountry)({
      value: _value,
      phoneNumber: phoneNumber,
      defaultCountry: _defaultCountry,
      required: !_addInternationalOption,
      countries: _countries || (0, _countries2.getCountries)(_metadata),
      getAnyCountry: function getAnyCountry() {
        return _this.getFirstSupportedCountry({
          countries: _countries
        });
      },
      metadata: _metadata
    });
    _this.state = {
      // Workaround for `this.props` inside `getDerivedStateFromProps()`.
      props: _this.props,
      // The country selected.
      country: preSelectedCountry,
      // `countries` are stored in `this.state` because they're filtered.
      // For example, a developer might theoretically pass some unsupported
      // countries as part of the `countries` property, and because of that
      // the component uses `this.state.countries` (which are filtered)
      // instead of `this.props.countries`
      // (which could potentially contain unsupported countries).
      countries: _countries,
      // `phoneDigits` state property holds non-formatted user's input.
      // The reason is that there's no way of finding out
      // in which form should `value` be displayed: international or national.
      // E.g. if `value` is `+78005553535` then it could be input
      // by a user both as `8 (800) 555-35-35` and `+7 800 555 35 35`.
      // Hence storing just `value` is not sufficient for correct formatting.
      // E.g. if a user entered `8 (800) 555-35-35`
      // then value is `+78005553535` and `phoneDigits` are `88005553535`
      // and if a user entered `+7 800 555 35 35`
      // then value is `+78005553535` and `phoneDigits` are `+78005553535`.
      phoneDigits: (0, _phoneInputHelpers.getInitialPhoneDigits)({
        value: _value,
        phoneNumber: phoneNumber,
        defaultCountry: _defaultCountry,
        international: _international,
        useNationalFormat: displayInitialValueAsLocalNumber || initialValueFormat === 'national',
        metadata: _metadata
      }),
      // `value` property is duplicated in state.
      // The reason is that `getDerivedStateFromProps()`
      // needs this `value` to compare to the new `value` property
      // to find out if `phoneDigits` needs updating:
      // If the `value` property was changed externally
      // then it won't be equal to `state.value`
      // in which case `phoneDigits` and `country` should be updated.
      value: _value
    };
    return _this;
  }
  _inherits(PhoneNumberInput_, _React$PureComponent);
  return _createClass(PhoneNumberInput_, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onCountryChange = this.props.onCountryChange;
      var defaultCountry = this.props.defaultCountry;
      var selectedCountry = this.state.country;
      if (onCountryChange) {
        if (defaultCountry) {
          if (!this.isCountrySupportedWithError(defaultCountry)) {
            defaultCountry = undefined;
          }
        }
        if (selectedCountry !== defaultCountry) {
          onCountryChange(selectedCountry);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var onCountryChange = this.props.onCountryChange;
      var country = this.state.country;
      // Call `onCountryChange` when user selects another country.
      if (onCountryChange && country !== prevState.country) {
        onCountryChange(country);
      }
    }
  }, {
    key: "getCountrySelectOptions",
    value: function getCountrySelectOptions(_ref) {
      var countries = _ref.countries;
      var _this$props5 = this.props,
        international = _this$props5.international,
        countryCallingCodeEditable = _this$props5.countryCallingCodeEditable,
        countryOptionsOrder = _this$props5.countryOptionsOrder,
        addInternationalOption = _this$props5.addInternationalOption,
        labels = _this$props5.labels,
        locales = _this$props5.locales,
        metadata = _this$props5.metadata;
      return this.useMemoCountrySelectOptions(function () {
        return (0, _countries2.sortCountryOptions)((0, _phoneInputHelpers.getCountrySelectOptions)({
          countries: countries || (0, _countries2.getCountries)(metadata),
          countryNames: labels,
          addInternationalOption: international && countryCallingCodeEditable === false ? false : addInternationalOption,
          compareStringsLocales: locales
          // compareStrings
        }), (0, _countries2.getSupportedCountryOptions)(countryOptionsOrder, metadata));
      }, [countries, countryOptionsOrder, addInternationalOption, labels, metadata]);
    }
  }, {
    key: "useMemoCountrySelectOptions",
    value: function useMemoCountrySelectOptions(generator, dependencies) {
      if (!this.countrySelectOptionsMemoDependencies || !areEqualArrays(dependencies, this.countrySelectOptionsMemoDependencies)) {
        this.countrySelectOptionsMemo = generator();
        this.countrySelectOptionsMemoDependencies = dependencies;
      }
      return this.countrySelectOptionsMemo;
    }
  }, {
    key: "getFirstSupportedCountry",
    value: function getFirstSupportedCountry(_ref2) {
      var countries = _ref2.countries;
      var countryOptions = this.getCountrySelectOptions({
        countries: countries
      });
      return countryOptions[0].value;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props6 = this.props,
        name = _this$props6.name,
        disabled = _this$props6.disabled,
        readOnly = _this$props6.readOnly,
        autoComplete = _this$props6.autoComplete,
        style = _this$props6.style,
        className = _this$props6.className,
        inputRef = _this$props6.inputRef,
        inputComponent = _this$props6.inputComponent,
        numberInputProps = _this$props6.numberInputProps,
        smartCaret = _this$props6.smartCaret,
        CountrySelectComponent = _this$props6.countrySelectComponent,
        countrySelectProps = _this$props6.countrySelectProps,
        ContainerComponent = _this$props6.containerComponent,
        containerComponentProps = _this$props6.containerComponentProps,
        defaultCountry = _this$props6.defaultCountry,
        countriesProperty = _this$props6.countries,
        countryOptionsOrder = _this$props6.countryOptionsOrder,
        labels = _this$props6.labels,
        flags = _this$props6.flags,
        flagComponent = _this$props6.flagComponent,
        flagUrl = _this$props6.flagUrl,
        addInternationalOption = _this$props6.addInternationalOption,
        internationalIcon = _this$props6.internationalIcon,
        displayInitialValueAsLocalNumber = _this$props6.displayInitialValueAsLocalNumber,
        initialValueFormat = _this$props6.initialValueFormat,
        onCountryChange = _this$props6.onCountryChange,
        limitMaxLength = _this$props6.limitMaxLength,
        countryCallingCodeEditable = _this$props6.countryCallingCodeEditable,
        focusInputOnCountrySelection = _this$props6.focusInputOnCountrySelection,
        reset = _this$props6.reset,
        metadata = _this$props6.metadata,
        international = _this$props6.international,
        locales = _this$props6.locales,
        rest = _objectWithoutProperties(_this$props6, _excluded);
      var _this$state3 = this.state,
        country = _this$state3.country,
        countries = _this$state3.countries,
        phoneDigits = _this$state3.phoneDigits,
        isFocused = _this$state3.isFocused;
      var InputComponent = smartCaret ? _InputSmart["default"] : _InputBasic["default"];
      var countrySelectOptions = this.getCountrySelectOptions({
        countries: countries
      });
      return /*#__PURE__*/_react["default"].createElement(ContainerComponent, _extends({
        style: style,
        className: (0, _classnames["default"])(className, 'PhoneInput', {
          'PhoneInput--focus': isFocused,
          'PhoneInput--disabled': disabled,
          'PhoneInput--readOnly': readOnly
        })
      }, containerComponentProps), /*#__PURE__*/_react["default"].createElement(CountrySelectComponent, _extends({
        name: name ? "".concat(name, "Country") : undefined,
        "aria-label": labels.country
      }, countrySelectProps, {
        value: country,
        options: countrySelectOptions,
        onChange: this.onCountryChange,
        onFocus: this.onCountryFocus,
        onBlur: this.onCountryBlur,
        disabled: disabled || countrySelectProps && countrySelectProps.disabled,
        readOnly: readOnly || countrySelectProps && countrySelectProps.readOnly,
        iconComponent: this.CountryIcon
      })), /*#__PURE__*/_react["default"].createElement(InputComponent, _extends({
        ref: this.setInputRef,
        type: "tel",
        autoComplete: autoComplete
      }, numberInputProps, rest, {
        inputFormat: international === true ? 'INTERNATIONAL' : international === false ? 'NATIONAL' : 'INTERNATIONAL_OR_NATIONAL',
        international: international ? true : undefined,
        withCountryCallingCode: international ? true : undefined,
        name: name,
        metadata: metadata,
        country: country,
        value: phoneDigits || '',
        onChange: this.onChange,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled,
        readOnly: readOnly,
        inputComponent: inputComponent,
        className: (0, _classnames["default"])('PhoneInputInput', numberInputProps && numberInputProps.className, rest.className)
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value:
    // `state` holds previous props as `props`, and also:
    // * `country` — The currently selected country, e.g. `"RU"`.
    // * `value` — The currently entered phone number (E.164), e.g. `+78005553535`.
    // * `phoneDigits` — The parsed `<input/>` value, e.g. `8005553535`.
    // (and a couple of other less significant properties)
    function getDerivedStateFromProps(props, state) {
      return _objectSpread({
        // Emulate `prevProps` via `state.props`.
        props: props
      }, (0, _getPhoneInputWithCountryStateUpdateFromNewProps["default"])(props, state.props, state));
    }
  }]);
}(_react["default"].PureComponent); // This wrapper is only to `.forwardRef()` to the `<input/>`.
var PhoneNumberInput = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(PhoneNumberInput_, _extends({}, withDefaultProps(props), {
    inputRef: ref
  }));
});
PhoneNumberInput.propTypes = {
  /**
   * Phone number in `E.164` format.
   *
   * Example:
   *
   * `"+12223333333"`
   *
   * Any "falsy" value like `undefined`, `null` or an empty string `""` is treated like "empty".
   */
  value: _propTypes["default"].string,
  /**
   * A function of `value: string?`.
   *
   * Updates the `value` property as the user inputs a phone number.
   *
   * If the user erases the input value, the argument is `undefined`.
   */
  onChange: _propTypes["default"].func.isRequired,
  /**
   * Toggles the `--focus` CSS class.
   * @ignore
   */
  onFocus: _propTypes["default"].func,
  /**
   * `onBlur` is usually passed by `redux-form`.
   * @ignore
   */
  onBlur: _propTypes["default"].func,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `disabled`.
   */
  disabled: _propTypes["default"].bool,
  /**
   * Set to `true` to mark both the phone number `<input/>`
   * and the country `<select/>` as `readonly`.
   */
  readOnly: _propTypes["default"].bool,
  /**
   * Sets `autoComplete` property for phone number `<input/>`.
   *
   * Web browser's "autocomplete" feature
   * remembers the phone number being input
   * and can also autofill the `<input/>`
   * with previously remembered phone numbers.
   *
   * https://developers.google.com
   * /web/updates/2015/06/checkout-faster-with-autofill
   *
   * For example, can be used to turn it off:
   *
   * "So when should you use `autocomplete="off"`?
   *  One example is when you've implemented your own version
   *  of autocomplete for search. Another example is any form field
   *  where users will input and submit different kinds of information
   *  where it would not be useful to have the browser remember
   *  what was submitted previously".
   */
  // (is `"tel"` by default)
  autoComplete: _propTypes["default"].string,
  /**
   * Set to `"national"` to show the initial `value` in
   * "national" format rather than "international".
   *
   * For example, if `initialValueFormat` is `"national"`
   * and the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"(213) 373-4253"`.
   *
   * By default, `initialValueFormat` is `undefined`,
   * meaning that if the initial `value="+12133734253"` is passed
   * then the `<input/>` value will be `"+1 213 373 4253"`.
   *
   * The reason for such default behaviour is that
   * the newer generation grows up when there are no stationary phones
   * and therefore everyone inputs phone numbers in international format
   * in their smartphones so people gradually get more accustomed to
   * writing phone numbers in international format rather than in local format.
   * Future people won't be using "national" format, only "international".
   */
  // (is `undefined` by default)
  initialValueFormat: _propTypes["default"].oneOf(['national']),
  // `displayInitialValueAsLocalNumber` property has been
  // superceded by `initialValueFormat` property.
  displayInitialValueAsLocalNumber: _propTypes["default"].bool,
  /**
   * The country to be selected by default.
   * For example, can be set after a GeoIP lookup.
   *
   * Example: `"US"`.
   */
  // A two-letter country code ("ISO 3166-1 alpha-2").
  defaultCountry: _propTypes["default"].string,
  /**
   * If specified, only these countries will be available for selection.
   *
   * Example:
   *
   * `["RU", "UA", "KZ"]`
   */
  countries: _propTypes["default"].arrayOf(_propTypes["default"].string),
  /**
   * Custom country `<select/>` option names.
   * Also some labels like "ext" and country `<select/>` `aria-label`.
   *
   * Example:
   *
   * `{ "ZZ": "Международный", RU: "Россия", US: "США", ... }`
   *
   * See the `locales` directory for examples.
   */
  labels: _PropTypes.labels,
  /**
   * Country `<select/>` options are sorted by their labels.
   * The default sorting function uses `a.localeCompare(b, locales)`,
   * and, if that's not available, falls back to simple `a > b` / `a < b`.
   * Some languages, like Chinese, support multiple sorting variants
   * (called "collations"), and the user might prefer one or another.
   * Also, sometimes the Operating System language is not always
   * the preferred language for a person using a website or an application,
   * so there should be a way to specify custom locale.
   * This `locales` property mimicks the `locales` argument of `Intl` constructors,
   * and can be either a Unicode BCP 47 locale identifier or an array of such locale identifiers.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
  locales: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  /*
   * Custom country `<select/>` options sorting function.
   * The default one uses `a.localeCompare(b)`, and,
   * if that's not available, falls back to simple `a > b`/`a < b`.
   * There have been requests to add custom sorter for cases
   * like Chinese language and "pinyin" (non-default) sorting order.
   * https://stackoverflow.com/questions/22907288/chinese-sorting-by-pinyin-in-javascript-with-localecompare
  compareStrings: PropTypes.func,
   */

  /**
   * A URL template of a country flag, where
   * "{XX}" is a two-letter country code in upper case,
   * or where "{xx}" is a two-letter country code in lower case.
   * By default it points to `country-flag-icons` gitlab pages website.
   * I imagine someone might want to download those country flag icons
   * and host them on their own servers instead
   * (all flags are available in the `country-flag-icons` library).
   * There's a catch though: new countries may be added in future,
   * so when hosting country flag icons on your own server
   * one should check the `CHANGELOG.md` every time before updating this library,
   * otherwise there's a possibility that some new country flag would be missing.
   */
  flagUrl: _propTypes["default"].string,
  /**
   * Custom country flag icon components.
   * These flags will be used instead of the default ones.
   * The the "Flags" section of the readme for more info.
   *
   * The shape is an object where keys are country codes
   * and values are flag icon components.
   * Flag icon components receive the same properties
   * as `flagComponent` (see below).
   *
   * Example:
   *
   * `{ "RU": (props) => <img src="..."/> }`
   *
   * Example:
   *
   * `import flags from 'country-flag-icons/react/3x2'`
   *
   * `import PhoneInput from 'react-phone-number-input'`
   *
   * `<PhoneInput flags={flags} .../>`
   */
  flags: _propTypes["default"].objectOf(_propTypes["default"].elementType),
  /**
   * Country flag icon component.
   *
   * Takes properties:
   *
   * * `country: string` — The country code.
   * * `countryName: string` — The country name.
   * * `flagUrl: string` — The `flagUrl` property (see above).
   * * `flags: object` — The `flags` property (see above).
   */
  flagComponent: _propTypes["default"].elementType,
  /**
   * Set to `false` to remove the "International" option from country `<select/>`.
   */
  addInternationalOption: _propTypes["default"].bool,
  /**
   * "International" icon component.
   * Should have the same aspect ratio.
   *
   * Receives properties:
   *
   * * `title: string` — "International" country option label.
   */
  internationalIcon: _propTypes["default"].elementType,
  /**
   * Can be used to place some countries on top of the list of country `<select/>` options.
   *
   * * `"XX"` — inserts an option for "XX" country.
   * * `"🌐"` — inserts "International" option.
   * * `"|"` — inserts a separator.
   * * `"..."` — inserts options for the rest of the countries (can be omitted, in which case it will be automatically added at the end).
   *
   * Example:
   *
   * `["US", "CA", "AU", "|", "..."]`
   */
  countryOptionsOrder: _propTypes["default"].arrayOf(_propTypes["default"].string),
  /**
   * `<Phone/>` component CSS style object.
   */
  style: _propTypes["default"].object,
  /**
   * `<Phone/>` component CSS class.
   */
  className: _propTypes["default"].string,
  /**
   * Country `<select/>` component.
   *
   * Receives properties:
   *
   * * `name: string?` — HTML `name` attribute.
   * * `value: string?` — The currently selected country code.
   * * `onChange(value: string?)` — Updates the `value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * `options: object[]` — The list of all selectable countries (including "International") each being an object of shape `{ value: string?, label: string }`.
   * * `iconComponent: PropTypes.elementType` — React component that renders a country icon: `<Icon country={value}/>`. If `country` is `undefined` then it renders an "International" icon.
   * * `disabled: boolean?` — HTML `disabled` attribute.
   * * `readOnly: boolean?` — HTML `readOnly` attribute.
   * * `tabIndex: (number|string)?` — HTML `tabIndex` attribute.
   * * `className: string` — CSS class name.
   */
  countrySelectComponent: _propTypes["default"].elementType,
  /**
   * Country `<select/>` component props.
   * Along with the usual DOM properties such as `aria-label` and `tabIndex`,
   * some custom properties are supported, such as `arrowComponent` and `unicodeFlags`.
   */
  countrySelectProps: _propTypes["default"].object,
  /**
   * Phone number `<input/>` component.
   *
   * Receives properties:
   *
   * * `value: string` — The formatted `value`.
   * * `onChange(event: Event)` — Updates the formatted `value` from `event.target.value`.
   * * `onFocus()` — Is used to toggle the `--focus` CSS class.
   * * `onBlur()` — Is used to toggle the `--focus` CSS class.
   * * Other properties like `type="tel"` or `autoComplete="tel"` that should be passed through to the DOM `<input/>`.
   *
   * Must also either use `React.forwardRef()` to "forward" `ref` to the `<input/>` or implement `.focus()` method.
   */
  inputComponent: _propTypes["default"].elementType,
  /**
   * Phone number `<input/>` component props.
   */
  numberInputProps: _propTypes["default"].object,
  /**
   * Wrapping `<div/>` component.
   *
   * Receives properties:
   *
   * * `style: object` — A component CSS style object.
   * * `className: string` — Classes to attach to the component, typically changes when component focuses or blurs.
   */
  containerComponent: _propTypes["default"].elementType,
  /**
   * Wrapping `<div/>` component props.
   */
  containerComponentProps: _propTypes["default"].object,
  /**
   * When the user attempts to insert a digit somewhere in the middle of a phone number,
   * the caret position is moved right before the next available digit skipping
   * any punctuation in between. This is called "smart" caret positioning.
   * Another case would be the phone number format changing as a result of
   * the user inserting the digit somewhere in the middle, which would require
   * re-positioning the caret because all digit positions have changed.
   * This "smart" caret positioning feature can be turned off by passing
   * `smartCaret={false}` property: use it in case of any possible issues
   * with caret position during phone number input.
   */
  // Is `true` by default.
  smartCaret: _propTypes["default"].bool,
  /**
   * Set to `true` to force "international" phone number format.
   * Set to `false` to force "national" phone number format.
   * By default it's `undefined` meaning that it doesn't enforce any phone number format:
   * the user can input their phone number in either "national" or "international" format.
   */
  international: _propTypes["default"].bool,
  /**
   * If set to `true`, the phone number input will get trimmed
   * if it exceeds the maximum length for the country.
   */
  limitMaxLength: _propTypes["default"].bool,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: _propTypes["default"].bool,
  /**
   * `libphonenumber-js` metadata.
   *
   * Can be used to pass custom `libphonenumber-js` metadata
   * to reduce the overall bundle size for those who compile "custom" metadata.
   */
  metadata: _PropTypes.metadata,
  /**
   * Is called every time the selected country changes:
   * either programmatically or when user selects it manually from the list.
   */
  // People have been asking for a way to get the selected country.
  // @see  https://github.com/catamphetamine/react-phone-number-input/issues/128
  // For some it's just a "business requirement".
  // I guess it's about gathering as much info on the user as a website can
  // without introducing any addional fields that would complicate the form
  // therefore reducing "conversion" (that's a marketing term).
  // Assuming that the phone number's country is the user's country
  // is not 100% correct but in most cases I guess it's valid.
  onCountryChange: _propTypes["default"].func,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: _propTypes["default"].bool
};
var defaultProps = {
  /**
   * Remember (and autofill) the value as a phone number.
   */
  autoComplete: 'tel',
  /**
   * Country `<select/>` component.
   */
  countrySelectComponent: _CountrySelect.CountrySelectWithIcon,
  /**
   * Flag icon component.
   */
  flagComponent: _Flag["default"],
  /**
   * By default, uses icons from `country-flag-icons` gitlab pages website.
   */
  // Must be equal to `flagUrl` in `./CountryIcon.js`.
  flagUrl: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/{XX}.svg',
  /**
   * Default "International" country `<select/>` option icon.
   */
  internationalIcon: _InternationalIcon["default"],
  /**
   * Phone number `<input/>` component.
   */
  inputComponent: 'input',
  /**
   * Wrapping `<div/>` component.
   */
  containerComponent: 'div',
  /**
   * Some users requested a way to reset the component:
   * both number `<input/>` and country `<select/>`.
   * Whenever `reset` property changes both number `<input/>`
   * and country `<select/>` are reset.
   * It's not implemented as some instance `.reset()` method
   * because `ref` is forwarded to `<input/>`.
   * It's also not replaced with just resetting `country` on
   * external `value` reset, because a user could select a country
   * and then not input any `value`, and so the selected country
   * would be "stuck", if not using this `reset` property.
   */
  // https://github.com/catamphetamine/react-phone-number-input/issues/300
  reset: _propTypes["default"].any,
  /**
   *
   */

  /**
   * Set to `false` to use "basic" caret instead of the "smart" one.
   */
  smartCaret: true,
  /**
   * Whether to add the "International" option
   * to the list of countries.
   */
  addInternationalOption: true,
  /**
   * If set to `false`, and `international` is `true`, then
   * users won't be able to erase the "country calling part"
   * of a phone number in the `<input/>`.
   */
  countryCallingCodeEditable: true,
  /**
   * If set to `false`, will not focus the `<input/>` component
   * when the user selects a country from the list of countries.
   * This can be used to conform to the Web Content Accessibility Guidelines (WCAG).
   * Quote:
   * "On input: Changing the setting of any user interface component
   *  does not automatically cause a change of context unless the user
   *  has been advised of the behaviour before using the component."
   */
  focusInputOnCountrySelection: true
};
function withDefaultProps(props) {
  props = _objectSpread({}, props);
  for (var key in defaultProps) {
    if (props[key] === undefined) {
      props[key] = defaultProps[key];
    }
  }
  return props;
}
var _default = exports["default"] = PhoneNumberInput;
function areEqualArrays(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  var i = 0;
  while (i < a.length) {
    if (a[i] !== b[i]) {
      return false;
    }
    i++;
  }
  return true;
}
//# sourceMappingURL=PhoneInputWithCountry.js.map