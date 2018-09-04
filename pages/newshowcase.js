import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'

export default () => {
  return <Page>
    <Header height={64 + 32}>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    
    <Footer/>
  </Page>
}