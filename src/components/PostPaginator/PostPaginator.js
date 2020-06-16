import React from 'react'
import './PostPaginator.scss'
import Link from 'next/link'
import cn from 'classnames'

const PostPaginator = ({options}) => {

  let maxPage = options.pageCount > 10 ? 10 : options.pageCount
  let pageLinks = []

  for (let i = 1; i <= maxPage; i++) {
    pageLinks.push((
        <Link prefetch={false} href={`${options.forPage}${i}`} key={`page-${i}`}>
          <a
            className='post-paginator__link'>
            <span className={cn({'active': i === (options.currentPage * 1)})}>
              {i}
            </span>
          </a>
        </Link>
    ))
  }

  return (
    <div className='post-paginator'>
      <span className='post-paginator__arrow post-paginator__arrow-left'/>
      {pageLinks}
      <span className='post-paginator__arrow post-paginator__arrow-right'/>
    </div>
  )
}

export default PostPaginator