import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Page from '../components/new/page'
import Container from '../components/new/container'

import Preview from '../components/new/blog/preview'
import List from '../components/new/blog/list'

export default () =>
  <Page>
    <Header height={64} shadow defaultActive>
      <Navbar/>
    </Header>
    <Preview caseStudy wide/>
    <List/>
    <Footer/>
  </Page>
