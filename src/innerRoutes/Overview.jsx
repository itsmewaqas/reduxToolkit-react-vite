import { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiBriefcase, BiListUl, BiUser, BiLineChart } from "react-icons/bi";

function Overview() {

  const [datalist, setDatalist] = useState([
    {
      id: 1,
      name: 'waqas',
      email: 'm.waqas@gmail.com',
      cell: '03222946642',
      address: 'west'
    },
    {
      id: 2,
      name: 'ali',
      email: 'ali.akber@gmail.com',
      cell: '03008765432',
      address: 'east'
    },
    {
      id: 3,
      name: 'waseem',
      email: 'waseem.khan@gmail.com',
      cell: '03330987654',
      address: 'south'
    },
    {
      id: 4,
      name: 'junaid',
      email: 'junaid.khan@gmail.com',
      cell: '03218654324',
      address: 'central'
    },
    {
      id: 5,
      name: 'zeeshan',
      email: 'zeeshan.akhter@gmail.com',
      cell: '03105678432',
      address: 'easet'
    }
  ]);

  const [progressList, setprogressList] = useState([
    {
      id: 1,
      title: 'Total Projects',
      count: '29',
      icon: <BiBriefcase />,
    },
    {
      id: 2,
      title: 'Total Tasks',
      count: '715',
      icon: <BiListUl />,
    },
    {
      id: 3,
      title: 'Members',
      count: '30',
      icon: <BiUser />,
    },
    {
      id: 4,
      title: 'Productivity',
      count: '93%',
      icon: <BiLineChart />,
    },
  ]);

  return (
    <div>
      <h1>Overview</h1>
      <Row>
        {progressList.map((item, index) => {
          return (
            <Col md={3} key={toString(index)}>
              <div className='dashboardCards'>
                <h1>{item.title}<span> {item.count}</span></h1>
                <i>{item.icon}</i>
              </div>
            </Col>
          )
        })}
      </Row>
      <Table size="md">
        <thead>
          <tr key={"header"}>
            {Object.keys(datalist[0]).map((key) => {
              // <th>{key}</th>
              if (key !== "id") {
                return (
                  <th className='cFirst'>{key}</th>
                )
              }
            })}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datalist.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => {
                // <td>{val}</td>
                if (val !== item.id) {
                  return (
                    <td>{val}</td>
                  )
                }
              })}
              <td>
                <Button onClick={() => alert(item.id)} variant="outline-dark" size="sm">View</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Overview
