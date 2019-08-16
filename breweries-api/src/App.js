import React from 'react';
import BreweriesList from './components/BreweriesList';
import {connect} from 'react-redux';
import {getBreweries, getBreweriesByState} from './actions'


function App(props) {
  return (
    <div className="App">
      <BreweriesList getBreweries={getBreweries} getBreweriesByState={getBreweriesByState}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, {getBreweries, getBreweriesByState})(App);