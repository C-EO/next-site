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
import FAQ from '../components/home/faq'
import { MediaQueryConsumer } from '../components/media-query'

export default () => {
  return <Page>
    <MediaQueryConsumer>{({isMobile}) => <>
      <Header height={64 + 32 + (isMobile ? 32 : 0)} shadow active={isMobile ? 1 : 120}>
        <Notification title="Next 6 is out!" titleMobile={'Next 6: Babel 7, App Component & tons of improvements'}>
          Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
        </Notification>
        <Navbar/>
      </Header>
      <Screen offset={64 + 32 + 150}>
        <Intro/>
      </Screen>
    </>}</MediaQueryConsumer>
    <Demo/>
    <Features/>
    <Customers/>
    <FAQ/>
    <Footer/>
  </Page>
}