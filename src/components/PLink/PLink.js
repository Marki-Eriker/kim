import React from 'react'
import Link from 'next/link';

const PLink = ({data}) => {
  return (
    <p>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          {item.before}
          <Link href={item.link.to} key={index}>
          <a>{item.link.name}</a>
          </Link>
          {item.after}
        </React.Fragment>
      ))}

    </p>
  )
}

export default PLink