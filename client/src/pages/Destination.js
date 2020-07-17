import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";
function Destination(props) {
    const [state, setState] = useState({})
    const [tour, setTour] = useState({})

    useEffect(() => {
        API.fetchDestination(props.city)
            .then(destination => {
                setState(destination.data.results[0]);
                console.log(destination.data);

                API.fetchTour(props.city)
                    .then(tourResults => {
                        // setTour(destination.data.results[0]);
                        console.log(tourResults.data);
                    })
                    .catch(err => console.log(err));

            })
            .catch(err => console.log(err));
    }, [])

    return (
        (state) ? <CityResults cityObj={state}></CityResults> : ""
    )
}


export default Destination;