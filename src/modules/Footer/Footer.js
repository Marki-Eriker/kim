import React from 'react'
import './Footer.scss'

const Footer = (props) => {
  return (
    <footer className='footer'>
      <div className='content'>
        <div className='footer__info'>
          <img className='footer__logo' src='/logo-small.png' alt='logo'/>
          <p className='footer__copyright'>
            Copyright © 2014-2019,<br/>
            Канал имени Москвы.Все права защищены.<br/>
            При полном или частичном использовании<br/>
            материалов сайта гиперссылка обязательна.
          </p>
        </div>

        <div className='footer__contacts'>
          <div className='footer__contacts-item'>
            <span className='footer__contacts-item-title'>Адрес:</span>
            <span className='footer__contacts-item-text'>125362, Москва, ул. Водников, д. 1</span>
          </div>
          <div className='footer__contacts-item'>
            <span className='footer__contacts-item-title'>Телефон:</span>
            <span className='footer__contacts-item-text'>+7 (499) 638-42-63; +7 (495) 491-26-57</span>
          </div>
          <div className='footer__contacts-item'>
            <span className='footer__contacts-item-title'>Факс:</span>
            <span className='footer__contacts-item-text'>+7 (495) 491-32-66</span>
          </div>
          <div className='footer__contacts-item'>
            <span className='footer__contacts-item-title'>E-mail:</span>
            <span className='footer__contacts-item-text'>kim@kim-online.ru</span>
          </div>
        </div>

        <div className='footer__feedback'>
          <a href='#'>Обратная связь</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer















