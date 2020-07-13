import React, { useEffect, useState } from "react";
import API from "../utils/API";


function Destination() {
    API.fetchDestination()
        .then(destination => {

        })

        .catch(err => console.log(err));
}











return (
    <div>
        <h1 className="text-center">Welcome to LinkedUp</h1>
        <p className="text-center h3">Click on the arrows to browse users</p>
        <Row>
            {/* Pass props to the card container */}
            <CardContainer />
        </Row>
    </div>
);
}

export default Destination;