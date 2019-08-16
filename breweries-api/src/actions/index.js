import axios from 'axios';

export const FETCH_BREWERY_START = "FETCH_BREWERY_START";
export const BREWERY_SUCCESS = "BREWERY_SUCCESS";
export const BREWERY_ERROR ="BREWERY_ERROR";

export const getBreweries = () => dispatch => {
    dispatch({type: FETCH_BREWERY_START});
    axios
    .get('https://api.openbrewerydb.org/breweries')
    .then( res => {
        dispatch({ type: BREWERY_SUCCESS, payload: res.data });
        console.log("here is your data, sire ", res.data);
            }
        )
    .catch(err => dispatch({type:BREWERY_ERROR, payload: `ERROR LOADING: ${err}`}))
}


export const getBreweriesByState = (item) => {
    return {
        type: 'FILTER_BY_STATE',
        payload: item
    }
  };
