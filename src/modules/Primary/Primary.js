import React from 'react'
import './Primary.scss'


const Feature = () => (
  <div className='feature'>
    <img src='/features/dispetcher.png' alt=''/>
    <span>Диспетчерское регулирование</span>
  </div>
)

const Primary = (props) => {
  return (
    <div className='content'>
      <section className='primary'>
        <h2 className='primary__header'>
          Основные виды деятельности
        </h2>
        <div className='primary__container'>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
        </div>
      </section>
    </div>
  )
}

export default Primary