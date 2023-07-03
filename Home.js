import Navbar1 from './navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from './footer'


function Home() {
  return (
    <div className='App'>
        <Navbar1></Navbar1>
        <Container className="container px-4 my-5">
        <Row className='my-4'>
          <Col sm='7'> <h1 className='display-4'>Education Platform</h1>
            <p className='pt-2'><strong>Education</strong> is a purposeful activity directed at achieving certain aims, such as transmitting knowledge or fostering skills and character traits. These aims may include the development of understanding, rationality, kindness, and honesty. Various researchers emphasize the role of critical thinking in order to distinguish education from indoctrination. Some theorists require that education results in an improvement of the student while others prefer a value-neutral definition of the term.</p>
            <Button className="px-5 py-2" variant="success" href='/login'><strong>Join Today!</strong></Button>
            <Button className="px-5 py-2" variant="success" href='/assignment'><strong>Assignments</strong></Button>

          </Col>
          <Col sm='1'></Col>
          <Col sm='4'> <Image src="/img/class.jpg" fluid roundedCircle></Image>
          </Col>
        </Row>
        <hr></hr>
        <Row className='my-4'>
          <h3 className='text-center pb-3'>Featured Courses</h3>
          <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/img/database.jpg" />
              <Card.Body>
                <Card.Title>Database Systems</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This content is a little bit longer.
                  <br></br> <br></br>
                  <a href="#">Learn more</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="/img/communication.jpg" />
              <Card.Body>
                <Card.Title>Communication Systems</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.{' '}
                  <br></br> <br></br>
                  <a href="">Learn more</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="img/security.jpg" />
              <Card.Body>
                <Card.Title>Network Security</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in
                  to additional content. This card has even longer content than the
                  first to show that equal height action.
                  <br></br> <br></br>
                  <a href="">Learn more</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>

      <Footer></Footer>
    </div>
  )
}

export default Home;