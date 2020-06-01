import React from 'react'
import './MenuItem.scss'
import cn from 'classnames'
import Link from 'next/link';

const MenuItem = ({item, setOpen, index, isOpen}) => {

  const openMenu = () => {
    setOpen(index)
  }

  const closeMenu = () => {
    setOpen(null)
  }

  return (
    <li className='menu-item'>
      <Link prefetch={false} href={item.href} as={item.realHref}>
        <a className='nav__link' onMouseEnter={openMenu}>{item.title}</a>
      </Link>

      {item.subItems &&
        <ul className={cn('menu-item__sub', {'menu-item__sub--hide': !isOpen})} onMouseLeave={closeMenu}>
          <div className='content'>
            {item.subItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href} as={item.realHref}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </div>
        </ul>}

    </li>
  )
}

export default MenuItem