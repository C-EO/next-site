import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'
import Container from '../components/new/container'

export default () => {
  return <Page>
    <Header height={64 + 32} shadow>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    <Container center>
      <h1>nextjs.org components</h1>
    </Container>
    <Container padding>
      <h1 className="f1">heading 1</h1>
      <h2 className="f2">heading 2</h2>
      <h3>heading 3</h3>
    </Container>
    <Footer/>
  </Page>
}