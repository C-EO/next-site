import Page from '../../components/page'
import Header from '../../components/header'
import Navbar from '../../components/navbar'
import Notification from '../../components/notification'

import Container from '../../components/container'

import Markdown, { meta } from './index.mdx'
import Documentation, { components } from '../../components/docs/documentation'

export default () => (
  <Page>
    <Header height={64 + 32} shadow defaultActive>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    <Container>
      <Documentation meta={meta}>
        <Markdown components={components} />
      </Documentation>
    </Container>
  </Page>
)
