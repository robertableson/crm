import Head from 'next/head';

import LeftSidebar from '../layouts/LeftSidebar/LeftSidebar';
import Header from '../layouts/Header/Header';
import ContactsList from '../components/ContactsList/ContactsList';
import Footer from '../layouts/Footer/Footer';


function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  

      <section class="w-fit bg-slate-800 h-screen text-white p-4">
        <LeftSidebar/>
      </section>

      <section class="w-3/4 flex flex-col">
        <Header/>

        {/*
        <main>
          <ContactsList/>
        </main> 

        
        */}
        <div class="flex flex-col justify-end grow">
          <Footer/>
        </div>
      </section>

    </div>
  )
}

export default Home;