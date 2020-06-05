import React, {useState} from 'react'
import './InfoBlockDisclose.scss'
import cn from 'classnames'
import {makeContent} from '../../utils/makeContent';

const InfoBlockDisclose = ({data, title}) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='info-block-disclose'>
      <h5 className='info-block-disclose__title' onClick={() => setIsOpen(!isOpen)}>{title}</h5>
      <div className={cn('info-block-disclose__content', {'info-block-disclose__content--open': isOpen})}>
        {makeContent(data)}
      </div>
    </div>
  )
}

export default InfoBlockDisclose