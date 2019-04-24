import { combineReducers } from 'redux';
import postreducer from './reducer_post';
import devlogreducer from './reducer_devlog';

const reducers = combineReducers({
    posts : postreducer,
    devlogs : devlogreducer,
    
});

export default reducers;