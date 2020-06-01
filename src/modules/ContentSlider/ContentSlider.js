import React, {useState} from 'react'
import './ContentSlider.scss'
import cn from 'classnames'

const ContentSlider = ({images}) => {

  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState(null)

  const onDotClick = (index) => {
    setPrevious(active)
    setActive(index)
  }

  const nextImage = () => {
    setPrevious(active)
    setActive(active === images.length - 1 ? 0 : active + 1)
  }

  const prevImage = () => {
    setPrevious(active)
    setActive(active === 0 ? images.length - 1 : active - 1)
  }

  return (
    <div className='content-slider'>
      <div className='content-slider__body'>
        {images && images.map((image, index) => (
          <React.Fragment key={index}>
          <img src={image.link} alt='image'
               key={index}
               className={cn(
                 'content-slider__image',
                 {'content-slider__image--previous': previous === index},
                 {'content-slider__image--active' : active === index})}/>

          {image.title && (<div
            key={index + 100}
            className={cn(
              'content-slider__image-title',
              {'content-slider__image-title--previous': previous === index},
              {'content-slider__image-title--active' : active === index}
              )}><span>{image.title}</span></div>)}
          </React.Fragment>
        ))}
        <div className='content-slider__arrow'>
          <span className='arrow arrow-left' onClick={prevImage}/>
          <span className='arrow arrow-right' onClick={nextImage}/>
        </div>
      </div>
      <div className='content-slider__dots'>
        {images && images.map((image, index) => (
          <span className={cn('content-slider__dots-item', {'content-slider__dots-item--active': active === index})}
                onClick={() => onDotClick(index)} key={index}> </span>
        ))}
      </div>
    </div>
  )
}

export default ContentSlider