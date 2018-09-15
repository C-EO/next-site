import Page from '../../components/page'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Notification from '../../components/notification'
import Container from '../../components/container'
import { MediaQueryConsumer } from '../../components/media-query'
import withPure from '../../lib/pure'
import Footer from '../../components/footer'

import Markdown, { meta } from './docs.mdx'
import Documentation, { components } from '../../components/docs/documentation'

const Content = withPure(() => <Markdown components={components} />)

export default () => (
  <Page>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + (isMobile ? 32 : 0)} shadow={!isMobile} defaultActive>
        <Navbar/>
      </Header>
    }</MediaQueryConsumer>
    <Container>
      <Documentation meta={meta}>
        <Content/>
      </Documentation>
    </Container>
  </Page>
)
