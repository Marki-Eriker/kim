import React from 'react'
import './GovernmentLink.scss'

const GovernmentLink = (props) => {
  return (
    <div className='content'>
      <div className='government-link'>
        <div className='government-link__part'>
          <img src='/government/government.png' alt='Правительство РФ' width={100}/>
          <a href='http://government.ru' target='_blank'>
            Правительство<br/>Российской Федерации
          </a>
        </div>

        <div className='government-link__part'>
          <img src='/government/mintrans.png' alt='Правительство РФ' width={50}/>
          <a href='http://mintrans.ru' target='_blank'>
            Министерство транспорта<br/>Российской Федерации
          </a>
        </div>

        <div className='government-link__part'>
          <img src='/government/famrt.png' alt='Правительство РФ' width={50}/>
          <a href='http://morflot.ru' target='_blank'>
            Федеральное агентство<br/>морского и речного транспорта
          </a>
        </div>

        <div className='government-link__part'>
          <img src='/government/pravo.png' alt='Правительство РФ' width={50}/>
          <a href='http://pravo.gov.ru' target='_blank'>
            Государственная система<br/>правовой информации
          </a>
        </div>

        <div className='government-link__part'>
          <img src='/government/guslugi.png' alt='Правительство РФ' width={50}/>
          <a href='http://gosuslugi.ru/' target='_blank'>
            Государственные<br/>услуги
          </a>
        </div>
      </div>
    </div>
  )
}

export default GovernmentLink