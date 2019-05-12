import { SET_LOADING, UNSET_LOADING } from '../actions/index'

const initialState = {
    busy: false,
    loading: false,
};

const utilsreducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: true}
        case UNSET_LOADING:
            return {...state, loading: false}
        default:
            return state;
    }
};

export default utilsreducer;