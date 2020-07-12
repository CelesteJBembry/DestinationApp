import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import choices from "./choice.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    choices
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      // <Wrapper>
        // <Title>Multiple Choice List</Title>
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
      // </Wrapper>
    );
  }
}

export default App;
