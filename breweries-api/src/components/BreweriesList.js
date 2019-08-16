import React from 'react';
import Brewery from './Brewery'

import {connect} from 'react-redux'
import {getBreweries} from '../actions'
const BreweriesList = props => { 
   
    const getAllBreweries = () => {
        console.log('button clicked!')
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
        <button onClick={getAllBreweries()}>Find Breweries</button>
        
            {/* <label>
                <select>
                    <option>
                         states go here for stretch
                    </option>
                </select>
            </label>*/}
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
  export default connect(mapPropsToState, {getBreweries})(BreweriesList)