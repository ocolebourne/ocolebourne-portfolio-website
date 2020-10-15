import React from 'react';

export default function YoutubePlayer(props){
    return (
      <div
        className="youtube-video-container"
      >
        <iframe
          className="youtube-video"
          src={`https://www.youtube.com/embed/${props.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen="1"
        />
      </div>
    );
  };