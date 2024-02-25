import { useState, useEffect } from 'react'
import { Container, Row, Col, Button, Form,Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/reducer/userDetail';

function Login() {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userDetail);
  console.log(userData);

  const initalState = {
    email: '',
    password: '',
  };

  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState([])

  const handleChnage = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(values))
  }

  useEffect(() => {
  }, [])

  if (userData.loading) {
    return (<Spinner animation="border" role="status" variant="primary" size="md">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
  }

  return (
    <div>
      <Container fluid>
        <Row>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <Col md={4} className='mt-5 my-5 px-5'>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" name="email" value={values.email} placeholder="name@example.com" onChange={handleChnage} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" value={values.password} placeholder="***********" onChange={handleChnage} />
              </Form.Group>
              <Button type='submit' variant="success" className='mt-1'>Login</Button>
            </Col>
          </form>
        </Row>
      </Container>
    </div>
  )
}

export default Login
