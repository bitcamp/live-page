import React from 'react';
import './App.css';
import Schedule from './Schedule.js'
import Main from './Main.js'
import Announcements from './Announcements.js'
import { Row, Col } from 'antd';

function App() {
  return (
    <div className="App">

      <header className="App-header">

        <Row>
          <Col span={6}>
            <Schedule/>
          </Col>
          <Col span={3}>
          </Col>
          <Col span={6}>
            <Main/>
          </Col>
          <Col span={3}>
          </Col>
          <Col span={6}>
            <Announcements/>
          </Col>
        </Row>
      
      </header>
    </div>
  );
}

export default App;
