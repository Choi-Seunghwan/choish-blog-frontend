import { FETCH_ITEMS, FETCH_ITEM} from '../actions/index'

const initialState = {
    all: [],
    item: null,
    title: "item title"
};

const itemreducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return { ...state, all: action.payload.data };
        case FETCH_ITEM:
            return {...state,
                    item: action.payload.data,
                    title: action.payload.data.title };
        default:
            return state;
    }
}

export default itemreducer;