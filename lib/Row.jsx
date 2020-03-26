import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
    display: flex;
    box-sizing: border-box;
    flex-direction: ${({ direction }) => direction};
    flex-wrap: ${({ wrap }) => wrap};
    justify-content: ${({ justifyContent }) => justifyContent};
    align-content: ${({ alignContent }) => alignContent};
    align-items: ${({ alignItems }) => alignItems}
`;

Row.defaultProps = {
    direction: 'row',
    wrap: 'wrap',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
}

Row.propTypes = {
    direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
    wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
    justifyContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly']),
    alignContent: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch']),
    alignItems: PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
}

export default Row;
