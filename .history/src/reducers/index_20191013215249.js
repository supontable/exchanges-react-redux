import { combineReducers } from 'redux';
import { ratesReducer } from './ratesReducer';
import { pocketsReducer } from './pocketsReducer';
import { bufferReducer } from './bufferReducer'

const rootReducer = combineReducers({
    ratesReducer,
    pocketsReducer,
    bufferReducer
});

export default rootReducer;