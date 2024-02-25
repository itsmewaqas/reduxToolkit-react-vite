import { useState } from 'react';
import { Container, Row, Col, Table, Button, ListGroup, Card } from 'react-bootstrap';
import { FcBusinessman } from "react-icons/fc";

function Profile() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Profile</h1>
        <Row>
          <Col md="4">
            <Card>
            <FcBusinessman size="md" />
              <Card.Body>
                <Card.Title>Muhammad Waqas</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Email: m.waqas@avanzasolutions.com</ListGroup.Item>
                <ListGroup.Item>Cell: +923222946642</ListGroup.Item>
                <ListGroup.Item>Cheange Password</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link target='_blank' href="https://github.com/itsmewaqas">github</Card.Link>
                <Card.Link target='_blank' href="https://pk.linkedin.com/in/muhammad-waqas-43498b47">linkedin</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  )
}

export default Profile
