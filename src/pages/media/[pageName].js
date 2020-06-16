import React from 'react'
import {menu as menuData} from '../../assets/menu'
import {makeContent} from '../../utils/makeContent';
import {Footer, Head, Header, InnerPage} from '../../modules';

const MediaPages = (props) => {

  const pageContent = makeContent(props.data.content)

  return (
    <div className='container'>
      <Head/>
      <Header menu={props.menu}/>
      <InnerPage menu={props.menu} sidebar={5} title={props.data.title} pageContent={pageContent}/>
      <Footer/>
    </div>
  )
}

export const getStaticProps = async (ctx) => {

  const pagesData = {
    interaction: {
      page: 'interaction',
      title: 'Взаимодействие со СМИ',
      content: [
        {p: 'Пресс-служба ФГБУ «Канал имени Москвы» рада оказать содействие представителям СМИ в предоставлении информации о деятельности Учреждения, а также в организации съемок и проведении интервью.'},
        {p: 'Письмо с соответствующим запросом на имя руководителя ФГБУ «Канал имени Москвы» оформляется на фирменном бланке редакции и должно содержать:'},
        {ul: [
          'исходящий номер и дату отправки письма;',
          'тему (сюжета, интервью);',
          'примерный список вопросов (сценарный план при наличии);',
          'дату проведения съемок, интервью;',
          'контактные данные для обратной связи;',
          'паспортные данные съемочной группы (ФИО, дата и место рождения, серия и номер паспорта, кем и когда выдан, регистрация);',
          'список техники и автотранспорта.',
          ]},
        {p: 'Данные предоставляются согласно Постановлению Правительства РФ от 16 июля 2016 г. №678 «Об утверждении требований по обеспечению транспортной безопасности, в том числе требований к антитеррористической защищенности объектов (территорий), учитывающих уровни безопасности для различных категорий объектов транспортной инфраструктуры и транспортных средств морского и речного транспорта».'},
        {p: 'Заявки отправлять на e-mail: pressa@fgbu-kim.ru'},
        {p: 'Телефон Пресс-службы: +7 (495) 491-32-57'},

      ]
    }
  }

  const menu = menuData
  const data = pagesData[ctx.params.pageName]

  return { props: {data, ctx ,menu}}
}

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      { params: {pageName: 'interaction'}},
    ]
  }
}

export default MediaPages