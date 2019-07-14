import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import counter from './counter';

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        counter,
    });
}
