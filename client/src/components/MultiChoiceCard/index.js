import React from "react";
import { Container } from "../Grid";
import {Button, ButtonGroup, Card} from 'react-bootstrap';
//import "./style.css";
function MultiChoiceCard(props) {

return (
<Container>
   <Card>
      <Card.Body>
         {props.questions}
         &nbsp;&nbsp;    
         <ButtonGroup size="lg" className="mb-2">
            <Button>{props.answers}</Button>
            <Button>{props.answers}</Button>
            <Button>{props.answers}</Button>
            <Button>{props.answers}</Button>
         </ButtonGroup>
      </Card.Body>
   </Card>
</Container>
);
}
export default MultiChoiceCard;