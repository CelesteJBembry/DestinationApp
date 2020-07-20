import React, { Component } from "react";
import MultiChoiceCard from "./components/MultiChoiceCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Col, Row, Container } from "./components/Grid";
//import API from "./utils/API";
import Destination from "./pages/Destination";
import NavTabs from "./components/Nav";
import SignIn from "./pages/SignIn";
import Quiz from "./pages/Quiz";
import Contact from "./pages/Contact";

class App extends Component {

  render() {
    return (
      <Router>
        <Container>
          <NavTabs />
          <Switch>
            <Route exact path={["/", "/Home"]}>
              <SignIn />
            </Route>
            <Route exact path="/Quiz">
              <Quiz />
            </Route>
            <Route exact path="/Destination">
              <Destination />
            </Route>
            <Route exact path="/Contact">
              <Contact />
            </Route>
          </Switch>

          <Footer style={{ color: "red" }} />
        </Container >
      </Router >
    );
  }
}

export default App;

//react router guards; 
//check app to wrap firebase around it
//home - pretty pic
//button for log in /sign in 
//consider local storage for user ids

//componentdidmount to check if theres a current user

//write a func that "component did mount" on each page to make sure the user 