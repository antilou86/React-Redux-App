import React from 'react';

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