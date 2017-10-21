import {combineReducers} from 'redux';
import sampleReducer from './samplereducer';

const rootReducer = combineReducers({
    authData: authReducer,
    sampleData: sampleReducer
});
export default rootReducer;
