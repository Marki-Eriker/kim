import React from 'react'
import './Sidebar.scss'
import Link from 'next/link';

const Sidebar = ({title, menu, className}) => {
  return (
    <div className={`sidebar ${className}`}>
      <h2 className='sidebar__title'>{title}</h2>
      <ul className='sidebar__content'>
        {menu.map((item, index) => (
          <li className='sidebar__menu-items menu-item' key={index}>
            <Link prefetch={false} href={item.href} as={item.realHref}>
              <a className='sidebar__nav-link nav__link'>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar