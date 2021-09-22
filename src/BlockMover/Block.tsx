import React from 'react'
import {interpolate, useCurrentFrame, useVideoConfig, spring} from 'remotion';
import useDimension from './useDimension'

const Block : React.FC<any> = () => {
  const frame = useCurrentFrame()
  const config = {
    damping: 100,
    mass: 0.5,
  }
  const {fps, width : w, height : h, durationInFrames} = useVideoConfig()
  const scale = frame > fps ? 1 :  Math.sin(Math.PI * 0.5 * (frame / fps))
  //const {w, h} = useDimension()
  
  const size = Math.min(w, h) / 10 
  return (
    <div style = {{
      position: "absolute", 
      width: `${size}px`,
      height: `${size}px`,
      left: `${w / 2 - size / 2}px`,
      top: `${h - size - (h / 2 - size / 2) * scale}px`,
      background: "indigo"
    }}>
    </div>
  )
}

export default Block