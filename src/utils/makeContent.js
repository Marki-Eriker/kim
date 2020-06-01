import React from 'react'
import {InfoBlock, PLink, StructureBlock, Feedback} from '../components';
import {ContentSlider, FaqForm} from '../modules';

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
    }
  })
}