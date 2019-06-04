import {combineReducers, applyMiddleware, createStore} from "redux";
import {createLogger} from 'redux-logger';
import reducers from '../reducers/index'


// import {rootReducer} from "../../app/reducers/index";
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, applyMiddleware(createLogger()));

export default function ($ngReduxProvider) {
    $ngReduxProvider.provideStore(store)
}
