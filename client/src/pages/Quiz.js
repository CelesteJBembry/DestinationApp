import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import MultiChoiceCard from "../components/MultiChoiceCard";
import { withRouter } from 'react-router-dom'

// const Button = withRouter(({ history }) => (
//   <button
//     type='button'
//     onClick={() => { history.push('/new-location') }}
//   >
//     Click Me!
//   </button>
// ))

function Quiz(props) {
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
        props.history.push('/Destination/New_Orleans/')
        
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

export default withRouter(Quiz);








