import React from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";

function ListOfCities() {
    return (
        <div className="text-center" >

            <h3>List of Top Cities</h3>
            <br></br>
            <p>
                <Link to="/Destination/Boston">Boston</Link>
            </p>
            <p>
                <Link to="/Destination/Chicago">Chicago </Link>
            </p>
            <p>
                <Link to="/Destination/Denver">Denver </Link>
            </p>
            <p>
                <Link to="/Destination/Orlando2C_Florida" >Orlando </Link>
            </p>
            <p>
                <Link to="/Destination/Honolulu" >Honolulu </Link>
            </p>
            <p>
                <Link to="/Destination/Las_Vegas2C_Nevada">Las Vegas </Link>
            </p>
            <p>
                <Link to="/Destination/Los_Angeles">Los Angeles </Link>
            </p>
            <p>
                <Link to="/Destination/Miami">Miami </Link>
            </p>
            <p>
                <Link to="/Destination/New_Orleans">New Orleans </Link>
            </p>
            <p>
                <Link to="/Destination/Seattle">Seattle </Link>
            </p>





        </div>
    )
}



export default ListOfCities;