import Header from '../../components/header'
import Footer from '../../components/footer'
import Navbar from '../../components/navbar'
import Screen from '../../components/screen'
import Page from '../../components/page'
import { MediaQueryConsumer } from '../../components/media-query'

import List from '../../components/blog/list'

export default () =>
  <Page title='Next.js - Blog'>
    <MediaQueryConsumer>{({isMobile}) => 
      <Header height={64 + (isMobile ? 32 : 0)} shadow defaultActive>
        <Navbar/>
      </Header>
    }</MediaQueryConsumer>
    <Screen offset={64 + 448}>
      <List/>
    </Screen>
    <Footer/>
  </Page>
