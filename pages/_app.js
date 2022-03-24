import '../styles/globals.css'

import Head from 'next/head'
import Link from 'next/link'

import Navbar from '../views/basics/NavBar';
import Footer from '../views/basics/Footer';
import Banner from '../views/banner/Banner';

import '@popperjs/core';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function MyApp({ Component, pageProps }) {
  return <>
      <Head>
        <title>Eike Wientjes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="content">
        <div class="content-wrap">
          <Navbar />
          <Banner />
          <Component {...pageProps} />
        </div>
        <br />
        <br />
        <Footer />
    </div>
  </>;
}

export default MyApp
