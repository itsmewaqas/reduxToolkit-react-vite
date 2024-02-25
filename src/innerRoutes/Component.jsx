import { useState } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

function Component() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <Container>
        <Row>
          <h1>Component List</h1>
          <ul className='cList'>
            <li>react-bootstrap design system...
              <a target='_blank' href="https://react-bootstrap.netlify.app/docs/getting-started/introduction">https://react-bootstrap.netlify.app/docs/getting-started/introduction</a>
              <a target='_blank' href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">https://getbootstrap.com/docs/4.0/getting-started/introduction/</a>
            </li>
            <li>react-icons...
              <a target='_blank' href="https://react-icons.github.io/react-icons/icons/bi/">https://react-icons.github.io/react-icons/icons/bi/</a>
            </li>
            <li>sweetalert2...
              <a target='_blank' href="https://sweetalert2.github.io/">https://sweetalert2.github.io/</a>
            </li>
            <li>react-toastify...
              <a target='_blank' href="https://www.npmjs.com/package/react-toastify">https://www.npmjs.com/package/react-toastify</a>
            </li>
            <li>reactdatepicker...
              <a target='_blank' href="https://reactdatepicker.com/">https://reactdatepicker.com/</a>
            </li>
            <li>momentjs...
              <a target='_blank' href="https://momentjs.com/">https://momentjs.com/</a>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  )
}

export default Component
