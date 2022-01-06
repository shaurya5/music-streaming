import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Card } from 'react-bootstrap';
import HeaderDash from './HeaderDash';

function MyProfile(props) {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated &&
    <div>
      <HeaderDash />
      <div>
        <Card style={{ width: 'fit-content', margin:'auto' }}>
          <Card.Img variant="top" src={user.picture} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <Card.Text>{user.profile}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MyProfile;