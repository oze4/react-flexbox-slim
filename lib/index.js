import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 2px;\n  ", "\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var cols = {
  min: 0,
  max: 12
};
var breakpoints = {
  xs: '0px',
  sm: '540px',
  md: '768px',
  lg: '992px',
  xl: '1200px'
};

var makeMediaQueries = function makeMediaQueries(props) {
  return Object.keys(breakpoints).reduce(function (accumulator, label) {
    // eslint-disable-next-line no-param-reassign
    return accumulator += "\n      @media (min-width: ".concat(breakpoints[label], ") {\n        width: calc(100% * (").concat(props[label], " / ").concat(cols.max, "));\n      }");
  }, '');
};

var Column = styled.div(_templateObject$1(), makeMediaQueries); // Allow min/max values to be passed to PropType validator

var numberBetween = function numberBetween(min, max) {
  return function (props, propName, componentName) {
    var prop = props[propName];

    if (typeof prop !== 'number' || prop < min || prop > max) {
      return new Error("Prop ".concat(propName, " must be a number between ").concat(min, " and ").concat(max, " on ").concat(componentName));
    }
  };
};

Column.defaultProps = {
  xs: cols.max,
  sm: cols.max,
  md: cols.max,
  lg: cols.max,
  xl: cols.max
};
Column.propTypes = {
  xs: numberBetween(cols.min, cols.max),
  sm: numberBetween(cols.min, cols.max),
  md: numberBetween(cols.min, cols.max),
  lg: numberBetween(cols.min, cols.max),
  xl: numberBetween(cols.min, cols.max)
};

export { Column, Row };
