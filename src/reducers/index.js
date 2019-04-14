import { combineReducers } from 'redux';
import postreducer from './reducer_post';

const reducers = combineReducers({
    posts : postreducer,
    
});

export default reducers;