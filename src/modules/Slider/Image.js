import React from 'react'


const Image = ({image}) => {
  return (
    <img
      className='slider__image'
      loading='lazy'
      src={image}
      alt='slider-image'
    />
  )
}

export default Image