import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && ( 
      <div className="profile">
        
      </div>
    )
  );
}

export default Profile;