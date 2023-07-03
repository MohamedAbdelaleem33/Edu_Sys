import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Navbar1 from './navbar';
import Footer from './footer';
import { Container } from 'react-bootstrap';


function RegisterLec() {
  return (
    <div className='App'>
      <Navbar1></Navbar1>
      <Container>
        <h3 className='px-2 my-3 text-center'>Register a New Lecturer</h3>
        <div class='d-flex align-items-center justify-content-center mt-3'>
          <Form>
            <Card style={{ width: '40rem' }}>
              <Card.Body>
                <input type="hidden" value='lecturer'></input>
                <Row className="justify-content-md-center">
                  <Col>
                    <Form.Group className="mb-3" controlId="fromFirstName">
                      <FloatingLabel label='First Name'>
                        <Form.Control type="text" placeholder="First Name" />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-2" controlId="formLastName">
                      <FloatingLabel label='Last Name'>
                        <Form.Control type="text" placeholder="Last Name" />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <FloatingLabel label='Email Address'>
                      <Form.Control type="email" placeholder="Email" />
                    </FloatingLabel>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <FloatingLabel label='Password'>
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </Form.Group>
                  </Row>
                  <Row>
                  <Form.Group className="mb-2" controlId="formConfirmPassword">
                    <FloatingLabel label='Confirm Password'>
                      <Form.Control type="password" placeholder="Confirm Password" />
                    </FloatingLabel>
                  </Form.Group>
                    
                </Row>
              </Card.Body>
            </Card>
            <div className='text-center pt-2'>
              <Button variant="success" type="submit" className='mt-1 px-4 py-2'>
                Register
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Footer></Footer>
    </div>
  );
}

export default RegisterLec;
