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
    <Header height={64 + 32}>
      <Notification title="Next 6 is out!">
        Next 6 is out! — Babel 7, App Component, Improved stacktraces, Improved static export. Saturday, April 28th 2018
      </Notification>
      <Navbar/>
    </Header>
    <Title/>
    <Tabs data={['all', 'finace', 'news', 'tool', 'personal', 'heart']}>{
      (onSelect, selectedId, selectedIndex) => <>
        <Header height={32} distance={8 * 30} offset={64 + 32}>
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