import { FETCH_DEVLOGS, FETCH_DEVLOG} from '../actions/index'

const initialState = {
    all: [],
    devlog: null,
    title: "devlog title"
};

const devlogreducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DEVLOGS:
            return { ...state, all: action.payload.data };
        case FETCH_DEVLOG:
            return {...state,
                    devlog: action.payload.data,
                    title: action.payload.data.title };
        default:
            return state;
    }
}

export default devlogreducer;