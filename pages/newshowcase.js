import Page from '../components/new/page'
import Screen from '../components/new/screen'
import Header from '../components/new/header'
import Footer from '../components/new/footer'
import Navbar from '../components/new/navbar'
import Notification from '../components/new/notification'
import Tabs from '../components/new/tabs'

import Title from '../components/new/showcase/title'
import Grid from '../components/new/showcase/grid'
import Filter from '../components/new/showcase/filter'

export default () => {
  return <Page>
    <Header height={0} zIndex={1001} background='transparent'>
      <Navbar/>
    </Header>
    <Tabs data={['all', 'finance', 'news', 'tool', 'personal', 'heart']}>{
      (onSelect, selectedId, selectedIndex) => <>
        <Header height={240 + 64 + 32} distance={240} offset={-240} shadow>
          <Title height={240 + 64}/>
          <div style={{
            height: 32,
            width: '100%'
          }}>
            <Filter onSelect={onSelect} selectedId={selectedId}/>
          </div>
        </Header>
        <Grid/>
      </>
    }</Tabs>
    <Footer/>
  </Page>
}