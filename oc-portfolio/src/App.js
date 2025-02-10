import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Home from "./pages/Home";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nova from './pages/Nova';
import Artops from './pages/Artops';
import IdeasLab from './pages/IdeasLab';
import Opaque from './pages/Opaque';
import Foto from './pages/Foto';

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
            <Routes>
              <Route path="/" element={<Home topbar={!screenLarge} />} />
              <Route path="/nova" element={<Nova topbar={!screenLarge} />} />
              <Route path="/opaque" element={<Opaque topbar={!screenLarge} />} />
              <Route path="/ideaslab" element={<IdeasLab topbar={!screenLarge} />} />
              <Route path="/artops" element={<Artops topbar={!screenLarge} />} />
              <Route path="/foto" element={<Foto topbar={!screenLarge} />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
