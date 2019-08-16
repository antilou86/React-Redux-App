import React from 'react';
import '../App.css'

const Brewery = props => {
    return (
        <div className="brewery-div">
            <h4>{props.brewery.name}</h4>
            <h6>Speciality: {props.brewery.brewery_type}</h6>
            <a href={props.brewery.website_url}><p>Visit Us!</p></a>
            <p className="address">Address:{props.brewery.street} {props.brewery.city} {props.brewery.state}</p>
        </div>
    )
}
export default Brewery