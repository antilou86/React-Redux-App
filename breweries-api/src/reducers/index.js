

const intitialState = { 
    breweries: [],
    error: '',
    isLoading: false
};

function reducer(state = intitialState, action) {
    console.log('state from the reducer ', state);
    console.log('action as it appears in the reducer', action)
    switch (action.type) {
        case "FETCH_BREWERY_START": 
            return {
                ...state,
                error: '',
                isLoading: true
        };
        case "BREWERY_SUCCESS":
            return {
                ...state,
                breweries: [...state.breweries, action.payload],
                error: '',
                isLoading: false
            };
        case "BREWERY_ERROR":
            return {
                ...state,
                error: action.payload
            };
        case "FILTER_BY_STATE":
            return {
                ...state,
                breweries: [...state.breweries[0].filter()]
            }

        default: return state;
    }
}

export default reducer;