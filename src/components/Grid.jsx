import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import GridStateContext from '../context';
import { maxColumns as maxCols, breakpoints as bkpts } from '../constants';

const Grid = ({ maxColumns, breakpoints, children }) => {
  const [state] = useReducer(null, {
    context: {
      columns: maxColumns || maxCols,
      breakpoints: { ...bkpts, ...breakpoints },
    },
  });
  return <GridStateContext.Provider value={state}>{children}</GridStateContext.Provider>;
};

Grid.defaultProps = {
  context: {
    columns: maxCols,
    breakpoints: bkpts,
  },
};

Grid.propTypes = {
  context: PropTypes.shape({
    columns: PropTypes.number,
    breakpoints: PropTypes.shape({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  }),
};

export default Grid;
