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
      </Head>
      
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