import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";
import Contact from "./Contact";
import { Alert, Card, Button, Col, Spinner } from 'react-bootstrap';
//import { Link } from "@reach/router";
import { Link } from "react-router-dom";


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
                <Alert.Heading>Your Next Destination is...</Alert.Heading>
                <h2>{state.id}, {state.parent_id} </h2>
                <hr />
                <Col >
                <img src={state.images[0].source_url} rounded 
                style={{ height: "50%", width: "80%" }} 
                />
                </Col>
                <h5>{state.snippet}</h5>
                <br></br>
                <Card>
                <Card.Header as="h5">Available Tours in {state.id}</Card.Header>
                <Card.Body>
                    <Card.Title>Tour : {tour.name}</Card.Title>
                    <Card.Text>
                    Price: ${tour.price.amount * 1.15.toFixed(0)}
                    </Card.Text>
                    <Button variant="info" href={tour.vendor_tour_url} target="_blank">Click for more Info</Button>
                </Card.Body>
                </Card>
                <br></br>
                
        <Link to="/Destination"
        >
          &larr; Back to View More Cities
        </Link>
            </div >

    


        )
    }
    else { return (
    <Spinner variant="info" animation="border" role="status">
    <span className="sr-only">Loading...</span>
    </Spinner>) 
    }


}


export default Destination;