import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { CityResults } from "../components/CityResults";
import Contact from "./Contact";
import { Container } from "../components/Grid";
import { Button } from 'react-bootstrap';


function Destination(props) {
    const [state, setState] = useState({})
    const [tour, setTour] = useState({})
    const { city } = useParams()
    useEffect(() => {
        API.fetchDestination(props.city)
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
            <div>
                <h3>Click to see your next Destination!</h3>
                <Button href="#">Anchorage</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Chicago</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Denver</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Grand Canyon</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Houston</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Miami</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Raleigh</Button> <Button type="submit">Button</Button>{' '}
                <Button href="#">Washington, DC</Button> <Button type="submit">Button</Button>{' '}
            </div>
            
            <div>
                <h3>Your Next Destination City is {state.id},{state.parent_id}</h3>
                <li>{state.snippet}</li>
                <img src={state.images[0].source_url} style={{ height: "50%", width: "90%" }} />
                <h3>Availble Tours in {state.id}</h3>
                <li>Tour Name : {tour.name}</li>
                <li>Amount: {tour.price.amount}</li>
                <a href={tour.vendor_tour_url} >Click for more Info</a>
            </div >
            </div>
        )
    }
    else { return ("Loading") }


}


export default Destination;