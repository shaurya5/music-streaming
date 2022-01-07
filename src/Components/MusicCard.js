import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Card, Button } from 'react-bootstrap';

function MusicCard( {musicList}) {
  return (
    <div>
      <Card border="dark" style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Text>{musicList.author}</Card.Text>
          {/* <Card.Text>Added on {props.dateAdded}</Card.Text> */}
        </Card.Header>
        <Card.Body>
          <Card.Title>{musicList.title}</Card.Title>
          <ReactAudioPlayer src={`${musicList.url}`} controls/>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MusicCard;