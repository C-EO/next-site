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
    <Header height={64} shadow defaultActive>
      <Navbar/>
    </Header>
    <Demo/>
    <Features/>
    <Customers/>
    <Footer/>
  </Page>
}