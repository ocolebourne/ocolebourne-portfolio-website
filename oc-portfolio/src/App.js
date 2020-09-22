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
import Nova from './pages/Nova';
import Artops from './pages/Artops';
import About from './pages/About';
import IdeasLab from './pages/IdeasLab';

function App() {
  const breakpoint = 575;
  const [screenLarge, setScreenLarge] = useState(window.innerWidth > breakpoint);

  useEffect(() => {
    const handleWindowResize = () => setScreenLarge(window.innerWidth > breakpoint)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);





  return (
    <Router>
      {screenLarge ? null : <Topbar />}
      <Container fluid>

        <Row>

          {screenLarge ? <Sidebar /> : null}
          <Col className="main-container">
            <Switch>
              <Route path="/" exact component={() => <Home topbar={!screenLarge} />} />
              <Route path="/about" component={() => <About topbar={!screenLarge} />} />
              <Route path="/nova" component={() => <Nova topbar={!screenLarge} />} />
              <Route path="/ideaslab" component={() => <IdeasLab topbar={!screenLarge} />} />
              <Route path="/artops" component={() => <Artops topbar={!screenLarge} />} />
              <Route path="/" component={() => <h1>404 not found</h1>} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
