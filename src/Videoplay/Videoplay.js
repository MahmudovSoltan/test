import React, { useRef } from 'react';
import '../Css/videoplay.css'
function Videoplay({playState,setPlayState}) {
    const player=useRef(null)
    const closePlayer=(e)=>{
        if (e.target===player.current) {
            setPlayState(false)
        }
    }
  return (
    <div className={`video-player ${playState?"":"hide"}`} ref={player} onClick={closePlayer}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QdjqETsCVI8?autoplay=1&mute=1"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
      ></iframe>
    </div>
  );
}

export default Videoplay;
