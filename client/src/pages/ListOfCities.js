import React from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";

function ListOfCities() {
    return (
        <div>

            <h3>List of Top Cities</h3>
            <ul>

                <li>
                    <Link to="/Destination/Boston">Boston</Link>
                </li>
                <li>
                    <Link to="/Destination/Chicago">Chicago </Link>
                </li>
                <li>
                    <Link to="/Destination/Denver">Denver </Link>
                </li>
                <li>
                    <Link to="/Destination/Las_Vegas2C_Nevada">Las Vegas </Link>
                </li>
                <li>
                    <Link to="/Destination/Los_Angeles">Los Angeles </Link>
                </li>
                <li>
                    <Link to="/Destination/Miami">Miami </Link>
                </li>
                <li>
                    <Link to="/Destination/New_Orleans">New Orleans </Link>
                </li>

                <li>
                    <Link to="/Destination/San_Francisco">San Francisco </Link>
                </li>


            </ul>

        </div >
    )
}



export default ListOfCities;