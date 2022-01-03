import { useAuth0, Auth0Provider } from "@auth0/auth0-react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const HeaderDash = () => {
	return (
		<div>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand>Music Streamer</Navbar.Brand>
					<Nav className="list">
						<Nav.Link>Home</Nav.Link>
						<Nav.Link>Stars</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	)
}

export default HeaderDash;