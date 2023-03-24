import {useState} from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import '../style/short.css';
import Like from './Like.png';
import Dislike from './Dislike.png';
import Comment from './Comment.png';
import Share from './Share.png';


const videoUrls = [
  'hthttps://www.youtube.com/shorts/RdsyobMf9_wtps://www.youtube.com/watchhttps://www.youtube.com/watch?v=V-_O7nl0Ii0?v=vhttps://www.youtube.com/shorthttps://www.youtube.com/shorthttps://www.youtube.com/shorts/RdsyobMf9_ws/RdsyobMf9_ws/RdsyobMf9_wideo2',
  'https://www.youtube.com/watch?v=vhttps://www.youtube.com/watchttps://www.youtube.com/shorts/DemmGfTtZCAh?v=A_OKVHCPfEIideo1',
  'https://www.youtube.com/watch?v=vihttps://www.youtube.com/shorts/8WO5Ui8OH3kdeo3',
];

function Short() {
  return (
    <div className="player-container">
      <div className="player-small">
        <ReactPlayer
          url={videoUrls[0]}
          controls={true}
          height="400px"
          width="250px"
          className="player"
        />
      </div>
      <div className="player-large">
        <ReactPlayer
          url={videoUrls[1]}
          controls={true}
          height="600px"
          width="380px"
          className="player"
        />
        <div class="buttons">
          <div class="gap">  <p class="liking">J'aime</p>  <img src={Like} class="like"/></div> 
          <div class="gap"><img src={Dislike} class="dislike"/> </div>
          <div class="gap"><img src={Comment} class="comment"/> </div>
          <div class="gap"><img src={Share} class="share"/></div>
        </div>
      </div>
      <div className="player-small">
        <ReactPlayer
          url={videoUrls[2]}
          controls={true}
          height="400px"
          width="250px"
          className="player"
        />
      </div>
    </div>
  );
}

export default Short;