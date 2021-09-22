import React from 'react'
import useDimension from './useDimension'
import {interpolate, useCurrentFrame, spring, useVideoConfig} from 'remotion';
const Ball : React.FC<any> = () => {
  // const {w, h} = useDimension()
  const frame = useCurrentFrame()
  const config = {
    damping: 100,
    mass: 0.5,
  }
  const {fps, width : w, height : h, durationInFrames} = useVideoConfig()
  console.log("Frame", frame)
  const scale = frame > fps ? 1 :  Math.sin(Math.PI * 0.5 * (frame / fps))
  const size = Math.min(w, h) / 10
  return (
    <div style = {{
      position: "absolute",
      left : `${w / 2 - size / 2}px`,
      top: `${(h * 0.5 - size * 1.5) * scale}px`,
      width : `${Math.min(w, h) / 10}px`,
      height : `${Math.min(w, h) / 10}px`,
      background: 'indigo',
      borderRadius: `50%`
    }}>
    </div>
  )
}

export default Ball 