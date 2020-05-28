import React, {useState} from 'react'
import './Slider.scss'
import cn from 'classnames'
import Image from './Image';

const Slider = ({slides}) => {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [translate, setTranslate] = useState({
    transform: 'translateX(0)'
  })

  const nextSlide = (idx) => {
    setTranslate({transform: `translateX(-${100 * idx}%)`})
    setCurrentIndex(idx)
  }

  const autoPlay = () => {
    setTimeout(() => {
      currentIndex === (slides.length - 1)
      ? nextSlide(0)
      : nextSlide(currentIndex + 1)
    }, 5000)
  }

  autoPlay()

  return (
    <section className='slider'>

      <div className='slider__content' style={translate}>

        {slides.map((img) => (
          <Image image={img}/>
          ))}

      </div>

      <div className='slider__controls'>

        {slides.map((img, idx) => (
          <span onClick={() => nextSlide(idx)}
          className={cn('slider__controls-dot', {'slider__controls-dot--active': idx === currentIndex})}
          > </span>
        ))}

      </div>
    </section>
  )
}

export default Slider