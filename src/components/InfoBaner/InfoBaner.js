import React from 'react'
import './InfoBaner.scss'

const InfoBaner = ({image}) => {
  return (
    <div className='content'>
      <section className='info-baner'>
        <img src={image} alt='image'/>
      </section>
    </div>
  )
}

export default InfoBaner