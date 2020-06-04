import React from 'react'
import {menu as menuData} from '../../assets/menu'
import {makeContent} from '../../utils/makeContent';
import {Footer, Head, Header, InnerPage} from '../../modules';

const DocumentsPages = (props) => {

  const pageContent = makeContent(props.data.content)

  return (
    <div className='container'>
      <Head/>
      <Header menu={props.menu}/>
      <InnerPage menu={props.menu} sidebar={3} title={props.data.title} pageContent={pageContent}/>
      <Footer/>
    </div>
    )
}

export const getStaticProps = async (ctx) => {

  const pagesData = {
    portControl: {
      page: 'portControl',
      title: 'Государственный портовый контроль',
      content: []
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
      { params: {pageName: 'portControl'}},
    ]
  }
}

export default DocumentsPages