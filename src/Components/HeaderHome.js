import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/headerHome.css';

const HeaderHome = () => {
  return (
    <div>
      <Navbar className="navbar" bg="dark" variant="dark">
        <Container className="header-elements">
          <Navbar.Brand>
            <img 
              alt=""
              src={require('../Images/logo.png')}
              width="45"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Play Me
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default HeaderHome;