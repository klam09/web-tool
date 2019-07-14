import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../Routes';

const Root = (props) => {
    const { store, history } = props;
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Routes />
            </ConnectedRouter>
        </Provider>
    );
};

Root.propTypes = {
    history: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.func,
        ])
    ),
    store: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
            PropTypes.func,
        ])
    ),
};

Root.defaultProps = {
    history: {},
    store: {},
};

export default Root;
