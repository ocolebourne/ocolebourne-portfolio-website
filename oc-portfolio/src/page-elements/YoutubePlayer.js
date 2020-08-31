import React from 'react';

export default function YoutubePlayer(props){
    return (
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
          paddingTop: 25,
          height: 0,
          marginBottom: "30px"
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
          src={`https://www.youtube.com/embed/${props.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
          allowFullscreen="1"
        />
      </div>
    );
  };