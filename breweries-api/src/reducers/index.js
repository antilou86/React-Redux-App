const intitialState = { 
    breweries: []
}

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case "LOADING_BREWERIES": {
            return {};
        }
        case "BREWERY_SUCCESS": {
            return {};
        }
        case "BREWERY_ERROR": {
            return {};
        }
        default: return state;
    }
}