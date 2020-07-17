import React, { useEffect, useState } from "react";
import choices from "../choice.json";
import { Col, Row, Container } from "../components/Grid";
import MultiChoiceCard from "../components/MultiChoiceCard";

function Quiz() {

    return (
        <Row>
            <Col size="md-12">
                <div>
                    {choices.map(choice => (
                        <MultiChoiceCard
                            id={choice.id}
                            key={choice.id}
                            question={choice.question}
                            //image={choice.image}
                            option1={choice.option1}
                            option2={choice.option2}
                            option3={choice.option3}
                            option4={choice.option4}
                        />
                    ))}
                </div>
            </Col>
        </Row>
    )
}

export default Quiz;