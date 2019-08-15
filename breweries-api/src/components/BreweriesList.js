import React from 'react';
import Brewery from './Brewery'
import {connect} from 'react-redux'

const BreweriesList = props => { 
    const getAllBreweries = e => {
        e.preventDefault();
        props.getBreweries();
    };
    const filterByState = e => {
        e.preventDefault();
        props.getBreweriesByState();
    }
    return (
        <>
        <h2>Check out all the BEER STUFF</h2>
        <div>
        {props.breweries.map(brewery => (
            <Brewery brewery={brewery} key={brewery.name} />
        ))}
        </div>
        {props.error && <p>{props.error}</p>}
        <button onClick={getAllBreweries}>Find Breweries</button>
        <button onClick={filterByState}></button>
        </>
    )
}

const mapPropsToState = state => {
    return {
        breweries: state.breweries,
        error: state.error
    }
  }
  export default connect(mapPropsToState, {})(BreweriesList)