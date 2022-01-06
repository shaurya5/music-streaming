import { useAuth0 } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router";
import '../styles/logoutButton.css';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
	const navigate = useNavigate();

	// if(!isAuthenticated){
	// 	navigate('/');
	// }
	return (
		<button className="logout-btn" onClick={ () => logout({ returnTo: window.location.origin })}>
			Log Out
		</button>
	)
}

export default LogoutButton;