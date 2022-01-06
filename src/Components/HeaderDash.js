import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import LogoutButton from "./LogoutButton";
import '../styles/headerDash.css';

const HeaderDash = () => {
	const { user, isAuthenticated, logout } = useAuth0();

	return (
		isAuthenticated &&
		<div>
			<Navbar bg="dark" variant="dark">
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
					<Nav className="list">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>Stars</Nav.Link>
						<Nav.Link>Trending</Nav.Link>
						<Nav.Link className="greeting-dash">Hi, {user.name}</Nav.Link>
						<NavDropdown className="profile-dropdown">
							<NavDropdown.Item onClick={() => LogoutButton()}>My Profile</NavDropdown.Item>
							<NavDropdown.Item onClick={() => logout({ returnTo: window.location.origin })} href="">Logout</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Container>
			</Navbar>
		</div>
	)
}

export default HeaderDash;