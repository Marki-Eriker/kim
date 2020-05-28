import React from 'react'
import Head from 'next/head'
import './index.scss'
import {Header, Slider, Primary, About} from '../modules';
import {InfoBaner} from '../components';

const Home = ({menu, images, banners}) => {

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>
      <Header menu={menu}/>
      <Slider slides={images} autoPlay={5}/>
      <main>
        <Primary/>
        <InfoBaner image={banners.polk}/>
        <About/>
        <InfoBaner image={banners.covid}/>
      </main>

      <footer>

      </footer>

    </div>
  )
}

export const getStaticProps = async () => {

  const menu = [
    {
      href: '/about',
      title: 'Об учреждении',
      subItems: [
        {
          href: '/about',
          title: 'Общая информация',
        },
        {
          href: '/about',
          title: 'Структура и руководства',
        },
        {
          href: '/about',
          title: 'Филиалы',
        },
        {
          href: '/about',
          title: 'История',
        },
        {
          href: '/about',
          title: 'Музей',
        },
        {
          href: '/about',
          title: 'Образование',
        },
        {
          href: '/about',
          title: 'Вакансии',
        },
        {
          href: '/about',
          title: 'Обращения граждан',
        },
        {
          href: '/about',
          title: 'Вопрос-ответ',
        },
      ],
    },
    {
      href: '/documents',
      title: 'Документы',
      subItems: [
        {
          href: '/about',
          title: 'Правовые основы деятельности',
        },
        {
          href: '/about',
          title: 'Раскрытие информации',
        },
        {
          href: '/about',
          title: 'Противодействие коррупции ',
        },
        {
          href: '/about',
          title: 'Закупки ',
        },
      ],
    },
    {
      href: '/navigation',
      title: 'Навигация',
      subItems: [
        {
          href: '/about',
          title: 'Cхема водных путей',
        },
        {
          href: '/about',
          title: 'Диспетчерские пункты',
        },
        {
          href: '/about',
          title: 'Документы по безопасности судоходства',
        },
        {
          href: '/about',
          title: 'Ежесуточная путевая информация',
        },
        {
          href: '/about',
          title: 'Ограничения и запрещение движения судов',
        },
        {
          href: '/about',
          title: 'Пропуск маломерных судов',
        },
      ],
    },
    {
      href: '/captains-service',
      title: 'Служба капитана Московского бассейна ВВП',
      subItems: [
        {
          href: '/about',
          title: 'Государственный портовый контроль',
        },
        {
          href: '/about',
          title: 'Удостоверение личности моряка и мореходная книжка',
        },
        {
          href: '/about',
          title: 'Дипломирование и аттестация',
        },
        {
          href: '/about',
          title: 'Государственная регистрация судов',
        },
        {
          href: '/about',
          title: 'Возврат государственной пошлины',
        },
      ],
    },
    {
      href: '/services',
      title: 'Услуги',
      subItems: [
        {
          href: '/about',
          title: 'Личный кабинет',
        },
        {
          href: '/about',
          title: 'Диспетчерское регулирование',
        },
        {
          href: '/about',
          title: 'Предоставление судам причалов',
        },
        {
          href: '/about',
          title: 'Картография',
        },
        {
          href: '/about',
          title: 'Работы флота',
        },
        {
          href: '/about',
          title: 'Отстой флота',
        },
        {
          href: '/about',
          title: 'Технические согласования',
        },
        {
          href: '/about',
          title: 'Передача электроэнергии',
        },
        {
          href: '/about',
          title: 'Транспортировка воды',
        },
        {
          href: '/about',
          title: 'Паромная переправа',
        },
        {
          href: '/about',
          title: 'Шлюзование за пределами  установленных сроков навигации',
        },
        {
          href: '/about',
          title: 'Посещение музея',
        },
        {
          href: '/about',
          title: 'Проход иностранных судов по внутренним водным путям',
        },
      ],
    },
    {
      href: '/media',
      title: 'Услуги',
      subItems: [
        {
          href: '/about',
          title: 'Новости',
        },
        {
          href: '/about',
          title: 'СМИ о нас',
        },
        {
          href: '/about',
          title: 'Взаимодействие со СМИ',
        },
      ],
    },
    {
      href: '/media',
      title: 'Контакты',
    },
  ]

  const images = [
    '/slider/1.jpg',
    '/slider/2.jpg',
    '/slider/3.jpg',
    '/slider/4.jpg',
    '/slider/5.jpg',
  ]

  const banners = {
    polk: '/polk.jpg',
    covid: '/covid.jpg'
  }

  return {props: {menu, images, banners}}
}

export default Home
