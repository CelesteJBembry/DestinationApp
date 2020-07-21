import React from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";

function ListOfCities() {
    return (
        <div>

            <h3>List of Top Cities</h3>
            <ul>
                <li>
                    <Link to="/Destination/New_York_City">New York </Link>
                </li>
                <li>
                    <Link to="/Destination/Austin">Austin </Link>
                </li>
                <li>
                    <Link to="/Destination/Los_Angeles">Los Angeles </Link>
                </li>


            </ul>

        </div >
    )
}



export default ListOfCities;