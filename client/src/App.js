import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import choices from "./choice.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Col, Row, Container } from "./components/Grid";
import API from "./utils/API";
import Destination from "./pages/Destination";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    choices
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Nav />
        {/*placeholder for the results from quiz */}
        <Destination
          // city={["New_York"][Math.floor(Math.random() * 2)]} />
          city={"San_Francisco"} />
        <Row>
          <Col size="md-4">
            <div>
              {this.state.choices.map(choice => (
                <MultiChoiceCard
                  id={choice.id}
                  key={choice.id}
                  name={choice.name}
                  image={choice.image}
                  location={choice.location}
                />
              ))}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default App;
