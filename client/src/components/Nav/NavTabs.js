import React, { Component } from "react";

import NavTabs from "./NavTabs";
import Home from "../../pages/SignIn";
import Quiz from "../../pages/Quiz";
import Destination from "../../pages/Destination";
import Contact from "../../pages/Contact";

class Portfolio extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Quiz") {
      return <Quiz />;
    } else if (this.state.currentPage === "Destination") {
      return <Destination />;
    } else {
      return <Contact />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
