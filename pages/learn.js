import Page from '../components/page'
import Screen from '../components/screen'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Notification from '../components/notification'
import Container from '../components/container'

export default () => {
  return <Page title='Learn Next.js'>
    <Header height={64} shadow defaultActive>
      <Navbar/>
    </Header>
    <Container padding>
      <p>[zone]</p>
    </Container>
    <Footer/>
  </Page>
}
