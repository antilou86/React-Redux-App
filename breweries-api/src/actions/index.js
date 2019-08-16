import axios from 'axios';


export const getBreweries = () => dispatch => {
    console.log('getBreweries function fired! ')
    dispatch({type: "FETCH_BREWERY_START"});
    axios
    .get('https://api.openbrewerydb.org/breweries')
    .then( res => {
        console.log('heres your data sire ', res.data);
        dispatch({ type: "BREWERY_SUCCESS", payload: res.data });
    })
    .catch(err =>
        dispatch({type:"BREWERY_ERROR", payload: `ERROR LOADING: ${err}`})
    )
};


export const getBreweriesByState = (item) => {
    return {
        type: 'FILTER_BY_STATE',
        payload: item
    }
  };
