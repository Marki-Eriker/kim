import React from 'react'
import Head from 'next/head'
import './index.scss'
import {Header} from '../modules';

const Home = () => {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>


        <Header/>

        <main>

        </main>

        <footer>

        </footer>

    </div>
  )
}

export default Home
