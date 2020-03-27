export const buildMediaQueries = (breakpoints, columns) => (props) => {
  return Object.keys(breakpoints).reduce((accumulator, label) => {
    return (accumulator += `
        @media (min-width: ${breakpoints[label]}) {
          width: calc(100% * (${props[label] || columns} / ${columns}));
        }`);
  }, '');
};

export const propTypesRange = (min, max, name = '') => {
  return (props, propName, componentName) => {
    const minimum = min || 0;
    const maximum = props.context ? props.context.columns : max;
    const prop = props[propName];
    if (prop !== undefined && typeof prop !== 'number' || prop < minimum || prop > maximum) {
      return new Error(
        `Prop '${propName}={${prop}}' must be a number between '${minimum}' and '${maximum}' on component '${name}'! In order to keep breakpoints functional, we have automatically resolved this issue by changing '${propName}' to '${maximum}'`,
      );
    }
  };
};
