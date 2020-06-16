import React from 'react'
import './Post.scss'
import Link from 'next/link';

const Post = ({data}) => {
  return (
    <React.Fragment>
      {!data ? (
      <div className='post'>
        <div className='post__image'>
          <img src='/news/1_28-05-2020/title.jpg' alt='Post title'/>
        </div>
        <div className='post__content'>
          <span className='post__content-date'>28.05.2020</span>
          <h3 className='post__content-title'>Реконструкция рыбинского гидроузла</h3>
          <p className='post__content-text'>
            На Рыбинском гидроузле в Ярославской области, находящемся в оперативном
            управлении ФГБУ «Канал имени Москвы», продолжаются работы по реконструкции.
          </p>
          <Link href='/about'>
            <a className='post__content-link'>Читать далее</a>
          </Link>
        </div>
      </div>
    ) : (
        <div className='post'>
          <div className='post__image'>
            <img src={data.img} alt='Post image'/>
          </div>
          <div className='post__content'>
            <span className='post__content-date'>{data.date}</span>
            <h3 className='post__content-title'>{data.title}</h3>
            <p className='post__content-text'>{data.text}</p>
            <Link href={data.link}>
              <a className='post__content-link'>Читать далее</a>
            </Link>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Post