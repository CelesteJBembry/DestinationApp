import React from "react";
import { Col, Row, Container } from "../Grid";
import { image } from "react";
// Results container

export function CityResults({

    cityObj,
    tours
}) {
    return (

        <li className="list-group-item">
            <div>
                <div>
                    <div size="xs-4 sm-2">
                    </div>
                    <div size="xs-8 sm-9">
                        <h3>Your Next Destination City is {cityObj.name}</h3>

                    </div>
                </div>
            </div>
        </li>
    );
}