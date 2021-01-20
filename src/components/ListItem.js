import { Col, Row, Form} from "react-bootstrap";
import "./ListItem.css";
import React, { useState } from 'react';

function ListItem(props) {

    const [isComplete, setIsComplete] = useState(false)

    let styles = {}
    if(isComplete) {
        styles = {backgroundColor: "#c90e52"}
    }

    return (
        <div className= "List-item" style={styles}>
            <Row>
                <Col xs={1}><Form.Check type = "checkbox" value={isComplete}
                    onChange={ () => {setIsComplete(!isComplete)} }></Form.Check></Col>
                <Col xs={10}>{props.item}</Col>
            </Row>
        </div>
    );
  }
  
  export default ListItem;
  