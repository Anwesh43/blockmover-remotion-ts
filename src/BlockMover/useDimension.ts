import {useEffect, useState} from 'react'

const useDimension = () => {
  const [w, setW] = useState(window.innerWidth)
  const [h, setH] = useState(window.innerHeight)
  useEffect(() => {
    window.onresize = () => {
        setW(window.innerWidth)
        setH(window.innerHeight)
    }
    return () => {
      window.onresize = () => {

      }
    }
  })  
  return {
    w, h
  }
}

export default useDimension 