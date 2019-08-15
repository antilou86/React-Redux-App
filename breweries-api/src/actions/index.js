
export const getBreweries = (item) => {
    return {
        type: 'GET_BREWERIES',
        payload: item
    }
}

export const getBreweriesByState = (item) => {
    return {
        type: 'FILTER_BY_STATE',
        payload: item
    }
  };