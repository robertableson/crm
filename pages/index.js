import Head from 'next/head';
import Link from 'next/link';

import Sidebar from '../layouts/Sidebar/Sidebar';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';


function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="../styles/globals.css" />
      </Head>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>

      
      
      <Sidebar/>

      <Header/>

      <main>
        allo
      </main>

      <Footer/>
    </div>
  )
}

export default Home;