import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Signup() {

  const initalState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confiromPassword: '',
    gender: '',
    cell: '',
    qualification: '',
    city: '',
    state: '',
    country: '',
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
          <h1>Signup</h1>
          <Col md={8} className='mt-5 my-5 px-5'>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lastName" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Confirom Password</Form.Label>
                  <Form.Control type="password" name="confiromPassword" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Cell</Form.Label>
                  <Form.Control type="text" name="cell" onChange={handleChnage} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Label>City</Form.Label>
                <Form.Select name='city' onChange={handleChnage}>
                  <option selected hidden disabled>City</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>
                  <option value="Quetta">quetta</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label>State</Form.Label>
                <Form.Select name='state' onChange={handleChnage}>
                  <option selected hidden disabled>State</option>
                  <option value="Sindh">Sindh</option>
                  <option value="Panjab">Panjab</option>
                  <option value="KPK">KPK</option>
                  <option value="Balochistan">Balochistan</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Form.Label>Country</Form.Label>
                <Form.Select name='country' onChange={handleChnage}>
                  <option selected hidden disabled>Country</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="India">India</option>
                  <option value="Srilanka">Srilanka</option>
                  <option value="Bangladesh">Bangladesh</option>
                </Form.Select>
              </Col>
              <Col md={6} className='mt-3'>
                <Form.Group className="mb-3">
                  <Form.Label>Gender</Form.Label>
                  <br />
                  <Form.Check
                    inline
                    type='radio'
                    label='Male'
                    name='gender'
                    onChange={(target) => handleChnage}
                  />
                  <Form.Check
                    inline
                    type='radio'
                    label='Female'
                    name='gender'
                    onChange={(target) => handleChnage}
                  />
                </Form.Group>
              </Col>
              <Col md={6} className='mt-3'>
                <Form.Label>Qualification</Form.Label>
                <br />
                <Form.Check
                  inline
                  type='checkbox'
                  label='Matric'
                  name='Matric'
                  onChange={(target) => handleChnage}
                />
                <Form.Check
                  inline
                  type='checkbox'
                  label='intermediate'
                  name='intermediate'
                  onChange={(target) => handleChnage}
                />
                <Form.Check
                  inline
                  type='checkbox'
                  label='Graduation'
                  name='Graduation'
                  onChange={(target) => handleChnage}
                />
                <Form.Check
                  inline
                  type='checkbox'
                  label='Masters'
                  name='Masters'
                  onChange={(target) => handleChnage}
                />
              </Col>
            </Row>
            <Button variant="success" className='mt-1'>Signup</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Signup
