import React from 'react'
import './Map.scss'
import {YMaps, Map as YMap, ZoomControl, TypeSelector, GeoObject, Polyline} from 'react-yandex-maps'

const Map = (props) => {

  const defaultState = {
    center: [55.75, 37.57],
    zoom: 7,
    controls: []
  }

  const geometry = [
      [
        55.84872257736021,
        37.66387939453125,
      ],
      [
        55.69732481849101,
        37.69615173339844,
      ]
  ]

  const options = {
    balloonCloseButton: false,
    strokeColor: '#000',
    strokeWidth: 4,
    strokeOpacity: 0.5,
  }



  return (
    <div className='content'>
      <YMaps className='map'>
        <YMap width={'100%'} height={600} defaultState={defaultState} >
          <ZoomControl options={{ float: 'right' }} />
          <TypeSelector options={{ float: 'right' }} />
          <Polyline geometry={geometry} options={options}/>
        </YMap>
      </YMaps>
    </div>
  )
}

export default Map