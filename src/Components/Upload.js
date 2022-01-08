import { useState, useEffect } from 'react';
import 'cloudinary-react';
import { supabase } from './supabase';
import { useAuth0 } from '@auth0/auth0-react';

function Upload(props) {

  const { user, isAuthenticated } = useAuth0();
  const [ author, setAuthor ] = useState("");
  const [ title, setTitle ] = useState("");
  const [ url, setUrl ] = useState("");

  const createSong = async () => {
    await supabase
      .from("songs")
      .insert([
        { url, title, author }
      ])
      .single();
  }

  useEffect(() => {
    if(url && author && title){
      createSong();
      window.location.reload(false);
    }
  });

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dogqthbp1",
        uploadPreset: "wlj0ysle"
      },
      (error, result) => {
        if(result.event === "success") {
          if(result.info.is_audio === true){
            setUrl(result.info.secure_url);
            setAuthor(user.name);
            setTitle(result.info.original_filename);
          }
        }
      }
    );
    widget.open();
  }
  console.log(url);

  // if(url && title && author){
  //   createSong();
  //   window.location.reload(false);
  // }

  return (
    <div>
      <div className="upload-song">
        <button onClick={() => openWidget()} className="upload-btn">Upload Song</button>
      </div>
    </div>
  );
}

export default Upload;