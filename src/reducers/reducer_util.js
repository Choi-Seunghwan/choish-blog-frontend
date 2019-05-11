import { SET_LOADING, UNSET_LOADING } from '../actions/index'

const initialState = {
    busy: false,
    loading: false,
};

const utilsreducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            console.log("setLoading")
            return {...state, loading: true}
        case UNSET_LOADING:
            console.log("ununununun")
            return {...state, loading: false}
        default:
            return state;
    }
};

export default utilsreducer;