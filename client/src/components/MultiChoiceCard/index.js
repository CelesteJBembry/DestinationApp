import React from "react";
import {Button, ButtonGroup, Card} from 'react-bootstrap';
//import "./style.css";
// import API from "../../utils"

function MultiChoiceCard(props) {

return (

      <Card>
         <Card.Body>
         <p>{props.question}</p>
            <ButtonGroup size="lg" className="mb-2">
               {props.answers.map((answer,i)=>{

                  return (
                  <div key ={i}> 
                  <Button onClick= {props.loadChoices}
                  >{answer["answer"+(i+1)]}</Button>
                  <img height = "100" width= "100"
                  src= {answer["img"] }/>

                  </div>
               

               )})}
            
            </ButtonGroup>
         
         </Card.Body>
      </Card>
   
);
}
export default MultiChoiceCard;

