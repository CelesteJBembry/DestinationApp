import React from "react";
import { Col, Row, Container } from "../Grid";

// Results container

export function CityResults({
    cityObj
}) 

{   return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{cityObj.name}</h3>
                    </Col>
                </Row>
            </Container>
        </li>
    );
}
