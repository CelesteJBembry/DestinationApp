import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import choices from "./choice.json";
import Footer from "./components/Footer";
import { Col, Row, Container } from "./components/Grid";
//import API from "./utils/API";
import Destination from "./pages/Destination";
import NavTabs from "./components/Nav";

class App extends Component {
  state = {
    choices
  };

  render() {
    return (
      <Container>
        <NavTabs />

        <br></br>
        <Row>
          <Col size="md-12">
            <div>
              {this.state.choices.map(choice => (
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
        <br />
        <Row>
          {/*placeholder for the results from quiz */}
          <Destination
            // city={["New_York"][Math.floor(Math.random() * 2)]} />
            city={"Chicago"}
          />
        </Row>
        <br />
        <Footer style={{ color: "red" }} />
      </Container>
    );
  }
}

export default App;
