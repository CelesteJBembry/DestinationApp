import React, { useEffect, useState } from "react";
import API from "../utils/API";


function Destination(props) {
    useEffect(() => {
        API.fetchDestination(props.city)
            .then(destination => {
                console.log(destination.data);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <p>
            Hello
        </p>
    )
}





export default Destination;