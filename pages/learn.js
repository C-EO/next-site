import Page from '../components/page'
import Screen from '../components/screen'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Notification from '../components/notification'

export default () => {
  return <Page>
    <Header height={64} shadow defaultActive>
      <Navbar/>
    </Header>
    <p>[zone]</p>
    <Footer/>
  </Page>
}