import "./List.css";
import ListItem from "./ListItem";
import React, { useState } from 'react';
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

function List() {
  const [Resolutions, AddResolution] = useState([
    "Learn to drive",
    "Get fit",
    "Code daily",
    "Read more books"
  ]);

  const [newReso, setNewReso] = useState("")

  const listitems = Resolutions.map((Resolution) =>
  <ListItem keys={Resolution} item = {Resolution}/>);

  function addToResolution(Resolution){
    const currentReso = [...Resolutions]
    currentReso.push(Resolution)
    AddResolution(currentReso)
  }

    return (
      <div className= "List-container">
      <h2 className= "List-header">🍾 Tasks for 2021 </h2>
      <Row>
      <Col xs={12} md={9}>
        <input
          placeholder="Type a new task here..."
          className="List-input"
          value={newReso}
          onChange={e => setNewReso(e.target.value)}
        />
        </Col>
        <Col xs={12} md={3}>
          <Button size="lg" block className="submit-button" onClick={() => {addToResolution(newReso); setNewReso("")}}>Add Task</Button>
        </Col>
      </Row>
      
      
      {listitems}

      

      </div>
    );
  }
  
  export default List;
  