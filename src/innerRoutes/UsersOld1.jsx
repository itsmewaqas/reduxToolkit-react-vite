import { useState, useEffect } from 'react'
import { Container, Row, Col, Table, Button, Form, Spinner } from 'react-bootstrap';

import { fakeUserData } from '../redux/API/index';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/reducer/slices';
import { createUser, fetchUsers } from '../redux/reducer/userDetail';
import validateInfo from '../components/validation';

function Users() {

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.userDetail);
  console.log("getUsers", userData);

  const data = useSelector((state) => state.users);

  console.log('data', data);

  const [count, setCount] = useState(0);

  const addNewUser = (payload) => {
    console.log(payload)
    dispatch(addUser(payload))
  }

  const deleteUser = (index) => {
    dispatch(removeUser(index))
  }






  const initalState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    cell: '',
    usertype: '',
    address: '',
    gender: '',
    education: []
  };

  const [values, setValues] = useState(initalState);
  const [errors, setErrors] = useState({});
  const [formState, setFormState] = useState([]);

  const [edu, setEdu] = useState([]);

  // checkbox ctrl start
  const list = ["matric", "intermediate", "graduation", "masters"];

  const checkHandle = e => {
    const { name, type, checked, value } = e.currentTarget;
    setEdu(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  };
  // checkbox ctrl end


  // const getQF = loginDetails.qualification.toString().split(',');
  // Setqualification(getQF);

  const handleChnage = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  let getedu = edu;
  values.education = getedu;


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInfo({ values }));
    if (values.name != '' &&
      values.email != '' &&
      values.password != '' &&
      values.confirmPassword != '' &&
      values.cell != '' &&
      values.usertype != '' &&
      values.address != '' &&
      values.gender != '' &&
      values.education != '') {
      dispatch(createUser(values));
      if (values) {
        setValues({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          cell: '',
          usertype: '',
          address: '',
          gender: '',
          education: [],
          edu:[]
        })
      }
    }
  }


  console.log("formState", values);







  useEffect(() => {
    dispatch(fetchUsers());
  }, [])

  if (userData.loading) {
    return (<Spinner animation="border" role="status" variant="primary" size="md">
      <span className="visually-hidden">Loading...</span>
    </Spinner>)
  }

  return (
    <div>
      <Container>
        <h1>Users</h1>
        {/* {userData.loading && <div>Loading....</div>} */}
        <form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control name='name' type="text" onChange={handleChnage} />
                {errors.name && <p className='error'>{errors.name}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name='email' type="email" onChange={handleChnage} />
                {errors.email && <p className='error'>{errors.email}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" onChange={handleChnage} />
                {errors.password && <p className='error'>{errors.password}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control name='confirmPassword' type="password" onChange={handleChnage} />
                {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Cell</Form.Label>
                <Form.Control name='cell' type="text" onChange={handleChnage} />
                {errors.cell && <p className='error'>{errors.cell}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>User Type</Form.Label>
                <Form.Select name="usertype" onChange={handleChnage}>
                  <option hidden selected>Select</option>
                  <option value="Admin">Admin</option>
                  <option value="Employee">Employee</option>
                </Form.Select>
                {errors.usertype && <p className='error'>{errors.usertype}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control name='address' type="text" onChange={handleChnage} />
                {errors.address && <p className='error'>{errors.address}</p>}
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <br />
                <Form.Check
                  inline
                  type='radio'
                  label='Male'
                  checked={values.gender === 'Male'}
                  name='gender'
                  value="Male"
                  onChange={handleChnage}
                />
                <Form.Check
                  inline
                  type='radio'
                  label='Female'
                  checked={values.gender === 'Female'}
                  name='gender'
                  value="Female"
                  onChange={handleChnage}
                />
                {errors.gender && <p className='error'>{errors.gender}</p>}
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                {list.map(item => (
                  <Form.Check
                    inline
                    key={item.toString()}
                    label={item}
                    value={item}
                    type="checkbox"
                    checked={edu.some(val => val === item)}
                    onChange={checkHandle}
                  />
                ))}
                {errors.education && <p className='error'>{errors.education}</p>}
              </Form.Group>
            </Col>
            <div class="d-flex justify-content-start">
              <Button type='submit' variant="success" className='mt-1 my-3'>Add</Button>
            </div>
          </Row>
        </form>
        <Table size="md">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Cell</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.userDetail?.map((item, index) => {
              return (
                <tr key={index.toString()}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.cell}</td>
                  <td>{item.address}</td>
                  <td>{item.gender}</td>
                  <td>
                    <Button onClick={() => alert(item.id)} variant="outline-dark" size="sm">View</Button>
                    <Button onClick={() => alert(item.id)} variant="outline-dark" size="sm">Edit</Button>
                    <Button onClick={() => alert(item.id)} variant="outline-dark" size="sm">Delete</Button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>






        {/* <button onClick={() => addNewUser(fakeUserData())}>Add New User</button>
      <ul>
        {data == null ? <div>data not dound</div>
          :
          <div>
            {data.map((item, index) => {
              return <li key={index.toString()}>
                <p>{item}</p>
                <button onClick={() => deleteUser(index)}>X</button>
              </li>
            })
            }</div>}

      </ul> */}

      </Container>
    </div>
  )
}

export default Users
