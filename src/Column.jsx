import styled from 'styled-components';

const cols = {
  min: 0,
  max: 12,
};

const breakpoints = {
  xs: '0px',
  sm: '540px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

const makeMediaQueries = (props) => {
  return Object.keys(breakpoints).reduce((accumulator, label) => {
    // eslint-disable-next-line no-param-reassign
    return (accumulator += `
      @media (min-width: ${breakpoints[label]}) {
        width: calc(100% * (${props[label]} / ${cols.max}));
      }`);
  }, '');
};

const Column = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0 2px;
  ${makeMediaQueries}
`;

// Allow min/max values to be passed to PropType validator
const numberBetween = (min, max) => {
  return (props, propName, componentName) => {
    const prop = props[propName];
    if (typeof prop !== 'number' || prop < min || prop > max) {
      return new Error(
        `Prop ${propName} must be a number between ${min} and ${max} on ${componentName}`,
      );
    }
  };
};

Column.defaultProps = {
  xs: cols.max,
  sm: cols.max,
  md: cols.max,
  lg: cols.max,
  xl: cols.max,
};

Column.propTypes = {
  xs: numberBetween(cols.min, cols.max),
  sm: numberBetween(cols.min, cols.max),
  md: numberBetween(cols.min, cols.max),
  lg: numberBetween(cols.min, cols.max),
  xl: numberBetween(cols.min, cols.max),
};

export default Column;
