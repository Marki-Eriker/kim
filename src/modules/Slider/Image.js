import React from 'react'


const Image = ({image}) => {
  return (
    <picture>
      <source type='image/webp' srcSet={image.replace('.jpg', '.webp')}/>
      <img className='slider__image' src={image} alt='slider-image' width={1920}/>
    </picture>
  )
}

export default Image