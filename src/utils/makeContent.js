import React from 'react'
import {InfoBlock, PLink, StructureBlock, Feedback, Picture, InfoBlockDisclose, PImg, Post} from '../components';
import {ContentSlider, ControlStationTable, FaqForm, LimitTable, SmallShipForm} from '../modules';

export const makeContent = (data) => {
  return data.map((item, index) => {
    switch (Object.keys(item)[0]) {
      case 'p':
        return (<p key={index}>{item.p}</p>)
      case 'ul':
        return (
          <ul key={index}>
            {item.ul.map((item, index) => (<li key={index}>{item}</li>))}
          </ul>
        )
      case 'structureBlock':
        return (<StructureBlock data={item.structureBlock} key={index}/>)
      case 'infoBlock':
        return (<InfoBlock data={item.infoBlock} key={index}/>)
      case 'infoBlockDisclose':
        return (<InfoBlockDisclose
          data={item.infoBlockDisclose.data}
          title={item.infoBlockDisclose.title} key={`infoBlockDisclose-${index}`}/>)
      case 'slider':
        return (<ContentSlider images={item.slider} key={index}/>)
      case 'h4':
        return (<h4 key={index}>{item.h4}</h4>)
      case 'h3':
        return (<h3 key={index}>{item.h3}</h3>)
      case 'h4center':
        return (<h4 key={index} style={{textAlign: 'center'}}>{item.h4center}</h4>)
      case 'plink':
        return (<PLink data={item.plink} key={index}/>)
      case 'pbr':
        return (
          <p key={index + 400}>{item.pbr.map((item, index) => (
            <React.Fragment key={index + 300}>{item} <br/></React.Fragment>))}</p>)
      case 'pimg':
        return (<PImg img={item.pimg.img} data={item.pimg.data} key={`pimg-${index}`}/>)
      case 'line':
        return (<span key={index} className='page__content-line'/>)
      case 'faqForm':
        return (<FaqForm key={index}/>)
      case 'fileLink':
        return (
          <p>
            <a href={item.fileLink.to} target='_blank' key={index} className='link link-single'>
              {item.fileLink.name}
            </a>
          </p>)
      case 'feedback':
        return ( <Feedback title={item.feedback}/>)
      case 'picture':
        return ( <Picture image={item.picture}/> )
      case 'controlStation':
        return (
          <React.Fragment key={`controlStation-${index}`}>
            {item.controlStation.map((station, index) => (
            <ControlStationTable data={station} key={`station-${index}`}/>
            ))}
          </React.Fragment>
          )
      case 'limits':
        return ( <LimitTable data={item.limits} key={`limits-${index}`}/> )
      case 'smallShipForm':
        return ( <SmallShipForm />)
      case 'miniMap':
        return (<iframe width="100%" height="400" src={item.miniMap} frameBorder="0" key={`iframe-${index}`}/>)
      case 'post':
        return (<Post data={item.post} key={`post-${index}`}/>)
    }
  })
}