import React from 'react'
import './About.scss'
import Link from 'next/link';

const About = () => {
  return (
    <div className='content'>
      <section className='about'>
        <div className='about__content'>

          <div className='about__text'>
            <h2 className='about__text-header'>О канале</h2>
            <p className='about__text-content'>ФГБУ «Канал имени Москвы» – крупнейший воднотранспортный и водохозяйственный
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

          <div className='about__info about__info-1'>
            <span className='about__info-title'>235</span>
            <span className='about__info-text'>
              Гидротехнических<br/>сооружений
            </span>
          </div>
          <div className='about__info about__info-2'>
            <span className='about__info-title'>1.5</span>
            <span className='about__info-text'>
              млрд м куб воды<br/>перекачено за год
            </span>
          </div>
          <div className='about__info about__info-3'>
            <span className='about__info-title'>30</span>
            <span className='about__info-text'>
              млн тонн грузов<br/>перевезено за год
            </span>
          </div>
          <div className='about__info about__info-4'>
            <span className='about__info-title'>1.44</span>
            <span className='about__info-text'>
              млн человек<br/>перевезено за год
            </span>
          </div>

        </div>
      </section>
    </div>
  )
}

export default About