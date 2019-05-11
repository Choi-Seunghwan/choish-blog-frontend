import { combineReducers } from 'redux';
import itemreducer from './reducer_item';
import utilsreducer from './reducer_util';

const reducers = combineReducers({
    items : itemreducer,
    utils : utilsreducer,
});

export default reducers;