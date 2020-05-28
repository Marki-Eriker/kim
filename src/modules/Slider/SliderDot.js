import React from 'react'
import cn from 'classnames'

const SliderDot = ({currentIndex, onDot, index}) => {

  const onClick = () => {
    onDot(index)
  }

  return (
    <span
      onClick={onClick}
      className={cn(
        'slider__controls-dot',
        {'slider__controls-dot--active': index === currentIndex})}
    >

    </span>
  )
}

export default SliderDot