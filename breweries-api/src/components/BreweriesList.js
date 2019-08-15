import React from 'react';
import Brewery from './Brewery'
import {connect} from 'react-redux'

const BreweriesList = props => { 

    return (
        <>
        {props.breweries.map(brewery => (
            <Brewery brewery={brewery} key={brewery.name} />
        ))}
        </>
    )
}

const mapPropsToState = state => {
    return {
        breweries: []
    }
  }
  export default connect(mapPropsToState, {})(BreweriesList)