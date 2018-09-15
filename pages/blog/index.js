import Header from '../../components/header'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Page from '../../components/page'
import Container from '../../components/container'
import { MediaQueryConsumer } from '../../components/media-query'

import Preview from '../../components/blog/preview'
import List from '../../components/blog/list'

export default () =>
  <Page title='Blog - Next.js'>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
        <Navbar/>
      </Header>
    }</MediaQueryConsumer>
    <Preview caseStudy wide/>
    <List/>
    <Footer/>
  </Page>
