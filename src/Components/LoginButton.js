import { useAuth0 } from '@auth0/auth0-react';
import '../styles/loginButton.css';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

		return (
      <div>
        <button className='login-btn' onClick={ () => loginWithRedirect() }> Log In </button>;
        
      </div>
    );
}

export default LoginButton;