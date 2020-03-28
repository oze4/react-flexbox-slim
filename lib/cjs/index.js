'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: ", ";\n    flex-wrap: ", ";\n    justify-content: ", ";\n    align-content: ", ";\n    align-items: ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Row = styled.div(_templateObject(), function (_ref) {
  var direction = _ref.direction;
  return direction;
}, function (_ref2) {
  var wrap = _ref2.wrap;
  return wrap;
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;
  return justifyContent;
}, function (_ref4) {
  var alignContent = _ref4.alignContent;
  return alignContent;
}, function (_ref5) {
  var alignItems = _ref5.alignItems;
  return alignItems;
});
Row.defaultProps = {
  direction: 'row',
  wrap: 'wrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  alignItems: 'flex-start'
};
Row.propTypes = {
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
  alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']),
  alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
};

var buildMediaQueries = function buildMediaQueries(breakpoints, columns) {
  return function (props) {
    return Object.keys(breakpoints).reduce(function (accumulator, label) {
      return accumulator += "\n        @media (min-width: ".concat(breakpoints[label], ") {\n          width: calc(100% * (").concat(props[label] || columns, " / ").concat(columns, "));\n        }");
    }, '');
  };
};
var propTypesRange = function propTypesRange(min, max) {
  var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return function (props, propName, componentName) {
    var minimum = min || 0;
    var maximum = props.context ? props.context.columns : max;
    var prop = props[propName];

    if (prop !== undefined && typeof prop !== 'number' || prop < minimum || prop > maximum) {
      return new Error("Prop '".concat(propName, "={").concat(prop, "}' must be a number between '").concat(minimum, "' and '").concat(maximum, "' on component '").concat(name, "'! In order to keep breakpoints functional, we have automatically resolved this issue by changing '").concat(propName, "' to '").concat(maximum, "'"));
    }
  };
};

var maxColumns = 12;
var breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

var GridStateContext = React.createContext();

function withContext(Component) {
  return function WrapperComponent(props) {
    return /*#__PURE__*/React__default.createElement(GridStateContext.Consumer, null, function (contexts) {
      return /*#__PURE__*/React__default.createElement(Component, _extends({}, props, contexts));
    });
  };
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 2px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Column = styled.div(_templateObject$1(), function (props) {
  var breakpoints$1 = breakpoints;
  var columns = maxColumns;

  if (props.context) {
    // If the user supplied a <Grid> wrapper (context), use the breakpoints and columns they may have overrode
    breakpoints$1 = props.context.breakpoints;
    columns = props.context.columns;
  }

  return buildMediaQueries(breakpoints$1, columns);
});
Column.propTypes = {
  xs: propTypesRange(0, maxColumns, 'Column'),
  sm: propTypesRange(0, maxColumns, 'Column'),
  md: propTypesRange(0, maxColumns, 'Column'),
  lg: propTypesRange(0, maxColumns, 'Column'),
  xl: propTypesRange(0, maxColumns, 'Column')
};
var Column$1 = withContext(Column);

var Grid = function Grid(_ref) {
  var maxColumns$1 = _ref.maxColumns,
      breakpoints$1 = _ref.breakpoints,
      children = _ref.children;

  var _useReducer = React.useReducer(null, {
    context: {
      columns: maxColumns$1 || maxColumns,
      breakpoints: _objectSpread2({}, breakpoints, {}, breakpoints$1)
    }
  }),
      _useReducer2 = _slicedToArray(_useReducer, 1),
      state = _useReducer2[0];

  return /*#__PURE__*/React__default.createElement(GridStateContext.Provider, {
    value: state
  }, children);
};

Grid.defaultProps = {
  context: {
    columns: maxColumns,
    breakpoints: breakpoints
  }
};
Grid.propTypes = {
  context: PropTypes.shape({
    columns: PropTypes.number,
    breakpoints: PropTypes.shape({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string
    })
  })
};

exports.Column = Column$1;
exports.Grid = Grid;
exports.Row = Row;
