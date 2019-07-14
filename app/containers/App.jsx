import PropTypes from 'prop-types';
import * as React from 'react';

const App = (props) => {
    const { children } = props;
    return <>{children}</>;
};

App.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.node,
    ]),
};

App.defaultProps = {
    children: <></>,
};

export default App;
