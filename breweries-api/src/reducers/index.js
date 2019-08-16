import {FETCH_BREWERY_START} from '../actions';
import {BREWERY_SUCCESS} from '../actions';
import {BREWERY_ERROR} from '../actions';


const intitialState = { 
    breweries: [],
    error: '',
    isLoading: false
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case FETCH_BREWERY_START : {
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }
        case BREWERY_SUCCESS: {
            return {
                ...state,
                breweries: [...state.breweries, action.payload],
                isLoading: false,
            };
        }
        case BREWERY_ERROR: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        case "FILTER_BY_STATE": {
            return {
                ...state,
                breweries: [...state.breweries.filter()]
            }
        }
        default: return state;
    }
}

export default reducer;