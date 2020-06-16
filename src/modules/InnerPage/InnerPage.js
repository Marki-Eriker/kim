import React from 'react'
import {Footer, Head, Header, Sidebar} from '../index';
import {PostPaginator} from '../../components';

const InnerPage = ({menu, sidebar, title, pageContent, paginator}) => {
  return (
    <React.Fragment>
    {/*<div className='container'>*/}
      {/*<Head/>*/}
      {/*<Header menu={menu}/>*/}

      <main className='u-pt-mid'>
        <div className='content'>
          <div className='page'>
            <Sidebar className='page__sidebar' menu={menu[sidebar].subItems} title={menu[sidebar].title}/>
            <div className='page__content'>
              <h1 className='content__title'>
                {title}
              </h1>
              {pageContent}
              {paginator && (
                <PostPaginator options={paginator}/>
              )}
            </div>
          </div>
        </div>
      </main>

      {/*<Footer/>*/}
    {/*</div>*/}
    </React.Fragment>
  )
}

export default InnerPage