import { combineReducers } from 'redux';
import itemreducer from './reducer_item';

const reducers = combineReducers({
    items : itemreducer,
    
});

export default reducers;