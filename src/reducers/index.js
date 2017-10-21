import {combineReducers} from 'redux';
import sampleReducer from './samplereducer';

const rootReducer = combineReducers({
    
    sampleData: sampleReducer
});
export default rootReducer;
