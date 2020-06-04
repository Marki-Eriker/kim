import React from 'react'
import './LimitTable.scss'

const LimitTable = ({data}) => {
  return (
    <div className='limit-table'>
      <div className='limit-table__header'>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Участок</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Ограничение/запрещение</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Дата начала</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Распоряжение<br/>ФГБУ «Канал<br/>имени Москвы»<br/>о введении</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Дата окончания</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Распоряжение<br/>Росморречфлота<br/>о сроках</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Дата снятия</span>
        </div>
        <div className='limit-table__header-item limit-table__flex-item'>
          <span>Распоряжение<br/>ФГБУ «Канал<br/>имени Москвы»<br/>о снятии</span>
        </div>
      </div>

      {data.map((limit, index) => (
        <div className='limit-table__body'>
          <div className='limit-table__body-item limit-table__flex-item'>
            <span>{limit.zone}</span>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <span>{limit.limit}</span>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <span>{limit.dateStart}</span>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <a href={limit.docKimStart.to} target='_blank' className='limit-table__body-item-link'>
              {limit.docKimStart.name}
            </a>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <span>{limit.dateEnd}</span>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <a href={limit.docFAMRT.to} target='_blank' className='limit-table__body-item-link'>
              {limit.docFAMRT.name}
            </a>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <span>{limit.dateEndFact}</span>
          </div>
          <div className='limit-table__body-item limit-table__flex-item'>
            <a href={limit.docKimEnd.to} target='_blank' className='limit-table__body-item-link'>
              {limit.docKimEnd.name}
            </a>
          </div>
        </div>
      ))}

    </div>
  )
}

export default LimitTable