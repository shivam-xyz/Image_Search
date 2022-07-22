import React from 'react'

function Result_Image(props) {
    const url = `https://source.unsplash.com/random/400x400?${props.data}`
    console.log(`https://source.unsplash.com/random/`)
  return (
    <div>
    { (props.data)? <img src={url} height="400vh" width="300vw" alt="Unable to Load"  />: null}
    </div>
  )
}

export default Result_Image