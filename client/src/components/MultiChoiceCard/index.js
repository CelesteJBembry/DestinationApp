import React from "react";
import { Container } from "../Grid";
import {Button, ButtonGroup, Card} from 'react-bootstrap';
//import "./style.css";

function MultiChoiceCard(props) {
  return (
    <Container>

    <Card>
  <Card.Body>
    {props.question}
    &nbsp;&nbsp;    
    <ButtonGroup size="lg" className="mb-2">
    <Button>{props.option1}</Button>
    <Button>{props.option2}</Button>
    <Button>{props.option3}</Button>
    <Button>{props.option4}</Button>
  </ButtonGroup>
  </Card.Body>
  </Card>
  
</Container>
      );
}

export default MultiChoiceCard;

