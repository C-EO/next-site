import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'
import Container from '../components/new/container'
import SectionHeader from '../components/new/section-header'

export default () => {
  return <Page>
    <Header height={64 + 32} shadow defaultActive>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    <style jsx>{`
      .component-title {
        margin-bottom: 2rem;
      }
    `}</style>
    <Container padding>
      <SectionHeader title='Design' description='Components for nextjs.org'/>
      <h3 className="fw4 f4 component-title">Modular Scale</h3>
      <h1 className="f0">XXXL - Heading 0</h1>
      <h1 className="f1">XXL - Heading 1</h1>
      <h2 className="f2">XL - Heading 2</h2>
      <h3 className="f3">LG - Heading 3</h3>
      <h3 className="f4">MD - Heading 4</h3>
      <h3 className="f5">SM - Heading 5</h3>
      <h3 className="f6">XS - Heading 6</h3>
    </Container>
    <Footer/>
  </Page>
}