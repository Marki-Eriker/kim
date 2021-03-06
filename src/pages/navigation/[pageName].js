import React from 'react'
import {menu as menuData} from '../../assets/menu'
import {makeContent} from '../../utils/makeContent';
import {Footer, Head, Header, InnerPage} from '../../modules';

const Navigation = (props) => {
  const pageContent = makeContent(props.data.content)

  return (
    <div className='container'>
      <Head/>
      <Header menu={props.menu}/>
      <InnerPage menu={props.menu} sidebar={2} title={props.data.title} pageContent={pageContent}/>
      <Footer/>
    </div>
    )
}

export const getStaticProps = async (ctx) => {

  const pagesData = {
    schema: {
      page: 'schema',
      title: 'Схема водных путей',
      content: [
        {picture: '/baners/schema-min.jpg'}
      ]
    },
    controlStation: {
      page: 'controlStation',
      title: 'Диспетчерские пункты',
      content: [
        {controlStation: [
            {
              title: 'Рыбинское водохранилище',
              station: [
                {
                  name: 'Диспетчер по движению Рыбинского РГС',
                  zone: [
                    'с/х № 63: 407,0 км с/х № 65 (поворотный буй 7А) – 527,7 км',
                    'с/х № 65: 423,0 км – 312,0 км',
                    'с/х № 61 Горьковское вдхр.: 423,0 км – 459,0 км',
                    'с/х № 64; 414,0 км (с/х № 63) – 90,0 км (с/х р. Мологи)',
                  ],
                  call: 'Переборы-1',
                  ykvChannel: '24,5',
                  ykvZone: [
                    'На подходах:',
                    'с/х № 61: 440,0-423,0 км;',
                    'с/х № 65: 381,0-423,0 км;',
                    'с/х № 63: 410,0-402,0 км;',
                  ],
                  contacts: [
                    '+7 (4855) 200-791',
                    '+7 (4855) 238-101',
                    '+7 (906) 037-57-48',
                  ]
                }
              ],
            },
            {
              title: 'Река Волга, Канал имени Москвы',
              station: [
                {
                  name: 'Диспетчер по движению Волжского РГС',
                  zone: [
                    '312,0 км (Угличское вдхр.) – 151,0 км (Канал имени Москвы)',
                    'Иваньковское вдхр.: 166 км –191 км',
                  ],
                  call: 'Дубна-диспетчер',
                  ykvChannel: '22,5',
                  ykvZone: [
                    'На подходах',
                  ],
                  contacts: [
                    '+7 (49621) 2-01-54',
                    '+7 (906) 764-12-87',
                  ]
                },
                {
                  name: 'Диспетчер по движению Тверского РГС',
                  zone: [
                    'Иваньковское вдхр.: 290,0 км – 191 км',
                  ],
                  call: 'Тверь-3',
                  ykvChannel: '3,5',
                  ykvZone: [
                    'На подходах',
                  ],
                  contacts: [
                    '+7 (4822) 35-85-02',
                    '+7 (905) 501-62-13',
                  ]
                },
              ]
            },
            {
              title: 'Канал имени Москвы, река Москва, река Ока',
              station: [
                {
                  name: 'Центральная диспетчерская по движению',
                  zone: [
                    'Канал имени Москвы: (151км) – шлюз № 9 (35 км)',
                  ],
                  call: '-',
                  ykvChannel: '-',
                  ykvZone: [
                    '-',
                  ],
                  contacts: [
                    '+7 (495) 491 32-22',
                    '+7 (906) 769-63-13',
                  ]
                },
                {
                  name: 'Диспетчер по движению Московского РГС',
                  zone: [
                    'р. Москва: 188,5 – 0,0 км',
                    'р. Ока: 850,0 – 800,0 км',
                  ],
                  call: 'Москва-Перерва',
                  ykvChannel: '6',
                  ykvZone: [
                    'На подходах',
                  ],
                  contacts: [
                    '+7 (965) 321-41-70',
                  ]
                },
                {
                  name: 'Диспетчер по движению Рязанского РГС',
                  zone: [
                    'р. Ока: 800,0 км – 409,0 км',
                  ],
                  call: 'Рязань-РГС',
                  ykvChannel: '3',
                  ykvZone: [
                    'На подходах',
                  ],
                  contacts: [
                    '+7 (4912) 77-79-67',
                    '+7 (965) 327-72-60',
                  ]
                },
                {
                  name: 'Диспетчер по движению Муромского РВП',
                  zone: [
                    'р. Ока 409,0 – 58,0 км',
                  ],
                  call: 'Муром-диспетчер',
                  ykvChannel: '3',
                  ykvZone: [
                    'На подходах',
                  ],
                  contacts: [
                    '+7 (49234) 2-26-27',
                    '+7 (905) 501-45-73',
                  ]
                },
                {
                  name: 'Диспетчерская по шлюзованию',
                  zone: [
                    'Прохождение через шлюзы: Угличский; от шлюза № 1 до шлюза № 9 (Канал имени Москвы)',
                  ],
                  call: '-',
                  ykvChannel: '-',
                  ykvZone: [
                    '-',
                  ],
                  contacts: [
                    '+7 (495) 491-32-64',
                    '+7 (499) 638-42-16',
                    '+7 (965) 339-15-74',
                  ]
                },
              ]
            }
          ]},
        {plink: [
            {
              before: '',
              link: {
                name: 'Контактные данные для подачи заявок на шлюзование маломерного флота',
                to: '/navigation/small-ship.pdf'
              },
              after: '',
            }
          ]},
      ]
    },
    safetyOfNavigation: {
      page: 'safetyOfNavigation',
      title: 'Документы по безопасности судоходства',
      content: [
        {h4: 'Приказы Министерства транспорта Российской Федерации'},
        {fileLink: {
            name: 'от 01.03.2010 №47 «Об утверждении порядка диспетчерского регулирования движения ' +
              'судов на внутренних водных путях Российской Федерации»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'от 03.03.2014 №58 «Об утверждении Правил пропуска судов через шлюзы внутренних водных путей»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'от 05.04.2017 №137 «Об утверждении Правил движения и стоянки судов в московском ' +
              'бассейне внутренних водных путей Российской Федерации»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'от 19.01.2018 №19 «Об утверждении Правил плавания по внутренним водным путям»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {h4: 'Приказы ФГБУ «Канал имени Москвы»'},
        {fileLink: {
            name: 'от 04.03.2019 №01-02-30 «О пропуске маломерных судов» (по внутренним водным путям ' +
              'в границах деятельности ФГБУ «Канал имени Москвы»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'от 15.03.2019 №01-04-36 «Об утверждении Правил пропуска маломерных судов через ' +
              'шлюзы ФГБУ «Канал имени Москвы»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {h4: 'Распоряжения Росморречфлота'},
        {fileLink: {
            name: 'от 17.12.2018 г. № ЮЦ-445-р «О перечне судовых ходов с установленными ' +
              'гарантированными габаритами судовых ходов, категориями средств навигационного ' +
              'оборудования и сроками их работы, а также сроками работы судоходных гидротехнических ' +
              'сооружений в навигацию 2019 года»',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {h4: 'Прочие документы'},
        {fileLink: {
            name: 'Общие положения о категориях внутренних водных путей, сроках работы средств навигационного ' +
              'оборудования и судоходных гидротехнических сооружений (Приложение №1).',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'Перечень судовых ходов в навигацию 2019 г. в Московском бассейне внутренних ' +
              'водных путей (Приложение №2).',
            to: '/documents/navigation/safety/test.pdf',
          }},
        {fileLink: {
            name: 'Сроки работы судоходных гидротехнических сооружений в навигацию 2019 г. по ' +
              'бассейнам внутренних водных путей (Приложение №3).',
            to: '/documents/navigation/safety/test.pdf',
          }},
      ]
    },
    limitations: {
      page: 'limitations',
      title: 'Ограничения и запрещение движения судов',
      content: [
        {limits: [
            {
              zone: 'Р.Москва: Бесединские мосты (133,7 км) – Гольевский ручей (200,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Канал имени Москвы: шлюз №8 (41,0 км) – мост Октябрьской железной дороги (49,9 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Река Москва: Бесединские мосты (133,7 км) – устье (р. Ока) (0,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Канал имени Москвы: пристань Большая Волга (165, 0 км) – мост Октябрьской железной дороги (49,9 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Река Дубна: г. Дубна – устье (р. Волга), протяженностью 6 км',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Клязьминское водохранилище: пристань «Пансионат Клязьма» - основной судовой ход канала имени Москвы (65,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Пяловское водохранилище: пристань Аксаково – основной судовой ход канала имени Москвы (75,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Пестовское водохранилище: пристань Тишково – основной судовой ход канала имени Москвы (77,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Река Ока: устье реки Протва (983,0 км) – н.п. Вакино (778,0 км)',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
            {
              zone: 'Река Нара: г. Серпухов – устье (р. Ока), протяженность. 2 км.',
              limit: 'Запрет на движение пассажирских судов с пассажирами на борту',
              dateStart: '17.04.2020',
              docKimStart: {
                name: '№01-03-09 от 16.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEnd: '-',
              docFAMRT: {
                name: '№ АП-137-р от 21.04.2020',
                to: '/navigation/limits/2020/test.pdf',
              },
              dateEndFact: '-',
              docKimEnd: {
                name: '',
                to: '',
              },
            },
          ]}
      ]
    },
    travelInfo: {
      page: 'travelInfo',
      title: 'Ежесуточная путевая информация',
      content: [
        {h4: 'Июнь'},
        {fileLink: {
            name: 'Информационный бюллетень за 03.06.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 02.06.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 01.06.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {h4: 'Май'},
        {fileLink: {
            name: 'Информационный бюллетень за 31.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 30.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 29.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 28.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 27.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 26.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
        {fileLink: {
            name: 'Информационный бюллетень за 25.05.2020',
            to: '/documents/navigation/travelInfo/2020/test.pdf',
          }},
      ]
    },
    smallShip: {
      page: 'smallShip',
      title: 'Пропуск маломерных судов',
      content: [
        {p: 'При прохождении маломерного флота через шлюзы Московского бассейна ФГБУ ' +
            '«Канал имени Москвы» руководствуется, в том числе:'},
        {fileLink: {
            name: 'Правилами пропуска судов через шлюзы внутренних водных путей, утвержденными ' +
              'Приказом Минтранса России от 03.03.2014 г. №58',
            to: '/navigation/smallShip/test.pdf',
          }},
        {fileLink: {
            name: 'Правилами плавания по внутренним водным путям, утвержденными Приказом ' +
              'Минтранса России от 19.01.2018 г. №19',
            to: '/navigation/smallShip/test.pdf',
          }},
        {fileLink: {
            name: 'Правилами движения и стоянки судов в Московском бассейне внутренних ' +
              'водных путей Российской Федерации, утвержденными Приказом Минтранса России от 05.04.2017 г. №137',
            to: '/navigation/smallShip/test.pdf',
          }},
        {plink: [
            {
              before: 'Для обеспечения безопасности судоходства, планирования и упорядочения пропуска ' +
                'маломерного флота через судоходные гидротехнические сооружения совместно с судами и ' +
                'составами, подлежащими диспетчерскому регулированию, а также для корректной идентификации ' +
                'маломерных судов и своевременного информирования их капитанов и владельцев о нештатных ' +
                'ситуациях, рекомендуется предоставлять в Службу регулирования движения судов ФГБУ «Канал ' +
                'имени Москвы» сведения о маломерном судне в форме извещения о намерении прохода через шлюзы ' +
                'в течение всей навигации (см. ',
              link: {
                name: 'Приказ ФГБУ «Канал имени Москвы» от 15.03.2019 №01-04-36 «Об утверждении ' +
                  'Правил пропуска маломерных судов через шлюзы ФГБУ «Канал имени Москвы»',
                to: '/documents/navigation/smallShip/test.pdf'
              },
              after: ').',
            }
          ]},
        {p: 'Сделать это можно в электронном виде, заполнив на сайте автоматизированную Форму ' +
            'ввода данных о маломерных судах. Соответствующему извещению автоматически присваивается ' +
            'номер. Он понадобится при подаче заявки на шлюзование: теперь достаточно сообщить этот ' +
            'номер диспетчеру. Процедура регистрации в ФГБУ «Канал имени Москвы» с присвоением ' +
            'регистрационного номера и предоставлением ранее требуемых документов отменена.'},
        {smallShipForm: ''},
        {p: 'При отсутствии возможности заполнить электронную форму извещения на сайте передать данные о маломерных судах можно непосредственно дежурному диспетчеру Службы регулирования движения судов ФГБУ «Канал имени Москвы».'},
        {p: 'Рекомендуемый состав передаваемой информации в извещении:'},
        {ul: [
          'название судна',
          'бортовой номер',
          'габариты судна (длина, ширина)',
          'флаг государства',
          'фамилия имя отчество судовладельца',
          'контактные данные (электронная почта, номер телефона)',
          ]},
        {p: 'До внедрения автоматизированной формы ввода информации через сайт Учреждения соответствующие ' +
            'сообщения с темой «Извещение о МС» необходимо направлять по электронной почте: dpp@fgbu-kim.ru ' +
            '– или по телефонам: +7 (499) 638-42-17, +7 (906) 769-66-14.'},
        {p: 'Прием данных осуществляется в период навигации (24 апреля – 17 ноября) ежедневно с 10:00 ' +
            'до 19:00 и в межнавигационный период – в рабочие дни с 10:00 до 17:00.'},
        {plink: [
            {
              before: 'Чтобы сократить время ожидания шлюзования и оптимизировать планирование ' +
                'судопропуска, просим заблаговременно предупреждать диспетчерскую службу конкретного ' +
                'участка внутренних водных путей о возможном прохождении судоходных гидротехнических ' +
                'сооружений. Таким образом ваше маломерное судно будет интегрировано в программу шлюзования. ' +
                'Это не отменяет необходимость подавать диспетчеру конкретного шлюза заявку на шлюзование ' +
                'не менее чем за полтора часа до предполагаемого подхода судна к границе шлюза или ' +
                'шлюзованного участка внутренних водных путей (см. пункт 11 ',
              link: {
                name: 'Приказа Минтранса России от 03.03.2014 г. №58',
                to: '/documents/navigation/smallShip/test.pdf'
              },
              after: ').',
            }
          ]},
        {p: 'Связь со шлюзами осуществляется на 3 канале УКВ-радиосвязи, позывные в соответствии ' +
            'с действующим «Списком береговых радиостанций и расписания их работы на водных путях ' +
            'Единой глубоководной системы Европейской части Российской Федерации».'},
        {structureBlock: {
            title: 'Контакты диспетчерских пунктов',
            phone: '',
            content: [
              {
                position: 'Рыбинский шлюз',
                name: 'Диспетчер по движению Рыбинского РГС',
                phone: '+7 (4855) 200-791 +7 (4855) 238-101 +7 (906) 037-57-48'
              },
              {
                position: 'Шлюзы №10, Трудкоммуна, Андреевка, Софьино, Фаустово, Северка',
                name: 'Диспетчер по движению Московского РГС',
                phone: '+7 (965) 321-41-70'
              },
              {
                position: 'Шлюзы Белоомут и Кузьминск',
                name: 'Диспетчер по движению Рязанского РГС',
                phone: '+7 (4912) 77-79-67 +7 (965) 327-72-60'
              },
              {
                position: 'Шлюзы Угличский, №№1–9 (Канал имени Москвы)',
                name: 'Диспетчерская по шлюзованию',
                phone: '+7 (495) 491-32-64 +7 (499) 638-42-16 +7 (965) 339-15-74'
              },
            ]
          }},
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
      { params: {pageName: 'schema'}},
      { params: {pageName: 'controlStation'}},
      { params: {pageName: 'safetyOfNavigation'}},
      { params: {pageName: 'limitations'}},
      { params: {pageName: 'travelInfo'}},
      { params: {pageName: 'smallShip'}},
    ]
  }
}

export default Navigation