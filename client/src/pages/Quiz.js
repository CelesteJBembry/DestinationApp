import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import MultiChoiceCard from "../components/MultiChoiceCard";

function Quiz() {
    const [questions, setQuestions] = useState([])
    const [choices,setChoices]= useState([])

    useEffect(() => {
        loadQuestions()
    }, [])

    useEffect(() => {
        console.log(choices)
        if(choices.length===5)
        {switchCase()}
    }, [choices])

    function loadQuestions() {
        API.getQuestions()
        .then(res=>{
            setQuestions(res.data)
            console.log(res)
        })
            .catch(err => console.log(err));
    };
    function loadChoices (event){
        console.log(event.target.textContent)
        setChoices([...choices,event.target.textContent])
    }

    function switchCase(){
        console.log(choices)
        
    }
    

    return (
        <Row>
            <Col size="md-12">
                <div>
                {questions.map((question,i) =>  (
                
                <div key={i}>
                    

                <MultiChoiceCard 
                  answers={question.answers}
                  question={question.question}
                  loadChoices= {loadChoices}
                
                    />
                    </div>
                ))}
                
                
                </div>
            </Col>
        </Row>
    )
}

export default Quiz;








