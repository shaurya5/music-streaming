import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import '../styles/musicCard.css';
import { supabase } from './supabase';

function MusicCard({ musicList, index }) {
  return (
    <div className='music-card'>
      <Card key={index} border="dark" style={{ width: 'fit-content' }}>
        <Card.Header>
          <Card.Title>{musicList.title}</Card.Title>
          {/* <Card.Text>Added on {props.dateAdded}</Card.Text> */}
        </Card.Header>
        <Card.Body>
          <ReactAudioPlayer
            style={{marginTop: '0.5em'}}
            src={`${musicList.url}`}
            controls
            onPlay={() => {

            }} 
          />
          <Card.Text style={{marginTop: '1em'}}>Uploaded by - {musicList.author}</Card.Text>
          <Card.Text>Uploaded at - {musicList.time}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MusicCard;