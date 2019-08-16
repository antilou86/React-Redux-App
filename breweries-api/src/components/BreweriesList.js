import React from 'react';
import Brewery from './Brewery'

import { connect } from 'react-redux'
import { getBreweries } from '../actions'

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
                {props.breweries && props.breweries.map(brewery => (
                    <Brewery key={brewery.id} brewery={brewery}></Brewery>
                ))}
            </div>
            
            {props.error && <p>{props.error}</p>}
           
            <button onClick={() => getAllBreweries()}>Find Breweries!</button>

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

const mapStateToProps = state => ({
        breweries: state.breweries[0],
        error: state.error
    });
export default connect(
    mapStateToProps, 
    { getBreweries }
    )(BreweriesList);