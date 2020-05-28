import React, {useEffect, useRef, useState} from 'react'
import './Slider.scss'
import Image from './Image';
import SliderDot from './SliderDot';

const Slider = ({slides, autoPlay}) => {

  const length = slides.length
  const autoPlayRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(play, autoPlay * 1000)
    return () => clearInterval(interval)
  }, [])

  const toSlide = (idx) => {
    if (idx === currentIndex) return
    const index = ((idx + 1) > (length)) ? 0 : idx
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    const index = (currentIndex + 1) === length ? 0 : currentIndex + 1
    setCurrentIndex(index)
  }

  return (
    <section className='slider'>

      <div className='slider__content'
           style={{transform: `translateX(-${100 * currentIndex}vw)`}}>

        {slides.map((img) => (
          <Image image={img}/>
          ))}

      </div>

      <div className='slider__controls'>

        {slides.map((img, idx) => (
          <SliderDot currentIndex={currentIndex} index={idx} onDot={toSlide}/>
        ))}

      </div>
    </section>
  )
}

export default Slider