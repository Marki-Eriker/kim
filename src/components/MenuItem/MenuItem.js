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
      <Link href={item.href} >
        <a className='nav__link' onMouseEnter={openMenu}>{item.title}</a>
      </Link>

      {item.subItems &&
        <ul className={cn('menu-item__sub', {'menu-item__sub--hide': !isOpen})} onMouseLeave={closeMenu}>
          <div className='content'>
            {item.subItems.map(item => (
              <li>
                <Link href={item.href}>
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