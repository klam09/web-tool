import React from 'react';
import { Route, Switch } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import CounterPage from './containers/CounterPage';
import HomePage from './containers/HomePage';

export default () => (
    <App>
        <Switch>
            <Route path={routes.COUNTER} component={CounterPage} />
            <Route path={routes.HOME} component={HomePage} />
        </Switch>
    </App>
);
