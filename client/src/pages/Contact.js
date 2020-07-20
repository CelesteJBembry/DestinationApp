import React from "react";
import { Form, Col } from 'react-bootstrap';
//import { Container } from "../Grid";


function Contact() {
    return (
        //<Container>
        <Form>
            <h3>Contact Us!</h3>
            <Form.Row>
                <Col>
                    <Form.Control placeholder="First name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Last name" />
                </Col>
            </Form.Row>

            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows="4" />
            </Form.Group>
        </Form>
        //</Container>
    )
}

export default Contact;