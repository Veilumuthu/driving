import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from "../reducer/customerReducer/customerReducer";
import directoryReducer from "../reducer/directoryReducer/directoryReducer";
import directoryFilterReducer from "../reducer/directoryReducer/directoryFilterReducer";
import customerFilterReducer from "../reducer/customerReducer/customerFilterReducer";
// import directoryFilterReducer from "../reducer/directoryReducer/directoryFilterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

export default () => {
    const store = createStore(
        combineReducers({
            customers: customerReducer,
            directories: directoryReducer,
            cusFilters: customerFilterReducer,
            dirFilters: directoryFilterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}