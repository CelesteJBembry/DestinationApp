import React from "react";

function DestinationCity() {
    return (
        <div>
                <h3>Your Next Destination City is {state.id},{state.parent_id}</h3>
                <li>{state.snippet}</li>
                <img src={state.images[0].source_url} style={{ height: "50%", width: "90%" }} />
                <h3>Availble Tours in {state.id}</h3>
                <li>Tour Name : {tour.name}</li>
                <li>Amount: {tour.price.amount}</li>
                <a href={tour.vendor_tour_url} >Click for more Info</a>
        </div>
    );
}
                export default DestinationCity