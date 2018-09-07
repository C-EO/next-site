import Page from '../../components/new/page'
import Header from '../../components/new/header'
import Navbar from '../../components/new/navbar'
import Notification from '../../components/new/notification'

import Container from '../../components/new/container'

import Markdown, { meta } from './index.mdx'
import Documentation, { components } from '../../components/new/docs/documentation'

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
