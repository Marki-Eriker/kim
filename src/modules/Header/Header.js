import React, {useState} from 'react'
import './Header.scss'
import {MenuItem} from '../../components';


const Header = ({menu}) => {

  const [open, setOpen] = useState(null)

  return (
    <header className='header'>
      <div className='content'>
        <div className='header__top' onMouseEnter={() => setOpen(null)}>

          <div className='header__logo'>
            <img src='logo-win.png' alt='logo'/>
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
            {menu.map((item, index) => (
              <MenuItem item={item} setOpen={setOpen} index={index} isOpen={index === open}/>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header