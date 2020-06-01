import React from 'react'
import './index.scss'
import {menu as menuData} from '../assets/menu'
import {Header, Slider, Primary, About, News, Footer, Head} from '../modules';
import {InfoBaner} from '../components';
import GovernmentLink from '../modules/GovermentLink/GovernmentLink';

const Home = ({menu, images, banners}) => {

  return (
    <div className="container">
      <Head/>
      <Header menu={menu}/>
      <Slider slides={images} autoPlay={5}/>
      <main>
        <Primary/>
        <InfoBaner image={banners.polk}/>
        <About/>
        <InfoBaner image={banners.covid}/>
        <News/>
        <InfoBaner image={banners.km}/>
        <div className='content'>
        {/*<script type="text/javascript" charSet="utf-8" async defer*/}
        {/*        src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A07705a66a959d1a589c03556cbab334c8ec0247386cdb1651368fd14cfa5d215&amp;width=100%25&amp;height=685&amp;lang=ru_RU&amp;scroll=false"/>*/}
        </div>
        <GovernmentLink/>
      </main>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async () => {

  const menu = menuData

  const images = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/5.jpg',
    '/slider/7.jpg',
  ]

  const banners = {
    polk: '/baners/polk.jpg',
    covid: '/baners/covid.jpg',
    km: '/baners/km.jpg'
  }

  return {props: {menu, images, banners}}
}

export default Home
