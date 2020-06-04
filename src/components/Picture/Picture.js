import React from 'react'

const Picture = ({image}) => {
  return (
    <picture>
      <source type='image/webp' srcSet={image.replace('.jpg', '.webp')}/>
      <img src={image} alt='image' loading='lazy' width={750}/>
    </picture>
  )
}

export default Picture