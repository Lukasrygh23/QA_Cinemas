import React from 'react';

const VideoDetail = (props) => {
  if (!props.video) {
    return <div style={{height: "556px"}}>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}/?autoplay=1&mute=1`

  return (
    <div>
        <div className="ui embed">
            <iframe title='video player' className="ms-5 me-5" src={videoSrc} width="90%" height="550px"/>
        </div>
    </div>
  );
};

export default VideoDetail;