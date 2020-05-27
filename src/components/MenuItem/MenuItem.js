import React, {useState} from 'react'
import './MenuItem.scss'
import cn from 'classnames'
import Link from 'next/link';

const MenuItem = (props) => {

  const [isHide, setHide] = useState(true)

  const openMenu = () => {
    setHide(false)
  }

  const closeMenu = () => {
    setHide(true)
  }

  return (
    <li className='menu-item'>
      <Link href='/about' >
        <a className='nav__link' onMouseEnter={openMenu}>Об учреждении</a>
      </Link>
      <ul className={cn('menu-item__sub', {'menu-item__sub--hide': isHide})} onMouseLeave={closeMenu}>
        <li>
          <Link href='/about'>
            <a>Общая информация</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Структура и руководство</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>Филиалы</a>
          </Link>
        </li>
      </ul>
    </li>
  )
}

export default MenuItem