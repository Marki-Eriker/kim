import React from 'react'


const Image = ({image, idx}) => {
  return (
    <img
      className='slider__image'
      src={image}
    />
  )
}

export default Image