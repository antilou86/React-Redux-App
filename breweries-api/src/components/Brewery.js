import React from 'react';

const Brewery = props => {
    return (
        <div>
            <h4>{props.brewery.name}</h4>
            <h6>Speciality: {props.brewery.brewery_type}</h6>
            <p>Visit Us: {props.brewery.website_url}</p>
            <p>address:{props.brewery.street} {props.brewery.city} {props.brewery.state}</p>
        </div>
    )
}
export default Brewery