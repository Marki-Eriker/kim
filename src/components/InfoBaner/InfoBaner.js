import React from 'react'
import './InfoBaner.scss'

const InfoBaner = ({image}) => {
  return (
    <div className='content'>
      <section className='info-baner'>
        <picture>
          <source type='image/webp' srcSet={image.replace('.jpg', '.webp')}/>
          <img src={image} alt='image' loading='lazy' width={980}/>
        </picture>
      </section>
    </div>
  )
}

export default InfoBaner