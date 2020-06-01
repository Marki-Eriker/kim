import React from 'react'
import './feedback.scss'

const Feedback = ({title}) => {
  return (
    <div className='feedback-button'>
      <a className='feedback-button-link' href='#'>{title}</a>
    </div>
  )
}

export default Feedback