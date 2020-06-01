import React from 'react'
import './StructureBlock.scss'

const StructureBlock = (props) => {

  return (
    <div className='structure-block'>
      <div className='structure-block__title'>
        {props.data.title}
      </div>
      <span className='structure-block__phone'>
        {props.data.phone}
      </span>
      {props.data.content.map((item, index) => (
        <div className='structure-block__content' key={index}>
          <div className='structure-block__content-name'>{item.name}</div>
          <div className='structure-block__content-position'>{item.position}</div>
          <span className='structure-block__content-phone'>{item.phone}</span>
        </div>
      ))}

    </div>
  )
}

export default StructureBlock