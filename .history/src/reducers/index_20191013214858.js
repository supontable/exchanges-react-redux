import { combineReducers } from 'react-redux';
import { ratesReducer } from './ratesReducer';
import { pocketsReducer } from './pocketsReducer';

const rootReducer = combineReducers({
    ratesReducer,
    pocketsReducer,
    bufferReducer
});

export default rootReducer;