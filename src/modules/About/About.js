import React from 'react'
import './About.scss'
import Link from 'next/link';

const About = (props) => {
  return (
    <div className='content'>
      <section className='about'>
        <div className='about__content'>

          <div className='about__content-left'>
            <h2>О канале</h2>
            <p>ФГБУ «Канал имени Москвы» – крупнейший воднотранспортный и водохозяйственный
              комплекс Российской Федерации, выполняет функции органа государственного
              управления на внутренних водных путях Московского бассейна (3842 км),
              расположенных в 12 субъектах РФ.</p>
            <Link href='/about'>
              <a className='about__btn'>Читать далее</a>
            </Link>
            <Link href='/filials'>
              <a className='about__btn-inline'>Наши филиалы</a>
            </Link>
          </div>

          <div className='about__content-right'>
            <div className='about__content-right-container'>
              <div className='about__info'>
                <span className='about__info-title'>235</span>
                <span className='about__info-text'>
                  Гидротехнических<br/>сооружений
                </span>
              </div>
              <div className='about__info'>
                <span className='about__info-title'>1.5</span>
                <span className='about__info-text'>
                  млрд м куб воды<br/>перекачено за год
                </span>
              </div>
              <div className='about__info'>
                <span className='about__info-title'>30</span>
                <span className='about__info-text'>
                  млн тонн грузов<br/>перевезено за год
                </span>
              </div>
              <div className='about__info'>
                <span className='about__info-title'>1.44</span>
                <span className='about__info-text'>
                  млн человек<br/>перевезено за год
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About