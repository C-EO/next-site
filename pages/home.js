import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'

import Intro from '../components/new/home/intro'
import Demo from '../components/new/home/demo'
import Features from '../components/new/home/features'
import Customers from '../components/new/home/customers'

export default () => {
  return <Page>
    <Header height={64 + 32} shadow active={120}>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    <Screen offset={64 + 32 + 200}>
      <Intro/>
    </Screen>
    <Demo/>
    <Features/>
    <Customers/>
    <Footer/>
  </Page>
}