import styled from 'styled-components';
import { buildMediaQueries, propTypesRange } from '../utils';
import { maxColumns as MaxCols, breakpoints as Breakpoints } from '../constants';
import withContext from './withContext';

const Column = styled.div`
  ${props => {
    let breakpoints = Breakpoints;
    let columns = MaxCols;
    if (props.context) {
      // If the user supplied a <Grid> wrapper (context), use the breakpoints and columns they may have overrode
      breakpoints = props.context.breakpoints;
      columns = props.context.columns;
    }
    return buildMediaQueries(breakpoints, columns);
  }}
  box-sizing: border-box;
  width: 100%;
  padding: 0 2px;
`;

Column.propTypes = {
  xs: propTypesRange(0, MaxCols, 'Column'),
  sm: propTypesRange(0, MaxCols, 'Column'),
  md: propTypesRange(0, MaxCols, 'Column'),
  lg: propTypesRange(0, MaxCols, 'Column'),
  xl: propTypesRange(0, MaxCols, 'Column'),
};

export default withContext(Column);
