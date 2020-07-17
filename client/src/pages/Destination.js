import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";


function Destination(props) {
    const [state, setState] = useState({})

    useEffect(() => {
        API.fetchDestination(props.city)
            .then(destination => {
                setState(destination.data.results[0]);
                console.log(destination.data);

            })
            .catch(err => console.log(err));
    }, [])

    return (
        (state) ? <CityResults cityObj={state}></CityResults> : ""
    )
}


export default Destination;