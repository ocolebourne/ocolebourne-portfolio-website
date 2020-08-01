import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {


  return (
    <Router>
      <Container fluid>
          <Row>
          
            <Sidebar />
            <Col className="main-container">
              <div className="sidebar-spacer"></div>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/" component={()=><h1>404 not found</h1>} />
                <Route path="/about" component={()=><p>About</p>} />
              </Switch>
            </Col>
          </Row>
      </Container>
    </Router>
  );
}

export default App;
