import Page from '../components/page'
import Header from '../components/header'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Screen from '../components/screen'

import Contact from '../components/enterprise/contact'

export default () => {
  return <Page title='Enterprise'>
    <Header height={64} shadow defaultActive>
      <Navbar/>
    </Header>
    <Screen offset={64 + 150}>
      <Contact/>
    </Screen>
    <Footer/>
  </Page>
}
