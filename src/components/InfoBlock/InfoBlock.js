import React from 'react'
import './InfoBlock.scss'
import Link from 'next/link';

const InfoBlock = ({data, children}) => {
  return (
    <div className='info-block'>
      <div className='info-block__link'>
        {data && (
          <Link href={data.link.to}>
            <a>{data.link.name}</a>
          </Link>
        )}
        {children}
      </div>
    </div>
  )
}

export default InfoBlock