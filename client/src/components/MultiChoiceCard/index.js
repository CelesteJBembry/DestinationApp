import React from "react";
import { Container } from "../Grid";
import {Button, ButtonGroup, Card} from 'react-bootstrap';
//import "./style.css";
// import API from "../../utils"

function MultiChoiceCard(props) {

return (
<Container>
   <Card>
      <Card.Body>
      
         <ButtonGroup size="lg" className="mb-2">
            <Button>{props.answer}</Button>
            <Button>{props.answer}</Button>
            <Button>{props.answer}</Button>
            <Button>{props.answer}</Button>
      </ButtonGroup>
      
      </Card.Body>
   </Card>
</Container>
);
}
export default MultiChoiceCard;

