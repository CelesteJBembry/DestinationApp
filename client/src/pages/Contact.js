import React from "react";
import { Form, Col, ListGroup } from 'react-bootstrap';

function Contact() {
  return (
    <div>
      <div className="jumbotron">
        <h1>The Destiny App Development Team</h1>
        <p>Creating new solutions to challenging problems.</p>
        <p>
          <button className="btn btn-primary btn-lg">Learn more</button>
        </p>
        <ListGroup variant="flush">
        <ListGroup.Item>Celeste Bembry</ListGroup.Item>
        <ListGroup.Item>Brandon Lopez</ListGroup.Item>
        <ListGroup.Item>Harpreet Aulakh</ListGroup.Item>
        <ListGroup.Item>Lewis Cruz</ListGroup.Item>
        </ListGroup>
      </div>

      <div className="jumbotron">
      <h1>Contact Us!</h1>

          <div className="card-body">
      <Form>
        <Form.Row>
        <Form.Label>Name</Form.Label>
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
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
      </Form>       

          </div>
        </div>
      </div>
  )
}

export default Contact;