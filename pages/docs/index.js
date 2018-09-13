import Page from '../../components/page'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Notification from '../../components/notification'
import Container from '../../components/container'
import { MediaQueryConsumer } from '../../components/media-query'
import withPure from '../../components/pure'
import Footer from '../../components/footer'

import Markdown, { meta } from './index.mdx'
import Documentation, { components } from '../../components/docs/documentation'

const Content = withPure(() => <Markdown components={components} />)

export default () => (
  <Page>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + 32 + (isMobile ? 32 : 0)} shadow={!isMobile} defaultActive>
        <Notification title="Next 6 is out!">
          Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
        </Notification>
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
