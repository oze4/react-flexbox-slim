import React from 'react';
import GridStateContext from '../context';

function withContext(Component) {
    return function WrapperComponent(props) {
        return (
            <GridStateContext.Consumer>
                {(contexts) => <Component {...props} {...contexts} />}
            </GridStateContext.Consumer>
        );
    };
}

export default withContext;
