import React from 'react'
import './Header.scss'

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

        </nav>
      </div>
    </header>
  )
}

export default Header