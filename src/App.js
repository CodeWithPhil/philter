import React from "react";
import { Timeline } from "./Timeline";
import { PhleetDetails } from "./PhleetDetails";
import { UserDetails } from "./UserDetails";
import { phleets } from "./data/phleets";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./App.css";

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Philter</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Timeline</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/users/:userId">
          <UserDetails />
        </Route>
        <Route path="/details/:phleetId">
          <PhleetDetails />
        </Route>
        <Route path="/">
          <Container>
            <Timeline phleets={phleets} />
          </Container>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
