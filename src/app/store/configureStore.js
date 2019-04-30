import {combineReducers} from "redux";
import logger from "redux-logger";

import {rootReducer} from "../../app/reducers/index";

export default function ($ngReduxProvider) {
    "ngInject";
    $ngReduxProvider.createStoreWith(rootReducer,
        [logger]);
}
