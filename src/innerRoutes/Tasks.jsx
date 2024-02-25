import { useState, useEffect } from 'react'
import { BiStar, BiSolidStar } from "react-icons/bi";
import { Container, Row, Col, Table, Button, ListGroup } from 'react-bootstrap';

function Tasks() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      title: "flutter",
      taskFavourite: 1,
    },
    {
      id: 2,
      title: "web",
      taskFavourite: 0,
    },
    {
      id: 3,
      title: "mobile",
      taskFavourite: 1,
    },
    {
      id: 4,
      title: "react native",
      taskFavourite: 0,
    },
    {
      id: 5,
      title: "next js",
      taskFavourite: 1,
    },
    {
      id: 6,
      title: "iOS",
      taskFavourite: 0,
    },
    {
      id: 7,
      title: "desktop app",
      taskFavourite: 1,
    },
    {
      id: 8,
      title: "android",
      taskFavourite: 0,
    },
    {
      id: 8,
      title: "Fahad Ahmed",
      taskFavourite: 1,
    },
    {
      id: 10,
      title: "Azeem Ahmed",
      taskFavourite: 0,
    },
    {
      id: 11,
      title: "Umair Khan",
      taskFavourite: 1,
    },
    {
      id: 12,
      title: "python",
      taskFavourite: 0,
    }
  ])

  const favouriteTask = (item, index) => {
    console.log('Item is = >', item);
    var items = taskList;
    if (item.taskFavourite == 0) {
      item.taskFavourite = 1;
    }
    else {
      item.taskFavourite = 0;
    }
    items[index] = item;
    setTaskList([...taskList]);
  }


  useEffect(() => {
  }, [])

  return (
    <div>
      <h1>Tasks</h1>
      <Container>
        <Row>
          <ListGroup>
            {taskList?.map((item, index) => (
              <ListGroup.Item key={index.toString()}>
                {item.title}
                <a className='taskStar'
                  onClick={() => favouriteTask(item, index)}>
                  {item.taskFavourite == 0 ? <BiSolidStar color='#f6e763' /> : <BiStar color='#999'/>}
                </a>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Row>
      </Container>
    </div>
  )
}

export default Tasks
