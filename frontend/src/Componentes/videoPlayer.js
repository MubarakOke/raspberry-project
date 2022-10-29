import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlayer({videoURL, width, height}) {
  return (
    <div>
         <ReactPlayer url={videoURL} width={width} height={height} />
    </div>
  )
}

export default VideoPlayer