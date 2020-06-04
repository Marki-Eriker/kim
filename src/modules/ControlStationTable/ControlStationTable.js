import React from 'react'
import './ControlStationTable.scss'

const TableHeader = () => (
  <div className='control-station-table__header'>
    <span className='control-station-table__header-item control-station-table__flex-item'>
      Зона обслуживания
    </span>
    <span className='control-station-table__header-item control-station-table__flex-item'>
      Позывной
    </span>
    <span className='control-station-table__header-item control-station-table__flex-item'>
      Канал УКВ-р/с
    </span>
    <span className='control-station-table__header-item control-station-table__flex-item'>
      Зона действия УКВ-р/ст
    </span>
    <span className='control-station-table__header-item control-station-table__flex-item'>
      Контактные телефоны
    </span>
  </div>
)

const ControlStationTable = ({data}) => {
  return (
    <div className='control-station-table'>

      <div className='control-station-table__title'>
        {data.title}
      </div>

      {data.station.map((station, index) => (
        <React.Fragment>
          <div className='control-station-table__zone'>
            {station.name}
          </div>
          <TableHeader/>

          <div className='control-station-table__content'>
            <div className='control-station-table__content-item control-station-table__flex-item'>
              {station.zone.map((item, index) => (<p key={`zone-${index}`}>{item}</p>))}
            </div>
            <div className='control-station-table__content-item control-station-table__flex-item'>
              <p>{station.call}</p>
            </div>
            <div className='control-station-table__content-item control-station-table__flex-item'>
              <p>{station.ykvChannel}</p>
            </div>
            <div className='control-station-table__content-item control-station-table__flex-item'>
              {station.ykvZone.map((item, index) => (<p key={`ykv-${index}`}>{item}</p>))}
            </div>
            <div className='control-station-table__content-item control-station-table__flex-item'>
              {station.contacts.map((item, index) => (<p key={`contact-${index}`}>{item}</p>))}
            </div>
          </div>
        </React.Fragment>
      ))}

      {/*<div className='control-station-table__zone'>*/}
      {/*  Диспетчер по движению Рыбинского РГС*/}
      {/*</div>*/}

      {/*<div className='control-station-table__header'>*/}
      {/*  <span className='control-station-table__header-item control-station-table__flex-item'>*/}
      {/*    Зона обслуживания*/}
      {/*  </span>*/}
      {/*  <span className='control-station-table__header-item control-station-table__flex-item'>*/}
      {/*    Позывной*/}
      {/*  </span>*/}
      {/*  <span className='control-station-table__header-item control-station-table__flex-item'>*/}
      {/*    Канал УКВ-р/с*/}
      {/*  </span>*/}
      {/*  <span className='control-station-table__header-item control-station-table__flex-item'>*/}
      {/*    Зона действия УКВ-р/ст*/}
      {/*  </span>*/}
      {/*  <span className='control-station-table__header-item control-station-table__flex-item'>*/}
      {/*    Контактные телефоны*/}
      {/*  </span>*/}
      {/*</div>*/}

      {/*<div className='control-station-table__content'>*/}
      {/*  <div className='control-station-table__content-item control-station-table__flex-item'>*/}
      {/*    <p>с/х № 63: 407,0 км с/х № 65 (поворотный буй 7А) – 527,7 км</p>*/}
      {/*    <p>с/х № 65: 423,0 км – 312,0 км</p>*/}
      {/*    <p>с/х № 61 Горьковское вдхр.: 423,0 км – 459,0 км</p>*/}
      {/*    <p>с/х № 64; 414,0 км (с/х № 63) – 90,0 км (с/х р. Мологи)</p>*/}
      {/*  </div>*/}
      {/*  <div className='control-station-table__content-item control-station-table__flex-item'>*/}
      {/*    <p>Переборы-1</p>*/}
      {/*  </div>*/}
      {/*  <div className='control-station-table__content-item control-station-table__flex-item'>*/}
      {/*    <p>24,5</p>*/}
      {/*  </div>*/}
      {/*  <div className='control-station-table__content-item control-station-table__flex-item'>*/}
      {/*    <p>На подходах:</p>*/}
      {/*    <p>с/х № 61: 440,0-423,0 км;</p>*/}
      {/*    <p>с/х № 65: 381,0-423,0 км;</p>*/}
      {/*    <p>с/х № 63: 410,0-402,0 км;</p>*/}
      {/*  </div>*/}
      {/*  <div className='control-station-table__content-item control-station-table__flex-item'>*/}
      {/*    <p>+7 (4855) 200-791</p>*/}
      {/*    <p>+7 (4855) 238-101</p>*/}
      {/*    <p>+7 (906) 037-57-48</p>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </div>
  )
}

export default ControlStationTable