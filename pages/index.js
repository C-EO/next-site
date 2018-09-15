import Page from '../components/page'
import Screen from '../components/screen'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Notification from '../components/notification'

import Intro from '../components/home/intro'
import Demo from '../components/home/demo'
import Features from '../components/home/features'
import Customers from '../components/home/customers'
import Learn from '../components/home/learn'
import FAQ from '../components/home/faq'
import { MediaQueryConsumer } from '../components/media-query'

export default () => {
  return <Page title='Next.js'>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + 32 + (isMobile ? 32 : 0)} offset={-32} distance={32} shadow defaultActive={!isMobile} active={isMobile ? 1 : 180}>
        <Notification title="Next 6 is out!" titleMobile={'Next 6: Babel 7, App Component & tons of improvements'}>
          Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
        </Notification>
        <Navbar/>
      </Header>
    }</MediaQueryConsumer>
    <Screen offset={64 + 64 + 144}>
      <Intro/>
    </Screen>
    <Demo/>
    <Features/>
    <Customers/>
    <Learn/>
    <Footer/>
  </Page>
}

// <FAQ/>
