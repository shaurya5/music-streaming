import { useState, useEffect } from 'react';
import 'cloudinary-react';
import { supabase } from './supabase';
import { useAuth0 } from '@auth0/auth0-react';

function Upload(props) {
  const { user } = useAuth0();
  const [ songInfo, setSongInfo ] = useState({author: null,title: null,url: null});

  const createSong = async () => {
    await supabase
      .from("songs")
      .insert([
         {url: songInfo.url, title: songInfo.title, author: songInfo.author} 
      ])
      .single();
  }

  useEffect(() => {
    if(songInfo.url && songInfo.author && songInfo.title){
      createSong();
      // window.location.reload(false);
    }
  });

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dogqthbp1",
        uploadPreset: "wlj0ysle"
      },
      (error, result) => {
        if(result.event === "success" && result.info.is_audio) {
          setSongInfo({author: user.name, title: result.info.original_filename, url: result.info.secure_url})
        }
        else {
          // TODO: Add error handling
        }
      }
    );
    widget.open();
  }

  return (
    <div>
      <div className="upload-song">
        <button onClick={() => openWidget()} className="upload-btn">Upload Song</button>
      </div>
    </div>
  );
}

export default Upload;