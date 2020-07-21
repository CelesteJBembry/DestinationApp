import React from "react";
import { Form, Col } from 'react-bootstrap';
//import { Container } from "../Grid";


function Contact() {
    return (
    <div>
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

<div className="container">
<div className="jumbotron">
  <h1>The Destiny App Development Team</h1>
  <p>Creating new solutions to challenging problems.</p>
  <p>
    <button className="btn btn-primary btn-lg">Learn more</button>
  </p>
</div>
<div className="card mb-4">
  <div className="card-header">
    <h3>Team Members</h3>
   
  </div>
  <div className="card-body">
    <p className="card-text"><a href="">LinkedIn</a></p>
    <ul>
      <li>Celeste Bembry</li>
      <li>Harpreet Aulakh</li>
      <li>Brandon Lopez</li>
      <li>Lewis Cruz</li>
    </ul>
  </div>
</div>
</div>
</div>
    )
}

export default Contact;