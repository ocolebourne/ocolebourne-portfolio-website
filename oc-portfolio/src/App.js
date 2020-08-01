import React, { useState, useEffect } from 'react';
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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {const handleWindowResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const breakpoint = 620;

  const Navbar = () => {
    // The current width of the viewport
    const width = window.innerWidth;
    // The width below which the mobile view should be rendered
    const breakpoint = 620;
    
    /* If the viewport is more narrow than the breakpoint render the
       mobile component, else render the desktop component */
    return width < breakpoint ? <Topbar /> : <Sidebar />;
  }


  return (
    <Router>
      {screenWidth>breakpoint ? null: <Topbar />}
      <Container fluid>
          
          <Row>
          
            {screenWidth>breakpoint ? <Sidebar /> : null}
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
