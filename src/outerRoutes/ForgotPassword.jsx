import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function ForgotPassword() {

  const initalState = {
    newPassword: '',
    newConfirmPassword: '',
    oldPassword: '',
  };

  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState([])

  const handleChnage = e => {
    const { name, value } = e.target;
    e.preventDefault();
    setValues({
      ...values,
      [name]: value
    })
  }

  useEffect(() => {
  }, [])

  return (
    <div>
      <Container fluid>
        <Row>
          <h1>Forgot Password</h1>
          <Col md={4} className='mt-5 my-5 px-5'>
            <Form.Group className="mb-3">
              <Form.Label>New Password</Form.Label>
              <Form.Control type="password" name="newPassword" placeholder="*********" onChange={handleChnage} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>New Confirm Password</Form.Label>
              <Form.Control type="password" name="newConfirmPassword" placeholder="*********" onChange={handleChnage} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Old Password</Form.Label>
              <Form.Control type="password" name="oldPassword" placeholder="*********" onChange={handleChnage} />
            </Form.Group>
            <Button variant="success" className='mt-1'>Forgot Password</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ForgotPassword
