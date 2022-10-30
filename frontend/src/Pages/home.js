import React from 'react'
import VideoPlayer from '../Componentes/videoPlayer'
import SensorData from '../Componentes/sensorData'

function Home() {
  return (
    <div>
        <div><VideoPlayer video_url="" format=""/></div>
        <div>
            <SensorData interval="5" />
        </div>
    </div>
  )
}

export default Home