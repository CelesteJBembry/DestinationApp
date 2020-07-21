import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";
import Contact from "./Contact";
import { Container } from "../components/Grid";


function Destination() {
    const [state, setState] = useState({})
    const [tour, setTour] = useState({})
    const { city } = useParams()
    useEffect(() => {
        API.fetchDestination(city)
            .then(destination => {
                setState(destination.data.results[0]);
                console.log(destination.data);

                API.fetchTour(city)
                    .then(tourResults => {
                        setTour(tourResults.data.results[0]);
                        console.log(tourResults.data);
                    })
                    .catch(err => console.log(err));

            })
            .catch(err => console.log(err));
    }, [])
    if (state.images, tour.name) {
        return (
            <div>
                <h2>Your Next Destination</h2>
                <br></br>
                <h2>{state.id}, {state.parent_id}</h2>
                <br></br>
                <p>{state.snippet}</p>
                <img src={state.images[0].source_url} style={{ height: "50%", width: "90%" }} />
                <br></br>
                <br></br>
                <h3>Availble Tours in {state.id}</h3>
                <br></br>
                <p>Tour Name : {tour.name}</p>

                {/* var n = num.toFixed(2) */}
                <p>Amount: {tour.price.amount * 1.15}</p>

                <a href={tour.vendor_tour_url} target="_blank">Click for more Info</a>
            </div >

        )
    }
    else { return ("Loading...") }


}


export default Destination;