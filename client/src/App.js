import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import choices from "./choice.json";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import {Col, Row, Container} from "./components/Grid";

class App extends Component {
  state = {
    choices
  };

  render() {
    return (
<Container>       
  <Nav /> 
    <Row>        
      <Col size="md-4">
        <div>
        {this.state.choices.map(choice => (
          <MultiChoiceCard
          id={choice.id}
          key={choice.id}
          name={choice.name}
          image={choice.image}
          occupation={choice.occupation}
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
