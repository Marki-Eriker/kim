import React, {useState} from 'react'
import './Header.scss'
import {MenuItem} from '../../components';
import Link from 'next/link';


const Header = ({menu}) => {

  const [open, setOpen] = useState(null)

  return (
    <header className='header'>
      <div className='content'>
        <div className='header__top' onMouseEnter={() => setOpen(null)}>

          <div className='header__logo'>
            <Link href='/'>
            <img src='/logo-win.png' alt='logo' className='header__logo-img'/>
            </Link>
          </div>

          <div className='header__info'>
            <div className='header__info-search'>
              <input type='text' className='header__info-search-input' placeholder='Поиск по сайту'/>
              <img src='/search.svg' alt='search' className='header__info-search-img'/>
            </div>
            <a href='https://lk.kim-online.ru/' target='_blank' className='header__info-a'>Личный кабинет</a>
          </div>

        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            {menu.map((item, index) => (
              <MenuItem key={index} item={item} setOpen={setOpen} index={index} isOpen={index === open}/>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header