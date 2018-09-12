import Header from '../../../components/header'
import Footer from '../../../components/footer'
import Navbar from '../../../components/navbar'
import Page from '../../../components/page'
import Container from '../../../components/container'
import { MediaQueryConsumer } from '../../../components/media-query'

import Markdown, { meta } from './example.mdx'
import { components } from '../../../components/blog/post'

export default () =>
  <Page>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
        <Navbar/>
      </Header>
    }</MediaQueryConsumer>
    <Container padding>
      <Markdown components={components}/>
    </Container>
    <Footer/>
  </Page>
