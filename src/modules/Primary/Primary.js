import React from 'react'
import './Primary.scss'
import Link from 'next/link';


const Feature = ({icon, title}) => (
  <div className='feature'>
    <Link href={'/'}>
      <a>
        <svg className="icon">
          <use xlinkHref={`/svg/sprite.svg#${icon}`}/>
        </svg>
        <span>{title}</span>
      </a>
    </Link>
  </div>
)

const Primary = () => {
  return (
    <div className='content'>
      <section className='primary'>
        <h2 className='primary__header'>
          Основные виды деятельности
        </h2>
        <div className='primary__container' title={''}>
          <Feature icon={'disp'} title={'Диспетчерское регулирование'}/>
          <Feature icon={'compas'} title={'Навигация'}/>
          <Feature icon={'shield'} title={'Государственный портовый контроль'}/>
          <Feature icon={'info'} title={'Ежесуточная путевая информация'}/>
          <Feature icon={'kart'} title={'Картография'}/>
          <Feature icon={'sea-pass'} title={'Оформление удостоверения личности моряка'}/>
          <Feature icon={'construct'} title={'КПМИ'}/>
          <Feature icon={'kabinet'} title={'Личный кабинет контрагента'}/>
        </div>
      </section>
    </div>
  )
}

export default Primary