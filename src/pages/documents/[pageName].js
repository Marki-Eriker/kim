import React from 'react'
import {menu as menuData} from '../../assets/menu'
import {makeContent} from '../../utils/makeContent';
import {InnerPage} from '../../modules';

const DocumentsPages = (props) => {

  const pageContent = makeContent(props.data.content)

  return <InnerPage menu={props.menu} sidebar={1} title={props.data.title} pageContent={pageContent}/>
}

export const getStaticProps = async (ctx) => {

  const pagesData = {
    legal: {
      page: 'legal',
      title: 'Правовые основы деятельности',
      content: [
        {fileLink: {
          name: 'Устав ФГБУ «Канал имени Москвы»',
          to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Распоряжение СГ-283-р от 03.08.2015 «О внесении изменений в устав ФГБУ «Канал имени Москвы»',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Распоряжение Правительства Российской Федерации от 19.05.2014 № 855-р о реорганизации ' +
              'ФГУП «Канал имени Москвы»',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Положение о гербовой и иных печатях ФГБУ',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Свидетельство о государственной регистрации юридического лица',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Свидетельство ИНН',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Свидетельство ОГРН',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Статистика',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Реквизиты',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Государственное задание на 2019 год и на плановый период 2020 и 2021 годов',
            to: '/documents/legal/test.pdf',
          }},
        {h4: 'Положения о филиалах:'},
        {fileLink: {
            name: 'Рыбинский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Тверской район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Волжский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Дмитровские электрические сети',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Яхромский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Тушинский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Московский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Рязанский район гидротехнических сооружений',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Серпуховский район водных путей',
            to: '/documents/legal/test.pdf',
          }},
        {fileLink: {
            name: 'Муромский район водных путей',
            to: '/documents/legal/test.pdf',
          }},

      ]
    },
    openness: {
      page: 'openness',
      title: 'Раскрытие информации',
      content: [
        {h4: 'Согласно Постановлению Правительства РФ №6 от 17 января 2013 г.'},
        {fileLink: {
            name: '«О стандартах раскрытия информации в сфере водоснабжения и водоотведения»',
            to: '/documents/openness/test.pdf',
          }},
        {h4: 'Согласно Постановлению Правительства РФ №24 от 21 января 2004 г.'},
        {fileLink: {
            name: '«Об утверждении стандартов раскрытия информации субъектами оптового и розничных рынков электрической энергии» ',
            to: '/documents/openness/test.pdf',
          }},
        {h4: 'Согласно Постановлению Правительства РФ №938 от 27 ноября 2010 г.'},
        {fileLink: {
            name: '«О стандартах раскрытия информации субъектами естественных монополий, осуществляющими деятельность в сферах услуг в транспортных терминалах, портах и аэропортах и услуг по использованию инфраструктуры внутренних водных путей»',
            to: '/documents/openness/test.pdf',
          }},
        {h4: 'Согласно Приказу Минтруда России №438н от 19 августа 2016 г.'},
        {fileLink: {
            name: '«Об утверждении Типового положения о системе управления охраной труда»',
            to: '/documents/openness/test.pdf',
          }},
      ]
    },
    corruption: {
      page: 'corruption',
      title: 'Противодействие коррупции',
      content: [
        {p: 'Обращения и отзывы граждан о деятельности ФГБУ «Канал имени Москвы» о фактах проявления ' +
            'коррупции в ФГБУ «Канал имени Москвы» и о работе комиссии по соблюдению требований к ' +
            'служебному поведению гражданских служащих и урегулированию конфликта интересов в адрес ' +
            'ФГБУ «Канал имени Москвы» можно направлять в письменном виде по адресу: 125362, г. Москва, ' +
            'ул. Водников, д. 1, а также в электронном виде через форму обратной связи на официальном ' +
            'сайте Учреждения.'},
        {plink: [
            {
              before: 'Порядок рассмотрения обращений граждан, направленных в адрес ' +
                'ФГБУ «Канал имени Москвы», определяется Федеральным законом от 02 мая 2006 г. № 59-ФЗ ',
              link: {
                name: '«О порядке рассмотрения обращений граждан Российской Федерации»',
                to: '/documents/corruption/test.pdf',
              },
              after: '.',
            }
          ]},
        {p: 'Обращения по вопросам, не входящим в компетенцию ФГБУ «Канал имени Москвы», ' +
            'в соответствии с действующим законодательством направляются в соответствующий ' +
            'орган или соответствующему должностному лицу, в компетенцию которых входит решение ' +
            'поставленных в обращении вопросов, с уведомлением гражданина, направившего обращение, ' +
            'о переадресации обращения.'},
        {feedback: 'Обратная связь'},
        {h4: 'Нормативные правовые акты'},
        {fileLink: {
            name: 'Федеральный закон от 25 декабря 2008 г. № 273-ФЗ «О противодействии коррупции»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Указ Президента Российской Федерации от 29.06.2018 № 378 «О Национальном ' +
              'плане противодействия коррупции на 2018-2020 годы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Указ Президента Российской Федерации от 19 мая 2008 г. № 815 «О мерах по ' +
              'противодействию коррупции»',
            to: '/documents/corruption/test.pdf',
          }},
        {h4: 'Документы'},
        {fileLink: {
            name: '',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Приказ «Об антикоррупционной политике в ФГБУ «Канал имени Москвы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Приказ «Об утверждении плана противодействия коррупции в ФГБУ «Канал имени ' +
              'Москвы» на 2018–2020 годы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Приказ «О внесении изменений в приказ ФГБУ «Канал имени Москвы» от 17.08.2018 ' +
              '№01-02-128 «Об утверждении плана противодействия коррупции в ФГБУ «Канал имени Москвы» ' +
              'на 2018-2020 годы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Приказ «Об утверждении Положения о порядке сообщения работниками ФГБУ «Канал ' +
              'имени Москвы» о получении подарка в связи с протокольными мероприятиями, служебными ' +
              'командировками и другими официальными мероприятиями, участие в которых связано с ' +
              'исполнением ими служебных (должностных) обязанностей, сдаче и оценке подарка, реализации ' +
              '(выкупе) и зачислении средств, вырученных от его реализации»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Приказ «Об утверждении Положения о конфликте интересов и Кодекса этики и служебного ' +
              'поведения работников»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Положение о конфликте интересов Федерального государственного унитарного предприятия ' +
              '«Канал имени Москвы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Кодекс этики и служебного поведения работников Федерального государственного ' +
              'унитарного предприятия «Канал имени Москвы»',
            to: '/documents/corruption/test.pdf',
          }},
        {fileLink: {
            name: 'Часто задаваемые вопросы по противодействию коррупции',
            to: '/documents/corruption/test.pdf',
          }},
      ],
    },
    customs: {
      page: 'customs',
      title: 'Закупки',
      content: [
        {fileLink: {
            name: 'Положение о закупках товаров, работ, услуг для нужд ФГБУ «Канал имени Москвы» от 29.12.2018 г.',
            to: '/documents/customs/test.pdf',
          }},
        {fileLink: {
            name: 'Изменение Положения о закупках товаров, работ, услуг для нужд ФГБУ «Канал имени ' +
              'Москвы» от 27.12.2019г.',
            to: '/documents/customs/test.pdf',
          }},
        {plink: [
            {
              before: '',
              link: {
                name: 'Единая информационная система в сфере закупок',
                to: 'https://zakupki.gov.ru/epz/main/public/home.html',
              },
              after: '.',
            }
          ]},
        {h4: 'Архив'},
        {fileLink: {
            name: 'Положение о закупках товаров, работ, услуг для нужд ФГБУ «Канал имени Москвы» от 29.12.2015 г.',
            to: '/documents/customs/test.pdf',
          }},
        {fileLink: {
            name: 'Изменения в Положение о закупках для нужд ФГБУ «Канал имени Москвы» от 15.11.2016 г.',
            to: '/documents/customs/test.pdf',
          }},
        {fileLink: {
            name: 'Изменение в Положение о закупках для нужд ФГБУ «Канал имени Москвы» от 19.10.2017 г.',
            to: '/documents/customs/test.pdf',
          }},
        {fileLink: {
            name: 'Закупки ФГБУ «Канал имени Москвы» по 223-ФЗ',
            to: '/documents/customs/test.pdf',
          }},
      ],
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
      { params: {pageName: 'legal'}},
      { params: {pageName: 'openness'}},
      { params: {pageName: 'corruption'}},
      { params: {pageName: 'customs'}},
    ]
  }
}

export default DocumentsPages