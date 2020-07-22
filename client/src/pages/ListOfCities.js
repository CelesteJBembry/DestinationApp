import React from "react";
import { Link } from "react-router-dom";
import {Button, Row, Col } from 'react-bootstrap';
//import logo192 from "../components/Images/logo192.png"
import Boston from "../components/Images/Boston.jpg"
import Chicago from "../components/Images/Chicago.jpg"
import denver from "../components/Images/denver.jpg"
import Houston from "../components/Images/Houston.jpg"
import LA from "../components/Images/LA.png"
import miami from "../components/Images/miami.jpg"
import newOrleans from "../components/Images/newOrleans.jpg"
import Vegas from "../components/Images/Vegas.jpeg"

function ListOfCities() {
    return (
        <div >
            <br></br>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                Click on the city for your next adventure!</h1>
                <br></br>
<Row>
    <Col>    
                <Link to="/Destination/Boston">
                    <Button variant="info" size="lg">Boston <br></br>
                    <img height = "200" width= "200" src={Boston} alt={"Boston"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>

                <Link to="/Destination/Chicago">
                    <Button variant="info" size="lg">Chicago <br></br>
                    <img height = "200" width= "200" src={Chicago} alt={"Chicago"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>

    </Col>
    <Col>    

                <Link to="/Destination/Houston">
                    <Button variant="info" size="lg">Houston <br></br>
                    <img height = "200" width= "200" src={Houston} alt={"Houston"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>
                <Link to="/Destination/Denver">
                    <Button variant="info" size="lg">Denver <br></br>
                    <img height = "200" width= "200" src={denver} alt={"Denver"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>
    </Col>    
    <Col>
                <Link to="/Destination/Las_Vegas2C_Nevada">
                    <Button variant="info" size="lg">Las Vegas <br></br>
                    <img height = "200" width= "200" src={Vegas} alt={"Las Vegas"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>
                <Link to="/Destination/Los_Angeles">
                    <Button variant="info" size="lg">Los Angeles <br></br>
                    <img height = "200" width= "200" src={LA} alt={"Los Angeles"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>
    </Col>
    <Col>
                <Link to="/Destination/Miami">
                    <Button variant="info" size="lg">Miami <br></br>
                    <img height = "200" width= "200" src={miami} alt={"Miami"}/>
                        </Button>{' '} 
                    </Link>
                    <br></br>
                    <br></br>
                <Link to="/Destination/New_Orleans">
                    <Button variant="info" size="lg">New Orleans <br></br>
                    <img height = "200" width= "200" src={newOrleans} alt={"New_Orleans"}/>
                        </Button>{' '} 
                    </Link>
    </Col>
                    </Row>
        </div >
    )
}



export default ListOfCities;