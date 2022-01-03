import { useAuth0 } from '@auth0/auth0-react';
import '../styles/loginButton.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

		return (
      <div className='mb-2'>
        <Button className="btn-home" variant="secondary" size="lg" onClick={ () => loginWithRedirect() }> Log In </Button>
        
      </div>
    );
}

export default LoginButton;