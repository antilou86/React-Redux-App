import React from 'react';
import BreweriesList from './components/BreweriesList';
import {connect} from 'react-redux';
import {getBreweries, getBreweriesByState} from './actions'
function App() {
  return (
    <div className="App">
      <BreweriesList/>
    </div>
  );
}
const mapPropsToState = state => {
  return { }
}
export default connect(mapPropsToState, {getBreweries, getBreweriesByState})(App);