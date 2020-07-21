import React, { useEffect, useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import MultiChoiceCard from "../components/MultiChoiceCard";

function Quiz() {
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        loadQuestions()
    }, [])

    function loadQuestions() {
        API.getQuestions()
            .then(res =>
                setQuestions(res.data)
            )
            .catch(err => console.log(err));
    };

    return (
        <Row>
            <Col size="md-12">
                <div>

                    <MultiChoiceCard
                        key={questions.id}
                        question={questions.question}
                        answers={questions.answers}
                    />
                </div>
            </Col>
        </Row>
    )
}

export default Quiz;








