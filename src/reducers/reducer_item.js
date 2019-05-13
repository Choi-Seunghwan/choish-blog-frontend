import { FETCH_ITEMS, FETCH_ITEM, FETCH_ITEMS_APPEND, CLEAR_FETCHED_ITEM, CLEAR_FETCHED_ITEMS} from '../actions/index'

const initialState = {
    all: [],
    item: null,
    title: "item title",
    currentPage: null,
    nextPage: null,
    prevPage: null,
};

const itemreducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {
                ...state,
                all: action.payload.data,
                nextPage: action.payload.data.next,
                prevPage: action.payload.data.previous,
            };

        case FETCH_ITEM:
            return {
                ...state,
                item: action.payload.data,
                title: action.payload.data.title
            };
                
        case FETCH_ITEMS_APPEND:
            let newAll = action.payload.data;    
            let newResults = state.all.results.concat(newAll.results) //keep maintain data ordering
            newAll.results = newResults;
            return {
                ...state,
                all: newAll,
                nextPage: action.payload.data.next,
                prevPage: action.payload.data.previous
            };
        
        case CLEAR_FETCHED_ITEM:
            return {
                ...state,
                item: null
            }
        
        case CLEAR_FETCHED_ITEMS:
            return {
                ...state,
                all: []
            }
        default:
            return state;
    }
}

export default itemreducer;