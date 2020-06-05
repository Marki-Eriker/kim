import React from 'react'
import './PImg.scss'

const PImg = ({img, data}) => {
  return (
    <div className='p-image'>
      <img className='p-image__img' src={img} alt='product image'/>
      <div className='p-image__content'>
        {data.map((p, index) => (<p key={`content-${index}`}>{p}</p>))}
      </div>
    </div>
  )
}

export default PImg