import React from 'react'
import {useCurrentFrame, useVideoConfig} from 'remotion'

const BlockText : React.FC<any> = () => {
    const {width : w, height: h, fps, durationInFrames} = useVideoConfig()
    const frame = useCurrentFrame()
    const scale = frame > fps ? 1 :  Math.sin(Math.PI * 0.5 * (frame / fps))
    const size = Math.min(w, h) / 10
    return (
    <div style ={{
      position: "absolute",
      top: `${h / 2 + Math.min(w, h) / 9}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${w}px`,
      height: `${h / 2 - size}px`,
      opacity: scale,
      color: '#212121', 
      fontSize: `${Math.min(w, h) / 10}px`
    }}>
       We are gonna head.
    </div>
    )
}
export default BlockText