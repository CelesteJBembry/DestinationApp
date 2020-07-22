import React from "react";
import {Button, ButtonToolbar, ButtonGroup, Card} from 'react-bootstrap';
//import "./style.css";
// import API from "../../utils"

function MultiChoiceCard(props) {

return (

      <Card>
         <Card.Body>
         <h3 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>{props.question}</h3>
            <ButtonToolbar size="lg" className="mb-2" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
               {props.answers.map((answer,i)=>{

                  return (
                  <ButtonGroup>
                  <Button variant="info" key={i} onClick= {props.loadChoices}>
                     <img height = "175" width= "175"
                        src= {answer["img"] }/>
                     <h4>{answer["answer"+(i+1)]}</h4>
                  </Button> {' '}
                  </ButtonGroup>

)})}
            
            </ButtonToolbar>
   
         </Card.Body>
      </Card>
   
);
}
export default MultiChoiceCard;

