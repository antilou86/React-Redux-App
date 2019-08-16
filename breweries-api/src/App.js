import React from 'react';
import BreweriesList from './components/BreweriesList';
import {connect} from 'react-redux';
import {getBreweries, getBreweriesByState} from './actions'
import './App.css'

function App(props) {
  return (
    <div className="App">
      {props.isLoading ? (<h2>LOADING BREWERIES</h2>) : (<BreweriesList getBreweries={getBreweries} getBreweriesByState={getBreweriesByState}/>)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {...state,
          isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, {getBreweries, getBreweriesByState})(App);