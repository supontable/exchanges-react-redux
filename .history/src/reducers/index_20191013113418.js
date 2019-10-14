import {combineReducers} from 'redux';
import ratesReducer from './ratesReducer';

const rootReducer = combineReducers({
    ratesReducer,
});

export default rootReducer;