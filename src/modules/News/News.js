import React from 'react'
import './News.scss'
import {Post} from '../../components';

const News = (props) => {
  return (
    <div className='content'>
      <section className='news'>
        <h2 className='news__header'>Новости</h2>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </section>
    </div>
  )
}

export default News