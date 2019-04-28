import { FETCH_POSTS, FETCH_POST} from '../actions/index'

const initialState = {
    all: [],
    post: null,
    title: "post title"
};

const postreducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        case FETCH_POST:
            return {...state,
                    post: action.payload.data,
                    title: action.payload.data.title };
        default:
            return state;
    }
}

export default postreducer;