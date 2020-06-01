import React from 'react'
import Link from 'next/link';

const PLink = ({data}) => {
  return (
    <p>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.before}

          {item.link.to.includes('http')
          ? (<a className='link link-text' href={item.link.to} key={index}>{item.link.name}</a>)
          : (
              <Link href={item.link.to} key={index}>
                <a className='link link-text'>{item.link.name}</a>
              </Link>
            )}

          {item.after}
        </React.Fragment>
      ))}

    </p>
  )
}

export default PLink