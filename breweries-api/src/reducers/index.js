import { FETCH_BREWERY_START } from '../actions';
import { BREWERY_SUCCESS } from '../actions';
import { BREWERY_ERROR } from '../actions';


const intitialState = { 
    breweries: [],
    error: '',
    isLoading: false
};

function reducer(state = intitialState, action) {
    console.log('state from the reducer ', state);
    switch (action.type) {
        case FETCH_BREWERY_START: 
            return {
                ...state,
                breweries:[...state.breweries],
                error: '',
                isLoading: true
        };
        case BREWERY_SUCCESS:
            return {
                ...state,
                breweries: [...state.breweries, action.payload],
                errors: '',
                isLoading: false
            };
        case BREWERY_ERROR:
            return {
                ...state,
                breweries: [...state.breweries],
                error: action.payload,
                isLoading: false
            };
        case "FILTER_BY_STATE":
            return {
                ...state,
                breweries: [...state.breweries.filter()]
            }
        default: return state;
    }
}

export default reducer;