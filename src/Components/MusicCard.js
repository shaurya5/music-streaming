import ReactAudioPlayer from 'react-audio-player';
import { Card } from 'react-bootstrap';
import '../styles/musicCard.css';

function MusicCard({ musicList, index }) {
  return (
    <div className='music-card'>
      <Card key={index} border="dark" style={{ width: 'fit-content' }}>
        <Card.Header>
          <Card.Text>{musicList.author}</Card.Text>
          {/* <Card.Text>Added on {props.dateAdded}</Card.Text> */}
        </Card.Header>
        <Card.Body>
          <Card.Title>{musicList.title}</Card.Title>
          <ReactAudioPlayer src={`${musicList.url}`} controls />
        </Card.Body>
      </Card>
    </div>
  );
}

export default MusicCard;