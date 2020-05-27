import React, {useState} from 'react'
import './Header.scss'
import {MenuItem} from '../../components';

const Header = (props) => {

  return (
    <header className='header'>
      <div className='content'>
        <div className='header__top'>

          <div className='header__logo'>
            <img src='logo.png' alt='logo'/>
          </div>

          <div className='header__info'>
            <div className='header__info-search'>
              <input type='text' className='header__info-box_search' placeholder='Поиск по сайту'/>
              <img src='search.svg' alt='search'/>
            </div>
            <a href='#'>Личный кабинет</a>
          </div>

        </div>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <MenuItem/>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

// <Link href='/about'>
//   <a>Об учреждении</a>
// </Link>
// <Link href='/about'>
// <a>Документы</a>
// </Link>
// <Link href='/about'>
// <a>Навигация</a>
// </Link>
// <Link href='/about'>
// <a>Служба капитана Московского бассейна ВВП</a>
// </Link>
// <Link href='/about'>
// <a>Услуги</a>
// </Link>
// <Link href='/about'>
// <a>Медиацентр</a>
// </Link>
// <Link href='/about'>
// <a>Контакты</a>
// </Link>